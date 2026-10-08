---
title: "CampaignTime"
description: "战役时间轴上任意时刻（或任意时长）的值类型：内部只有一个 long tick 计数，单位定义由 CampaignTimeModel 在开局快照，绝对值与相对值必须靠 To* / Elapsed* / Remaining* 三族属性分清。"
---
# CampaignTime

**Namespace:** `TaleWorlds.CampaignSystem`
**Type:** `public struct CampaignTime : IComparable<CampaignTime>`
**Source:** `TaleWorlds.CampaignSystem/CampaignTime.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`CampaignTime` 是战役时间轴上任意一个时刻的值类型。整个战役模式里的「什么时候」都靠它表达：任务什么时候到期、部队上次进城的时刻、领主被囚禁了多久、下一次联盟是哪天结束、某个家族在多少天内不能被打。它内部只有一个 `long` 字段，所有「天 / 小时 / 分钟 / 季 / 年」都是在这个 tick 计数上做单位换算得到的。

它同时承担两种语义：**时间点**（一个绝对时刻）和**时长**（两个时刻之间隔了多久）。两者共用同一个类型，区别只在于你怎么解释它 —— 这是理解本页的关键，也是这个 API 最容易出错的地方。源码里没有 `TimeSpan` 式的第二类型，`operator -` 直接把两个 tick 相减再包回同一个结构体。

因为它是值类型又实现了 `IComparable<CampaignTime>`，你可以直接比大小、放进 `SortedList`、当字典键，也可以把它写成 `CampaignBehaviorBase` 的字段交给 `SyncData` 存进存档 —— 它内部那个 `long` 本身就带着 `[SaveableField]`，所以存档系统把它当一个整数写盘。

## 心智模型

把 `CampaignTime` 想成「一个计数器 + 一张单位换算表」。

计数器是那个 `private readonly long` 的 tick 字段。它不可变，所以 `CampaignTime` 的一切「运算」都是造一个新的 `CampaignTime`，不是原地修改 —— 传参时不需要 `ref`，但反过来，把一个 `CampaignTime` 传进方法里让方法改，是改不到调用方的（这一点和 `ExplainedNumber` 需要 `ref` 的场景正好相反，因为那个类型内部是可变的）。

换算表是那一批静态字段（`SunRise`、`HoursInDay`、`DaysInWeek`、`SeasonsInYear`，以及派生出的每单位 tick 数）。它们**不是编译期常量**，而是 `Initialize()` 从 `Campaign.Current.Models.CampaignTimeModel` 抄进来的快照。三个直接推论：

- 同一串 tick 在不同模型配置下换算出的「天」可能不同。默认模型里 `DaysInWeek` 在普通加速模式下是 7、在快速加速模式下是 3，`WeeksInSeason` 分别是 3 和 2 —— 也就是一季可以是 21 天，也可以是 6 天。
- `Initialize()` 之前这些字段全是 0，任何换算都会退化（乘出来是 0 tick，除出来是 `NaN` / `Infinity`）。
- `Initialize()` 由 `Campaign` 在启动流程里调用，而且**排在 `GameManager.OnGameStart` 之后**。也就是说，mod 的 `OnGameStart` 回调跑的时候，这张换算表还没被填上。

读一个 `CampaignTime` 有三族完全不同的读法，必须分清：

| 你想知道的事 | 用哪一族 | 语义 |
| --- | --- | --- |
| 这个时刻是「纪元以来的第几天 / 第几小时」 | `To*` | 绝对量，从 tick 0 起算 |
| 这个时刻离**现在**已经过去了多久 | `Elapsed*UntilNow` | 相对量，正数表示过去 |
| 这个时刻离**现在**还有多久 | `Remaining*FromNow` | 相对量，正数表示未来 |

`ToDays` 是这三族里最容易被误用的一个：它读的是**绝对时间戳**，不是「从现在起」。默认模型的开局时刻是第 1084 年，`CampaignTime.Now.ToDays` 大约在 91000 上下；想得到时长，必须先做减法 —— `(end - CampaignTime.Now).ToDays`。

第二个要点：**两个 `CampaignTime` 相减，得到的还是 `CampaignTime`**。相减的结果是一个「基准点为 0 的时长」，你要用 `.ToDays` / `.ToHours` / `.ToSeconds` 把它读成数字，而不是指望它自带单位。反过来，对一个「时长」调用 `IsPast` / `IsFuture` / `RemainingDaysFromNow` 是没有意义的 —— 那些属性会拿它去和 `CampaignTime.Now` 比，而时长本身并不指向任何真实时刻。

第三个要点：静态构造分两族，名字里带 `FromNow` 的才是相对现在。

- `CampaignTime.Days(7f)` 造的是「纪元后第 7 天」这个绝对时刻 —— 也就是战役开局那一周，早就是过去了。但它同时也是「7 天这么多 tick」，所以当作时长字面量用是对的。
- `CampaignTime.DaysFromNow(7f)` 造的是「从现在起 7 天后」这个绝对时刻。绝大多数玩法逻辑要的是这一个。

第四个要点：`CampaignTime` 是 struct，没有 `null`。「这个时间还没被设置」在源码里用两种哨兵表达：`CampaignTime.Zero`（tick 0，语义是「从未发生过」）和 `CampaignTime.Never`（内部就是 `long.MaxValue`，语义是「永不到期」）。因为 `Never` 的 tick 巨大，它的 `IsFuture` 是 `true`、`RemainingYearsFromNow` 是个天文数字，任何按「剩余时间」排序的逻辑都会被它顶到最前面。

第五个要点：存档里存的是 **tick**，不是日历。同一个存档在换了 `CampaignTimeModel` 单位定义的 mod 环境下读出来，tick 一模一样，但显示成的「第几季第几天」会变。时间点本身不会漂，只有解释会漂。

## 怎么用

### 怎么拿到

`CampaignTime` 不能 `new`（唯一的构造函数是 `internal`，收裸 tick），也不该自己去拼 tick。它的值只有四个来源：当前时刻、静态工厂、别人的属性、以及两个 `CampaignTime` 的算术结果。

```csharp
// 1) 当前时刻。每一帧都在变，不要跨帧缓存它当「现在」
CampaignTime now = CampaignTime.Now;

