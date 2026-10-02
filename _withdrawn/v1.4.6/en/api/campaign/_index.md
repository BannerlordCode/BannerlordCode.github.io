---
<!-- generated-by: tools/_v146_stubs.mjs -->
title: "campaign bucket index"
description: "campaign: canonical bucket with 596 public types. The persistent campaign world: `Campaign`, `Hero`, `Clan`, `Kingdom`, `Settlement`, `MobileParty`, plus the `CampaignEvents` / `CampaignGameStarter` behaviour surface. Everything in the `TaleWorlds.CampaignSystem` root namespace lands here."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# campaign bucket index

**Bucket:** `campaign`
**Types:** 596
**Routing rule:** `rule:TaleWorlds.CampaignSystem`

## Bucket Tour

The persistent campaign world: `Campaign`, `Hero`, `Clan`, `Kingdom`, `Settlement`, `MobileParty`, plus the `CampaignEvents` / `CampaignGameStarter` behaviour surface. Everything in the `TaleWorlds.CampaignSystem` root namespace lands here.

> Every page route carries a trailing slash: same-bucket types are `./<Type>`, cross-bucket is `../../<bucket>/<Type>`, the parent index is `../`.

- - [↑ API reference](..//) · - [↑ version home](../..//)

> 7 further types are owned by the deep-writing workers and their pages have not landed yet, so they are listed by name only: Campaign, CampaignBehaviorBase, CampaignEvents, CampaignGameStarter, Hero, IDataStore, Settlement.

## Complete Class Catalog

### A

- [AcceptCallToWarAgreementDecision](./AcceptCallToWarAgreementDecision) — `TaleWorlds.CampaignSystem.Election` · class · exposed 24
- [AcceptCallToWarOfferMapNotification](./AcceptCallToWarOfferMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 9
- [AccompanyingCharacter](./AccompanyingCharacter) — `TaleWorlds.CampaignSystem.Settlements.Locations` · class · exposed 8
- [ActionNotes](./ActionNotes) — `TaleWorlds.CampaignSystem` · enum · exposed 28
- [AddCompanionAction](./AddCompanionAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [AddHeroToPartyAction](./AddHeroToPartyAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [AdoptHeroAction](./AdoptHeroAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [AiBehavior](./AiBehavior) — `TaleWorlds.CampaignSystem.Party` · enum · exposed 19
- [AIBehaviorData](./AIBehaviorData) — `TaleWorlds.CampaignSystem` · struct · exposed 8
- [Alley](./Alley) — `TaleWorlds.CampaignSystem.Settlements` · class · exposed 11
- [AlleyLeaderDiedMapNotification](./AlleyLeaderDiedMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 5
- [AlleyUnderAttackMapNotification](./AlleyUnderAttackMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 5
- [AllianceOfferMapNotification](./AllianceOfferMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 8
- [AnchorPoint](./AnchorPoint) — `TaleWorlds.CampaignSystem.Naval` · class · exposed 27
- [AntiEmpireConspiracyBeginsSceneNotificationItem](./AntiEmpireConspiracyBeginsSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 2
- [ApplyHeirSelectionAction](./ApplyHeirSelectionAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 2
- [Army](./Army) — `TaleWorlds.CampaignSystem` · class · exposed 43
- [ArmyCreationLogEntry](./ArmyCreationLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 7
- [ArmyCreationMapNotification](./ArmyCreationMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 5
- [ArmyDispersionLogEntry](./ArmyDispersionLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 10
- [ArmyDispersionMapNotification](./ArmyDispersionMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 6
- [ArmyDispersionReasonEnumResolver](./ArmyDispersionReasonEnumResolver) — `TaleWorlds.CampaignSystem.SaveCompability` · class · exposed 1
- [AtmosphereGrid](./AtmosphereGrid) — `TaleWorlds.CampaignSystem` · class · exposed 2
- [Attributes](./Attributes) — `TaleWorlds.CampaignSystem.Extensions` · class · exposed 1

### B

- [BanditPartyComponent](./BanditPartyComponent) — `TaleWorlds.CampaignSystem.Party.PartyComponents` · class · exposed 17
- [BannerEditorState](./BannerEditorState) — `TaleWorlds.CampaignSystem.GameState` · class · exposed 7
- [BarberState](./BarberState) — `TaleWorlds.CampaignSystem.GameState` · class · exposed 4
- [Barterable](./Barterable) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables` · class · exposed 25
- [BarterData](./BarterData) — `TaleWorlds.CampaignSystem.BarterSystem` · class · exposed 10
- [BarterGroup](./BarterGroup) — `TaleWorlds.CampaignSystem.BarterSystem` · class · exposed 1
- [BarterManager](./BarterManager) — `TaleWorlds.CampaignSystem.BarterSystem` · class · exposed 26
- [BarterResult](./BarterResult) — `TaleWorlds.CampaignSystem.BarterSystem` · class · exposed 3
- [BattleResultPartyData](./BattleResultPartyData) — `TaleWorlds.CampaignSystem` · struct · exposed 1
- [BattleSimulation](./BattleSimulation) — `TaleWorlds.CampaignSystem` · class · exposed 19
- [BattleStartedLogEntry](./BattleStartedLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 9
- [BattleTypeEnumResolver](./BattleTypeEnumResolver) — `TaleWorlds.CampaignSystem.SaveCompability` · class · exposed 1
- [BecomeKingSceneNotificationItem](./BecomeKingSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 6
- [BeHostileAction](./BeHostileAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 4
- [BesiegerCamp](./BesiegerCamp) — `TaleWorlds.CampaignSystem.Siege` · class · exposed 28
- [BesiegeSettlementLogEntry](./BesiegeSettlementLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 9
- [BlockadeBattleMapEvent](./BlockadeBattleMapEvent) — `TaleWorlds.CampaignSystem.MapEvents` · class · exposed 6
- [BreakInOutBesiegedSettlementAction](./BreakInOutBesiegedSettlementAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 2
- [BribeGuardsAction](./BribeGuardsAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [Building](./Building) — `TaleWorlds.CampaignSystem.Settlements.Buildings` · class · exposed 15
- [BuildingEffectEnum](./BuildingEffectEnum) — `TaleWorlds.CampaignSystem.Settlements.Buildings` · enum · exposed 30
- [BuildingEffectIncrementType](./BuildingEffectIncrementType) — `TaleWorlds.CampaignSystem.Settlements.Buildings` · enum · exposed 2
- [BuildingType](./BuildingType) — `TaleWorlds.CampaignSystem.Settlements.Buildings` · class · exposed 18

### C

- [CampaignBattleResult](./CampaignBattleResult) — `TaleWorlds.CampaignSystem.Encounters` · class · exposed 7
- [CampaignCheats](./CampaignCheats) — `TaleWorlds.CampaignSystem` · class · exposed 98
- [CampaignData](./CampaignData) — `TaleWorlds.CampaignSystem` · class · exposed 166
- [CampaignEntityComponent](./CampaignEntityComponent) — `TaleWorlds.CampaignSystem` · class · exposed 3
- [CampaignEventDispatcher](./CampaignEventDispatcher) — `TaleWorlds.CampaignSystem` · class · exposed 277
- [CampaignEventReceiver](./CampaignEventReceiver) — `TaleWorlds.CampaignSystem` · class · exposed 277
- [CampaignGameMode](./CampaignGameMode) — `TaleWorlds.CampaignSystem` · enum · exposed 3
- [CampaignInformationManager](./CampaignInformationManager) — `TaleWorlds.CampaignSystem` · class · exposed 17
- [CampaignMission](./CampaignMission) — `TaleWorlds.CampaignSystem` · class · exposed 27
- [CampaignObjectBase](./CampaignObjectBase) — `TaleWorlds.CampaignSystem` · class · exposed 1
- [CampaignObjectManager](./CampaignObjectManager) — `TaleWorlds.CampaignSystem` · class · exposed 22
- [CampaignOptions](./CampaignOptions) — `TaleWorlds.CampaignSystem` · class · exposed 15
- [CampaignPeriodicEventManager](./CampaignPeriodicEventManager) — `TaleWorlds.CampaignSystem` · class · exposed 2
- [CampaignSceneNotificationHelper](./CampaignSceneNotificationHelper) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 12
- [CampaignTickCacheDataStore](./CampaignTickCacheDataStore) — `TaleWorlds.CampaignSystem` · class · exposed 0
- [CampaignTime](./CampaignTime) — `TaleWorlds.CampaignSystem` · struct · exposed 73
- [CampaignTimeControlMode](./CampaignTimeControlMode) — `TaleWorlds.CampaignSystem` · enum · exposed 7
- [CampaignTutorial](./CampaignTutorial) — `TaleWorlds.CampaignSystem` · class · exposed 3
- [CampaignVec2](./CampaignVec2) — `TaleWorlds.CampaignSystem` · struct · exposed 39
- [CanTalkToHeroDelegate](./CanTalkToHeroDelegate) — `TaleWorlds.CampaignSystem.Party` · delegate · exposed 0
- [CanUseDoor](./CanUseDoor) — `TaleWorlds.CampaignSystem.Settlements.Locations` · delegate · exposed 0
- [CaravanPartyComponent](./CaravanPartyComponent) — `TaleWorlds.CampaignSystem.Party.PartyComponents` · class · exposed 24
- [CastleEncounter](./CastleEncounter) — `TaleWorlds.CampaignSystem.Encounters` · class · exposed 2
- [ChangeAlleyOwnerLogEntry](./ChangeAlleyOwnerLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 8
- [ChangeClanInfluenceAction](./ChangeClanInfluenceAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [ChangeClanLeaderAction](./ChangeClanLeaderAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 2
- [ChangeCrimeRatingAction](./ChangeCrimeRatingAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [ChangeGovernorAction](./ChangeGovernorAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 3
- [ChangeKingdomAction](./ChangeKingdomAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 16
- [ChangeOwnerOfSettlementAction](./ChangeOwnerOfSettlementAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 10
- [ChangeOwnerOfWorkshopAction](./ChangeOwnerOfWorkshopAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 5
- [ChangePlayerCharacterAction](./ChangePlayerCharacterAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [ChangeProductionTypeOfWorkshopAction](./ChangeProductionTypeOfWorkshopAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [ChangeRelationAction](./ChangeRelationAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 5
- [ChangeRomanticStateAction](./ChangeRomanticStateAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [ChangeRomanticStateLogEntry](./ChangeRomanticStateLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 5
- [ChangeRulingClanAction](./ChangeRulingClanAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [ChangeSettlementOwnerLogEntry](./ChangeSettlementOwnerLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 9
- [ChangeShipOwnerAction](./ChangeShipOwnerAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 7
- [ChangeVillageStateAction](./ChangeVillageStateAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 5
- [CharacterAttributesResolver](./CharacterAttributesResolver) — `TaleWorlds.CampaignSystem.SaveCompability` · class · exposed 4
- [CharacterBecameFugitiveLogEntry](./CharacterBecameFugitiveLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 6
- [CharacterBornLogEntry](./CharacterBornLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 9
- [CharacterCreationBannerEditorStage](./CharacterCreationBannerEditorStage) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · class · exposed 0
- [CharacterCreationClanNamingStage](./CharacterCreationClanNamingStage) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · class · exposed 0
- [CharacterCreationContent](./CharacterCreationContent) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · class · exposed 27
- [CharacterCreationCultureStage](./CharacterCreationCultureStage) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · class · exposed 0
- [CharacterCreationFaceGeneratorStage](./CharacterCreationFaceGeneratorStage) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · class · exposed 0
- [CharacterCreationManager](./CharacterCreationManager) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · class · exposed 29
- [CharacterCreationNarrativeStage](./CharacterCreationNarrativeStage) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · class · exposed 0
- [CharacterCreationOptionsStage](./CharacterCreationOptionsStage) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · class · exposed 0
- [CharacterCreationReviewStage](./CharacterCreationReviewStage) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · class · exposed 0
- [CharacterCreationStageBase](./CharacterCreationStageBase) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · class · exposed 2
- [CharacterCreationState](./CharacterCreationState) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · class · exposed 8
- [CharacterData](./CharacterData) — `TaleWorlds.CampaignSystem` · class · exposed 7
- [CharacterDeveloperState](./CharacterDeveloperState) — `TaleWorlds.CampaignSystem.GameState` · class · exposed 5
- [CharacterInsultedLogEntry](./CharacterInsultedLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 11
- [CharacterKilledLogEntry](./CharacterKilledLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 12
- [CharacterMarriedLogEntry](./CharacterMarriedLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 9
- [CharacterObject](./CharacterObject) — `TaleWorlds.CampaignSystem` · class · exposed 82
- [CharacterPerksResolver](./CharacterPerksResolver) — `TaleWorlds.CampaignSystem.SaveCompability` · class · exposed 4
- [CharacterRelationManager](./CharacterRelationManager) — `TaleWorlds.CampaignSystem` · class · exposed 7
- [CharacterRestrictionFlags](./CharacterRestrictionFlags) — `TaleWorlds.CampaignSystem` · enum · exposed 3
- [CharacterTraitsResolver](./CharacterTraitsResolver) — `TaleWorlds.CampaignSystem.SaveCompability` · class · exposed 4
- [ChatNotificationType](./ChatNotificationType) — `TaleWorlds.CampaignSystem.LogEntries` · enum · exposed 14
- [ChildbirthLogEntry](./ChildbirthLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 12
- [ChildBornMapNotification](./ChildBornMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 6
- [ClaimSettlementAction](./ClaimSettlementAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [Clan](./Clan) — `TaleWorlds.CampaignSystem` · class · exposed 104
- [ClanChangeKingdomLogEntry](./ClanChangeKingdomLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 9
- [ClanDestroyedLogEntry](./ClanDestroyedLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 6
- [ClanLeaderChangedLogEntry](./ClanLeaderChangedLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 5
- [ClanMemberPeaceDeathSceneNotificationItem](./ClanMemberPeaceDeathSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 7
- [ClanMemberWarDeathSceneNotificationItem](./ClanMemberWarDeathSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 6
- [ClanState](./ClanState) — `TaleWorlds.CampaignSystem.GameState` · class · exposed 13
- [CommonAreaFightLogEntry](./CommonAreaFightLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 5
- [Concept](./Concept) — `TaleWorlds.CampaignSystem` · class · exposed 11
- [ConversationContext](./ConversationContext) — `TaleWorlds.CampaignSystem` · enum · exposed 5
- [ConversationSceneData](./ConversationSceneData) — `TaleWorlds.CampaignSystem` · struct · exposed 5
- [CraftingOrder](./CraftingOrder) — `TaleWorlds.CampaignSystem.CraftingSystem` · class · exposed 13
- [CraftingState](./CraftingState) — `TaleWorlds.CampaignSystem.GameState` · class · exposed 4
- [CreateLocationCharacterDelegate](./CreateLocationCharacterDelegate) — `TaleWorlds.CampaignSystem.Settlements.Locations` · delegate · exposed 0
- [CultureObject](./CultureObject) — `TaleWorlds.CampaignSystem` · class · exposed 104
- [CultureTrait](./CultureTrait) — `TaleWorlds.CampaignSystem` · class · exposed 3
- [CustomPartyComponent](./CustomPartyComponent) — `TaleWorlds.CampaignSystem.Party.PartyComponents` · class · exposed 20

### D

- [DeathMapNotification](./DeathMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 8
- [DeathOldAgeSceneNotificationItem](./DeathOldAgeSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 6
- [DecisionOutcome](./DecisionOutcome) — `TaleWorlds.CampaignSystem.Election` · class · exposed 16
- [DeclareDragonBannerSceneNotificationItem](./DeclareDragonBannerSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 6
- [DeclareWarAction](./DeclareWarAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 10
- [DeclareWarBarterable](./DeclareWarBarterable) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables` · class · exposed 8
- [DeclareWarDecision](./DeclareWarDecision) — `TaleWorlds.CampaignSystem.Election` · class · exposed 22
- [DeclareWarLogEntry](./DeclareWarLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 11
- [DefaultBuildingTypes](./DefaultBuildingTypes) — `TaleWorlds.CampaignSystem.Settlements.Buildings` · class · exposed 33
- [DefaultCulturalFeats](./DefaultCulturalFeats) — `TaleWorlds.CampaignSystem.CharacterDevelopment` · class · exposed 19
- [DefaultEncounter](./DefaultEncounter) — `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers` · class · exposed 9
- [DefaultEncyclopediaClanPage](./DefaultEncyclopediaClanPage) — `TaleWorlds.CampaignSystem.Encyclopedia.Pages` · class · exposed 12
- [DefaultEncyclopediaConceptPage](./DefaultEncyclopediaConceptPage) — `TaleWorlds.CampaignSystem.Encyclopedia.Pages` · class · exposed 9
- [DefaultEncyclopediaFactionPage](./DefaultEncyclopediaFactionPage) — `TaleWorlds.CampaignSystem.Encyclopedia.Pages` · class · exposed 12
- [DefaultEncyclopediaHeroPage](./DefaultEncyclopediaHeroPage) — `TaleWorlds.CampaignSystem.Encyclopedia.Pages` · class · exposed 13
- [DefaultEncyclopediaSettlementPage](./DefaultEncyclopediaSettlementPage) — `TaleWorlds.CampaignSystem.Encyclopedia.Pages` · class · exposed 12
- [DefaultEncyclopediaShipPage](./DefaultEncyclopediaShipPage) — `TaleWorlds.CampaignSystem.Encyclopedia.Pages` · class · exposed 13
- [DefaultEncyclopediaUnitPage](./DefaultEncyclopediaUnitPage) — `TaleWorlds.CampaignSystem.Encyclopedia.Pages` · class · exposed 15
- [DefaultFigureheads](./DefaultFigureheads) — `TaleWorlds.CampaignSystem.Naval` · class · exposed 18
- [DefaultItems](./DefaultItems) — `TaleWorlds.CampaignSystem` · class · exposed 17
- [DefaultPerks](./DefaultPerks) — `TaleWorlds.CampaignSystem.CharacterDevelopment` · class · exposed 37
- [DefaultPolicies](./DefaultPolicies) — `TaleWorlds.CampaignSystem` · class · exposed 33
- [DefaultsBarterGroup](./DefaultsBarterGroup) — `TaleWorlds.CampaignSystem.BarterSystem` · class · exposed 1
- [DefaultSiegeStrategies](./DefaultSiegeStrategies) — `TaleWorlds.CampaignSystem.Siege` · class · exposed 10
- [DefaultSkillEffects](./DefaultSkillEffects) — `TaleWorlds.CampaignSystem` · class · exposed 44
- [DefaultSkillLevelingManager](./DefaultSkillLevelingManager) — `TaleWorlds.CampaignSystem.CharacterDevelopment` · class · exposed 49
- [DefaultTraits](./DefaultTraits) — `TaleWorlds.CampaignSystem.CharacterDevelopment` · class · exposed 27
- [DefaultVillageTypes](./DefaultVillageTypes) — `TaleWorlds.CampaignSystem.Settlements` · class · exposed 23
- [DefeatCharacterLogEntry](./DefeatCharacterLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 5
- [DestroyClanAction](./DestroyClanAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 3
- [DestroyKingdomAction](./DestroyKingdomAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 2
- [DestroyMobilePartyLogEntry](./DestroyMobilePartyLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 4
- [DestroyPartyAction](./DestroyPartyAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 2
- [DestroyShipAction](./DestroyShipAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 4
- [DialogFlow](./DialogFlow) — `TaleWorlds.CampaignSystem` · class · exposed 33
- [DisableHeroAction](./DisableHeroAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [DisbandArmyAction](./DisbandArmyAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 12
- [DisbandPartyAction](./DisbandPartyAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 2

### E

- [EducationMapNotification](./EducationMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 7
- [EducationState](./EducationState) — `TaleWorlds.CampaignSystem.GameState` · class · exposed 5
- [EmpireConspiracyBeginsSceneNotificationItem](./EmpireConspiracyBeginsSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 8
- [EmpireConspiracySupportsSceneNotificationItemBase](./EmpireConspiracySupportsSceneNotificationItemBase) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 6
- [EncounterManager](./EncounterManager) — `TaleWorlds.CampaignSystem` · class · exposed 5
- [EncyclopediaFilterGroup](./EncyclopediaFilterGroup) — `TaleWorlds.CampaignSystem.Encyclopedia` · class · exposed 2
- [EncyclopediaFilterItem](./EncyclopediaFilterItem) — `TaleWorlds.CampaignSystem.Encyclopedia` · class · exposed 1
- [EncyclopediaListItem](./EncyclopediaListItem) — `TaleWorlds.CampaignSystem.Encyclopedia` · struct · exposed 1
- [EncyclopediaListItemComparerBase](./EncyclopediaListItemComparerBase) — `TaleWorlds.CampaignSystem.Encyclopedia` · class · exposed 9
- [EncyclopediaManager](./EncyclopediaManager) — `TaleWorlds.CampaignSystem.Encyclopedia` · class · exposed 11
- [EncyclopediaModelBase](./EncyclopediaModelBase) — `TaleWorlds.CampaignSystem.Encyclopedia` · class · exposed 2
- [EncyclopediaPage](./EncyclopediaPage) — `TaleWorlds.CampaignSystem.Encyclopedia` · class · exposed 20
- [EncyclopediaSortController](./EncyclopediaSortController) — `TaleWorlds.CampaignSystem.Encyclopedia` · class · exposed 3
- [EndAllianceLogEntry](./EndAllianceLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 9
- [EndCallToWarAgreementLogEntry](./EndCallToWarAgreementLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 9
- [EndCaptivityAction](./EndCaptivityAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 8
- [EndCaptivityDetail](./EndCaptivityDetail) — `TaleWorlds.CampaignSystem.Actions` · enum · exposed 7
- [EndCaptivityDetailEnumResolver](./EndCaptivityDetailEnumResolver) — `TaleWorlds.CampaignSystem.SaveCompability` · class · exposed 1
- [EndCaptivityLogEntry](./EndCaptivityLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 11
- [EndMercenaryServiceAction](./EndMercenaryServiceAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 5
- [EnterSettlementAction](./EnterSettlementAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 4
- [EventDelegateType](./EventDelegateType) — `TaleWorlds.CampaignSystem` · delegate · exposed 0
- [ExpelClanFromKingdomDecision](./ExpelClanFromKingdomDecision) — `TaleWorlds.CampaignSystem.Election` · class · exposed 21
- [ExplainedNumber](./ExplainedNumber) — `TaleWorlds.CampaignSystem` · struct · exposed 19

### F

- [FactionManager](./FactionManager) — `TaleWorlds.CampaignSystem` · class · exposed 9
- [FakeInventoryListener](./FakeInventoryListener) — `TaleWorlds.CampaignSystem.Inventory` · class · exposed 5
- [FastModeOptionsProvider](./FastModeOptionsProvider) — `TaleWorlds.CampaignSystem.FastMode` · class · exposed 2
- [FastModeSubModule](./FastModeSubModule) — `TaleWorlds.CampaignSystem.FastMode` · class · exposed 1
- [FeatObject](./FeatObject) — `TaleWorlds.CampaignSystem.CharacterDevelopment` · class · exposed 8
- [Fief](./Fief) — `TaleWorlds.CampaignSystem.Settlements` · class · exposed 4
- [FiefBarterable](./FiefBarterable) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables` · class · exposed 9
- [FiefBarterGroup](./FiefBarterGroup) — `TaleWorlds.CampaignSystem.BarterSystem` · class · exposed 1
- [FieldBattleEventComponent](./FieldBattleEventComponent) — `TaleWorlds.CampaignSystem.MapEvents` · class · exposed 7
- [FightTournamentGame](./FightTournamentGame) — `TaleWorlds.CampaignSystem.TournamentGames` · class · exposed 12
- [Figurehead](./Figurehead) — `TaleWorlds.CampaignSystem.Naval` · class · exposed 6
- [FindingFirstBannerPieceSceneNotificationItem](./FindingFirstBannerPieceSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 5
- [FindingSecondBannerPieceSceneNotificationItem](./FindingSecondBannerPieceSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 5
- [FindingThirdBannerPieceSceneNotificationItem](./FindingThirdBannerPieceSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 8
- [FlattenedTroopRoster](./FlattenedTroopRoster) — `TaleWorlds.CampaignSystem.Roster` · class · exposed 21
- [FlattenedTroopRosterElement](./FlattenedTroopRosterElement) — `TaleWorlds.CampaignSystem.Roster` · struct · exposed 12
- [ForceSuppliesEventComponent](./ForceSuppliesEventComponent) — `TaleWorlds.CampaignSystem.MapEvents` · class · exposed 8
- [ForceVolunteersEventComponent](./ForceVolunteersEventComponent) — `TaleWorlds.CampaignSystem.MapEvents` · class · exposed 8

### G

- [GainKingdomInfluenceAction](./GainKingdomInfluenceAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 11
- [GainRenownAction](./GainRenownAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [GameAccelerationMode](./GameAccelerationMode) — `TaleWorlds.CampaignSystem` · enum · exposed 2
- [GameMenu](./GameMenu) — `TaleWorlds.CampaignSystem.GameMenus` · class · exposed 50
- [GameMenuCallbackManager](./GameMenuCallbackManager) — `TaleWorlds.CampaignSystem.GameMenus` · class · exposed 9
- [GameMenuEventHandler](./GameMenuEventHandler) — `TaleWorlds.CampaignSystem.GameMenus` · class · exposed 6
- [GameMenuEventHandlerDelegate](./GameMenuEventHandlerDelegate) — `TaleWorlds.CampaignSystem.GameMenus` · delegate · exposed 0
- [GameMenuInitDelegate](./GameMenuInitDelegate) — `TaleWorlds.CampaignSystem.GameMenus` · delegate · exposed 0
- [GameMenuInitializationHandler](./GameMenuInitializationHandler) — `TaleWorlds.CampaignSystem.GameMenus` · class · exposed 2
- [GameMenuInitializationHandlerDelegate](./GameMenuInitializationHandlerDelegate) — `TaleWorlds.CampaignSystem.GameMenus` · delegate · exposed 0
- [GameMenuManager](./GameMenuManager) — `TaleWorlds.CampaignSystem.GameMenus` · class · exposed 33
- [GameMenuOption](./GameMenuOption) — `TaleWorlds.CampaignSystem.GameMenus` · class · exposed 24
- [GameModels](./GameModels) — `TaleWorlds.CampaignSystem` · class · exposed 125
- [GameOverState](./GameOverState) — `TaleWorlds.CampaignSystem.GameState` · class · exposed 10
- [GameSceneDataManager](./GameSceneDataManager) — `TaleWorlds.CampaignSystem` · class · exposed 8
- [GarrisonPartyComponent](./GarrisonPartyComponent) — `TaleWorlds.CampaignSystem.Party.PartyComponents` · class · exposed 18
- [GatherArmyAction](./GatherArmyAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [GatherArmyLogEntry](./GatherArmyLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 6
- [GetNarrativeMenuOptionArgsDelegate](./GetNarrativeMenuOptionArgsDelegate) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · delegate · exposed 0
- [GiveGoldAction](./GiveGoldAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 8
- [GiveItemAction](./GiveItemAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 2
- [GoldBarterable](./GoldBarterable) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables` · class · exposed 9
- [GoldBarterGroup](./GoldBarterGroup) — `TaleWorlds.CampaignSystem.BarterSystem` · class · exposed 1

### H

- [HeirComeOfAgeMapNotification](./HeirComeOfAgeMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 7
- [HeirComingOfAgeFemaleSceneNotificationItem](./HeirComingOfAgeFemaleSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 6
- [HeirComingOfAgeSceneNotificationItem](./HeirComingOfAgeSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 6
- [HeroCreator](./HeroCreator) — `TaleWorlds.CampaignSystem` · class · exposed 6
- [HeroDeveloper](./HeroDeveloper) — `TaleWorlds.CampaignSystem.CharacterDevelopment` · class · exposed 33
- [HeroDeveloperResolver](./HeroDeveloperResolver) — `TaleWorlds.CampaignSystem.SaveCompability` · class · exposed 4
- [HeroExecutionSceneNotificationData](./HeroExecutionSceneNotificationData) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 19
- [HeroGetsBusyReasons](./HeroGetsBusyReasons) — `TaleWorlds.CampaignSystem` · enum · exposed 6
- [HeroTraitDeveloperResolver](./HeroTraitDeveloperResolver) — `TaleWorlds.CampaignSystem.SaveCompability` · class · exposed 4
- [Hideout](./Hideout) — `TaleWorlds.CampaignSystem.Settlements` · class · exposed 15
- [HideoutEncounter](./HideoutEncounter) — `TaleWorlds.CampaignSystem.Encounters` · class · exposed 1
- [HideoutEventComponent](./HideoutEventComponent) — `TaleWorlds.CampaignSystem.MapEvents` · class · exposed 8

### I

- [IAgentBehaviorManager](./IAgentBehaviorManager) — `TaleWorlds.CampaignSystem` · interface · exposed 13
- [IBannerEditorStateHandler](./IBannerEditorStateHandler) — `TaleWorlds.CampaignSystem.GameState` · interface · exposed 0
- [ICampaignBehavior](./ICampaignBehavior) — `TaleWorlds.CampaignSystem` · interface · exposed 1
- [ICampaignBehaviorManager](./ICampaignBehaviorManager) — `TaleWorlds.CampaignSystem` · interface · exposed 8
- [ICampaignMission](./ICampaignMission) — `TaleWorlds.CampaignSystem` · interface · exposed 21
- [ICharacterCreationContentHandler](./ICharacterCreationContentHandler) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · interface · exposed 4
- [ICharacterCreationStageListener](./ICharacterCreationStageListener) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · interface · exposed 1
- [ICharacterCreationStateHandler](./ICharacterCreationStateHandler) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · interface · exposed 3
- [ICharacterDeveloperStateHandler](./ICharacterDeveloperStateHandler) — `TaleWorlds.CampaignSystem.GameState` · interface · exposed 0
- [IChatNotification](./IChatNotification) — `TaleWorlds.CampaignSystem.LogEntries` · interface · exposed 3
- [IClanStateHandler](./IClanStateHandler) — `TaleWorlds.CampaignSystem.GameState` · interface · exposed 0
- [ICraftingStateHandler](./ICraftingStateHandler) — `TaleWorlds.CampaignSystem.GameState` · interface · exposed 2
- [ICustomSystemManager](./ICustomSystemManager) — `TaleWorlds.CampaignSystem.Handlers` · interface · exposed 0
- [IEducationStateHandler](./IEducationStateHandler) — `TaleWorlds.CampaignSystem.GameState` · interface · exposed 0
- [IEncyclopediaLog](./IEncyclopediaLog) — `TaleWorlds.CampaignSystem.LogEntries` · interface · exposed 3
- [IFaction](./IFaction) — `TaleWorlds.CampaignSystem` · interface · exposed 43
- [IGameOverStateHandler](./IGameOverStateHandler) — `TaleWorlds.CampaignSystem.GameState` · interface · exposed 0
- [IInteractablePoint](./IInteractablePoint) — `TaleWorlds.CampaignSystem.Map` · interface · exposed 3
- [IInventoryStateHandler](./IInventoryStateHandler) — `TaleWorlds.CampaignSystem.GameState` · interface · exposed 3
- [IKingdomStateHandler](./IKingdomStateHandler) — `TaleWorlds.CampaignSystem.GameState` · interface · exposed 0
- [IMainHeroVisualSupplier](./IMainHeroVisualSupplier) — `TaleWorlds.CampaignSystem` · interface · exposed 1
- [IMapEventVisual](./IMapEventVisual) — `TaleWorlds.CampaignSystem.MapEvents` · interface · exposed 3
- [IMapEventVisualCreator](./IMapEventVisualCreator) — `TaleWorlds.CampaignSystem` · interface · exposed 1
- [IMapPoint](./IMapPoint) — `TaleWorlds.CampaignSystem.Map` · interface · exposed 8
- [IMapScene](./IMapScene) — `TaleWorlds.CampaignSystem.Map` · interface · exposed 39
- [IMapSceneCreator](./IMapSceneCreator) — `TaleWorlds.CampaignSystem.Map` · interface · exposed 1
- [IMapStateHandler](./IMapStateHandler) — `TaleWorlds.CampaignSystem.GameState` · interface · exposed 28
- [IMarketData](./IMarketData) — `TaleWorlds.CampaignSystem.Settlements` · interface · exposed 2
- [IMbEvent](./IMbEvent) — `TaleWorlds.CampaignSystem` · interface · exposed 2
- [IMbEvent<outT>](./IMbEvent__1) — `TaleWorlds.CampaignSystem` · interface · exposed 1
- [IMbEvent<outT1,outT2,outT3,outT4,outT5,outT6,outT7>](./IMbEvent__7) — `TaleWorlds.CampaignSystem` · interface · exposed 1
- [IMbEvent<outT1,outT2,outT3,outT4,outT5,outT6>](./IMbEvent__6) — `TaleWorlds.CampaignSystem` · interface · exposed 1
- [IMbEvent<outT1,outT2,outT3,outT4,outT5>](./IMbEvent__5) — `TaleWorlds.CampaignSystem` · interface · exposed 1
- [IMbEvent<outT1,outT2,outT3,outT4>](./IMbEvent__4) — `TaleWorlds.CampaignSystem` · interface · exposed 1
- [IMbEvent<outT1,outT2,outT3>](./IMbEvent__3) — `TaleWorlds.CampaignSystem` · interface · exposed 1
- [IMbEvent<outT1,outT2>](./IMbEvent__2) — `TaleWorlds.CampaignSystem` · interface · exposed 1
- [IMbEventBase](./IMbEventBase) — `TaleWorlds.CampaignSystem` · interface · exposed 1
- [IMenuContextHandler](./IMenuContextHandler) — `TaleWorlds.CampaignSystem.GameState` · interface · exposed 11
- [ImportanceEnum](./ImportanceEnum) — `TaleWorlds.CampaignSystem.LogEntries` · enum · exposed 10
- [INavigationElement](./INavigationElement) — `TaleWorlds.CampaignSystem` · interface · exposed 10
- [INavigationHandler](./INavigationHandler) — `TaleWorlds.CampaignSystem` · interface · exposed 4
- [Incident](./Incident) — `TaleWorlds.CampaignSystem.Incidents` · class · exposed 18
- [IncidentEffect](./IncidentEffect) — `TaleWorlds.CampaignSystem.Incidents` · class · exposed 51
- [IncreaseSettlementHealthAction](./IncreaseSettlementHealthAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [InitializeWorkshopAction](./InitializeWorkshopAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [InventoryListener](./InventoryListener) — `TaleWorlds.CampaignSystem.Inventory` · class · exposed 5
- [InventoryLogic](./InventoryLogic) — `TaleWorlds.CampaignSystem.Inventory` · class · exposed 72
- [InventoryState](./InventoryState) — `TaleWorlds.CampaignSystem.GameState` · class · exposed 5
- [InventoryTransferItemEvent](./InventoryTransferItemEvent) — `TaleWorlds.CampaignSystem.Inventory` · class · exposed 3
- [IPartyScreenLogicHandler](./IPartyScreenLogicHandler) — `TaleWorlds.CampaignSystem.GameState` · interface · exposed 1
- [IPartyScreenPrisonHandler](./IPartyScreenPrisonHandler) — `TaleWorlds.CampaignSystem.GameState` · interface · exposed 4
- [IPartyScreenTroopHandler](./IPartyScreenTroopHandler) — `TaleWorlds.CampaignSystem.GameState` · interface · exposed 2
- [IPlayerTradeBehavior](./IPlayerTradeBehavior) — `TaleWorlds.CampaignSystem.Inventory` · interface · exposed 1
- [IQuestsStateHandler](./IQuestsStateHandler) — `TaleWorlds.CampaignSystem.GameState` · interface · exposed 0
- [IRandomOwner](./IRandomOwner) — `TaleWorlds.CampaignSystem` · interface · exposed 1
- [ISandBoxMissionManager](./ISandBoxMissionManager) — `TaleWorlds.CampaignSystem` · interface · exposed 5
- [ISaveManager](./ISaveManager) — `TaleWorlds.CampaignSystem` · interface · exposed 3
- [ISettlementDataHolder](./ISettlementDataHolder) — `TaleWorlds.CampaignSystem.Map.DistanceCache` · interface · exposed 5
- [ISiegeEventSide](./ISiegeEventSide) — `TaleWorlds.CampaignSystem.Siege` · interface · exposed 16
- [ISiegeEventVisual](./ISiegeEventVisual) — `TaleWorlds.CampaignSystem.Siege` · interface · exposed 3
- [ISkillLevelingManager](./ISkillLevelingManager) — `TaleWorlds.CampaignSystem.CharacterDevelopment` · interface · exposed 49
- [ISpottable](./ISpottable) — `TaleWorlds.CampaignSystem.Settlements` · interface · exposed 1
- [IssueQuestLogEntry](./IssueQuestLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 4
- [IssueQuestStartLogEntry](./IssueQuestStartLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 4
- [IsTroopTransferableDelegate](./IsTroopTransferableDelegate) — `TaleWorlds.CampaignSystem.Party` · delegate · exposed 0
- [ItemBarterable](./ItemBarterable) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables` · class · exposed 12
- [ItemBarterGroup](./ItemBarterGroup) — `TaleWorlds.CampaignSystem.BarterSystem` · class · exposed 1
- [ItemCategories](./ItemCategories) — `TaleWorlds.CampaignSystem.Extensions` · class · exposed 1
- [ItemData](./ItemData) — `TaleWorlds.CampaignSystem.Settlements` · struct · exposed 3
- [ItemObjectExtensions](./ItemObjectExtensions) — `TaleWorlds.CampaignSystem.Extensions` · class · exposed 1
- [ItemRoster](./ItemRoster) — `TaleWorlds.CampaignSystem.Roster` · class · exposed 38
- [Items](./Items) — `TaleWorlds.CampaignSystem.Extensions` · class · exposed 2
- [ITournamentManager](./ITournamentManager) — `TaleWorlds.CampaignSystem.TournamentGames` · interface · exposed 15
- [ITrackableCampaignObject](./ITrackableCampaignObject) — `TaleWorlds.CampaignSystem` · interface · exposed 2
- [IViewDataTracker](./IViewDataTracker) — `TaleWorlds.CampaignSystem` · interface · exposed 56
- [IWarLog](./IWarLog) — `TaleWorlds.CampaignSystem.LogEntries` · interface · exposed 1

### J

- [JoinKingdomAsClanBarterable](./JoinKingdomAsClanBarterable) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables` · class · exposed 10
- [JoinKingdomSceneNotificationItem](./JoinKingdomSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 8
- [JournalLog](./JournalLog) — `TaleWorlds.CampaignSystem` · class · exposed 6
- [JournalLogEntry](./JournalLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 10

### K

- [KillCharacterAction](./KillCharacterAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 13
- [Kingdom](./Kingdom) — `TaleWorlds.CampaignSystem` · class · exposed 87
- [KingdomCreatedSceneNotificationItem](./KingdomCreatedSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 8
- [KingdomDecision](./KingdomDecision) — `TaleWorlds.CampaignSystem.Election` · class · exposed 48
- [KingdomDecisionAddedLogEntry](./KingdomDecisionAddedLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 4
- [KingdomDecisionConcludedLogEntry](./KingdomDecisionConcludedLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 7
- [KingdomDecisionMapNotification](./KingdomDecisionMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 7
- [KingdomDestroyedLogEntry](./KingdomDestroyedLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 6
- [KingdomDestroyedMapNotification](./KingdomDestroyedMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 6
- [KingdomDestroyedSceneNotificationItem](./KingdomDestroyedSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 6
- [KingdomElection](./KingdomElection) — `TaleWorlds.CampaignSystem.Election` · class · exposed 27
- [KingdomManager](./KingdomManager) — `TaleWorlds.CampaignSystem` · class · exposed 10
- [KingdomPolicyDecision](./KingdomPolicyDecision) — `TaleWorlds.CampaignSystem.Election` · class · exposed 22
- [KingdomState](./KingdomState) — `TaleWorlds.CampaignSystem.GameState` · class · exposed 14
- [KingSelectionKingdomDecision](./KingSelectionKingdomDecision) — `TaleWorlds.CampaignSystem.Election` · class · exposed 24

### L

- [LeaveKingdomAsClanBarterable](./LeaveKingdomAsClanBarterable) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables` · class · exposed 10
- [LeaveSettlementAction](./LeaveSettlementAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 2
- [LiftSiegeAction](./LiftSiegeAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [LocatableSearchData<T>](./LocatableSearchData__1) — `TaleWorlds.CampaignSystem.Map` · struct · exposed 1
- [Location](./Location) — `TaleWorlds.CampaignSystem.Settlements.Locations` · class · exposed 41
- [LocationCharacter](./LocationCharacter) — `TaleWorlds.CampaignSystem.Settlements.Locations` · class · exposed 22
- [LocationComplex](./LocationComplex) — `TaleWorlds.CampaignSystem.Settlements.Locations` · class · exposed 31
- [LocationComplexTemplate](./LocationComplexTemplate) — `TaleWorlds.CampaignSystem.Settlements.Locations` · class · exposed 3
- [LocationEncounter](./LocationEncounter) — `TaleWorlds.CampaignSystem.Encounters` · class · exposed 13
- [LogEntry](./LogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 22
- [LogEntryHistory](./LogEntryHistory) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 7
- [LogType](./LogType) — `TaleWorlds.CampaignSystem` · enum · exposed 4
- [LordPartyComponent](./LordPartyComponent) — `TaleWorlds.CampaignSystem.Party.PartyComponents` · class · exposed 17

### M

- [MainHeroBattleDeathNotificationItem](./MainHeroBattleDeathNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 6
- [MainHeroBattleVictoryDeathNotificationItem](./MainHeroBattleVictoryDeathNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 6
- [MakeHeroFugitiveAction](./MakeHeroFugitiveAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [MakePeaceAction](./MakePeaceAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 4
- [MakePeaceKingdomDecision](./MakePeaceKingdomDecision) — `TaleWorlds.CampaignSystem.Election` · class · exposed 23
- [MakePeaceLogEntry](./MakePeaceLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 10
- [MakePregnantAction](./MakePregnantAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [ManagedParameters](./ManagedParameters) — `TaleWorlds.CampaignSystem` · class · exposed 4
- [ManagedParametersEnum](./ManagedParametersEnum) — `TaleWorlds.CampaignSystem` · enum · exposed 3
- [MapEvent](./MapEvent) — `TaleWorlds.CampaignSystem.MapEvents` · class · exposed 75
- [MapEventComponent](./MapEventComponent) — `TaleWorlds.CampaignSystem.MapEvents` · class · exposed 7
- [MapEventManager](./MapEventManager) — `TaleWorlds.CampaignSystem.MapEvents` · class · exposed 10
- [MapEventParty](./MapEventParty) — `TaleWorlds.CampaignSystem.MapEvents` · class · exposed 36
- [MapEventSide](./MapEventSide) — `TaleWorlds.CampaignSystem.MapEvents` · class · exposed 57
- [MapEventState](./MapEventState) — `TaleWorlds.CampaignSystem.MapEvents` · enum · exposed 3
- [MapMarker](./MapMarker) — `TaleWorlds.CampaignSystem.Map` · class · exposed 11
- [MapMarkerManager](./MapMarkerManager) — `TaleWorlds.CampaignSystem.Map` · class · exposed 6
- [MapNavigationExtensions](./MapNavigationExtensions) — `TaleWorlds.CampaignSystem` · class · exposed 24
- [MapNavigationItemType](./MapNavigationItemType) — `TaleWorlds.CampaignSystem` · enum · exposed 7
- [MapPatchData](./MapPatchData) — `TaleWorlds.CampaignSystem.Map` · struct · exposed 0
- [MapState](./MapState) — `TaleWorlds.CampaignSystem.GameState` · class · exposed 27
- [MapStateData](./MapStateData) — `TaleWorlds.CampaignSystem.GameState` · class · exposed 1
- [MarriageAction](./MarriageAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [MarriageBarterable](./MarriageBarterable) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables` · class · exposed 10
- [MarriageMapNotification](./MarriageMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 7
- [MarriageOfferMapNotification](./MarriageOfferMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 7
- [MarriageSceneNotificationItem](./MarriageSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 8
- [MBCampaignEvent](./MBCampaignEvent) — `TaleWorlds.CampaignSystem` · class · exposed 13
- [MBEquipmentRosterExtensions](./MBEquipmentRosterExtensions) — `TaleWorlds.CampaignSystem.Extensions` · class · exposed 6
- [MbEvent](./MbEvent) — `TaleWorlds.CampaignSystem` · class · exposed 3
- [MbEvent<T>](./MbEvent__1) — `TaleWorlds.CampaignSystem` · class · exposed 3
- [MbEvent<T1,T2,T3,T4,T5,T6,T7>](./MbEvent__7) — `TaleWorlds.CampaignSystem` · class · exposed 3
- [MbEvent<T1,T2,T3,T4,T5,T6>](./MbEvent__6) — `TaleWorlds.CampaignSystem` · class · exposed 3
- [MbEvent<T1,T2,T3,T4,T5>](./MbEvent__5) — `TaleWorlds.CampaignSystem` · class · exposed 3
- [MbEvent<T1,T2,T3,T4>](./MbEvent__4) — `TaleWorlds.CampaignSystem` · class · exposed 3
- [MbEvent<T1,T2,T3>](./MbEvent__3) — `TaleWorlds.CampaignSystem` · class · exposed 3
- [MbEvent<T1,T2>](./MbEvent__2) — `TaleWorlds.CampaignSystem` · class · exposed 3
- [MeetingSceneData](./MeetingSceneData) — `TaleWorlds.CampaignSystem` · struct · exposed 4
- [MenuCallbackArgs](./MenuCallbackArgs) — `TaleWorlds.CampaignSystem.GameMenus` · class · exposed 6
- [MenuContext](./MenuContext) — `TaleWorlds.CampaignSystem.GameState` · class · exposed 24
- [MercenaryClanChangedKingdomLogEntry](./MercenaryClanChangedKingdomLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 7
- [MercenaryJoinKingdomBarterable](./MercenaryJoinKingdomBarterable) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables` · class · exposed 9
- [MercenaryOfferMapNotification](./MercenaryOfferMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 5
- [MetaDataExtensions](./MetaDataExtensions) — `TaleWorlds.CampaignSystem.Extensions` · class · exposed 16
- [MilitiaPartyComponent](./MilitiaPartyComponent) — `TaleWorlds.CampaignSystem.Party.PartyComponents` · class · exposed 16
- [MobileParty](./MobileParty) — `TaleWorlds.CampaignSystem.Party` · class · exposed 230
- [MobilePartyAi](./MobilePartyAi) — `TaleWorlds.CampaignSystem.Party` · class · exposed 24
- [MoveModeType](./MoveModeType) — `TaleWorlds.CampaignSystem.Party` · enum · exposed 3

### N

- [NameGenerator](./NameGenerator) — `TaleWorlds.CampaignSystem` · class · exposed 8
- [NarrativeMenu](./NarrativeMenu) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · class · exposed 7
- [NarrativeMenuCharacter](./NarrativeMenuCharacter) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · class · exposed 24
- [NarrativeMenuCharacterArgs](./NarrativeMenuCharacterArgs) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · struct · exposed 1
- [NarrativeMenuOption](./NarrativeMenuOption) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · class · exposed 9
- [NarrativeMenuOptionArgs](./NarrativeMenuOptionArgs) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · class · exposed 22
- [NarrativeMenuOptionOnConditionDelegate](./NarrativeMenuOptionOnConditionDelegate) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · delegate · exposed 0
- [NarrativeMenuOptionOnConsequenceDelegate](./NarrativeMenuOptionOnConsequenceDelegate) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · delegate · exposed 0
- [NarrativeMenuOptionOnSelectDelegate](./NarrativeMenuOptionOnSelectDelegate) — `TaleWorlds.CampaignSystem.CharacterCreationContent` · delegate · exposed 0
- [NavalDeathSceneNotificationItem](./NavalDeathSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 8
- [NavigationCache<T>](./NavigationCache__1) — `TaleWorlds.CampaignSystem.Map.DistanceCache` · class · exposed 38
- [NavigationCacheElement<T>](./NavigationCacheElement__1) — `TaleWorlds.CampaignSystem.Map.DistanceCache` · struct · exposed 10
- [NavigationPermissionItem](./NavigationPermissionItem) — `TaleWorlds.CampaignSystem` · struct · exposed 3
- [NewBornFemaleHeroSceneAlternateNotificationItem](./NewBornFemaleHeroSceneAlternateNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 6
- [NewBornFemaleHeroSceneNotificationItem](./NewBornFemaleHeroSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 6
- [NewBornSceneNotificationItem](./NewBornSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 6
- [NoAttackBarterable](./NoAttackBarterable) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables` · class · exposed 6

### O

- [Occupation](./Occupation) — `TaleWorlds.CampaignSystem` · enum · exposed 34
- [OnConditionDelegate](./OnConditionDelegate) — `TaleWorlds.CampaignSystem.GameMenus` · delegate · exposed 0
- [OnConsequenceDelegate](./OnConsequenceDelegate) — `TaleWorlds.CampaignSystem.GameMenus` · delegate · exposed 0
- [OnInitDelegate](./OnInitDelegate) — `TaleWorlds.CampaignSystem.GameMenus` · delegate · exposed 0
- [OnTickDelegate](./OnTickDelegate) — `TaleWorlds.CampaignSystem.GameMenus` · delegate · exposed 0
- [OtherBarterGroup](./OtherBarterGroup) — `TaleWorlds.CampaignSystem.BarterSystem` · class · exposed 1
- [OverrideEncyclopediaModel](./OverrideEncyclopediaModel) — `TaleWorlds.CampaignSystem.Encyclopedia` · class · exposed 1
- [OverruleInfluenceLogEntry](./OverruleInfluenceLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 6

### P

- [PartyAgentOrigin](./PartyAgentOrigin) — `TaleWorlds.CampaignSystem.AgentOrigins` · class · exposed 17
- [PartyBase](./PartyBase) — `TaleWorlds.CampaignSystem.Party` · class · exposed 86
- [PartyComponent](./PartyComponent) — `TaleWorlds.CampaignSystem.Party.PartyComponents` · class · exposed 23
- [PartyGroupAgentOrigin](./PartyGroupAgentOrigin) — `TaleWorlds.CampaignSystem.AgentOrigins` · class · exposed 17
- [PartyGroupTroopSupplier](./PartyGroupTroopSupplier) — `TaleWorlds.CampaignSystem.TroopSuppliers` · class · exposed 14
- [PartyLeaderChangeNotification](./PartyLeaderChangeNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 6
- [PartyPresentationCancelButtonActivateDelegate](./PartyPresentationCancelButtonActivateDelegate) — `TaleWorlds.CampaignSystem.Party` · delegate · exposed 0
- [PartyPresentationCancelButtonDelegate](./PartyPresentationCancelButtonDelegate) — `TaleWorlds.CampaignSystem.Party` · delegate · exposed 0
- [PartyPresentationDoneButtonDelegate](./PartyPresentationDoneButtonDelegate) — `TaleWorlds.CampaignSystem.Party` · delegate · exposed 0
- [PartyRole](./PartyRole) — `TaleWorlds.CampaignSystem` · enum · exposed 17
- [PartyScreenClosedDelegate](./PartyScreenClosedDelegate) — `TaleWorlds.CampaignSystem.Party` · delegate · exposed 0
- [PartyScreenData](./PartyScreenData) — `TaleWorlds.CampaignSystem.Party` · class · exposed 17
- [PartyScreenLogic](./PartyScreenLogic) — `TaleWorlds.CampaignSystem.Party` · class · exposed 96
- [PartyScreenLogicInitializationData](./PartyScreenLogicInitializationData) — `TaleWorlds.CampaignSystem.Party` · struct · exposed 2
- [PartyState](./PartyState) — `TaleWorlds.CampaignSystem.GameState` · class · exposed 6
- [PartyTemplateObject](./PartyTemplateObject) — `TaleWorlds.CampaignSystem.Party` · class · exposed 4
- [PartyTemplateStack](./PartyTemplateStack) — `TaleWorlds.CampaignSystem.Party` · struct · exposed 2
- [PartyThinkParams](./PartyThinkParams) — `TaleWorlds.CampaignSystem` · class · exposed 9
- [PatrolPartyComponent](./PatrolPartyComponent) — `TaleWorlds.CampaignSystem.Party.PartyComponents` · class · exposed 13
- [PayForCrimeAction](./PayForCrimeAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 2
- [PeaceBarterable](./PeaceBarterable) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables` · class · exposed 11
- [PeaceMapNotification](./PeaceMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 6
- [PeaceOfferMapNotification](./PeaceOfferMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 8
- [PerkObject](./PerkObject) — `TaleWorlds.CampaignSystem.CharacterDevelopment` · class · exposed 19
- [PlayerAttackAlleyLogEntry](./PlayerAttackAlleyLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 6
- [PlayerBattleEndedLogEntry](./PlayerBattleEndedLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 11
- [PlayerCaptivity](./PlayerCaptivity) — `TaleWorlds.CampaignSystem` · class · exposed 11
- [PlayerCharacterChangedLogEntry](./PlayerCharacterChangedLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 3
- [PlayerEncounter](./PlayerEncounter) — `TaleWorlds.CampaignSystem.Encounters` · class · exposed 74
- [PlayerEncounterState](./PlayerEncounterState) — `TaleWorlds.CampaignSystem.Encounters` · enum · exposed 12
- [PlayerMeetLordLogEntry](./PlayerMeetLordLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 8
- [PlayerReputationChangesLogEntry](./PlayerReputationChangesLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 4
- [PlayerRetiredLogEntry](./PlayerRetiredLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 5
- [PlayerSiege](./PlayerSiege) — `TaleWorlds.CampaignSystem.Siege` · class · exposed 9
- [PlayerTownVisit](./PlayerTownVisit) — `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers` · class · exposed 4
- [PledgeAllegianceSceneNotificationItem](./PledgeAllegianceSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 7
- [PolicyObject](./PolicyObject) — `TaleWorlds.CampaignSystem` · class · exposed 10
- [PortScreenModes](./PortScreenModes) — `TaleWorlds.CampaignSystem.GameState` · enum · exposed 6
- [PortState](./PortState) — `TaleWorlds.CampaignSystem.GameState` · class · exposed 9
- [PregnancyLogEntry](./PregnancyLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 9
- [PrisonerBarterGroup](./PrisonerBarterGroup) — `TaleWorlds.CampaignSystem.BarterSystem` · class · exposed 1
- [ProEmpireConspiracyBeginsSceneNotificationItem](./ProEmpireConspiracyBeginsSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 2
- [ProposeCallToWarAgreementDecision](./ProposeCallToWarAgreementDecision) — `TaleWorlds.CampaignSystem.Election` · class · exposed 25
- [ProposeCallToWarOfferMapNotification](./ProposeCallToWarOfferMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 9

### Q

- [QuestBase](./QuestBase) — `TaleWorlds.CampaignSystem` · class · exposed 69
- [QuestManager](./QuestManager) — `TaleWorlds.CampaignSystem` · class · exposed 37
- [QuestsState](./QuestsState) — `TaleWorlds.CampaignSystem.GameState` · class · exposed 9
- [QuestTaskBase](./QuestTaskBase) — `TaleWorlds.CampaignSystem` · class · exposed 12

### R

- [RaftStateChangeAction](./RaftStateChangeAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 2
- [RaidEventComponent](./RaidEventComponent) — `TaleWorlds.CampaignSystem.MapEvents` · class · exposed 14
- [RandomOwnerExtensions](./RandomOwnerExtensions) — `TaleWorlds.CampaignSystem` · class · exposed 12
- [RansomOfferMapNotification](./RansomOfferMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 7
- [RebellionStartedLogEntry](./RebellionStartedLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 6
- [ReferenceAction<T1,T2,T3>](./ReferenceAction__3) — `TaleWorlds.CampaignSystem` · delegate · exposed 0
- [ReferenceAction<T1,T2>](./ReferenceAction__2) — `TaleWorlds.CampaignSystem` · delegate · exposed 0
- [ReferenceAction<T1>](./ReferenceAction__1) — `TaleWorlds.CampaignSystem` · delegate · exposed 0
- [ReferenceIMBEvent<T1,T2,T3>](./ReferenceIMBEvent__3) — `TaleWorlds.CampaignSystem` · interface · exposed 1
- [ReferenceIMBEvent<T1,T2>](./ReferenceIMBEvent__2) — `TaleWorlds.CampaignSystem` · interface · exposed 1
- [ReferenceIMBEvent<T1>](./ReferenceIMBEvent__1) — `TaleWorlds.CampaignSystem` · interface · exposed 1
- [ReferenceMBEvent<T1,T2,T3>](./ReferenceMBEvent__3) — `TaleWorlds.CampaignSystem` · class · exposed 3
- [ReferenceMBEvent<T1,T2>](./ReferenceMBEvent__2) — `TaleWorlds.CampaignSystem` · class · exposed 3
- [ReferenceMBEvent<T1>](./ReferenceMBEvent__1) — `TaleWorlds.CampaignSystem` · class · exposed 3
- [RemoveCompanionAction](./RemoveCompanionAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 6
- [RepairShipAction](./RepairShipAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 3
- [RetirementEncounter](./RetirementEncounter) — `TaleWorlds.CampaignSystem.Encounters` · class · exposed 2
- [RetirementSettlementComponent](./RetirementSettlementComponent) — `TaleWorlds.CampaignSystem.Settlements` · class · exposed 4
- [Romance](./Romance) — `TaleWorlds.CampaignSystem` · class · exposed 10
- [RosterTroopState](./RosterTroopState) — `TaleWorlds.CampaignSystem.Roster` · enum · exposed 5

### S

- [SafePassageBarterable](./SafePassageBarterable) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables` · class · exposed 9
- [SandBoxManager](./SandBoxManager) — `TaleWorlds.CampaignSystem` · class · exposed 14
- [SandBoxMission](./SandBoxMission) — `TaleWorlds.CampaignSystem` · class · exposed 5
- [SandBoxNavigationCache](./SandBoxNavigationCache) — `TaleWorlds.CampaignSystem.Map.DistanceCache` · class · exposed 17
- [SaveableCampaignTypeDefiner](./SaveableCampaignTypeDefiner) — `TaleWorlds.CampaignSystem` · class · exposed 9
- [SaveHandler](./SaveHandler) — `TaleWorlds.CampaignSystem` · class · exposed 11
- [SellGoodsForTradeAction](./SellGoodsForTradeAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [SellItemsAction](./SellItemsAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [SellPrisonersAction](./SellPrisonersAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 3
- [SetPartyAiAction](./SetPartyAiAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 10
- [SetPrisonerFreeBarterable](./SetPrisonerFreeBarterable) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables` · class · exposed 8
- [SettlementArea](./SettlementArea) — `TaleWorlds.CampaignSystem.Settlements` · class · exposed 5
- [SettlementBusynessPriority](./SettlementBusynessPriority) — `TaleWorlds.CampaignSystem` · enum · exposed 4
- [SettlementClaimantDecision](./SettlementClaimantDecision) — `TaleWorlds.CampaignSystem.Election` · class · exposed 24
- [SettlementClaimantPreliminaryDecision](./SettlementClaimantPreliminaryDecision) — `TaleWorlds.CampaignSystem.Election` · class · exposed 25
- [SettlementClaimedLogEntry](./SettlementClaimedLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 6
- [SettlementComponent](./SettlementComponent) — `TaleWorlds.CampaignSystem.Settlements` · class · exposed 30
- [SettlementOwnerChangedMapNotification](./SettlementOwnerChangedMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 7
- [SettlementRebellionMapNotification](./SettlementRebellionMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 5
- [SettlementUnderSiegeMapNotification](./SettlementUnderSiegeMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 6
- [Ship](./Ship) — `TaleWorlds.CampaignSystem.Naval` · class · exposed 52
- [ShipTemplateStack](./ShipTemplateStack) — `TaleWorlds.CampaignSystem.Party` · struct · exposed 1
- [SiegeAftermathAction](./SiegeAftermathAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 3
- [SiegeAftermathLogEntry](./SiegeAftermathLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 9
- [SiegeAmbushEventComponent](./SiegeAmbushEventComponent) — `TaleWorlds.CampaignSystem.MapEvents` · class · exposed 4
- [SiegeBombardTargets](./SiegeBombardTargets) — `TaleWorlds.CampaignSystem.Siege` · enum · exposed 4
- [SiegeEngineTypes](./SiegeEngineTypes) — `TaleWorlds.CampaignSystem.Extensions` · class · exposed 1
- [SiegeEvent](./SiegeEvent) — `TaleWorlds.CampaignSystem.Siege` · class · exposed 41
- [SiegeEventManager](./SiegeEventManager) — `TaleWorlds.CampaignSystem.Siege` · class · exposed 6
- [SiegeStrategy](./SiegeStrategy) — `TaleWorlds.CampaignSystem.Siege` · class · exposed 6
- [SimpleAgentOrigin](./SimpleAgentOrigin) — `TaleWorlds.CampaignSystem.AgentOrigins` · class · exposed 17
- [SingleplayerBattleSceneData](./SingleplayerBattleSceneData) — `TaleWorlds.CampaignSystem` · struct · exposed 7
- [SkillEffect](./SkillEffect) — `TaleWorlds.CampaignSystem` · class · exposed 11
- [SkillLevelingManager](./SkillLevelingManager) — `TaleWorlds.CampaignSystem.CharacterDevelopment` · class · exposed 47
- [Skills](./Skills) — `TaleWorlds.CampaignSystem.Extensions` · class · exposed 2
- [StanceLink](./StanceLink) — `TaleWorlds.CampaignSystem` · class · exposed 28
- [StartAllianceDecision](./StartAllianceDecision) — `TaleWorlds.CampaignSystem.Election` · class · exposed 25
- [StartAllianceLogEntry](./StartAllianceLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 9
- [StartBattleAction](./StartBattleAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 5
- [StartCallToWarAgreementLogEntry](./StartCallToWarAgreementLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 9
- [StartMercenaryServiceAction](./StartMercenaryServiceAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 3
- [SupportedFactionDefeatedSceneNotificationItem](./SupportedFactionDefeatedSceneNotificationItem) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` · class · exposed 6
- [Supporter](./Supporter) — `TaleWorlds.CampaignSystem.Election` · class · exposed 9

### T

- [TakePrisonerAction](./TakePrisonerAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 2
- [TakePrisonerLogEntry](./TakePrisonerLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 11
- [TeleportHeroAction](./TeleportHeroAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 9
- [TextObjectExtensions](./TextObjectExtensions) — `TaleWorlds.CampaignSystem.Extensions` · class · exposed 2
- [TournamentCampaignBehavior](./TournamentCampaignBehavior) — `TaleWorlds.CampaignSystem.TournamentGames` · class · exposed 6
- [TournamentGame](./TournamentGame) — `TaleWorlds.CampaignSystem.TournamentGames` · class · exposed 21
- [TournamentManager](./TournamentManager) — `TaleWorlds.CampaignSystem.TournamentGames` · class · exposed 18
- [TournamentMatch](./TournamentMatch) — `TaleWorlds.CampaignSystem.TournamentGames` · class · exposed 15
- [TournamentParticipant](./TournamentParticipant) — `TaleWorlds.CampaignSystem.TournamentGames` · class · exposed 11
- [TournamentRound](./TournamentRound) — `TaleWorlds.CampaignSystem.TournamentGames` · class · exposed 7
- [TournamentTeam](./TournamentTeam) — `TaleWorlds.CampaignSystem.TournamentGames` · class · exposed 9
- [TournamentWonLogEntry](./TournamentWonLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 12
- [Town](./Town) — `TaleWorlds.CampaignSystem.Settlements` · class · exposed 61
- [TownEncounter](./TownEncounter) — `TaleWorlds.CampaignSystem.Encounters` · class · exposed 2
- [TownMarketData](./TownMarketData) — `TaleWorlds.CampaignSystem.Settlements` · class · exposed 16
- [Track](./Track) — `TaleWorlds.CampaignSystem` · class · exposed 14
- [TrackedObject](./TrackedObject) — `TaleWorlds.CampaignSystem` · class · exposed 5
- [TradeAgreementDecision](./TradeAgreementDecision) — `TaleWorlds.CampaignSystem.Election` · class · exposed 25
- [TradeAgreementLogEntry](./TradeAgreementLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 6
- [TradeRumor](./TradeRumor) — `TaleWorlds.CampaignSystem` · class · exposed 5
- [TraitChangedMapNotification](./TraitChangedMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 8
- [TraitLevelingHelper](./TraitLevelingHelper) — `TaleWorlds.CampaignSystem.CharacterDevelopment` · class · exposed 19
- [TraitObject](./TraitObject) — `TaleWorlds.CampaignSystem.CharacterDevelopment` · class · exposed 7
- [TransferCommand](./TransferCommand) — `TaleWorlds.CampaignSystem.Inventory` · struct · exposed 10
- [TransferCommandResult](./TransferCommandResult) — `TaleWorlds.CampaignSystem.Inventory` · class · exposed 9
- [TransferPrisonerAction](./TransferPrisonerAction) — `TaleWorlds.CampaignSystem.Actions` · class · exposed 1
- [TransferPrisonerBarterable](./TransferPrisonerBarterable) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables` · class · exposed 8
- [TributeFinishedMapNotification](./TributeFinishedMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 5
- [TriggerDelegateType](./TriggerDelegateType) — `TaleWorlds.CampaignSystem` · delegate · exposed 0
- [TroopRoster](./TroopRoster) — `TaleWorlds.CampaignSystem.Roster` · class · exposed 52
- [TroopRosterElement](./TroopRosterElement) — `TaleWorlds.CampaignSystem.Roster` · struct · exposed 10
- [TroopTradeDifference](./TroopTradeDifference) — `TaleWorlds.CampaignSystem.Party` · struct · exposed 7
- [TroopUpgradeTracker](./TroopUpgradeTracker) — `TaleWorlds.CampaignSystem` · class · exposed 5
- [TutorialState](./TutorialState) — `TaleWorlds.CampaignSystem.GameState` · class · exposed 5

### V

- [VassalOfferMapNotification](./VassalOfferMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 5
- [Village](./Village) — `TaleWorlds.CampaignSystem.Settlements` · class · exposed 34
- [VillageEncounter](./VillageEncounter) — `TaleWorlds.CampaignSystem.Encounters` · class · exposed 2
- [VillageMarketData](./VillageMarketData) — `TaleWorlds.CampaignSystem.Settlements` · class · exposed 4
- [VillagerPartyComponent](./VillagerPartyComponent) — `TaleWorlds.CampaignSystem.Party.PartyComponents` · class · exposed 15
- [VillageStateChangedLogEntry](./VillageStateChangedLogEntry) — `TaleWorlds.CampaignSystem.LogEntries` · class · exposed 6
- [VillageType](./VillageType) — `TaleWorlds.CampaignSystem.Settlements` · class · exposed 10
- [VisualCreator](./VisualCreator) — `TaleWorlds.CampaignSystem` · class · exposed 2
- [VisualTrackerManager](./VisualTrackerManager) — `TaleWorlds.CampaignSystem` · class · exposed 7

### W

- [WaitDelegate](./WaitDelegate) — `TaleWorlds.CampaignSystem` · delegate · exposed 0
- [WaitMenuOption](./WaitMenuOption) — `TaleWorlds.CampaignSystem.GameMenus` · class · exposed 12
- [WarMapNotification](./WarMapNotification) — `TaleWorlds.CampaignSystem.MapNotificationTypes` · class · exposed 6
- [WarPartyComponent](./WarPartyComponent) — `TaleWorlds.CampaignSystem.Party.PartyComponents` · class · exposed 5
- [WeatherNode](./WeatherNode) — `TaleWorlds.CampaignSystem.Map` · class · exposed 4
- [Workshop](./Workshop) — `TaleWorlds.CampaignSystem.Settlements.Workshops` · class · exposed 22
- [WorkshopType](./WorkshopType) — `TaleWorlds.CampaignSystem.Settlements.Workshops` · class · exposed 24

## See Also

- - [↑ API reference](..//)
- - [↑ version home](../..//)
