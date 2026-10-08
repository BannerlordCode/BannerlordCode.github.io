---
title: "CampaignEventDispatcher"
description: "战役事件执行器：游戏代码调用 Instance.OnXxx 扇出到所有 CampaignEventReceiver，是 CampaignEvents 静态事件与游戏逻辑之间的桥梁。"
---
# CampaignEventDispatcher

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CampaignEventDispatcher : CampaignEventReceiver`
**Source:** `TaleWorlds.CampaignSystem/CampaignEventDispatcher.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`CampaignEventDispatcher` 是战役事件的**执行器**。游戏代码不直接触发 `CampaignEvents` 的静态事件，而是调用 `CampaignEventDispatcher.Instance.OnXxx(...)`，由它扇出到所有已注册的 `CampaignEventReceiver` 实例。它在 `CampaignEventDispatcher.cs:33` 声明为 `public class CampaignEventDispatcher : CampaignEventReceiver`，全文 2,867 行，含 278 个 `public override` 方法。

它是三层事件架构的最后一层：`CampaignEventReceiver`（虚方法集合，监听接口）→ `CampaignEvents`（覆写后触发静态事件，发布侧）→ `CampaignEventDispatcher`（覆写后扇出给所有 receiver，执行侧）。

## 心智模型

**把 `CampaignEventDispatcher` 想成「游戏逻辑与事件总线之间的扇出器」。**

**第一，三层架构。** `CampaignEventReceiver` 是基类，定义了全部 `public virtual void OnXxx(...)` 方法——这是「监听接口」。`CampaignEvents` 继承它，每个覆写触发对应的静态事件属性（`ArmyCreated`、`TickEvent` 等）——mod 订阅的就是这些静态事件。`CampaignEventDispatcher` 也继承它，但覆写做的是**遍历 `_eventReceivers` 数组，对每个 receiver 调同一个 `OnXxx`**——这是「执行器」。

**第二，调用链。** 游戏代码调 `CampaignEventDispatcher.Instance.OnArmyCreated(army)`（`CampaignEventDispatcher.cs:339`）→ 遍历所有 receiver → `CampaignEvents.OnArmyCreated` 被调到 → 触发 `CampaignEvents.ArmyCreated` 静态事件 → mod 的订阅回调执行。**整条链是同步的**：一个慢 receiver 会阻塞后面所有 receiver。

**第三，`Instance` 是静态单例入口。** `Instance`（`CampaignEventDispatcher.cs:37`）返回 `Campaign.Current.CampaignEventDispatcher`。`Campaign.Current` 为 null 时（战役未建立或已结束）`Instance` 也返回 null——**调之前判空**。

**第四，receiver 注册是内部的。** 构造函数接收 `IEnumerable<CampaignEventReceiver>`，`AddCampaignEventReceiver`（internal）负责注册。mod 不需要手动注册 receiver——`CampaignBehaviorBase` 在 `RegisterEvents` 时自动挂到 `CampaignEvents` 上。

**第五，`RemoveListeners(object)` 是批量退订入口。** 它（`CampaignEventDispatcher.cs:69`）转发到所有 receiver 的 `RemoveListeners`，移除指定对象注册的全部监听。**这是 mod 清理订阅的正确方式**——比逐个 `-=` 更可靠，且能清理跨多个 receiver 的订阅。

## 怎么用

### 怎么拿到

```csharp
CampaignEventDispatcher dispatcher = CampaignEventDispatcher.Instance;
if (dispatcher != null)
{
    // 战役已建立，可以安全使用
}
```

### 典型用法

mod 通常**不直接调 `OnXxx`**——那是游戏代码的事。mod 的典型用法是订阅 `CampaignEvents` 的静态事件，以及在 behavior 移除时批量退订：

```csharp
// 订阅（静态事件，由 Dispatcher 扇出触发）
CampaignEvents.ArmyCreated += OnArmyCreated;

// 退订：移除本对象注册的所有监听
CampaignEventDispatcher.Instance.RemoveListeners(this);
```

### 坑

- **不要直接调 `Instance.OnXxx`。** 除非你在写游戏内部逻辑，否则会绕过正常事件流，可能导致重复触发或顺序错乱。
- **`Instance` 可能为 null。** `Campaign.Current` 为 null 时（菜单、战役未建立）`Instance` 返回 null。
- **扇出是同步的。** 所有 receiver 按注册顺序依次执行，一个慢 receiver 会阻塞整条链。
- **`RemoveListeners(object)` 是全局的。** 它移除该对象在**所有** receiver 上的订阅，不只是 `CampaignEvents`。
- **278 个 `OnXxx` 方法是游戏内部 API。** mod 直接调它们没有意义——它们的作用是触发静态事件，而订阅静态事件才是 mod 的正确姿势。

## 关键成员

取舍判据：278 个 `OnXxx` 方法不可能逐条写。按功能分十组，每组写代表成员；**未列出的 `OnXxx` 方法与同组代表的行为模式完全一致**（遍历 `_eventReceivers` 扇出），只是参数与触发的静态事件不同。

### 身份与机制

| 成员 | 用途 |
| --- | --- |
| `Instance`（`CampaignEventDispatcher.cs:37`） | 静态属性，返回 `Campaign.Current.CampaignEventDispatcher`。战役未建立时为 null |
| `RemoveListeners(object)`（`CampaignEventDispatcher.cs:69`） | 批量退订：移除指定对象在所有 receiver 上注册的监听 |

### tick 家族