// 2) 从现在起的偏移（玩法逻辑最常用的一族）
CampaignTime due = CampaignTime.DaysFromNow(7f);
CampaignTime soon = CampaignTime.HoursFromNow(2.5f);

// 3) 从别的对象上读一个已经存在的时刻
CampaignTime death = someHero.DeathDay;
CampaignTime banEnd = someClan.NotAttackableByPlayerUntilTime;
CampaignTime vote = someKingdomDecision.TriggerTime;

// 4) 战役起始时刻（默认模型是第 1084 年第 1 周第 9 小时）
CampaignTime epoch = Campaign.Current.Models.CampaignTimeModel.CampaignStartTime;

// 5) 本帧推进了多少战役时间 —— 这是一个「时长」，不是时刻
CampaignTime delta = CampaignTime.DeltaTime;
```

### 典型用法

最常见的三种模式是「到期判断」「冷却判断」「倒计时展示」，前两种读的是相对量，第三种要先相减再读 `To*`。

```csharp
// 到期判断：用 IsPast / IsFuture 直接问，不要自己比 ToDays
if (someIssue.IssueDueTime.IsPast)
{
    // 已经过期
}
if (_nextFairTime.IsFuture)
{
    return; // 还没到点
}

// 冷却判断：记录「上一次」的时刻，然后读它离现在过去了多久
if (_lastRecruitTime.ElapsedDaysUntilNow >= (float)CampaignTime.DaysInWeek)
{
    _lastRecruitTime = CampaignTime.Now;
    this.RecruitAgain();
}

// 同样意思的另一种写法：先相减得到时长，再读 ToDays
if ((CampaignTime.Now - _lastRecruitTime).ToDays >= CampaignTime.DaysInWeek)
{
    // ...
}
```

展示给玩家的倒计时要用 `Remaining*FromNow`，或者先相减再 `To*`；两者结果一样，前者少写一次减法。日历相关的判断（白天黑夜、季节、年份）用状态属性与日历分解属性，别自己去取模。

```csharp
// 倒计时展示
int daysLeft = (int)Math.Ceiling((_dueTime - CampaignTime.Now).ToDays);
// 也可以直接读剩余量
float daysLeft2 = _dueTime.RemainingDaysFromNow;

