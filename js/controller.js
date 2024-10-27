function updateView() {
    let page = model.app.currentPage;
    console.log('Current page:', page);

    if (page === 'mainpage') {
        console.log('Navigating to main page');
        mainpageView();
    }
  
}

function navigateToMainPage() {
    model.app.currentPage = 'mainpage';
    updateView();
}