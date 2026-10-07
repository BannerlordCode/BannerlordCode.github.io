---
title: "CampaignTimeModel"
description: "集中提供整个战役日历的换算常量与战役纪元起点的规则模型：一年几季、每季几周、每天几小时、日出日落时刻，以及把现实毫秒换算成战役 tick 的系数，由 Campaign 在运行时通过 Campaign.Current.Models.CampaignTimeModel 解析，并在启动早期被 CampaignTime.Initialize 读去固化静态时间系数。"
---

# CampaignTimeModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class CampaignTimeModel : MBGameModel<CampaignTimeModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CampaignTimeModel.cs

## 概述

该模型集中提供整个战役日历的换算常量与战役纪元起点——一年几季、每季几周、每天几小时、日出日落的时刻，以及把现实毫秒换算成战役内部 tick 的系数；全游戏的时间推进（`CampaignTime`）都基于这些常量把绝对 tick 数映射成年/季/周/日/时。它只暴露只读属性，真正的“当前时间”由 `CampaignTime.Now` 持有，模型本身不做任何时间推进或写入。

## 心智模型

CampaignTimeModel 是一个纯粹的日历常量源：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合里按类型解析出 `DefaultCampaignTimeModel` 唯一实例并缓存，运行时统一用 `Campaign.Current.Models.CampaignTimeModel` 取得。它在初始化期被 `CampaignTime.Initialize()` 一次性读取全部常量，换算成 `CampaignTime` 的静态 tick 系数（`TimeTicksPerHour`/`TimeTicksPerDay`/`TimeTicksPerYear` 等），此后时间推进完全由 `CampaignTime` 与各类 Behavior 在 Campaign 的 tick 中完成，模型不再参与每个 tick。要改“一年有多长、几点日出”就继承并注册替换实现；但替换必须在 `GameModels` 解析之前（即子模块 `InitializeGameStarter` 阶段通过 `AddModel`）完成——一旦 `CampaignTime.Initialize()` 已经跑过，再改模型也不会更新既有的静态系数。注意 `DaysInWeek` 与 `WeeksInSeason` 还会随游戏的加速模式变化，所以把模型当成“改世界时间”的入口是错误的：修改当前日期/年份应走 `CampaignTime`，而不是本模型的返回值。

## 何时使用 / 何时不要使用

