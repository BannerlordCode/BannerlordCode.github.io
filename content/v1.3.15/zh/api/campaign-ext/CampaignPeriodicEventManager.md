---
title: "CampaignPeriodicEventManager（战役周期事件管理器）"
description: "Bannerlord 战役层的内部周期调度器：用可保存的 round-robin ticker 推进 MobileParty / Settlement / Town / Hero / Clan 的每日·每小时·每刻 tick，并经由唯一的 static CreatePeriodicEvent 让 mod 注册自定义周期 MBCampaignEvent。"
---

# CampaignPeriodicEventManager（战役周期事件管理器）

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CampaignPeriodicEventManager`  
**Base:** 无（隐式派生自 `System.Object`）  
**源文件路径（1.4.5）：** `TaleWorlds.CampaignSystem/CampaignPeriodicEventManager.cs`  
**源文件路径（1.3.15）：** `TaleWorlds.CampaignSystem/CampaignPeriodicEventManager.cs`

## 概述

`CampaignPeriodicEventManager` 是 Bannerlord 战役层（Campaign）内部的时间调度器，由 `Campaign` 持有并驱动。它把流逝的游戏时间换算成分片的实体 tick，分发给全图的 MobileParty、Settlement、Town、Hero、Clan，让它们的每日 / 每小时 / 每刻逻辑按序推进；同时提供一个静态入口 `CreatePeriodicEvent`，让 mod 注册自定义周期事件。它既不保存业务数据，也不是可直接 `new` 的服务，而是一台“调度器”：mod 通过订阅 `CampaignEvents` 或注册 `MBCampaignEvent` 这两种方式扩展战役的周期逻辑。

## 一句话职责

它是 `Campaign` 内部的时间调度器：把游戏时间换算成分片的实体 tick 分发给全图对象，并把 mod 注册的自定义周期事件推进到下一次触发；它不是 `new` 出来的公共服务，也不是 `CampaignEvents` 事件总线本身。

## 心智模型

把它理解为 **“`Campaign` 拥有的 scheduler”**，而不是一个数据容器：

1. `Campaign` 在构造时 `new CampaignPeriodicEventManager()`，字段是 `private CampaignPeriodicEventManager _campaignPeriodicEventManager`（`Campaign.cs:576`）。类的构造函数是 `internal`，源码里**没有 `Current` 属性，也没有任何公开的实例获取器**。你永远拿不到 manager 本身。
2. 读档完成、数据就绪后，`Campaign` 调用 `_campaignPeriodicEventManager.InitializeTickers()`（`Campaign.cs:723`），把全局对象集合（`MobileParty.All`、`Settlement.All`、`Clan.All`、`Town.AllTowns`、`Hero.AllAliveHeroes`）与对应的 `CampaignEventDispatcher` 回调逐个绑定到内部的 `PeriodicTicker<T>`。
3. 之后每一帧的 `Campaign.Tick(_dt)` 按固定顺序驱动它（见下方“生命周期”）。mod **切勿直接调用** `OnTick` / `TickPeriodicEvents` / `MobilePartyHourlyTick` / `TickPartialHourlyAi` 这些 `internal` 方法——它们只属于引擎的 tick 流程。
4. mod 唯一的公开扩展入口是静态方法 `CreatePeriodicEvent(triggerPeriod, initialWait)`。它创建一个 [MBCampaignEvent](../MBCampaignEvent/) 并立即塞进 `Campaign.Current.CustomPeriodicCampaignEvents`；随后由 manager 在 `OnTick` 里逐个 `CheckUpdate()` 推进你的 handler。

这解释了两个常被混淆的入口该如何选择：

- 需要**固定的每日 / 每小时 / 每刻**逻辑 → 订阅 [CampaignEvents](../CampaignEvents/) 的 `DailyTick*` / `HourlyTick*` 事件。
- 需要**“每 6 个游戏小时”“每 0.25 天”这类自定义周期** → 用 `CreatePeriodicEvent` 注册一个 `MBCampaignEvent`。
- 不要把 `CampaignPeriodicEventManager` 当成 `CampaignEventDispatcher` 去手动 `OnXxx`；它只负责调度，不负责派发事件内容。

## 生命周期与真实调度顺序

### 初始化（读档完成后）

`InitializeTickers()` 把以下集合绑定到转发回调（全部为同步执行，1.4.5 与 1.3.15 的 `doParallel` 均为 `false`）：

| ticker 类别 | 集合 | 转发回调 |
|---|---|---|
| MobileParty 自身小时逻辑 | `MobileParty.All` | `MobileParty.HourlyTick()` |
| MobileParty 自身每日逻辑 | `MobileParty.All` | `MobileParty.DailyTick()` |
| 按部队小时事件 | `MobileParty.All` | `CampaignEventDispatcher.HourlyTickParty` |
| 按据点小时事件 | `Settlement.All`（打散顺序） | `HourlyTickSettlement` |
| 据点每日事件 | 同一打散顺序 | `DailyTickSettlement` |
| 家族小时事件 | `Clan.All` | `HourlyTickClan` |
| 部队每日事件 | `MobileParty.All` | `DailyTickParty` |
| 城镇每日事件 | `Town.AllTowns` | `DailyTickTown` |
| 存活英雄每日事件 | `Hero.AllAliveHeroes` | `DailyTickHero` |
| 家族每日事件 | `Clan.All` | `DailyTickClan` |
| AI 分片小时推进 | 商队/驻军/民兵/村民/自定义/巡逻/强盗/领主/无组件部队集合 | `TickPartialHourlyAi`（乘以 `DeltaHours * 0.99`） |
| 每刻部队事件（每日四次） | `MobileParty.All` | `QuarterDailyPartyTick` |

`PeriodicTicker<T>` 不是每帧遍历全部对象：它累计 `TickDebt`，按 `Index` 做 round-robin 选取，列表为空时清零欠账。据点列表还会把村庄 / 城堡 / 城镇 / 其它据点交错排列，避免同类据点集中在同一瞬间处理。`[SaveableField]` / `[SaveableProperty]` 让这些 ticker 状态随存档保留，旧档读入时 `OnLoad` 会补建缺失的 ticker。

### `Campaign.Tick(_dt)` 中的真实顺序（来自 `Campaign.cs:960-982`）

1. `CampaignEventDispatcher.Instance.Tick(_dt)`
2. `_campaignPeriodicEventManager.OnTick(_dt)` —— 触发所有自定义 `MBCampaignEvent`（倒序 `CheckUpdate`）
3. `MapEventManager.Tick()`
4. `_campaignPeriodicEventManager.MobilePartyHourlyTick()`
5. `_campaignPeriodicEventManager.TickPeriodicEvents()` —— 顺序为 hourly → daily → quarter-daily
6. `_campaignPeriodicEventManager.TickPartialHourlyAi()`

因此你的自定义事件 handler 运行在 **第 2 步**，早于实体 hourly/daily ticker。它**不是实时计时器**：时间到了也要等下一次 manager signal；若游戏暂停或没有有效的 map tick，handler 不会在后台凭空运行。

## 何时使用，何时不要用

### 适合使用 `CreatePeriodicEvent`

- 一个行为需要**自定义的游戏时间间隔**，且不适合挂在既有每日 / 每小时公共事件上。
- 逻辑能接受同步执行、可能的“追赶式”多次调用，并且运行在 campaign tick（地图阶段）中。
- 状态通过 [CampaignBehaviorBase](../CampaignBehaviorBase/) 的 `SyncData` 持久化，事件在 session 启动后重建。

### 不适合或禁止的用法

- 固定 cadence（每日 / 每小时）请直接用 `CampaignEvents` 的既有事件；它们与原生系统对齐更简单，不要为固定节奏硬造自定义事件。
- 不要传入 `CampaignTime.Zero` 或负的 `triggerPeriod`。`MBCampaignEvent.CheckUpdate()` 用 `while (NextTriggerTime.IsPast && !isEventDeleted)` 追赶并不断 `NextTriggerTime += TriggerPeriod`；零 / 负周期会让 `NextTriggerTime` 永远不再前进，形成**死循环**。
- 不要把 `initialWait` 当成现实时钟或线程延迟；它是从 `CampaignTime.Now` 算起的游戏时间初始等待。
- 不要在模块加载阶段、没有 `Campaign.Current`、或 session 尚未初始化完成时创建事件——工厂直接访问 `Campaign.Current.CustomPeriodicCampaignEvents`，此时会空引用。
- 不要在 handler 里等待、触碰 UI 线程或做全图扫描；一次 signal 中可能连续运行多个逾期周期（追赶）。

## 依赖图

**上游 / 持有者：**

- [Campaign](../../campaign/Campaign/) 构造并持有 manager，在读档完成后 `InitializeTickers()`，并在 `Campaign.Tick` 中按序驱动其内部方法。
- [CampaignTime](../CampaignTime/) 提供 `Now`、`DeltaTime`、`Hours`、`Days`、`IsPast`、`ToHours`、`ToDays` 等语义。
- `MobileParty.All` / `Settlement.All` / `Town.AllTowns` / `Hero.AllAliveHeroes` / `Clan.All` 是内置 ticker 的对象来源。

**下游 / 派发：**

- [CampaignEventDispatcher](../CampaignEventDispatcher/) 接收内置 ticker 的 `HourlyTick*` / `DailyTick*` / `QuarterDailyPartyTick` / `TickPartialHourlyAi` 转发。
- [CampaignEvents](../CampaignEvents/) 把这些转发暴露为可订阅事件；[CampaignBehaviorBase](../CampaignBehaviorBase/) 是 mod 行为的正常归属处。
- [MBCampaignEvent](../MBCampaignEvent/) 承载自定义事件与其 handler；[SaveManager](../../save-system/SaveManager/) 通过 saveable 字段保存 manager 的 ticker 状态。

**真实原生消费者（已核实）：**

- `Campaign.cs:1010-1024` 用 `CreatePeriodicEvent` 注册了每日（`Days(1f)`）、每小时（`Hours(1f)`）、每刻（`Hours(0.25f)`）三个内部周期事件。
- 其它原生行为（天气、轨迹等，如 [MapWeatherCampaignBehavior](../MapWeatherCampaignBehavior/)、[MapTracksCampaignBehavior](../MapTracksCampaignBehavior/)）也采用同一机制：在 session 启动时创建、session 生命周期内持有、结束时清理。

## 风险段（可能导致崩溃或坏档的用法）

- **坏档 / 委托不恢复**：manager 与各个 `PeriodicTicker<T>` 带 `[SaveableField]`，会随存档保留。但自定义事件的委托（`handlers`）和你的 `_clockEvent` 引用**不是** saveable 契约的一部分，读档后不会自动恢复。正确做法是用 `SyncData` 保存行为状态，在 `OnSessionLaunched` 重新 `CreatePeriodicEvent` 并 `AddHandler`。
- **错误阶段 tick**：不要在读档途中、Mission 战斗内、或 `Campaign.Current` 不存在时创建事件。handler 运行在 `Campaign.Tick` 的地图阶段（第 2 步），不是 Mission 帧；不要假设此时“世界已稳定可随意写”。
- **引用已销毁对象**：handler 触碰的 `MobileParty` / `Settlement` / `Hero` 可能已被销毁或移除。使用前重新判定有效性（如 `MobileParty.MainParty != null && MobileParty.MainParty.IsActive`），否则空引用崩溃。
- **ObjectManager 未注册对象**：若 handler 引用的 `MBObjectBase`（英雄、据点等）尚未注册进 `MBObjectManager`，相关查询 / 操作会得到不可预期结果；确保对象来自 `Hero.AllAliveHeroes` 等受管集合或已正确创建。
- **行为寿命不匹配**：事件 owner 必须与其行为同生共死。行为被移除 / 重载时务必 `Unregister(owner)` + `DeletePeriodicEvent()`，否则旧 handler 会在后续 tick 中持续触发（逻辑重入甚至双重执行）。
- **Model 空替换**：handler 若依赖 `Campaign.Current.Models.Xxx`（如天气、地图模型），在模型被替换或未初始化时可能为 `null`；调用前判空。
- **UI 线程 / 大规模扫描**：handler 在游戏线程（campaign tick）同步执行。不要等待、弹阻塞 UI，或做整图遍历；一次 signal 可能因追赶而连续运行多个逾期周期，放大耗时与重入风险。
- **顺序依赖**：自定义事件（`OnTick`）先于实体 hourly/daily ticker 执行。若你的逻辑依赖某个原生系统已在本 tick 推进过，需意识到它在你之前尚未运行。

## 成员说明

### 公开入口（mod 唯一可用）

#### `public static MBCampaignEvent CreatePeriodicEvent(CampaignTime triggerPeriod, CampaignTime initialWait)`

- **用途**：创建一个自定义周期事件并登记进 `Campaign.Current.CustomPeriodicCampaignEvents`，返回该 `MBCampaignEvent` 供你 `AddHandler` 绑定回调。
- **副作用**：直接写入当前战役的自定义事件列表；构造函数把 `NextTriggerTime` 设为 `CampaignTime.Now + initialWait`。**不做任何校验**（不检查 `Campaign.Current` 是否存在、周期是否为正、是否重复创建）。
- **何时调用**：仅在已有活动战役、且最好在 `OnSessionLaunched` 之后调用。拿到返回值后**立即** `AddHandler`；不要在模块加载或 `Campaign.Current == null` 时调用。

### 内部驱动（`internal`，mod 切勿调用）

这些方法是引擎 tick 流程的一部分，由 `Campaign.Tick` 调用；mod 直接调用会破坏 tick 顺序与状态。

| 方法 | 作用 | 为什么不要从 mod 调 |
|---|---|---|
| `internal void OnTick(float dt)` | 触发自定义事件 signal（`CheckUpdate` 倒序、清理已删除、通知 `MapState`） | 时机由 `Campaign.Tick` 统一控制 |
| `internal void TickPeriodicEvents()` | 顺序推进 hourly → daily → quarter-daily ticker | 跳过它会漏 tick，乱序会错状态 |
| `internal void MobilePartyHourlyTick()` | 推进原生 MobileParty 自身小时逻辑 | 属于原生 tick 链 |
| `internal void TickPartialHourlyAi()` | 推进九类部队的 AI 分片小时逻辑 | 属于原生 tick 链 |
| `internal void InitializeTickers()` | 绑定对象集合与回调 | 仅在读档完成后由 `Campaign` 调一次 |

### 内部类型（不向 mod 暴露）

`internal class PeriodicTicker<T>`：round-robin 的“每帧推进若干对象”的分片 ticker（`TickDebt` + `Index`）。它是 manager 的私有实现细节，mod 既拿不到也不应依赖其字段。

## 真实示例

### 示例 1：在 session 启动后建立可清理的六小时事件

模式要点：订阅 `OnSessionLaunchedEvent` → 在 `CreatePeriodicEvent` 后立刻 `AddHandler` → 用 `SyncData` 保存行为状态 → 提供 `StopClock()` 在行为卸载时 `Unregister` + `DeletePeriodicEvent`。获取路径是静态方法，前提是已有 `Campaign.Current`。

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.SaveSystem;

public sealed class SixHourClockBehavior : CampaignBehaviorBase
{
    private MBCampaignEvent _clockEvent;
    private int _runCount;

    public override void RegisterEvents()
    {
        CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(
            this,
            new Action<CampaignGameStarter>(OnSessionLaunched));
    }

    private void OnSessionLaunched(CampaignGameStarter starter)
    {
        if (_clockEvent != null)
        {
            return; // 防止重载后重复创建
        }

        _clockEvent = CampaignPeriodicEventManager.CreatePeriodicEvent(
            CampaignTime.Hours(6f),   // 触发周期：每 6 游戏小时
            CampaignTime.Hours(1f));  // 初次等待：1 游戏小时后首次触发
        _clockEvent.AddHandler(
            new MBCampaignEvent.CampaignEventDelegate(OnClockTick));
    }

    private void OnClockTick(MBCampaignEvent campaignEvent, params object[] delegateParams)
    {
        // handler 运行在 Campaign.Tick 的地图阶段，务必先判定对象有效性
        MobileParty main = MobileParty.MainParty;
        if (main != null && main.IsActive)
        {
            _runCount++;
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 只持久化行为状态；事件本身在 OnSessionLaunched 重建
        dataStore.SyncData("SixHourClockRunCount", ref _runCount);
    }

    public void StopClock()
    {
        if (_clockEvent == null)
        {
            return;
        }
        _clockEvent.Unregister(this);     // 先按 owner 移除委托
        _clockEvent.DeletePeriodicEvent(); // 标记删除，下一次 signal 时由 manager 清理列表
        _clockEvent = null;
    }
}
```

