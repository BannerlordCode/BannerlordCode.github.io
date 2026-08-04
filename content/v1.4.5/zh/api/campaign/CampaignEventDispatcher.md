---
title: "CampaignEventDispatcher"
description: "CampaignEventDispatcher 是当前战役的内部事件接收器扇出层，把引擎回调转发给 CampaignEvents、问题和任务系统。"
---
# CampaignEventDispatcher

**命名空间:** `TaleWorlds.CampaignSystem`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class CampaignEventDispatcher : CampaignEventReceiver`  
**基类:** [CampaignEventReceiver](../CampaignEventReceiver)  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignEventDispatcher.cs`

## 一句话职责

它把战役引擎产生的生命周期、据点、队伍、英雄和 tick 回调广播给已注册的接收器；它是内部转发层，不是 Mod 应直接调用的事件订阅门面。理解它的关键是区分“引擎状态变化已经发生”与“Mod 通过 CampaignEvents 观察变化”这两个阶段。

## 心智模型

**一条扇出链**

`Campaign.Current` 建立 `CampaignEvents`、`IssueManager` 和 `QuestManager` 后，把这些对象放入 `CampaignEventDispatcher` 的接收器数组。`CampaignEventDispatcher.Instance` 解析当前战役的实例；像 `OnHeroJoinedParty`、`OnSettlementEntered`、`HourlyTickParty` 和 `DailyTick` 这样的公开回调，会依次调用每一个接收器的同名方法。

因此 dispatcher 的职责是 **转发已经发生的事件**，不是决定规则，也不持有一个 Mod 应该自己管理的订阅表。真正面向 Mod 的静态事件入口在 [CampaignEvents](../CampaignEvents)，其 `IMbEvent` 会把 dispatcher 转发的通知交给以 owner 注册的监听器。

**为什么不要直接调用它**

虽然许多转发方法是公开的，但直接调用 `CampaignEventDispatcher.Instance.OnSettlementEntered(...)` 会伪造一个引擎生命周期回调，绕开触发方的状态更新、参数时序和其它接收器。行为应在 [CampaignBehaviorBase](../CampaignBehaviorBase).`RegisterEvents()` 中订阅 [CampaignEvents](../CampaignEvents)，需要改变世界时再调用对应 Action。

`RemoveListeners(object)` 是统一清理边界：dispatcher 会把 owner 传给所有接收器，`CampaignEvents` 再清掉该 owner 的非序列化监听器。它不等同于清空行为列表，也不负责保存 Mod 的字段。

## 何时使用，何时不要用

- **使用它的公共关联：** 理解 Action、Campaign tick、地图事件如何到达 [CampaignEvents](../CampaignEvents)，或排查某个回调为什么在特定阶段执行。
- **不要使用：** 直接调用 dispatcher 的 `On*`/`Tick*` 方法来触发业务；订阅 `CampaignEvents` 才能保留事件所有者和生命周期。
- **不要使用：** 自己构造 `CampaignEventDispatcher`；其构造函数和接收器注册是 Campaign 初始化内部的一部分。
- **清理：** 让 [CampaignBehaviorManager](../CampaignBehaviorManager) 移除行为，或使用事件 owner 的正常清理流程，不要只丢弃行为对象引用。

## 依赖关系

- **所有者：** [Campaign](../Campaign) 创建 dispatcher，并把 [CampaignEvents](../CampaignEvents)、IssueManager 和 QuestManager 注册为接收器。
- **上游回调：** [CampaignPeriodicEventManager](../CampaignPeriodicEventManager) 推送队伍、据点、英雄和 Clan tick；地图与 Action 代码也通过 dispatcher 报告状态变化。
- **Mod 下游：** [CampaignBehaviorBase](../CampaignBehaviorBase) 在 `RegisterEvents()` 中订阅 [CampaignEvents](../CampaignEvents)，具体实体使用 [MobileParty](../MobileParty)、[Settlement](../Settlement) 和 [Hero](../Hero)。

## 转发面与时序

