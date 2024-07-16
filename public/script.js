document.addEventListener('DOMContentLoaded', () => {
    let prefix = '';

    // Add event listeners for the icons
    document.getElementById('url-icon').addEventListener('click', () => {
        prefix = '';
    });

    document.getElementById('call-icon').addEventListener('click', () => {
        prefix = 'tel:';
    });

    document.getElementById('wp-icon').addEventListener('click', () => {
        prefix = 'https://wa.me/';
    });

    document.getElementById('email-icon').addEventListener('click', () => {
        prefix = 'mailto:';
    });

    document.getElementById('generate-btn').addEventListener('click', () => {
        const input = document.getElementById('url-input').value;
        const url = prefix + input;

        fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url })
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('display').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    document.getElementById('clear-btn').addEventListener('click', () => {
        document.getElementById('url-input').value = '';
        document.getElementById('display').innerHTML = '';
    });

    function downloadqr() {
        const img = document.querySelector('#display img');
        if (!img) {
            console.error('No QR code found');
            return;
        }

        const link = document.createElement('a');
        link.href = img.src;
        link.download = 'qrcode.png';
        link.click();
    }

    document.getElementById('download').addEventListener('click', downloadqr);

    document.getElementById('bg1').addEventListener('click', ()=>{
        document.getElementById('bg1').style = 'background-color:#ccccd3';
        document.getElementById('bg2').style = 'background-color:#F1F1F2';
        document.getElementById('bg3').style = 'background-color:#F1F1F2';
        document.getElementById('bg4').style = 'background-color:#F1F1F2';
        document.getElementById('url-input').placeholder = 'https://main--rtbodybalance.netlify.app'
    })

    document.getElementById('bg2').addEventListener('click', ()=>{
        document.getElementById('bg1').style = 'background-color:#F1F1F2';
        document.getElementById('bg2').style = 'background-color:#ccccd3';
        document.getElementById('bg3').style = 'background-color:#F1F1F2';
        document.getElementById('bg4').style = 'background-color:#F1F1F2';
        document.getElementById('url-input').placeholder = 'Enter Contact Number'
    })

    document.getElementById('bg3').addEventListener('click', ()=>{
        document.getElementById('bg1').style = 'background-color:#F1F1F2';
        document.getElementById('bg2').style = 'background-color:#F1F1F2';
        document.getElementById('bg3').style = 'background-color:#ccccd3';
        document.getElementById('bg4').style = 'background-color:#F1F1F2';
        document.getElementById('url-input').placeholder = 'Enter Whatsapp Number'
    })

    document.getElementById('bg4').addEventListener('click', ()=>{
        document.getElementById('bg1').style = 'background-color:#F1F1F2';
        document.getElementById('bg2').style = 'background-color:#F1F1F2';
        document.getElementById('bg3').style = 'background-color:#F1F1F2';
        document.getElementById('bg4').style = 'background-color:#ccccd3';
        document.getElementById('url-input').placeholder = 'abc@gmail.com'
    })
});
