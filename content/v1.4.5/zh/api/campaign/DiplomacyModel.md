---
title: "DiplomacyModel"
description: "集中裁决王国间战争/和平评分、外交姿态、关系边界、影响力与贡金成本以及派系价值，由 Campaign 在运行时通过 Campaign.Current.Models.DiplomacyModel 解析，被宣战/和平决议、外交行为与各 Action 调用。"
---

# DiplomacyModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class DiplomacyModel : MBGameModel<DiplomacyModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/DiplomacyModel.cs

## 概述

该模型集中裁决外交系统的全部纯规则结果：两个派系之间是否处于恒定战争、战争与和平的评分、关系上下限、影响力与贡金成本、加入/离开王国与雇佣佣兵的评分，以及派系与英雄的综合实力。它只做判定与纯计算，真正改变外交状态（宣战、缔和、改关系、给影响力）的是 [DeclareWarAction](../../campaign-ext/DeclareWarAction)、[MakePeaceAction](../../campaign-ext/MakePeaceAction)、[ChangeRelationAction](../../campaign-ext/ChangeRelationAction) 等 Action 与对应的王国决议。

## 心智模型

DiplomacyModel 是一个纯裁决的 Model 型扩展点：`Campaign` 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出 `DefaultDiplomacyModel` 唯一实例并缓存，运行时统一用 `Campaign.Current.Models.DiplomacyModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。外交决议（如 [DeclareWarDecision](../DeclareWarDecision)）与行为在评估是否提出/通过宣战或和平时调用 `GetScoreOfDeclaringWar`、`GetScoreOfDeclaringPeace`、`IsPeaceSuitable`、`GetDecisionMakingThreshold`；而真正落定战争/和平的 [DeclareWarAction](../../campaign-ext/DeclareWarAction) 与 [MakePeaceAction](../../campaign-ext/MakePeaceAction) 则独立执行关系变更与事件派发。要改外交规则就继承并注册一个替换实现；要“执行”外交动作必须走对应 Action，绝不要把模型当成写世界的入口或直接改 `IFaction` 的战争状态。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“谁和谁处于战争、宣战/和平评分如何算、关系上限是多少、影响力与贡金成本是多少、派系价值多大”等规则时，读取 `Campaign.Current.Models.DiplomacyModel` 的返回值，或提供一个新的派生类覆盖其抽象成员并通过子模块在 `InitializeGameStarter` 阶段注册替换默认实现。
- **不要使用**：不要用模型去“执行”外交——它只会判定，真正改 `IFaction` 战争关系、`Hero` 关系、`Clan` 影响力或贡金的是对应的 Action 与决议。不要因为 `GetScoreOfDeclaringWar` 返回正值就直接调用 `DeclareWarAction`，除非调用者已完成决议来源、资格与重复战争检查；也不要把模型返回值当作持久世界状态（它是无状态纯函数）。修改世界状态应走 Campaign 行为或对应 Action，而非篡改模型。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<DiplomacyModel>()` 解析并缓存实例。
- [ClanTierModel](../ClanTierModel) —— `DefaultDiplomacyModel` 计算战争实力时读取 `GetPartyLimitForTier`。
- [AllianceModel](../AllianceModel) —— `GetScoreOfDeclaringWar` / `GetScoreOfDeclaringPeace` 读取 `GetAllianceFactorForDeclaringWar` / `…Peace`。
- [MinorFactionsModel](../MinorFactionsModel) —— `GetScoreOfMercenaryToJoinKingdom` 读取 `GetMercenaryAwardFactorToJoinKingdom`。

下游与协同系统（调用方）：

