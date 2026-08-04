---
title: "CampaignPeriodicEventManager"
description: "CampaignPeriodicEventManager 驱动战役中的队伍、据点、英雄、Clan 与 AI 周期 tick，并在当前战役运行期间登记自定义 MBCampaignEvent。"
---
# CampaignPeriodicEventManager

**命名空间:** `TaleWorlds.CampaignSystem`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class CampaignPeriodicEventManager`  
**基类:** 无显式基类  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignPeriodicEventManager.cs`

## 一句话职责

它把战役时间增量分配给类型化的队伍、据点、城镇、英雄和 Clan tick，并为自定义 `MBCampaignEvent` 提供加入当前战役周期队列的入口。它定义的是战役时间和对象集合的调度边界，不是 UI 帧循环或任意业务逻辑的全局计时器。

## 心智模型

**两类周期工作**

这个管理器内部有多组 `PeriodicTicker<T>`。启动时，它们绑定到 `MobileParty.All`、`Settlement.All`、`Town.AllTowns`、`Hero.AllAliveHeroes`、`Clan.All` 以及按队伍类别划分的集合，再把 tick 委托给实体方法或 [CampaignEventDispatcher](../CampaignEventDispatcher)。每个 ticker 用时间增量和自己的索引逐步处理集合，而不是每个渲染帧完整遍历所有对象。

`Campaign.Tick` 依次推进自定义周期信号、队伍小时 tick、小时/每日/四分之一日周期和部分 AI tick。`CampaignEvents` 看到的 `HourlyTickPartyEvent`、`DailyTickEvent` 等因此有明确的时机；它们不是可以由 Mod 任意重排的普通计时器。

**自定义周期事件**

`CreatePeriodicEvent(triggerPeriod, initialWait)` 创建 `MBCampaignEvent`，并把它加入 `Campaign.Current.CustomPeriodicCampaignEvents`。返回对象需要用 `AddHandler` 绑定真实处理函数；到期时由管理器调用 `CheckUpdate`，标记为删除的事件在信号处理阶段被移出列表。

这个入口适合需要战役时间而不是 UI 帧的低频任务。它不替代 `CampaignEvents` 的实体 tick，也不应被用来修改内部 ticker、绕过对象生命周期或把每帧工作塞进很短的周期。

自定义事件是运行时状态，不是会由 `Campaign` 自动恢复的存档对象。`CustomPeriodicCampaignEvents` 在 `Campaign.OnInitialize` 中重新创建，`Campaign` 的存档收集器不收集这个列表；`MBCampaignEvent` 的 handler 和下一次触发时间也不会随之恢复。插件若要在新战役和读档后都运行任务，应在 `OnNewGameCreated`、`OnGameLoadFinished` 或自己的等价生命周期回调中、确认当前战役已初始化后重新注册事件；自己的业务状态仍要单独放进 Behavior 的 `SyncData`。

## 何时使用，何时不要用

- **使用：** 在战役 Behavior 或其它有明确生命周期的系统中注册一个按 `CampaignTime` 触发的低频任务，或理解内置 tick 的调用时机。
- **不要使用：** 直接访问内部 `PeriodicTicker<T>`、重排其集合，或在主菜单/没有 `Campaign.Current` 时创建周期事件。
- **不要使用：** 用自定义周期事件替代 `CampaignEvents.HourlyTickPartyEvent`、`DailyTickEvent` 等已经按实体提供的通知。
- **删除：** 保存返回的 `MBCampaignEvent` 句柄，在所属系统结束时调用 `DeletePeriodicEvent()`；仅丢弃字段引用不会从当前战役列表中移除它。

## 依赖关系

- **所有者与时钟：** [Campaign](../Campaign) 创建管理器，在 `Tick` 中推进它，并持有自定义 [MBCampaignEvent](../MBCampaignEvent) 列表。
- **实体输入：** 管理器消费 [MobileParty](../MobileParty)、[Settlement](../Settlement)、[Hero](../Hero)、[Clan](../Clan) 和 [Town](../Town) 的活动集合。
- **事件下游：** 内置 ticker 通过 [CampaignEventDispatcher](../CampaignEventDispatcher) 把 tick 转给 [CampaignEvents](../CampaignEvents)；Mod 通常在 [CampaignBehaviorBase](../CampaignBehaviorBase) 中订阅，而不是操纵管理器内部状态。

## 内置 tick 与时机

