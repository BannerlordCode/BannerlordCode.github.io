---
title: "CampaignEvents"
description: "战役全局事件总线：275 个抛出方法与 250+ 个静态事件属性，覆盖 tick、会话、领主、家族、王国、部队、城镇、攻城、任务与菜单。"
---
# CampaignEvents

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CampaignEvents : CampaignEventReceiver`
**Source:** `TaleWorlds.CampaignSystem/CampaignEvents.cs`

## 概述

`CampaignEvents` 是战役层的全局事件总线。它继承 `CampaignEventReceiver`——游戏代码调用 receiver 上的 `OnXxx(...)` 抛出方法，方法内部再转发到本类的静态事件属性；`CampaignEvents` 持有的那个实例是 `Campaign.Current.CampaignEvents`。

它有两个入口方向。**订阅方向**（mod 用得最多）：`CampaignEvents.HeroLevelledUp += (hero, notify) => {...}`。**抛出方向**（游戏用）：每个静态属性都有配对的 `public override void OnXxx(...)`，参数与事件一致。本类的 `Instance` 是 `private static` 的私有属性，外部拿不到实例本身，只能通过静态事件订阅。

事件分成三大类。`IMbEvent<T...>` 只广播，订阅者拿到参数不能左右结果。`ReferenceIMBEvent<T...>` 是**否决点**：签名末位是 `ref bool` 或 `ref int`，任何一个订阅者把 `ref` 参数置 false / 改小，游戏就取消这次行为——`CanHeroDieEvent`、`IsSettlementBusyEvent` 都属于这一类。`IMbEvent<float>` 这类无参或带 `dt` 的是周期 tick。

## 心智模型

订阅的正确位置是 `CampaignBehaviorBase.RegisterEvents()`，退订位置是对应的 `OnRemoveBehavior()` 或 Behavior 被销毁时。Behavior 在 `OnGameStart` 窗口被注册、在战役建立后才调 `RegisterEvents`，所以那里 `Campaign.Current` 已经可用。

会话时序：`OnNewGameCreatedEvent` → `OnGameEarlyLoadedEvent` → `OnGameLoadedEvent`（或读档路径的 `OnGameLoadFinishedEvent`）→ `OnSessionLaunchedEvent` → `OnAfterSessionLaunchedEvent`。读档不会重发 `OnNewGameCreatedEvent`。

tick 家族按粒度分层：`TickEvent(float dt)` 与 `MissionTickEvent(float dt)` 是每帧；`QuarterHourlyTickEvent` 是每刻钟；`HourlyTickEvent` 每小时；`DailyTickEvent` 每天；`WeeklyTickEvent` 每周。再往下还有按实体拆分的版本（`DailyTickHeroEvent`、`DailyTickPartyEvent`、`DailyTickClanEvent`、`DailyTickSettlementEvent`、`DailyTickTownEvent`、`OnQuarterDailyPartyTick`；注意按领主 / 按部队 / 按家族 / 按定居点还各有一个 `HourlyTickXxxEvent`，但按领主只有每天一档，没有每小时一档），它们由游戏遍历所有实体逐个触发——**这才是做「每实体维护缓存」的正确位置**，全局 `DailyTickEvent` 里遍历 `Campaign.Current.Heroes` 是常见且昂贵的错误写法。

三个常见误用。一是**在 `HourlyTickEvent` 里做重活**：它每游戏小时触发一次，但玩家推进时间时可能一帧内触发多次，游戏时间与真实帧率不同步。二是**忘记退订**：Behavior 被移除后订阅还在，回调访问已释放的字段会抛异常；而 `RemoveListeners(object obj)` 虽是 `public override`，它操作的 `Instance` 属性是 `private static`，外部拿不到实例，所以退订只能手动逐个 `-=`。三是**在否决事件里返回 true 却不做任何事**：`CanHeroDieEvent` 的 `ref bool` 初值由游戏设为 true，你若不修改就没影响；真正的坑是误把它当通知来订阅，白白跑一遍逻辑。

## 关键成员

### 会话与存档生命周期

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnNewGameCreatedEvent` | `IMbEvent<CampaignGameStarter> OnNewGameCreatedEvent` | 新战役刚建立、starter 已装配但未加载。只在新开档时触发，读档不触发 |
| `OnGameEarlyLoadedEvent` | `IMbEvent<CampaignGameStarter> OnGameEarlyLoadedEvent` | 读档早期，对象已恢复、Behavior 尚未全部 `RegisterEvents` |
| `OnGameLoadedEvent` | `IMbEvent<CampaignGameStarter> OnGameLoadedEvent` | 战役加载完成。查 `Hero.MainHero`、`Clan.PlayerClan` 的安全位置 |
| `OnGameLoadFinishedEvent` | `IMbEvent OnGameLoadFinishedEvent` | 整个加载流程收尾（含界面）完成 |
| `OnSessionLaunchedEvent` | `IMbEvent<CampaignGameStarter> OnSessionLaunchedEvent` | 进入可玩状态。UI 相关初始化放这里 |
| `OnAfterSessionLaunchedEvent` | `IMbEvent<CampaignGameStarter> OnAfterSessionLaunchedEvent` | 会话启动之后的补充钩子 |
| `OnBeforeSaveEvent` | `IMbEvent OnBeforeSaveEvent` | 存档开始前。此时改数据来得及进本次存档 |
| `OnSaveStartedEvent` | `IMbEvent OnSaveStartedEvent` | 存档流程已进入 |
| `OnSaveOverEvent` | `IMbEvent<bool, string> OnSaveOverEvent` | 存档结束。参数是是否成功与存档名，失败时不要再改数据 |
| `OnGameOverEvent` | `IMbEvent OnGameOverEvent` | 战役判定结束 |
| `OnNewGameCreatedPartialFollowUpEvent` | `IMbEvent<CampaignGameStarter, int> OnNewGameCreatedPartialFollowUpEvent` | 分段跟进新档创建，索引上限由常量 `OnNewGameCreatedPartialFollowUpEventMaxIndex = 100` 约束 |
| `OnNewGameCreatedPartialFollowUpEndEvent` | `IMbEvent<CampaignGameStarter> OnNewGameCreatedPartialFollowUpEndEvent` | 分段跟进结束 |
| `OnConfigChangedEvent` | `IMbEvent OnConfigChangedEvent` | 游戏配置被改动 |
| `OnCharacterCreationInitializedEvent` | `IMbEvent<CharacterCreationManager> OnCharacterCreationInitializedEvent` | 角色创建界面初始化完成 |
| `OnCharacterCreationIsOverEvent` | `IMbEvent OnCharacterCreationIsOverEvent` | 角色创建结束 |

### tick 家族

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `TickEvent` | `IMbEvent<float> TickEvent` | 每帧一次，`dt` 是秒。游戏与菜单都在跑，用它做纯表现层刷新 |
| `MissionTickEvent` | `IMbEvent<float> MissionTickEvent` | 战斗任务内每帧一次 |
| `QuarterHourlyTickEvent` | `IMbEvent QuarterHourlyTickEvent` | 每刻钟（15 游戏分钟） |
| `HourlyTickEvent` | `IMbEvent HourlyTickEvent` | 每游戏小时 |
| `DailyTickEvent` | `IMbEvent DailyTickEvent` | 每游戏日 |
| `WeeklyTickEvent` | `IMbEvent WeeklyTickEvent` | 每游戏周 |
| `AiHourlyTickEvent` | `IMbEvent<MobileParty, PartyThinkParams> AiHourlyTickEvent` | 每支 AI 部队每小时的思考钩子，参数含 `PartyThinkParams` |
| `TickPartialHourlyAiEvent` | `IMbEvent<MobileParty> TickPartialHourlyAiEvent` | AI 部队的部分小时节拍（轮转调度，不是整点） |
| `OnQuarterDailyPartyTick` | `IMbEvent<MobileParty> OnQuarterDailyPartyTick` | 每四分之一日 |
| `LocationCharactersSimulatedEvent` | `IMbEvent LocationCharactersSimulatedEvent` | 场景 NPC 行为模拟完成一轮 |
| `LocationCharactersAreReadyToSpawnEvent` | `IMbEvent<Dictionary<string, int>> LocationCharactersAreReadyToSpawnEvent` | 场景 NPC 待生成槽位表已算好 |

### 按实体的周期 tick

注意：1.4.6 的 `CampaignEvents` **没有**按领主每小时的事件或抛出方法（每个领主只有每天一档）。按领主 / 按部队 / 按家族 / 按定居点各有每小时一档，按城镇只有每天一档。

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `DailyTickHeroEvent` | `IMbEvent<Hero> DailyTickHeroEvent` | 每个领主每天一次。做按领主缓存维护的正确位置 |
| `HourlyTickPartyEvent` | `IMbEvent<MobileParty> HourlyTickPartyEvent` | 每支部队每小时 |
| `DailyTickPartyEvent` | `IMbEvent<MobileParty> DailyTickPartyEvent` | 每支部队每天 |
| `HourlyTickClanEvent` | `IMbEvent<Clan> HourlyTickClanEvent` | 每个家族每小时 |
| `DailyTickClanEvent` | `IMbEvent<Clan> DailyTickClanEvent` | 每个家族每天 |
| `HourlyTickSettlementEvent` | `IMbEvent<Settlement> HourlyTickSettlementEvent` | 每个定居点每小时 |
| `DailyTickSettlementEvent` | `IMbEvent<Settlement> DailyTickSettlementEvent` | 每个定居点每天 |
| `DailyTickTownEvent` | `IMbEvent<Town> DailyTickTownEvent` | 每个城镇每天（比上一条更细） |