- **使用**：需要读取或自定义战役日历换算（年/季/周/日/时结构、日出日落、tick 与毫秒换算）或战役纪元起点（`CampaignStartTime`）时，读取 `Campaign.Current.Models.CampaignTimeModel`，或提供一个新的派生类覆盖各抽象属性并通过子模块注册替换默认实现。
- **不要使用**：不要试图用模型去“推进时间”或“改变当前日期”——它只提供常量，真正随时间流动的是 `CampaignTime` 与各类 Behavior（由 Campaign 的 tick 驱动）；要给世界加时间偏移应改 `CampaignTime` 或走对应的 `*Action`，而非改本模型的返回值。也不要在 `Mission`/战斗层取 `Campaign.Current.Models`；更不要在 `Initialize` 跑过之后再替换模型并指望静态时间系数随之变化。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口；并在多处用 `CampaignStartTime` 计算自纪元起经过的天数。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<CampaignTimeModel>()` 解析并缓存实例。
- [CampaignTime](../CampaignTime) —— `Initialize()` 读取本模型全部常量，换算成静态 tick 系数；所有时间换算的真正承载者，也是“现在时间”的持有者。
- [DefaultCampaignTimeModel](../DefaultCampaignTimeModel) —— 默认具体实现，在 `SandBoxManager` 启动期经 `AddModel(new DefaultCampaignTimeModel())` 注册。

下游与协同系统（调用方）：

- [AiVisitSettlementBehavior](../AiVisitSettlementBehavior) —— 读取 `HoursInDay` 计算 AI 贵族在己方定居点的理想停留时长。
- [FoodConsumptionBehavior](../FoodConsumptionBehavior) —— 用 `CampaignStartTime.ToDays` 与 `CampaignTime.Now.ToDays` 对比判断是否跨日以结算食物消耗。
- [KingdomDecisionProposalBehavior](../KingdomDecisionProposalBehavior) —— 用 `CampaignStartTime.ElapsedDaysUntilNow` 判断新阵营成立是否还不满 5 天。
- [MapTimeTracker](../MapTimeTracker) —— Campaign 以 `CampaignStartTime` 为纪元构造地图时间轨迹（`new MapTimeTracker(Models.CampaignTimeModel.CampaignStartTime)`）。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 上述各个时间相关行为的基类，是实际驱动调用方。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.CampaignTimeModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **初始化期一次性固化常量**：`CampaignTime.Initialize()` 在启动早期把模型常量读入静态字段（`TimeTicksPerHour` 等），且读取发生在解析完成之后。若你在 `GameModels` 解析之后、或 `Initialize` 已经跑过之后再注册/替换模型，既有的 `CampaignTime` 静态系数不会更新，导致游戏内实际时间与模型返回值脱节。替换必须在子模块 `InitializeGameStarter` 阶段通过 `AddModel` 完成。
- **加速模式下周期会变化**：`DaysInWeek` 普通模式返回 `7`、快速加速模式返回 `3`；`WeeksInSeason` 普通 `3`、快速 `2`。依赖固定值做周期运算的逻辑（例如硬编码“每 7 天为一周”）在快速模式会产生偏差。
- **误判状态层**：该模型是无状态只读常量源，不含任何需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望随存档恢复，会发现这些值永远不会被序列化。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。

## 成员说明

### 战役纪元起点与昼夜

- **`CampaignStartTime`**（属性，返回 `CampaignTime`）
  - 用途：战役纪元的起点时间。默认实现 `DefaultCampaignTimeModel` 返回 `CampaignTime.Years(1084f) + CampaignTime.Weeks(CampaignTime.WeeksInSeason) + CampaignTime.Hours(9f)`，即第 1084 年某季首周、上午 9 点。全游戏据此把“现在”换算成自开局起经过的年/季/周/日。
  - 副作用：无，纯读取。
  - 调用时机：`Campaign` 构造 `MapTimeTracker`、各 Behavior（如 `FoodConsumptionBehavior`、`KingdomDecisionProposalBehavior`）判断跨日/新阵营天数、`SaveHandler` 写“DayLong”统计、以及教程任务判断开局时刻时读取。

- **`SunRise`**（属性，返回 `int`）
  - 用途：日出时刻（以“小时”计）。默认实现返回 `2`。
  - 副作用：无。
  - 调用时机：仅由 `CampaignTime.Initialize()` 在启动早期读入 `CampaignTime` 的静态 `SunRise` 字段，供昼夜判定使用。

- **`SunSet`**（属性，返回 `int`）
  - 用途：日落时刻（以“小时”计）。默认实现返回 `22`。
  - 副作用：无。
  - 调用时机：同 `SunRise`，由 `CampaignTime.Initialize()` 读入静态字段。

### 时间换算常量

- **`TimeTicksPerMillisecond`**（属性，返回 `long`）
  - 用途：每现实毫秒对应的战役内部 tick 数，是其余一切 tick 系数的根。默认实现返回 `10`。`CampaignTime.Initialize()` 以它为基础累算出每“秒/分/时/日/周/季/年”的 tick 数。
  - 副作用：无，纯读取；真正的派生计算在 `CampaignTime` 静态字段上完成。
  - 调用时机：仅 `CampaignTime.Initialize()` 调用。

- **`MillisecondInSecond` / `SecondsInMinute` / `MinutesInHour`**（属性，均返回 `int`）
  - 用途：逐级的时间进制——每“秒”含多少毫秒（默认 `1000`）、每“分”含多少秒（默认 `60`）、每“时”含多少分（默认 `60`）。`CampaignTime.Initialize()` 用它们连乘得到 `TimeTicksPerSecond`/`Minute`/`Hour`。
  - 副作用：无。
  - 调用时机：仅 `CampaignTime.Initialize()` 调用。

- **`HoursInDay`**（属性，返回 `int`）
  - 用途：每天包含的小时数，默认实现返回 `24`。这是唯一在 `CampaignTime.Initialize()` 之外也被行为直接读取的常量。
  - 副作用：无。
  - 调用时机：`CampaignTime.Initialize()` 读它换算 `TimeTicksPerDay`；[AiVisitSettlementBehavior](../AiVisitSettlementBehavior) 在运行时读取它来计算停留时长（如 `IdealTimePeriodForVisitingOwnedSettlement = HoursInDay * 15f`）。

### 日历周期结构

- **`DaysInWeek`**（属性，返回 `int`）
  - 用途：每周天数。默认实现在非快速加速模式下返回 `7`，在快速加速模式（`GameAccelerationMode.Fast`）下返回 `3`。
  - 副作用：无。
  - 调用时机：`CampaignTime.Initialize()` 读它换算 `TimeTicksPerWeek`；`Campaign` 也用 `CampaignStartTime.ElapsedDaysUntilNow % DaysInWeek == 0` 判断是否跨周。

- **`WeeksInSeason`**（属性，返回 `int`）
  - 用途：每季包含的周数。默认实现普通模式返回 `3`，快速加速模式返回 `2`；该值同时参与了 `CampaignStartTime` 的构造（`Weeks(WeeksInSeason)`）。
  - 副作用：无。
  - 调用时机：`CampaignTime.Initialize()` 读它换算 `TimeTicksPerSeason`；默认实现的 `CampaignStartTime` 也读取它。

- **`SeasonsInYear`**（属性，返回 `int`）
  - 用途：每年包含的季节数，默认实现固定返回 `4`。
  - 副作用：无。
  - 调用时机：`CampaignTime.Initialize()` 读它换算 `TimeTicksPerYear`，从而得到 `CampaignTime` 全部静态时间系数。

## 示例

读取自战役开局起经过的天数（依赖 `CampaignStartTime` 纪元）：

```csharp
CampaignTime sinceStart = CampaignTime.Now - Campaign.Current.Models.CampaignTimeModel.CampaignStartTime;
int daysSinceStart = (int)sinceStart.ElapsedDaysUntilNow;
```

读取日历常量并判断“今天是否处于跨周边界”（注意快速模式下 `DaysInWeek` 为 3）：

```csharp
int daysInWeek = Campaign.Current.Models.CampaignTimeModel.DaysInWeek;
bool isNewWeek = (int)Campaign.Current.Models.CampaignTimeModel
    .CampaignStartTime.ElapsedDaysUntilNow % daysInWeek == 0;
