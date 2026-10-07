---
title: "CampaignEvents"
description: "战役层事件的唯一广播中枢：276 个静态属性把 IMbEvent 暴露给模组，配合 AddNonSerializedListener / ClearListeners 完成订阅与解除。它继承 CampaignEventReceiver，是 Behavior 之外唯一的官方状态通知来源。"
---
# CampaignEvents

**命名空间：** `TaleWorlds.CampaignSystem`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class CampaignEvents : CampaignEventReceiver`
**基类：** `TaleWorlds.CampaignSystem.CampaignEventReceiver`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/CampaignEvents.cs`（声明见第 39 行）

## 概述

`CampaignEvents` 是战役地图层的**唯一事件总线**。它本身不做业务判断，只把引擎各处「世界发生了变化」的瞬间翻译成可订阅的通知。整个类有 276 个公开静态属性，每个返回 `IMbEvent<...>` 或 `ReferenceIMBEvent<...>`；类内另有 275 个 `override` 方法，它们是 `CampaignEventReceiver` 的实现，负责在引擎调用对应 `OnXxx` 时 `Invoke` 掉对应的 `IMbEvent`。

对 modder 而言最重要的是**访问形态**：`CampaignEvents.XxxEvent` 拿到的不是 C# 的 `event` 委托，而是 `IMbEvent` 接口。订阅 API 是 `AddNonSerializedListener(object owner, Action<...>)`，解除是 `ClearListeners(object o)`（按 owner 批量清）。1.4.7 **没有** `AddListener` / `RemoveListener`——从旧文档抄来的 `+=` 写法直接编译失败。

覆盖范围极广：英雄成长与关系、氏族与王国的建立 / 倒戈 / 灭亡、部队与军队、任务与议题、城镇与村庄、战斗与攻城、物品与制作、交易与俘虏、时间推进（`TickEvent` → `DailyTickEvent`）、存档、角色创建、对话、以及一组可直接否决流程的 `ReferenceIMBEvent`（`CanHeroDieEvent`、`CanHeroLeadPartyEvent` 等）。任何「世界状态变了」的需求都应该先来这里找事件，而不是轮询。

## 心智模型

把 `CampaignEvents` 当成**战役层唯一的事实变更通知源**。正确姿势五条：

1. **订阅，不轮询。** 想在玩家进入城镇时做事，订阅 `CampaignEvents.BeforeSettlementEnteredEvent` / `SettlementEntered` / `AfterSettlementEntered`（三者都是 `IMbEvent<MobileParty, Settlement, Hero>`），不要在 `HourlyTickEvent` 里比对 `HomeSettlement` 的前后值——后者既慢又会在跨定居点的 tick 里漏掉。
2. **owner 传 `this`。** `AddNonSerializedListener(this, Handler)` 里的 `owner` 是清理句柄，`ClearListeners(obj)` 按 owner 批量清。传稳定的 `this`（Behavior 或 SubModule）意味着对象销毁时引擎能一次摘掉全部监听。
3. **区分「前置钩子」与「事后通知」。** 带 `Before` 前缀的（`BeforeSettlementEnteredEvent`、`BeforeMissionOpenedEvent`、`OnBeforeSaveEvent`、`OnPartyDisbandStartedEvent`、`OnCheckForIssueEvent`）允许你干预；其余是事后通知。分不清这两类，mod 的「想阻止」就会失败。
4. **`ReferenceIMBEvent` 是可写的。** `CanHeroDieEvent`、`CanHeroLeadPartyEvent`、`CanHeroMarryEvent`、`CanHeroBecomePrisonerEvent`、`CanMoveToSettlementEvent`、`CanHaveCampaignIssuesEvent`、`IsSettlementBusyEvent` 的委托参数是**可变引用**，改写它就等于改写引擎的判定结果。这类事件是 mod 加限制条件的正确入口。
5. **回调里只打标记，重活延后到 tick。** 事件在引擎改动世界的过程中触发，此刻读「刚被改动的对象」可能拿到中间态。

命名上有个坑：很多事件名带 `Event` 后缀（`OnMissionStartedEvent`），有些不带（`AfterMissionStarted`、`SettlementEntered`）；英雄升级是双写 L 的 `HeroLevelledUp`。用 IDE 的 `CampaignEvents.` 补全比翻文档可靠。

## 何时使用 / 何时不要使用