### 否决点（ReferenceIMBEvent）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `CanHeroDieEvent` | `ReferenceIMBEvent<Hero, KillCharacterAction.KillCharacterActionDetail, bool> CanHeroDieEvent` | 领主即将死亡。`ref bool` 初值为 true，置 false 可免死 |
| `CanHeroBecomePrisonerEvent` | `ReferenceIMBEvent<Hero, bool> CanHeroBecomePrisonerEvent` | 领主即将被俘 |
| `CanHeroMarryEvent` | `ReferenceIMBEvent<Hero, bool> CanHeroMarryEvent` | 领主即将结婚 |
| `CanHeroLeadPartyEvent` | `ReferenceIMBEvent<Hero, bool> CanHeroLeadPartyEvent` | 领主能否率队 |
| `CanHeroEquipmentBeChangedEvent` | `ReferenceIMBEvent<Hero, bool> CanHeroEquipmentBeChangedEvent` | 能否更换领主装备 |
| `CanMoveToSettlementEvent` | `ReferenceIMBEvent<Hero, bool> CanMoveToSettlementEvent` | 领主能否进驻定居点 |
| `CanBeGovernorOrHavePartyRoleEvent` | `ReferenceIMBEvent<Hero, bool> CanBeGovernorOrHavePartyRoleEvent` | 能否担任总督或部队职务 |
| `CanHaveCampaignIssuesEvent` | `ReferenceIMBEvent<Hero, bool> CanHaveCampaignIssuesEvent` | 领主能否持有战役问题 |
| `CanPlayerMeetWithHeroAfterConversationEvent` | `ReferenceIMBEvent<Hero, bool> CanPlayerMeetWithHeroAfterConversationEvent` | 对话后玩家是否还能再见该领主 |
| `CanKingdomBeDiscontinuedEvent` | `ReferenceIMBEvent<Kingdom, bool> CanKingdomBeDiscontinuedEvent` | 王国能否被解散 |
| `IsSettlementBusyEvent` | `ReferenceIMBEvent<Settlement, object, int> IsSettlementBusyEvent` | 定居点是否繁忙。`ref int` 是优先级，改小可以插队 |
| `BeforePlayerAgentSpawnEvent` | `ReferenceIMBEvent<MatrixFrame> BeforePlayerAgentSpawnEvent` | 玩家 Agent 出生前的生成坐标系，可直接改写 `MatrixFrame` |

### 领主（Hero）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `HeroCreated` | `IMbEvent<Hero, bool> HeroCreated` | 新领主创建，第二参数是是否自然出生 |
| `HeroLevelledUp` | `IMbEvent<Hero, bool> HeroLevelledUp` | 领主升级 |
| `HeroGainedSkill` | `IMbEvent<Hero, SkillObject, int, bool> HeroGainedSkill` | 领主获得技能点，参数含技能、增量与是否通知 |
| `PerkOpenedEvent` | `IMbEvent<Hero, PerkObject> PerkOpenedEvent` | 领主解锁天赋 |
| `PerkResetEvent` | `IMbEvent<Hero, PerkObject> PerkResetEvent` | 领主天赋被重置 |
| `HeroWounded` | `IMbEvent<Hero> HeroWounded` | 领主负伤 |
| `HeroKilledEvent` | `IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool> HeroKilledEvent` | 领主死亡已结算 |
| `BeforeHeroKilledEvent` | `IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool> BeforeHeroKilledEvent` | 领主死亡结算前 |
| `OnBeforeMainCharacterDiedEvent` | `IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool> OnBeforeMainCharacterDiedEvent` | 主角即将死亡，专门给「死亡前的最后一次机会」用 |
| `OnHeroActivatedEvent` | `IMbEvent<Hero, Hero.CharacterStates> OnHeroActivatedEvent` | 领主在地图上的状态变化（如从重伤恢复） |
| `HeroOccupationChangedEvent` | `IMbEvent<Hero, Occupation> HeroOccupationChangedEvent` | 领主职业改变 |
| `OnHeroChangedClanEvent` | `IMbEvent<Hero, Clan> OnHeroChangedClanEvent` | 领主换家族 |
| `OnClanLeaderChangedEvent` | `IMbEvent<Hero, Hero> OnClanLeaderChangedEvent` | 家族领袖更替，两个参数分别是新旧领袖 |
| `HeroRelationChanged` | `IMbEvent<Hero, Hero, int, bool, ChangeRelationAction.ChangeRelationDetail, Hero, Hero> HeroRelationChanged` | 关系值变化。前两个是实际生效者，后两个是原始发起者，中间有增量与详情 |
| `OnHeroJoinedPartyEvent` | `IMbEvent<Hero, MobileParty> OnHeroJoinedPartyEvent` | 领主加入队伍 |
| `RenownGained` | `IMbEvent<Hero, int, bool> RenownGained` | 声望增加 |
| `OnHeroCombatHitEvent` | `IMbEvent<CharacterObject, CharacterObject, PartyBase, WeaponComponentData, bool, int> OnHeroCombatHitEvent` | 领主对撞兵种的一次战斗命中结算，含是否致命与经验 |
| `OnPlayerMetHeroEvent` | `IMbEvent<Hero> OnPlayerMetHeroEvent` | 玩家首次遇见该领主 |
| `OnPlayerLearnsAboutHeroEvent` | `IMbEvent<Hero> OnPlayerLearnsAboutHeroEvent` | 玩家通过传闻得知该领主 |
| `OnPlayerCharacterChangedEvent` | `IMbEvent<Hero, Hero, MobileParty, bool> OnPlayerCharacterChangedEvent` | 玩家操控的领主改变 |
| `OnBeforePlayerCharacterChangedEvent` | `IMbEvent<Hero, Hero> OnBeforePlayerCharacterChangedEvent` | 玩家角色即将更换 |
| `HeroPrisonerTaken` | `IMbEvent<PartyBase, Hero> HeroPrisonerTaken` | 领主被俘 |
| `HeroPrisonerReleased` | `IMbEvent<Hero, PartyBase, IFaction, EndCaptivityDetail, bool> HeroPrisonerReleased` | 领主被释放，含俘获方、细节与是否通知 |
| `OnRansomOfferedToPlayerEvent` | `IMbEvent<Hero> OnRansomOfferedToPlayerEvent` | 有人向玩家提出赎人 |
| `OnRansomOfferCancelledEvent` | `IMbEvent<Hero> OnRansomOfferCancelledEvent` | 赎人提议被取消 |
| `CharacterDefeated` | `IMbEvent<Hero, Hero> CharacterDefeated` | 领主在决斗或单挑中败北 |
| `CharacterBecameFugitiveEvent` | `IMbEvent<Hero, bool> CharacterBecameFugitiveEvent` | 领主成为逃犯 |
| `OnHeroGetsBusyEvent` | `IMbEvent<Hero, HeroGetsBusyReasons> OnHeroGetsBusyEvent` | 领主进入忙碌状态，参数说明原因 |
| `OnHeroSharedFoodWithAnotherHeroEvent` | `IMbEvent<Hero, Hero, float> OnHeroSharedFoodWithAnotherHeroEvent` | 领主请客，末位是影响力增量 |
| `OnHeroTeleportationRequestedEvent` | `IMbEvent<Hero, Settlement, MobileParty, TeleportHeroAction.TeleportationDetail> OnHeroTeleportationRequestedEvent` | 请求传送领主 |
| `OnHeroUnregisteredEvent` | `IMbEvent<Hero> OnHeroUnregisteredEvent` | 领主对象从对象管理器注销，之后引用失效 |
| `RomanticStateChanged` | `IMbEvent<Hero, Hero, Romance.RomanceLevelEnum> RomanticStateChanged` | 恋爱关系阶段变化 |
| `BeforeHeroesMarried` | `IMbEvent<Hero, Hero, bool> BeforeHeroesMarried` | 婚姻结算前 |
| `OnMarriageOfferedToPlayerEvent` | `IMbEvent<Hero, Hero> OnMarriageOfferedToPlayerEvent` | 有人向玩家提亲 |
| `OnMarriageOfferCanceledEvent` | `IMbEvent<Hero, Hero> OnMarriageOfferCanceledEvent` | 提亲被取消 |
| `OnGivenBirthEvent` | `IMbEvent<Hero, List<Hero>, int> OnGivenBirthEvent` | 生产事件，参数是母亲、存活孩子与死产数 |
| `OnChildConceivedEvent` | `IMbEvent<Hero> OnChildConceivedEvent` | 受孕 |
| `HeroComesOfAgeEvent` | `IMbEvent<Hero> HeroComesOfAgeEvent` | 成年 |
| `HeroReachesTeenAgeEvent` | `IMbEvent<Hero> HeroReachesTeenAgeEvent` | 进入青少年期 |
| `HeroGrowsOutOfInfancyEvent` | `IMbEvent<Hero> HeroGrowsOutOfInfancyEvent` | 脱离婴幼儿期 |
| `ChildEducationCompletedEvent` | `IMbEvent<Hero, int> ChildEducationCompletedEvent` | 教育阶段完成，参数含年龄 |
| `OnHeirSelectionRequestedEvent` | `IMbEvent<Dictionary<Hero, int>> OnHeirSelectionRequestedEvent` | 请求选择继承人，字典是候选人到序号的映射 |
| `OnHeirSelectionOverEvent` | `IMbEvent<Hero> OnHeirSelectionOverEvent` | 继承人选定 |
| `NewCompanionAdded` | `IMbEvent<Hero> NewCompanionAdded` | 新同伴加入 |
| `CompanionRemoved` | `IMbEvent<Hero, RemoveCompanionAction.RemoveCompanionDetail> CompanionRemoved` | 同伴被移除 |
| `OnCheckForIssueEvent` | `IMbEvent<Hero> OnCheckForIssueEvent` | 系统检查该领主是否有可触发的问题 |
| `PlayerStartTalkFromMenu` | `IMbEvent<Hero> PlayerStartTalkFromMenu` | 玩家从菜单发起对话 |
| `OnItemsRefinedEvent` | `IMbEvent<Hero, Crafting.RefiningFormula> OnItemsRefinedEvent` | 领主执行精炼 |
| `OnEquipmentSmeltedByHeroEvent` | `IMbEvent<Hero, EquipmentElement> OnEquipmentSmeltedByHeroEvent` | 领主熔化装备 |

