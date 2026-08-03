---
title: "CampaignEventReceiver"
description: "战役事件管道的抽象契约基类：定义了 ~275 个空的 virtual On* 钩子，是 CampaignEvents（事件总线）、CampaignEventDispatcher（分发器）与所有战役行为的共同基类。模组开发者几乎从不直接继承或实例化它，而是用 CampaignBehaviorBase + CampaignEvents 订阅事件。"
---

# CampaignEventReceiver

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class CampaignEventReceiver`  
**Base:** 无（自身是抽象基类）  
**源文件路径（1.4.5 权威）:** `TaleWorlds.CampaignSystem/CampaignEventReceiver.cs`  
**镜像实现:** `CampaignEvents.cs`（同目录，`CampaignEvents : CampaignEventReceiver`）、`CampaignEventDispatcher.cs`（同目录，`CampaignEventDispatcher : CampaignEventReceiver`）

## 一句话职责

战役世界里所有“某件事发生了”的通知接口——它声明了一大组 `On*` 钩子（英雄死亡、据点易主、家族换国、每小时 tick 等），每个钩子默认是空实现，由引擎在对应时机调用，让关心该事件的系统做出反应。

## 心智模型

把 `CampaignEventReceiver` 想成**战役事件总线的「插头标准」**，而不是一个你会 new 出来的对象：

- 它自己不做任何事。所有 `On*` 方法体都是空的 `{}`。它只是一份“战役会广播哪些事件”的清单。
- 它有三个直接子类，分别扮演不同角色：
  - **`CampaignEvents`** —— 事件**总线/枢纽**。它内部为每个事件持有一个 `MbEvent<...>` 多播委托字段，并 override 每个 `On*` 把调用转发给对应的 `MbEvent.Invoke(...)`。模组订阅的静态属性（`CampaignEvents.HeroKilledEvent` 等）就是从这里暴露的。
  - **`CampaignEventDispatcher`** —— 事件**分发器**。它的 `On*` override 会遍历 `_eventReceivers` 数组，把同一个事件逐个转交给每一个接收者。游戏里真正被 `Campaign` 调用的是 `CampaignEventDispatcher.Instance.OnX(...)`。
  - 你的 **`CampaignBehaviorBase` 子类** —— **不直接继承** `CampaignEventReceiver`。行为（behavior）通过 `RegisterEvents()` 向 `CampaignEvents` 的 `MbEvent` 注册 lambda 来“听”事件；它并不在分发器的 `_eventReceivers` 数组里。
- 默认 `_eventReceivers` 只有三个：`CampaignEvents`、`IssueManager`、`QuestManager`（`Campaign.cs` 中 `new CampaignEventDispatcher(new CampaignEventReceiver[3] { CampaignEvents, IssueManager, QuestManager })`）。若你确实 `Campaign.Current.AddCampaignEventReceiver(receiver)`，才会成为第四个接收者。

### 一次事件是怎么流动的

以“英雄被杀”为例，调用链是：

```
KillCharacterAction.Apply(...)                        // 某处触发世界状态变更
  └─ CampaignEventDispatcher.Instance.OnHeroKilled(victim, killer, detail, showNotification)
       └─ foreach receiver in _eventReceivers:        // [CampaignEvents, IssueManager, QuestManager, ...]
            receiver.OnHeroKilled(...)                 // 基类的空实现 / CampaignEvents 的转发
                 └─ Instance._heroKilled.Invoke(...)   // CampaignEvents 内部多播委托
                      └─ 你的 lambda（在 RegisterEvents 里注册的）
