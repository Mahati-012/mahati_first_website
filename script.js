document.addEventListener('DOMContentLoaded', (event) => {
    const songElements = document.querySelectorAll('.song');
    
    songElements.forEach(song => {
        song.addEventListener('click', () => {
            const songTitle = song.querySelector('h2').innerText;
            const songAlbum = song.querySelector('p:nth-child(2)').innerText.split(': ')[1];
            const songReleased = song.querySelector('p:nth-child(3)').innerText.split(': ')[1];
            const songDescription = song.querySelector('p:nth-child(4)').innerText.split(': ')[1];

            alert(`Title: ${songTitle}\nAlbum: ${songAlbum}\nReleased: ${songReleased}\nDescription: ${songDescription}`);
        });
    });
});