### 家族（Clan）与王国（Kingdom）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnClanCreatedEvent` | `IMbEvent<Clan, bool> OnClanCreatedEvent` | 家族创建，第二参数表示是否同伴家族 |
| `OnClanDestroyedEvent` | `IMbEvent<Clan> OnClanDestroyedEvent` | 家族被摧毁，引用即将失效 |
| `ClanTierIncrease` | `IMbEvent<Clan, bool> ClanTierIncrease` | 家族等级提升 |
| `OnClanInfluenceChangedEvent` | `IMbEvent<Clan, float> OnClanInfluenceChangedEvent` | 家族影响力变化，参数是增量 |
| `OnClanEarnedGoldFromTributeEvent` | `IMbEvent<Clan, IFaction> OnClanEarnedGoldFromTributeEvent` | 家族收到贡金 |
| `OnClanDefectedEvent` | `IMbEvent<Clan, Kingdom, Kingdom> OnClanDefectedEvent` | 家族叛离，参数是家族、旧王国、新王国 |
| `OnClanChangedKingdomEvent` | `IMbEvent<Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool> OnClanChangedKingdomEvent` | 家族换王国的完整过程，含动作细节与是否通知 |
| `OnMercenaryServiceStartedEvent` | `IMbEvent<Clan, StartMercenaryServiceAction.StartMercenaryServiceActionDetails> OnMercenaryServiceStartedEvent` | 佣兵服务开始 |
| `OnMercenaryServiceEndedEvent` | `IMbEvent<Clan, EndMercenaryServiceAction.EndMercenaryServiceActionDetails> OnMercenaryServiceEndedEvent` | 佣兵服务结束 |
| `KingdomCreatedEvent` | `IMbEvent<Kingdom> KingdomCreatedEvent` | 王国建立 |
| `KingdomDestroyedEvent` | `IMbEvent<Kingdom> KingdomDestroyedEvent` | 王国覆灭 |
| `RulingClanChanged` | `IMbEvent<Kingdom, Clan> RulingClanChanged` | 统治家族更替 |
| `WarDeclared` | `IMbEvent<IFaction, IFaction, DeclareWarAction.DeclareWarDetail> WarDeclared` | 宣战，含发起方式细节 |
| `MakePeace` | `IMbEvent<IFaction, IFaction, MakePeaceAction.MakePeaceDetail> MakePeace` | 缔结和平 |
| `OnAllianceStartedEvent` | `IMbEvent<Kingdom, Kingdom> OnAllianceStartedEvent` | 同盟建立 |
| `OnAllianceEndedEvent` | `IMbEvent<Kingdom, Kingdom> OnAllianceEndedEvent` | 同盟破裂 |
| `OnTradeAgreementSignedEvent` | `IMbEvent<Kingdom, Kingdom> OnTradeAgreementSignedEvent` | 贸易协定签署 |
| `OnCallToWarAgreementStartedEvent` | `IMbEvent<Kingdom, Kingdom, Kingdom> OnCallToWarAgreementStartedEvent` | 参战号召开始 |
| `OnCallToWarAgreementEndedEvent` | `IMbEvent<Kingdom, Kingdom, Kingdom> OnCallToWarAgreementEndedEvent` | 参战号召结束 |
| `OnPeaceOfferedToPlayerEvent` | `IMbEvent<IFaction, int, int> OnPeaceOfferedToPlayerEvent` | 向玩家提出和平，参数含贡金数额与天数 |
| `OnPeaceOfferResolvedEvent` | `IMbEvent<IFaction> OnPeaceOfferResolvedEvent` | 和平提议被处理完毕 |
| `CrimeRatingChanged` | `IMbEvent<IFaction, float> CrimeRatingChanged` | 犯罪值变化 |
| `OnMapEventContinuityNeedsUpdateEvent` | `IMbEvent<IFaction> OnMapEventContinuityNeedsUpdateEvent` | 该势力的地图事件连续性需要刷新 |
| `KingdomDecisionAdded` | `IMbEvent<KingdomDecision, bool> KingdomDecisionAdded` | 王国决议加入待决列表 |
| `KingdomDecisionCancelled` | `IMbEvent<KingdomDecision, bool> KingdomDecisionCancelled` | 王国决议被取消 |
| `KingdomDecisionConcluded` | `IMbEvent<KingdomDecision, DecisionOutcome, bool> KingdomDecisionConcluded` | 王国决议表决完成，含表决结果 |
| `OnVassalOrMercenaryServiceOfferedToPlayerEvent` | `IMbEvent<Kingdom> OnVassalOrMercenaryServiceOfferedToPlayerEvent` | 玩家收到封臣或佣兵邀请 |
| `OnVassalOrMercenaryServiceOfferCanceledEvent` | `IMbEvent<Kingdom> OnVassalOrMercenaryServiceOfferCanceledEvent` | 上述邀请被取消 |

### 部队（Party）与军队（Army）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MobilePartyCreated` | `IMbEvent<MobileParty> MobilePartyCreated` | 部队创建 |
| `MobilePartyDestroyed` | `IMbEvent<MobileParty, PartyBase> MobilePartyDestroyed` | 部队被解散，参数含解散者 |
| `OnPartyDisbandStartedEvent` | `IMbEvent<MobileParty> OnPartyDisbandStartedEvent` | 解散流程开始 |
| `OnPartyDisbandedEvent` | `IMbEvent<MobileParty, Settlement> OnPartyDisbandedEvent` | 解散完成 |
| `OnPartyDisbandCanceledEvent` | `IMbEvent<MobileParty> OnPartyDisbandCanceledEvent` | 解散被撤销 |
| `PartyAttachedAnotherParty` | `IMbEvent<MobileParty> PartyAttachedAnotherParty` | 部队并入另一支部队 |
| `OnPartyLeaderChangedEvent` | `IMbEvent<MobileParty, Hero> OnPartyLeaderChangedEvent` | 队长变更，第二参数是旧队长 |
| `OnPartyLeaderChangeOfferCanceledEvent` | `IMbEvent<MobileParty> OnPartyLeaderChangeOfferCanceledEvent` | 换队长的交互被取消 |
| `OnPartySizeChangedEvent` | `IMbEvent<PartyBase> OnPartySizeChangedEvent` | 部队规模变化 |
| `OnPartyConsumedFoodEvent` | `IMbEvent<MobileParty> OnPartyConsumedFoodEvent` | 部队消耗口粮 |
| `OnMainPartyStarvingEvent` | `IMbEvent OnMainPartyStarvingEvent` | 主力队开始饥饿 |
| `OnTroopsDesertedEvent` | `IMbEvent<MobileParty, TroopRoster> OnTroopsDesertedEvent` | 士兵逃散 |
| `OnMobilePartyJoinedToSiegeEventEvent` | `IMbEvent<MobileParty> OnMobilePartyJoinedToSiegeEventEvent` | 部队加入围城（事件名带重复的 `Event`，是源码里的原样） |
| `OnMobilePartyLeftSiegeEventEvent` | `IMbEvent<MobileParty> OnMobilePartyLeftSiegeEventEvent` | 部队离开围城 |
| `OnMobilePartyNavigationStateChangedEvent` | `IMbEvent<MobileParty> OnMobilePartyNavigationStateChangedEvent` | 导航状态切换（驻军、围城、追击等） |
| `OnMobilePartyRaftStateChangedEvent` | `IMbEvent<MobileParty> OnMobilePartyRaftStateChangedEvent` | 渡河状态切换 |
| `MobilePartyQuestStatusChanged` | `IMbEvent<MobileParty, bool> MobilePartyQuestStatusChanged` | 部队被任务占用状态变化 |
| `NearbyPartyAddedToPlayerMapEvent` | `IMbEvent<MobileParty> NearbyPartyAddedToPlayerMapEvent` | 部队进入玩家视野 |
| `OnPartyAddedToMapEventEvent` | `IMbEvent<PartyBase> OnPartyAddedToMapEventEvent` | 部队加入地图事件 |
| `OnPartyRemovedEvent` | `IMbEvent<PartyBase> OnPartyRemovedEvent` | 部队移出地图事件 |
| `PartyVisibilityChangedEvent` | `IMbEvent<PartyBase> PartyVisibilityChangedEvent` | 部队可见性变化 |
| `OnPartyJoinedArmyEvent` | `IMbEvent<MobileParty> OnPartyJoinedArmyEvent` | 部队加入军队 |
| `PartyRemovedFromArmyEvent` | `IMbEvent<MobileParty> PartyRemovedFromArmyEvent` | 部队离开军队 |
| `OnPartyLeftArmyEvent` | `IMbEvent<MobileParty, Army> OnPartyLeftArmyEvent` | 离开军队并回传军队对象 |
| `ArmyCreated` | `IMbEvent<Army> ArmyCreated` | 军队建立 |
| `ArmyDispersed` | `IMbEvent<Army, Army.ArmyDispersionReason, bool> ArmyDispersed` | 军队解散，含原因与是否玩家军队 |
| `ArmyGathered` | `IMbEvent<Army, IMapPoint> ArmyGathered` | 军队集结到某点 |
| `ArmyOverlaySetDirtyEvent` | `IMbEvent ArmyOverlaySetDirtyEvent` | 军队覆盖层需要重绘 |
| `OnPlayerArmyLeaderChangedBehaviorEvent` | `IMbEvent OnPlayerArmyLeaderChangedBehaviorEvent` | 玩家军队领袖的行为指令变更 |
| `BanditPartyRecruited` | `IMbEvent<MobileParty> BanditPartyRecruited` | 匪徒被招安 |
| `OnHomeHideoutChangedEvent` | `IMbEvent<BanditPartyComponent, Hideout> OnHomeHideoutChangedEvent` | 匪徒根据点变更，参数含旧据点 |
| `OnHideoutSpottedEvent` | `IMbEvent<PartyBase, PartyBase> OnHideoutSpottedEvent` | 发现敌方据点 |
| `OnHideoutDeactivatedEvent` | `IMbEvent<Settlement> OnHideoutDeactivatedEvent` | 据点被停用 |
| `OnShipCreatedEvent` | `IMbEvent<Ship, Settlement> OnShipCreatedEvent` | 船只在港口建造 |
| `OnShipRepairedEvent` | `IMbEvent<Ship, Settlement> OnShipRepairedEvent` | 船只在港口修好 |
| `OnShipOwnerChangedEvent` | `IMbEvent<Ship, PartyBase, ChangeShipOwnerAction.ShipOwnerChangeDetail> OnShipOwnerChangedEvent` | 船只易主 |
| `OnShipDestroyedEvent` | `IMbEvent<PartyBase, Ship, DestroyShipAction.ShipDestroyDetail> OnShipDestroyedEvent` | 船只被击沉 |
| `OnCaravanTransactionCompletedEvent` | `IMbEvent<MobileParty, Town, List<ValueTuple<EquipmentElement, int>>> OnCaravanTransactionCompletedEvent` | 商队交易完成 |

