---
title: "CampaignPeriodicEventManager"
description: "Campaign 持有的周期调度器：以可保存的 round-robin ticker 分片推进 MobileParty、Settlement、Town、Hero、Clan 和 AI tick，并通过 CreatePeriodicEvent 管理自定义 MBCampaignEvent。"
---

# CampaignPeriodicEventManager

**Namespace:** `TaleWorlds.CampaignSystem`<br>
**Module:** `TaleWorlds.CampaignSystem`<br>
**Type:** `public class CampaignPeriodicEventManager`<br>
**Base:** 无<br>
**1.3.15 source:** `R:\Bannerlord\bannerlord-1.3.15\TaleWorlds.CampaignSystem\CampaignPeriodicEventManager.cs`<br>
**1.4.5 comparison:** `R:\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem\CampaignPeriodicEventManager.cs`

## 一句话职责

它是 `Campaign` 内部的时间调度器：把游戏时间转换成分片的实体 tick，并把自定义周期事件推进到下一次触发；它不是一个可 `new` 的公共服务，也不是 `CampaignEvents` 事件总线。

## 心智模型：两套时钟、一个持有者

把它看成 `Campaign` 的 **scheduler owned by the campaign**：

1. `Campaign` 构造时创建一个 `CampaignPeriodicEventManager`，保存在 `[SaveableField(210)] private _campaignPeriodicEventManager` 中。类的构造函数是 `internal`，源码没有 `Current` 属性，也没有公开实例获取器。
2. `Campaign.OnDataLoadFinished` 调用 `InitializeTickers()`，把全局对象集合和每个回调绑定到内部 `PeriodicTicker<T>`。
3. `Campaign.Tick()` 在正确的 map tick 阶段依次调用 `OnTick`、`MobilePartyHourlyTick`、`TickPeriodicEvents` 和 `TickPartialHourlyAi`。mod 不应直接调用这些 `internal` 方法。
4. mod 唯一的公开扩展入口是静态 `CreatePeriodicEvent(triggerPeriod, initialWait)`。它创建 [MBCampaignEvent](../MBCampaignEvent/) 并立即加入 `Campaign.Current.CustomPeriodicCampaignEvents`；之后由 manager 的 `OnTick` 检查并运行 handler。

这解释了两个容易混淆的入口：

- 需要固定的每日、每小时或按对象 tick 时，订阅 [CampaignEvents](../CampaignEvents/) 的 `DailyTick*`/`HourlyTick*` 事件。
- 需要“每 6 个游戏小时”“每个自定义周期”时，创建 `MBCampaignEvent`。不要把 `CampaignPeriodicEventManager` 当作 `CampaignEventDispatcher` 去调用 `OnXxx`。

## 生命周期与真实调度顺序

### 初始化与内置 ticker

`InitializeTickers()` 将以下集合绑定到 dispatcher 的 receiver 回调：

| ticker 类别 | 集合 | 转发回调 | 触发语义 |
|---|---|---|---|
| MobileParty hourly | `MobileParty.All` | `MobileParty.HourlyTick()` | 原生部队自身小时逻辑 |
| MobileParty daily | `MobileParty.All` | `MobileParty.DailyTick()` | 原生部队自身每日逻辑 |
| hourly party | `MobileParty.All` | `CampaignEventDispatcher.HourlyTickParty` | mod/原生行为的按部队小时事件 |
| hourly settlement | `Settlement.All` 的打散顺序 | `HourlyTickSettlement` | 按据点小时事件 |
| daily settlement | 同一打散顺序 | `DailyTickSettlement` | 据点每日事件 |
| hourly clan | `Clan.All` | `HourlyTickClan` | 家族小时事件 |
| daily party | `MobileParty.All` | `DailyTickParty` | 部队每日事件 |
| daily town | `Town.AllTowns` | `DailyTickTown` | 城镇每日事件 |
| daily hero | `Hero.AllAliveHeroes` | `DailyTickHero` | 存活英雄每日事件 |
| daily clan | `Clan.All` | `DailyTickClan` | 家族每日事件 |
| partial AI | caravan/garrison/militia/villager/custom/patrol/bandit/lord/无 party component 集合 | `TickPartialHourlyAi` | AI 分片小时推进，1.3.15 使用 `DeltaHours * 0.99` |
| quarter-daily party | `MobileParty.All` | `QuarterDailyPartyTick` | 每游戏日四次的按部队事件 |

