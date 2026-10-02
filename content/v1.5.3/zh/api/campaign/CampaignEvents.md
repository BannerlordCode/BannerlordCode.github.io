---
title: "CampaignEvents"
description: "战役事件总线的静态门面：248 个 IMbEvent 属性覆盖英雄、队伍、聚落、家族、王国、存档与周期 tick。mod 订阅世界变化的唯一正规入口。"
---

# CampaignEvents

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignEvents : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`（见本页「同类分发」段）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/CampaignEvents.cs`

## 概述

`CampaignEvents` 是 mod 感知世界变化的**主入口**。1.5.3 里它有 248 个 `static IMbEvent` 属性，覆盖从 `DailyTickEvent`、`HourlyTickEvent`、`OnBeforeSaveEvent` 到 `HeroLevelledUp`、`SettlementEntered`、`ClanChangedKingdom`、`ArmyCreated` 等全部玩法回调。它是静态门面：每个属性转发到 `CampaignEvents.Instance`（即 `Campaign.Current.CampaignEvents`）内部持有的一个 `MbEvent` 实例，`Invoke` 在原生代码里被调用，`AddNonSerializedListener` / `AddClearListener` / `RemoveListener` 由 mod 订阅。**它不发事件，只转发**——真正的广播动作发生在原生系统调用方。

## 心智模型

三层结构，从上到下：

1. **静态属性层**：`public static IMbEvent DailyTickEvent => Instance._dailyTickEvent;`——`Instance` 取自 `Campaign.Current.CampaignEvents`，所以 **`Campaign.Current == null` 时访问会 NRE**。
2. **实例事件层**：每个事件是一个 `MbEvent`（无参）或 `MbEvent<T...>`（带参）字段，是真正的订阅容器。
3. **广播层**：原生代码（如 `Hero.ActionSetAge`、聚落每日 tick）调用对应的内部 `Invoke` 方法；另一条路是 [CampaignEventDispatcher](../CampaignEventDispatcher) 遍历所有 `CampaignEventReceiver`，把同一个语义回调再广播一遍给继承者。

`MbEvent` 支持泛型参数：`DailyTickEvent` 是 `IMbEvent`（无参），`AiHourlyTickEvent` 是 `IMbEvent<MobileParty, PartyThinkParams>`，`SettlementEntered` 这类带参事件是 `IMbEvent<MobileParty, Settlement, Hero>`。

**常见误用与坑**

1. **订阅方式不是 `+=`**。必须写 `CampaignEvents.XxxEvent.AddNonSerializedListener(this, Handler)`。`AddNonSerializedListener` 第一个参数是**宿主对象**，批量移除时按它匹配；传 `null` 或传一个每次 new 的临时对象会导致永远解不掉。
2. **必须在 `RegisterEvents()` 里订阅**。behavior 的 `RegisterEvents()` 每次战役启动/读档都会重跑，是唯一安全的订阅点。写在构造函数里会订阅两次。
3. **无参委托用 `Action`，带参委托注意泛型顺序**。`AiHourlyTickEvent` 的 handler 签名是 `void H(MobileParty, PartyThinkParams)`，写错参数个数编译期能过（lambda 推断），运行时不派发，最容易出「静默不触发」。
4. **回调是同步调用链**。某个监听者抛异常会中断后续监听者。自己的回调要自己包 try/catch。

## 成员与调用时机

**周期与生命周期（最常用）**

- `DailyTickEvent`（`IMbEvent`）：每个游戏日一次。原生 `Campaign.DailyTick` 触发，同时会按周结算 `WeeklyTick`。
- `HourlyTickEvent`（`IMbEvent`）：每个游戏小时一次。写「按小时结算经济/士气」用这个。
- `QuarterHourlyTickEvent`（`IMbEvent`）：每 15 分钟一次。1.5.3 新增的细粒度 tick。
- `AiHourlyTickEvent`（`IMbEvent<MobileParty, PartyThinkParams>`）：AI 每小时的思考点回调，能拿到具体队伍与思考参数。
- `OnBeforeSaveEvent`（`IMbEvent`）：存档前。原生 `CampaignBehaviorManager` 靠它触发所有 behavior 的数据收集，**不要在里面做耗时操作**。
- `OnSessionStartEvent` / `OnAfterSessionStartEvent` / `OnGameEarlyLoaded` / `OnGameLoaded`：战役会话开始与加载完成，用来重建跨战役缓存。

**英雄与人物**

`HeroCreated`、`HeroActivatedEvent`、`HeroLevelledUp`、`HeroGainedSkill`、`HeroWounded`、`HeroRelationChanged`、`HeroOccupationChangedEvent`、`HeroKilled`、`OnBeforeHeroKilled`、`HeroPrisonerTaken`、`HeroPrisonerReleased`、`HeroComesOfAge`、`HeroReachesTeenAge`、`HeroGrowsOutOfInfancy`、`CharacterBecameFugitive`、`PlayerLearnsAboutHero`、`PlayerMetHero`、`RenownGained`、`PerkOpenedEvent`、`PerkResetEvent`、`PlayerTraitChangedEvent`。