### 定居点、村庄、城镇与工坊

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `BeforeSettlementEnteredEvent` | `IMbEvent<MobileParty, Settlement, Hero> BeforeSettlementEnteredEvent` | 进入定居点之前，地图尚未切换 |
| `SettlementEntered` | `IMbEvent<MobileParty, Settlement, Hero> SettlementEntered` | 已进入定居点 |
| `AfterSettlementEntered` | `IMbEvent<MobileParty, Settlement, Hero> AfterSettlementEntered` | 进入完成（含 UI 更新）之后 |
| `OnSettlementLeftEvent` | `IMbEvent<MobileParty, Settlement> OnSettlementLeftEvent` | 离开定居点 |
| `OnSettlementOwnerChangedEvent` | `IMbEvent<Settlement, bool, Hero, Hero, Hero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail> OnSettlementOwnerChangedEvent` | 归属变更，含是否开放占领、新旧主人、占领者与细节 |
| `RebellionFinished` | `IMbEvent<Settlement, Clan> RebellionFinished` | 叛乱平定，参数含原主人家族 |
| `RebelliousClanDisbandedAtSettlement` | `IMbEvent<Settlement, Clan> RebelliousClanDisbandedAtSettlement` | 叛乱家族在定居点解散 |
| `VillageStateChanged` | `IMbEvent<Village, Village.VillageStates, Village.VillageStates, MobileParty> VillageStateChanged` | 村庄状态迁移，含新旧状态与袭击者 |
| `VillageBeingRaided` | `IMbEvent<Village> VillageBeingRaided` | 村庄被袭击中 |
| `VillageLooted` | `IMbEvent<Village> VillageLooted` | 村庄被洗劫 |
| `VillageBecomeNormal` | `IMbEvent<Village> VillageBecomeNormal` | 村庄恢复正常 |
| `OnBuildingLevelChangedEvent` | `IMbEvent<Town, Building, int> OnBuildingLevelChangedEvent` | 城镇建筑等级变化 |
| `OnGovernorChangedEvent` | `IMbEvent<Town, Hero, Hero> OnGovernorChangedEvent` | 城镇总督更替 |
| `TownRebelliosStateChanged` | `IMbEvent<Town, bool> TownRebelliosStateChanged` | 城镇叛乱状态翻转（事件名 `Rebellios` 是源码原样拼写） |
| `TournamentStarted` | `IMbEvent<Town> TournamentStarted` | 赛事开始 |
| `TournamentCancelled` | `IMbEvent<Town> TournamentCancelled` | 赛事取消 |
| `TournamentFinished` | `IMbEvent<CharacterObject, MBReadOnlyList<CharacterObject>, Town, ItemObject> TournamentFinished` | 赛事结束，含冠军、参赛者、城镇与奖品 |
| `OnPlayerJoinedTournamentEvent` | `IMbEvent<Town, bool> OnPlayerJoinedTournamentEvent` | 玩家报名，第二参数表示是否已成为参赛者 |
| `PlayerStartedTournamentMatch` | `IMbEvent<Town> PlayerStartedTournamentMatch` | 玩家进入比赛回合 |
| `PlayerEliminatedFromTournament` | `IMbEvent<int, Town> PlayerEliminatedFromTournament` | 玩家被淘汰，参数含轮次 |
| `PlayerDesertedBattleEvent` | `IMbEvent<int> PlayerDesertedBattleEvent` | 玩家在战斗中脱队，参数是被抛弃的士兵数 |
| `MercenaryNumberChangedInTown` | `IMbEvent<Town, int, int> MercenaryNumberChangedInTown` | 城镇佣兵数量变化 |
| `MercenaryTroopChangedInTown` | `IMbEvent<Town, CharacterObject, CharacterObject> MercenaryTroopChangedInTown` | 城镇佣兵兵种替换 |
| `WorkshopInitializedEvent` | `IMbEvent<Workshop> WorkshopInitializedEvent` | 工坊初始化 |
| `WorkshopTypeChangedEvent` | `IMbEvent<Workshop> WorkshopTypeChangedEvent` | 工坊类型改变 |
| `WorkshopOwnerChangedEvent` | `IMbEvent<Workshop, Hero> WorkshopOwnerChangedEvent` | 工坊易主 |
| `PrisonersChangeInSettlement` | `IMbEvent<Settlement, FlattenedTroopRoster, Hero, bool> PrisonersChangeInSettlement` | 地牢囚犯变化，含是否来自地牢 |
| `OnPrisonerTakenEvent` | `IMbEvent<FlattenedTroopRoster> OnPrisonerTakenEvent` | 俘获囚犯 |
| `OnPrisonerReleasedEvent` | `IMbEvent<FlattenedTroopRoster> OnPrisonerReleasedEvent` | 释放囚犯 |
| `OnPrisonerSoldEvent` | `IMbEvent<PartyBase, PartyBase, TroopRoster> OnPrisonerSoldEvent` | 囚犯被买卖 |
| `OnPrisonerDonatedToSettlementEvent` | `IMbEvent<MobileParty, FlattenedTroopRoster, Settlement> OnPrisonerDonatedToSettlementEvent` | 囚犯被献给定居点 |
| `OnMainPartyPrisonerRecruitedEvent` | `IMbEvent<FlattenedTroopRoster> OnMainPartyPrisonerRecruitedEvent` | 主队把囚犯转成士兵 |
| `AlleyOwnerChanged` | `IMbEvent<Alley, Hero, Hero> AlleyOwnerChanged` | 街区易主 |
| `AlleyOccupiedByPlayer` | `IMbEvent<Alley, TroopRoster> AlleyOccupiedByPlayer` | 玩家占据街区 |
| `AlleyClearedByPlayer` | `IMbEvent<Alley> AlleyClearedByPlayer` | 玩家肃清街区 |
| `OnItemProducedEvent` | `IMbEvent<ItemObject, Settlement, int> OnItemProducedEvent` | 工坊产出物品 |
| `OnItemConsumedEvent` | `IMbEvent<ItemObject, Settlement, int> OnItemConsumedEvent` | 工坊消耗物品 |
| `OnNewItemCraftedEvent` | `IMbEvent<ItemObject, ItemModifier, bool> OnNewItemCraftedEvent` | 锻造完成，含被覆盖的词条与是否订单物品 |
| `CraftingPartUnlockedEvent` | `IMbEvent<CraftingPiece> CraftingPartUnlockedEvent` | 解锁锻造部件 |
| `OnFigureheadUnlockedEvent` | `IMbEvent<Figurehead> OnFigureheadUnlockedEvent` | 解锁船首像 |
| `ItemsLooted` | `IMbEvent<MobileParty, ItemRoster> ItemsLooted` | 战利品被装入某部队 |
| `OnCollectLootsItemsEvent` | `IMbEvent<PartyBase, ItemRoster> OnCollectLootsItemsEvent` | 战利品被收集 |
| `OnLootDistributedToPartyEvent` | `IMbEvent<PartyBase, PartyBase, ItemRoster> OnLootDistributedToPartyEvent` | 战利品分给部队 |
| `OnItemSoldEvent` | `IMbEvent<PartyBase, PartyBase, ItemRosterElement, int, Settlement> OnItemSoldEvent` | 成交一笔买卖 |
| `HeroOrPartyTradedGold` | `IMbEvent<ValueTuple<Hero, PartyBase>, ValueTuple<Hero, PartyBase>, ValueTuple<int, string>, bool> HeroOrPartyTradedGold` | 双方完成黄金交易，元组含金额与文本 |
| `HeroOrPartyGaveItem` | `IMbEvent<ValueTuple<Hero, PartyBase>, ValueTuple<Hero, PartyBase>, ItemRosterElement, bool> HeroOrPartyGaveItem` | 赠送物品 |
| `PlayerInventoryExchangeEvent` | `IMbEvent<List<ValueTuple<ItemRosterElement, int>>, List<ValueTuple<ItemRosterElement, int>>, bool> PlayerInventoryExchangeEvent` | 玩家背包交易结算，两个列表是买入与卖出 |
| `OnItemsDiscardedByPlayerEvent` | `IMbEvent<ItemRoster> OnItemsDiscardedByPlayerEvent` | 玩家丢弃物品 |
| `OnPlayerEarnedGoldFromAssetEvent` | `IMbEvent<DefaultClanFinanceModel.AssetIncomeType, int> OnPlayerEarnedGoldFromAssetEvent` | 家族资产收益 |
| `OnPlayerTradeProfitEvent` | `IMbEvent<int> OnPlayerTradeProfitEvent` | 玩家贸易利润结算 |
| `OnTradeRumorIsTakenEvent` | `IMbEvent<List<TradeRumor>, Settlement> OnTradeRumorIsTakenEvent` | 贸易传闻被获取 |
| `PlayerStartRecruitmentEvent` | `IMbEvent<CharacterObject> PlayerStartRecruitmentEvent` | 玩家开始招募 |
| `OnUnitRecruitedEvent` | `IMbEvent<CharacterObject, int> OnUnitRecruitedEvent` | 招募完成 |
| `OnTroopRecruitedEvent` | `IMbEvent<Hero, Settlement, Hero, CharacterObject, int> OnTroopRecruitedEvent` | 领主视角的招募，含招募者、聚落、来源英雄、兵种与数量 |
| `OnTroopGivenToSettlementEvent` | `IMbEvent<Hero, Settlement, TroopRoster> OnTroopGivenToSettlementEvent` | 向聚落赠送士兵 |
| `PlayerUpgradedTroopsEvent` | `IMbEvent<CharacterObject, CharacterObject, int> PlayerUpgradedTroopsEvent` | 玩家升级兵种 |
| `OnPlayerPartyKnockedOrKilledTroopEvent` | `IMbEvent<CharacterObject> OnPlayerPartyKnockedOrKilledTroopEvent` | 玩家部下被击伤或击杀 |
| `CharacterPortraitPopUpOpenedEvent` | `IMbEvent<CharacterObject> CharacterPortraitPopUpOpenedEvent` | 角色立绘弹窗打开 |
| `CharacterPortraitPopUpClosedEvent` | `IMbEvent CharacterPortraitPopUpClosedEvent` | 立绘弹窗关闭 |

