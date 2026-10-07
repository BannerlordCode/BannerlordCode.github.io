---
title: "CampaignTime"
description: "战役世界的时间值类型，内部只存一个 long tick 数，所有刻度常量由 CampaignTimeModel 在运行期注入，是事件排程与到期判断的基本单位。"
---

# CampaignTime

**命名空间：** `TaleWorlds.CampaignSystem`
**Type:** `public struct CampaignTime : IComparable<CampaignTime>`
**Source:** `TaleWorlds.CampaignSystem/CampaignTime.cs`

## 概述

`CampaignTime` 是战役层的时间表示，一个包着单个 `long _numTicks` 的值类型（struct），既不是 `DateTime` 也不是引擎帧 tick。它表达的是「战役世界里的绝对时刻」：从战役开局（`Zero`，tick 0）开始累计的 tick 数。战役里几乎所有需要时间语义的地方都用它——事件排程、任务到期、部队移动耗时、季节与年份计算。它自己不持有时间刻度，而是读一组运行期才确定的静态字段（`TimeTicksPerDay` 等），这些字段由 `Initialize()` 从 `CampaignTimeModel` 灌入，因此 mod 可以通过改模型来改变一整年有多少天。当前时刻不存于结构体内，而是每次访问 `Now` 时向 `Campaign.Current.MapTimeTracker` 现取，所以同一个 `CampaignTime` 变量的 `IsFuture`/`IsPast` 会随时间翻转。

## 心智模型

核心一句话：`CampaignTime` 是一个**只读的 tick 包装器**，刻度是**运行期全局可变**的。

1. **一个 long 走天下**：结构体内部只有 `private readonly long _numTicks`（带 `[SaveableField(2)]`，是存档字段）。所有属性——`ToDays`、`GetYear`、`GetSeasonOfYear`、`IsDayTime`——都是拿这个 long 去除以某个 `TimeTicksPer*` 算出来的。比较、相等、哈希也全部只看这个 long。
2. **刻度不是编译期常量**：`TimeTicksPerDay`、`HoursInDay`、`DaysInSeason` 这些都是 `static` 字段，由 `Initialize()` 在战役启动时从 `Campaign.Current.Models.CampaignTimeModel` 读出并逐级相乘算出来。`DaysInSeason`/`DaysInYear` 是 `public static` 的可变属性（不是 `const`），mod 可以直接改。这意味着**不要在启动前读这些字段**，也不要把算出来的天数缓存进自己的静态字段。
3. **绝对 vs 相对**：`CampaignTime.Days(3f)` 造的是「开局后第 3 天」这个**绝对时刻**（接近战役开头），不是「3 天后」。要相对现在的时刻必须用 `DaysFromNow(3f)`。这是本类型最常见的误用。
4. **构造函数是 internal**：`CampaignTime(long)` 与 `NumTicks` 都是 `internal`，mod 程序集拿不到。你**无法**自己 new 一个指定 tick 的实例，只能用 `Zero`、`Now`、`Never` 或 `Xxx`/`XxxFromNow` 这组静态工厂。
5. **值语义**：struct，赋值即复制。`a = b; a = a + CampaignTime.Days(1f);` 不会改到 `b`。
6. **Never ≠ Zero**：`Never` 是 `long.MaxValue`，哨兵，表示「永不到期」；`Zero` 是 tick 0，表示「战役开局那一刻」。把 `Never` 当「很远的时间」参与加减会溢出。

## 怎么用

### 怎么拿到它

- 当前时刻：`CampaignTime.Now`（每次访问都向 `MapTimeTracker` 现取）。
- 相对现在的偏移：`CampaignTime.DaysFromNow(3f)`、`HoursFromNow(2f)`、`SecondsFromNow(30f)` 等。
- 绝对偏移（从开局算起）：`CampaignTime.Days(3f)`、`Hours(5f)` 等——注意这通常**不是**你想要的。
- 哨兵：`CampaignTime.Never`（永不到期）、`CampaignTime.Zero`（开局）。
- 自己**不能** `new CampaignTime(ticks)`，构造函数是 `internal`。

### 典型用法

1. **定时事件 / 任务到期**：存一个 `CampaignTime` 到期点，每 tick 用 `expiry.IsPast` 或 `CampaignTime.Now >= expiry` 判断是否触发。
2. **算剩余时间**：`expiry.RemainingDaysFromNow` 给浮点天数，`RemainingHoursFromNow` 给小时——用于 UI 显示「还剩 3 天」。
3. **取日历字段**：`GetYear`、`GetSeasonOfYear`（返回嵌套枚举 `Seasons`）、`GetDayOfSeason`（0-based，显示要 +1）、`GetDayOfYear`、`GetWeekOfSeason`、`GetHourOfDay`、`GetDayOfWeek`。
4. **判断昼夜**：`IsDayTime` / `IsNightTime`，依据是 `CurrentHourInDay` 落在 `[SunRise, SunSet)` 区间内。
5. **格式化显示**：`ToString()` 用 `str_date_format` 文本模板输出「季节 年 第几天」。
6. **比较与排序**：实现了 `IComparable<CampaignTime>` 并有全套比较运算符，可直接排序、放 `List<CampaignTime>`。

### 最容易踩的坑