| 回调类别 | dispatcher 的工作 | Mod 的正确观察点 |
| --- | --- | --- |
| `OnHeroJoinedParty` | 按接收器顺序转发英雄加入队伍通知。 | `CampaignEvents.OnHeroJoinedPartyEvent`。 |
| `OnBeforeSettlementEntered` / `OnSettlementEntered` / `OnAfterSettlementEntered` | 保留进入据点前、进入时、进入后的三个阶段，并逐个扇出。 | `CampaignEvents.BeforeSettlementEnteredEvent`、`SettlementEntered`、`AfterSettlementEntered`。 |
| `HourlyTickParty` / `DailyTick` | 接收周期管理器产生的 tick，并转发给各接收器。 | `CampaignEvents.HourlyTickPartyEvent` 或 `DailyTickEvent`。 |
| `OnGameLoaded` / `OnGameLoadFinished` | 在读档生命周期中通知接收器。 | Behavior 的注册与 `SyncData` 必须尊重读档时序。 |
| `RemoveListeners(owner)` | 将同一 owner 传给全部接收器，完成监听器清理。 | 由 Behavior 管理器和事件 owner 共同维护。 |

## 真实示例：订阅而不是伪造 dispatcher 回调

下面的写法使用 v1.4.5 公开的静态事件入口。`CampaignEvents.OnHeroJoinedPartyEvent` 的参数是 `Hero, MobileParty`，`SettlementEntered` 的参数是 `MobileParty, Settlement, Hero`；dispatcher 会在真实状态变化发生后将它们转发给监听器。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.SaveSystem;

namespace MyMod
{
    public sealed class PartyObservationBehavior : CampaignBehaviorBase
    {
        public override void RegisterEvents()
        {
            CampaignEvents.OnHeroJoinedPartyEvent.AddNonSerializedListener(this, OnHeroJoinedParty);
            CampaignEvents.SettlementEntered.AddNonSerializedListener(this, OnSettlementEntered);
        }

        private void OnHeroJoinedParty(Hero hero, MobileParty party)
        {
            string partyId = party.StringId;
        }

        private void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
        {
            Settlement enteredSettlement = settlement;
        }

        public override void SyncData(IDataStore dataStore)
        {
        }
    }
}
```

这里没有调用 `CampaignEventDispatcher.Instance`。如果行为需要保存计数，应在自己的 `SyncData(IDataStore)` 中同步字段；事件监听关系本身不是 dispatcher 的存档数据。

## 风险与边界

- **伪造回调：** 直接调用 `On*` 会让接收器看到一个没有对应实体状态变更的通知，可能重复发奖、重复更新 roster 或打乱据点进入顺序。
- **活动战役要求：** `Instance` 依赖 `Campaign.Current`；模块加载、主菜单和战役销毁阶段不适合读取或使用它。
- **监听器泄漏：** 创建或移除 Behavior 时若不保留 owner，非序列化监听器可能继续持有旧对象。依靠 Behavior 管理器的移除路径，或明确清理相同 owner。
- **回调顺序：** `Before`、主事件、`After` 以及 tick 回调不是可互换的。不要在较早回调中假设后续 Action 已完成全部状态写入。
- **线程与重入：** dispatcher 会按接收器数组同步遍历；监听器中再次触发相同业务事件可能造成重入或重复处理。把观察逻辑做成幂等操作。

## 版本注记

本页以 v1.4.5 的 `CampaignEventDispatcher`、`CampaignEvents` 和 `Campaign` 初始化路径为准。跨版本使用时重新核对事件名称和参数，特别是 `OnHeroJoinedPartyEvent`、据点进入阶段和 tick 事件；不要把 dispatcher 的内部回调名当作稳定的 Mod 注册 API。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同级：[Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignPeriodicEventManager](../CampaignPeriodicEventManager)
- 相关生命周期：[MobileParty](../MobileParty) · [Settlement](../Settlement) · [Hero](../Hero) · [CampaignBehaviorManager](../CampaignBehaviorManager)