此例没有调用 `OnTick` / `CheckUpdate` 或 `CampaignEventDispatcher`；`Campaign` 会在正确 tick 中推进事件，`DeletePeriodicEvent` 的清理发生在下一次 manager signal。

### 示例 2（正确替代）：固定每日逻辑请订阅既有事件

如果你的需求只是“每天跑一次”，不要造自定义事件——直接订阅 `CampaignEvents` 的每日事件，它与原生系统顺序对齐、无需手动清理：

```csharp
public sealed class DailyLogBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // 固定 cadence 用既有事件，而非 CreatePeriodicEvent
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(
            this,
            new Action<object>(OnDailyTick));
    }

    private void OnDailyTick(object obj)
    {
        // 每天触发一次
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

## 版本提示

- **1.3.15 与 1.4.5 一致**：本类的 mod 可见 API（`public static CreatePeriodicEvent`）、`internal` 构造与持有方式、`Campaign.Tick` 中的调用顺序、以 `CampaignTime.Hours(0.05f)` 为自定义事件 signal 下限，两版本完全相同；差异仅在于 1.4.5 的源码格式化与 `SignalPeriodicEvents` 中 `MapState` 判空写法（`?.` vs 显式判空）。
- **没有 `CampaignPeriodicEventManager.Current`**：任何版本下都不存在该静态实例属性，照抄“`var mgr = CampaignPeriodicEventManager.Current`”会编译失败。获取自定义周期事件能力的唯一途径是静态 `CreatePeriodicEvent`（依赖 `Campaign.Current`）。

## 导航

### ↑ Parent

- [Campaign 扩展 API 索引](../)
- [Campaign](../../campaign/Campaign/) — 持有并驱动本 manager 的世界对象

### ↔ Sibling

- [MBCampaignEvent](../MBCampaignEvent/) — `CreatePeriodicEvent` 返回的事件实体
- [CampaignEvents](../CampaignEvents/) — mod 订阅的每日 / 每小时 tick 事件表
- [CampaignEventDispatcher](../CampaignEventDispatcher/) — 接收并扇出 tick 回调
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — 承载自定义事件的 mod 行为基类
- [CampaignTime](../CampaignTime/) — tick 用的时间与周期语义

### Related

- [CampaignBehaviorManager](../CampaignBehaviorManager/) · [CampaignGameStarter](../CampaignGameStarter/) · [CampaignEventReceiver](../CampaignEventReceiver/)
- [MapWeatherCampaignBehavior](../MapWeatherCampaignBehavior/) · [MapTracksCampaignBehavior](../MapTracksCampaignBehavior/)
- [SaveManager](../../save-system/SaveManager/) — 保存 manager 的 ticker 状态
- [崩溃与存档边界](../../../architecture/crash-boundaries) · [SDK 总览](../../../architecture/sdk-overview)
