---
title: "CampaignEventReceiver"
description: "284 个虚方法组成的战役回调契约：继承它就能用 override 方式接住英雄、队伍、聚落、家族、王国、战斗与存档的全部原生回调，无需触碰 CampaignEvents 静态事件。"
---

# CampaignEventReceiver

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignEventReceiver`
**Base:** 无（抽象基类，1.5.3 里约 280 个 `public virtual` 空方法）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/CampaignEventReceiver.cs`

## 概述

`CampaignEventReceiver` 是一个**纯虚方法契约基类**：1.5.3 里约 280 个 `public virtual void` 空实现，覆盖战役里所有可挂钩的语义回调——`OnHeroLevelledUp(Hero, bool)`、`OnSettlementEntered(MobileParty, Settlement, Hero)`、`OnClanChangedKingdom(...)`、`DailyTick()`、`MissionTick(float)`、`OnBeforeSave()` 等等。它和 [CampaignEvents](../CampaignEvents) 是同一套回调的**两种接入方式**：静态事件用 `IMbEvent` 订阅，继承本类用 `override`。原生世界管理器（如 `KingdomManager`、`Settlement`、`Army`）也普遍继承它并转发调用。

## 心智模型

调用链是这样的：

```
原生系统（Hero/Clan/Settlement/Army…）调用自己的 DoSomething()
  └→ CampaignEvents.Instance.XxxEvent.Invoke(...)        // 静态事件侧
  └→ CampaignEventDispatcher.Instance.OnXxx(...)         // 分发器侧
       └→ 遍历 this._eventReceivers，每个都调 eventReceivers[i].OnXxx(...)
```

`_eventReceivers` 数组来自 `CampaignEventDispatcher` 的构造函数参数——即「谁注册成了事件接收者」。**通过 `Campaign.AddCampaignEventReceiver(CampaignEventReceiver)` 加进来的接收者，会在每次 `Tick` / `DailyTick` / 各类 `OnXxx` 时被统一遍历调用。**

所以继承本类的价值是：**方法签名由基类固定，IDE 给你补全，不会写错参数个数**；而静态事件方式签名要自己查。

**常见误用与坑**

1. **忘了 `Campaign.AddCampaignEventReceiver(this)`** —— 只继承、不注册，方法永远不被调用，且没有任何提示。这是最常见的「回调不触发」原因。
2. **在 override 里直接改世界状态而不走 Action** —— 和直写字段一样，绕过事件链。
3. **`Tick(float dt)` 里做重活**：这是每帧调用的虚方法。1.5.3 里 `Tick` 由 `CampaignEventDispatcher.Tick` 每帧广播。
4. **依赖 override 之间的调用顺序**：分发器是按 `_eventReceivers` 数组顺序遍历的，数组顺序 = 注册顺序，不同模块的相对顺序不可控。

## 成员与调用时机

**周期性回调**

- `virtual void Tick(float dt)`：每帧（战役时间推进时）。注意参数是**本帧游戏时间增量**，暂停时为 0。
- `virtual void MissionTick(float dt)`：任务（战斗/对话场景）期间的 tick，与战役 tick 分开。
- `virtual void HourlyTick()` / `virtual void QuarterHourlyTick()` / `virtual void DailyTick()`：游戏内小时 / 15 分钟 / 每日。
- `virtual void HourlyTickParty(MobileParty)` / `HourlyTickSettlement(Settlement)` / `HourlyTickClan(Clan)`：分组的小时级回调。
- `virtual void TickPartialHourlyAi(MobileParty)` / `QuarterDailyPartyTick(MobileParty)` / `AiHourlyTick(MobileParty, PartyThinkParams)`：AI 侧周期回调。

**英雄与人物**

`OnHeroCreated(Hero, bool)`、`OnHeroActivated(Hero, Hero.CharacterStates)`、`OnHeroLevelledUp(Hero, bool)`、`OnHeroGainedSkill(Hero, SkillObject, int, bool)`、`OnHeroWounded(Hero)`、`OnHeroRelationChanged(Hero, Hero, int, bool, ChangeRelationDetail, Hero, Hero)`、`OnHeroKilled(Hero, Hero, KillCharacterActionDetail, bool)`、`OnBeforeHeroKilled(...)`、`OnHeroOccupationChanged(Hero, Occupation)`、`OnHeroPrisonerTaken(PartyBase, Hero)`、`OnHeroPrisonerReleased(Hero, PartyBase, IFaction, EndCaptivityDetail, bool)`、`OnHeroComesOfAge(Hero)`、`OnCharacterDefeated(Hero, Hero)`、`OnCharacterBecameFugitive(Hero, bool)`、`OnRenownGained(Hero, int, bool)`、`OnChildEducationCompleted(Hero, int)`。