`PeriodicTicker<T>` 不是每个渲染帧遍历全部对象。它积累 `TickDebt`，按 `Index` round-robin 选择对象；对象列表为空时清零欠账。Settlement 列表还会把村庄、城堡、城镇和其他据点交错排列，避免同一类据点集中在一个瞬间处理。1.3.15 的所有 ticker `doParallel` 都是 `false`，所以这些回调按当前 campaign tick 同步执行。

### `Campaign.Tick()` 中的顺序

1. 当 `dt > 0`（或最初几帧）时，`CampaignEventDispatcher.Tick(_dt)` 和 `CampaignPeriodicEventManager.OnTick(_dt)` 先运行。
2. manager 的 `OnTick` 以 `MinimumPeriodicEventInterval = CampaignTime.Hours(0.05f)`（约 3 个游戏分钟）为轮询下限，检查所有 custom `MBCampaignEvent`，清除已标记事件，并通知活动 `MapState`。
3. 同一 tick 继续推进 map event，再推进原生 mobile-party hourly ticker。
4. `dt > 0` 时调用 `TickPeriodicEvents()`，顺序为 hourly、daily、quarter-daily；之后再推进 partial-hourly AI ticker。

因此，`CreatePeriodicEvent` 不是实时计时器：时间到了也要等下一次 manager signal；若游戏暂停、没有有效 map tick，handler 不会凭空在后台运行。

## 何时使用，何时禁用

### 适合使用 `CreatePeriodicEvent`

- 一个行为需要自定义游戏时间间隔，且不适合把逻辑挂在每日/每小时公共事件上。
- 需要和 campaign 保存/加载生命周期绑定，并能在 session 启动后重建 handler。
- 逻辑可接受同步执行、可能的追赶调用，以及 handler 运行在 campaign tick 中。

### 不适合或禁止的用法

- 不要用它替代 `CampaignEvents.DailyTickEvent`、`DailyTickPartyEvent` 等已存在的事件；固定 cadence 用现有事件更容易与原生系统对齐。
- 不要传 `CampaignTime.Zero` 或负的 `triggerPeriod`。`MBCampaignEvent.CheckUpdate()` 用 `while (NextTriggerTime.IsPast)` 追赶并不断加 `TriggerPeriod`，零/负周期可能形成无限循环。
- 不要把 `initialWait` 当现实时间或线程延迟；它是从 `CampaignTime.Now` 算出的游戏时间初始等待。
- 不要在模块加载、没有 `Campaign.Current` 或 campaign 尚未完成 session 初始化时创建事件；工厂会直接访问 `Campaign.Current.CustomPeriodicCampaignEvents`。
- 不要在 handler 中等待、访问 UI 线程或执行大规模全图扫描；多个逾期周期可能在一次 `CheckUpdate` 中连续运行。

## 依赖图

**上游 / 持有者：**

- [Campaign](../../campaign/Campaign/) 构造并保存 manager，在 `Campaign.Tick` 中调用其内部推进方法。
- [CampaignTime](../CampaignTime/) 提供 `Now`、`DeltaTime`、`Hours`、`Days` 和 `IsPast` 语义。
- `MobileParty.All`、`Settlement.All`、`Town.AllTowns`、`Hero.AllAliveHeroes`、`Clan.All` 是内置 ticker 的对象集合。

**下游：**