- [FactionManager](../FactionManager) —— 在创建/查询 `StanceLink` 时调用 `GetShallowDiplomaticStance`、`GetDefaultDiplomaticStance`、`IsAtConstantWar`。
- [KingdomManager](../KingdomManager) —— 创建王国、封臣变动、赠城时调用 `IsAtConstantWar`、`GetInfluenceAwardForSettlementCapturer`、`GiftingTownRelationshipBonus`/`GiftingCastleRelationshipBonus`。
- [Hero](../Hero) —— `GetEffectiveRelation` / `GetBaseRelation` 实例方法转发到本模型；关系赋值经 `MinRelationLimit`/`MaxRelationLimit` 截断。
- [Clan](../Clan) / [Kingdom](../Kingdom) —— 多个实力与评分方法操作家族/王国对象；`Kingdom` 在吸收家族时调用 `IsAtConstantWar`。
- [Army](../Army) —— 计算军团每小时影响力时调用 `GetHourlyInfluenceAwardForRaidingEnemyVillage` / `GetHourlyInfluenceAwardForBesiegingEnemyFortification`。
- [DeclareWarDecision](../DeclareWarDecision) —— 评估是否提出/通过宣战决议时调用 `GetScoreOfDeclaringWar`、`GetDecisionMakingThreshold`。
- [FactionHelper](../../campaign-ext/FactionHelper) —— 判断家族能否加入/离开王国时调用 `IsAtConstantWar`、`GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom`、`MinimumRelationWithConversationCharacterToJoinKingdom`。
- [ChangeRelationAction](../../campaign-ext/ChangeRelationAction) —— 实际改关系前调用 `GetRelationIncreaseFactor`、`GetHeroesForEffectiveRelation`。
- [ChangeClanLeaderAction](../../campaign-ext/ChangeClanLeaderAction) —— 领袖死亡时调用 `GetRelationChangeAfterClanLeaderIsDead`。
- [DisbandArmyAction](../../campaign-ext/DisbandArmyAction) —— 解散军团时调用 `GetInfluenceCostOfDisbandingArmy`、`GetRelationCostOfDisbandingArmy`。
- [GainKingdomInfluenceAction](../../campaign-ext/GainKingdomInfluenceAction) —— 夺城影响力奖励取 `GetInfluenceAwardForSettlementCapturer`。
- [KillCharacterAction](../../campaign-ext/KillCharacterAction) —— 选新统治者时调用 `IsClanEligibleToBecomeRuler`、`GetClanStrength`。
- [BarterData](../BarterData) / [BarterGroup](../BarterGroup) —— 外交谈判初始化时调用 `GetBarterGroups` 枚举六类谈判组。
- [ExplainedNumber](../ExplainedNumber) —— `GetWarProgressScore`、各影响力成本的内部累加类型。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.DiplomacyModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类放松了宣战评分，但真正落定战争的是 [DeclareWarAction](../../campaign-ext/DeclareWarAction)，而宣战/缔和是由决议驱动的——只替换模型、却让调用方按旧假设处理关系与贡金，会出现“评分通过却流程不推进”或状态不一致。
- **参数方向颠倒**：`GetScoreOfDeclaringWar(factionDeclaresWar, factionDeclaredWar, …)`、`GetWarProgressScore(factionDeclaresWar, factionDeclaredWar, …)` 与 `GetDailyTributeToPay` 都依赖“宣战方/被宣战方”的方向；交换双方会产生看似合法但政治含义相反的结果，并影响贡金与和平判断。
- **把计算当成事务**：评分、成本、阈值和姿态都只返回结果。直接改关系/金币/影响力会跳过 `*Action` 的事件级联、政治状态和存档语义，可能让 UI、AI 和存档互相不一致。
- **原因输出被忽略**：`GetScoreOfDeclaringWar` / `GetScoreOfDeclaringPeaceForClan` 的 `includeReason` 为真时才保证 `out TextObject reason` 被填充；不要复用未初始化的 `TextObject`，也不要把原因文本当稳定 ID 存档。

## 成员说明

### 外交姿态与战争状态

- **`GetShallowDiplomaticStance(IFaction faction1, IFaction faction2)`**
  - 用途：对派系对做快速浅层判断，返回 `DiplomacyStance?`。默认实现：若一方是匪帮派系而另一方不是，返回 `War`；否则返回 `null`（表示没有可用显式判断）。`null` 不能当成 `Neutral`。
  - 副作用：无，纯判定。
  - 调用时机：[FactionManager](../FactionManager) 在创建/查询/移除 `StanceLink` 时调用；[KingdomManager](../KingdomManager) 在建国时据此过滤可建交的敌对派系。