| 成员 | 用途 |
| --- | --- |
| `Tick(float)`（`CampaignEventDispatcher.cs:1169`） | 每帧扇出，触发 `TickEvent` |
| `MissionTick(float)`（`CampaignEventDispatcher.cs:1289`） | 任务内每帧 |
| `QuarterHourlyTick()`（`CampaignEventDispatcher.cs:1389`） | 每刻钟 |
| `HourlyTick()`（`CampaignEventDispatcher.cs:1379`） | 每小时 |
| `DailyTick()`（`CampaignEventDispatcher.cs:1429`） | 每天 |
| `WeeklyTick()`（`CampaignEventDispatcher.cs:1489`） | 每周 |
| `TickPartialHourlyAi(MobileParty)`（`CampaignEventDispatcher.cs:1349`） | AI 部队部分小时节拍 |
| `AiHourlyTick(MobileParty, PartyThinkParams)`（`CampaignEventDispatcher.cs:1369`） | AI 部队每小时思考 |
| `QuarterDailyPartyTick(MobileParty)`（`CampaignEventDispatcher.cs:1359`） | 每部队每四分之一日 |
| `HourlyTickParty(MobileParty)`（`CampaignEventDispatcher.cs:1399`） | 每部队每小时 |
| `DailyTickParty(MobileParty)`（`CampaignEventDispatcher.cs:1439`） | 每部队每天 |
| `HourlyTickClan(Clan)`（`CampaignEventDispatcher.cs:1419`） | 每家族每小时 |
| `DailyTickClan(Clan)`（`CampaignEventDispatcher.cs:1479`） | 每家族每天 |
| `HourlyTickSettlement(Settlement)`（`CampaignEventDispatcher.cs:1409`） | 每定居点每小时 |
| `DailyTickSettlement(Settlement)`（`CampaignEventDispatcher.cs:1459`） | 每定居点每天 |
| `DailyTickTown(Town)`（`CampaignEventDispatcher.cs:1449`） | 每城镇每天 |
| `DailyTickHero(Hero)`（`CampaignEventDispatcher.cs:1469`） | 每领主每天 |

### 会话与存档

| 成员 | 用途 |
| --- | --- |
| `OnNewGameCreated(CampaignGameStarter)`（`CampaignEventDispatcher.cs:1199`） | 新档创建 |
| `OnGameEarlyLoaded(CampaignGameStarter)`（`CampaignEventDispatcher.cs:1209`） | 读档早期 |
| `OnGameLoaded(CampaignGameStarter)`（`CampaignEventDispatcher.cs:1219`） | 战役加载完成 |
| `OnGameLoadFinished()`（`CampaignEventDispatcher.cs:1229`） | 加载流程结束 |
| `OnSessionStart(CampaignGameStarter)`（`CampaignEventDispatcher.cs:1179`） | 会话启动 |
| `OnAfterSessionStart(CampaignGameStarter)`（`CampaignEventDispatcher.cs:1189`） | 会话启动之后 |
| `OnBeforeSave()`（`CampaignEventDispatcher.cs:2239`） | 存档前 |
| `OnSaveStarted()`（`CampaignEventDispatcher.cs:2249`） | 存档开始 |
| `OnSaveOver(bool, string)`（`CampaignEventDispatcher.cs:2259`） | 存档结束 |
| `OnGameOver()`（`CampaignEventDispatcher.cs:2069`） | 战役结束 |
| `OnConfigChanged()`（`CampaignEventDispatcher.cs:2845`） | 配置变更 |
| `OnCharacterCreationInitialized(CharacterCreationManager)`（`CampaignEventDispatcher.cs:2479`） | 角色创建初始化 |
| `OnCharacterCreationIsOver()`（`CampaignEventDispatcher.cs:109`） | 角色创建结束 |

### 战斗、地图事件与围城

| 成员 | 用途 |
| --- | --- |
| `OnMapEventStarted(MapEvent, PartyBase, PartyBase)`（`CampaignEventDispatcher.cs:969`） | 地图事件开始 |
| `OnMapEventEnded(MapEvent)`（`CampaignEventDispatcher.cs:959`） | 地图事件结束 |
| `OnStartBattle(PartyBase, PartyBase, object, bool)`（`CampaignEventDispatcher.cs:599`） | 战斗开始 |
| `OnPlayerBattleEnd(MapEvent)`（`CampaignEventDispatcher.cs:1329`） | 玩家一方战斗结束 |
| `OnPartyAddedToMapEvent(PartyBase)`（`CampaignEventDispatcher.cs:2539`） | 部队加入地图事件 |
| `OnPlayerPartyKnockedOrKilledTroop(CharacterObject)`（`CampaignEventDispatcher.cs:2369`） | 玩家部下被击伤或击杀 |
| `OnSiegeEventStarted(SiegeEvent)`（`CampaignEventDispatcher.cs:1729`） | 围城开始 |
| `OnSiegeEventEnded(SiegeEvent)`（`CampaignEventDispatcher.cs:1749`） | 围城结束 |
| `SiegeCompleted(Settlement, MobileParty, bool, MapEvent.BattleTypes)`（`CampaignEventDispatcher.cs:2079`） | 攻城战斗结束 |
| `AfterSiegeCompleted(Settlement, MobileParty, bool, MapEvent.BattleTypes)`（`CampaignEventDispatcher.cs:2089`） | 攻城善后开始 |
| `SiegeEngineBuilt(SiegeEvent, BattleSideEnum, SiegeEngineType)`（`CampaignEventDispatcher.cs:2099`） | 攻城器械建成 |
| `OnSiegeEngineDestroyed(MobileParty, Settlement, BattleSideEnum, SiegeEngineType)`（`CampaignEventDispatcher.cs:1789`） | 攻城器械被摧毁 |
| `OnSiegeAftermathApplied(MobileParty, Settlement, SiegeAftermathAction.SiegeAftermath, Clan, Dictionary<MobileParty, float>)`（`CampaignEventDispatcher.cs:1759`） | 攻城后果结算 |
| `OnSiegeBombardmentHit(MobileParty, Settlement, BattleSideEnum, SiegeEngineType, SiegeBombardTargets)`（`CampaignEventDispatcher.cs:1769`） | 轰击命中 |
| `OnSiegeBombardmentWallHit(MobileParty, Settlement, BattleSideEnum, SiegeEngineType, bool)`（`CampaignEventDispatcher.cs:1779`） | 轰击命中城墙 |
| `OnBlockadeActivated(SiegeEvent)`（`CampaignEventDispatcher.cs:2589`） | 封锁启动 |
| `OnBlockadeDeactivated(SiegeEvent)`（`CampaignEventDispatcher.cs:2599`） | 封锁解除 |
| `RaidCompleted(BattleSideEnum, RaidEventComponent)`（`CampaignEventDispatcher.cs:2109`） | 劫掠完成 |
| `ForceSuppliesCompleted(BattleSideEnum, ForceSuppliesEventComponent)`（`CampaignEventDispatcher.cs:2119`） | 强征粮草完成 |
| `ForceVolunteersCompleted(BattleSideEnum, ForceVolunteersEventComponent)`（`CampaignEventDispatcher.cs:2129`） | 强征志愿兵完成 |
| `OnHideoutBattleCompleted(BattleSideEnum, HideoutEventComponent, HideoutEventComponent.HideoutBattleEndState)`（`CampaignEventDispatcher.cs:2139`） | 据点战结束 |
| `OnPlayerSiegeStarted()`（`CampaignEventDispatcher.cs:1739`） | 玩家发起围城 |
| `OnMapEventContinuityNeedsUpdate(IFaction)`（`CampaignEventDispatcher.cs:2449`） | 地图事件连续性需刷新 |