**队伍、军队、聚落**

`OnArmyCreated(Army)`、`OnArmyGathered(Army, IMapPoint)`、`OnArmyDispersed(Army, ArmyDispersionReason, bool)`、`OnMobilePartyCreated(MobileParty)`、`OnMobilePartyDestroyed(MobileParty, PartyBase)`、`OnBeforeSettlementEntered(MobileParty, Settlement, Hero)`、`OnSettlementEntered(...)`、`OnAfterSettlementEntered(...)`、`OnVillageStateChanged(Village, VillageStates, VillageStates, MobileParty)`、`OnLootDistributedToParty(PartyBase, PartyBase, ItemRoster)`、`OnItemsLooted(MobileParty, ItemRoster)`、`OnMercenaryTroopChangedInTown` / `OnMercenaryNumberChangedInTown`、`OnAlleyOwnerChanged` / `OnAlleyOccupiedByPlayer` / `OnAlleyClearedByPlayer`。

**家族、王国、任务与事件**

`OnClanTierChanged(Clan, bool)`、`OnClanCreated(Clan, bool)`、`OnClanDefected(Clan, Kingdom, Kingdom)`、`OnClanChangedKingdom(Clan, Kingdom, Kingdom, ChangeKingdomActionDetail, bool)`、`OnKingdomDecisionAdded/Cancelled/Concluded`、`OnWarDeclared(IFaction, IFaction, DeclareWarDetail)`、`OnQuestLogAdded(QuestBase, bool)`、`OnIssueLogAdded(IssueBase, bool)`、`OnStartBattle(PartyBase, PartyBase, object, bool)`。

**会话与存档**

`OnSessionStart(CampaignGameStarter)`、`OnAfterSessionStart(CampaignGameStarter)`、`OnNewGameCreated(CampaignGameStarter)`、`OnGameEarlyLoaded(CampaignGameStarter)`、`OnGameLoaded(CampaignGameStarter)`、`OnBeforeSave()`、`RemoveListeners(object o)`（默认实现，通常不重写）。

## 真实示例

```csharp
// 继承方式接入：注册到 Campaign 才会被分发器调用
public class MyFactionWatcher : CampaignEventReceiver
{
    public void Enable()
    {
        Campaign.Current.AddCampaignEventReceiver(this);
    }

    public override void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom,
        ChangeKingdomAction.ChangeKingdomActionDetail actionDetail, bool showNotification = true)
    {
        Debug.Print(clan.Name + ": " + oldKingdom.Name + " -> " + newKingdom.Name);
        // 重算派系实力（读模型而不是写字段）
        var prosperity = Campaign.Current.Models.SettlementProsperityModel;
    }

    public override void DailyTick()
    {
        if (Campaign.Current.DayOfWeek == DayOfWeek.Friday) { /* 周末结算 */ }
    }

    public override void Tick(float dt)
    {
        if (dt <= 0f) return; // 暂停时不做事
        // 每帧轻量逻辑
    }
}
```

## 风险与边界

- **注册即全局单例风险**：`AddCampaignEventReceiver` 把你加进战役级数组，没有对称的移除 API（旧战役 `OnDestroy` 时数组随 Campaign 一起丢弃）。**不要在行为模块里重复注册**，否则回调执行多次。
- **每帧调用的开销**：`Tick` 是每帧广播的。做重活请转投 `DailyTick` / `HourlyTick` 或自己的实体组件。
- **多线程边界**：分发器本身在主线程调用，但 `LateAITick` 之后会有 `CampaignLateAITickTask`。在 `Tick` 里访问正在被 AI 线程修改的队伍状态要小心，用 [Campaign](../Campaign) 的 `WaitAsyncTasks()` 先同步。
- **签名稳定性**：约 280 个虚方法属于内部实现细节，游戏更新可能增删改签名。用 override 接入比静态事件更容易在升级时编译失败——但编译失败是好事，至少比静默失配强。
- **与静态事件重复订阅**：同一次逻辑既 `AddNonSerializedListener` 又 override，会执行两次。选一种。

## 依赖关系

- [CampaignEventDispatcher](../CampaignEventDispatcher) — 遍历所有已注册接收者并广播本类定义的回调
- [CampaignEvents](../CampaignEvents) — 同一套回调的 `IMbEvent` 静态形态，二选一使用
- [Campaign](../Campaign) — `AddCampaignEventReceiver` 的宿主，提供接收者数组与 tick 时机
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — behavior 的另一条接入路线（`ICampaignBehavior`），与继承本类可共存