- **使用**：响应任何战役状态变化（英雄成长、部队易主、城镇易主、任务触发、战斗开始 / 结束、存档前后）。
- **使用**：驱动周期逻辑——`TickEvent`（每逻辑帧）、`QuarterHourlyTickEvent` / `HourlyTickEvent` / `DailyTickEvent` / `WeeklyTickEvent`，以及逐对象的 `HourlyTickPartyEvent`、`DailyTickSettlementEvent`、`DailyTickClanEvent` 等。
- **使用**：拿注册台——`OnSessionLaunchedEvent`、`OnAfterSessionLaunchedEvent`、`OnNewGameCreatedEvent`、`OnGameEarlyLoadedEvent`、`OnGameLoadedEvent` 的委托参数都是 `CampaignGameStarter`，可在其中注入 Behavior 与菜单。
- **不要**：不要用 `+=` / `-=` 订阅——`IMbEvent` 不是委托，`+=` 编译不过。
- **不要**：不要在事件回调里做长耗时或跨层重活（例如直接读 `Mission.Current`）。战役事件与任务事件的时序不保证。
- **不要**：不要把 `IMbEvent` 句柄存进静态字段跨战役复用——`CampaignEvents` 实例随战役创建销毁。

## 成员说明

### 一、订阅与解除 API

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static IMbEvent<...> XxxEvent { get; }`（共 276 个静态属性） | 取得事件句柄。属性内部转发到私有 `Instance` 静态属性，而它读的是 `Campaign.Current.CampaignEvents`——**战役不存在时会抛 NRE**。 |
| `IMbEvent<T1..T8>.AddNonSerializedListener(object owner, Action<...> action)` | 注册监听。`owner` 用于后续批量清理，`action` 的参数个数必须与泛型实参个数一致。 |
| `ReferenceIMBEvent<T1..T3>.AddNonSerializedListener(object owner, ReferenceAction<...> action)` | 引用语义版本：委托参数是可变引用，回调里的修改直接回写事件源。 |
| `IMbEventBase.ClearListeners(object o)` | 按 owner 清掉该事件上的监听。 |
| `override void RemoveListeners(object obj)` | 清掉该对象注册在**全部**事件上的监听。引擎在战役销毁时调用它。 |

### 二、时间推进

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `TickEvent`（`IMbEvent<float>`） | 每逻辑帧触发，参数是 `dt`。**极高频**，只放极轻量逻辑。 |
| `QuarterHourlyTickEvent` / `HourlyTickEvent`（`IMbEvent`） | 15 分钟 / 1 小时推进。多数 mod 的平衡修正挂这里。 |
| `HourlyTickPartyEvent`（`MobileParty`）/ `HourlyTickSettlementEvent`（`Settlement`）/ `HourlyTickClanEvent`（`Clan`） | 逐对象的小时 tick，省去自己遍历全表。 |
| `DailyTickEvent`（`IMbEvent`） | 每日推进：经济、饥饿、伤病、声望衰减的标准时机。 |
| `DailyTickPartyEvent` / `DailyTickTownEvent` / `DailyTickSettlementEvent` / `DailyTickHeroEvent` / `DailyTickClanEvent` | 逐对象的每日 tick。 |
| `WeeklyTickEvent` | 每周推进：市场、征税等跨周结算。 |
| `OnQuarterDailyPartyTick`（`IMbEvent<MobileParty>`） | 季度 + 逐队伍的组合 tick。 |
| `TickPartialHourlyAiEvent`（`IMbEvent<MobileParty>`） | 分片 AI tick，与 AI 决策同频。 |
| `MissionTickEvent`（`IMbEvent<float>`） | 任务层 tick 的镜像通知，参数是 dt。跨层逻辑要小心它与 `MissionBehavior` 回调的先后。 |

### 三、存档与生命周期

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `OnBeforeSaveEvent` / `OnSaveStartedEvent`（`IMbEvent`） | 存档前钩子。**清理 EntityComponent、落盘自定义缓存的最后时机**。 |
| `OnSaveOverEvent`（`IMbEvent<bool, string>`） | 存档结束，第一个参数是成功标志。 |
| `CollectMetadataEntriesEvent`（`IMbEvent<List<KeyValuePair<string, string>>>`） | 往存档元数据里塞自定义条目（版本号、mod 列表等）。兼容性标记的标准做法。 |
| `OnGameEarlyLoadedEvent` / `OnGameLoadedEvent`（`IMbEvent<CampaignGameStarter>`） | 读档早期 / 读档完成，均带注册台参数。 |
| `OnGameLoadFinishedEvent`（`IMbEvent`） | 读档全部结束，**可以安全使用世界数据**。 |
| `OnSessionLaunchedEvent` / `OnAfterSessionLaunchedEvent`（`IMbEvent<CampaignGameStarter>`） | 会话启动 / 启动完成。Behavior 做重初始化的正确位置。 |
| `OnNewGameCreatedEvent` / `OnNewGameCreatedPartialFollowUpEndEvent`（`IMbEvent<CampaignGameStarter>`） | 新战役创建 / 后续阶段完成。 |
| `OnGameOverEvent`（`IMbEvent`） | 战役失败。 |
| `OnConfigChangedEvent`（`IMbEvent`） | 配置变更。 |
| `OnCharacterCreationInitializedEvent`（`IMbEvent<CharacterCreationManager>`） | 角色创建管理器就绪；配合 `OnCharacterCreationIsOverEvent` 可以跳过捏脸。 |
| `OnTutorialCompletedEvent`（`IMbEvent<string>`）/ `CollectAvailableTutorialsEvent`（`IMbEvent<List<CampaignTutorial>>`） | 教程完成 / 可用教程收集。 |

### 四、英雄

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `HeroLevelledUp`（`IMbEvent<Hero, bool>`） | 英雄升级，第二参数是「是否自然升级」。注意是双写 L。 |
| `HeroGainedSkill`（`IMbEvent<Hero, SkillObject, int, bool>`） | 技能获得，参数为英雄、技能、变化量、是否通知。 |
| `HeroWounded`（`IMbEvent<Hero>`） | 负伤。 |
| `HeroComesOfAgeEvent` / `HeroGrowsOutOfInfancyEvent` / `HeroReachesTeenAgeEvent`（`IMbEvent<Hero>`） | 成长阶段。 |
| `OnHeroActivatedEvent`（`Hero, Hero.CharacterStates`）/ `HeroOccupationChangedEvent`（`Hero, Occupation`） | 角色激活与职业变更。 |
| `OnPlayerMetHeroEvent` / `OnPlayerLearnsAboutHeroEvent`（`IMbEvent<Hero>`） | 首次遇见 / 学会情报。 |
| `OnHeroChangedClanEvent`（`Hero, Clan`） | 英雄换氏族。 |
| `OnHeroUnregisteredEvent`（`IMbEvent<Hero>`） | 英雄被注销（死亡且不再被引用）——**在这里还持有该 Hero 引用是危险的**。 |
| `OnHeroCombatHitEvent`（`CharacterObject, CharacterObject, PartyBase, WeaponComponentData, bool, int`） | 地图层近战命中记录。 |
| `OnHeroTeleportationRequestedEvent`（`Hero, Settlement, MobileParty, TeleportHeroAction.TeleportationDetail`） | 传送请求，前置钩子。 |
| `OnPlayerPartyKnockedOrKilledTroopEvent`（`IMbEvent<CharacterObject>`） | 玩家部队减员。 |
| `OnChildConceivedEvent`（`Hero`）/ `OnGivenBirthEvent`（`Hero, List<Hero>, int`）/ `OnHeirSelectionRequestedEvent`（`Dictionary<Hero, int>`）/ `OnHeirSelectionOverEvent`（`Hero`） | 生育与继承。 |
| `OnClanLeaderChangedEvent`（`Hero, Hero`） | 氏族领袖更替。 |
| `OnHeroSharedFoodWithAnotherHeroEvent`（`Hero, Hero, float`） | 分享食物（好感度来源）。 |

### 五、氏族、王国与外交

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `OnClanCreatedEvent`（`Clan, bool`）/ `OnClanDestroyedEvent`（`Clan`） | 氏族建立 / 灭亡。 |
| `OnClanChangedKingdomEvent`（`Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool`） | 氏族换王国，含旧 / 新王国与动作详情。 |
| `OnClanDefectedEvent`（`Clan, Kingdom, Kingdom`） | 叛离。 |
| `OnClanInfluenceChangedEvent`（`Clan, float`）/ `ClanTierIncrease`（`Clan, bool`） | 影响力与氏族等级。 |
| `KingdomCreatedEvent` / `KingdomDestroyedEvent`（`IMbEvent<Kingdom>`） | 王国建立 / 灭亡。 |
| `RulingClanChanged`（`Kingdom, Clan`） | 统治氏族更替。 |
| `WarDeclared`（`IFaction, IFaction, DeclareWarAction.DeclareWarDetail`） | 宣战，含双方与动作详情。 |
| `OnAllianceStartedEvent` / `OnAllianceEndedEvent`（`Kingdom, Kingdom`） | 联盟建立 / 解除。 |
| `OnCallToWarAgreementStartedEvent` / `OnCallToWarAgreementEndedEvent`（`Kingdom, Kingdom, Kingdom`） | 盟友参战协议的建立 / 结束。 |
| `OnPeaceOfferResolvedEvent`（`IFaction`） | 和谈结果。 |
| `OnVassalOrMercenaryServiceOfferedToPlayerEvent` / `OnVassalOrMercenaryServiceOfferCanceledEvent`（`Kingdom`） | 效忠 / 雇佣邀请与取消。 |
| `OnMercenaryServiceStartedEvent` / `OnMercenaryServiceEndedEvent`（`Clan, ...ServiceDetails`） | 雇佣服务开始 / 结束。 |
| `OnClanEarnedGoldFromTributeEvent`（`Clan, IFaction`） | 贡金收入。 |
| `OnMapEventContinuityNeedsUpdateEvent`（`IMbEvent<IFaction>`） | 遭遇战连续性需要更新，引擎请求重建遭遇关系。 |

### 六、定居点与城镇

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `BeforeSettlementEnteredEvent` / `SettlementEntered` / `AfterSettlementEntered`（`IMbEvent<MobileParty, Settlement, Hero>`） | 进入定居点的前 / 中 / 后三阶段。**做「进城触发」逻辑的首选**。 |
| `OnSettlementLeftEvent`（`IMbEvent<MobileParty, Settlement>`） | 离开定居点。 |
| `OnSettlementOwnerChangedEvent`（`Settlement, bool, Hero, Hero, Hero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail`） | 定居点易主，含旧主 / 新主与动作详情。 |
| `VillageBecomeNormal` / `VillageBeingRaided` / `VillageLooted`（`IMbEvent<Village>`） | 村庄状态。 |
| `IMbEvent<Village, Village>` | 村庄之间的人口 / 忠诚度变化。 |
| `TownRebelliosStateChanged`（`Town, bool`）/ `RebellionFinished`（`Settlement, Clan`）/ `RebelliousClanDisbandedAtSettlement`（`Settlement, Clan`） | 城镇叛乱流程。 |
| `IMbEvent<Town, Building>` | 建筑状态。 |
| `IMbEvent<Town, Hero>` | 城镇与驻军英雄相关。 |
| `PrisonersChangeInSettlement`（`Settlement, FlattenedTroopRoster, Hero, bool`） | 城镇俘虏变化。 |
| `OnHideoutSpottedEvent`（`PartyBase, PartyBase`）/ `OnHideoutDeactivatedEvent`（`Settlement`）/ `OnHomeHideoutChangedEvent`（`BanditPartyComponent, Hideout`） | 藏身处。 |
| `IMbEvent<Settlement, FlattenedTroopRoster>` | 定居点兵员变化。 |

### 七、部队、军队与遭遇战

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `MobilePartyCreated`（`MobileParty`）/ `OnPartyRemovedEvent` / `OnPartySizeChangedEvent`（`PartyBase`） | 部队生命周期。 |
| `OnPartyAddedToMapEventEvent`（`PartyBase`）/ `NearbyPartyAddedToPlayerMapEvent`（`MobileParty`）/ `PartyVisibilityChangedEvent`（`PartyBase`） | 部队进入地图 / 进入玩家视野。**做接近提示的标准入口**。 |
| `OnPartyLeaderChangedEvent`（`MobileParty, Hero`）/ `OnPartyLeaderChangeOfferCanceledEvent`（`MobileParty`） | 部队领袖。 |
| `OnPartyDisbandStartedEvent`（`MobileParty`）/ `OnPartyDisbandCanceledEvent`（`MobileParty`）/ `OnPartyDisbandedEvent`（`MobileParty, Settlement`） | 解散流程的**可取消前置钩子** + 事后通知。 |
| `ArmyCreated`（`Army`）/ `OnPartyJoinedArmyEvent`（`MobileParty`）/ `OnPartyLeftArmyEvent`（`MobileParty, Army`）/ `PartyRemovedFromArmyEvent`（`MobileParty`）/ `OnPlayerArmyLeaderChangedBehaviorEvent`（`IMbEvent`） | 军队组建与解散。 |
| `BanditPartyRecruited`（`MobileParty`） | 匪徒被招募。 |
| `PartyAttachedAnotherParty`（`MobileParty`） | 部队并入另一支部队。 |
| `BattleStarted`（`PartyBase, PartyBase, object, bool`）/ `MapEventEnded`（`MapEvent`）/ `OnPlayerBattleEndEvent`（`MapEvent`）/ `PlayerDesertedBattleEvent`（`int`） | 地图层遭遇战。 |
| `OnMobilePartyNavigationStateChangedEvent` / `OnMobilePartyRaftStateChangedEvent`（`MobileParty`） | 导航与筏状态。 |
| `OnTroopsDesertedEvent`（`MobileParty, TroopRoster`）/ `OnTroopRecruitedEvent`（`Hero, Settlement, Hero, CharacterObject, int`）/ `OnTroopGivenToSettlementEvent`（`Hero, Settlement, TroopRoster`） | 兵员流动。 |
| `PlayerUpgradedTroopsEvent`（`CharacterObject, CharacterObject, int`） | 兵种升级。 |
| `OnUnitRecruitedEvent`（`CharacterObject, int`） | 征募单个单位。 |
| `TrackDetectedEvent` / `TrackLostEvent`（`IMbEvent<Track>`） | 追踪目标发现 / 丢失。 |
| `ItemsLooted`（`MobileParty, ItemRoster`）/ `OnCollectLootsItemsEvent` / `OnLootDistributedToPartyEvent` | 战利品。 |

### 八、战斗与攻城

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `BeforeMissionOpenedEvent`（`IMbEvent`） | 任务打开前，可干预。 |
| `OnMissionStartedEvent` / `AfterMissionStarted`（`IMbEvent<IMission>`） | 任务已开始 / 完全就绪。**要访问战斗对象用后者**。注意后者名字没有 `Event` 后缀。 |
| `OnMissionEndedEvent`（`IMbEvent<IMission>`） | 任务结束。此刻不要再改世界。 |
| `BeforePlayerAgentSpawnEvent`（`ReferenceIMBEvent<MatrixFrame>`）/ `PlayerAgentSpawned`（`IMbEvent`） | 玩家 Agent 生成前（可改 MatrixFrame）/ 生成后。 |
| `LocationCharactersAreReadyToSpawnEvent`（`Dictionary<string, int>`）/ `LocationCharactersSimulatedEvent`（`IMbEvent`） | 战斗地点人物生成。 |
| `OnSiegeEventStartedEvent`（`SiegeEvent`）/ `OnPlayerSiegeStartedEvent`（`IMbEvent`）/ `OnSiegeEventEndedEvent`（`SiegeEvent`） | 攻城事件。 |
| `SiegeCompletedEvent` / `AfterSiegeCompletedEvent`（`Settlement, MobileParty, bool, MapEvent.BattleTypes`） | 攻城结算与结算后。 |
| `OnSiegeAftermathAppliedEvent`（`MobileParty, Settlement, SiegeAftermathAction.SiegeAftermath, Clan, Dictionary<MobileParty, float>`） | 攻城后果结算。 |
| `OnSiegeBombardmentHitEvent` / `OnSiegeBombardmentWallHitEvent` / `OnSiegeEngineDestroyedEvent` / `SiegeEngineBuiltEvent` | 攻城武器。 |
| `OnMobilePartyJoinedToSiegeEventEvent` / `OnMobilePartyLeftSiegeEventEvent`（`MobileParty`） | 部队加入 / 离开攻城。 |
| `OnBlockadeActivatedEvent` / `OnBlockadeDeactivatedEvent`（`SiegeEvent`） | 封锁状态。 |
| `RaidCompletedEvent` / `ForceVolunteersCompletedEvent` / `ForceSuppliesCompletedEvent`（`BattleSideEnum, ...EventComponent`）/ `OnHideoutBattleCompletedEvent` | 战后事件组件完成。 |

### 九、任务、议题与菜单

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `OnQuestStartedEvent`（`QuestBase`）/ `OnQuestCompletedEvent`（`QuestBase, QuestBase.QuestCompleteDetails`） | 任务开始 / 完成。 |
| `OnNewIssueCreatedEvent`（`IssueBase`）/ `OnIssueUpdatedEvent`（`IssueBase, IssueBase.IssueUpdateDetails, Hero`）/ `OnIssueOwnerChangedEvent`（`IssueBase, Hero`） | 议题。 |
| `OnCheckForIssueEvent`（`Hero`） | 议题检查，可干预。 |
| `GameMenuOpened` / `AfterGameMenuInitializedEvent` / `BeforeGameMenuOpenedEvent`（`IMbEvent<MenuCallbackArgs>`） | 菜单三阶段。`BeforeGameMenuOpenedEvent` 返回 false 可取消打开。 |
| `GameMenuOptionSelectedEvent`（`IMbEvent<GameMenu, GameMenuOption>`） | 菜单项被选中。 |
| `PersuasionProgressCommittedEvent`（`Tuple<PersuasionOptionArgs, PersuasionOptionResult>`） | 说服结果提交。 |
| `OnAgentJoinedConversationEvent`（`IAgent`）/ `ConversationEnded`（`IEnumerable<CharacterObject>`） | 对话。 |

### 十、物品、制作、交易与俘虏

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `OnItemSoldEvent`（`PartyBase, PartyBase, ItemRosterElement, int, Settlement`）/ `OnPlayerTradeProfitEvent`（`IMbEvent<int>`）/ `OnTradeRumorIsTakenEvent`（`List<TradeRumor>, Settlement`） | 交易。 |
| `PlayerInventoryExchangeEvent`（含 before / after 物品列表与 bool）/ `OnItemsDiscardedByPlayerEvent`（`ItemRoster`） | 玩家库存操作。 |
| `OnItemProducedEvent` / `OnItemConsumedEvent`（`ItemObject, Settlement, int`） | 工坊产出与消耗。 |
| `OnNewItemCraftedEvent`（`ItemObject, ItemModifier, bool`）/ `OnCraftingOrderCompletedEvent`（`Town, CraftingOrder, ItemObject, Hero`）/ `CraftingPartUnlockedEvent`（`CraftingPiece`） | 制作。 |
| `WorkshopInitializedEvent` / `WorkshopTypeChangedEvent`（`Workshop`）/ `WorkshopOwnerChangedEvent`（`Workshop, Hero`） | 工坊。 |
| `OnItemsRefinedEvent`（`Hero, Crafting.RefiningFormula`）/ `OnEquipmentSmeltedByHeroEvent`（`Hero, EquipmentElement`） | 精炼与熔炼。 |
| `OnPrisonerTakenEvent` / `OnPrisonerReleasedEvent` / `OnMainPartyPrisonerRecruitedEvent`（`FlattenedTroopRoster`）/ `OnPrisonerDonatedToSettlementEvent` / `OnPrisonerSoldEvent`（`PartyBase, PartyBase, TroopRoster`） | 俘虏全流程。 |
| `OnRansomOfferedToPlayerEvent` / `OnRansomOfferCancelledEvent`（`Hero`） | 赎金。 |
| `OnShipCreatedEvent` / `OnShipRepairedEvent`（`Ship, Settlement`）/ `OnShipDestroyedEvent`（`PartyBase, Ship, DestroyShipAction.ShipDestroyDetail`）/ `OnShipOwnerChangedEvent`（`Ship, PartyBase, ...`） | 舰船。 |
| `OnFigureheadUnlockedEvent`（`Figurehead`） | 船头像解锁。 |
| `BarterablesRequested`（`IMbEvent<BarterData>`） | 以物易物请求。 |
| `OnMainPartyStarvingEvent`（`IMbEvent`）/ `OnPartyConsumedFoodEvent`（`MobileParty`） | 饥饿与补给。 |
| `OnCaravanTransactionCompletedEvent`（`MobileParty, Town, List<ValueTuple<EquipmentElement, int>>`） | 商队交易完成。 |

### 十一、否决型钩子（ReferenceIMBEvent）

这组事件的委托参数是可变引用，改写它就等于改写引擎判定。它们是 mod 加限制条件的正确入口。

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `CanHeroLeadPartyEvent`（`Hero, bool`） | 是否允许该英雄带领部队。 |
| `CanHeroMarryEvent`（`Hero, bool`） | 是否允许结婚。 |
| `CanHeroEquipmentBeChangedEvent`（`Hero, bool`） | 是否允许换装。 |
| `CanBeGovernorOrHavePartyRoleEvent`（`Hero, bool`） | 是否允许担任总督 / 部队角色。 |
| `CanHeroDieEvent`（`Hero, KillCharacterAction.KillCharacterActionDetail, bool`） | 是否允许死亡。**无敌英雄 mod 的标准入口**。 |
| `CanPlayerMeetWithHeroAfterConversationEvent`（`Hero, bool`） | 对话后是否可继续会面。 |
| `CanHeroBecomePrisonerEvent`（`Hero, bool`） | 是否可被俘。 |
| `CanMoveToSettlementEvent`（`Hero, bool`） | 是否可进入定居点。 |
| `CanHaveCampaignIssuesEvent`（`Hero, bool`） | 是否可参与议题。 |
| `IsSettlementBusyEvent`（`Settlement, object, int`） | 定居点是否处于忙碌状态。 |
| `BeforePlayerAgentSpawnEvent`（`MatrixFrame`） | 玩家 Agent 生成的初始位姿，可改写。 |

### 十二、比赛、UI 与其他

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `TournamentStarted` / `TournamentFinished` / `TournamentCancelled` / `PlayerStartedTournamentMatch` / `PlayerEliminatedFromTournament` / `OnPlayerJoinedTournamentEvent` / `MercenaryTroopChangedInTown` / `MercenaryNumberChangedInTown` | 比赛全流程。 |
| `CharacterPortraitPopUpOpenedEvent` / `CharacterPortraitPopUpClosedEvent` / `PlayerStartTalkFromMenu` / `PlayerStartRecruitmentEvent` | UI 流程。 |
| `MapInteractableCreated` / `MapInteractableDestroyed`（`IInteractablePoint`）/ `OnMapMarkerCreatedEvent` / `OnMapMarkerRemovedEvent`（`MapMarker`） | 地图交互点与标记。 |
| `AlleyOwnerChanged` / `AlleyOccupiedByPlayer` / `AlleyClearedByPlayer` | 街区玩法。 |
| `OnPlayerEarnedGoldFromAssetEvent`（`DefaultClanFinanceModel.AssetIncomeType, int`） | 资产收入。 |
| `OnPlayerBodyPropertiesChangedEvent`（`IMbEvent`） | 玩家外观变化（换装、外观 mod）。 |
| `OnBeforePlayerCharacterChangedEvent`（`Hero, Hero`）/ `OnPlayerCharacterChangedEvent`（`Hero, Hero, MobileParty, bool`） | 换主角流程的前置与事后。 |
| `OnIncidentResolvedEvent`（`Incident`）/ `ArmyOverlaySetDirtyEvent` | 事件组件与 UI 脏标记。 |

## 示例

### 示例 1：订阅与按 owner 批量解除

1.4.7 的订阅 API 是 `AddNonSerializedListener`，不是 `+=`。

```csharp
using TaleWorlds.CampaignSystem;