### 王国、家族与外交

| 成员 | 用途 |
| --- | --- |
| `OnKingdomCreated(Kingdom)`（`CampaignEventDispatcher.cs:899`） | 王国建立 |
| `OnKingdomDestroyed(Kingdom)`（`CampaignEventDispatcher.cs:879`） | 王国覆灭 |
| `OnWarDeclared(IFaction, IFaction, DeclareWarAction.DeclareWarDetail)`（`CampaignEventDispatcher.cs:579`） | 宣战 |
| `OnMakePeace(IFaction, IFaction, MakePeaceAction.MakePeaceDetail)`（`CampaignEventDispatcher.cs:869`） | 缔结和平 |
| `OnRulingClanChanged(Kingdom, Clan)`（`CampaignEventDispatcher.cs:589`） | 统治家族更替 |
| `OnAllianceStarted(Kingdom, Kingdom)`（`CampaignEventDispatcher.cs:2649`） | 同盟建立 |
| `OnAllianceEnded(Kingdom, Kingdom)`（`CampaignEventDispatcher.cs:2659`） | 同盟破裂 |
| `OnTradeAgreementSigned(Kingdom, Kingdom)`（`CampaignEventDispatcher.cs:1039`） | 贸易协定签署 |
| `OnCallToWarAgreementStarted(Kingdom, Kingdom, Kingdom)`（`CampaignEventDispatcher.cs:2669`） | 参战号召开始 |
| `OnCallToWarAgreementEnded(Kingdom, Kingdom, Kingdom)`（`CampaignEventDispatcher.cs:2679`） | 参战号召结束 |
| `OnPeaceOfferedToPlayer(IFaction, int, int)`（`CampaignEventDispatcher.cs:1029`） | 向玩家提出和平 |
| `OnPeaceOfferResolved(IFaction)`（`CampaignEventDispatcher.cs:1049`） | 和平提议处理完毕 |
| `OnCrimeRatingChanged(IFaction, float)`（`CampaignEventDispatcher.cs:829`） | 犯罪值变化 |
| `OnVassalOrMercenaryServiceOfferedToPlayer(Kingdom)`（`CampaignEventDispatcher.cs:1079`） | 封臣或佣兵邀请 |
| `OnVassalOrMercenaryServiceOfferCanceled(Kingdom)`（`CampaignEventDispatcher.cs:1099`） | 上述邀请取消 |
| `CanKingdomBeDiscontinued(Kingdom, ref bool)`（`CampaignEventDispatcher.cs:889`） | 王国能否被解散（否决点） |
| `OnClanCreated(Clan, bool)`（`CampaignEventDispatcher.cs:259`） | 家族创建 |
| `OnClanDestroyed(Clan)`（`CampaignEventDispatcher.cs:2149`） | 家族被摧毁 |
| `OnClanTierChanged(Clan, bool)`（`CampaignEventDispatcher.cs:229`） | 家族等级变化 |
| `OnClanInfluenceChanged(Clan, float)`（`CampaignEventDispatcher.cs:2359`） | 家族影响力变化 |
| `OnClanEarnedGoldFromTribute(Clan, IFaction)`（`CampaignEventDispatcher.cs:2329`） | 家族收到贡金 |
| `OnClanChangedKingdom(Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool)`（`CampaignEventDispatcher.cs:239`） | 家族换王国 |
| `OnClanDefected(Clan, Kingdom, Kingdom)`（`CampaignEventDispatcher.cs:249`） | 家族叛离 |
| `OnMercenaryServiceStarted(Clan, StartMercenaryServiceAction.StartMercenaryServiceActionDetails)`（`CampaignEventDispatcher.cs:2629`） | 佣兵服务开始 |
| `OnMercenaryServiceEnded(Clan, EndMercenaryServiceAction.EndMercenaryServiceActionDetails)`（`CampaignEventDispatcher.cs:2639`） | 佣兵服务结束 |
| `OnClanLeaderChanged(Hero, Hero)`（`CampaignEventDispatcher.cs:1719`） | 家族领袖更替 |

### 部队与军队

