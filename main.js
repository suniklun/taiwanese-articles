// 修改資料結構，使用 URL 而不是本地檔案路徑
const data = {
    years: ['114','113', '112', '111', '110', '109','108'].sort((a, b) => b - a),  // 確保年份由大到小排序
    groups: ['教師與社會組','高中組', '國中組', '國小組'],  // 固定組別順序
    specialGroups: {  // 新增特殊年份的額外組別
        '109': ['教師組', '社會組', '高中組', '國中組', '國小組'],
        '108': ['教師組', '社會組', '高中組', '國中組', '國小組']
    },
    audioLinks: {
        '114': 'https://jen-pin.com.tw/news_intro.php?id=425',
        '113': 'https://jen-pin.com.tw/news_intro.php?id=347',
        '112': 'https://jen-pin.com.tw/news_intro.php?id=299',
        '111': 'https://jen-pin.com.tw/news_intro.php?id=229',
        '110': 'https://jen-pin.com.tw/news_intro.php?id=158',
        '109': 'https://jen-pin.com.tw/news_intro.php?id=89'
    },
    pdfs: {
        '115': {
            '教師與社會組': 'https://suniklun.github.io/taiwanese-articles/',
            '高中組': 'https://drive.google.com/file/d/1ndpTdJDoot8qMmWjdKKmWtb36w8djP9C/view?usp=drive_link',
            '國中組': 'https://drive.google.com/file/d/13ErwSVmDqwQpTgg02o9Wb-gP9ltWkB7s/view?usp=drive_link',
            '國小組': 'https://drive.google.com/file/d/1IRNtFmQt3Y_14gv05SSJYGmvRcpTxhR3/view?usp=drive_link'
        },
        '114': {
            '教師與社會組': 'https://drive.google.com/file/d/1LlImE9JYOg3-qlly1FX4X7KuZtgKIG9R/view?usp=drivesdk',
            '高中組': 'https://drive.google.com/file/d/1m1SLf3WQYbj0q2OhZnxxH9Iw768KFA1H/view?usp=drive_link',
            '國中組': 'https://drive.google.com/file/d/1osVIL6saCXruZaBMeANJiX9JgSgmxh3t/view?usp=drive_link',
            '國小組': 'https://drive.google.com/file/d/11N_EzYvJkN5aahM-03yattSkxv5rf2Gs/view?usp=drive_link'
        },
        '113': {
            '教師與社會組': 'https://drive.google.com/file/d/1i1235RwkpNIEMARtBYz5MmH8QKXRUg3j/view?usp=sharing',
            '高中組': 'https://drive.google.com/file/d/1GS5O-fIe9IiPdHbZOJWlAuQbsq45loIF/view?usp=drive_link',
            '國中組': 'https://drive.google.com/file/d/1WgnZAN8RP3l0h1pMNU9aM-QSvSPxVv-9/view?usp=drive_link',
            '國小組': 'https://drive.google.com/file/d/1AIIsHSPNHPXm09QkDnmnVsOuiKvZAvQw/view?usp=drive_link'
        },
        '112': {
            '教師與社會組': 'https://drive.google.com/file/d/1UlQjz8PzM3EySgtoMIvBGYT8QWBDpgku/view?usp=sharing',
            '高中組': 'https://drive.google.com/file/d/1aqYU1AGKmoATnlb9pndxpe45QQDE8NCf/view?usp=drive_link',
            '國中組': 'https://drive.google.com/file/d/1ZD6IJ7hDFPlLFnWHSfw2jc6Q-KWjv7JG/view?usp=drive_link',
            '國小組': 'https://drive.google.com/file/d/1YB1WfdqHdh3BJaYhp6zyK4Zf5VCHgez8/view?usp=drive_link'
        },
        '111': {
            '教師與社會組': 'https://drive.google.com/file/d/1rlqvVydtX7ZtNikwLKEIjs1FyZ7Ptnwr/view?usp=drive_link',
            '高中組': 'https://drive.google.com/file/d/1CnZbgoz42CPLDgYteK-0TG_ZmRv27vpp/view?usp=drive_link',
            '國中組': 'https://drive.google.com/file/d/1yL_ydKLo8o5mPdR622Rtxdzlmbbn82rj/view?usp=drive_link',
            '國小組': 'https://drive.google.com/file/d/1Mv13U6SuWN7DregY76yYaf9Odu-cBdOs/view?usp=drive_link'
        },
        '110': {
            '教師與社會組': 'https://drive.google.com/file/d/16E0pCBygIhOboCUa-50ufhxJmx8eh9Hc/view?usp=drive_link',
            '高中組': 'https://drive.google.com/file/d/1vIQgcCXWsMOOTOZICY078fXhqAar292A/view?usp=drive_link',
            '國中組': 'https://drive.google.com/file/d/12iwHcK0qnoOKj-HjcgIlOo9pMIMZtjyZ/view?usp=drive_link',
            '國小組': 'https://drive.google.com/file/d/1fevEmd7HH9mwNLn_9UQPKwcbHzjLjeX3/view?usp=drive_link'
        },
        '109': {
            '教師組': 'https://drive.google.com/file/d/183jpU0DzTXdo89rQiaWHqSQkEopMgSNP/view?usp=drive_link',
            '社會組': 'https://drive.google.com/file/d/1N2YgbYmfUKra6Q1pdKfaqmT5wA53aZrk/view?usp=drive_link',
            '高中組': 'https://drive.google.com/file/d/19lEVfw5sE21wQC4sCerjQDTYEI3mBLl5/view?usp=drive_link',
            '國中組': 'https://drive.google.com/file/d/1d9bz-2FQEoa0XWK9-HnRnCF6QR6pXZ-8/view?usp=drive_link',
            '國小組': 'https://drive.google.com/file/d/1EBJ6lHlicR9Kmd993Z4WeQOxpNls6NBH/view?usp=drive_link'
        },
        '108': {
            '教師組': 'https://drive.google.com/file/d/11DMxXQ6TkhYIsuC_-OM28jmowQ32N-Ip/view?usp=drive_link',
            '社會組': 'https://drive.google.com/file/d/1TUNTDpnBggg_I_oEWccCd1a24asR6l0M/view?usp=drive_link',
            '高中組': 'https://drive.google.com/file/d/1IA1dNAS0lwDTm6mNfBGzLukrT72aESHR/view?usp=drive_link',
            '國中組': 'https://drive.google.com/file/d/1nsqFyH10MMNqO_O6Sjp12r9sgOa__geq/view?usp=drive_link',
            '國小組': 'https://drive.google.com/file/d/17HbDBNL8d_lqsj-V0pcsIgf8B9dhQPUp/view?usp=drive_link'
        }
    }
};

