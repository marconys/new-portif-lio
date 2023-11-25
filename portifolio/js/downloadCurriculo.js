document.getElementById('downloadCurriculo').addEventListener('click', function() {
    // Caminho para o arquivo PDF
    var pdfPath = 'curriculo/marconyCurriculo.pdf';

    // Cria um link
    var link = document.createElement('a');
    link.href = pdfPath;

    // Define o atributo de download com o nome do arquivo
    link.download = 'marconyCurriculo.pdf';

    // Simula o clique no link para iniciar o download
    link.click();
});