| 成员 | 用途 |
| --- | --- |
| `OnMobilePartyCreated(MobileParty)`（`CampaignEventDispatcher.cs:659`） | 部队创建 |
| `OnMobilePartyDestroyed(MobileParty, PartyBase)`（`CampaignEventDispatcher.cs:649`） | 部队被解散 |
| `OnPartyDisbandStarted(MobileParty)`（`CampaignEventDispatcher.cs:1899`） | 解散流程开始 |
| `OnPartyDisbanded(MobileParty, Settlement)`（`CampaignEventDispatcher.cs:1889`） | 解散完成 |
| `OnPartyDisbandCanceled(MobileParty)`（`CampaignEventDispatcher.cs:1909`） | 解散被撤销 |
| `OnPartyLeaderChanged(MobileParty, Hero)`（`CampaignEventDispatcher.cs:2399`） | 队长变更 |
| `OnPartySizeChanged(PartyBase)`（`CampaignEventDispatcher.cs:1129`） | 部队规模变化 |
| `OnPartyConsumedFood(MobileParty)`（`CampaignEventDispatcher.cs:2029`） | 部队消耗口粮 |
| `OnMainPartyStarving()`（`CampaignEventDispatcher.cs:2409`） | 主力队开始饥饿 |
| `OnTroopsDeserted(MobileParty, TroopRoster)`（`CampaignEventDispatcher.cs:1829`） | 士兵逃散 |
| `OnMobilePartyNavigationStateChanged(MobileParty)`（`CampaignEventDispatcher.cs:2559`） | 导航状态切换 |
| `OnMobilePartyJoinedToSiegeEvent(MobileParty)`（`CampaignEventDispatcher.cs:2569`） | 部队加入围城 |
| `OnMobilePartyLeftSiegeEvent(MobileParty)`（`CampaignEventDispatcher.cs:2579`） | 部队离开围城 |
| `OnPartyRemoved(PartyBase)`（`CampaignEventDispatcher.cs:1119`） | 部队移出地图事件 |
| `OnPartyVisibilityChanged(PartyBase)`（`CampaignEventDispatcher.cs:1549`） | 部队可见性变化 |
| `OnPartyAttachedAnotherParty(MobileParty)`（`CampaignEventDispatcher.cs:349`） | 部队并入另一支部队 |
| `OnNearbyPartyAddedToPlayerMapEvent(MobileParty)`（`CampaignEventDispatcher.cs:359`） | 部队进入玩家视野 |
| `OnPartyJoinedArmy(MobileParty)`（`CampaignEventDispatcher.cs:1239`） | 部队加入军队 |
| `OnPartyRemovedFromArmy(MobileParty)`（`CampaignEventDispatcher.cs:1249`） | 部队离开军队 |
| `OnPartyLeftArmy(MobileParty, Army)`（`CampaignEventDispatcher.cs:2499`） | 离开军队并回传军队对象 |
| `OnArmyCreated(Army)`（`CampaignEventDispatcher.cs:339`） | 军队建立 |
| `OnArmyDispersed(Army, Army.ArmyDispersionReason, bool)`（`CampaignEventDispatcher.cs:369`） | 军队解散 |
| `OnArmyGathered(Army, IMapPoint)`（`CampaignEventDispatcher.cs:379`） | 军队集结 |
| `OnArmyOverlaySetDirty()`（`CampaignEventDispatcher.cs:1269`） | 军队覆盖层需重绘 |
| `OnPlayerArmyLeaderChangedBehavior()`（`CampaignEventDispatcher.cs:1259`） | 玩家军队领袖行为变更 |
| `OnMobilePartyQuestStatusChanged(MobileParty, bool)`（`CampaignEventDispatcher.cs:689`） | 部队被任务占用状态变化 |
| `OnMobilePartyRaftStateChanged(MobileParty)`（`CampaignEventDispatcher.cs:2855`） | 渡河状态切换 |

### 定居点、村庄与城镇

| 成员 | 用途 |
| --- | --- |
| `OnBeforeSettlementEntered(MobileParty, Settlement, Hero)`（`CampaignEventDispatcher.cs:449`） | 进入定居点之前 |
| `OnSettlementEntered(MobileParty, Settlement, Hero)`（`CampaignEventDispatcher.cs:429`） | 已进入定居点 |
| `OnAfterSettlementEntered(MobileParty, Settlement, Hero)`（`CampaignEventDispatcher.cs:439`） | 进入完成之后 |
| `OnSettlementLeft(MobileParty, Settlement)`（`CampaignEventDispatcher.cs:1159`） | 离开定居点 |
| `OnSettlementOwnerChanged(Settlement, bool, Hero, Hero, Hero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail)`（`CampaignEventDispatcher.cs:1139`） | 归属变更 |
| `OnRebellionFinished(Settlement, Clan)`（`CampaignEventDispatcher.cs:609`） | 叛乱平定 |
| `OnRebelliousClanDisbandedAtSettlement(Settlement, Clan)`（`CampaignEventDispatcher.cs:629`） | 叛乱家族解散 |
| `TownRebelliousStateChanged(Town, bool)`（`CampaignEventDispatcher.cs:619`） | 城镇叛乱状态翻转 |
| `OnVillageStateChanged(Village, Village.VillageStates, Village.VillageStates, MobileParty)`（`CampaignEventDispatcher.cs:419`） | 村庄状态迁移 |
| `OnVillageBeingRaided(Village)`（`CampaignEventDispatcher.cs:919`） | 村庄被袭击中 |
| `OnVillageLooted(Village)`（`CampaignEventDispatcher.cs:929`） | 村庄被洗劫 |
| `OnVillageBecomeNormal(Village)`（`CampaignEventDispatcher.cs:909`） | 村庄恢复正常 |
| `OnBuildingLevelChanged(Town, Building, int)`（`CampaignEventDispatcher.cs:1919`） | 建筑等级变化 |
| `OnGovernorChanged(Town, Hero, Hero)`（`CampaignEventDispatcher.cs:1149`） | 总督更替 |
| `OnTournamentStarted(Town)`（`CampaignEventDispatcher.cs:549`） | 赛事开始 |
| `OnTournamentCancelled(Town)`（`CampaignEventDispatcher.cs:569`） | 赛事取消 |
| `OnTournamentFinished(CharacterObject, MBReadOnlyList<CharacterObject>, Town, ItemObject)`（`CampaignEventDispatcher.cs:559`） | 赛事结束 |
| `OnPlayerJoinedTournament(Town, bool)`（`CampaignEventDispatcher.cs:2419`） | 玩家报名 |
| `OnPlayerStartedTournamentMatch(Town)`（`CampaignEventDispatcher.cs:539`） | 玩家进入比赛回合 |
| `OnPlayerEliminatedFromTournament(int, Town)`（`CampaignEventDispatcher.cs:529`） | 玩家被淘汰 |
| `OnPlayerDesertedBattle(int)`（`CampaignEventDispatcher.cs:1279`） | 玩家在战斗中脱队 |
| `OnMercenaryNumberChangedInTown(Town, int, int)`（`CampaignEventDispatcher.cs:469`） | 城镇佣兵数量变化 |
| `OnMercenaryTroopChangedInTown(Town, CharacterObject, CharacterObject)`（`CampaignEventDispatcher.cs:459`） | 城镇佣兵兵种替换 |
| `OnCommonAreaStateChanged(Alley, Alley.AreaState, Alley.AreaState)`（`CampaignEventDispatcher.cs:1089`） | 街区状态变化 |

