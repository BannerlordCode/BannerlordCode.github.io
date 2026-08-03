---
title: "CampaignTime"
description: "Bannerlord 战役世界的时间/日期表示：一个以整数 tick 存储、完全不可变的结构体，提供时刻构造、时长算术、精确比较、日历换算与本地化日期字符串等能力。"
---
# CampaignTime

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public struct CampaignTime : IComparable<CampaignTime>`  
**Base:** `IComparable<CampaignTime>`  
**File:** `TaleWorlds.CampaignSystem/CampaignTime.cs`

## 概述

`CampaignTime` 是战役地图（campaign）里**时间的统一表示**：它既可以是一"时刻"（某年某季某日），也可以是一"时长"（30 天、3 小时）。它内部只用一个 `readonly long _numTicks` 存储——从战役起点（`CampaignTimeModel.CampaignStartTime`）算起的整数 tick 数，所有更大的时间单位（毫秒、秒、分、时、天、周、季、年）都由一组静态常数 `TimeTicksPerXxx` 换算得到。因为只存一个整数，所以它**是不可变结构体**：任何"加一天""三天后"的操作都返回一个全新的 `CampaignTime`，原来的实例永远不变。游戏里几乎所有需要"记录某个时点"或"判断两条时间先后"的地方（英雄死亡日、军团成立时刻、商队合约冷却、任务截止等）都用它，而不是 `float`。

## 心智模型

把 `CampaignTime` 想成**战役世界里的"时间戳/秒表"**，由引擎唯一持有，mod 只读取或基于它构造新值：

- **谁持有它**：真正的时钟在 `Campaign.Current.MapTimeTracker`（`internal` 单例，每帧推进 `_numTicks`）。`CampaignTime.Now`、`CampaignTime.DeltaTime` 只是它的只读快照。`CampaignTime` 本身没有 setter，你改不了"全局现在"。
- **不可变**：`t + CampaignTime.Days(1)` 返回新值，旧的 `t` 不变；没有 `t.AddDays(...)` 这种就地修改方法。需要"更新"时请重新赋值：`next = now + CampaignTime.Days(1)`。
- **不要用原始 `float` 比较时间**：`Campaign.CurrentTime` 是 `(float)CampaignTime.Now.ToHours`，是一个以"小时"为单位的浮点数。用它做加法或 `>`/`<` 比较会丢失 tick 精度、受浮点误差影响，且不同版本行为可能漂移。要比较或调度，请保存 `CampaignTime` 字段，用其内置的比较运算符或 `ElapsedDaysUntilNow`。
- **tick 顺序**：在**同一个 campaign tick 内**，`CampaignTime.Now` 是恒定不变的；时间只在下一 tick 的 `MapTimeTracker.Tick` 调用后才会推进。依赖"时间已经过去"的逻辑必须等到下一个 tick 才会观察到变化。`DeltaTime` 表示**上一个 tick** 实际前进的步长（受游戏速度倍率影响）。
- 不要在战役创建之前（`Campaign.Current` 为空，例如主菜单、战斗场景早期）读取 `Now`/`DeltaTime`，否则会抛 `NullReferenceException`。

## 如何获取 CampaignTime

```csharp
// 1. 当前战役时刻（最常用）：等价于 Campaign.Current.MapTimeTracker.Now
CampaignTime now = CampaignTime.Now;

// 2. 上一个 tick 推进了多久（受游戏速度影响，用于平滑推进逻辑）
CampaignTime step = CampaignTime.DeltaTime;

// 3. 用一个 Duration 构造一个"时长"（基准是 tick 0，不是现在）
CampaignTime thirtyDays = CampaignTime.Days(30f);
CampaignTime threeHours = CampaignTime.Hours(3f);

// 4. 以"现在"为基准，向后偏移得到"未来时刻"
CampaignTime threeDaysLater = CampaignTime.DaysFromNow(3f);
CampaignTime oneHourLater  = CampaignTime.HoursFromNow(1f);