1. **`Days(3)` 不是「3 天后」**：它是「开局后第 3 天」，一个过去的绝对时刻。要相对现在必须 `DaysFromNow(3)`。
2. **刻度运行期才存在**：`Initialize()` 之前读 `TimeTicksPerDay` 等字段是 0，会除零。mod 的静态构造函数里别碰这些字段。
3. **`DaysInSeason`/`DaysInYear` 是 public static 可变**：改了会影响全战役（包括 `GetDayOfYear` 的取模），属于全局副作用，慎用。
4. **`Never` 参与算术会溢出**：`Never - Now` 这类运算在 `long` 上回绕，得到无意义结果。
5. **`IsFuture`/`IsPast`/`IsNow` 是现算的**：它们读 `CurrentTicks`，所以同一个实例的判断结果会随时间变化；别把结果缓存成 bool 字段。
6. **`GetDayOfSeason`/`GetDayOfYear`/`GetDayOfWeek`/`GetHourOfDay` 都是 0-based**：直接显示给玩家要 +1。
7. **`CurrentHourInDay` 依赖 `SunRise`/`SunSet`**：这两个是 public static 可变 int，被 `Initialize()` 从模型灌入；模型没跑之前是 0。

## 关键成员

- **Now**（`CampaignTime.cs:122`）— 当前战役时刻，每次 get 都转发到 `Campaign.Current.MapTimeTracker.Now`。要「现在」就用它，别自己缓存。
- **Never**（`CampaignTime.cs:132`）— 哨兵 `new CampaignTime(long.MaxValue)`，表示「永不到期」。用于「无期限」的到期点判断，不要拿它做算术。
- **Zero**（`CampaignTime.cs:646`）— `new CampaignTime(0L)`，战役开局时刻。是 `Xxx` 系列工厂的基准点。
- **DeltaTime**（`CampaignTime.cs:102`）— 距上一 tick 经过的时间，来自 `MapTimeTracker.DeltaTimeInTicks`。用于按真实流逝时间做插值或累计。
- **DaysInSeason**（`CampaignTime.cs:33`）— `public static` 计算属性，等于 `WeeksInSeason * DaysInWeek`。运行期由 `Initialize()` 间接决定，mod 可直接改写，影响全局季节长度。
- **DaysInYear**（`CampaignTime.cs:43`）— `public static` 计算属性，等于 `DaysInSeason * SeasonsInYear`。同上，是全局可变的。
- **Initialize**（`CampaignTime.cs:52`）— 从 `Campaign.Current.Models.CampaignTimeModel` 读出 `SunRise`/`SunSet` 与各级 `TimeTicksPer*` 并逐级相乘。战役启动时由框架调用，mod 一般不直接调。
- **IsFuture**（`CampaignTime.cs:210`）— `CurrentTicks < _numTicks`，该时刻在未来。现算属性，结果随时间翻转。
- **IsPast**（`CampaignTime.cs:220`）— `CurrentTicks > _numTicks`，该时刻已过去。到期判断的主力。
- **IsNow**（`CampaignTime.cs:230`）— `CurrentTicks == _numTicks`，精确到 tick 的「就是现在」。
- **IsDayTime**（`CampaignTime.cs:240`）— `floor(CurrentHourInDay)` 落在 `[SunRise, SunSet)` 内为白天。
- **IsNightTime**（`CampaignTime.cs:262`）— `!IsDayTime`，黑夜。
- **GetSeasonOfYear**（`CampaignTime.cs:542`）— 返回嵌套枚举 `CampaignTime.Seasons`（Spring/Summer/Autumn/Winter），按 `_numTicks / TimeTicksPerSeason % SeasonsInYear` 算。
- **HoursFromNow**（`CampaignTime.cs:603`）— 造「现在起 N 小时」的相对时刻。`Hours` 系列里带 `FromNow` 才是相对现在的。
- **DaysFromNow**（`CampaignTime.cs:615`）— 造「现在起 N 天」的相对时刻。任务或事件排程最常用的工厂。
- **operator +**（`CampaignTime.cs:655`）— 两个 `CampaignTime` 的 tick 相加。`Now + Days(1)` 得明天；两个绝对时刻相加通常无意义。
- **operator -**（`CampaignTime.cs:661`）— tick 相减。`expiry - Now` 得已流逝时长；`Now - expiry` 得负数。
- **Seasons**（`CampaignTime.cs:741`）— 嵌套 `public enum`，四季 Spring/Summer/Autumn/Winter，`GetSeasonOfYear` 的返回类型。

## 真实示例

```csharp
// 当前战役时刻
CampaignTime now = CampaignTime.Now;

// 三天后到期（相对现在，不是开局后第 3 天）
CampaignTime expiry = CampaignTime.Now + CampaignTime.DaysFromNow(3f);

// 到期判断
if (expiry.IsPast)
{
    // 已过期，触发后续逻辑
}

// 日历字段：年、季、季内第几天（0-based，显示 +1）
int year = now.GetYear;
CampaignTime.Seasons season = now.GetSeasonOfYear;
int dayOfSeason = now.GetDayOfSeason + 1;

// 昼夜与剩余时间
bool isDay = now.IsDayTime;
float daysLeft = expiry.RemainingDaysFromNow;

// 格式化显示
string dateText = now.ToString();
```

## 参见

- ↔ [Campaign](../Campaign) — 战役世界根对象，`CampaignTime` 的当前时刻与模型都挂在它上面
- ↔ [CampaignEventDispatcher](../CampaignEventDispatcher) — 按天或按小时派发事件，排程用的就是 `CampaignTime`
- ↔ [MBCampaignEvent](../MBCampaignEvent) — 定时事件载体，触发点是一个 `CampaignTime`
- ↔ [CampaignPeriodicEventManager](../CampaignPeriodicEventManager) — 周期 tick 管理器，按 `CampaignTime` 推进
- ↔ [TeleportationHelper](../../core-extra/TeleportationHelper) — 传送剩余小时数，是 `CampaignTime` 差值的真实消费者

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