// 白天 / 黑夜：边界由模型给出，不要硬编码 6 点和 18 点
if (CampaignTime.Now.IsNightTime)
{
    // 夜袭逻辑
}
float hour = CampaignTime.Now.CurrentHourInDay;   // 13.5 表示下午一点半

// 日历分解
int year = CampaignTime.Now.GetYear;
CampaignTime.Seasons season = CampaignTime.Now.GetSeasonOfYear;
int dayOfSeason = CampaignTime.Now.GetDayOfSeason;   // 0 基
string shown = CampaignTime.Now.ToString();          // 本地化日期串
```

### 坑

**一、单位混用。** 把「天」当「小时」是这类 API 最经典的一处错误：`Hours(24f)` 只有在 `HoursInDay == 24` 时才等于 `Days(1f)`，而 `HoursInDay` 来自模型。想表达「一天」就写 `Days(1f)`。

```csharp
// 想表达「一天」
CampaignTime oneDay = CampaignTime.Days(1f);

// 只有当 HoursInDay == 24 时，这个才和上面等价
CampaignTime alsoOneDay = CampaignTime.Hours(24f);

// 安全写法：跟着模型走
CampaignTime safeOneDay = CampaignTime.Hours((float)CampaignTime.HoursInDay);
```

**二、漏掉 `FromNow`，或者多加一次 `Now`。** 前者造出的是开局那一刻，后者把「现在」加了两遍。这是排查「时间怎么算都不对」时的第一嫌疑。

```csharp
// 错误：这是「纪元后第 7 天」，战役开局那一周，早就是过去了
CampaignTime wrongAbsolute = CampaignTime.Days(7f);

// 正确：从现在起 7 天
CampaignTime rightAbsolute = CampaignTime.DaysFromNow(7f);

// 错误：FromNow 内部已经加过 Now，再加一次等于「现在 + 现在 + 7 天」
CampaignTime doubled = CampaignTime.Now + CampaignTime.DaysFromNow(7f);