```

也就是说：`On*` 是“引擎→接收者”的推送入口；而模组开发者真正挂钩子的地方，是 `CampaignEvents` 暴露的静态 `IMbEvent<...>` 属性上的 `AddNonSerializedListener`。**你不要去 override `On*`、也不要去 new 一个 `CampaignEventReceiver`。**

## 何时用 / 何时不要用

**你应该这样用（正确路径）：**

- 写一个 `CampaignBehaviorBase` 子类，在 `RegisterEvents()` 里用 `CampaignEvents.<事件>Event.AddNonSerializedListener(this, handler)` 订阅你关心的事件。
- 需要主动改变世界状态时，调用对应的 `*Action.Apply`（例如易主用 `ChangeOwnerOfSettlementAction.Apply`、杀人用 `KillCharacterAction.ApplyBy...`），而**不要**直接去改 `Hero.Gold`、`Settlement.OwnerClan` 之类的字段。
- 想在每个小时/每天做周期逻辑时，override 行为自己的 `HourlyTick()`/`DailyTick()`（它们也是 `CampaignEventReceiver` 的 `On*` 钩子，会被分发器按时调用），而不是在事件回调里即时改状态。

**你不应该这样做（反模式）：**

- ❌ `new CampaignEventReceiver()` 然后 override `On*` —— 它只是个空壳，且你拿不到事件流（除非再 `AddCampaignEventReceiver`，但这通常没必要，且容易与行为系统重复）。
- ❌ 在事件回调里直接 `hero.Gold += 1000` 或 `settlement.OwnerClan = clan` —— 绕过 `*Action.Apply` 会丢失副作用（通知、关系、存档脏标记），并可能和正在进行的其他系统产生**双重应用 / 存档错位**。
- ❌ 在 `On*` 回调内部同步触发另一个会重入的事件（例如在 `OnHeroKilled` 里再 `KillCharacterAction.Apply`）—— 分发器正在遍历 `_eventReceivers` 数组，重入会导致顺序相关 bug 甚至异常。把这类“连锁反应”延迟到 `DailyTick`/`HourlyTick` 里处理。
- ❌ 在 `RegisterEvents` 之外的地方订阅 `CampaignEvents` —— 见下方「风险」段关于序列化/重载的说明。

## 依赖图（可点击）

**上游（谁调用这些 On\*）：**

- [CampaignEventDispatcher](../CampaignEventDispatcher/) —— 真正的分发器，`Campaign` 通过它广播每个事件。
- [Campaign](../../campaign/Campaign/) —— 持有 `CampaignEventDispatcher` 与 `CampaignEvents`，在 tick / 加载 / 战斗中驱动事件。
- 各类 `*Action`（如 [KillCharacterAction](../KillCharacterAction/)、[ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/)、[ChangeRelationAction](../ChangeRelationAction/)）—— 世界状态变更时由它们触发对应的 `On*`。

**下游（接收事件并反应）：**

- [CampaignEvents](../CampaignEvents/) —— 总线实现，把 `On*` 转发给订阅了 `IMbEvent` 的监听器。
- 你自己的 [CampaignBehaviorBase](../CampaignBehaviorBase/) 子类（通过 `RegisterEvents` 订阅，而非继承本类）。
- `IssueManager` / `QuestManager` —— 默认就在 `_eventReceivers` 里的两个内置接收者。

**相关 Events / Behaviors / Actions / Models / 存档点：**

- 事件总线静态入口： [CampaignEvents](../CampaignEvents/)（所有 `...Event` 静态属性）。
- 行为契约： [ICampaignBehavior](../ICampaignBehavior/)、[CampaignBehaviorBase](../CampaignBehaviorBase/)。
- 状态变更应走的 Action： [KillCharacterAction](../KillCharacterAction/)、[ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/)、[ChangeRelationAction](../ChangeRelationAction/)、[ChangeKingdomAction](../ChangeKingdomAction/)、[MakePeaceAction](../MakePeaceAction/)、[DeclareWarAction](../DeclareWarAction/)、[AddCompanionAction](../AddCompanionAction/)、[RemoveCompanionAction](../RemoveCompanionAction/)、[TeleportHeroAction](../TeleportHeroAction/)、[SiegeAftermathAction](../SiegeAftermathAction/)。
- 涉及的领域对象： [Hero](../../campaign/Hero/)、[Settlement](../../campaign/Settlement/)、[Clan](../../campaign/Clan/)、[Kingdom](../../campaign/Kingdom/)、[MobileParty](../../campaign/MobileParty/)、[IssueBase](../IssueBase/)。
- 存档生命周期： [SaveManager](../../save-system/SaveManager/)（`OnBeforeSave` / `OnSaveStarted` / `OnSaveOver` / `OnGameLoaded` 都是本类的钩子）。

## 风险段（事件处理的三大坑）

> `CampaignEventReceiver` 的钩子大多在**战役 tick 中途**被同步调用。下面这些用法的上界是崩溃、卡死或坏档。

1. **事件回调里重入/顺序相关 bug。** 分发器 `CampaignEventDispatcher` 用 `for` 循环遍历 `_eventReceivers` 并逐个调用 `receiver.OnX(...)`。如果你在回调里同步触发另一个会广播的事件（尤其是再次进入同一个 `On*`），会嵌套遍历、改变集合或产生意外的双倍逻辑。需要连锁变更时，先收集意图，放到 `DailyTick`/`HourlyTick` 里再执行。

2. **直接改字段而不走 `*Action.Apply`。** 在 `OnSettlementOwnerChanged` 里写 `settlement.OwnerClan = clan` 不会触发相关的势力关系、影响力、封臣、存档脏标记更新；更糟的是，若在同一帧里已有别的系统基于旧状态计算过，就会出现**双重应用 / 存档错位**。改变世界状态请一律走对应 Action（见依赖图）。

3. **监听器不进存档（`AddNonSerializedListener`）。** `MbEvent` 只有 `AddNonSerializedListener`，订阅记录**不会被序列化进存档**。因此：
   - 必须在 `CampaignBehaviorBase.RegisterEvents()` 里订阅——`Campaign` 在 `OnGameLoaded` 后会重新调用 `RegisterEvents`，订阅才会恢复。
   - 若在别处（如构造器、对话脚本、UI 回调）随手订阅，读档后这个订阅就丢了，且 `owner` 若已失效还会留下悬空引用。
   - 订阅时 `owner` 传 `this`（行为自身），这样卸载/重载时 `CampaignEvents.RemoveListeners(this)` 能正确清理；捕获了具体 `Hero`/`Settlement` 实例的闭包在**读档后这些对象会被重建**，闭包里持有的旧引用会失效——请在回调内部用 `stringId` 重新 `Hero.Find(...)` 查找，而不是在闭包里长期持有对象引用。

4. **`Can*` 系列是“询问/否决”，不是“通知”。** 如 `CanHeroDie`、`CanHeroMarry`、`CanHeroLeadParty`、`CanMoveToSettlement`、`IsSettlementBusy` 这类钩子带 `ref bool result`，引擎调用它们是**请你投票是否允许某件事发生**，你必须（或可以选择）把 `result` 设为 `false` 来否决。它们同样在逻辑中途被调用，里面不要做重型世界变更，尤其不要抛异常，否则会中断整个接收者链。

## 成员说明（按主题分组）

下面不是全部 ~275 个钩子的签名墙，而是按模组最常关心的场景归类，给出**真实签名 + 何时触发 + 副作用/语义**。其余钩子遵循同一模式：名字即语义，参数为事件载荷，默认空实现。

### 1. 会话 / 存档生命周期

这些在游戏启动、读档、存盘时按顺序触发，是行为初始化/清理的常规位置。

- `public virtual void OnNewGameCreated(CampaignGameStarter starter)` —— 新游戏创建后触发。`starter` 可注册对话/游戏菜单。副作用：此时世界已初始化完毕，适合生成初始数据。
- `public virtual void OnGameEarlyLoaded(CampaignGameStarter starter)` —— 读档**最早期**触发，世界对象刚重建完但很多系统还没就位。不要在这里依赖尚未加载的子系统。
- `public virtual void OnGameLoaded(CampaignGameStarter starter)` —— 读档完成、各系统就绪后触发。行为通常在此/由框架调用 `RegisterEvents` 重新订阅事件。
- `public virtual void OnSessionStart(CampaignGameStarter starter)` / `OnAfterSessionStart(...)` —— 一次会话（session）开始与开始后，用于注册 Gauntlet UI、对话线等。
- `public virtual void OnBeforeSave()` / `OnSaveStarted()` / `OnSaveOver(bool isSuccessful, string saveName)` —— 存盘前/开始/结束。适合把非序列化状态写回可存档字段，或在存盘失败时回滚。
- `public virtual void OnGameOver()` —— 游戏结束（主角死亡且无继承等）时触发。

### 2. 周期 Tick（战役时钟）

均由 `Campaign` 的时钟在对应节奏调用，是“每帧/每小时/每天”做扫表逻辑的地方。

- `public virtual void Tick(float dt)` / `MissionTick(float dt)` —— 每帧（带 delta time）。开销敏感，别在里面做重活。
- `public virtual void HourlyTick()` / `QuarterHourlyTick()` —— 战役内每小时 / 每刻钟。
- `public virtual void DailyTick()` / `WeeklyTick()` —— 每天 / 每周。
- 带对象的变体：`HourlyTickParty(MobileParty)`、`HourlyTickSettlement(Settlement)`、`HourlyTickClan(Clan)`、`DailyTickHero(Hero)`、`DailyTickParty(MobileParty)`、`DailyTickClan(Clan)`、`DailyTickSettlement(Settlement)`、`DailyTickTown(Town)` —— 引擎在遍历对应集合时逐个调用，参数即被 tick 的对象。
- AI 相关：`AiHourlyTick(MobileParty, PartyThinkParams)`、`QuarterDailyPartyTick(MobileParty)`、`TickPartialHourlyAi(MobileParty)` —— 部队 AI 决策时机。

> 如果你的逻辑是“对每个英雄/据点每天检查一次”，override `DailyTickHero`/`DailyTickSettlement` 比在 `DailyTick` 里自己遍历更贴合引擎节奏。

### 3. 英雄生命周期

- `public virtual void OnHeroCreated(Hero hero, bool isBornNaturally = false)` —— 英雄被创建（含自然出生）后触发。`isBornNaturally` 区分天生 vs `HeroCreator` 生成。
- `public virtual void OnBeforeHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` —— 在 `KillCharacterAction` 真正执行**之前**触发。对应 `CampaignEvents.BeforeHeroKilledEvent`。
- `public virtual void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` —— 英雄死亡**已发生**后广播。此时 `victim.IsDead == true`。对应静态属性 `CampaignEvents.HeroKilledEvent`（`IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool>`）。
- `public virtual void OnHeroWounded(Hero woundedHero)` —— 英雄负伤（未死）。
- `public virtual void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)` —— 两人关系值变化后；含变化量、详情枚举，以及“原始/实际”英雄对（用于派系关系 vs 个人关系）。
- `public virtual void OnHeroComesOfAge(Hero hero)` / `OnHeroReachesTeenAge(Hero)` / `OnHeroGrowsOutOfInfancy(Hero)` / `OnChildConceived(Hero mother)` / `OnGivenBirth(Hero mother, List<Hero> aliveChildren, int stillbornCount)` —— 年龄阶段与生育相关节点。
- `public virtual void OnHeroPrisonerTaken(PartyBase capturer, Hero prisoner)` / `OnHeroPrisonerReleased(Hero prisoner, PartyBase party, IFaction capturerFaction, EndCaptivityDetail detail, bool showNotification = true)` —— 被俘 / 获释。
- `public virtual void OnHeroChangedClan(Hero hero, Clan oldClan)` / `OnClanLeaderChanged(Hero oldLeader, Hero newLeader)` —— 英雄换家族 / 家族换首领。

### 4. 据点 / 封地

- `public virtual void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)` —— 据点易主后广播（含新旧领主、征服者、易主原因）。对应 `CampaignEvents.OnSettlementOwnerChangedEvent`。**注意：** 这是“已经发生之后”的通知；想改变归属请走 `ChangeOwnerOfSettlementAction.Apply`，不要在回调里直接赋值 `OwnerClan`。
- `public virtual void OnBeforeSettlementEntered(MobileParty, Settlement, Hero)` / `OnSettlementEntered(...)` / `OnAfterSettlementEntered(...)` / `OnSettlementLeft(MobileParty, Settlement)` —— 部队进出据点的三个时机（前/中/后）。
- `public virtual void OnGovernorChanged(Town fortification, Hero oldGovernor, Hero newGovernor)` —— 太守变更。
- `public virtual void OnVillageBeingRaided(Village)` / `OnVillageLooted(Village)` / `OnVillageStateChanged(Village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raiderParty)` / `OnVillageBecomeNormal(Village)` —— 村庄劫掠与状态机。
- `public virtual void OnBuildingLevelChanged(Town town, Building building, int levelChange)` —— 城镇建筑升级。

### 5. 家族 / 王国 / 外交

- `public virtual void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail actionDetail, bool showNotification = true)` —— 家族加入/离开/转换王国。对应 `CampaignEvents.OnClanChangedKingdomEvent`。
- `public virtual void OnClanTierChanged(Clan clan, bool shouldNotify = true)` / `OnClanCreated(Clan clan, bool isCompanion)` / `OnClanDefected(Clan, Kingdom, Kingdom)` / `OnClanDestroyed(Clan)` —— 家族等级/创建/叛逃/覆灭。
- `public virtual void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)` / `OnMakePeace(IFaction side1Faction, IFaction side2Faction, MakePeaceAction.MakePeaceDetail detail)` —— 宣战 / 议和。
- `public virtual void OnKingdomCreated(Kingdom)` / `OnKingdomDestroyed(Kingdom)` / `OnRulingClanChanged(Kingdom kingdom, Clan newRulingClan)` —— 王国创建/毁灭/统治家族变更。
- `public virtual void OnAllianceStarted(Kingdom, Kingdom)` / `OnAllianceEnded(Kingdom, Kingdom)` / `OnCallToWarAgreementStarted(...)` / `OnCallToWarAgreementEnded(...)` —— 同盟与参战协定（1.4.5 起存在）。

### 6. 战斗 / 任务 / 场景

- `public virtual void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)` / `OnMapEventEnded(MapEvent mapEvent)` —— 地图事件（遭遇战）开始/结束。
- `public virtual void OnStartBattle(PartyBase attackerParty, PartyBase defenderParty, object subject, bool showNotification)` —— 战斗开始。
- `public virtual void OnPlayerBattleEnd(MapEvent mapEvent)` / `OnPlayerDesertedBattle(int sacrificedMenCount)` —— 玩家战斗结束 / 临阵脱逃。
- `public virtual void OnSiegeEventStarted(SiegeEvent)` / `OnSiegeEventEnded(SiegeEvent)` / `OnSiegeAftermathApplied(MobileParty attackerParty, Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float> partyContributions)` —— 攻城事件与战果分配。
- `public virtual void OnMissionStarted(IMission mission)` / `OnMissionEnded(IMission mission)` / `OnAfterMissionStarted(IMission iMission)` / `BeforeMissionOpened()` —— 任务（Mission）场景的开始/结束。
- `public virtual void OnQuestStarted(QuestBase quest)` / `OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)` / `OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)` —— 任务与问题（issue）生命周期。

### 7. 经济 / 资源

- `public virtual void OnHeroOrPartyTradedGold((Hero, PartyBase) giver, (Hero, PartyBase) recipient, (int, string) goldAmount, bool showNotification)` —— 黄金转移（tuple 携带 `(英雄, 队伍)` 与 `(数量, 原因)`）。对应 `CampaignEvents.HeroOrPartyTradedGold`。这是“转账已经发生”的通知；发起转账应走对应的经济 Action，而非直接改 `Gold`。
- `public virtual void OnRenownGained(Hero hero, int gainedRenown, bool doNotNotify)` / `OnClanInfluenceChanged(Clan clan, float change)` / `OnPlayerTradeProfit(int profit)` / `OnClanEarnedGoldFromTribute(Clan receiverClan, IFaction payingFaction)` —— 声望/影响力/交易利润/贡金。

### 8. 询问 / 否决类（`Can*`、`Is*`）

这些是**查询钩子**，带 `ref bool result`。引擎问“能不能做 X”，你在方法里把 `result` 设为 `false` 即可否决；不设置则保持默认（通常允许）。它们在逻辑判定中途被调用，请勿在其中做世界状态变更或抛异常：

- `CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`
- `CanHeroMarry(Hero hero, ref bool result)`
- `CanHeroLeadParty(Hero hero, ref bool result)`
- `CanHeroBecomePrisoner(Hero hero, ref bool result)`
- `CanMoveToSettlement(Hero hero, ref bool result)`
- `CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`
- `CanHaveCampaignIssues(Hero hero, ref bool result)`
- `CanPlayerMeetWithHeroAfterConversation(Hero hero, ref bool result)`
- `CanKingdomBeDiscontinued(Kingdom kingdom, ref bool result)`
- `IsSettlementBusy(Settlement settlement, object asker, ref int flags)`

### 其余钩子（模式一致，按需查阅源码）

本类还有约两百余个 `On*`（村庄、商队、工坊、讨价还价 `Barter`、 tournament 锦标赛、romance 婚恋、crafting 锻造、ship 船只、map marker 地图标记、tutorial 教程、persuasion 说服、hideout 匪窝、blockade 封锁等）。它们全部遵循同一约定：**名字即触发时机，参数为事件载荷，默认空实现，通过 `CampaignEvents.<同名>Event` 静态属性订阅**。写模组时若想知道“某件事有没有事件”，直接在本类里按名字搜 `OnXxx` 即可，再用对应的 `CampaignEvents.XxxEvent` 订阅。

## 最小真实示例

### 示例 1：在行为里订阅“英雄被杀”事件（正确路径）

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;

public class MyKillLogger : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // 在 RegisterEvents 里订阅；Campaign 读档后会再次调用它，订阅自动恢复。
        // owner 传 this，保证 CampaignEvents.RemoveListeners(this) 能清理。
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(
            this,
            (Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification) =>
            {
                // 回调在战役 tick 中途被同步调用：只读取、记录，不要在这里重入触发事件。
                if (victim != null && victim.IsPlayerCompanion)
                {
                    InformationManager.DisplayMessage(
                        new InformationMessage($"{victim.Name} 阵亡，凶手={killer?.Name}"));
                }
            });
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 没有需要存盘的字段时留空；不要在这里订阅事件。
    }
}
```