public class MyBehavior : CampaignBehaviorBase
{
    public MyBehavior() : base("MyMod.MyBehavior") { }

    public override void RegisterEvents()
    {
        // owner 传 this：对象销毁时可一次性摘掉全部监听
        CampaignEvents.SettlementEntered.AddNonSerializedListener(this, OnSettlementEntered);
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore) { }

    private void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
    {
        // 事件已经发生：这里读到的世界状态可能还在中间态
    }

    private void OnDailyTick()
    {
        // 重活放这里，而不是 TickEvent
    }
}
```

### 示例 2：用 ReferenceIMBEvent 实现「主角免疫死亡」

这是否决型钩子的正确用法：委托参数是引用，改写 `bool` 即可改变引擎判定。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public class ImmortalBehavior : CampaignBehaviorBase
{
    public ImmortalBehavior() : base("MyMod.Immortal") { }

    public override void RegisterEvents()
    {
        // 引擎会先把 true 写进引用，mod 在回调里按需改回 false
        CampaignEvents.CanHeroDieEvent.AddNonSerializedListener(this, OnHeroDying);
    }

    public override void SyncData(IDataStore dataStore) { }

    private void OnHeroDying(Hero hero, KillCharacterAction.KillCharacterActionDetail detail, ref bool canDie)
    {
        if (hero == Hero.MainHero)
        {
            canDie = false;
        }
    }
}
```