let currentYear = null;
let currentGroup = null;

// 初始化頁面
function init() {
    showHomePage();
    updateBreadcrumb();
}

// 添加顯示首頁函數
function showHomePage() {
    hideElement('yearList');
    hideElement('groupList');
    hideElement('pdfList');
    document.getElementById('homePage').classList.remove('hidden');
    currentYear = null;
    currentGroup = null;
}

// 顯示年份列表
function showYearList() {
    document.getElementById('homePage').classList.add('hidden');
    const yearList = document.getElementById('yearList');
    yearList.innerHTML = `
        <button class="back-button" onclick="showHomePage()">
            <span class="arrow">←</span> 返回首頁
        </button>
        <h2>年份選擇</h2>
        <div class="item-list">
            ${data.years.map(year => `
                <div class="item" onclick="selectYear('${year}')">
                    <span>${year}年</span>
                </div>
            `).join('')}
        </div>
    `;
    
    hideElement('groupList');
    hideElement('pdfList');
    yearList.classList.remove('hidden');
    
    currentYear = null;
    currentGroup = null;
    updateBreadcrumb();
}

// 選擇年份
function selectYear(year) {
    currentYear = year;
    showGroupList();
    updateBreadcrumb();
}

// 顯示組別列表
function showGroupList() {
    const groupList = document.getElementById('groupList');
    // 判斷是否為109年，決定要顯示的組別
    const groupsToShow = data.specialGroups[currentYear] || data.groups;
    
    groupList.innerHTML = `
        <button class="back-button" onclick="showYearList()">
            <span class="arrow">←</span> 返回年份選擇
        </button>
        <h2>${currentYear}年度組別</h2>
        <div class="item-list">
            ${groupsToShow.map(group => `
                <div class="item" onclick="selectGroup('${group}')">
                    <span>${group}</span>
                </div>
            `).join('')}
        </div>
        ${data.audioLinks[currentYear] ? `
            <div class="audio-button-container">
                <button class="audio-button" onclick="openAudio('${data.audioLinks[currentYear]}')">
                    <span class="audio-icon">🔊</span> 聽音檔
                </button>
            </div>
        ` : ''}
    `;
    
    hideElement('yearList');
    hideElement('pdfList');
    groupList.classList.remove('hidden');
}

// 選擇組別
function selectGroup(group) {
    currentGroup = group;
    showPdfList();
    updateBreadcrumb();
}

// 顯示 PDF 列表
function showPdfList() {
    const pdfList = document.getElementById('pdfList');
    const pdfUrl = data.pdfs[currentYear][currentGroup];  // 現在直接獲取 URL
    
    pdfList.innerHTML = `
        <button class="back-button" onclick="showGroupList()">
            <span class="arrow">←</span> 返回組別選擇
        </button>
        <h2>${currentYear}年 ${currentGroup}</h2>
        <div class="item-list">
            <div class="item" onclick="openPdf('${pdfUrl}')">
                <div class="pdf-icon">📄</div>
                <div class="pdf-title">朗讀稿</div>
            </div>
        </div>
    `;
    
    hideElement('yearList');
    hideElement('groupList');
    pdfList.classList.remove('hidden');
}

// 修改麵包屑導航
function updateBreadcrumb() {
    const breadcrumb = document.getElementById('breadcrumb');
    let html = ''
    if (currentYear) {
        html += ` > <a href="#" onclick="showYearList()">${currentYear}年</a>`;
    }
    
    if (currentGroup) {
        html += ` > <a href="#" onclick="showGroupList()">${currentGroup}</a>`;
    }
    
    breadcrumb.innerHTML = html;
}

// 隱藏元素
function hideElement(id) {
    document.getElementById(id).classList.add('hidden');
}

// 開啟 PDF
function openPdf(url) {
    window.open(url, '_blank');
}

// 開啟音檔連結
function openAudio(url) {
    window.open(url, '_blank');
}

// 顯示說明視窗
function showInfo() {
    const modal = document.getElementById('infoModal');
    modal.classList.add('show');
}

// 隱藏說明視窗
function hideInfo() {
    const modal = document.getElementById('infoModal');
    modal.classList.remove('show');
}

// 點擊視窗外部關閉視窗
document.addEventListener('click', function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        hideInfo();
    }
});

// 頁面載入時初始化
document.addEventListener('DOMContentLoaded', init); 



