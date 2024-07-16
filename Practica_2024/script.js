function vibor(number) {
    var profiles = document.querySelectorAll('.profile');
    profiles.forEach(function(profile) {
        profile.classList.remove('active');
    });
    document.getElementById('profile' + number).classList.add('active');
}