int hoursInDay = Campaign.Current.Models.CampaignTimeModel.HoursInDay;
```

## 怎么用

**怎么拿到。** 类型声明在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CampaignTimeModel.cs:5`（`public abstract class CampaignTimeModel : MBGameModel<CampaignTimeModel>`）。**全文只有 28 行，且十二个成员全是 `public abstract` 属性，零方法体** —— 这个模型没有行为，只有「换算系数」。

运行时解析发生在 `GameModels.cs:371` 的一行 `CampaignTimeModel = GetGameModel<CampaignTimeModel>();`，结果存进 `GameModels.cs:231` 的 `public CampaignTimeModel CampaignTimeModel { get; private set; }`。消费端统一写 `Campaign.Current.Models.CampaignTimeModel.Xxx`，例如 `Campaign.cs:1402` 的 `new MapTimeTracker(Models.CampaignTimeModel.CampaignStartTime)`。

**一段可直接跑的三行换算**（十二个常量里最容易搞混的一组）：

```csharp
CampaignTimeModel t = Campaign.Current.Models.CampaignTimeModel;
float elapsedMs = t.CampaignStartTime.ElapsedMillisecondsUntilNow;
Debug.Print("days = " + (elapsedMs / ((float)t.MillisecondInSecond * t.SecondsInMinute * t.MinutesInHour * t.HoursInDay)), 0);
```

**⚠ 两个「看起来公开其实不是」的成员，先记住，否则代码编译不过。**
```
· CampaignTime.NumTicks   是 internal long  => mod 读不到
· CampaignTime.TimeTicksPer*  也是 internal static long（TimeTicksPerMillisecond/TimeTicksPerDay …）
所以 engine 自己写的 long numTicks = (CampaignTime.Now - …CampaignStartTime).NumTicks; 那种写法，
你在 mod 里【逐字照抄会编译失败】—— 它只在 TaleWorlds 程序集内部成立。
```

**改用公开属性。** `CampaignTime` 对 mod 开放的是一组 `Elapsed*UntilNow` / `Remaining*FromNow` 的 `float` 属性：`ElapsedMillisecondsUntilNow`（`CampaignTime.cs:104`）、`ElapsedSecondsUntilNow`、`ElapsedHoursUntilNow`、`ElapsedDaysUntilNow`、`ElapsedWeeksUntilNow`、`ElapsedSeasonsUntilNow`、`ElapsedYearsUntilNow`，以及反向的 `RemainingMillisecondsFromNow` 等。**它们已经替你除好了系数，不需要你手算。**

**五个时间单位是五个独立属性，不能互相推导。** `MillisecondInSecond`、`SecondsInMinute`、`MinutesInHour`、`HoursInDay`、`DaysInWeek` 各自是一个 `int`，**它们之间没有任何一致性校验** —— 你在派生类里把 `HoursInDay` 写成 25 不会有任何提示，只会让全游戏的时刻表漂移。

**`CampaignStartTime` 是唯一一个「值」而非「系数」的成员。** 它返回 `CampaignTime` 类型，`Campaign.cs:1004` 正是用它做差值 `long numTicks = (CampaignTime.Now - Current.Models.CampaignTimeModel.CampaignStartTime).NumTicks;` —— 所以它是**每次战役的纪元起点**，换战役会换值。

**读「当前时刻」的三个静态属性也分内外。** `CampaignTime.Now`（`CampaignTime.cs:70`）是 `public static`，可以放心用；但它的实现是 `Campaign.Current.MapTimeTracker.Now`，**所以战役没起来时 `Now` 自己就 NRE**。另有 `CampaignTime.Never`（第 72 行）可作哨兵值。

**最常见的坑：跨战役重载缓存实例。** `Campaign.Current.Models.CampaignTimeModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象。而本类比别的模型更危险 —— **它的成员全是常量系数，看起来「缓存了也没事」，于是更容易被误判为可以长期持有**。

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [CampaignTime](../CampaignTime) · [DefaultCampaignTimeModel](../DefaultCampaignTimeModel) · [AiVisitSettlementBehavior](../AiVisitSettlementBehavior) · [FoodConsumptionBehavior](../FoodConsumptionBehavior) · [KingdomDecisionProposalBehavior](../KingdomDecisionProposalBehavior) · [MapTimeTracker](../MapTimeTracker) · [CampaignBehaviorBase](../CampaignBehaviorBase)
