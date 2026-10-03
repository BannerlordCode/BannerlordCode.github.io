---
title: "CampaignEvents"
description: "战役事件的唯一总目录：258 个 public static IMbEvent 属性 + 269 个 public override 触发器成对出现，Listener 按后进先出顺序触发，ClearListeners 每次只摘一条。"
---

# CampaignEvents

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CampaignEvents : CampaignEventReceiver`
**Base:** [CampaignEventReceiver](../CampaignEventReceiver)（`public abstract class`，273 个 `public virtual void` 空方法）；不继承 `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/CampaignEvents.cs`（全文 5495 行）

## 概述

`CampaignEvents` 是**整个战役层的事件总线目录**。它不做业务，只做两件事：**把事件对象暴露出来**，以及**在引擎通知到达时把它们点着**。mod 挂在它上面的每一行代码，本质上都是对某个 `IMbEvent` 的一个 `AddNonSerializedListener`。

它的表面大得惊人，但**结构完全均匀**，源码里实测到的精确数字是：

| 数量 | 内容 | 出处 |
| --- | --- | --- |
| **258** | `public static IMbEvent...` 属性 | 从 `:322` 的 `OnPlayerBodyPropertiesChangedEvent` 起每隔 16 行一个 |
| **269** | `return CampaignEvents.Instance._x;` 的 getter 体 | 含下面 12 个查询事件的 getter |
| **269** | `public override void OnXxx(...)` 触发器 | = 258 个属性 + 12 个查询事件的触发器 − 1（`RemoveListeners` 不算触发器） |
| **257** | `private readonly MbEvent<...>` 字段 | 声明在 `:4677` 之后的字段区 |
| **1** | `private static CampaignEvents Instance` | `get { return Campaign.Current.CampaignEvents; }` |

**它不是单例类自己 new 出来的。** `Campaign.cs:1876` 是 `this.CampaignEvents = new CampaignEvents();`，实例由 `Campaign` 持有，属性 `internal CampaignEvents CampaignEvents { get; private set; }` 是 **`internal`**——mod 拿不到这个属性，但**所有 static 事件属性都通过它转发**，所以你照常用 `CampaignEvents.HeroKilled` 即可。

**最容易被忽略的一条：监听器是后进先出（LIFO）。** `MbEvent.AddNonSerializedListener` 的实现是

```csharp
MbEvent.EventHandlerRec eventHandlerRec = new MbEvent.EventHandlerRec(owner, action);
MbEvent.EventHandlerRec nonSerializedListenerList = this._nonSerializedListenerList;
this._nonSerializedListenerList = eventHandlerRec;
eventHandlerRec.Next = nonSerializedListenerList;
```

它**头插**进一条单链表，`InvokeList` 从头顺着走。所以**后注册的监听器先被调用**。两个行为都写同一个字段时，后加载的 mod 会先动。

## 心智模型

把它当成**「一对一的属性/触发器配对表」**，然后按四问定位：**谁是生产者、谁是消费者、顺序怎么排、退订怎么退。**

**第一问：生产者是谁。** 269 个 `public override void OnXxx(...)` 全部来自基类 [CampaignEventReceiver](../CampaignEventReceiver) 的虚方法。引擎侧从不直接调用 `CampaignEvents` 的方法——它调的是 `CampaignEventDispatcher.Instance.OnXxx(...)`，那个单例内部持有 `Campaign.Current.CampaignEvents` 并调它的 `override` 版本。以英雄被击杀为例，`CampaignEventDispatcher.Instance.OnHeroKilled(victim, killer, detail, showNotification)` 转发到 `CampaignEvents.OnHeroKilled`，其方法体只有一句 `CampaignEvents.Instance._heroKilled.Invoke(victim, killer, detail, showNotification);`。

**第二问：消费者是谁。** 你在 [CampaignBehaviorBase](../CampaignBehaviorBase) 的 `RegisterEvents()` 里写：

```csharp
CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, this.OnHeroKilled);
```

`AddNonSerializedListener(object owner, Action<...>)` 的两个参数分别是**归属对象**与**回调**。归属对象不是装饰——它是 `ClearListeners(object o)` 的唯一匹配依据。

**第三问：258 个属性其实只有两种，不是三种也不是一种。** 第一种是 `IMbEvent` / `IMbEvent<T1>` / … / `IMbEvent<T1..T6>`，共 246 个，字段类型是 `MbEvent<...>`。第二种是 `ReferenceIMBEvent<...>`，共 12 个，全部是 `Can...` / `IsSettlementBusy` / `OnBeforePlayerAgentSpawn` 这类**「能不能 / 允不允许」查询**，字段类型是 `ReferenceMBEvent<...>`，最后一个类型参数固定是 `bool` 或 `int`，而触发器把那个参数声明成 `ref`：

```csharp
public static ReferenceIMBEvent<Hero, KillCharacterAction.KillCharacterActionDetail, bool> CanHeroDieEvent
{
    get { return CampaignEvents.Instance._canHeroDieEvent; }
}