注册该行为：`Campaign.Current.AddCampaignBehavior(new MyKillLogger());`（通常在 `MBSubModuleBase` 的 `OnGameStart` 里，配合 `Campaign.Current.GetCampaignBehavior<T>()` 防重复注册）。

### 示例 2：在行为里订阅“据点易主”并安全响应

```csharp
public override void RegisterEvents()
{
    CampaignEvents.OnSettlementOwnerChangedEvent.AddNonSerializedListener(
        this,
        (Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero,
         ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail) =>
        {
            // 这是“易主已发生”的通知。若你想施加自己的后续效果，
            // 走对应的 *Action.Apply，而不是 settlement.OwnerClan = ... 直接改字段。
            if (newOwner == Hero.MainHero && settlement.IsTown)
            {
                // 例如给新主城加一笔影响力，而非手动改 Clan 影响力字段：
                // ChangeClanInfluenceAction.Apply(Hero.MainHero.Clan, 50f);
            }
        });
}
```

### 常见反模式（务必避开）

- **自己 `new CampaignEventReceiver()` 然后 override `On*`：** 你拿到的是空壳，没有任何事件会流经它（除非再 `AddCampaignEventReceiver`，而这与行为系统重复）。直接用 `CampaignBehaviorBase` + `CampaignEvents` 订阅即可。
- **在事件回调里直接改 `Hero.Gold`、`Settlement.OwnerClan` 等字段：** 绕过 `*Action.Apply`，会丢失通知、关系、影响力与存档脏标记，并可能双重计算。改变世界状态请走对应 Action。
- **在 `OnHeroKilled` 之类的回调里再次 `KillCharacterAction.Apply`：** 分发器正在遍历 `_eventReceivers` 数组，就地重入触发事件会引发顺序相关 bug 甚至异常。把连锁反应延迟到 `DailyTick`/`HourlyTick`。
- **在 `RegisterEvents` 之外订阅 / `owner` 不传 `this`：** 读档后订阅丢失，`RemoveListeners` 也无法清理，留下悬空引用。