- **`GetDefaultDiplomaticStance(IFaction faction1, IFaction faction2)`**
  - 用途：返回派系对的默认姿态——若 `IsAtConstantWar` 为真返回 `War`，否则 `Neutral`。这是规则结果，不是设置姿态的 setter。
  - 副作用：无。
  - 调用时机：[FactionManager](../FactionManager) 在 `AddStanceLink` 构造新的 `StanceLink` 时调用，决定初值是 `StanceType.War` 还是 `Neutral`。

- **`IsAtConstantWar(IFaction faction1, IFaction faction2)`**
  - 用途：判断双方是否处于“恒定战争”——即无法通过普通和平流程解除。默认实现：一方是 outlaw 且 minor 家族、另一方是王国且文化相同，或浅层姿态为 `War` 时返回 `true`。
  - 副作用：无。
  - 调用时机：[FactionHelper](../../campaign-ext/FactionHelper)、[Kingdom](../Kingdom)、[KingdomManager](../KingdomManager)、[ChangeKingdomAction](../../campaign-ext/ChangeKingdomAction)、[KillCharacterAction](../../campaign-ext/KillCharacterAction) 都用它筛选加入/合并条件与战争判定。

- **`MaxRelationLimit` / `MinRelationLimit`**（属性，返回 `int`）
  - 用途：关系值的全局上/下限，默认 `100` / `-100`。`Hero` 在写入关系时被它们截断。
  - 副作用：无。调用时机：关系赋值与 UI 解释均读取。

- **`MaxNeutralRelationLimit` / `MinNeutralRelationLimit`**（属性，返回 `int`）
  - 用途：非战争中性关系的边界，默认 `50` / `-50`；不要把它们当作所有关系值的上下限。`Hero.IsNeutralWithHero` / `IsFriend` / `IsEnemy` 用它们判断。
  - 副作用：无。调用时机：关系分类内部读取。

### 英雄关系计算

- **`GetEffectiveRelation(Hero hero1, Hero hero2)`**
  - 用途：返回考虑有效关系代理后的关系值：先经 `GetHeroesForEffectiveRelation` 取双方家族领袖，再叠加人格特质效果（`Honor`/`Valor`/`Mercy`），最后用 `MinRelationLimit`/`MaxRelationLimit` 截断。
  - 副作用：无。
  - 调用时机：[Hero](../Hero) 的 `GetEffectiveRelation` 实例方法直接转发；UI 与决策在需要外交语义关系时优先用它。

- **`GetBaseRelation(Hero hero1, Hero hero2)`**
  - 用途：返回不叠加有效关系修正的基础关系，即 `CharacterRelationManager.GetHeroRelation`。适合诊断与比较，不能当作最终关系。
  - 副作用：无。调用时机：[Hero](../Hero) 的 `GetBaseRelation` 实例方法转发。

- **`GetHeroesForEffectiveRelation(Hero hero1, Hero hero2, out Hero effectiveHero1, out Hero effectiveHero2)`**
  - 用途：为有效关系计算选出实际参与比较的两个英雄（通常取双方家族领袖；若领袖相同或为玩家随从组合则回退到原英雄），结果通过 `out` 参数返回。
  - 副作用：仅写入两个 `out` 参数，不改动任何世界状态。
  - 调用时机：[ChangeRelationAction](../../campaign-ext/ChangeRelationAction) 在改关系前用它取实际受影响的双方英雄。

- **`GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationValue)`**
  - 用途：按魅力专长/特性（如 `CharmRelationBonus`、`InBloom`、`YoungAndRespectful`）对拟议的关系变化量做缩放，返回调整后的因子。
  - 副作用：无。
  - 调用时机：[ChangeRelationAction](../../campaign-ext/ChangeRelationAction) 在应用关系变化前调用，决定最终增量。