### 战斗、地图事件与攻城

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `BattleStarted` | `IMbEvent<PartyBase, PartyBase, object, bool> BattleStarted` | 战斗开始，含双方、战斗标的与是否通知 |
| `MapEventStarted` | `IMbEvent<MapEvent, PartyBase, PartyBase> MapEventStarted` | 地图事件建立 |
| `MapEventEnded` | `IMbEvent<MapEvent> MapEventEnded` | 地图事件结束 |
| `OnPlayerBattleEndEvent` | `IMbEvent<MapEvent> OnPlayerBattleEndEvent` | 玩家一方战斗结束 |
| `OnMissionStartedEvent` | `IMbEvent<IMission> OnMissionStartedEvent` | 任务开始 |
| `AfterMissionStarted` | `IMbEvent<IMission> AfterMissionStarted` | 任务启动完成之后 |
| `OnMissionEndedEvent` | `IMbEvent<IMission> OnMissionEndedEvent` | 任务结束 |
| （无对应事件） | 见 `MissionBehavior` 的 `OnMissionStateActivated()` | 本类没有「任务状态激活」这条战役事件。该钩子是 `MissionBehavior` 上的 `public virtual void OnMissionStateActivated()`，只能在任务内覆写 |
| `OnSiegeEventStartedEvent` | `IMbEvent<SiegeEvent> OnSiegeEventStartedEvent` | 围城开始 |
| `OnSiegeEventEndedEvent` | `IMbEvent<SiegeEvent> OnSiegeEventEndedEvent` | 围城结束 |
| `OnBlockadeActivatedEvent` | `IMbEvent<SiegeEvent> OnBlockadeActivatedEvent` | 封锁启动 |
| `OnBlockadeDeactivatedEvent` | `IMbEvent<SiegeEvent> OnBlockadeDeactivatedEvent` | 封锁解除 |
| `SiegeCompletedEvent` | `IMbEvent<Settlement, MobileParty, bool, MapEvent.BattleTypes> SiegeCompletedEvent` | 攻城战斗结束，含是否胜利与战斗类型 |
| `AfterSiegeCompletedEvent` | `IMbEvent<Settlement, MobileParty, bool, MapEvent.BattleTypes> AfterSiegeCompletedEvent` | 攻城善后处理开始 |
| `OnSiegeAftermathAppliedEvent` | `IMbEvent<MobileParty, Settlement, SiegeAftermathAction.SiegeAftermath, Clan, Dictionary<MobileParty, float>> OnSiegeAftermathAppliedEvent` | 攻城后果结算，含各部队贡献度 |
| `SiegeEngineBuiltEvent` | `IMbEvent<SiegeEvent, BattleSideEnum, SiegeEngineType> SiegeEngineBuiltEvent` | 攻城器械建成 |
| `OnSiegeEngineDestroyedEvent` | `IMbEvent<MobileParty, Settlement, BattleSideEnum, SiegeEngineType> OnSiegeEngineDestroyedEvent` | 攻城器械被摧毁 |
| `OnSiegeBombardmentHitEvent` | `IMbEvent<MobileParty, Settlement, BattleSideEnum, SiegeEngineType, SiegeBombardTargets> OnSiegeBombardmentHitEvent` | 轰击命中目标 |
| `OnSiegeBombardmentWallHitEvent` | `IMbEvent<MobileParty, Settlement, BattleSideEnum, SiegeEngineType, bool> OnSiegeBombardmentWallHitEvent` | 轰击命中城墙，末位参数表示是否已破开裂口 |
| `RaidCompletedEvent` | `IMbEvent<BattleSideEnum, RaidEventComponent> RaidCompletedEvent` | 劫掠完成 |
| `ForceSuppliesCompletedEvent` | `IMbEvent<BattleSideEnum, ForceSuppliesEventComponent> ForceSuppliesCompletedEvent` | 强行征粮完成 |
| `ForceVolunteersCompletedEvent` | `IMbEvent<BattleSideEnum, ForceVolunteersEventComponent> ForceVolunteersCompletedEvent` | 强征志愿兵完成 |
| `OnHideoutBattleCompletedEvent` | `MbEvent<BattleSideEnum, HideoutEventComponent, HideoutEventComponent.HideoutBattleEndState> OnHideoutBattleCompletedEvent` | 据点战结束。注意该属性类型是 `MbEvent` 而非 `IMbEvent` |
| `OnPlayerSiegeStartedEvent` | `IMbEvent OnPlayerSiegeStartedEvent` | 玩家发起围城 |
| `OnPlayerAgentSpawned` | `IMbEvent PlayerAgentSpawned` | 玩家 Agent 生成完毕 |
| `OnAgentJoinedConversationEvent` | `IMbEvent<IAgent> OnAgentJoinedConversationEvent` | 单位加入对话 |
| `ConversationEnded` | `IMbEvent<IEnumerable<CharacterObject>> ConversationEnded` | 对话结束 |
| `PersuasionProgressCommittedEvent` | `IMbEvent<Tuple<PersuasionOptionArgs, PersuasionOptionResult>> PersuasionProgressCommittedEvent` | 说服进度结算 |
| `OnIncidentResolvedEvent` | `IMbEvent<Incident> OnIncidentResolvedEvent` | 偶发事件结算完毕 |
| `OnQuestStartedEvent` | `IMbEvent<QuestBase> OnQuestStartedEvent` | 任务开始 |
| `OnQuestCompletedEvent` | `IMbEvent<QuestBase, QuestBase.QuestCompleteDetails> OnQuestCompletedEvent` | 任务完成 |
| `QuestLogAddedEvent` | `IMbEvent<QuestBase, bool> QuestLogAddedEvent` | 任务写入日志，第二参数表示是否隐藏信息 |
| `OnNewIssueCreatedEvent` | `IMbEvent<IssueBase> OnNewIssueCreatedEvent` | 新问题出现 |
| `OnIssueUpdatedEvent` | `IMbEvent<IssueBase, IssueBase.IssueUpdateDetails, Hero> OnIssueUpdatedEvent` | 问题状态更新，含更新详情与解决者 |
| `OnIssueOwnerChangedEvent` | `IMbEvent<IssueBase, Hero> OnIssueOwnerChangedEvent` | 问题负责人变更，参数含旧负责人 |
| `IssueLogAddedEvent` | `IMbEvent<IssueBase, bool> IssueLogAddedEvent` | 问题写入日志 |
| `MapInteractableCreated` | `IMbEvent<IInteractablePoint> MapInteractableCreated` | 地图交互点创建 |
| `MapInteractableDestroyed` | `IMbEvent<IInteractablePoint> MapInteractableDestroyed` | 地图交互点销毁 |
| `OnMapMarkerCreatedEvent` | `IMbEvent<MapMarker> OnMapMarkerCreatedEvent` | 地图标记创建 |
| `OnMapMarkerRemovedEvent` | `IMbEvent<MapMarker> OnMapMarkerRemovedEvent` | 地图标记移除 |
| `TrackDetectedEvent` | `IMbEvent<Track> TrackDetectedEvent` | 发现踪迹 |
| `TrackLostEvent` | `IMbEvent<Track> TrackLostEvent` | 跟丢踪迹 |
| `OnTutorialCompletedEvent` | `IMbEvent<string> OnTutorialCompletedEvent` | 教学点完成 |
| `CollectAvailableTutorialsEvent` | `IMbEvent<List<CampaignTutorial>> CollectAvailableTutorialsEvent` | 收集可用教学点，可往列表里追加 |
| `CollectMetadataEntriesEvent` | `IMbEvent<List<KeyValuePair<string, string>>> CollectMetadataEntriesEvent` | 收集元数据条目，用于存档外的描述信息 |

