let money = 0;
let moneyPerClick = 1;
let upgradeCost = 10;

const moneyDisplay = document.getElementById('money');
const perClickDisplay = document.getElementById('per-click');
const cookieBtn = document.getElementById('cookie');
const upgradeCostSpan = document.getElementById('upgrade-cost');
const buyUpgradeBtn = document.getElementById('buy-upgrade');

function updateDisplay() {
    moneyDisplay.textContent = money;
    perClickDisplay.textContent = moneyPerClick;
    upgradeCostSpan.textContent = upgradeCost;
    buyUpgradeBtn.disabled = money < upgradeCost;
}

cookieBtn.addEventListener('click', () => {
    money += moneyPerClick;
    updateDisplay();
});

buyUpgradeBtn.addEventListener('click', () => {
    if (money >= upgradeCost) {
        money -= upgradeCost;
        moneyPerClick += 1;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        updateDisplay();
    }
});

// Initialize display on load
updateDisplay();