### 示例 3：在会话就绪后才做重初始化，并落在存档前清理

`RegisterEvents` 里只有订阅；真正的初始化放在带 `CampaignGameStarter` 参数的启动事件上。

```csharp
using TaleWorlds.CampaignSystem;

public class InitBehavior : CampaignBehaviorBase
{
    private bool _initialized;

    public InitBehavior() : base("MyMod.Init") { }

    public override void RegisterEvents()
    {
        // 参数就是 CampaignGameStarter，可继续注入 Behavior 与菜单
        CampaignEvents.OnAfterSessionLaunchedEvent.AddNonSerializedListener(this, OnSessionReady);
        CampaignEvents.OnBeforeSaveEvent.AddNonSerializedListener(this, OnBeforeSave);
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 读与写共用 SyncData<T>，方向由存档流程决定；不要手写分支
        dataStore.SyncData("MyMod.Initialized", ref _initialized);
    }

    private void OnSessionReady(CampaignGameStarter starter)
    {
        if (!_initialized && Campaign.Current != null)
        {
            // 此刻 Manager 已装配完成，可以安全遍历
            starter.AddGameMenu("my_mod_menu", "我的菜单", OnMenuInitialize);
            _initialized = true;
        }
    }

    private void OnMenuInitialize(MenuCallbackArgs args)
    {
    }

    private void OnBeforeSave()
    {
        // 存档前清理会序列化进存档的扩展
    }
}
```