### 领主（Hero）

| 成员 | 用途 |
| --- | --- |
| `OnHeroCreated(Hero, bool)`（`CampaignEventDispatcher.cs:189`） | 领主创建 |
| `OnHeroActivated(Hero, Hero.CharacterStates)`（`CampaignEventDispatcher.cs:199`） | 领主状态变化 |
| `OnHeroLevelledUp(Hero, bool)`（`CampaignEventDispatcher.cs:89`） | 领主升级 |
| `OnHeroGainedSkill(Hero, SkillObject, int, bool)`（`CampaignEventDispatcher.cs:119`） | 领主获得技能点 |
| `OnPerkOpened(Hero, PerkObject)`（`CampaignEventDispatcher.cs:389`） | 解锁天赋 |
| `OnPerkReset(Hero, PerkObject)`（`CampaignEventDispatcher.cs:399`） | 天赋被重置 |
| `OnHeroWounded(Hero)`（`CampaignEventDispatcher.cs:129`） | 领主负伤 |
| `OnHeroKilled(Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool)`（`CampaignEventDispatcher.cs:699`） | 领主死亡已结算 |
| `OnBeforeHeroKilled(Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool)`（`CampaignEventDispatcher.cs:709`） | 领主死亡结算前 |
| `OnBeforeMainCharacterDied(Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool)`（`CampaignEventDispatcher.cs:2059`） | 主角即将死亡 |
| `OnHeroCombatHit(CharacterObject, CharacterObject, PartyBase, WeaponComponentData, bool, int)`（`CampaignEventDispatcher.cs:1639`） | 战斗命中结算 |
| `OnHeroOccupationChanged(Hero, Occupation)`（`CampaignEventDispatcher.cs:159`） | 职业改变 |
| `OnHeroChangedClan(Hero, Clan)`（`CampaignEventDispatcher.cs:2289`） | 领主换家族 |
| `OnHeroJoinedParty(Hero, MobileParty)`（`CampaignEventDispatcher.cs:269`） | 领主加入队伍 |
| `OnRenownGained(Hero, int, bool)`（`CampaignEventDispatcher.cs:819`） | 声望增加 |
| `OnPlayerMetHero(Hero)`（`CampaignEventDispatcher.cs:809`） | 玩家首次遇见领主 |
| `OnPlayerLearnsAboutHero(Hero)`（`CampaignEventDispatcher.cs:799`） | 玩家通过传闻得知领主 |
| `OnHeroPrisonerTaken(PartyBase, Hero)`（`CampaignEventDispatcher.cs:769`） | 领主被俘 |
| `OnHeroPrisonerReleased(Hero, PartyBase, IFaction, EndCaptivityDetail, bool)`（`CampaignEventDispatcher.cs:779`） | 领主被释放 |
| `OnRansomOfferedToPlayer(Hero)`（`CampaignEventDispatcher.cs:1009`） | 有人向玩家提出赎人 |
| `OnRansomOfferCancelled(Hero)`（`CampaignEventDispatcher.cs:1019`） | 赎人提议被取消 |
| `OnCharacterDefeated(Hero, Hero)`（`CampaignEventDispatcher.cs:759`） | 决斗败北 |
| `OnCharacterBecameFugitive(Hero, bool)`（`CampaignEventDispatcher.cs:789`） | 成为逃犯 |
| `OnHeroGetsBusy(Hero, HeroGetsBusyReasons)`（`CampaignEventDispatcher.cs:2299`） | 进入忙碌状态 |
| `OnHeroSharedFoodWithAnother(Hero, Hero, float)`（`CampaignEventDispatcher.cs:1949`） | 领主请客 |
| `OnHeroTeleportationRequested(Hero, Settlement, MobileParty, TeleportHeroAction.TeleportationDetail)`（`CampaignEventDispatcher.cs:2349`） | 请求传送领主 |
| `OnHeroUnregistered(Hero)`（`CampaignEventDispatcher.cs:2825`） | 领主对象注销 |
| `OnRomanticStateChanged(Hero, Hero, Romance.RomanceLevelEnum)`（`CampaignEventDispatcher.cs:509`） | 恋爱关系阶段变化 |
| `OnBeforeHeroesMarried(Hero, Hero, bool)`（`CampaignEventDispatcher.cs:519`） | 婚姻结算前 |
| `OnMarriageOfferedToPlayer(Hero, Hero)`（`CampaignEventDispatcher.cs:1059`） | 有人向玩家提亲 |
| `OnMarriageOfferCanceled(Hero, Hero)`（`CampaignEventDispatcher.cs:1069`） | 提亲被取消 |
| `OnGivenBirth(Hero, List<Hero>, int)`（`CampaignEventDispatcher.cs:1309`） | 生产 |
| `OnChildConceived(Hero)`（`CampaignEventDispatcher.cs:1299`） | 受孕 |
| `OnHeroComesOfAge(Hero)`（`CampaignEventDispatcher.cs:729`） | 成年 |
| `OnHeroReachesTeenAge(Hero)`（`CampaignEventDispatcher.cs:739`） | 进入青少年期 |
| `OnHeroGrowsOutOfInfancy(Hero)`（`CampaignEventDispatcher.cs:749`） | 脱离婴幼儿期 |
| `OnChildEducationCompleted(Hero, int)`（`CampaignEventDispatcher.cs:719`） | 教育阶段完成 |
| `OnHeirSelectionRequested(Dictionary<Hero, int>)`（`CampaignEventDispatcher.cs:2459`） | 请求选择继承人 |
| `OnHeirSelectionOver(Hero)`（`CampaignEventDispatcher.cs:2469`） | 继承人选定 |
| `OnNewCompanionAdded(Hero)`（`CampaignEventDispatcher.cs:839`） | 新同伴加入 |
| `OnCompanionRemoved(Hero, RemoveCompanionAction.RemoveCompanionDetail)`（`CampaignEventDispatcher.cs:1559`） | 同伴被移除 |
| `OnCheckForIssue(Hero)`（`CampaignEventDispatcher.cs:1809`） | 检查是否有可触发的问题 |
| `OnPlayerStartTalkFromMenu(Hero)`（`CampaignEventDispatcher.cs:1669`） | 玩家从菜单发起对话 |
| `OnItemsRefined(Hero, Crafting.RefiningFormula)`（`CampaignEventDispatcher.cs:2439`） | 执行精炼 |
| `OnEquipmentSmeltedByHero(Hero, EquipmentElement)`（`CampaignEventDispatcher.cs:2219`） | 熔化装备 |
| `OnHeroRelationChanged(Hero, Hero, int, bool, ChangeRelationAction.ChangeRelationDetail, Hero, Hero)`（`CampaignEventDispatcher.cs:139`） | 关系值变化 |
| `OnPlayerCharacterChanged(Hero, Hero, MobileParty, bool)`（`CampaignEventDispatcher.cs:1709`） | 玩家操控的领主改变 |
| `OnBeforePlayerCharacterChanged(Hero, Hero)`（`CampaignEventDispatcher.cs:1699`） | 玩家角色即将更换 |

