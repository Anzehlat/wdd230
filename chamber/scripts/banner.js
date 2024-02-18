document.addEventListener('DOMContentLoaded', function () {
    const meetAndGreetBanner = document.getElementById('meetAndGreetBanner');
    const closeBannerBtn = document.getElementById('closeBannerBtn');

    // Check if it's Monday, Tuesday, or Wednesday
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const isWeekday = today >= 1 && today <= 3;

    if (isWeekday) {
        meetAndGreetBanner.style.display = 'block';

        closeBannerBtn.addEventListener('click', function () {
            meetAndGreetBanner.style.display = 'none';
        });
    }
});
