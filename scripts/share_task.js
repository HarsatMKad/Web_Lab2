function showShareWindow(){
    const alertSection = document.getElementById("alert");
    alertSection.innerHTML = `
        <div class="blur_background">
            <div class="share_box">
                <button class="share_box_button">
                    <img src="../images/share_button_copy.svg" alt="">
                </button>

                <button class="share_box_button">
                    <img src="../images/share_button_vk.svg" alt="">
                </button>

                <button class="share_box_button">
                    <img src="../images/share_button_telegram.svg" alt="">
                </button>

                <button class="share_box_button">
                    <img src="../images/share_button_whatsapp.svg" alt="">
                </button>

                <button class="share_box_button">
                    <img src="../images/share_button_facebook.svg" alt="">
                </button>
            </div>
        </div>
    `;

    alertSection.querySelector(".blur_background").addEventListener("click", closeAlert)
}

function closeAlert() {
    const alertSection = document.getElementById("alert");
    alertSection.innerHTML = ``;
}