## 风险与边界

- **访问 `CampaignEvents.XxxEvent` 会 NRE**：属性内部走 `Campaign.Current.CampaignEvents`。战役未建立（主菜单、加载中、模块加载）时属性访问即崩。**任何订阅都必须发生在战役生命周期内**。
- **没有 `AddListener`**：接口是 `AddNonSerializedListener(object owner, Action<...>)`。旧教程的 `AddListener` 在这一版编译失败——这是 1.4.7 文档里最需要强调的一条。
- **事件不保证顺序**。`OnMissionStartedEvent` 与 `AfterMissionStarted` 分离正说明这点：需要「战斗完全就绪」就用后者。
- **回调期间的中间态**。事件在引擎改动世界的过程中触发，此刻读取被改对象可能不完整。养成习惯：回调打标记，处理放 tick。
- **owner 传错导致监听泄漏**。传临时 lambda 宿主后 `ClearListeners` 永远匹配不上，监听会挂在已死对象上。永远传稳定的 `this`。
- **跨层访问**。战役事件里读 `Mission.Current` / `Agent.MainAgent` 属于跨层操作。战斗内逻辑挂 [MissionBehavior](../../mission/MissionBehavior)。
- **单线程**：所有 `IMbEvent.Invoke` 发生在主游戏线程。联机同步回调中触发 `Invoke` 会与主线程争用集合。
- **静态属性 + 短生命周期**：`CampaignEvents` 实例随战役创建销毁；把 `IMbEvent` 句柄存进静态字段跨战役复用会指向已死实例。
- **源码里的私有字段不是 API**：`_heroLevelledUp` 一类私有字段由 `RemoveListeners` 批量清理，那是引擎内部的 owner 管理机制。

## 依赖关系

- 上游 / 提供者：
  - [Campaign](../Campaign) 持有 `CampaignEvents` 实例，并提供 `AddCampaignEventReceiver` 注册入口。
  - 引擎在 `CampaignEventReceiver` 的各 `OnXxx` 被调用时触发对应 `IMbEvent`。
- 相互 / 下游：
  - [CampaignBehaviorBase](../CampaignBehaviorBase) 是最常见的事件宿主——`RegisterEvents` 里订阅、`SyncData` 里落盘。
  - [CampaignGameStarter](../CampaignGameStarter) 经 `OnSessionLaunchedEvent` 等回调参数被交到 mod 手上。
  - [IFaction](../IFaction) 描述的状态变化（氏族倒戈、王国灭亡、宣战）由这里的事件广播。
  - 战斗层事件在 [MissionBehavior](../../mission/MissionBehavior)，与本类的事件总线分开。

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignGameStarter](../CampaignGameStarter) · [IFaction](../IFaction) · [MissionBehavior](../../mission/MissionBehavior)