**队伍与军队**

`BanditPartyRecruited`、`PartyAttachedAnotherParty`、`ArmyCreated`、`ArmyGathered`、`ArmyDispersed`、`NearbyPartyAddedToPlayerMapEvent`、`HeroOrPartyTradedGold`、`HeroOrPartyGaveItem`、`LootDistributedToParty`、`ItemsLooted`、`MobilePartyCreated`、`MobilePartyDestroyed`、`OnLootDistributedToParty`、`OnItemsLooted`。

**聚落与城镇**

`SettlementEntered`、`AfterSettlementEntered`、`BeforeSettlementEnteredEvent`、`VillageStateChanged`、`MercenaryTroopChangedInTown`、`MercenaryNumberChangedInTown`、`AlleyOwnerChanged`、`AlleyOccupiedByPlayer`、`AlleyClearedByPlayer`、`DailyTickSettlementEvent`（`IMbEvent<Settlement>`）。

**家族与王国**

`ClanTierIncrease`、`OnClanCreatedEvent`、`OnClanDefectedEvent`、`OnClanChangedKingdomEvent`、`KingdomDecisionAdded`、`KingdomDecisionConcluded`、`KingdomDecisionCancelled`、`QuestLogAddedEvent`、`IssueLogAddedEvent`。

**战斗与事件（MapEvent / Tournament）**

`StartBattleEvent` / `OnStartBattle`、`TournamentStartedEvent`、`TournamentFinishedEvent`、`TournamentCancelledEvent`、`WarDeclaredEvent`、`OnBeforeSettlementEnteredEvent`、`PlayerEliminatedFromTournamentEvent`。

> 名称以实际源码为准：属性名不带 `On` 前缀居多，带 `On` 前缀的多为「事件发生前」的对称版本（`BeforeSettlementEnteredEvent` / `SettlementEntered` / `AfterSettlementEntered`），写订阅时先在文件里搜准确名字。

## 真实示例

```csharp
// 无参周期事件：订阅/退订都按宿主对象 this 匹配
public class MyLogBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, DailyTick);
        CampaignEvents.HourlyTickEvent.AddNonSerializedListener(this, HourlyTick);
        // 带参事件：IMbEvent<MobileParty, PartyThinkParams>
        CampaignEvents.AiHourlyTickEvent.AddNonSerializedListener(this, OnAiHourly);
    }

    public override void SyncData(IDataStore dataStore) { }

    private void DailyTick() => Debug.Print("day tick");

    private void HourlyTick() => Debug.Print("hour tick");

    private void OnAiHourly(MobileParty party, PartyThinkParams p) => Debug.Print("ai: " + party.Name);

    // 读档前重建订阅，避免重复注册
    public override void RegisterEvents() { /* 重复订阅的清理交给宿主对象 this */ }
}
```

## 风险与边界

- **`Campaign.Current` 为 null 时崩**：所有静态属性都经 `Instance` → `Campaign.Current.CampaignEvents`。模块加载阶段（`OnSubModuleLoad`）订阅必然 NRE。
- **订阅泄漏是头号 mod bug**：用匿名 lambda 订阅且宿主对象是模块类（非 behavior 实例）时，`RemoveListener` 匹配不到，读档/重进战役后回调执行多次，表现是「数值翻倍」。**始终把 `this` 作为第一个参数传给 `AddNonSerializedListener`。**
- **`AddNonSerializedListener` 不进存档**：这正是名字的含义——监听关系不序列化，读档后必须重新订阅。`RegisterEvents()` 的调用时机就是为此设计的。
- **`OnBeforeSaveEvent` 里做重活会拖慢存档**：`CampaignBehaviorManager` 在这个事件里同步收集所有 behavior 的数据。
- **同步派发**：一个 handler 修改世界状态会影响后续 handler 看到的输入。跨 behavior 的状态一致性依赖调用顺序（注册顺序 = 事件接收者数组顺序），不要假设互相独立。
- **事件语义不保证**：名字相近的事件触发点不同（`BeforeSettlementEntered` 在进入前、`AfterSettlementEntered` 在进入后、`SettlementEntered` 在结算时）。要精确控制顺序请用成对的前置版本。

## 依赖关系

- [CampaignEventDispatcher](../CampaignEventDispatcher) — 同为 `CampaignEventReceiver`，把 `Invoke` 再广播给所有接收者
- [MBCampaignEvent](../MBCampaignEvent) — `DailyTickEvent` / `HourlyTickEvent` 的底层时间载体
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 订阅 `OnBeforeSaveEvent` 收集 behavior 存档数据
- [Campaign](../Campaign) — 持有 `CampaignEvents` 实例并触发原生 tick 回调