public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)
{
    CampaignEvents.Instance._canHeroDieEvent.Invoke(hero, causeOfDeath, ref result);
}
```

`ReferenceMBEvent<T1>.Invoke(ref T1 t1)` 把引用沿着链表传下去，**每个监听器都能写回 `result`**。这就是「否决式」事件的机制：引擎给一个默认值，监听者可以改。这 12 个是：`canKingdomBeDiscontinued`、`canHeroDieEvent`、`canHeroLeadPartyEvent`、`canMoveToSettlementEvent`、`canMarryEvent`、`canHeroBecomePrisonerEvent`、`canPlayerMeetWithHeroAfterConversationEvent`、`canBeGovernorOrHavePartyRoleEvent`、`canHeroEquipmentBeChangedEvent`、`canHaveCampaignIssues`、`isSettlementBusy`、`onBeforePlayerAgentSpawn`。**它们的订阅签名不是 `Action<T1,T2,T3>` 而是 `ReferenceAction<T1,T2,T3>`**——写错泛型委托类型编译不过。

**第四问：退订怎么退，这是最实际的坑。** `MbEvent.ClearListeners(object o)` 转给 `ClearListenerOfList(ref list, o)`，它先从表头找到**第一个** `Owner == o` 的节点，然后 unlink 就结束——**一次调用只摘掉一条注册**。而 `AddNonSerializedListener` 允许你用同一个 owner 调多次。所以「注册了两次、退订一次」的结果是**还剩一个监听器在跑**，而且不会有任何提示。

唯一正确的批量退订入口是 `CampaignEvents.RemoveListeners(object obj)`：`public override void RemoveListeners(object obj)` 的方法体是一长串 `this._xxx.ClearListeners(obj);`，**它仍然每个事件只摘一条**。真正批量正确的是 `CampaignBehaviorManager.RemoveBehavior<T>()`，它调 `CampaignEventDispatcher.Instance.RemoveListeners(t)`——但那也只是把 `CampaignEvents` 里每个事件各清一次。所以纪律很硬：**一个行为对同一个事件只注册一次。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `.ctor` | （编译器生成，无参） | 字段初始化器把 257 个 `MbEvent` 字段就地 new 出来。`Campaign.cs:1876` 的 `new CampaignEvents()` 之后立刻可用，**不需要额外初始化**。 |
| `Instance` | `private static CampaignEvents Instance { get; }` | `get { return Campaign.Current.CampaignEvents; }`。**private**——这是 258 个 static 属性和 269 个触发器共用的唯一取实例途径。因为它穿透到 `Campaign.Current`，所以**在战役之外访问任何一个事件属性都会 NRE**。 |
| `OnPlayerBodyPropertiesChangedEvent` | `public static IMbEvent OnPlayerBodyPropertiesChangedEvent { get; }` | 玩家体型变化。`:322`，**全类第一个事件属性**，也是唯一一个零类型参数的命名样本之一（零参数事件共 18 个）。getter 体是 `return CampaignEvents.Instance._onPlayerBodyPropertiesChangedEvent;` ——**全部 246 个普通事件都是这一个形状**，没有任何额外逻辑。 |
| `HeroKilledEvent` | `public static IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool> HeroKilledEvent { get; }` | 英雄死亡。四参数事件的代表（此类共 6 个）。这是 mod 最常订阅的事件之一，拿到 `(victim, killer, detail, showNotification)`。 |
| `HeroCreated` | `public static IMbEvent<Hero, bool> HeroCreated { get; }` | 新英雄诞生。`:402`。`AgingCampaignBehavior.OnGameLoaded` 之外的英雄创建路径靠它。注意第二个参数 `bool` 是「是否自然出生」。 |
| `DailyTickHeroEvent` | `public static IMbEvent<Hero> DailyTickHeroEvent { get; }` | **每英雄每日 tick**。`AgingCampaignBehavior` 就在 `RegisterEvents` 里挂它并在里面跑整个衰老/成年判定。这是「一参数事件」的代表，此类共 104 个，是数量最多的一档。 |
| `HourlyTickEvent` / `DailyTickEvent` / `WeeklyTickEvent` | `public static IMbEvent ...Event { get; }` | 三个零参数的全局周期 tick。`CampaignEventReceiver` 里对应 `HourlyTick()` / `DailyTick()` / `WeeklyTick()`，引擎在时间推进时逐个调用。**「全部英雄/全部队伍/全部聚落」的遍历不要自己写**，引擎已经提供了按对象的分档 tick（见 `DailyTickPartyEvent` / `DailyTickSettlementEvent` / `DailyTickClanEvent` / `DailyTickHeroEvent` / `HourlyTickPartyEvent` 等）。 |
| `SettlementEntered` / `BeforeSettlementEnteredEvent` / `AfterSettlementEntered` | `public static IMbEvent<MobileParty, Settlement, Hero> ... { get; }` | 玩家进聚落的**前 / 中 / 后三段**。三段同一个参数列表，区别只在触发时机：改动「能否进入」的逻辑挂 `BeforeSettlementEnteredEvent`，改动进入后的状态挂 `AfterSettlementEntered`。 |
| `CanHeroDieEvent` | `public static ReferenceIMBEvent<Hero, KillCharacterAction.KillCharacterActionDetail, bool> CanHeroDieEvent { get; }` | **否决式事件**：订阅它可以在英雄死亡前改 `ref bool result`。订阅签名用 `ReferenceAction<Hero, KillCharacterAction.KillCharacterActionDetail, bool>`，最后一个参数必须是 `ref bool`。这是 12 个查询事件里语义最重的一个——把 `result` 置 false 就等于给这个英雄开了不死。 |
| `IsSettlementBusy` | `public static ReferenceIMBEvent<Settlement, object, int> IsSettlementBusy { get; }` | 「这个聚落现在忙不忙」。触发器签名是 `public virtual void IsSettlementBusy(Settlement settlement, object asker, ref int flags)`——**`ref int` 而不是 bool**，是位标志而不是单个否决位。这是 12 个里唯一不叫 `Can*` 的。 |
| `OnBeforePlayerAgentSpawn` | `public static ReferenceIMBEvent<ref MatrixFrame> OnBeforePlayerAgentSpawn { get; }` | 玩家 Agent 生成前改位置。触发器是 `public virtual void OnBeforePlayerAgentSpawn(ref MatrixFrame spawnFrame)`。**它同样是 Reference 事件**——即使名字以 `On` 开头，形态也是查询式的。 |
| `OnHeroKilled` | `public override void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` | **触发器**（不是订阅点）。方法体只有一句 `CampaignEvents.Instance._heroKilled.Invoke(victim, killer, detail, showNotification);`。**269 个触发器的形状全部相同**：一行 `Invoke`，默认参数与基类逐字一致。引擎通过 `CampaignEventDispatcher.Instance.OnHeroKilled(...)` 间接触发它。 |
| `RemoveListeners` | `public override void RemoveListeners(object obj)` | 唯一的非触发器 `override`。方法体是两百多行 `this._xxx.ClearListeners(obj);`，覆盖**全部** 258 个事件。**但每个事件仍然只摘一条注册**——它是「广撒网」而不是「清干净」。要彻底退订必须保证每个事件只注册过一次。 |
| `ClearListeners` | `public void ClearListeners(object o)` | **不在本类**，在 [IMbEvent](../IMbEvent)（以及 `IMbEventBase`）。`IMbEvent` 只声明两个方法：`AddNonSerializedListener` 与 `ClearListeners`。`MbEvent.ClearListeners` → `ClearListenerOfList` → **只 unlink 第一个 Owner 匹配的节点**。 |
| `Invoke` | `public void Invoke(...)` / `public void Invoke(ref T1 t1)` | **不在本类**，分别在 [MbEvent](../MbEvent) 与 [ReferenceMBEvent](../ReferenceMBEvent)。`MbEvent.Invoke()` 无参；`ReferenceMBEvent<T1>.Invoke(ref T1)` 把引用传下去。`InvokeList` 是从头（= 最后注册的）开始顺着 `Next` 走。 |

**258 个属性的实用索引**（按域挑出高频的一批，其余同样形状，见 `CampaignEvents.cs:322-4670`）：

| 域 | 代表事件（类型参数） |
| --- | --- |
| 战役生命周期 | `OnNewGameCreatedEvent<CampaignGameStarter>` · `OnGameEarlyLoadedEvent<CampaignGameStarter>` · `OnGameLoadedEvent<CampaignGameStarter>` · `OnGameLoadFinishedEvent<>` · `OnGameOverEvent<>` · `OnBeforeSaveEvent<>` · `OnSaveStartedEvent<>` · `OnSaveOverEvent<bool,string>` · `OnCharacterCreationIsOverEvent<>` · `OnConfigChangedEvent<>` |
| 周期 tick | `TickEvent<float>` · `MissionTickEvent<float>` · `HourlyTickEvent<>` · `DailyTickEvent<>` · `WeeklyTickEvent<>` · `DailyTickHeroEvent<Hero>` · `DailyTickPartyEvent<MobileParty>` · `DailyTickSettlementEvent<Settlement>` · `DailyTickClanEvent<Clan>` · `HourlyTickPartyEvent<MobileParty>` · `AiHourlyTickEvent<MobileParty,PartyThinkParams>` · `OnQuarterDailyPartyTick<MobileParty>` |
| 英雄 | `HeroLevelledUp<Hero,bool>` · `HeroGainedSkill<Hero,SkillObject,int,bool>` · `HeroCreated<Hero,bool>` · `HeroWounded<Hero>` · `HeroRelationChanged<Hero,Hero,int,bool,ChangeRelationAction.ChangeRelationDetail,Hero,Hero>` · `HeroComesOfAgeEvent<Hero>` · `HeroReachesTeenAgeEvent<Hero>` · `HeroGrowsOutOfInfancyEvent<Hero>` · `OnHeroChangedClanEvent<Hero,Clan>` · `OnHeroUnregisteredEvent<Hero>` |
| 队伍与军团 | `MobilePartyCreated<MobileParty>` · `MobilePartyDestroyed<MobileParty,PartyBase>` · `OnPartyDisbandedEvent<MobileParty,Settlement>` · `OnPartyLeaderChangedEvent<MobileParty,Hero>` · `OnPartySizeChangedEvent<PartyBase>` · `ArmyCreated<Army>` · `ArmyGathered<Army,IMapPoint>` · `OnPartyJoinedArmyEvent<MobileParty>` · `OnPartyLeftArmyEvent<MobileParty,Army>` · `ArmyOverlaySetDirtyEvent<>` |
| 聚落 | `SettlementEntered<MobileParty,Settlement,Hero>` · `AfterSettlementEntered<...>` · `BeforeSettlementEnteredEvent<...>` · `OnSettlementLeftEvent<MobileParty,Settlement>` · `VillageLooted<Village>` · `VillageBeingRaided<Village>` · `AlleyOwnerChanged<Alley,Hero,Hero>` · `PrisonersChangeInSettlement<Settlement,FlattenedTroopRoster,Hero,bool>` |
| 王国与外交 | `KingdomDecisionAdded<KingdomDecision,bool>` · `KingdomDecisionConcluded<KingdomDecision,DecisionOutcome,bool>` · `RulingClanChanged<Kingdom,Clan>` · `OnClanInfluenceChangedEvent<Clan,float>` · `OnAllianceStartedEvent<Kingdom,Kingdom>` · `OnCallToWarAgreementStartedEvent<Kingdom,Kingdom,Kingdom>` · `OnPeaceOfferedToPlayerEvent<IFaction,int>` |
| 交易与物品 | `OnItemSoldEvent<PartyBase,PartyBase,ItemRosterElement,int,Settlement>` · `OnNewItemCraftedEvent<ItemObject,ItemModifier,bool>` · `OnCraftingOrderCompletedEvent<Town,CraftingOrder,ItemObject,Hero>` · `WorkshopOwnerChangedEvent<Workshop,Hero>` · `OnPlayerTradeProfitEvent<int>` |
| 任务与问题 | `OnQuestStartedEvent<QuestBase>` · `QuestLogAddedEvent<QuestBase,bool>` · `OnNewIssueCreatedEvent<IssueBase>` · `OnIssueOwnerChangedEvent<IssueBase,Hero>` |

## 真实示例

挂一个行为（形状与 `AgingCampaignBehavior.RegisterEvents` 逐字一致）：

```csharp
public override void RegisterEvents()
{
    CampaignEvents.DailyTickHeroEvent.AddNonSerializedListener(this, this.DailyTickHero);
    CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, this.OnHeroKilled);
    CampaignEvents.OnGameLoadedEvent.AddNonSerializedListener(this, this.OnGameLoaded);
    CampaignEvents.PerkOpenedEvent.AddNonSerializedListener(this, this.OnPerkOpened);
}

