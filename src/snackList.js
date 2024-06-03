const snackList = [
    { name: "Chips Ahoy", img: "https://imgs.search.brave.com/4paTl2LRnA_v6ut1iWTKRkp9NuOVjPNUrp84jHr4FXA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90YXJn/ZXQuc2NlbmU3LmNv/bS9pcy9pbWFnZS9U/YXJnZXQvR1VFU1Rf/Nzk2OGJhOTAtNGZm/Zi00ZTY0LThmYWIt/NjA1NjkwYmMwNWUx/P3dpZD04MDAmaGVp/PTgwMCZxbHQ9ODAm/Zm10PXBqcGVn" },
    { name: "Cheeze Its", img: "https://imgs.search.brave.com/Kp8RSgtcutcgWvBOOvCnbQuX1TasDUKw0Pj3MEGETdI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFMU0RrU2s1QUwu/anBn" },
    { name: "Oreos", img: "https://imgs.search.brave.com/YcbVBLVvQ6RWh-0qW44ph_7X1RMf7NV89QwcyHcokCM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzkxLzkzLzg5/LzM2MF9GXzI5MTkz/ODk3NV9qUFNyTmVU/SmloUjZIUDFjWlhJ/Yll2UEEwMXFhUk5k/MS5qcGc" },
    { name: "Pretzels", img: "https://imgs.search.brave.com/WBX7MqKdIhS5BZhyf-kVsYlOUdRUKyA4QxwQgY1av1Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bGFudHpzYnVsa2Zv/b2RzLmNvbS9zdGF0/aWMvZWNvbW1lcmNl/LzE0OS8xNDk4NjIv/bWVkaWEvY2F0YWxv/Zy9wcm9kdWN0L2Nh/Y2hlLzEvaW1hZ2Uv/OWRmNzhlYWIzMzUy/NWQwOGQ2ZTVmYjhk/MjcxMzZlOTUvZC9v/L2RvdHNfcHJldHpl/bHMvd3d3LmxhbnR6/c2J1bGtmb29kcy5j/b20tOTA3LTMxLnBu/Zw" },
    { name: "Cheetos", img: "https://imgs.search.brave.com/U2T63C4hQS1Wfnb2ykAemowt4XWd_k4YFBdlzn0zKJU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90YXJn/ZXQuc2NlbmU3LmNv/bS9pcy9pbWFnZS9U/YXJnZXQvR1VFU1Rf/NDgzYmE5Y2EtMTA4/NC00ODRhLWE1YTkt/NWNjNWFhMWIwZmU4/P3dpZD04MDAmaGVp/PTgwMCZxbHQ9ODAm/Zm10PXBqcGVn" },
    { name: "Chips", img: "https://imgs.search.brave.com/JQ18rJFr_6pbQf0dkuGB_XYZ6nPjCLb255f8l84Fe-U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2lsbW9ud2hvbGVz/YWxlLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNS9s/YXlzLW9yaWdpbmFs/LmpwZw" }
];

function urlStyle(str) {
    return str.toLowerCase().replace(" ", "-");
}

export { snackList, urlStyle };