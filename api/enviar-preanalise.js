const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ success: false, message: 'Método não permitido' });
    }

    try {
        // O body pode chegar como string dependendo do content-type
        let dados = req.body;
        if (typeof dados === 'string') {
            try { dados = JSON.parse(dados); } catch (e) { dados = {}; }
        }
        dados = dados || {};

        if (!dados.cnpj || !dados.origem || !dados.faturamento) {
            return res.status(400).json({
                success: false,
                message: 'Dados obrigatórios faltando (CNPJ, Origem, Faturamento).'
            });
        }

        const linha = '='.repeat(50);
        const sub = '-'.repeat(50);

        let conteudo = 'PRÉ-ANÁLISE COMERCIAL VENTURA FIDC\n';
        conteudo += linha + '\n\n';
        conteudo += 'Data da Submissão: ' + new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }) + '\n\n';

        conteudo += 'INFORMAÇÕES BÁSICAS\n' + sub + '\n';
        conteudo += 'Origem da Indicação: ' + (dados.origem || 'N/A') + '\n';
        conteudo += 'Tempo de Relacionamento: ' + (dados.relacionamento || 'N/A') + ' meses\n';
        conteudo += 'CNPJ: ' + (dados.cnpj || 'N/A') + '\n';
        conteudo += 'Razão Social: ' + (dados.razaoSocial || 'N/A') + '\n\n';

        conteudo += 'DADOS FINANCEIROS\n' + sub + '\n';
        conteudo += 'Faturamento Médio Mensal: ' + (dados.faturamento || 'N/A') + '\n';
        conteudo += 'Volume Pretendido/Operado: ' + (dados.volume || 'N/A') + '\n\n';

        conteudo += 'CARACTERÍSTICAS DA OPERAÇÃO\n' + sub + '\n';
        conteudo += 'Prazo de Entrega: ' + (dados.prazo || 'N/A') + '\n';
        conteudo += '% de Mercadoria Performada: ' + (dados.performada || '0') + '%\n';
        conteudo += 'Modalidade de Recebíveis: ' + (dados.modalidade || 'N/A') + '\n\n';

        conteudo += 'INFORMAÇÕES COMPLEMENTARES\n' + sub + '\n';
        conteudo += 'Observações: ' + (dados.observacoes || 'N/A') + '\n\n';

        conteudo += linha + '\n';
        conteudo += 'Formulário enviado via Pré-Análise Comercial Ventura FIDC\n';

        const porta = parseInt(process.env.SMTP_PORT || '465', 10);

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: porta,
            secure: porta === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        });

        const escapeHtml = (s) => String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: 'cadastro@venturainvest.com.br',
            replyTo: process.env.SMTP_USER,
            subject: 'Pré-Análise Comercial - ' + (dados.razaoSocial ? dados.razaoSocial + ' (' + dados.cnpj + ')' : dados.cnpj),
            text: conteudo,
            html: '<pre style="font-family:monospace;font-size:13px">' + escapeHtml(conteudo) + '</pre>'
        });

        return res.status(200).json({
            success: true,
            message: 'Formulário enviado com sucesso para cadastro@venturainvest.com.br!'
        });

    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return res.status(500).json({
            success: false,
            message: 'Erro ao enviar formulário. Por favor, tente novamente.',
            error: error.message
        });
    }
};