### 菜单、对话与任务

| 成员 | 用途 |
| --- | --- |
| `OnGameMenuOpened(MenuCallbackArgs)`（`CampaignEventDispatcher.cs:859`） | 游戏菜单打开 |
| `BeforeGameMenuOpened(MenuCallbackArgs)`（`CampaignEventDispatcher.cs:1519`） | 菜单打开之前 |
| `AfterGameMenuInitialized(MenuCallbackArgs)`（`CampaignEventDispatcher.cs:1529`） | 菜单选项初始化完成 |
| `OnGameMenuOptionSelected(GameMenu, GameMenuOption)`（`CampaignEventDispatcher.cs:1679`） | 菜单项被选中 |
| `OnPlayerBoardGameOver(Hero, BoardGameHelper.BoardGameState)`（`CampaignEventDispatcher.cs:999`） | 棋盘游戏结束 |
| `OnPlayerBodyPropertiesChanged()`（`CampaignEventDispatcher.cs:79`） | 玩家体型属性改变 |
| `OnPlayerTraitChanged(TraitObject, int)`（`CampaignEventDispatcher.cs:409`） | 玩家特质变化 |
| `BeforeMissionOpened()`（`CampaignEventDispatcher.cs:1109`） | 任务打开前 |
| `OnMissionStarted(IMission)`（`CampaignEventDispatcher.cs:989`） | 任务开始 |
| `OnAfterMissionStarted(IMission)`（`CampaignEventDispatcher.cs:849`） | 任务启动完成之后 |
| `OnMissionEnded(IMission)`（`CampaignEventDispatcher.cs:1339`） | 任务结束 |
| `OnAgentJoinedConversation(IAgent)`（`CampaignEventDispatcher.cs:949`） | 单位加入对话 |
| `OnConversationEnded(IEnumerable<CharacterObject>)`（`CampaignEventDispatcher.cs:939`） | 对话结束 |
| `OnPersuasionProgressCommitted(Tuple<PersuasionOptionArgs, PersuasionOptionResult>)`（`CampaignEventDispatcher.cs:1979`） | 说服进度结算 |
| `OnPlayerAgentSpawned()`（`CampaignEventDispatcher.cs:1619`） | 玩家 Agent 生成完毕 |
| `OnBeforePlayerAgentSpawn(ref MatrixFrame)`（`CampaignEventDispatcher.cs:1609`） | 玩家 Agent 出生前 |
| `OnQuestStarted(QuestBase)`（`CampaignEventDispatcher.cs:1999`） | 任务开始 |
| `OnQuestCompleted(QuestBase, QuestBase.QuestCompleteDetails)`（`CampaignEventDispatcher.cs:1989`） | 任务完成 |
| `OnQuestLogAdded(QuestBase, bool)`（`CampaignEventDispatcher.cs:209`） | 任务写入日志 |
| `OnNewIssueCreated(IssueBase)`（`CampaignEventDispatcher.cs:2039`） | 新问题出现 |
| `OnIssueUpdated(IssueBase, IssueBase.IssueUpdateDetails, Hero)`（`CampaignEventDispatcher.cs:1819`） | 问题状态更新 |
| `OnIssueOwnerChanged(IssueBase, Hero)`（`CampaignEventDispatcher.cs:2049`） | 问题负责人变更 |
| `OnIssueLogAdded(IssueBase, bool)`（`CampaignEventDispatcher.cs:219`） | 问题写入日志 |
| `OnIncidentResolved(Incident)`（`CampaignEventDispatcher.cs:2549`） | 偶发事件结算完毕 |

### 物品、交易与工坊