### 菜单与对话界面

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GameMenuOpened` | `IMbEvent<MenuCallbackArgs> GameMenuOpened` | 游戏菜单打开 |
| `BeforeGameMenuOpenedEvent` | `IMbEvent<MenuCallbackArgs> BeforeGameMenuOpenedEvent` | 菜单打开之前 |
| `AfterGameMenuInitializedEvent` | `IMbEvent<MenuCallbackArgs> AfterGameMenuInitializedEvent` | 菜单选项初始化完成 |
| `GameMenuOptionSelectedEvent` | `IMbEvent<GameMenu, GameMenuOption> GameMenuOptionSelectedEvent` | 菜单项被选中 |
| `OnPlayerBoardGameOverEvent` | `IMbEvent<Hero, BoardGameHelper.BoardGameState> OnPlayerBoardGameOverEvent` | 棋盘游戏结束 |
| `OnPlayerBodyPropertiesChangedEvent` | `IMbEvent OnPlayerBodyPropertiesChangedEvent` | 玩家体型属性改变，需要重建身体模型 |
| `PlayerTraitChangedEvent` | `IMbEvent<TraitObject, int> PlayerTraitChangedEvent` | 玩家特质变化，参数含旧等级 |

### 抛出侧（游戏调用的 275 个 `public override` 方法）

这些方法由游戏逻辑调用，内部把参数转发给同名静态事件。mod 基本不需要直接调它们，但它们构成完整的公开面。持久订阅者必须自行逐个退订，因为 `Instance` 属性是 `private static`。

**会话、存档与界面**

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnNewGameCreated` | `public override void OnNewGameCreated(CampaignGameStarter campaignGameStarter)` | 新档创建完成，抛 `OnNewGameCreatedEvent` |
| `OnGameEarlyLoaded` | `public override void OnGameEarlyLoaded(CampaignGameStarter campaignGameStarter)` | 读档早期 |
| `OnGameLoaded` | `public override void OnGameLoaded(CampaignGameStarter campaignGameStarter)` | 战役加载完成 |
| `OnGameLoadFinished` | `public override void OnGameLoadFinished()` | 加载流程整体结束 |
| `OnSessionStart` | `public override void OnSessionStart(CampaignGameStarter campaignGameStarter)` | 会话启动 |
| `OnAfterSessionStart` | `public override void OnAfterSessionStart(CampaignGameStarter campaignGameStarter)` | 会话启动之后 |
| `OnBeforeSave` | `public override void OnBeforeSave()` | 存档前 |
| `OnSaveStarted` | `public override void OnSaveStarted()` | 存档开始 |
| `OnSaveOver` | `public override void OnSaveOver(bool isSuccessful, string saveName)` | 存档结束 |
| `OnGameOver` | `public override void OnGameOver()` | 战役结束 |
| `OnConfigChanged` | `public override void OnConfigChanged()` | 配置变更 |
| `OnCharacterCreationInitialized` | `public override void OnCharacterCreationInitialized(CharacterCreationManager characterCreationManager)` | 角色创建初始化 |
| `OnCharacterCreationIsOver` | `public override void OnCharacterCreationIsOver()` | 角色创建结束 |
| `OnPlayerBodyPropertiesChanged` | `public override void OnPlayerBodyPropertiesChanged()` | 玩家体型变化 |
| `OnPlayerTraitChanged` | `public override void OnPlayerTraitChanged(TraitObject trait, int previousLevel)` | 玩家特质变化 |
| `OnGameMenuOpened` | `public override void OnGameMenuOpened(MenuCallbackArgs args)` | 菜单打开 |
| `BeforeGameMenuOpened` | `public override void BeforeGameMenuOpened(MenuCallbackArgs args)` | 菜单打开前 |
| `AfterGameMenuInitialized` | `public override void AfterGameMenuInitialized(MenuCallbackArgs args)` | 菜单初始化后 |
| `OnGameMenuOptionSelected` | `public override void OnGameMenuOptionSelected(GameMenu gameMenu, GameMenuOption gameMenuOption)` | 菜单项选中 |
| `BeforeMissionOpened` | `public override void BeforeMissionOpened()` | 任务打开前 |
| `OnMissionStarted` | `public override void OnMissionStarted(IMission mission)` | 任务开始 |
| `OnAfterMissionStarted` | `public override void OnAfterMissionStarted(IMission iMission)` | 任务启动后 |
| `OnMissionEnded` | `public override void OnMissionEnded(IMission mission)` | 任务结束 |
| `Tick` | `public override void Tick(float dt)` | 每帧抛 `TickEvent` |
| `MissionTick` | `public override void MissionTick(float dt)` | 任务内每帧 |
| `QuarterHourlyTick` | `public override void QuarterHourlyTick()` | 每刻钟 |
| `HourlyTick` | `public override void HourlyTick()` | 每小时 |
| `DailyTick` | `public override void DailyTick()` | 每天 |
| `WeeklyTick` | `public override void WeeklyTick()` | 每周 |
| `DailyTickHero` | `public override void DailyTickHero(Hero hero)` | 每领主每天 |
| `HourlyTickParty` | `public override void HourlyTickParty(MobileParty mobileParty)` | 每部队每小时 |
| `DailyTickParty` | `public override void DailyTickParty(MobileParty mobileParty)` | 每部队每天 |
| `QuarterDailyPartyTick` | `public override void QuarterDailyPartyTick(MobileParty mobileParty)` | 每部队每四分之一日 |
| `HourlyTickClan` | `public override void HourlyTickClan(Clan clan)` | 每家族每小时 |
| `DailyTickClan` | `public override void DailyTickClan(Clan clan)` | 每家族每天 |
| `HourlyTickSettlement` | `public override void HourlyTickSettlement(Settlement settlement)` | 每定居点每小时 |
| `DailyTickSettlement` | `public override void DailyTickSettlement(Settlement settlement)` | 每定居点每天 |
| `DailyTickTown` | `public override void DailyTickTown(Town town)` | 每城镇每天 |
| `AiHourlyTick` | `public override void AiHourlyTick(MobileParty party, PartyThinkParams partyThinkParams)` | AI 部队每小时思考 |
| `TickPartialHourlyAi` | `public override void TickPartialHourlyAi(MobileParty party)` | AI 部队部分小时节拍 |
| `LocationCharactersSimulated` | `public override void LocationCharactersSimulated()` | 场景 NPC 模拟完成 |
| `LocationCharactersAreReadyToSpawn` | `public override void LocationCharactersAreReadyToSpawn(Dictionary<string, int> unusedUsablePointCount)` | 场景 NPC 槽位就绪 |
| `RemoveListeners` | `public override void RemoveListeners(object obj)` | 清掉某对象作为订阅者的全部监听。因为 `Instance` 是 `private static`，mod 无法直接调它；订阅者必须自己对称 `-=` |
| `CollectAvailableTutorials` | `public override void CollectAvailableTutorials(ref List<CampaignTutorial> tutorials)` | 收集教学点 |
| `CollectMetadataEntries` | `public override void CollectMetadataEntries(List<KeyValuePair<string, string>> pairs)` | 收集元数据 |

**领主相关抛出**

`OnHeroCreated(Hero, bool)`、`OnHeroLevelledUp(Hero, bool)`、`OnHeroGainedSkill(Hero, SkillObject, int, bool)`、`OnPerkOpened(Hero, PerkObject)`、`OnPerkReset(Hero, PerkObject)`、`OnHeroWounded(Hero)`、`OnHeroActivated(Hero, Hero.CharacterStates)`、`OnHeroOccupationChanged(Hero, Occupation)`、`OnHeroChangedClan(Hero, Clan)`、`OnClanLeaderChanged(Hero, Hero)`、`OnHeroRelationChanged(Hero, Hero, int, bool, ChangeRelationAction.ChangeRelationDetail, Hero, Hero)`、`OnHeroJoinedParty(Hero, MobileParty)`、`OnRenownGained(Hero, int, bool)`、`OnHeroCombatHit(CharacterObject, CharacterObject, PartyBase, WeaponComponentData, bool, int)`、`OnPlayerMetHero(Hero)`、`OnPlayerLearnsAboutHero(Hero)`、`OnPlayerCharacterChanged(Hero, Hero, MobileParty, bool)`、`OnBeforePlayerCharacterChanged(Hero, Hero)`、`OnBeforeHeroKilled(Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool)`、`OnHeroKilled(Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool)`、`OnBeforeMainCharacterDied(Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool)`、`OnHeroPrisonerTaken(PartyBase, Hero)`、`OnHeroPrisonerReleased(Hero, PartyBase, IFaction, EndCaptivityDetail, bool)`、`OnRansomOfferedToPlayer(Hero)`、`OnRansomOfferCancelled(Hero)`、`OnCharacterDefeated(Hero, Hero)`、`OnCharacterBecameFugitive(Hero, bool)`、`OnHeroGetsBusy(Hero, HeroGetsBusyReasons)`、`OnHeroSharedFoodWithAnother(Hero, Hero, float)`、`OnHeroTeleportationRequested(Hero, Settlement, MobileParty, TeleportHeroAction.TeleportationDetail)`、`OnHeroUnregistered(Hero)`、`OnRomanticStateChanged(Hero, Hero, Romance.RomanceLevelEnum)`、`OnBeforeHeroesMarried(Hero, Hero, bool)`、`OnMarriageOfferedToPlayer(Hero, Hero)`、`OnMarriageOfferCanceled(Hero, Hero)`、`OnGivenBirth(Hero, List<Hero>, int)`、`OnChildConceived(Hero)`、`OnHeroComesOfAge(Hero)`、`OnHeroReachesTeenAge(Hero)`、`OnHeroGrowsOutOfInfancy(Hero)`、`OnChildEducationCompleted(Hero, int)`、`OnHeirSelectionRequested(Dictionary<Hero, int>)`、`OnHeirSelectionOver(Hero)`、`OnNewCompanionAdded(Hero)`、`OnCompanionRemoved(Hero, RemoveCompanionAction.RemoveCompanionDetail)`、`OnCheckForIssue(Hero)`、`OnPlayerStartTalkFromMenu(Hero)`、`OnItemsRefined(Hero, Crafting.RefiningFormula)`、`OnEquipmentSmeltedByHero(Hero, EquipmentElement)`、`OnItemsDiscardedByPlayer(ItemRoster)`、`OnPlayerStartRecruitment(CharacterObject)`、`OnUnitRecruited(CharacterObject, int)`、`OnTroopRecruited(Hero, Settlement, Hero, CharacterObject, int)`、`OnTroopGivenToSettlement(Hero, Settlement, TroopRoster)`、`OnPlayerUpgradedTroops(CharacterObject, CharacterObject, int)`、`OnPlayerPartyKnockedOrKilledTroop(CharacterObject)`、`OnCharacterPortraitPopUpOpened(CharacterObject)`、`OnCharacterPortraitPopUpClosed()`、`OnPlayerDesertedBattle(int)`。

**否决点抛出**

`CanHeroDie(Hero, KillCharacterAction.KillCharacterActionDetail, ref bool)`、`CanHeroBecomePrisoner(Hero, ref bool)`、`CanHeroMarry(Hero, ref bool)`、`CanHeroLeadParty(Hero, ref bool)`、`CanHeroEquipmentBeChanged(Hero, ref bool)`、`CanMoveToSettlement(Hero, ref bool)`、`CanBeGovernorOrHavePartyRole(Hero, ref bool)`、`CanHaveCampaignIssues(Hero, ref bool)`、`CanPlayerMeetWithHeroAfterConversation(Hero, ref bool)`、`CanKingdomBeDiscontinued(Kingdom, ref bool)`、`IsSettlementBusy(Settlement, object, ref int)`、`OnBeforePlayerAgentSpawn(ref MatrixFrame)`。每个都是「把 `ref` 参数交给所有订阅者，收集结果」的形状。

**家族、王国与势力抛出**

`OnClanCreated(Clan, bool)`、`OnClanDestroyed(Clan)`、`OnClanTierChanged(Clan, bool)`、`OnClanInfluenceChanged(Clan, float)`、`OnClanEarnedGoldFromTribute(Clan, IFaction)`、`OnClanDefected(Clan, Kingdom, Kingdom)`、`OnClanChangedKingdom(Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool)`、`OnMercenaryServiceStarted(Clan, StartMercenaryServiceAction.StartMercenaryServiceActionDetails)`、`OnMercenaryServiceEnded(Clan, EndMercenaryServiceAction.EndMercenaryServiceActionDetails)`、`OnKingdomCreated(Kingdom)`、`OnKingdomDestroyed(Kingdom)`、`OnRulingClanChanged(Kingdom, Clan)`、`OnWarDeclared(IFaction, IFaction, DeclareWarAction.DeclareWarDetail)`、`OnMakePeace(IFaction, IFaction, MakePeaceAction.MakePeaceDetail)`、`OnAllianceStarted(Kingdom, Kingdom)`、`OnAllianceEnded(Kingdom, Kingdom)`、`OnTradeAgreementSigned(Kingdom, Kingdom)`、`OnCallToWarAgreementStarted(Kingdom, Kingdom, Kingdom)`、`OnCallToWarAgreementEnded(Kingdom, Kingdom, Kingdom)`、`OnPeaceOfferedToPlayer(IFaction, int, int)`、`OnPeaceOfferResolved(IFaction)`、`OnCrimeRatingChanged(IFaction, float)`、`OnMapEventContinuityNeedsUpdate(IFaction)`、`OnKingdomDecisionAdded(KingdomDecision, bool)`、`OnKingdomDecisionCancelled(KingdomDecision, bool)`、`OnKingdomDecisionConcluded(KingdomDecision, DecisionOutcome, bool)`、`OnVassalOrMercenaryServiceOfferedToPlayer(Kingdom)`、`OnVassalOrMercenaryServiceOfferCanceled(Kingdom)`、`OnBarterablesRequested(BarterData)`、`OnBarterAccepted(Hero, Hero, List<Barterable>)`、`OnBarterCanceled(Hero, Hero, List<Barterable>)`。