- **`GetRelationChangeAfterClanLeaderIsDead(Hero deadLeader, Hero relationHero)`**
  - 用途：返回 Clan 领袖死亡后另一位英雄的关系变化，默认取双方当前关系的 `0.7` 倍。
  - 副作用：无。
  - 调用时机：仅 [ChangeClanLeaderAction](../../campaign-ext/ChangeClanLeaderAction) 在换领袖时调用，作为 `ChangeRelationAction` 的增量参数。

- **`GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(Hero supporter, bool hasHeroVotedAgainstOwner)`**
  - 用途：返回聚落所有权初步决议投票后的关系变化：投反对票扣 `20`（斯托吉亚文化特性再追加惩罚），投赞成加 `5`。
  - 副作用：无。
  - 调用时机：聚落所有权决议随后用关系 Action 应用该结果。

- **`GetCharmExperienceFromRelationGain(Hero hero, float relationChange, ChangeRelationAction.ChangeRelationDetail detail)`**
  - 用途：把关系增长与变更原因转换为魅力经验（基础 `20`，按是否为要人/派系领袖/使者等放大）。
  - 副作用：无，不直接给 Hero 加经验。
  - 调用时机：[ChangeRelationAction](../../campaign-ext/ChangeRelationAction) 在关系变化后调用，给相关英雄加魅力经验。

- **`MinimumRelationWithConversationCharacterToJoinKingdom`**（属性，返回 `int`）
  - 用途：对话或派系加入流程判断与领袖关系是否达到门槛，默认 `-10`。
  - 副作用：无。调用时机：[FactionHelper](../../campaign-ext/FactionHelper) 在判断玩家家族能否加入/成为佣兵时读取。

### 影响力、贡金与决议成本

- **`GetInfluenceAwardForSettlementCapturer(Settlement settlement)`**
  - 用途：返回攻占聚落者得到的影响力：城镇 `30`、城堡 `10`，并递归累加其附属村庄（各 `10`）。
  - 副作用：无，纯计算；真正的奖励由调用方应用。
  - 调用时机：[KingdomManager](../KingdomManager) 在夺城时传给 `GainKingdomInfluenceAction.ApplyForCapturingEnemySettlement`。

- **`GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty)` / `GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty)` / `GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty)`**
  - 用途：分别返回袭击敌方村庄、围攻敌方堡垒、作为军团成员时每小时获得的影响力（基于参战人数平方根等公式）。
  - 副作用：无，纯计算；由地图/Campaign tick 消费，不能在读取时重复发奖。
  - 调用时机：[Army](../Army) 在每小时结算影响力时调用前两者；军团成员影响力由对应 tick 调用后者。

- **`GetInfluenceCostOfProposingWar(Clan proposingClan)` / `GetInfluenceCostOfProposingPeace(Clan proposingClan)`**
  - 用途：返回提出战争（`200` 起）或和平（`100` 起）决议所需的影响力成本，并叠加 `WarTax` 等政策与 `Charm.Firebrand` 特性修正。
  - 副作用：无，只提供成本。
  - 调用时机：决议成功后才由决议流程扣除影响力。

- **`GetInfluenceCostOfSupportingClan()` / `GetInfluenceCostOfExpellingClan(Clan proposingClan)` / `GetInfluenceCostOfAnnexation(Clan proposingClan)` / `GetInfluenceCostOfPolicyProposalAndDisavowal(Clan proposerClan)`**
  - 用途：分别返回支持家族（`50`）、驱逐家族（`200` 起）、吞并聚落（`200` 起）、提议/废除政策（`100` 起）的影响力成本，均经特性修正。
  - 副作用：无。
  - 调用时机：对应王国决议负责应用与扣除。

