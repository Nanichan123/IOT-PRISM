document.addEventListener('DOMContentLoaded', function() {
    // Splash modal logic
    const splash = document.getElementById('splash-modal');
    const authContainer = document.querySelector('.auth-container');

    function hideSplash() {
        if (splash) splash.style.display = 'none';
        if (authContainer) authContainer.style.display = '';
    }

    // Hide splash after 4 seconds or on click/tap (slower)
    if (splash) {
        splash.addEventListener('click', hideSplash);
        setTimeout(hideSplash, 4000);
    }

    // Auth tab logic
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const regRole = document.getElementById('reg-role');
    const patientFields = document.getElementById('patient-fields');
    const doctorFields = document.getElementById('doctor-fields');
    const gotoRegister = document.getElementById('goto-register');
    const gotoLogin = document.getElementById('goto-login');

    function showTab(tab) {
        if (tab === 'login') {
            loginForm.classList.add('active');
            registerForm.classList.remove('active');
            loginTab.classList.add('active');
            registerTab.classList.remove('active');
        } else {
            loginForm.classList.remove('active');
            registerForm.classList.add('active');
            loginTab.classList.remove('active');
            registerTab.classList.add('active');
        }
    }

    function toggleRoleFields() {
        const role = regRole.value;
        patientFields.style.display = (role === 'patient') ? 'block' : 'none';
        doctorFields.style.display = (role === 'doctor') ? 'block' : 'none';
    }

    // Tab switching
    loginTab.addEventListener('click', function() { showTab('login'); });
    registerTab.addEventListener('click', function() { showTab('register'); });
    if (gotoRegister) gotoRegister.addEventListener('click', function(e) { e.preventDefault(); showTab('register'); });
    if (gotoLogin) gotoLogin.addEventListener('click', function(e) { e.preventDefault(); showTab('login'); });

    // Registration role switching
    if (regRole) regRole.addEventListener('change', toggleRoleFields);

    // Set initial state
    showTab('login');
    toggleRoleFields();

    // Logo meaning modal logic
    const authLogo = document.getElementById('auth-logo');
    const logoMeaningModal = document.getElementById('logo-meaning-modal');
    const logoMeaningClose = document.getElementById('logo-meaning-close');

    if (authLogo && logoMeaningModal) {
        authLogo.addEventListener('click', function(e) {
            e.stopPropagation();
            logoMeaningModal.style.display = 'flex';
        });
    }
    if (logoMeaningClose && logoMeaningModal) {
        logoMeaningClose.addEventListener('click', function() {
            logoMeaningModal.style.display = 'none';
        });
    }
    // Close modal when clicking outside content
    if (logoMeaningModal) {
        logoMeaningModal.addEventListener('click', function(e) {
            if (e.target === logoMeaningModal) {
                logoMeaningModal.style.display = 'none';
            }
        });
    }
});