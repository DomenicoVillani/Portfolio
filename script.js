document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-cv');
    const anno = document.getElementById("anno")
    const etaPers = document.getElementById("miaEta")
    annoAttuale = new Date().getFullYear();
    anno.textContent=annoAttuale

    downloadBtn.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'FileScaricare/CVDomenicoVillani.pdf';
        link.download = 'CVDomenicoVillani.pdf';
        link.click();
    });

    function calcolaEta(compleanno) {
        const oggi = new Date();
        const annoOggi = oggi.getFullYear();
        
        const compleannoQuestAnno = new Date(annoOggi, compleanno.getMonth(), compleanno.getDate());
    
        let eta = annoOggi - compleanno.getFullYear();
        if (oggi < compleannoQuestAnno) {
            eta--;
        }
    
        return eta;
    }
    
    const mioCompleanno = new Date(1999, 6, 7);
    const eta = calcolaEta(mioCompleanno);
    etaPers.textContent=eta
});
