
// حساب ارباح القاعات و التأجير $$$$ $$$$$$$$$$$$$$$$$$ $$$$
// التعليقات عشان بالعافية افهم التاسك !!


function calculateProfit(hoursPerDay, pricePerHour) {
  let costRate; // تكاليف التشغيل

  if (pricePerHour < 40) { // شرط التكاليف اذا سعر الساعه اقل من 40 
    costRate = 0.4;// تكاليف التشغيل 40%
  } else {
    costRate = 0.15;// تكاليف التشغيل 15%
  }

  let weeklyIncome = hoursPerDay * pricePerHour * 6; // 6 ايام الاسبوع
  let weeklyCosts = weeklyIncome * costRate; // تكاليف التشغيل الاسبوعية
  let weeklyProfit = weeklyIncome - weeklyCosts; // الربح الاسبوعي

  let monthlyProfit = weeklyProfit * 4; // الربح الشهري (4 اسابيع في الشهر)

  console.log(`Operating costs: ${costRate * 100}%`); 
  console.log(`Weekly net profit: ${weeklyProfit}`);
  console.log(`Monthly net profit: ${monthlyProfit}`);
}

calculateProfit(8, 30); // مثال على الاستخدام: 8 ساعات في اليوم، 30 شيكل في الساعة