// 5. 反例：Campaign.CurrentTime 是 float（小时），仅适合内部便捷读取，不要拿来做时间比较/调度
float hoursFloat = Campaign.CurrentTime; // = (float)CampaignTime.Now.ToHours
```

> 约定值：`CampaignTime.Zero` 是战役起点（等于 `CampaignStartTime`），`CampaignTime.Never` 是 `long.MaxValue`，用来表示"没有截止时间 / 永不"。不要对 `Never` 做算术或 `ElapsedXxx` 计算，会溢出。

## 主要属性

### 静态属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `Now` | `CampaignTime` | 当前战役时刻；读取 `Campaign.Current.MapTimeTracker` 当前 tick 的 `_numTicks`。 |
| `DeltaTime` | `CampaignTime` | 上一个 tick 到当前 tick 经过的时长（`MapTimeTracker.DeltaTimeInTicks` 换算）。 |
| `Zero` | `CampaignTime` | 零时刻 = 战役起点。 |
| `Never` | `CampaignTime` | 代表"无限未来"（`long.MaxValue`），用于"无截止"约定。 |
| `DaysInSeason` | `int` | 每季天数 = `WeeksInSeason * DaysInWeek`。 |
| `DaysInYear` | `int` | 每年天数 = `DaysInSeason * SeasonsInYear`。 |

### 实例属性（相对"现在"的换算）

| 属性 | 类型 | 说明 |
|------|------|------|
| `IsFuture` / `IsPast` / `IsNow` | `bool` | 本时刻相对当前时间：在未来 / 已过去 / 正是现在。 |
| `IsDayTime` / `IsNightTime` | `bool` | 当前小时是否落在 `[SunRise, SunSet)`；夜晚即"非白天"。 |
| `CurrentHourInDay` | `float` | 当天内的小时小数（0 ~ `HoursInDay`）。 |
| `ElapsedMillisecondsUntilNow` … `ElapsedYearsUntilNow` | `float` | 从**本时刻到"现在"**经过了多少（单位）。本时刻越早，值越大。 |
| `RemainingMillisecondsFromNow` … `RemainingYearsFromNow` | `float` | 从**"现在"到本时刻**还有多少（本时刻在未来时为正）。 |
| `ToMilliseconds` … `ToYears` | `double` | 把本时刻的 ticks **直接**换算成对应单位（绝对量，不相对"现在"）。 |
| `GetHourOfDay` / `GetDayOfWeek` / `GetDayOfSeason` / `GetDayOfYear` / `GetWeekOfSeason` | `int` | 在各自周期内的序号（从 0 起）。 |
| `GetSeasonOfYear` | `CampaignTime.Seasons` | 当前季节枚举：`Spring`/`Summer`/`Autumn`/`Winter`。 |
| `GetYear` | `int` | 从战役起点算起的年份序号。 |

## 主要方法

### 构造时长与未来时刻

#### `public static CampaignTime Days(float valueInDays)` / `Hours` / `Weeks` / `Years`
构造一个代表"时长"的 `CampaignTime`（以 tick 0 为基准）。常用于 `+`/`-` 运算或 `ElapsedXxx` 比较。

```csharp
// 30 天时长
CampaignTime cooldown = CampaignTime.Days(30f);
```

#### `public static CampaignTime DaysFromNow(float valueInDays)` / `HoursFromNow` / `WeeksFromNow` / `YearsFromNow`
以"现在"为基准向后偏移，返回未来的绝对时刻。

```csharp
// 4 天后这个时间点（CompanionGrievanceBehavior 里就用来安排下一次可抱怨时间）
CampaignTime nextGrievance = CampaignTime.DaysFromNow(4f);
```

#### `public static CampaignTime Seconds(long)` / `Minutes(long)` / `Milliseconds(long)` 及其 `*FromNow` 变体
更细粒度（毫秒/秒/分）的构造；参数用 `long`，避免浮点截断。

```csharp
CampaignTime inFiveMinutes = CampaignTime.MinutesFromNow(5L);
```

### 算术

#### `public static CampaignTime operator +(CampaignTime g1, CampaignTime g2)`
把两个 `CampaignTime` 相加，**返回新值**。语义取决于操作数：时刻 + 时长 = 新时刻；时长 + 时长 = 更长的时长。

```csharp
// 在当前时刻的基础上加一个冷却时长，得到合约冷却到期时刻（BarterManager 写法）
CampaignTime expiry = CampaignTime.Now + CampaignTime.Days(
    (float)Campaign.Current.Models.BarterModel.BarterCooldownWithHeroInDays);