**部队、军队与船抛出**

`OnMobilePartyCreated(MobileParty)`、`OnMobilePartyDestroyed(MobileParty, PartyBase)`、`OnPartyDisbandStarted(MobileParty)`、`OnPartyDisbanded(MobileParty, Settlement)`、`OnPartyDisbandCanceled(MobileParty)`、`OnPartyAttachedAnotherParty(MobileParty)`、`OnPartyLeaderChanged(MobileParty, Hero)`、`OnPartyLeaderChangeOfferCanceled(MobileParty)`、`OnPartySizeChanged(PartyBase)`、`OnPartyConsumedFood(MobileParty)`、`OnMainPartyStarving()`、`OnTroopsDeserted(MobileParty, TroopRoster)`、`OnMobilePartyJoinedToSiegeEvent(MobileParty)`、`OnMobilePartyLeftSiegeEvent(MobileParty)`、`OnMobilePartyNavigationStateChanged(MobileParty)`、`OnMobilePartyRaftStateChanged(MobileParty)`、`OnMobilePartyQuestStatusChanged(MobileParty, bool)`、`OnNearbyPartyAddedToPlayerMapEvent(MobileParty)`、`OnPartyAddedToMapEvent(PartyBase)`、`OnPartyRemoved(PartyBase)`、`OnPartyVisibilityChanged(PartyBase)`、`OnPartyJoinedArmy(MobileParty)`、`OnPartyRemovedFromArmy(MobileParty)`、`OnPartyLeftArmy(MobileParty, Army)`、`OnArmyCreated(Army)`、`OnArmyDispersed(Army, Army.ArmyDispersionReason, bool)`、`OnArmyGathered(Army, IMapPoint)`、`OnArmyOverlaySetDirty()`、`OnPlayerArmyLeaderChangedBehavior()`、`OnBanditPartyRecruited(MobileParty)`、`OnHomeHideoutChanged(BanditPartyComponent, Hideout)`、`OnHideoutSpotted(PartyBase, PartyBase)`、`OnHideoutDeactivated(Settlement)`、`OnHideoutBattleCompleted(BattleSideEnum, HideoutEventComponent, HideoutEventComponent.HideoutBattleEndState)`、`OnShipCreated(Ship, Settlement)`、`OnShipRepaired(Ship, Settlement)`、`OnShipOwnerChanged(Ship, PartyBase, ChangeShipOwnerAction.ShipOwnerChangeDetail)`、`OnShipDestroyed(PartyBase, Ship, DestroyShipAction.ShipDestroyDetail)`、`OnCaravanTransactionCompleted(MobileParty, Town, List<ValueTuple<EquipmentElement, int>>)`、`OnHeroOrPartyTradedGold(ValueTuple<Hero, PartyBase>, ValueTuple<Hero, PartyBase>, ValueTuple<int, string>, bool)`、`OnHeroOrPartyGaveItem(ValueTuple<Hero, PartyBase>, ValueTuple<Hero, PartyBase>, ItemRosterElement, bool)`。

**定居点、城镇、工坊与物资抛出**

`OnBeforeSettlementEntered(MobileParty, Settlement, Hero)`、`OnSettlementEntered(MobileParty, Settlement, Hero)`、`OnAfterSettlementEntered(MobileParty, Settlement, Hero)`、`OnSettlementLeft(MobileParty, Settlement)`、`OnSettlementOwnerChanged(Settlement, bool, Hero, Hero, Hero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail)`、`OnRebellionFinished(Settlement, Clan)`、`OnRebelliousClanDisbandedAtSettlement(Settlement, Clan)`、`OnVillageStateChanged(Village, Village.VillageStates, Village.VillageStates, MobileParty)`、`OnVillageBeingRaided(Village)`、`OnVillageLooted(Village)`、`OnVillageBecomeNormal(Village)`、`OnBuildingLevelChanged(Town, Building, int)`、`OnGovernorChanged(Town, Hero, Hero)`、`TownRebelliousStateChanged(Town, bool)`、`OnTournamentStarted(Town)`、`OnTournamentCancelled(Town)`、`OnTournamentFinished(CharacterObject, MBReadOnlyList<CharacterObject>, Town, ItemObject)`、`OnPlayerJoinedTournament(Town, bool)`、`OnPlayerStartedTournamentMatch(Town)`、`OnPlayerEliminatedFromTournament(int, Town)`、`OnMercenaryNumberChangedInTown(Town, int, int)`、`OnMercenaryTroopChangedInTown(Town, CharacterObject, CharacterObject)`、`OnWorkshopInitialized(Workshop)`、`OnWorkshopTypeChanged(Workshop)`、`OnWorkshopOwnerChanged(Workshop, Hero)`、`OnPrisonersChangeInSettlement(Settlement, FlattenedTroopRoster, Hero, bool)`、`OnPrisonerTaken(FlattenedTroopRoster)`、`OnPrisonerReleased(FlattenedTroopRoster)`、`OnPrisonerSold(PartyBase, PartyBase, TroopRoster)`、`OnPrisonerDonatedToSettlement(MobileParty, FlattenedTroopRoster, Settlement)`、`OnMainPartyPrisonerRecruited(FlattenedTroopRoster)`、`OnAlleyOwnerChanged(Alley, Hero, Hero)`、`OnAlleyOccupiedByPlayer(Alley, TroopRoster)`、`OnAlleyClearedByPlayer(Alley)`、`OnItemProduced(ItemObject, Settlement, int)`、`OnItemConsumed(ItemObject, Settlement, int)`、`OnNewItemCrafted(ItemObject, ItemModifier, bool)`、`CraftingPartUnlocked(CraftingPiece)`、`OnFigureheadUnlocked(Figurehead)`、`OnItemsLooted(MobileParty, ItemRoster)`、`OnCollectLootItems(PartyBase, ItemRoster)`、`OnLootDistributedToParty(PartyBase, PartyBase, ItemRoster)`、`OnItemSold(PartyBase, PartyBase, ItemRosterElement, int, Settlement)`、`OnPlayerInventoryExchange(List<ValueTuple<ItemRosterElement, int>>, List<ValueTuple<ItemRosterElement, int>>, bool)`、`OnPlayerEarnedGoldFromAsset(DefaultClanFinanceModel.AssetIncomeType, int)`、`OnPlayerTradeProfit(int)`、`OnTradeRumorIsTaken(List<TradeRumor>, Settlement)`、`OnCraftingOrderCompleted(Town, CraftingOrder, ItemObject, Hero)`。

**战斗、攻城、任务与地图抛出**

`OnStartBattle(PartyBase, PartyBase, object, bool)`、`OnMapEventStarted(MapEvent, PartyBase, PartyBase)`、`OnMapEventEnded(MapEvent)`、`OnPlayerBattleEnd(MapEvent)`、`OnSiegeEventStarted(SiegeEvent)`、`OnSiegeEventEnded(SiegeEvent)`、`OnBlockadeActivated(SiegeEvent)`、`OnBlockadeDeactivated(SiegeEvent)`、`SiegeCompleted(Settlement, MobileParty, bool, MapEvent.BattleTypes)`、`AfterSiegeCompleted(Settlement, MobileParty, bool, MapEvent.BattleTypes)`、`OnSiegeAftermathApplied(MobileParty, Settlement, SiegeAftermathAction.SiegeAftermath, Clan, Dictionary<MobileParty, float>)`、`SiegeEngineBuilt(SiegeEvent, BattleSideEnum, SiegeEngineType)`、`OnSiegeEngineDestroyed(MobileParty, Settlement, BattleSideEnum, SiegeEngineType)`、`OnSiegeBombardmentHit(MobileParty, Settlement, BattleSideEnum, SiegeEngineType, SiegeBombardTargets)`、`OnSiegeBombardmentWallHit(MobileParty, Settlement, BattleSideEnum, SiegeEngineType, bool)`、`RaidCompleted(BattleSideEnum, RaidEventComponent)`、`ForceSuppliesCompleted(BattleSideEnum, ForceSuppliesEventComponent)`、`ForceVolunteersCompleted(BattleSideEnum, ForceVolunteersEventComponent)`、`OnPlayerSiegeStarted()`、`OnPlayerAgentSpawned()`、`OnAgentJoinedConversation(IAgent)`、`OnConversationEnded(IEnumerable<CharacterObject>)`、`OnPersuasionProgressCommitted(Tuple<PersuasionOptionArgs, PersuasionOptionResult>)`、`OnPlayerBoardGameOver(Hero, BoardGameHelper.BoardGameState)`、`OnIncidentResolved(Incident)`、`OnQuestStarted(QuestBase)`、`OnQuestCompleted(QuestBase, QuestBase.QuestCompleteDetails)`、`OnQuestLogAdded(QuestBase, bool)`、`OnNewIssueCreated(IssueBase)`、`OnIssueUpdated(IssueBase, IssueBase.IssueUpdateDetails, Hero)`、`OnIssueOwnerChanged(IssueBase, Hero)`、`OnIssueLogAdded(IssueBase, bool)`、`OnMapInteractableCreated(IInteractablePoint)`、`OnMapInteractableDestroyed(IInteractablePoint)`、`OnMapMarkerCreated(MapMarker)`、`OnMapMarkerRemoved(MapMarker)`、`TrackDetected(Track)`、`TrackLost(Track)`、`OnTutorialCompleted(string)`。