## 跨版本提示

- **v1.3.15：** 本类在 `TaleWorlds.CampaignSystem/CampaignEventReceiver.cs`，公开 `On*` 钩子数量与 1.4.5 基本一致（1.4.5 相对 1.3.15 仅少了 `OnHeroActivated`、`CollectMetadataEntries` 两个钩子，其余命名/签名基本对齐）。订阅机制同样是 `CampaignEvents.<事件>Event.AddNonSerializedListener`。
- **v1.4.5（本页权威来源）：** `CampaignEvents` 用静态属性（如 `HeroKilledEvent`、`OnSettlementOwnerChangedEvent`、`OnClanChangedKingdomEvent`）暴露 `IMbEvent<...>`；分发器 `CampaignEventDispatcher` 的 `_eventReceivers` 默认仍是 `[CampaignEvents, IssueManager, QuestManager]`。新增了 `OnAllianceStarted/Ended`、`OnCallToWarAgreementStarted/Ended`、`OnShipCreated`、`OnMercenaryServiceStarted`、`OnHeirSelectionOver` 等钩子，用于外交/船只/继承系统。
- 无论哪个版本：**模组开发者都不要继承或实例化 `CampaignEventReceiver`**，统一用 [CampaignBehaviorBase](../CampaignBehaviorBase/) + [CampaignEvents](../CampaignEvents/) 订阅。