```

#### `public static CampaignTime operator -(CampaignTime g1, CampaignTime g2)`
相减，**返回新值**：时刻 − 时刻 = 时长；时刻 − 时长 = 更早的时刻。

```csharp
// Army 用"现在"减去成立时刻，得到军团年龄，再换算成天（Army.cs）
CampaignTime age = CampaignTime.Now - this._creationTime;
float ageInDays = age.ElapsedDaysUntilNow;
```

### 比较

#### `==` / `!=` / `<` / `>` / `<=` / `>=`
基于内部 `_numTicks` 的**整数**比较，精确、无浮点误差。比较两个时刻请优先用这些运算符。

```csharp
if (tournament.CreationTime < CampaignTime.Now - CampaignTime.Days(15f))
{
    // 锦标赛创建已超过 15 天
}
```

#### `public int CompareTo(CampaignTime other)` / `public bool Equals(CampaignTime other)`
`IComparable<CampaignTime>` 实现：相等当且仅当 `_numTicks` 相等。`Equals` 用整数比较，`GetHashCode` 直接返回 `_numTicks` 的哈希，因此 `CampaignTime` 可作为字典键稳定使用。

### 转换与格式化

#### `public double ToDays` / `ToHours` / `ToSeconds` / `ToMilliseconds` / `ToWeeks` / `ToSeasons` / `ToYears`
把本时刻的 ticks **直接**换算成对应单位的 `double`（绝对量）。常用于把"时刻"存成整数天数索引：

```csharp
// Kingdom 记录"上次建军团的那一天"作为整数天编号（Kingdom.cs）
this.LastArmyCreationDay = (int)CampaignTime.Now.ToDays;

// JournalLog 计算两条日志相隔几天
int daysBetween = MathF.Ceiling(CampaignTime.Now.ToDays) - MathF.Ceiling(this.LogTime.ToDays);
```

#### `public override string ToString()`
用本地化文本 `str_date_format` 输出"季节 年 日"形式（如 `Spring, Year 5, Day 12`，具体措辞随游戏语言）。内部会填入 `SEASON`/`YEAR`/`DAY` 三个文本变量。

```csharp
// KillCharacterAction 在死亡日志里写入死亡年份
textObject2.SetTextVariable("YEAR", CampaignTime.Now.GetYear.ToString());
InformationManager.DisplayMessage(new InformationMessage(CampaignTime.Now.ToString()));
```

> 本版本（v1.3.15 及 v1.4.5）**没有** `ToDateString()` 方法——它是在更晚的版本才加入的。要得到日期字符串请用 `ToString()`。

#### `public bool StringSameAs(CampaignTime otherTime)`
判断两个时刻是否落在**同一天**（比较 `_numTicks / TimeTicksPerDay` 是否相等），忽略当天内的小时差。

```csharp
if (someTime.StringSameAs(CampaignTime.Now))
{
    // 是同一天
}
```

## 典型用法示例

### 示例 1：判断某英雄是否已死亡超过 40 天

`Hero.DeathDay` 在死亡时被设为 `CampaignTime.Now`；之后随时可用 `ElapsedDaysUntilNow` 求距今天数（`CompanionsCampaignBehavior` 写法）：

```csharp
if (hero.IsWanderer && hero.DeathDay.ElapsedDaysUntilNow >= 40f)
{
    // 流浪者已去世超过 40 天，可触发招募新流浪者等逻辑
}
```

### 示例 2：为行为安排一个"冷却到期时刻"并在每天 tick 检查

行为里保存一个 `CampaignTime` 字段，用 `DaysFromNow` 设定下次可触发时间；每天 `DailyTick` 里用 `ElapsedDaysUntilNow` 判断是否已到（`CompanionGrievanceBehavior` 写法）：

```csharp
// 设定 4 天后的下一次可抱怨时刻
value.NextGrievanceTime = CampaignTime.DaysFromNow(4f);

// 在 DailyTick 中：只要距上次已 >= 56 天就允许清算
if (value.NextGrievanceTime.ElapsedDaysUntilNow >= 56f)
{
    // 触发抱怨逻辑
}
```

### 示例 3：计算两个时刻之间的时长并比较先后

`Army` 记录成立时刻，再随时用减法得到"年龄"；`TournamentCampaignBehavior` 用 `ElapsedDaysUntilNow` 判断锦标赛是否该移除：

```csharp
// 成立时记录
this._creationTime = CampaignTime.Now;

// 之后任意时刻：计算年龄天数
float ageInDays = (CampaignTime.Now - this._creationTime).ElapsedDaysUntilNow;