| 成员 | 用途 |
| --- | --- |
| `OnItemsLooted(MobileParty, ItemRoster)`（`CampaignEventDispatcher.cs:639`） | 战利品被装入部队 |
| `OnCollectLootItems(PartyBase, ItemRoster)`（`CampaignEventDispatcher.cs:2339`） | 战利品被收集 |
| `OnLootDistributedToParty(PartyBase, PartyBase, ItemRoster)`（`CampaignEventDispatcher.cs:149`） | 战利品分给部队 |
| `OnItemSold(PartyBase, PartyBase, ItemRosterElement, int, Settlement)`（`CampaignEventDispatcher.cs:1859`） | 成交一笔买卖 |
| `OnHeroOrPartyTradedGold(ValueTuple<Hero, PartyBase>, ValueTuple<Hero, PartyBase>, ValueTuple<int, string>, bool)`（`CampaignEventDispatcher.cs:309`） | 双方完成黄金交易 |
| `OnHeroOrPartyGaveItem(ValueTuple<Hero, PartyBase>, ValueTuple<Hero, PartyBase>, ItemRosterElement, bool)`（`CampaignEventDispatcher.cs:319`） | 赠送物品 |
| `OnPlayerInventoryExchange(List<ValueTuple<ItemRosterElement, int>>, List<ValueTuple<ItemRosterElement, int>>, bool)`（`CampaignEventDispatcher.cs:1969`） | 玩家背包交易结算 |
| `OnItemsDiscardedByPlayer(ItemRoster)`（`CampaignEventDispatcher.cs:1959`） | 玩家丢弃物品 |
| `OnPlayerEarnedGoldFromAsset(DefaultClanFinanceModel.AssetIncomeType, int)`（`CampaignEventDispatcher.cs:2379`） | 家族资产收益 |
| `OnPlayerTradeProfit(int)`（`CampaignEventDispatcher.cs:2309`） | 玩家贸易利润结算 |
| `OnTradeRumorIsTaken(List<TradeRumor>, Settlement)`（`CampaignEventDispatcher.cs:1799`） | 贸易传闻被获取 |
| `OnPlayerStartRecruitment(CharacterObject)`（`CampaignEventDispatcher.cs:1689`） | 玩家开始招募 |
| `OnUnitRecruited(CharacterObject, int)`（`CampaignEventDispatcher.cs:1319`） | 招募完成 |
| `OnTroopRecruited(Hero, Settlement, Hero, CharacterObject, int)`（`CampaignEventDispatcher.cs:1839`） | 领主视角的招募 |
| `OnTroopGivenToSettlement(Hero, Settlement, TroopRoster)`（`CampaignEventDispatcher.cs:1849`） | 向聚落赠送士兵 |
| `OnPlayerUpgradedTroops(CharacterObject, CharacterObject, int)`（`CampaignEventDispatcher.cs:1629`） | 玩家升级兵种 |
| `OnItemProduced(ItemObject, Settlement, int)`（`CampaignEventDispatcher.cs:2009`） | 工坊产出物品 |
| `OnItemConsumed(ItemObject, Settlement, int)`（`CampaignEventDispatcher.cs:2019`） | 工坊消耗物品 |
| `OnNewItemCrafted(ItemObject, ItemModifier, bool)`（`CampaignEventDispatcher.cs:2159`） | 锻造完成 |
| `CraftingPartUnlocked(CraftingPiece)`（`CampaignEventDispatcher.cs:2319`） | 解锁锻造部件 |
| `OnFigureheadUnlocked(Figurehead)`（`CampaignEventDispatcher.cs:2529`） | 解锁船首像 |
| `OnWorkshopInitialized(Workshop)`（`CampaignEventDispatcher.cs:2179`） | 工坊初始化 |
| `OnWorkshopTypeChanged(Workshop)`（`CampaignEventDispatcher.cs:2189`） | 工坊类型改变 |
| `OnWorkshopOwnerChanged(Workshop, Hero)`（`CampaignEventDispatcher.cs:2169`） | 工坊易主 |
| `OnCraftingOrderCompleted(Town, CraftingOrder, ItemObject, Hero)`（`CampaignEventDispatcher.cs:2429`） | 锻造订单完成 |
| `OnCharacterPortraitPopUpOpened(CharacterObject)`（`CampaignEventDispatcher.cs:1649`） | 角色立绘弹窗打开 |
| `OnCharacterPortraitPopUpClosed()`（`CampaignEventDispatcher.cs:1659`） | 立绘弹窗关闭 |

### 囚犯、船只与据点

| 成员 | 用途 |
| --- | --- |
| `OnPrisonersChangeInSettlement(Settlement, FlattenedTroopRoster, Hero, bool)`（`CampaignEventDispatcher.cs:979`） | 地牢囚犯变化 |
| `OnPrisonerTaken(FlattenedTroopRoster)`（`CampaignEventDispatcher.cs:2229`） | 俘获囚犯 |
| `OnPrisonerReleased(FlattenedTroopRoster)`（`CampaignEventDispatcher.cs:2279`） | 释放囚犯 |
| `OnPrisonerSold(PartyBase, PartyBase, TroopRoster)`（`CampaignEventDispatcher.cs:1879`） | 囚犯被买卖 |
| `OnPrisonerDonatedToSettlement(MobileParty, FlattenedTroopRoster, Settlement)`（`CampaignEventDispatcher.cs:2209`） | 囚犯被献给定居点 |
| `OnMainPartyPrisonerRecruited(FlattenedTroopRoster)`（`CampaignEventDispatcher.cs:2199`） | 主队把囚犯转成士兵 |
| `OnShipCreated(Ship, Settlement)`（`CampaignEventDispatcher.cs:2835`） | 船只在港口建造 |
| `OnShipRepaired(Ship, Settlement)`（`CampaignEventDispatcher.cs:2519`） | 船只在港口修好 |
| `OnShipOwnerChanged(Ship, PartyBase, ChangeShipOwnerAction.ShipOwnerChangeDetail)`（`CampaignEventDispatcher.cs:2509`） | 船只易主 |
| `OnShipDestroyed(PartyBase, Ship, DestroyShipAction.ShipDestroyDetail)`（`CampaignEventDispatcher.cs:2489`） | 船只被击沉 |
| `OnHideoutSpotted(PartyBase, PartyBase)`（`CampaignEventDispatcher.cs:1929`） | 发现敌方据点 |
| `OnHideoutDeactivated(Settlement)`（`CampaignEventDispatcher.cs:1939`） | 据点被停用 |
| `OnHomeHideoutChanged(BanditPartyComponent, Hideout)`（`CampaignEventDispatcher.cs:99`） | 匪徒据点变更 |
| `OnBanditPartyRecruited(MobileParty)`（`CampaignEventDispatcher.cs:329`） | 匪徒被招安 |
| `OnCaravanTransactionCompleted(MobileParty, Town, List<ValueTuple<EquipmentElement, int>>)`（`CampaignEventDispatcher.cs:1869`） | 商队交易完成 |
| `OnMapMarkerCreated(MapMarker)`（`CampaignEventDispatcher.cs:2609`） | 地图标记创建 |
| `OnMapMarkerRemoved(MapMarker)`（`CampaignEventDispatcher.cs:2619`） | 地图标记移除 |
| `OnMapInteractableCreated(IInteractablePoint)`（`CampaignEventDispatcher.cs:669`） | 地图交互点创建 |
| `OnMapInteractableDestroyed(IInteractablePoint)`（`CampaignEventDispatcher.cs:679`） | 地图交互点销毁 |
| `TrackDetected(Track)`（`CampaignEventDispatcher.cs:1569`） | 发现踪迹 |
| `TrackLost(Track)`（`CampaignEventDispatcher.cs:1579`） | 跟丢踪迹 |
| `LocationCharactersAreReadyToSpawn(Dictionary<string, int>)`（`CampaignEventDispatcher.cs:1589`） | 场景 NPC 待生成槽位表已算好 |
| `LocationCharactersSimulated()`（`CampaignEventDispatcher.cs:1599`） | 场景 NPC 行为模拟完成一轮 |

