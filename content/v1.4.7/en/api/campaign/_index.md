---
title: "Campaign — Campaign world: entities and state"
description: "The root `TaleWorlds.CampaignSystem` namespace. This is the data plane of the persistent world: `Campaign`, `Hero`, `Cla"
---
# Campaign — Campaign world: entities and state

The root `TaleWorlds.CampaignSystem` namespace. This is the **data plane of the persistent world**: `Campaign`, `Hero`, `Clan`, `Kingdom`, `Settlement`, `Town`, `Village`, `MobileParty`, `Army` and their sub-namespaces (`Party`, `Settlements`, `MapEvents`, …).

Objects in this layer **end up in saves**. Writing their fields directly desynchronises state from the event system. To change the world, go through `CampaignEvents` and the `*Action` types in [Campaign-Ext](../campaign-ext/).

Correct reading order here: `Campaign` (current-campaign entry) → the entity you care about → its events.

## Pages in this area (190)

[AcceptCallToWarAgreementDecision](AcceptCallToWarAgreementDecision) · [AcceptCallToWarOfferMapNotification](AcceptCallToWarOfferMapNotification) · [AccompanyingCharacter](AccompanyingCharacter)
[AddCompanionAction](AddCompanionAction) · [AddHeroToPartyAction](AddHeroToPartyAction) · [AdoptHeroAction](AdoptHeroAction)
[AiBehavior](AiBehavior) · [Alley](Alley) · [AlleyLeaderDiedMapNotification](AlleyLeaderDiedMapNotification)
[AlleyUnderAttackMapNotification](AlleyUnderAttackMapNotification) · [AllianceOfferMapNotification](AllianceOfferMapNotification) · [AnchorPoint](AnchorPoint)
[AntiEmpireConspiracyBeginsSceneNotificationItem](AntiEmpireConspiracyBeginsSceneNotificationItem) · [ApplyHeirSelectionAction](ApplyHeirSelectionAction) · [ArmyCreationLogEntry](ArmyCreationLogEntry)
[ArmyCreationMapNotification](ArmyCreationMapNotification) · [ArmyDispersionLogEntry](ArmyDispersionLogEntry) · [ArmyDispersionMapNotification](ArmyDispersionMapNotification)
[ArmyDispersionReasonEnumResolver](ArmyDispersionReasonEnumResolver) · [Attributes](Attributes) · [BanditPartyComponent](BanditPartyComponent)
[BannerEditorState](BannerEditorState) · [BarberState](BarberState) · [BarterData](BarterData)
[BarterGroup](BarterGroup) · [BarterManager](BarterManager) · [BarterResult](BarterResult)
[Barterable](Barterable) · [BattleStartedLogEntry](BattleStartedLogEntry) · [BattleTypeEnumResolver](BattleTypeEnumResolver)
[BeHostileAction](BeHostileAction) · [BecomeKingSceneNotificationItem](BecomeKingSceneNotificationItem) · [BesiegeSettlementLogEntry](BesiegeSettlementLogEntry)
[BesiegerCamp](BesiegerCamp) · [BlockadeBattleMapEvent](BlockadeBattleMapEvent) · [BreakInOutBesiegedSettlementAction](BreakInOutBesiegedSettlementAction)
[Building](Building) · [BuildingEffectEnum](BuildingEffectEnum) · [BuildingEffectIncrementType](BuildingEffectIncrementType)
[BuildingType](BuildingType) · [Campaign](Campaign) · [CampaignBattleResult](CampaignBattleResult)
[CampaignObjectManager](CampaignObjectManager) · [CampaignSceneNotificationHelper](CampaignSceneNotificationHelper) · [CanTalkToHeroDelegate](CanTalkToHeroDelegate)
[CanUseDoor](CanUseDoor) · [CaravanPartyComponent](CaravanPartyComponent) · [CastleEncounter](CastleEncounter)
[ChangeAlleyOwnerLogEntry](ChangeAlleyOwnerLogEntry) · [ChangeRomanticStateLogEntry](ChangeRomanticStateLogEntry) · [CharacterAttributesResolver](CharacterAttributesResolver)
[CharacterCreationBannerEditorStage](CharacterCreationBannerEditorStage) · [CharacterCreationClanNamingStage](CharacterCreationClanNamingStage) · [CharacterCreationContent](CharacterCreationContent)
[CharacterCreationCultureStage](CharacterCreationCultureStage) · [CharacterCreationFaceGeneratorStage](CharacterCreationFaceGeneratorStage) · [CharacterCreationManager](CharacterCreationManager)
[CharacterData](CharacterData) · [CharacterDeveloperState](CharacterDeveloperState) · [CharacterPerksResolver](CharacterPerksResolver)
[CharacterRelationManager](CharacterRelationManager) · [CharacterTraitsResolver](CharacterTraitsResolver) · [ClanMemberPeaceDeathSceneNotificationItem](ClanMemberPeaceDeathSceneNotificationItem)
[ClanMemberWarDeathSceneNotificationItem](ClanMemberWarDeathSceneNotificationItem) · [ClanState](ClanState) · [CraftingOrder](CraftingOrder)
[CraftingState](CraftingState) · [CreateLocationCharacterDelegate](CreateLocationCharacterDelegate) · [CustomPartyComponent](CustomPartyComponent)
[DeathOldAgeSceneNotificationItem](DeathOldAgeSceneNotificationItem) · [DeclareWarBarterable](DeclareWarBarterable) · [DeclareWarDecision](DeclareWarDecision)
[DefaultBuildingTypes](DefaultBuildingTypes) · [DefaultCulturalFeats](DefaultCulturalFeats) · [DefaultEncounter](DefaultEncounter)
[DefaultEncyclopediaClanPage](DefaultEncyclopediaClanPage) · [DefaultEncyclopediaFactionPage](DefaultEncyclopediaFactionPage) · [DefaultEncyclopediaHeroPage](DefaultEncyclopediaHeroPage)
[DefaultEncyclopediaSettlementPage](DefaultEncyclopediaSettlementPage) · [DefaultEncyclopediaShipPage](DefaultEncyclopediaShipPage) · [DefaultEncyclopediaUnitPage](DefaultEncyclopediaUnitPage)
[DefaultFigureheads](DefaultFigureheads) · [DefaultPerks](DefaultPerks) · [DefaultSiegeStrategies](DefaultSiegeStrategies)
[DefaultSkillLevelingManager](DefaultSkillLevelingManager) · [DefaultTraits](DefaultTraits) · [DefaultVillageTypes](DefaultVillageTypes)
[DefaultsBarterGroup](DefaultsBarterGroup) · [EducationState](EducationState) · [EncyclopediaFilterGroup](EncyclopediaFilterGroup)
[EncyclopediaFilterItem](EncyclopediaFilterItem) · [EncyclopediaListItem](EncyclopediaListItem) · [EncyclopediaListItemComparerBase](EncyclopediaListItemComparerBase)
[EncyclopediaListItemNameComparer](EncyclopediaListItemNameComparer) · [EncyclopediaManager](EncyclopediaManager) · [EndCaptivityDetailEnumResolver](EndCaptivityDetailEnumResolver)
[ExplainedNumber](ExplainedNumber) · [FakeInventoryListener](FakeInventoryListener) · [FakeMarketData](FakeMarketData)
[FastModeOptionsProvider](FastModeOptionsProvider) · [FastModeSubModule](FastModeSubModule) · [FeatObject](FeatObject)
[Fief](Fief) · [FiefBarterGroup](FiefBarterGroup) · [FiefBarterable](FiefBarterable)
[FieldBattleEventComponent](FieldBattleEventComponent) · [FightTournamentGame](FightTournamentGame) · [Figurehead](Figurehead)
[FlattenedTroopRoster](FlattenedTroopRoster) · [FlattenedTroopRosterElement](FlattenedTroopRosterElement) · [ForceSuppliesEventComponent](ForceSuppliesEventComponent)
[ForceVolunteersEventComponent](ForceVolunteersEventComponent) · [GameMenu](GameMenu) · [GameMenuCallbackManager](GameMenuCallbackManager)
[GameMenuEventHandler](GameMenuEventHandler) · [GameMenuEventHandlerDelegate](GameMenuEventHandlerDelegate) · [GameMenuInitDelegate](GameMenuInitDelegate)
[GameMenuInitializationHandler](GameMenuInitializationHandler) · [GarrisonPartyComponent](GarrisonPartyComponent) · [GoldBarterable](GoldBarterable)
[HeroCreator](HeroCreator) · [HeroDeveloper](HeroDeveloper) · [Hideout](Hideout)
[HideoutEncounter](HideoutEncounter) · [HideoutEventComponent](HideoutEventComponent) · [ICustomSystemManager](ICustomSystemManager)
[IInteractablePoint](IInteractablePoint) · [ILocatable](ILocatable) · [IMapEventVisual](IMapEventVisual)
[IMapPoint](IMapPoint) · [IMapScene](IMapScene) · [IMapSceneCreator](IMapSceneCreator)
[IPlayerTradeBehavior](IPlayerTradeBehavior) · [ISettlementDataHolder](ISettlementDataHolder) · [ISiegeEventSide](ISiegeEventSide)
[ISiegeEventVisual](ISiegeEventVisual) · [ITournamentManager](ITournamentManager) · [Incident](Incident)
[IncidentEffect](IncidentEffect) · [InventoryListener](InventoryListener) · [InventoryLogic](InventoryLogic)
[InventoryTransferItemEvent](InventoryTransferItemEvent) · [IsTroopTransferableDelegate](IsTroopTransferableDelegate) · [ItemBarterable](ItemBarterable)
[ItemCategories](ItemCategories) · [ItemObjectExtensions](ItemObjectExtensions) · [ItemRoster](ItemRoster)
[Items](Items) · [JoinKingdomAsClanBarterable](JoinKingdomAsClanBarterable) · [LocatableSearchData](LocatableSearchData)
[Location](Location) · [LocationCharacter](LocationCharacter) · [LocationComplex](LocationComplex)
[LocationEncounter](LocationEncounter) · [LordPartyComponent](LordPartyComponent) · [MBEquipmentRosterExtensions](MBEquipmentRosterExtensions)
[MakePeaceKingdomDecision](MakePeaceKingdomDecision) · [MetaDataExtensions](MetaDataExtensions) · [MilitiaPartyComponent](MilitiaPartyComponent)
[MobileParty](MobileParty) · [MobilePartyAi](MobilePartyAi) · [NavigationCache](NavigationCache)
[NavigationCacheElement](NavigationCacheElement) · [NumberChangedCallback](NumberChangedCallback) · [PartyAgentOrigin](PartyAgentOrigin)
[PartyGroupAgentOrigin](PartyGroupAgentOrigin) · [PartyGroupTroopSupplier](PartyGroupTroopSupplier) · [PartyScreenLogic](PartyScreenLogic)
[PlayerEncounter](PlayerEncounter) · [PlayerEncounterState](PlayerEncounterState) · [PlayerSiege](PlayerSiege)
[PlayerTownVisit](PlayerTownVisit) · [ProposeCallToWarAgreementDecision](ProposeCallToWarAgreementDecision) · [Romance](Romance)
[RosterTroopState](RosterTroopState) · [SandBoxNavigationCache](SandBoxNavigationCache) · [Ship](Ship)
[SiegeEvent](SiegeEvent) · [SimpleAgentOrigin](SimpleAgentOrigin) · [StartAllianceDecision](StartAllianceDecision)
[TournamentCampaignBehavior](TournamentCampaignBehavior) · [TournamentGame](TournamentGame) · [TournamentManager](TournamentManager)
[TournamentMatch](TournamentMatch) · [Town](Town) · [TradeAgreementDecision](TradeAgreementDecision)
[TransferCommand](TransferCommand) · [TroopRoster](TroopRoster) · [Workshop](Workshop)
[WorkshopType](WorkshopType)

## Sibling areas

[core](../core/) · [core-extra](../core-extra/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [campaign-ext](../campaign-ext/) · [gui](../gui/) · [save-system](../save-system/) · [viewmodel](../viewmodel/) · [localization](../localization/) · [engine](../engine/) · [system](../system/) · [custombattle](../custombattle/) · [modulemanager](../modulemanager/) · [network](../network/) · [sandbox](../sandbox/) · [storymode](../storymode/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
