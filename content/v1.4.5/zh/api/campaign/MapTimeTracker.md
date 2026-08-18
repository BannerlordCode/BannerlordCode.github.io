---
title: "MapTimeTracker"
description: "战役地图时钟的底层累加器：持有从开局起累计的地图 ticks 与最近一帧推进的 delta，被 Campaign 私有所并每帧推进、随存档持久化，所有 CampaignTime 的读时入口都委托给它。"
---
# MapTimeTracker

**命名空间：** `TaleWorlds.CampaignSystem`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `internal class MapTimeTracker`  
**基类：** 无  
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/MapTimeTracker.cs`

## 一句话职责

`MapTimeTracker` 是战役地图时钟的**唯一真相来源**：它用一个 `long` 累加器 `_numTicks` 记录从开局到现在总共流逝的地图时间（以 tick 为单位），并用 `_deltaTimeInTicks` 记录最近一次推进所跨越的 tick 数；它不被 mod 直接持有，而是由 [Campaign](../Campaign) 在开局时构造、`TickMapTime` 每帧推进、随战役存档持久化，[CampaignTime](../CampaignTime) 的全部静态读时入口（`Now` / `DeltaTime` / `CurrentTicks`）都委托它取值。

## 心智模型

把 `MapTimeTracker` 想成挂在当前 [Campaign](../Campaign) 上的一块**单指针计数器**——整个战役有且只有这一个地图时钟，所有"现在几点""过去多少天"的计算都从它读出。

- **它处在哪一层**：纯 Campaign（战略地图）层，是时间基础设施，不接触 Mission（战斗场景），也不依赖任何单个队伍或据点。它比 `MobileParty` / `Settlement` / `Hero` 更底层——这些实体读到的时间（例如某行为冷却到期、年龄增长）最终都经由 `CampaignTime` 回到这块计数器。
- **生命周期与持有者**：它是 `internal` 类，由 `Campaign` 通过属性 `MapTimeTracker { get; private set; }` **私有持有**。新战役在 `OnGameStart` 里用 `Models.CampaignTimeModel.CampaignStartTime` 构造（`new MapTimeTracker(Models.CampaignTimeModel.CampaignStartTime)`）；读档时由存档恢复。mod 拿不到、也不应拿到一个独立可推进的 `MapTimeTracker` 实例。
- **它如何被推进**：每帧 Campaign 主循环的 `RealTick` 调用 `TickMapTime`，再由 `MapTimeTracker.Tick(4320f * num)` 把"本帧真实秒数 × 倍速"换算成 ticks，存入 `_deltaTimeInTicks` 并累加到 `_numTicks`。`4320f` 是每帧基准秒数，`num` 由 [CampaignTimeControlMode](../CampaignTimeControlMode) 与倍速决定。推进发生在各 `CampaignBehaviorBase` 的 tick 之前。
- **它如何被读**：`CampaignTime.Now` 等于 `new CampaignTime(_numTicks)`，`CampaignTime.DeltaTime` 等于 `new CampaignTime(_deltaTimeInTicks)`，`CampaignTime` 内部比较（如 `IsFuture`/`IsPast`/`IsNow`、`ElapsedDaysUntilNow`、`CurrentHourInDay`）都读 `_numTicks`。换句话说，mod 永远通过 `CampaignTime` 静态入口读时间，**不应**接触 `MapTimeTracker` 本身。
- **何时不要直接改**：两个字段都是 `private` 且带 `[SaveableField]`；任何通过反射写 `_numTicks` / `_deltaTimeInTicks` 的企图都会破坏单调时钟与存档一致性。正确"变更路径"是：让引擎的 `TickMapTime` 推进它，mod 只读取、只在 `CampaignTimeControlMode` 允许的范围内运行。

## 何时用 / 何时不要用

- **用**：当你需要"当前地图时刻"或"本帧流逝量"时，读 `CampaignTime.Now` / `CampaignTime.DeltaTime` / `CampaignTime.Never`，或对两个 `CampaignTime` 做比较与加减（`+` / `-` 运算符、`DaysFromNow`、`ElapsedDaysUntilNow` 等）。这些读值最终都来自本 tracker。
- **用**：把某个绝对时刻（`CampaignTime deadline = CampaignTime.DaysFromNow(5f)`）存进你自己的 `CampaignBehavior` 状态，之后用 `deadline.IsPast` / `CampaignTime.Now.IsFuture` 判断到期——这是读取这块计数器语义的正确方式。
- **不要用**：不要 `new MapTimeTracker(...)`，不要给 `Campaign.MapTimeTracker` 赋值（属性 `private set`，且引擎不认你造的时钟），不要用反射改写 `_numTicks` / `_deltaTimeInTicks`，不要把 `CampaignTime.DeltaTime` 跨帧缓存当作长期速率。时间推进由引擎负责，mod 没有"手动加时间"的合法入口。

## 依赖图

```text
CampaignTimeModel.CampaignStartTime (开局起点)
        -> MapTimeTracker  (Campaign 私有持有, { get; private set; })
              _numTicks            <- Tick(4320f * num) 每帧累加
              _deltaTimeInTicks    <- 最近一帧 delta
        -> CampaignTime.Now / DeltaTime / CurrentTicks   (委托读取)
        -> MobileParty / Settlement / Hero / CampaignBehaviorBase (读时)
        -> SaveableField(0)/(1) -> SaveableCampaignTypeDefiner(id 24) -> 存档