// 正确：用不带 FromNow 的那一族当偏移量
CampaignTime fixedUp = CampaignTime.Now + CampaignTime.Days(7f);
```

**三、在战役初始化之前用。** `Initialize()` 排在 `GameManager.OnGameStart` 之后，模块加载期调用 `CampaignTime.Days(1f)` 会得到 0 tick（等于 `Zero`），读 `ToDays` 会得到 `Infinity` 或 `NaN`。时间相关的初始化一律放到 Behavior 的 `RegisterEvents()` 里，或至少等到 `CampaignEvents.OnGameLoadedEvent`。

**四、把 `ToDays` 当「过了多久」。** `CampaignTime.Now.ToDays` 是「纪元以来的总天数」（默认开局九万多），不是「今天过了多少」。同理，拿两个对象的 `ToDays` 相减虽然能凑出时长，但一旦有人改用了 `Never` 这类哨兵值，差值就会溢出成天文数字 —— 老老实实先相减。

**五、拿 `IsNow` 当「同一时刻」用。** `IsNow` 是 tick 精确相等，而 `CampaignTime.Now` 每帧都在推进，所以除了你刚从 `Now` 抄下来的那一份副本，它几乎总是 `false`。想比「是不是同一天」用 `StringSameAs`。

**六、用 `null` 判空。** `CampaignTime` 是 struct，`someTime == null` 编译不过，`default(CampaignTime)` 等价于 `Zero`。表示「永不到期」要用 `CampaignTime.Never`，判断时也要显式拿它比。

**七、工厂方法的参数类型不一致。** 毫秒 / 秒 / 分钟那一族收 `long`，小时 / 天 / 周 / 年那一族收 `float`。所以 `Seconds(1.5)` 编译不过 —— 亚秒级的偏移要用 `Milliseconds(1500)`。

**八、想读原始 tick 却读不到。** 构造函数和 `NumTicks` 都是 `internal`。mod 只能通过静态工厂造值、通过 `To*` / `Elapsed*` / `Remaining*` 读值；需要做种子、哈希或网络同步时，请用 `GetHashCode` 或 `ToMilliseconds` 这类公开出口，不要指望反射去拿那个字段。

## 关键成员

### 时间基准

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `Now` | `public static CampaignTime Now { get; }` | 当前战役时刻，内部转发到战役的时间推进器。每帧都在变，不要跨帧缓存它当「现在」 | `CampaignTime.cs:122` |
| `Never` | `public static CampaignTime Never { get; }` | 「永不到期」哨兵，内部是 `long.MaxValue`。struct 没有 null，判定「没设置」要用它 | `CampaignTime.cs:132` |
| `Zero` | `public static CampaignTime Zero { get; }` | tick 0，即纪元起点。适合当「从未发生过」的字段初值 | `CampaignTime.cs:646` |
| `DeltaTime` | `public static CampaignTime DeltaTime { get; }` | 本帧推进的战役时间量。注意它是一个**时长**，不是时刻 | `CampaignTime.cs:102` |
| `Initialize` | `public static void Initialize()` | 从 `CampaignTimeModel` 抄下全部单位定义并推出每单位 tick 数。由 `Campaign` 在 `OnGameStart` 之后调用；在此之前所有单位字段为 0 | `CampaignTime.cs:52` |

### 单位换算常量

这一组是**可写静态字段**（不是常量，也不是只读属性），值在 `Initialize()` 时被覆盖。写 mod 时永远读它们，不要硬编码数字。

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `SunRise` | `public static int SunRise;` | 白天的起始小时（默认模型为 2），`IsDayTime` 的左闭边界 | `CampaignTime.cs:686` |
| `SunSet` | `public static int SunSet;` | 白天的结束小时（默认 22），`IsDayTime` 的右开边界 | `CampaignTime.cs:689` |
| `MillisecondInSecond` | `public static int MillisecondInSecond;` | 一秒多少毫秒（1000），tick 换算链的起点 | `CampaignTime.cs:692` |
| `SecondsInMinute` | `public static int SecondsInMinute;` | 一分多少秒（60） | `CampaignTime.cs:695` |
| `MinutesInHour` | `public static int MinutesInHour;` | 一小时多少分（60） | `CampaignTime.cs:698` |
| `HoursInDay` | `public static int HoursInDay;` | 一天多少小时（24）。用它做「天 ↔ 小时」换算，别写死 24 | `CampaignTime.cs:701` |
| `DaysInWeek` | `public static int DaysInWeek;` | 一周多少天。默认模型里普通加速模式是 7、快速加速模式是 3 | `CampaignTime.cs:704` |
| `WeeksInSeason` | `public static int WeeksInSeason;` | 一季多少周。普通模式 3、快速模式 2 —— 一季因此可以是 21 天或 6 天 | `CampaignTime.cs:707` |
| `SeasonsInYear` | `public static int SeasonsInYear;` | 一年多少季（4） | `CampaignTime.cs:710` |
| `DaysInSeason` | `public static int DaysInSeason { get; }` | 派生只读值：`WeeksInSeason * DaysInWeek`。读取时现算，所以它跟着上面两个字段走 | `CampaignTime.cs:33` |
| `DaysInYear` | `public static int DaysInYear { get; }` | 派生只读值：`DaysInSeason * SeasonsInYear` | `CampaignTime.cs:43` |

### 静态工厂：绝对时刻 vs 相对现在

不带 `FromNow` 的一族返回「纪元后 N 个单位」这个绝对时刻，带 `FromNow` 的一族返回「现在 + N 个单位」。两族都可以当偏移量字面量用（tick 数一样），但只有带 `FromNow` 的能直接当「未来某刻」。

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `Milliseconds` | `public static CampaignTime Milliseconds(long valueInMilliseconds)` | 纪元后第 N 毫秒。亚秒级精度的唯一入口 | `CampaignTime.cs:561` |
| `MillisecondsFromNow` | `public static CampaignTime MillisecondsFromNow(long valueInMilliseconds)` | 现在起 N 毫秒后。用于极短冷却 | `CampaignTime.cs:567` |
| `Seconds` | `public static CampaignTime Seconds(long valueInSeconds)` | 纪元后第 N 秒（整数，见「坑」第七条） | `CampaignTime.cs:573` |
| `SecondsFromNow` | `public static CampaignTime SecondsFromNow(long valueInSeconds)` | 现在起 N 秒后 | `CampaignTime.cs:579` |
| `Minutes` | `public static CampaignTime Minutes(long valueInMinutes)` | 纪元后第 N 分钟（整数） | `CampaignTime.cs:585` |
| `MinutesFromNow` | `public static CampaignTime MinutesFromNow(long valueInMinutes)` | 现在起 N 分钟后 | `CampaignTime.cs:591` |
| `Hours` | `public static CampaignTime Hours(float valueInHours)` | 纪元后第 N 小时，支持小数（`Hours(1.5f)` 是 90 分钟） | `CampaignTime.cs:597` |
| `HoursFromNow` | `public static CampaignTime HoursFromNow(float valueInHours)` | 现在起 N 小时后。短事件冷却的常用写法 | `CampaignTime.cs:603` |
| `Days` | `public static CampaignTime Days(float valueInDays)` | 纪元后第 N 天。也是「N 天这么多 tick」的时长字面量 | `CampaignTime.cs:609` |
| `DaysFromNow` | `public static CampaignTime DaysFromNow(float valueInDays)` | 现在起 N 天后。**任务到期、休战期、冷却期最常用的一个** | `CampaignTime.cs:615` |
| `Weeks` | `public static CampaignTime Weeks(float valueInWeeks)` | 纪元后第 N 周（一周天数由 `DaysInWeek` 决定，所以不是固定 7 天） | `CampaignTime.cs:621` |
| `WeeksFromNow` | `public static CampaignTime WeeksFromNow(float valueInWeeks)` | 现在起 N 周后 | `CampaignTime.cs:627` |
| `Years` | `public static CampaignTime Years(float valueInYears)` | 纪元后第 N 年。`CampaignStartTime` 就是这么拼出来的 | `CampaignTime.cs:633` |
| `YearsFromNow` | `public static CampaignTime YearsFromNow(float valueInYears)` | 现在起 N 年后。适合「多年后」的长周期设定 | `CampaignTime.cs:639` |

### 比较与判等

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `CompareTo` | `public int CompareTo(CampaignTime other)` | 比 tick 大小，返回 -1 / 0 / 1。排序与 `SortedList` 的底层 | `CampaignTime.cs:159` |
| `Equals(CampaignTime)` | `public bool Equals(CampaignTime other)` | tick 精确相等。`IEquatable<T>` 版本，装箱少、推荐用 | `CampaignTime.cs:141` |
| `Equals(object)` | `public override bool Equals(object obj)` | 装箱版本，内部先判类型再转发给上面那个 | `CampaignTime.cs:147` |
| `GetHashCode` | `public override int GetHashCode()` | 直接取内部 tick 的哈希。可以安全地当字典键 | `CampaignTime.cs:153` |
| `operator <` | `public static bool operator <(CampaignTime x, CampaignTime y)` | 小于比较，直接比 tick。同族还有 `>` / `<=` / `>=` / `==` / `!=` | `CampaignTime.cs:173` |
| `operator ==` | `public static bool operator ==(CampaignTime x, CampaignTime y)` | 相等比较。和 `Equals` 一样是 tick 精确相等，不是「同一天」 | `CampaignTime.cs:185` |
| `operator <=` | `public static bool operator <=(CampaignTime x, CampaignTime y)` | 小于等于。做区间判断时比 `<` 更常用 | `CampaignTime.cs:197` |
| `StringSameAs` | `public bool StringSameAs(CampaignTime otherTime)` | 只比「是不是同一天」：两边 tick 除以一天 tick 数后相等即返回 true。日历上同一格的两个时刻都算相同 | `CampaignTime.cs:667` |

### 状态判定

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `IsFuture` | `public bool IsFuture { get; }` | 比当前 tick 大，即还没到。到期判断的正面写法 | `CampaignTime.cs:210` |
| `IsPast` | `public bool IsPast { get; }` | 比当前 tick 小，即已经过去。注意「恰好相等」时既非过去也非未来 | `CampaignTime.cs:220` |
| `IsNow` | `public bool IsNow { get; }` | tick 与当前时刻精确相等。因为时间每帧推进，除刚抄下的副本外几乎总是 false | `CampaignTime.cs:230` |
| `IsDayTime` | `public bool IsDayTime { get; }` | 当天小时数取整后落在 `[SunRise, SunSet)` 内。边界来自模型，别硬编码 | `CampaignTime.cs:240` |
| `CurrentHourInDay` | `public float CurrentHourInDay { get; }` | 当天第几小时（带小数），13.5 表示下午一点半。用来画钟表或做平滑光照 | `CampaignTime.cs:251` |
| `IsNightTime` | `public bool IsNightTime { get; }` | 就是 `!IsDayTime`，没有额外逻辑。夜袭、夜间视野等判断用它 | `CampaignTime.cs:262` |

### 相对现在的时间差

`Elapsed*` 读「过去多久」，`Remaining*` 读「还剩多久」，两者都是**相对量**，正负号相反。所有 `Elapsed*` 对未来的时刻会返回负数，所有 `Remaining*` 对过去的时刻也会返回负数 —— 它们不做裁剪。

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `ElapsedMillisecondsUntilNow` | `public float ElapsedMillisecondsUntilNow { get; }` | 距现在过去了多少毫秒，做性能采样与精确计时用 | `CampaignTime.cs:272` |
| `ElapsedSecondsUntilNow` | `public float ElapsedSecondsUntilNow { get; }` | 距现在过去了多少秒 | `CampaignTime.cs:282` |
| `ElapsedHoursUntilNow` | `public float ElapsedHoursUntilNow { get; }` | 距现在过去了多少小时，适合「几小时内」的短冷却 | `CampaignTime.cs:292` |
| `ElapsedDaysUntilNow` | `public float ElapsedDaysUntilNow { get; }` | 距现在过去了多少天。**冷却与「多久没做某事」判断里最常用的一个** | `CampaignTime.cs:302` |
| `ElapsedWeeksUntilNow` | `public float ElapsedWeeksUntilNow { get; }` | 距现在过去了多少周，周数按 `DaysInWeek` 折算 | `CampaignTime.cs:312` |
| `ElapsedSeasonsUntilNow` | `public float ElapsedSeasonsUntilNow { get; }` | 距现在过去了多少季，适合季节性事件的间隔判断 | `CampaignTime.cs:322` |
| `ElapsedYearsUntilNow` | `public float ElapsedYearsUntilNow { get; }` | 距现在过去了多少年，用于跨代、老龄化这类长周期 | `CampaignTime.cs:332` |
| `RemainingMillisecondsFromNow` | `public float RemainingMillisecondsFromNow { get; }` | 距现在还剩多少毫秒 | `CampaignTime.cs:342` |
| `RemainingSecondsFromNow` | `public float RemainingSecondsFromNow { get; }` | 距现在还剩多少秒 | `CampaignTime.cs:352` |
| `RemainingHoursFromNow` | `public float RemainingHoursFromNow { get; }` | 距现在还剩多少小时，配合 `Math.Ceiling` 做「还有 N 小时」提示 | `CampaignTime.cs:362` |
| `RemainingDaysFromNow` | `public float RemainingDaysFromNow { get; }` | 距现在还剩多少天。倒计时 UI 与「快到期了」预警的主力 | `CampaignTime.cs:372` |
| `RemainingWeeksFromNow` | `public float RemainingWeeksFromNow { get; }` | 距现在还剩多少周，联盟 / 条约期限常用 | `CampaignTime.cs:382` |
| `RemainingSeasonsFromNow` | `public float RemainingSeasonsFromNow { get; }` | 距现在还剩多少季，按 `DaysInSeason` 折算 | `CampaignTime.cs:392` |
| `RemainingYearsFromNow` | `public float RemainingYearsFromNow { get; }` | 距现在还剩多少年。对 `Never` 会给出一个天文数字，排序时要注意 | `CampaignTime.cs:402` |

### 绝对值读取（To*）

这一族把 tick 除以对应单位的 tick 数，得到**从纪元算起**的总量。要时长请先相减。返回值是 `double`（`Elapsed*` / `Remaining*` 是 `float`），因为绝对值通常很大。

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `ToMilliseconds` | `public double ToMilliseconds { get; }` | 纪元以来的总毫秒数。也是拿「原始 tick 近似值」的公开出口 | `CampaignTime.cs:412` |
| `ToSeconds` | `public double ToSeconds { get; }` | 纪元以来的总秒数 | `CampaignTime.cs:422` |
| `ToMinutes` | `public double ToMinutes { get; }` | 纪元以来的总分钟数 | `CampaignTime.cs:432` |
| `ToHours` | `public double ToHours { get; }` | 纪元以来的总小时数 | `CampaignTime.cs:442` |
| `ToDays` | `public double ToDays { get; }` | 纪元以来的第几天。**不是「过了多久」**；要时长先相减再读它 | `CampaignTime.cs:452` |
| `ToWeeks` | `public double ToWeeks { get; }` | 纪元以来的总周数，一周天数由 `DaysInWeek` 决定 | `CampaignTime.cs:462` |
| `ToSeasons` | `public double ToSeasons { get; }` | 纪元以来的总季数 | `CampaignTime.cs:472` |
| `ToYears` | `public double ToYears { get; }` | 纪元以来的总年数。默认开局约 1084 | `CampaignTime.cs:482` |

### 日历分解

这一族把绝对时刻拆成人类日历的各个字段。除 `ToString()` 外，索引都从 0 起算。

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `GetHourOfDay` | `public int GetHourOfDay { get; }` | 当天的第几小时（0 基整数），`CurrentHourInDay` 的取整版本 | `CampaignTime.cs:492` |
| `GetDayOfWeek` | `public int GetDayOfWeek { get; }` | 本周第几天（0 基），一周长度按 `DaysInWeek` 走 | `CampaignTime.cs:502` |
| `GetDayOfSeason` | `public int GetDayOfSeason { get; }` | 本季第几天（0 基）。注意 `ToString()` 展示时会 +1 | `CampaignTime.cs:512` |
| `GetDayOfYear` | `public int GetDayOfYear { get; }` | 本年度的第几天（0 基），一年长度按 `DaysInYear` 走 | `CampaignTime.cs:522` |
| `GetWeekOfSeason` | `public int GetWeekOfSeason { get; }` | 本季第几周（0 基） | `CampaignTime.cs:532` |
| `GetSeasonOfYear` | `public CampaignTime.Seasons GetSeasonOfYear { get; }` | 当前季节，返回 `Seasons` 枚举。季节文案与效果都挂在这上面 | `CampaignTime.cs:542` |
| `GetYear` | `public int GetYear { get; }` | 当前年份。名字带 `Get` 但它是属性不是方法，写成 `GetYear()` 编译不过 | `CampaignTime.cs:552` |
| `ToString` | `public override string ToString()` | 用 `str_date_format` 模板 + `str_season_*` 文本拼出本地化日期串，粒度是「年 + 季 + 本季第几天」 | `CampaignTime.cs:673` |

### 原始值出口与存档挂钩

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `NumTicks` | `internal long NumTicks { get; }` | 唯一的原始 tick 读出口，`internal`，mod 读不到。这也是「值类型 + 存档单元」的接缝 | `CampaignTime.cs:76` |
| `AutoGeneratedStaticCollectObjectsCampaignTime` | `public static void AutoGeneratedStaticCollectObjectsCampaignTime(object o, List<object> collectedObjects)` | 存档系统的静态收集挂钩，把实例转发给实例版。由 SaveSystem 生成，不要手写 | `CampaignTime.cs:15` |
| `AutoGeneratedInstanceCollectObjects` | `private void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)` | 实例版收集挂钩。本类型内部没有可空引用字段，所以函数体是空的 | `CampaignTime.cs:21` |
| `AutoGeneratedGetMemberValue_numTicks` | `internal static object AutoGeneratedGetMemberValue_numTicks(object o)` | 存档系统按名字取成员值的挂钩，读的就是那个 tick 字段 | `CampaignTime.cs:26` |
| `Seasons` | `public enum Seasons` | 四季枚举：`Spring` / `Summer` / `Autumn` / `Winter`，`GetSeasonOfYear` 的返回类型 | `CampaignTime.cs:741` |

## 真实示例

下面这个 Behavior 把三件事串起来：用 `DaysFromNow` 排一个未来的事件、用 `IsFuture` 判断到点了没、用 `ElapsedDaysUntilNow` 做冷却，最后把两个 `CampaignTime` 字段存进存档。它能工作的前提正是本页反复强调的两点 —— 相减得到的时长要再读 `ToDays`，以及 `CampaignTime` 本身可以直接被 `SyncData` 序列化。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.Core;
using TaleWorlds.Library;

namespace MyMod
{
    public class VillageFairBehavior : CampaignBehaviorBase
    {
        // 两个「时刻」字段。初值用 Zero 表示「从未发生过」
        private CampaignTime _nextFairTime = CampaignTime.Zero;
        private CampaignTime _lastRecruitTime = CampaignTime.Zero;

        public override void RegisterEvents()
        {
            CampaignEvents.DailyTickSettlementEvent.AddNonSerializedListener(this, this.OnDailyTickSettlement);
        }

        private void OnDailyTickSettlement(Settlement settlement)
        {
            // 第一次见到这个城镇：排下第一场集市
            if (_nextFairTime == CampaignTime.Zero)
            {
                _nextFairTime = CampaignTime.DaysFromNow(3f);
                return;
            }

            // 还没到点就什么都不做
            if (_nextFairTime.IsFuture)
            {
                return;
            }

            this.OpenFair(settlement);

            // 下一场排在 2 周后。这里用的是相对现在的工厂，不要写成 Weeks(2f)
            _nextFairTime = CampaignTime.WeeksFromNow(2f);
        }

        private void OpenFair(Settlement settlement)
        {
            // 相减得到的是「时长」，再读 ToDays 才是天数
            int daysSinceLastRecruit = (int)(CampaignTime.Now - _lastRecruitTime).ToDays;

            // 也可以不自己相减，直接读相对量
            if (daysSinceLastRecruit < CampaignTime.DaysInWeek
                && _lastRecruitTime.ElapsedDaysUntilNow < (float)CampaignTime.DaysInWeek)
            {
                return;
            }

            _lastRecruitTime = CampaignTime.Now;

            // 白天才办集市：边界来自 CampaignTimeModel，不要硬编码
            if (CampaignTime.Now.IsDayTime)
            {
                InformationManager.DisplayMessage(
                    new InformationMessage(settlement.Name.ToString() + " 正在举办集市"));
            }
        }

        public override void SyncData(IDataStore dataStore)
        {
            // CampaignTime 内部的 tick 带 [SaveableField]，所以这两个字段可以整体存盘
            dataStore.SyncData("_nextFairTime", ref _nextFairTime);
            dataStore.SyncData("_lastRecruitTime", ref _lastRecruitTime);
        }
    }
}
```

