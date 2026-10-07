---
title: "StoryMode API — v1.5.3"
description: "StoryMode 桶：主线剧本、章节推进与剧本专属对话/任务类型。下面的清单是本目录的机械索引，内容由目录里有哪些文件唯一决定。"
---

# StoryMode API

本桶收录 **StoryMode（主线）** 相关的类型：主线剧本与章节推进、`CampaignStoryMode` 这类剧本状态载体，
以及大量只在主线流程里出现的任务、对话与行为类型（例如 `MainStoryLine`、`LordConversationsStoryModeBehavior`）。

## 怎么用

- 这些类型多数**只在主线章节推进时被构造**，不是 mod 可以直接实例化的通用组件。
- 本版本的文档树只建了少数几个桶，本桶目前可用的同级页只有 [`../localization/`](../localization/)；
  通用机制类页面在这一版尚未建立，不要按桶名推断它们存在。
- 想回到本层入口，看 [`../`](../)。

<!-- BEGIN SECTION INDEX -->
> 共 92 个子页

### W

- [WeakenEmpireQuest](./WeakenEmpireQuest)
- [WeakenEmpireQuestBehavior](./WeakenEmpireQuestBehavior)
- [WeakenEmpireQuestBehaviorTypeDefiner](./WeakenEmpireQuestBehaviorTypeDefiner)

### V

- [VillagersInNeed](./VillagersInNeed)

### T

- [TalkToTheHeadmanTutorialQuest](./TalkToTheHeadmanTutorialQuest)
- [ThirdPhase](./ThirdPhase)
- [ThirdPhaseCampaignBehavior](./ThirdPhaseCampaignBehavior)
- [TrainingField](./TrainingField)
- [TrainingFieldCampaignBehavior](./TrainingFieldCampaignBehavior)
- [TrainingFieldEncounter](./TrainingFieldEncounter)
- [TravelToVillageTutorialQuest](./TravelToVillageTutorialQuest)
- [TutorialPhase](./TutorialPhase)
- [TutorialPhaseCampaignBehavior](./TutorialPhaseCampaignBehavior)
- [TutorialQuestPhase](./TutorialQuestPhase)

### S

- [SaveableStoryModeTypeDefiner](./SaveableStoryModeTypeDefiner)
- [SecondPhase](./SecondPhase)
- [SecondPhaseCampaignBehavior](./SecondPhaseCampaignBehavior)
- [StoryModeAgentDecideKilledOrUnconsciousModel](./StoryModeAgentDecideKilledOrUnconsciousModel)
- [StoryModeBanditDensityModel](./StoryModeBanditDensityModel)
- [StoryModeBanditSpawnCampaignBehavior](./StoryModeBanditSpawnCampaignBehavior)
- [StoryModeBannerEffects](./StoryModeBannerEffects)
- [StoryModeBannerItemModel](./StoryModeBannerItemModel)
- [StoryModeBattleRewardModel](./StoryModeBattleRewardModel)
- [StoryModeCharacterCreationCampaignBehavior](./StoryModeCharacterCreationCampaignBehavior)
- [StoryModeCheats](./StoryModeCheats)
- [StoryModeCombatXpModel](./StoryModeCombatXpModel)
- [StoryModeCutsceneSelectionModel](./StoryModeCutsceneSelectionModel)
- [StoryModeData](./StoryModeData)
- [StoryModeEncounterGameMenuModel](./StoryModeEncounterGameMenuModel)
- [StoryModeEvents](./StoryModeEvents)
- [StoryModeGenericXpModel](./StoryModeGenericXpModel)
- [StoryModeHelpers](./StoryModeHelpers)
- [StoryModeHeroDeathProbabilityCalculationModel](./StoryModeHeroDeathProbabilityCalculationModel)
- [StoryModeHeroes](./StoryModeHeroes)
- [StoryModeIncidentModel](./StoryModeIncidentModel)
- [StoryModeKingdomDecisionPermissionModel](./StoryModeKingdomDecisionPermissionModel)
- [StoryModeManager](./StoryModeManager)
- [StoryModeNotableSpawnModel](./StoryModeNotableSpawnModel)
- [StoryModePartySizeLimitModel](./StoryModePartySizeLimitModel)
- [StoryModePartyWageModel](./StoryModePartyWageModel)
- [StoryModePrisonerRecruitmentCalculationModel](./StoryModePrisonerRecruitmentCalculationModel)
- [StoryModeQuestBase](./StoryModeQuestBase)
- [StoryModeSubModule](./StoryModeSubModule)
- [StoryModeTargetScoreCalculatingModel](./StoryModeTargetScoreCalculatingModel)
- [StoryModeTroopSupplierProbabilityModel](./StoryModeTroopSupplierProbabilityModel)
- [StoryModeTutorialBoxCampaignBehavior](./StoryModeTutorialBoxCampaignBehavior)
- [StoryModeVoiceOverModel](./StoryModeVoiceOverModel)
- [SupportKingdomQuest](./SupportKingdomQuest)

