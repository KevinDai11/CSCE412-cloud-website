const style1_path = './css/style.css';
const style2_path = './css/style2.css';

const toggleStyleSheet = () => {
    const elem = document.getElementById('style');
    if (elem.getAttribute('href') === style1_path) {
        elem.setAttribute('href', style2_path);
        localStorage.setItem('stylesheet', style2_path);
    }
    else {
        elem.setAttribute('href', style1_path);
        localStorage.setItem('stylesheet', style1_path);
    }
}


window.onload = () => {
    let saved_style = localStorage.getItem('stylesheet');
    console.log(saved_style)
    if (saved_style === null) saved_style = style1_path;
    document.getElementById('style').setAttribute('href', saved_style);
}