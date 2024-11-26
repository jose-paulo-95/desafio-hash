# Relatório de Bug

## Título
Email de recuperação de senha não é enviado, mas sistema mostra mensagem de sucesso

## Descrição
O sistema exibe a mensagem "E-mail enviado" após solicitar recuperação de senha, porém o email nunca é recebido pelo usuário.

## Passos para Reproduzir
1. Acessar a página de login
2. Clicar em "Esqueci minha senha"
3. Inserir email válido: usuario.teste@email.com
4. Clicar em "Enviar"
5. Aguardar 5 minutos
6. Verificar caixa de entrada e spam do email

## Resultado Esperado
- Email de recuperação de senha recebido na caixa de entrada
- Link funcional para redefinição de senha

## Resultado Atual
- Mensagem "E-mail enviado" é exibida
- Nenhum email é recebido (nem na caixa de entrada, nem no spam)

## Prioridade: ALTA
Justificativa:
1. Impacto no Negócio:
   - Usuários não conseguem recuperar acesso às suas contas
   - Potencial perda de vendas
   - Aumento no volume de chamados no suporte

2. Impacto na Segurança:
   - Falsa sensação de segurança para o usuário
   - Possível vulnerabilidade no sistema de autenticação

## Ambiente
- Navegador: Chrome 120.0
- Sistema Operacional: Windows 11
- Data/Hora: 2024-01-20 14:30 