```

- **上游 / 持有者**：[Campaign](../Campaign) 拥有唯一实例（`MapTimeTracker` 属性），在 `OnGameStart` 用 `Models.CampaignTimeModel.CampaignStartTime` 构造，并在序列化时把它加入收集对象（`collectedObjects.Add(MapTimeTracker)`）。
- **下游 / 读取者**：[CampaignTime](../CampaignTime) 的全部静态入口（`Now`、`DeltaTime`、`CurrentTicks`，及其 `IsFuture`/`IsPast`/`IsNow`、`Elapsed*UntilNow`、`CurrentHourInDay`、`IsDayTime`）都委托本 tracker 读取 `_numTicks` / `_deltaTimeInTicks`；战役中一切"过去多久 / 现在几点"均源于此。
- **推进者**：Campaign 的 `TickMapTime`（在 `RealTick` 内）每帧调用 `MapTimeTracker.Tick(4320f * num)`，`num` 由 [CampaignTimeControlMode](../CampaignTimeControlMode) 与倍速决定；各 [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase) 的 tick 在时钟推进之后发生。
- **序列化**：本类型注册于 `SaveableCampaignTypeDefiner`（`AddClassDefinition(typeof(MapTimeTracker), 24)`），字段经 [SaveableFieldAttribute](../../save-system/SaveableFieldAttribute) 标注（`_numTicks` = 0、`_deltaTimeInTicks` = 1），纳入 Campaign 的存档图，随战役读档恢复。
- **相关常量 / 模型**：[CampaignTimeModel](../CampaignTimeModel) 提供开局起点 `CampaignStartTime`；时间刻度 `CampaignTime.TimeTicksPerSecond` 等由 `CampaignTime.Initialize()` 基于配置设定，是 `Tick` 换算秒↔tick 的依据。

## 风险边界

- **时间回拨导致全局错乱**：`_numTicks` 是单调累加器。若通过反射改写，或加载了被篡改/损坏的存档使 `_numTicks` 变小，所有基于它的比较（`IsFuture`/`IsPast`/`IsNow`）、每日 tick 调度、英雄年龄/成长、关系衰减、合约与冷却到期都会判断错误——典型怪象是"事件已触发却判定未到期""角色永远不老"。正确做法：只读，推进完全交给引擎。
- **存档 / 反序列化失败**：tracker 是 Campaign 存档图的一部分。`SaveableField` 的字段 id（0、1）与 `SaveableCampaignTypeDefiner` 的注册 id（24）必须稳定；改了源码里的 id 或类型不匹配，会让整份存档反序列化失败、无法载入。
- **`_deltaTimeInTicks` 只代表上一帧**：它只在最近一次 `Tick` 之后、同帧内有效。`CampaignTime.DeltaTime` 在 tick 回调之外、或在读档后读取，可能是陈旧甚至 0 的增量。依赖"本帧流逝量"的逻辑必须放在 `CampaignBehaviorBase` 的 tick 内、同一帧使用，不要缓存跨帧当速率。
- **不要自行构造 tracker**：它是 `internal` 且由 Campaign 私有持有。任何 `new MapTimeTracker()` 出来的实例都不接入世界时钟、也不会进存档；mod 只能经由 `CampaignTime` 静态入口读时间，拿不到"可推进的独立时钟"。
- **推进顺序与倍速假设**：时间推进发生在 `TickMapTime`，早于普通 Behavior 的 tick；`num` 受 `CampaignTimeControlMode`（停止 / 普通 / 加速）与倍速影响。mod 不应假设时间在某精确子阶段推进，也不要试图用"快进"来强行到达某个时刻——那会破坏其它系统对同一时钟的依赖。
- **单线程时钟**：地图时钟只在游戏主循环单线程推进。在异步 / 多线程代码里读 `CampaignTime.Now` 可能拿到不一致的中间态，且"自己加时间"的思路根本违背单时钟模型。

## 成员说明（按主题分组）

### 持久化的时间状态

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `_numTicks`（`[SaveableField(0)]`，`private long`） | 从战役开始累计的地图 ticks，是整个地图时钟的唯一真相来源。构造时由 `initialMapTime.NumTicks` 初始化（开局为 `CampaignStartTime`），或默认 `0`；每次 `Tick` 累加 `_deltaTimeInTicks`。只读累加器，序列化进存档。 |
| `_deltaTimeInTicks`（`[SaveableField(1)]`，`private long`） | 最近一次 `Tick(seconds)` 计算出的、本帧推进的 ticks。被 `CampaignTime.DeltaTime` 与内部 `DeltaTimeInTicks` 读取；存档时也持久化，以便读档还原"上一帧增量"。 |
| `NumTicks`（`=> _numTicks`，`internal long`） | 暴露累计总 ticks 的只读属性。`CampaignTime` 内部的 `CurrentTicks` 直接读它来比较"现在"。 |
| `DeltaTimeInTicks`（`=> _deltaTimeInTicks`，`internal long`） | 暴露最近一帧 delta 的只读属性。`CampaignTime.DeltaTime` 与内部 `DeltaTimeInTicks` 读它；只在当帧有意义。 |
| `Now`（`=> new CampaignTime(_numTicks)`，`internal CampaignTime`） | 返回代表"当前地图时刻"的 `CampaignTime`，是 `CampaignTime.Now` 的底层来源；每次调用据此刻 `_numTicks` 现算。 |

### 推进与构造

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `Tick(float seconds)`（`internal void`） | 把 `seconds` 秒换算成 ticks（`seconds * CampaignTime.TimeTicksPerSecond`），先存入 `_deltaTimeInTicks`，再累加到 `_numTicks`。这是**唯一**让地图时钟前进的方法，由 `Campaign.TickMapTime` 每帧以 `4320f * num` 调用；`seconds` 为负会让时钟回拨，引擎正常路径不会产生负值。 |
| `MapTimeTracker(CampaignTime initialMapTime)`（`internal`） | 用指定起点初始化累计 ticks（开局用 `CampaignTimeModel.CampaignStartTime`）。由 Campaign 在 `OnGameStart` 调用。 |
| `MapTimeTracker()`（`internal`） | 累计 ticks 置 `0`（用于反序列化 / 默认构造）。 |

### 存档辅助（自动生成，mod 不调用）

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `AutoGeneratedStaticCollectObjectsMapTimeTracker(object, List<object>)` / `AutoGeneratedInstanceCollectObjects(List<object>)` | SaveSystem 自动生成的对象收集委托，把本 tracker 纳入 Campaign 的存档对象图。mod 不应调用。 |
| `AutoGeneratedGetMemberValue_numTicks(object)` / `AutoGeneratedGetMemberValue_deltaTimeInTicks(object)` | SaveSystem 自动生成的字段取值委托，供序列化读取 `_numTicks` / `_deltaTimeInTicks`。mod 不应调用。 |

## 最小真实示例

### 示例 1：读取当前地图时刻并判断某个截止时刻是否过期

`CampaignTime.Now` 与 `CampaignTime.DeltaTime` 的底层都来自 `Campaign.Current.MapTimeTracker`，mod 通过 `CampaignTime` 静态入口读取即可：

```csharp
using TaleWorlds.CampaignSystem;