| 阶段 | 处理对象或通知 | 重要边界 |
| --- | --- | --- |
| `OnTick` / 周期信号 | 检查 `MBCampaignEvent` 的到期时间并清理删除项。 | 受最小周期间隔限制，不等于每个帧都触发。 |
| 队伍小时 tick | 逐步处理 `MobileParty.All`。 | 适合实体自身小时逻辑，不要把它当作全队伍同步快照。 |
| 小时周期 | 队伍、Settlement、Clan 的 hourly ticker 调用 dispatcher。 | 监听 [CampaignEvents](../CampaignEvents) 对应事件。 |
| 每日周期 | 队伍、Town、Settlement、Hero、Clan 的 daily ticker。 | 事件可能分批处理，不能假设所有对象在同一瞬间完成。 |
| 部分类别 AI tick | Caravan、Garrison、Militia、Villager、Custom、Patrol、Bandit、Lord 等队伍分组。 | 由分类集合驱动，队伍组件变更会影响后续处理集合。 |

## 真实示例：注册并删除自定义周期事件

下面是参考 v1.4.5 `MapTracksCampaignBehavior` 生命周期位置改写的防御性 Mod 模式，不是逐行复刻：源码的 `RegisterEvents()` 还注册小时 tick、队伍小时 tick 和队伍销毁事件，且其 `AddEventHandler()` 会无条件创建句柄。本例只保留与周期事件注册有关的新战役/读档完成通知，并用幂等方法创建和绑定事件；所属系统结束时标记删除。这样不会把运行时句柄误当成可由存档恢复的对象。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.SaveSystem;

public sealed class MapReportBehavior : CampaignBehaviorBase
{
    private MBCampaignEvent _quarterHourlyReport;

    public override void RegisterEvents()
    {
        CampaignEvents.OnNewGameCreatedEvent.AddNonSerializedListener(this, OnNewGameCreated);
        CampaignEvents.OnGameLoadFinishedEvent.AddNonSerializedListener(this, OnGameLoadFinished);
    }

    private void OnNewGameCreated(CampaignGameStarter gameStarter)
    {
        EnsureQuarterHourlyReport();
    }

    private void OnGameLoadFinished()
    {
        EnsureQuarterHourlyReport();
    }

    private void EnsureQuarterHourlyReport()
    {
        if (Campaign.Current == null ||
            (_quarterHourlyReport != null && !_quarterHourlyReport.isEventDeleted))
        {
            return;
        }

        _quarterHourlyReport = CampaignPeriodicEventManager.CreatePeriodicEvent(
            CampaignTime.Hours(0.25f),
            CampaignTime.Hours(0.1f));
        _quarterHourlyReport.AddHandler(OnQuarterHourlyReport);
    }

    private void OnQuarterHourlyReport(MBCampaignEvent campaignEvent, object[] delegateParams)
    {
        if (PartyBase.MainParty.IsValid)
        {
            MobileParty mainParty = MobileParty.MainParty;
            CampaignTime now = CampaignTime.Now;
        }
    }

    public void Stop()
    {
        _quarterHourlyReport?.DeletePeriodicEvent();
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

如果任务有自己的持久状态，仍需在 Behavior 的 `SyncData` 中同步字段；周期事件句柄和监听器生命周期也要与 Behavior 的注册/移除一致。

## 风险与存档边界

- **战役上下文：** `CreatePeriodicEvent` 立即访问 `Campaign.Current.CustomPeriodicCampaignEvents`；在战役不存在时调用会失败。
- **删除不是立即移除：** `DeletePeriodicEvent()` 只标记事件，管理器在下一次周期信号中清理列表。处理函数必须能面对标记与实际清理之间的窗口。
- **周期太短：** 过短的 `triggerPeriod` 会在时间债务循环中反复运行，阻塞战役 tick；周期任务只做轻量、可重入的工作。
- **集合快照：** 内置 ticker 绑定启动时的对象集合和分类；直接改变内部集合或在错误阶段创建队伍，会让 tick、对象登记与事件顺序脱节。
- **内置 tick 与自定义事件的存档边界：** 内置 `PeriodicTicker<T>` 的索引和时间债务属于管理器的保存状态；自定义事件列表、handler 和 `MBCampaignEvent` 的下一次触发时间则是运行时状态，不会由 `Campaign` 的存档收集器自动恢复。读档后在战役生命周期回调中重新注册，并把任务自己的持久字段交给 Behavior 的 `SyncData`；不要在读档前缓存旧的实体集合。

## 版本注记

本页以 v1.4.5 `CampaignPeriodicEventManager.cs`、`Campaign.cs` 和 `MBCampaignEvent.cs` 为准。跨版本使用时重新核对最小周期、AI 分类和自定义事件删除时机；不要把引擎内部 ticker 名称当作稳定的 Mod 扩展点。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同级：[Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [CampaignEventDispatcher](../CampaignEventDispatcher) · [CampaignBehaviorBase](../CampaignBehaviorBase)
- 相关类型：[MBCampaignEvent](../MBCampaignEvent) · [MobileParty](../MobileParty) · [Settlement](../Settlement) · [Hero](../Hero) · [Clan](../Clan)