## 参见

- ↑ 父级（本桶索引）：[campaign-ext 索引](../)
- ↔ 同级：
  - [CampaignEvents](../CampaignEvents/) —— 事件总线，订阅入口都在这里
  - [CampaignEventDispatcher](../CampaignEventDispatcher/) —— 真正广播事件的 dispatcher
  - [CampaignBehaviorBase](../CampaignBehaviorBase/) —— 模组开发者应继承的基类（在 `RegisterEvents` 里订阅）
  - [ICampaignBehavior](../ICampaignBehavior/) —— 行为契约
- 相关类 / 上游：
  - [Campaign](../../campaign/Campaign/) —— 持有 dispatcher 与 events，驱动 tick
  - [Hero](../../campaign/Hero/)、[Settlement](../../campaign/Settlement/)、[Clan](../../campaign/Clan/)、[Kingdom](../../campaign/Kingdom/)、[MobileParty](../../campaign/MobileParty/)、[IssueBase](../IssueBase/)
  - 改变世界状态应走的 Action：[KillCharacterAction](../KillCharacterAction/)、[ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/)、[ChangeRelationAction](../ChangeRelationAction/)、[ChangeKingdomAction](../ChangeKingdomAction/)、[MakePeaceAction](../MakePeaceAction/)、[DeclareWarAction](../DeclareWarAction/)
  - 模块生命周期：[MBSubModuleBase](../../core/MBSubModuleBase/)
  - 存档：[SaveManager](../../save-system/SaveManager/)