// 当前地图时刻：等价于 Campaign.Current.MapTimeTracker.Now
CampaignTime now = CampaignTime.Now;

// 记录一个 5 天后的绝对截止时刻（也由同一块计数器支撑）
CampaignTime deadline = CampaignTime.DaysFromNow(5f);

// 之后任意时刻判断是否到期：deadline 已落在当前时刻之前
if (deadline.IsPast)          // 内部比较 CurrentTicks > deadline._numTicks
{
    // 冷却 / 合约 / 任务到期逻辑
}

// 当前是白天还是夜晚（同样读 _numTicks 换算小时）
bool isDay = now.IsDayTime;
```

`deadline` 是一个绝对时刻；判定用 `deadline.IsPast` 而非自己维护倒计时，这样不会因读档、倍速或中途暂停而漂移。

### 示例 2：在某 Behavior 的 tick 内读取本帧推进量

`CampaignTime.DeltaTime` 只代表"上一帧"推进的时长，**必须**在 tick 回调内、同一帧使用，不要缓存跨帧：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

// 在 CampaignBehaviorBase 的每日 / 每帧 tick 回调中
public override void RegisterEvents()
{
    // 订阅你关心的 tick（例如每日）
}

public override void SyncData(IDataStore dataStore) { }

private void OnDailyTick()
{
    // 本帧推进的地图时长；仅在当前 tick 内有效
    CampaignTime delta = CampaignTime.DeltaTime;    // 来自 MapTimeTracker._deltaTimeInTicks
    float deltaDays = delta.ElapsedDaysUntilNow;    // 通常远小于 1 天（取决于倍速）

    // 用它做"按真实流逝比例"的累积，而不是假设固定步长
}
```