private void DailyTickHero(Hero hero)
{
    if (hero.Age >= Campaign.Current.Models.AgeModel.BecomeOldAge)
    {
        Debug.Print(hero.Name + " is old: " + hero.Age, 0);
    }
}

private void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
{
    Debug.Print("killed " + victim.Name + " by " + (killer == null ? "nobody" : killer.Name), 0);
}
```

四个委托签名与四个事件的类型参数逐字对齐：`DailyTickHeroEvent` 是 `IMbEvent<Hero>` 对应 `Action<Hero>`；`HeroKilledEvent` 是四参数；`OnGameLoadedEvent` 是 `IMbEvent<CampaignGameStarter>`；`PerkOpenedEvent` 是 `Action<Hero, PerkObject>`。**方法名可以随便起**——C# 的方法组到委托是按签名隐式转换的。

否决式事件（12 个 Reference 事件之一）：

```csharp
CampaignEvents.CanHeroDieEvent.AddNonSerializedListener(this, this.CanHeroDie);

private void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)
{
    if (hero == Hero.MainHero && hero.Clan != null && hero.Clan.Heroes.Count > 1)
    {
        result = false;   // 主英雄且族内还有别的继承人：这一刀不收
    }
}
```

注意第三个参数必须声明成 `ref bool`，而且事件名**必须大写 C**（`CanHeroDieEvent`）——对应基类上那个 `public virtual void CanHeroDie(Hero, KillCharacterAction.KillCharacterActionDetail, ref bool)`。写 `CampaignEvents.OnHeroDieEvent` 或用 `Action<Hero, KillCharacterAction.KillCharacterActionDetail, bool>` 都会编译失败。

## 风险与边界

- **监听器后进先出。** `AddNonSerializedListener` 头插链表，`InvokeList` 从头走。两个行为改同一状态时，后注册的那个先动——这与 `CampaignBehaviorManager.GetBehavior<T>()` 的「先注册者赢」正好相反，别凭直觉套用。
- **`ClearListeners` 每次只摘一条。** `ClearListenerOfList` 找到第一个 `Owner == o` 的节点就 unlink 返回。同一 owner 对同一事件注册两次、退订一次 → **还剩一个在跑**，没有任何警告。`CampaignEvents.RemoveListeners(obj)` 虽然覆盖全部 258 个事件，但每个事件仍是「摘一条」。**纪律：一个行为对一个事件只注册一次。**
- **12 个查询事件的订阅类型不是 `Action`。** 它们是 `ReferenceIMBEvent<...>`，要 `ReferenceAction<...>`，最后一个类型参数在触发器上是 `ref`。写错就是编译错误——这是好事，比运行时静默失败强。
- **`IsSettlementBusy` 用 `ref int flags` 而不是 `ref bool`。** 位标志语义，不是单个否决位。
- **`OnBeforePlayerAgentSpawn` 名字是 `On` 但形态是 Reference 事件。** 改它要 `ref MatrixFrame`，不是 `Action`。
- **静态属性穿透 `Campaign.Current`。** 每个 getter 都是 `return CampaignEvents.Instance._x;`，而 `Instance` 是 `Campaign.Current.CampaignEvents`。**不在战役中访问任何一个事件属性都会 NRE**——包括「纯战斗场景」和编辑器。
- **`Campaign.Current.CampaignEvents` 是 `internal`。** mod 拿不到这个实例，想自己 new 一个没有意义（它的字段全是 private readonly）。
- **零个扩展点。** 258 个属性全是 `get`-only，没有 `set`、没有 `+=`。**你无法新增自己的战役级事件到这条总线上**——想在别处通知，只能自己造一个 `MbEvent` 静态持有。
- **两个属性做懒初始化。** `ArmyOverlaySetDirtyEvent`（`:2651`）与 `PartyVisibilityChangedEvent`（`:2692`）的 getter 不是 `return Instance._x`，而是 `if ((result = Instance._x) == null) { result = (Instance._x = new MbEvent()); } return result;`——它们的字段**不是 `readonly`**。其余 256 个字段都是 `private readonly`。行为上等价，但这是全类唯一的两个例外。
- **`RemoveListeners` 是 270 个 `public override` 里的唯一一个非触发器。** 其余 269 个方法体都是单行 `Invoke`。
- **默认参数在两层重复声明。** 例如 `OnHeroKilled(..., bool showNotification = true)` 在 `CampaignEventReceiver` 上有一份、`CampaignEvents` 的 override 上又写了一份。改不动任何一边——它们是各自独立的编译单元。

## 跨版本提示

`CampaignEvents` 是 1.3 → 1.5 三个大版本里**增长最猛的类型之一**。基类 [CampaignEventReceiver](../CampaignEventReceiver) 的 `public virtual void` 数量从 1.3.0 的 273 持续增加——海战、蒸汽机产业、编队系统各自带来新的一批 `OnShipXxx` / `OnSteamXxx` 回调。`CampaignEvents` 作为镜像同步增加对应属性与触发器。

**但它的结构常量不变**：`public class CampaignEvents : CampaignEventReceiver`（非 sealed）、258 个 `public static IMbEvent` 属性、269 个 `public override void`、257 个 `private readonly MbEvent` 字段、`private static CampaignEvents Instance` 穿透 `Campaign.Current.CampaignEvents`。**属性数会变，形状不变。**

对 mod 作者的实际含义：**升级时你已经覆写/订阅过的事件签名可能被改动**（加参数、改 `ref`/值语义），那才会编译失败。引擎新增事件**不影响你**，因为那是新加的属性和新的虚方法。所以最稳的写法是**只订阅你真正需要的那几个事件**，而不是在一个大 `RegisterEvents` 里把整个目录都挂一遍。

另外 `CampaignEventReceiver` 上的「否决式」虚方法（`CanHeroDie`、`CanHeroMarry`、`CanMoveToSettlement` …）是**引擎的查询入口**，直接调它们会跳过 `CampaignEvents` 的分发。它们在 1.3.0 就已存在且形状稳定，但**不要绕过 `CampaignEvents` 直接调**——那样你的监听器根本不会被问到。

## 依赖关系

- 基类：[CampaignEventReceiver](../CampaignEventReceiver) 声明全部 273 个 `public virtual void` 空方法，`CampaignEvents` 逐个 override 成一行 `Invoke`
- 生产者：[CampaignEventDispatcher](../CampaignEventDispatcher) 的单例方法持有 `Campaign.Current.CampaignEvents` 并调用它的 override，是引擎进入这条总线的唯一通道
- 事件对象类型：[MbEvent](../MbEvent)（`IMbEvent` 的 0..6 参实现，247 个字段用）与 [ReferenceMBEvent](../ReferenceMBEvent)（`ReferenceIMBEvent` 的实现，12 个查询字段用）；契约见 [IMbEvent](../IMbEvent) 与 `IMbEventBase`
- 宿主：[Campaign](../Campaign) 的 `internal CampaignEvents CampaignEvents`（`Campaign.cs:1876` 赋值）与 `Models`
- 消费范本：[CampaignBehaviorBase](../CampaignBehaviorBase) 的 `RegisterEvents` 是官方约定的订阅时机；[AgingCampaignBehavior](../AgingCampaignBehavior) 一次订阅九个事件
- 订阅对象：[MBEvent](../MBEvent) 的头插链表决定了「后进先出」的调用顺序
- 同桶邻居：[GameModels](../GameModels) 与本类一样挂在 `Campaign` 上，是模型侧的对应物
- 桶首页：[campaign API 分区](../)