- [CampaignEventDispatcher](../CampaignEventDispatcher/) 接收内置 ticker 的 `HourlyTick*`、`DailyTick*`、`TickPartialHourlyAi` 和 `QuarterDailyPartyTick` 转发。
- [CampaignEvents](../CampaignEvents/) 暴露这些转发的可订阅事件；[CampaignBehaviorBase](../CampaignBehaviorBase/) 是 mod 行为的正常 owner。
- [MBCampaignEvent](../MBCampaignEvent/) 接收 custom event handler；[SaveManager](../../save-system/SaveManager/) 保存 manager 的 ticker 状态。

**真实原生消费者：**

- `Campaign.cs` 创建每日、每小时和每四分之一小时的 `MBCampaignEvent`。
- `Army.cs` 创建 1 小时和 0.1 小时事件，并在军团解散时删除它们。
- `MapWeatherCampaignBehavior.cs` 在 `OnSessionLaunchedEvent` 中根据 `Campaign.Current.Models.MapWeatherModel.WeatherUpdateFrequency` 创建天气事件。
- `MapTracksCampaignBehavior.cs` 创建 0.25 小时的轨迹事件；[CampaignBehaviorManager](../CampaignBehaviorManager/) 负责行为注册和读档后的重新装配。

## 唯一公开入口：`CreatePeriodicEvent`

### `public static MBCampaignEvent CreatePeriodicEvent(CampaignTime triggerPeriod, CampaignTime initialWait)`

该方法：

1. `new MBCampaignEvent(triggerPeriod, initialWait)`；构造函数将 `NextTriggerTime` 设为 `CampaignTime.Now + initialWait`。
2. 把新对象加入当前战役的 `CustomPeriodicCampaignEvents` 列表。
3. 返回事件对象，调用方必须立即用 `AddHandler` 绑定 handler。

它不校验 `Campaign.Current`、周期正性、handler 数量或重复创建；也不返回 manager 实例。`MBCampaignEvent` 的 `AddHandler`、`Unregister`、`DeletePeriodicEvent` 是实际的控制面。

### `MBCampaignEvent` 的时机与副作用

- manager 每次 signal 从 custom 列表倒序调用 `CheckUpdate()`。
- `CheckUpdate()` 可能在一次 signal 中多次 `RunHandlers`，直到 `NextTriggerTime` 不再过去；handler 参数会收到当前 `CampaignTime.Now` 所在的 `object[]`。
- `DeletePeriodicEvent()` 只把 `isEventDeleted` 设为 `true`；manager 在本次检查循环后再从列表移除。要避免残留委托，先 `Unregister(owner)`，再标记删除。
- `Unregister(instance)` 按 delegate 的 `Target` 匹配 owner。使用实例方法作为 handler 时可按 owner 清理；匿名闭包的 target 不应被当作行为 owner 误用。

## 真实用法：在 session 启动后建立可清理的六小时事件

该模式对应 1.3.15 `MapWeatherCampaignBehavior` 的实际路径：先订阅 `OnSessionLaunchedEvent`，再从 `CampaignPeriodicEventManager.CreatePeriodicEvent` 创建事件。状态用 behavior 的 `SyncData` 保存，事件对象在 session 生命周期中重建。

```csharp
using System;
using TaleWorlds.CampaignSystem;
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
            return;
        }

        _clockEvent = CampaignPeriodicEventManager.CreatePeriodicEvent(
            CampaignTime.Hours(6f),
            CampaignTime.Hours(1f));
        _clockEvent.AddHandler(
            new MBCampaignEvent.CampaignEventDelegate(OnClockTick));
    }

    private void OnClockTick(MBCampaignEvent campaignEvent, params object[] delegateParams)
    {
        if (MobileParty.MainParty != null && MobileParty.MainParty.IsActive)
        {
            _runCount++;
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("SixHourClockRunCount", ref _runCount);
    }

    public void StopClock()
    {
        if (_clockEvent == null)
        {
            return;
        }

        _clockEvent.Unregister(this);
        _clockEvent.DeletePeriodicEvent();
        _clockEvent = null;
    }
}
```