- **`GetInfluenceCostOfChangingLeaderOfArmy()` / `GetInfluenceCostOfDisbandingArmy()` / `GetRelationCostOfDisbandingArmy(bool isLeaderParty)` / `GetInfluenceCostOfAbandoningArmy()`**
  - 用途：返回军团换领袖（`30`）、解散军团（`30`，玩家统治家族减半）、解散关系代价（领袖 `-4`、否则 `-1`）、离开军团（`2`）的成本。
  - 副作用：无。
  - 调用时机：[DisbandArmyAction](../../campaign-ext/DisbandArmyAction) 在确认选项后调用并扣除。

- **`GetDailyTributeToPay(Clan factionToPay, Clan factionToReceive, out int tributeDurationInDays)`**
  - 用途：计算战败方向获胜方每日支付的贡金与持续天数（综合和平评分、决策阈值、双方战争进度差与繁荣度），结果通过 `out` 返回天数。
  - 副作用：仅写入 `out` 参数，不改动金币或贡金协议。
  - 调用时机：和平谈判/缔结时由 [MakePeaceAction](../../campaign-ext/MakePeaceAction) 相关流程调用。

- **`DenarsToInfluence()`**（属性，返回 `float`）
  - 用途：提供金币到影响力的换算系数，默认 `0.002f`；常用于决议 merit 计算，不是把 denar 自动转账户的写入操作。
  - 副作用：无。

- **`GetDecisionMakingThreshold(IFaction consideringFaction)`**
  - 用途：返回派系决策时使用的阈值，默认取 `GetValueOfSettlementsForFaction(consideringFaction) / 6`。
  - 副作用：无。
  - 调用时机：[DeclareWarDecision](../DeclareWarDecision)、`IsPeaceSuitable` 用它与评分比较。

### 王国、Clan 与外交评分

- **`GetScoreOfDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar, Clan evaluatingClan, out TextObject reason, bool includeReason = false)`**
  - 用途：以宣战方、被宣战方和评估 Clan 计算宣战评分。默认实现：若宣战方总实力 `<= 500` 或作战党派 `< 2` 返回 `-10000000`；否则综合利益、暴露度、联盟因子、贸易协定惩罚（`WarDeclarationScorePenaltyAgainstTradePartners`）、风险与关系得出。`includeReason` 为真时填充原因文本。它不调用 `DeclareWarAction`。
  - 副作用：无，纯计算；可能输出 `reason`。
  - 调用时机：[DeclareWarDecision](../DeclareWarDecision) 评估是否提出/通过宣战决议时调用。

- **`GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)` / `GetScoreOfDeclaringPeaceForClan(IFaction, IFaction, Clan, out TextObject, bool)`**
  - 用途：计算双方结束战争的基础和平评分（从某 Clan 立场评估的变体还能输出原因）。基于暴露度、利益/风险、战争规模、同文化城镇与联盟因子综合取负。不发起 `MakePeaceAction`。
  - 副作用：无。
  - 调用时机：和平决议与谈判评估时调用；`IsPeaceSuitable` 复用其结果。

- **`IsPeaceSuitable(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`**
  - 用途：判断当前双方是否适合和平——任一方被消灭、或（和平收益不足且战争已持续 `< 150` 天且差距超过阈值）时返回 `false`，否则 `true`。这是资格/规则判断，不是和平事务。
  - 副作用：无。
  - 调用时机：和平提议与 AI 决策在决定是否推进和平时调用。

- **`GetWarProgressScore(IFaction factionDeclaresWar, IFaction factionDeclaredWar, bool includeDescriptions = false)`**
  - 用途：返回包含可选说明项的战争进度 `ExplainedNumber`，累加击杀、攻城（城镇/城堡）、袭击四类贡献，并 `LimitMin(0)`、`LimitMax(750)`。进度方向按宣战方/被宣战方传入，反转会改变贡金与和平判断。
  - 副作用：无。
  - 调用时机：和平评分、`GetDailyTributeToPay` 与风险调整内部调用。

