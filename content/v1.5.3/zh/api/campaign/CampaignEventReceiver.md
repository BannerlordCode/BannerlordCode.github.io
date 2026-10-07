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

## 怎么用

### 怎么拿到它

你**继承它**，然后把它挂进 dispatcher：构造函数无参（隐式），两个挂载点——`Campaign.AddCampaignEventReceiver(receiver)`（`Campaign.cs:1929`，走 `CampaignEventDispatcher.cs:57`），或者更常见的间接做法：让 [CampaignEvents](../CampaignEvents) 这类具体接收者在 `Invoke` 时自己调你的方法。

基类只声明不实现：264 个 `public virtual void OnXxx(...)` 全是空体（例：`OnCharacterCreationIsOver` `:40`、`OnHeroLevelledUp` `:45`、`RemoveListeners` `:35`），你只覆写关心的那几个。基类的 `RemoveListeners(object o)` 同样是空的（`:35-37`）——**它不自动替你取消任何订阅**。

两种参数风格并存：回调式（`OnHeroLevelledUp(Hero hero, bool shouldNotify = true)` `:45`，你想加什么条件都行）和查询式（`CanKingdomBeDiscontinued(Kingdom kingdom, ref bool result)` `:889` 这类，`ref` 是输入初值也是输出）。查询式的语义是引擎先给一个 `result`，每个接收者可以改它——改动会传给后续接收者。

### 典型用法

```csharp
// 1) 回调式：收到事件就做事
public class MyStoryEventReceiver : CampaignEventReceiver
{
    public override void OnHeroLevelledUp(Hero hero, bool shouldNotify = true)
    {
        if (hero == Hero.MainHero)
            MBTextManager.SetTextVariable("MYMOD_HERO_LEVEL", hero.Level);
    }

    // 2) 查询式：改 ref 参数影响后续所有接收者
    public override void CanHeroDie(Hero hero,
        KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)
    {
        if (hero.IsInvolvedInMyQuest && hero.HitPoints > 1)
            result = false;                 // 这个英雄本次死不了
    }

    // 3) 自己订阅的东西要自己清：基类的 RemoveListeners 是空的
    public void Subscribe(CampaignEvents evts) { evts.OnQuestStartedEvent.AddNonSerializedListener(this, OnQuest); }
    public void Unsubscribe(CampaignEvents evts) { evts.OnQuestStartedEvent.ClearListeners(this); }
    private void OnQuest(QuestBase quest) { }
}

// 挂上去
Campaign.Current.AddCampaignEventReceiver(new MyStoryEventReceiver());
```

### 最容易踩的坑

以为覆写了 `RemoveListeners` 就能自动退订。实际上基类实现是空体（`CampaignEventReceiver.cs:35-37`），它的唯一用途是让 `CampaignEventDispatcher.RemoveListeners(o)` 把请求转发给每个接收者（`CampaignEventDispatcher.cs:69-76`）——而 `CampaignBehaviorManager.RemoveBehavior<T>` 正是靠这条路径去摘 behavior 的监听（`CampaignBehaviorManager.cs:100`）。如果你在自己的接收者里用 `CampaignEvents.XXXEvent.AddNonSerializedListener(this, ...)` 订了事件，却把退订代码写进 `RemoveListeners` 里就完事大吉——那只能摘掉那个具体事件，不是全部。后果是 behavior 被移除后它的事件监听还活着，每个 tick 照跑，读的是已经不在战役里的对象，表现为数值莫名增长或偶发崩溃。退订要么逐事件显式写，要么让订阅方始终是同一个长生命周期对象。

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