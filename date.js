// 日期对象

// year 年份
// month 月份 1-11
// date 日期
// 越界自动进（退）位
// getFullYear()/getMonth()/getDate()
new Date(year, month - 1, date)

// 当前第一天
new Date(year, month - 1, 1)

// 当月最后一天
new Date(year, month, 0)


// 星期一 - 星期天
// 星期天对应着 0
[1, 2, 3, 4, 5, 6, 0]