### 否决点与其他

| 成员 | 用途 |
| --- | --- |
| `CanHeroDie(Hero, KillCharacterAction.KillCharacterActionDetail, ref bool)`（`CampaignEventDispatcher.cs:2745`） | 领主能否死亡（否决点） |
| `CanHeroBecomePrisoner(Hero, ref bool)`（`CampaignEventDispatcher.cs:2759`） | 领主能否被俘 |
| `CanHeroMarry(Hero, ref bool)`（`CampaignEventDispatcher.cs:2703`） | 领主能否结婚 |
| `CanHeroLeadParty(Hero, ref bool)`（`CampaignEventDispatcher.cs:2689`） | 领主能否率队 |
| `CanHeroEquipmentBeChanged(Hero, ref bool)`（`CampaignEventDispatcher.cs:2717`） | 能否更换领主装备 |
| `CanBeGovernorOrHavePartyRole(Hero, ref bool)`（`CampaignEventDispatcher.cs:2731`） | 能否担任总督或部队职务 |
| `CanPlayerMeetWithHeroAfterConversation(Hero, ref bool)`（`CampaignEventDispatcher.cs:2773`） | 对话后能否再见该领主 |
| `CanMoveToSettlement(Hero, ref bool)`（`CampaignEventDispatcher.cs:2787`） | 领主能否进驻定居点 |
| `CanHaveCampaignIssues(Hero, ref bool)`（`CampaignEventDispatcher.cs:2801`） | 领主能否持有战役问题 |
| `IsSettlementBusy(Settlement, object, ref int)`（`CampaignEventDispatcher.cs:2815`） | 定居点是否繁忙（`ref int` 是优先级） |
| `OnBarterAccepted(Hero, Hero, List<Barterable>)`（`CampaignEventDispatcher.cs:169`） | 交易被接受 |
| `OnBarterCanceled(Hero, Hero, List<Barterable>)`（`CampaignEventDispatcher.cs:179`） | 交易被取消 |
| `OnBarterablesRequested(BarterData)`（`CampaignEventDispatcher.cs:1539`） | 请求可交易物列表 |
| `CollectAvailableTutorials(ref List<CampaignTutorial>)`（`CampaignEventDispatcher.cs:1499`） | 收集可用教学点 |
| `OnTutorialCompleted(string)`（`CampaignEventDispatcher.cs:1509`） | 教学点完成 |
| `CollectMetadataEntries(List<KeyValuePair<string, string>>)`（`CampaignEventDispatcher.cs:2269`） | 收集元数据条目 |

## 真实示例

```csharp
using System;
using TaleWorlds.CampaignSystem;

public static class DispatcherExample
{
    // 游戏代码通过 Dispatcher 派发事件（mod 一般不直接调，这里展示机制）
    public static void FireArmyCreated(Army army)
    {
        CampaignEventDispatcher.Instance.OnArmyCreated(army); // CampaignEventDispatcher.cs:339
    }

    // mod 的典型用法：订阅静态事件（Dispatcher 扇出到 CampaignEvents 后触发）
    public static void Subscribe()
    {
        CampaignEvents.ArmyCreated += OnArmyCreated;
    }

    private static void OnArmyCreated(Army army)
    {
        // 处理军队创建
    }

    // 退订：通过 Dispatcher 的 RemoveListeners 批量清理某对象注册的所有监听
    public static void UnsubscribeAll(object owner)
    {
        CampaignEventDispatcher.Instance.RemoveListeners(owner); // CampaignEventDispatcher.cs:69
    }
}
```

## 参见

- [`../CampaignEvents`](../CampaignEvents) —— 发布侧：`CampaignEvents` 的静态事件是 mod 订阅的目标，由本执行器扇出触发。
- [`../Kingdom`](../Kingdom) —— 王国势力：`Kingdom.CreateArmy` 通过 `CampaignEventDispatcher.Instance.OnArmyCreated` 派发军队创建事件。
- [`../MapEvent`](../MapEvent) —— 地图遭遇战：`MapEvent.Initialize` 通过 `CampaignEventDispatcher.Instance.OnMapEventStarted` 派发战斗开始事件。
- [`../_index`](../_index) —— `campaign` 桶全类型索引。

## 导航

- 同桶：[`../CampaignEvents`](../CampaignEvents) · [`../Kingdom`](../Kingdom) · [`../MapEvent`](../MapEvent)
- 父索引：[`../_index`](../_index)