**常量**

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnNewGameCreatedPartialFollowUpEventMaxIndex` | `public const int OnNewGameCreatedPartialFollowUpEventMaxIndex = 100` | 分段跟进事件的索引上限。用它做循环时不要写死 100 |

## 怎么用

### 怎么拿到它

`CampaignEvents`（`TaleWorlds.CampaignSystem/CampaignEvents.cs:32`）声明为 `public class CampaignEvents : CampaignEventReceiver`，实例由 `Campaign.OnInitialize()` 的第一句 `this.CampaignEvents = new CampaignEvents();` 建立（`Campaign.cs:1891`），紧接着被包进 `new CampaignEventDispatcher(new CampaignEventReceiver[] { this.CampaignEvents, this.IssueManager, this.QuestManager })`（`Campaign.cs:1892`）。

但 **mod 拿到的从来不是这个实例**。类里 5596 行全是 `public static IMbEvent<...>` 字段，例如 `public static IMbEvent<Hero, Hero, int, bool, ChangeRelationAction.ChangeRelationDetail, Hero, Hero> HeroRelationChanged`（`CampaignEvents.cs:519`）、`public static IMbEvent<Hero, bool> HeroLevelledUp`（`:359`）、`public static IMbEvent<BarterData> BarterablesRequested`（`:343`）。每个字段旁边都有一个 `public override void OnXxx(...)` 虚方法，基类 `CampaignEventReceiver`（`CampaignEventReceiver.cs:32`）把上千个回调都声明成空实现，子类覆写后由 dispatcher 广播。

订阅靠 `IMbEvent` 接口的两个方法：`void AddNonSerializedListener(object owner, Action action)`（`IMbEvent.cs:11`）、泛型版 `void AddNonSerializedListener<out T>(object owner, Action<T> action)`（`IMbEvent.2.cs:10`），退订靠 `void ClearListeners(object o)`（`IMbEvent.cs:14`）。

### 典型用法

```csharp
using TaleWorlds.CampaignSystem;

public class TavernDebt : CampaignBehaviorBase
{
    private int _debt;

    public override void RegisterEvents()
    {
        // owner 传 this：退订时按这个引用清掉全部注册
        CampaignEvents.HeroLevelledUp.AddNonSerializedListener(this, OnHeroLevelledUp);   // CampaignEvents.cs:359
        CampaignEvents.HeroRelationChanged.AddNonSerializedListener(this, OnRelationChanged);
    }

    private void OnHeroLevelledUp(Hero hero, bool shouldNotify)                            // 签名对应 CampaignEvents.cs:368
    {
        _debt += hero.Level;
    }

    private void OnRelationChanged(Hero effectiveHero, Hero other, int relationChange,
                                   bool showNotification,
                                   ChangeRelationAction.ChangeRelationDetail detail,
                                   Hero a, Hero b)                                          // CampaignEvents.cs:528 的七个参数
    {
        if (relationChange < 0)
        {
            _debt += 5;
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("tavern_debt", ref _debt);
    }

    // 退订：CampaignEventReceiver.RemoveListeners 就是这么用的
    public override void RemoveListeners(object obj)
    {
        CampaignEvents.HeroLevelledUp.ClearListeners(this);                                  // IMbEvent.cs:14
    }
}
```

### 最容易踩的坑

**忘了退订，于是同一个监听器在同一个对象上叠加多次，并且跨战役不消失。** `HeroLevelledUp` 这类字段是 `public static`（`CampaignEvents.cs:359`），生命周期跟进程走而不是跟战役走；`IMbEvent.AddNonSerializedListener` 只是往静态集合里追加，没有去重。后果有两个：同一个 `CampaignBehaviorBase` 实例如果 `RegisterEvents()` 被跑了两遍，回调就触发两次（表现为数值翻倍、日志刷屏）；更隐蔽的是 `Campaign` 拆局时这些静态事件**不会被清空**——`CampaignEventReceiver.RemoveListeners(object o)`（`CampaignEventReceiver.cs:35`，`CampaignEvents.cs:45` 覆写）必须由监听者自己调。重进战役后如果新行为的 owner 不是旧行为（`GetCampaignBehavior<T>()` 每次返回不同实例），旧实例的监听仍在静态集合里，会操作已经不属于当前战役的数据，表现为**跨局串数据**。

第二个坑在参数个数：`IMbEvent<...>` 的泛型实参个数必须和 handler 的 Action 签名**逐个对上**。比如 `HeroRelationChanged` 是七个泛型参数（`CampaignEvents.cs:519`），少写一个就直接编译不过；而 `OnHeroGainedSkill` 那类回调的 `int change = 1, bool shouldNotify = true`（`CampaignEvents.cs:400`）默认参数只存在于 `CampaignEventReceiver` 的虚方法上，`AddNonSerializedListener` 传的 `Action<...>` 不享受默认值。

## 真实示例

```csharp
public class LedgerCampaignBehavior : CampaignBehaviorBase
{
    private readonly Dictionary<Hero, int> _perHeroDeeds = new Dictionary<Hero, int>();

    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickHeroEvent += OnHourlyPerHero;
        CampaignEvents.HeroRelationChanged += OnRelationChanged;
        CampaignEvents.OnSettlementOwnerChangedEvent += OnOwnerChanged;
        // 否决点：这里可以真的把 ref bool 改掉
        CampaignEvents.CanHeroDieEvent += OnCanHeroDie;
        CampaignEvents.OnSaveStartedEvent += OnSaveStarted;
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("perHeroDeeds", ref _perHeroDeeds);
    }

    public override void OnRemoveBehavior()
    {
        // CampaignEvents.Instance 是 private static，外部拿不到，只能对称退订
        CampaignEvents.DailyTickHeroEvent -= OnHourlyPerHero;
        CampaignEvents.HeroRelationChanged -= OnRelationChanged;
        CampaignEvents.OnSettlementOwnerChangedEvent -= OnOwnerChanged;
        CampaignEvents.CanHeroDieEvent -= OnCanHeroDie;
        CampaignEvents.OnSaveStartedEvent -= OnSaveStarted;
    }

    private void OnHourlyPerHero(Hero hero)
    {
        if (hero == null || hero.IsDead)
        {
            return;
        }

        if (!_perHeroDeeds.ContainsKey(hero))
        {
            _perHeroDeeds[hero] = 0;
        }
    }

    private void OnRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith,
        int relationChange, bool showNotification,
        ChangeRelationAction.ChangeRelationDetail detail,
        Hero originalHero, Hero originalGainedRelationWith)
    {
        if (originalHero == Hero.MainHero && relationChange > 0)
        {
            _perHeroDeeds[originalGainedRelationWith] = 1;
        }
    }

    private void OnOwnerChanged(Settlement settlement, bool openToClaim,
        Hero newOwner, Hero oldOwner, Hero capturerHero,
        ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)
    {
        if (newOwner != null)
        {
            Debug.Print("[Ledger] " + settlement.StringId + " -> " + newOwner.Name);
        }
    }

    private void OnCanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)
    {
        if (_perHeroDeeds.ContainsKey(hero) && hero.Clan == Clan.PlayerClan)
        {
            result = false;   // 已记账的本族领主免死
        }
    }

    private void OnSaveStarted()
    {
        // 存档开始前把运行时缓存刷干净
        _perHeroDeeds.Clear();
    }
}
```

## 风险与边界

- **静态订阅泄漏**：`CampaignEvents` 的事件是静态的，Behavior 消失后订阅仍在。`RemoveListeners` 帮不上忙（`Instance` 私有），必须把所有 `+=` 集中在一处、销毁时对称 `-=`。
- **订阅时机**：`RegisterEvents()` 之前战役未建立，那时读 `Campaign.Current.Heroes` 会拿到空集合。所有实体查询都应该延到事件回调里再做。
- **tick 与游戏时间不同步**：玩家推进一天可能在一帧内触发 24 次 `HourlyTickEvent`。把「一天一次」的重活放 `DailyTickEvent`，并自己保证幂等。
- **按实体 tick 会被对象数量放大**：`DailyTickHeroEvent` 在有 200 个领主时每天触发 200 次，单个回调必须便宜。按领主建字典缓存是常见且正确的做法。
- **否决点会连锁**：`CanHeroDieEvent` 订阅者多时，任何一个把 `result` 置 false 都会生效；顺序不定，不要假设自己一定是最后一个。
- **销毁后仍会收到事件**：`OnHeroUnregisteredEvent`、`OnClanDestroyedEvent`、`OnPartyRemovedEvent` 之后对象引用失效，回调里再读属性会抛异常。
- **`OnBeforeSaveEvent` 与 `OnSaveStartedEvent` 的差别**：前者适合改数据（还来得及写进本次存档），后者适合清理运行时状态。往已开始的存档里改数据不会生效。
- **命名不是规范**：源码里有 `TownRebelliosStateChanged`、`OnMobilePartyJoinedToSiegeEventEvent` 这类拼写与重复后缀，按名字猜语义会踩坑，务必回源码看参数。
- **主线程假设**：所有抛出都在战役主循环里，订阅者的回调也在同一线程。不要在回调里做阻塞 IO。
- **事件数量带来的反射成本**：游戏会为每个 `IMbEvent` 维护监听器列表，mod 大量 `+=` 会让派发变慢，尤其在 `DailyTickEvent` 上。

## 跨版本提示

1.4.5 的参考源位于 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/`。1.4.6 相对它把事件类型从早期的大量独立委托改成了泛型化的 `IMbEvent<...>` 与 `ReferenceIMBEvent<...>`，并新增了 `OnNewGameCreatedPartialFollowUpEvent`（配套常量上限 100）、`OnAgentJoinedConversationEvent`、`OnPlayerAgentSpawned`、`OnMainPartyStarvingEvent`、`BeforePlayerAgentSpawnEvent` 这几项，以及船与工坊相关的族（`Ship`、`Workshop`、`Figurehead`、`OnShipDestroyedEvent` 等）。订阅形状 `CampaignEvents.XxxEvent += handler` 跨版本稳定，但**具体成员集合会变**，跨版本 mod 不要假设某个事件在 1.4.5 也存在。

## 依赖关系

- 抛出方：`CampaignEventReceiver` 是本类的基类，游戏代码持有它并调用 `OnXxx`。
- 会话载体：[CampaignGameStarter](../CampaignGameStarter) — 多个会话事件的参数类型。
- 实体：[Hero](../Hero)、[Settlement](../Settlement) — 事件参数里最常见的两种实体。
- 订阅入口：[CampaignBehaviorBase](../CampaignBehaviorBase) — `RegisterEvents` 是正确的订阅位置。
- 存读档：[IDataStore](../IDataStore) — Behavior 私有状态必须走它，事件本身不入档。
- 任务侧：[MissionBehavior](../../mission/MissionBehavior) — 战斗内的钩子由它提供，与本类的战役级事件互补。
- 父级：[campaign API 目录导览](../)

## 导航

- 同桶：[`../CampaignBehaviorBase`](../CampaignBehaviorBase) · [`../Hero`](../Hero) · [`../Settlement`](../Settlement)
- 父索引：[`../_index`](../_index)