- **`GetScoreOfClanToJoinKingdom(Clan clan, Kingdom kingdom)` / `GetScoreOfClanToLeaveKingdom(Clan clan, Kingdom kingdom)` / `GetScoreOfKingdomToGetClan(Kingdom kingdom, Clan clan)` / `GetScoreOfKingdomToSackClan(Kingdom kingdom, Clan clan)`**
  - 用途：从 Clan 或 Kingdom 角度评估接纳/驱逐家族的评分；方向很重要，交换参数会得到政治含义相反的结果。不执行 `ChangeKingdom`。
  - 副作用：无。
  - 调用时机：[FactionHelper](../../campaign-ext/FactionHelper) 与加入王国流程调用。

- **`GetScoreOfMercenaryToJoinKingdom` / `GetScoreOfMercenaryToLeaveKingdom` / `GetScoreOfKingdomToHireMercenary` / `GetScoreOfKingdomToSackMercenary`**
  - 用途：计算佣兵家族加入/离开王国，或王国雇佣/解雇佣兵的评分。佣兵状态与所属关系仍由 Barter/Action 流程处理。
  - 副作用：无。
  - 调用时机：佣兵招募与外交谈判评估时调用。

- **`GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(Kingdom kingdomToJoin)`**
  - 用途：返回加入王国时可忽略的非互相战争实力阈值，默认取 `kingdomToJoin.CurrentTotalStrength * 0.05f`。
  - 副作用：无。
  - 调用时机：[FactionHelper](../../campaign-ext/FactionHelper) 筛选加入条件时调用。

- **`GetClanStrength(Clan clan)` / `GetHeroCommandingStrengthForClan(Hero hero)` / `GetHeroGoverningStrengthForClan(Hero hero)`**
  - 用途：`GetClanStrength` 汇总家族英雄领军实力 + 影响力 `*1.2` + 聚落数 `*4`；领军实力按战术/管理/贸易/领导专长与金币、家族关系、是否领袖/总督等加权；治理实力按治理相关专长、配偶/血亲关系与金币加权。不能等同于某支部队人数。
  - 副作用：无。
  - 调用时机：[KillCharacterAction](../../campaign-ext/KillCharacterAction) 选新统治者时调用 `GetClanStrength`；实力评分内部互相调用。

- **`GetValueOfHeroForFaction(Hero examinedHero, IFaction targetFaction, bool forMarriage = false)`**
  - 用途：返回派系看待某英雄的价值，默认取领军实力 `* 10`；不执行婚姻或派系变更。
  - 副作用：无。
  - 调用时机：家族/王国价值与外交评分内部调用。

- **`GetValueOfSettlementsForFaction(IFaction faction)`**
  - 用途：估算派系拥有聚落的价值（城镇 `2000`/城堡 `1000` 基础 + 繁荣度 `*0.33` + 村庄 `*300`，再 `*50` 并过 `AdjustValueOfSettlements` 平滑）。用于战争/和平与联盟评分，不是给 Settlement 设值。
  - 副作用：无。
  - 调用时机：和平/战争评分、`GetDecisionMakingThreshold`、`GetDailyTributeToPay` 内部调用。

- **`CanSettlementBeGifted(Settlement settlement)`**
  - 用途：读取当前规则是否允许赠送聚落（城镇且所有者已分配才允许，否则 `false`）。真正的转让仍需对应决议或 Action。
  - 副作用：无。
  - 调用时机：赠城谈判与 [KingdomManager](../KingdomManager) 评估时用。

- **`IsClanEligibleToBecomeRuler(Clan clan)`**
  - 用途：判断 Clan 是否符合成为统治者的规则：未被消灭、领袖存活且非佣兵服务。
  - 副作用：无。
  - 调用时机：[KillCharacterAction](../../campaign-ext/KillCharacterAction) 在随机选新统治者时调用。

### 其他规则入口

- **`GetNotificationColor(ChatNotificationType notificationType)`**
  - 用途：返回外交/聊天通知使用的颜色值（`uint`），按通知类型映射不同 RGB。只影响通知表现，不改变外交状态。
  - 副作用：无。
  - 调用时机：通知生成时调用。