示例里值得单独点出的三行：`_nextFairTime == CampaignTime.Zero` 是「字段还没被赋过值」的惯用判法（struct 没有 null）；`(CampaignTime.Now - _lastRecruitTime).ToDays` 是「先相减再读 `To*`」的正确姿势；`dataStore.SyncData("_nextFairTime", ref _nextFairTime)` 说明这个类型可以直接当存档字段用，不需要手工拆成 `long`。

如果要给玩家看倒计时，改成读 `Remaining*FromNow` 更省事：

```csharp
float daysLeft = _nextFairTime.RemainingDaysFromNow;
if (daysLeft < 1f && daysLeft > 0f)
{
    InformationManager.DisplayMessage(new InformationMessage("集市明天开张"));
}
```

## 参见

- [`../Campaign`](../Campaign) —— `CampaignTime.Now` 与 `DeltaTime` 的数据源都在 `Campaign` 持有的时间推进器上，`Initialize()` 也是 `Campaign` 在启动流程里调的，要搞清调用时序先看这一页。
- [`../CampaignBehaviorBase`](../CampaignBehaviorBase) —— 存时间字段的标准位置：Behavior 的 `SyncData` 配一个 `CampaignTime` 字段即可，本页「真实示例」就是照着它写的。
- [`../CampaignEvents`](../CampaignEvents) —— `DailyTickSettlementEvent` / `HourlyTickEvent` 是「到点了没」的驱动源，冷却与到期逻辑通常在这里被唤醒。
- [`../Hero`](../Hero) —— `BirthDay` / `DeathDay` / `CaptivityStartTime` 都是 `CampaignTime`，是观察「绝对时刻」语义最直观的一组属性。
- [`../Settlement`](../Settlement) —— `LastThreatTime` 这类字段配合 `ElapsedDaysUntilNow` 使用，是冷却写法的现成样本。
- [`../../localization/TextObject`](../../localization/TextObject) —— `ToString()` 返回的日期串就是 `TextObject` 拼出来的，要自定义日期文案得从这一页入手。
- [`../../core-extra/Game`](../../core-extra/Game) —— `Campaign` 是挂在它下面的 `GameType`，模块加载期与战役初始化期的先后关系要在这一层理解。
- [`../_index`](../_index) —— `campaign` 桶全类型索引。

## 导航

- 同桶：[`../CampaignEvents`](../CampaignEvents) · [`../QuestManager`](../QuestManager)
- 父索引：[`../_index`](../_index)
