function loadRecentSearches() {
    const searches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    searches.forEach(search => {
        addRecentSearch(search);
    });
}
function saveRecentSearches(searches) {
    if (searches.length > 5) {
        searches.shift(); // Remove the oldest search if more than 5
    }
    localStorage.setItem('recentSearches', JSON.stringify(searches));
}
function addRecentSearch(search) {
    const listSearch = $('<li class="list-search"></li>');
    const searchText = $('<span class="recent-search-text"></span>').text(search);
    const removeSearch = $('<span class="remove-recent"></span>')
    listSearch.append(searchText);
    listSearch.append(removeSearch);
    $('.recent-search').append(listSearch);
}
const serachHeader = () => {
    $("#search").on('focus', () => {
        $("#data-list").show()
        $(".recent-search-text").each((i, el) => {
            $(el).click(() => {
                $("#search").val($(el).text());
            })
        })
        $(".list-search").each((i, el) => {
            $(el).click(() => {
                $("#search").val($(el).text());
            })
        })
        $(".remove-recent").each((i, el) => {
            $(el).click((e) => {
                e.stopPropagation();
                $(el).parent().remove();
                const search = $(el).prev().text();
                const searches = JSON.parse(localStorage.getItem('recentSearches')) || [];
                const updatedSearches = searches.filter(s => s !== search);
                saveRecentSearches(updatedSearches);
            })
        })
        $("#clear-recent").click(() => {
            $(".remove-recent").parent().remove()
            localStorage.setItem('recentSearches', JSON.stringify([]));
        })
    })
    $('#search').on('blur', () => {
        setTimeout(function () {
            $('#data-list').hide();
            $(".recent-search").show()
            $(".trending-topic").show()
            $(".search-on-keyup").hide()
        }, 200);
    });
    $("#search").on('keyup', () => {
        $(".recent-search").hide()
        $(".trending-topic").hide()
        $(".search-on-keyup").show()

        if ($(this).val() == "") {
            $(".recent-search").show()
            $(".trending-topic").show()
            $(".search-on-keyup").hide()
        }
    })
    $(".btnSearch").on('click', () => {
        // demo search
        const keyword = $("#search").val();
        if (keyword) {
            const searches = JSON.parse(localStorage.getItem('recentSearches')) || [];
            if (!searches.includes(keyword)) {
                searches.push(keyword);
                saveRecentSearches(searches);
                addRecentSearch(keyword);
            }
        }
        const pathname = window.location.pathname.split("/welcome-page.html")[0]
        window.location.href = `${pathname}/page-search.html?search=${keyword}`;
    })
    $("#search").on('keypress', (event) => {
        if (event.which == 13) { // enter key
            event.preventDefault();
            const keyword = $("#search").val();
            if (keyword) {
                const searches = JSON.parse(localStorage.getItem('recentSearches')) || [];
                if (!searches.includes(keyword)) {
                    searches.push(keyword);
                    saveRecentSearches(searches);
                    addRecentSearch(keyword);
                }
            }
            const pathname = window.location.pathname.split("/welcome-page.html")[0]
            window.location.href = `${pathname}/page-search.html?search=${keyword}`;
        }
    })
}
const cleanSearch = () => {
    $("#search-close").on("click", function () {
        $("#search-input").val("");
        $("#search-close").hide();
    })
}
const searchPage = () => {
    $("#search-input").on("keyup", function (event) {
        $("#search-close").show();
        if ($(this).val() == "") {
            $("#search-close").hide();
        }
        if (event.keyCode == 13) { // enter key
            event.preventDefault();
            const keyword = $("#search-input").val();
            if (keyword) {
                const searches = JSON.parse(localStorage.getItem('recentSearches')) || [];
                if (!searches.includes(keyword)) {
                    searches.push(keyword);
                    saveRecentSearches(searches);
                    addRecentSearch(keyword);
                }
            }
            const pathname = window.location.pathname
            window.location.href = `${pathname}?search=${keyword}`;
        }
    })
}


const initSearchPage = () => {
    const params = new URLSearchParams(window.location.search);
    if ($("#search-input").length > 0) {
        searchPage()
        cleanSearch()
        $("#keyWord").text(params.get('search'));
        $(".searchKey").text(params.get('search'));
    }
}

export function searchModule() {
    initSearchPage()
    serachHeader()
    loadRecentSearches()
}