### R

- [RebuildPlayerClanQuest](./RebuildPlayerClanQuest)
- [RebuildPlayerClanQuestBehaviorTypeDefiner](./RebuildPlayerClanQuestBehaviorTypeDefiner)
- [RecruitTroopsTutorialQuest](./RecruitTroopsTutorialQuest)
- [RecruitTroopTutorialQuestTask](./RecruitTroopTutorialQuestTask)
- [RescueFamilyQuest](./RescueFamilyQuest)
- [RescueFamilyQuestBehavior](./RescueFamilyQuestBehavior)

### P

- [PurchaseGrainTutorialQuest](./PurchaseGrainTutorialQuest)
- [PurchaseItemTutorialQuestTask](./PurchaseItemTutorialQuestTask)

### M

- [MainStoryLine](./MainStoryLine)
- [MainStorylineCampaignBehavior](./MainStorylineCampaignBehavior)
- [MainStoryLineSide](./MainStoryLineSide)
- [MeetWithArzagosQuest](./MeetWithArzagosQuest)
- [MeetWithIstianaQuest](./MeetWithIstianaQuest)
- [MetaDataExtensions](./MetaDataExtensions)

### L

- [LocateAndRescueTravellerTutorialQuest](./LocateAndRescueTravellerTutorialQuest)
- [LordConversationsStoryModeBehavior](./LordConversationsStoryModeBehavior)

### I

- [IsArzagosTag](./IsArzagosTag)
- [IsIstianaTag](./IsIstianaTag)
- [IsStoryModeMentorTag](./IsStoryModeMentorTag)
- [IstianasBannerPieceQuest](./IstianasBannerPieceQuest)

### H

- [HideoutBattleEndState](./HideoutBattleEndState)
- [HideoutBattleEndState__TutorialPhase](./HideoutBattleEndState__TutorialPhase)

### F

- [FindHideoutTutorialQuest](./FindHideoutTutorialQuest)
- [FirstPhase](./FirstPhase)
- [FirstPhaseCampaignBehavior](./FirstPhaseCampaignBehavior)

### E

- [Extensions](./Extensions)

### D

- [DefeatTheConspiracyQuest](./DefeatTheConspiracyQuest)
- [DefeatTheConspiracyQuestBehavior](./DefeatTheConspiracyQuestBehavior)
- [DefeatTheConspiracyQuestBehaviorTypeDefiner](./DefeatTheConspiracyQuestBehaviorTypeDefiner)
- [DestroyRaidersConspiracyQuest](./DestroyRaidersConspiracyQuest)
- [DisruptSupplyLinesConspiracyQuest](./DisruptSupplyLinesConspiracyQuest)

### C

- [CampaignStoryMode](./CampaignStoryMode)
- [ConspiracyBaseOfOperationsDiscoveredConspiracyQuest](./ConspiracyBaseOfOperationsDiscoveredConspiracyQuest)
- [ConspiracyProgressQuest](./ConspiracyProgressQuest)
- [ConspiracyQuestBase](./ConspiracyQuestBase)
- [ConspiracyQuestMapNotification](./ConspiracyQuestMapNotification)
- [CreateKingdomQuest](./CreateKingdomQuest)

### B

- [BannerInvestigationQuest](./BannerInvestigationQuest)

### A

- [AchievementsCampaignBehavior](./AchievementsCampaignBehavior)
- [ArzagosBannerPieceQuest](./ArzagosBannerPieceQuest)
- [AssembleEmpireQuest](./AssembleEmpireQuest)
- [AssembleEmpireQuestBehavior](./AssembleEmpireQuestBehavior)
- [AssembleEmpireQuestBehaviorTypeDefiner](./AssembleEmpireQuestBehaviorTypeDefiner)
- [AssembleTheBannerQuest](./AssembleTheBannerQuest)

<!-- END SECTION INDEX -->