`ElapsedDaysUntilNow` 等"UntilNow"系列属性都用 `CampaignTime.Now` 的 `_numTicks` 减去自身 `_numTicks`，因此对 `DeltaTime` 调用会得到"本帧 delta 折合的天数"。在 tick 之外读到的值可能是陈旧或 0。

## 版本注记

本页以 v1.4.5 `TaleWorlds.CampaignSystem/MapTimeTracker.cs` 为准，并交叉核对同目录 `Campaign.cs`（属性 `MapTimeTracker`、构造于 `OnGameStart`、推进于 `TickMapTime` 的 `MapTimeTracker.Tick(4320f * num)`、序列化 `collectedObjects.Add(MapTimeTracker)`）与 `CampaignTime.cs`（静态入口 `Now` / `DeltaTime` / `CurrentTicks` 委托本 tracker）、`SaveableCampaignTypeDefiner.cs`（注册 id 24）。跨版本使用时重新核对 `Tick` 的换算基数（本版 `4320f`）、`TimeTicksPerSecond` 常量来源，以及 `SaveableField` 的字段 id 是否稳定。

## 导航

- ↑ 父级：[战役 API 索引](../)
- ↔ 同级 / 相关：[Campaign](../Campaign) · [CampaignTime](../CampaignTime) · [CampaignTimeControlMode](../CampaignTimeControlMode) · [CampaignTimeModel](../CampaignTimeModel) · [MobileParty](../MobileParty) · [Settlement](../Settlement) · [Hero](../Hero) · [CampaignEvents](../CampaignEvents)
- 序列化：[SaveableFieldAttribute](../../save-system/SaveableFieldAttribute)
- 推进入口（引擎内部）：[CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase)