- **`GetScoreOfLettingPartyGo(MobileParty party, MobileParty partyToLetGo)`**
  - 用途：评估放走某个党派的外交/战术价值，综合双方物品与成员价值、英雄赎金、贸易金币与是否包围定居点得出分数。它不释放俘虏、不结束地图事件。
  - 副作用：无。
  - 调用时机：释放俘虏的谈判/决策流程调用。

- **`GetBarterGroups()`**
  - 用途：返回当前外交 Barter 分组集合（金币、物品、俘虏、领地、其他、默认共六类）。Barter 初始化会枚举它们。不要在运行中返回带已销毁派系引用的缓存集合。
  - 副作用：无。
  - 调用时机：[BarterData](../BarterData) 在构造时调用 `GetBarterGroups().ToList()`。

- **`GiftingTownRelationshipBonus` / `GiftingCastleRelationshipBonus`**（属性，返回 `int`）
  - 用途：赠送城镇（`20`）或城堡（`10`）时的关系加成输入；真正的所有权与关系变更由相应 Action/决议完成。
  - 副作用：无。调用时机：[KingdomManager](../KingdomManager) 赠城时读取。

- **`WarDeclarationScorePenaltyAgainstTradePartners`**（属性，返回 `float`）
  - 用途：对贸易伙伴宣战的评分惩罚因子，默认 `0.7f`。替换它会影响战争决策与谈判，不会自动撤销贸易协议。
  - 副作用：无。调用时机：`GetTradeAgreementFactor` 内部读取。

## 示例

评估一个王国是否值得向另一个王国宣战，并拿到原因文本：

```csharp
IFaction declareWar = Kingdom.All.GetRandomElement();
IFaction declaredWar = Kingdom.All.GetRandomElement();
if (declareWar != declaredWar && !declareWar.IsAtWarWith(declaredWar))
{
    TextObject reason;
    float warScore = Campaign.Current.Models.DiplomacyModel
        .GetScoreOfDeclaringWar(declareWar, declaredWar, declareWar.Leader.Clan, out reason, true);
    // 模型只负责“评分”，真正开战请走 DeclareWarAction，且需先完成决议/重复战争检查
}
```

读取某场战争的进度与战败方应付的每日贡金：

```csharp
ExplainedNumber progress = Campaign.Current.Models.DiplomacyModel
    .GetWarProgressScore(factionDeclaresWar, factionDeclaredWar, includeDescriptions: false);
float progressValue = progress.ResultNumber;

int durationInDays;
int dailyTribute = Campaign.Current.Models.DiplomacyModel
    .GetDailyTributeToPay(factionToPay, factionToReceive, out durationInDays);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Clan](../Clan) · [Kingdom](../Kingdom) · [Hero](../Hero) · [Settlement](../Settlement) · [MobileParty](../MobileParty) · [FactionManager](../FactionManager) · [KingdomManager](../KingdomManager) · [Army](../Army) · [DeclareWarDecision](../DeclareWarDecision) · [FactionHelper](../../campaign-ext/FactionHelper) · [BarterData](../BarterData) · [BarterGroup](../BarterGroup) · [ExplainedNumber](../ExplainedNumber) · [AllianceModel](../AllianceModel) · [ClanTierModel](../ClanTierModel) · [MinorFactionsModel](../MinorFactionsModel) · [DefaultDiplomacyModel](../DefaultDiplomacyModel) · [CampaignGameStarter](../CampaignGameStarter) · [DeclareWarAction](../../campaign-ext/DeclareWarAction) · [MakePeaceAction](../../campaign-ext/MakePeaceAction) · [ChangeRelationAction](../../campaign-ext/ChangeRelationAction) · [ChangeKingdomAction](../../campaign-ext/ChangeKingdomAction) · [ChangeClanLeaderAction](../../campaign-ext/ChangeClanLeaderAction) · [DisbandArmyAction](../../campaign-ext/DisbandArmyAction) · [GainKingdomInfluenceAction](../../campaign-ext/GainKingdomInfluenceAction) · [KillCharacterAction](../../campaign-ext/KillCharacterAction)