// 锦标赛超过 RemoveTournamentAfterDays 天则移除
if (tournamentGame.CreationTime.ElapsedDaysUntilNow >= (float)tournamentGame.RemoveTournamentAfterDays)
{
    // 移除该锦标赛
}
```

## 风险与崩溃边界

- **误以为 `CampaignTime` 可就地修改**：它是不可变结构体，所有 `+`/`-`/`*FromNow` 都返回**新值**。不存在 `t.AddDays(1)` 之类的方法；忘记接收返回值会让逻辑"看起来没生效"。
- **拿 `float`（`Campaign.CurrentTime`）做时间比较/调度**：`Campaign.CurrentTime` 是 `(float)CampaignTime.Now.ToHours`，用它 `+ 30f * HoursInDay` 或互相比较会引入浮点误差、且无法精确表达 tick。引擎内部个别地方（如 `StartMercenaryServiceAction`）确实这么写，但那是对内部字段的妥协；mod 应保存 `CampaignTime` 字段并用 `>`/`<` 运算符或 `ElapsedDaysUntilNow`。
- **战役初始化前访问**：`Now`/`DeltaTime`/`CurrentTicks` 都读取 `Campaign.Current.MapTimeTracker`。在 `Campaign.Current` 为 `null` 的阶段（主菜单、战斗场景早期、部分模块加载时机）调用会抛 `NullReferenceException`。
- **tick 顺序误解**：`Now` 在同一次 campaign tick 内恒定不变；在 tick 中途反复读取不会看到"时间流动"。依赖时间推进的代码（如冷却到期）要等下一个 tick 才生效。`DeltaTime` 是上一个 tick 的步长，会随玩家调游戏速度（暂停/加速）变化。
- **`Never`/`Zero` 的算术**：`Never` 为 `long.MaxValue`，对其做 `+` 或 `ElapsedXxx` 会整数溢出；只把它当"哨兵值"比较或赋值，不要参与运算。
- **换算溢出与截断**：`Days/Hours/Weeks/Years` 用 `(long)(value * TimeTicksPerXxx)` 截断，超大值会溢出 `long`；`Seconds/Minutes/Milliseconds` 接受 `long` 但仍受 `long.MaxValue` 限制。需要"超大未来"请用 `Never`。

## 跨版本提示

- **v1.3.0 / v1.3.15**：本页描述的全部公开 API 适用。`Now`、`DeltaTime`、`Zero`、`Never` 等以 `get` 访问器属性形式提供。
- **v1.4.5**：公开 API 与行为**完全一致**；仅把 `Now`/`DeltaTime`/`Zero`/`Never` 等只读属性改写成了表达式体属性（`=> …`），对调用方无影响，无需改代码。
- **`ToDateString()` 不存在于 v1.3.15 与 v1.4.5**：它是在更晚版本才加入的便捷方法。当前要拿到本地化日期字符串请使用 `ToString()`。
- `Campaign.CurrentTime`（返回 `float` 小时）在上述所有版本中都存在，作为引擎内部便捷入口；写 mod 的比较与调度逻辑时仍应优先使用 `CampaignTime` 本身。

## 依赖关系

- 上游：[Campaign](../../campaign/Campaign) 持有战役时钟，`CampaignTime.Now` 随战役推进更新。
- 下游：[CampaignEvents](../CampaignEvents) 发布 tick；[CampaignBehaviorBase](../CampaignBehaviorBase) 用它安排周期任务。
- 存档：保存可恢复的战役时间或最后处理时间，不要把现实 `DateTime` 当作战役时钟。

## 参见

- [本区域目录](../)
- [Campaign](../../campaign/Campaign/) — `Campaign.Current`、`MapTimeTracker` 与 `Campaign.CurrentTime` 的来源
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — 在每日/每帧 tick 中读取 `CampaignTime.Now` 的典型位置
- [Army](../../campaign-ext/Army/) — 用 `CampaignTime.Now` 记录 `_creationTime` 并用减法计算军团年龄
- [GameModels](../../campaign-ext/GameModels/) — `CampaignTimeModel` 提供昼夜与刻度常数（SunRise/SunSet/TimeTicksPerXxx）
- [Clan](../../campaign/Clan/) — `Clan.LastFactionChangeTime` 用 `CampaignTime.Now` 记录
- [Hero](../../campaign/Hero/) — `Hero.DeathDay` 等时点字段使用 `CampaignTime`