此例没有直接调用 `OnTick`、`CheckUpdate` 或 dispatcher。`Campaign` 会在正确的 map tick 中推进事件；`StopClock` 的删除会在下一次 manager signal 清理列表。

## 事件与存档风险

- `Campaign._campaignPeriodicEventManager` 和各个 `PeriodicTicker<T>` 带 `[SaveableField]`，且 `OnLoad` 为旧版本存档补建新增 ticker。不要反射改写这些私有字段。
- `CustomPeriodicCampaignEvents` 是 `Campaign` 的 internal 列表；1.3.15 的源码和 `SaveableCampaignTypeDefiner` 没有把它作为普通 mod 的持久化契约公开。`MBCampaignEvent.handlers` 也不是 behavior 的 `SyncData`。不要假设委托、匿名闭包或 `_clockEvent` 引用会跨读档恢复。
- 行为状态应通过 [CampaignBehaviorBase](../CampaignBehaviorBase/) 的 `SyncData(IDataStore)` 保存；在 `OnSessionLaunchedEvent`/对应加载阶段重新创建事件。原生 `MapWeatherCampaignBehavior` 正是这种“状态持久化、事件重新挂接”的模式。
- handler 是同步执行的；未捕获异常会返回到 campaign tick。handler 内触碰已销毁的 `MobileParty`、`Settlement` 或已结束 `MapState` 前要重新判定有效性。
- 列表可能在一次 signal 中追赶多个周期。不要假定一次 handler 调用就等于恰好一个小时/一天，也不要在 handler 中无条件递归创建同周期事件。
- event 的 owner 和行为生命周期必须一致。行为移除时清理 `CampaignEvents` listener；custom event 则调用 `Unregister` 和 `DeletePeriodicEvent`，否则旧 handler 仍可能在后续 tick 中执行。
- 事件只能在有活动 campaign 且相关对象列表已建立后使用。过早创建或跨战役持有旧 `MBCampaignEvent` 会导致空引用、重复调度或旧对象引用。

## 版本风险

1.3.15 与 1.4.5 的 scheduler 结构和调用顺序一致：同样由 `Campaign` 持有，同样有 20 个左右按对象保存的 ticker，同样以 `0.05` 游戏小时为 custom-event signal 下限，同样只公开静态 `CreatePeriodicEvent`。

1.4.5 对源文件进行了现代 C# 格式化，但没有把 manager 变成可实例化服务；`CampaignPeriodicEventManager.Current` 仍不存在。不要照抄 stub 中的 `var manager = CampaignPeriodicEventManager.Current` 或把嵌套 `PeriodicTicker<T>.ToString()` 当成 manager 的公共方法。

## 导航

### ↑ Parent

- [Campaign extension API index](../)
- [Campaign](../../campaign/Campaign/)

### ↔ Sibling

- [CampaignEventDispatcher](../CampaignEventDispatcher/) — 接收并扇出 tick/事件回调
- [CampaignEvents](../CampaignEvents/) — mod 订阅的 tick 事件表
- [MBCampaignEvent](../MBCampaignEvent/) — `CreatePeriodicEvent` 返回的实体

### Related

- [CampaignBehaviorBase](../CampaignBehaviorBase/) · [CampaignBehaviorManager](../CampaignBehaviorManager/) · [CampaignGameStarter](../CampaignGameStarter/)
- [CampaignEventReceiver](../CampaignEventReceiver/) · [CampaignTime](../CampaignTime/)
- [MapWeatherCampaignBehavior](../MapWeatherCampaignBehavior/) · [MapTracksCampaignBehavior](../MapTracksCampaignBehavior/)
- [SaveManager](../../save-system/SaveManager/)
