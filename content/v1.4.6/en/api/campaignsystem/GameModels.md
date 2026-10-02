---
title: "GameModels"
description: "GameModels: a public class in TaleWorlds.CampaignSystem, inheriting GameModelsManager; 125 exposed members (0 methods, 124 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameModels.cs."
---
# GameModels

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class GameModels : GameModelsManager`
**File:** `TaleWorlds.CampaignSystem/GameModels.cs`

## Overview

GameModels lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameModels.cs. It is a public class (sealed), implementing/inheriting GameModelsManager; the inheritance chain is GameModels → GameModelsManager. It exposes 125 public/protected members: 124 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameModels is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain GameModels → GameModelsManager. The surface is property-led (properties 124/125, methods 0/125), so it mostly exposes state for reading. GameModelsManager on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameModels.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapVisibilityModel` | `public MapVisibilityModel MapVisibilityModel` | property |
| `InformationRestrictionModel` | `public InformationRestrictionModel InformationRestrictionModel` | property |
| `PartySpeedCalculatingModel` | `public PartySpeedModel PartySpeedCalculatingModel` | property |
| `PartyHealingModel` | `public PartyHealingModel PartyHealingModel` | property |
| `CaravanModel` | `public CaravanModel CaravanModel` | property |
| `PartyTrainingModel` | `public PartyTrainingModel PartyTrainingModel` | property |
| `BarterModel` | `public BarterModel BarterModel` | property |
| `PersuasionModel` | `public PersuasionModel PersuasionModel` | property |
| `DefectionModel` | `public DefectionModel DefectionModel` | property |
| `CombatSimulationModel` | `public CombatSimulationModel CombatSimulationModel` | property |
| `CombatXpModel` | `public CombatXpModel CombatXpModel` | property |
| `GenericXpModel` | `public GenericXpModel GenericXpModel` | property |
| `TradeAgreementModel` | `public TradeAgreementModel TradeAgreementModel` | property |
| `SmithingModel` | `public SmithingModel SmithingModel` | property |
| `PartyTradeModel` | `public PartyTradeModel PartyTradeModel` | property |
| `RansomValueCalculationModel` | `public RansomValueCalculationModel RansomValueCalculationModel` | property |
| `RaidModel` | `public RaidModel RaidModel` | property |
| `MobilePartyFoodConsumptionModel` | `public MobilePartyFoodConsumptionModel MobilePartyFoodConsumptionModel` | property |
| `PartyFoodBuyingModel` | `public PartyFoodBuyingModel PartyFoodBuyingModel` | property |
| `PartyImpairmentModel` | `public PartyImpairmentModel PartyImpairmentModel` | property |
| `PartyMoraleModel` | `public PartyMoraleModel PartyMoraleModel` | property |
| `PartyDesertionModel` | `public PartyDesertionModel PartyDesertionModel` | property |
| `PartyTransitionModel` | `public PartyTransitionModel PartyTransitionModel` | property |
| `DiplomacyModel` | `public DiplomacyModel DiplomacyModel` | property |
| `AllianceModel` | `public AllianceModel AllianceModel` | property |
| `MinorFactionsModel` | `public MinorFactionsModel MinorFactionsModel` | property |
| `HideoutModel` | `public HideoutModel HideoutModel` | property |
| `KingdomCreationModel` | `public KingdomCreationModel KingdomCreationModel` | property |
| `KingdomDecisionPermissionModel` | `public KingdomDecisionPermissionModel KingdomDecisionPermissionModel` | property |
| `EmissaryModel` | `public EmissaryModel EmissaryModel` | property |
| `CharacterDevelopmentModel` | `public CharacterDevelopmentModel CharacterDevelopmentModel` | property |
| `CharacterStatsModel` | `public CharacterStatsModel CharacterStatsModel` | property |
| `EncounterModel` | `public EncounterModel EncounterModel` | property |
| `SettlementPatrolModel` | `public SettlementPatrolModel SettlementPatrolModel` | property |
| `ItemDiscardModel` | `public ItemDiscardModel ItemDiscardModel` | property |
| `ValuationModel` | `public ValuationModel ValuationModel` | property |
| `PartySizeLimitModel` | `public PartySizeLimitModel PartySizeLimitModel` | property |
| `PartyShipLimitModel` | `public PartyShipLimitModel PartyShipLimitModel` | property |
| `InventoryCapacityModel` | `public InventoryCapacityModel InventoryCapacityModel` | property |
| `PartyWageModel` | `public PartyWageModel PartyWageModel` | property |
| `VillageProductionCalculatorModel` | `public VillageProductionCalculatorModel VillageProductionCalculatorModel` | property |
| `VolunteerModel` | `public VolunteerModel VolunteerModel` | property |
| `RomanceModel` | `public RomanceModel RomanceModel` | property |
| `MobilePartyAIModel` | `public MobilePartyAIModel MobilePartyAIModel` | property |
| `ArmyManagementCalculationModel` | `public ArmyManagementCalculationModel ArmyManagementCalculationModel` | property |
| `BanditDensityModel` | `public BanditDensityModel BanditDensityModel` | property |
| `EncounterGameMenuModel` | `public EncounterGameMenuModel EncounterGameMenuModel` | property |
| `BattleRewardModel` | `public BattleRewardModel BattleRewardModel` | property |
| `MapTrackModel` | `public MapTrackModel MapTrackModel` | property |
| `MapDistanceModel` | `public MapDistanceModel MapDistanceModel` | property |
| `PartyNavigationModel` | `public PartyNavigationModel PartyNavigationModel` | property |
| `MapWeatherModel` | `public MapWeatherModel MapWeatherModel` | property |
| `TargetScoreCalculatingModel` | `public TargetScoreCalculatingModel TargetScoreCalculatingModel` | property |
| `TradeItemPriceFactorModel` | `public TradeItemPriceFactorModel TradeItemPriceFactorModel` | property |
| `SettlementEconomyModel` | `public SettlementEconomyModel SettlementEconomyModel` | property |
| `SettlementFoodModel` | `public SettlementFoodModel SettlementFoodModel` | property |
| `SettlementValueModel` | `public SettlementValueModel SettlementValueModel` | property |
| `SettlementMilitiaModel` | `public SettlementMilitiaModel SettlementMilitiaModel` | property |
| `SettlementLoyaltyModel` | `public SettlementLoyaltyModel SettlementLoyaltyModel` | property |
| `SettlementSecurityModel` | `public SettlementSecurityModel SettlementSecurityModel` | property |
| `SettlementProsperityModel` | `public SettlementProsperityModel SettlementProsperityModel` | property |
| `SettlementGarrisonModel` | `public SettlementGarrisonModel SettlementGarrisonModel` | property |
| `ClanTierModel` | `public ClanTierModel ClanTierModel` | property |
| `VassalRewardsModel` | `public VassalRewardsModel VassalRewardsModel` | property |
| `ClanPoliticsModel` | `public ClanPoliticsModel ClanPoliticsModel` | property |
| `ClanFinanceModel` | `public ClanFinanceModel ClanFinanceModel` | property |
| `SettlementTaxModel` | `public SettlementTaxModel SettlementTaxModel` | property |
| `HeroAgentLocationModel` | `public HeroAgentLocationModel HeroAgentLocationModel` | property |
| `HeirSelectionCalculationModel` | `public HeirSelectionCalculationModel HeirSelectionCalculationModel` | property |
| `HeroDeathProbabilityCalculationModel` | `public HeroDeathProbabilityCalculationModel HeroDeathProbabilityCalculationModel` | property |
| `BuildingConstructionModel` | `public BuildingConstructionModel BuildingConstructionModel` | property |
| `BuildingEffectModel` | `public BuildingEffectModel BuildingEffectModel` | property |
| `WallHitPointCalculationModel` | `public WallHitPointCalculationModel WallHitPointCalculationModel` | property |
| `MarriageModel` | `public MarriageModel MarriageModel` | property |
| `AgeModel` | `public AgeModel AgeModel` | property |
| `PlayerProgressionModel` | `public PlayerProgressionModel PlayerProgressionModel` | property |
| `DailyTroopXpBonusModel` | `public DailyTroopXpBonusModel DailyTroopXpBonusModel` | property |
| `PregnancyModel` | `public PregnancyModel PregnancyModel` | property |
| `NotablePowerModel` | `public NotablePowerModel NotablePowerModel` | property |
| `MilitaryPowerModel` | `public MilitaryPowerModel MilitaryPowerModel` | property |
| `PrisonerDonationModel` | `public PrisonerDonationModel PrisonerDonationModel` | property |
| `NotableSpawnModel` | `public NotableSpawnModel NotableSpawnModel` | property |
| `TournamentModel` | `public TournamentModel TournamentModel` | property |
| `CrimeModel` | `public CrimeModel CrimeModel` | property |
| `DisguiseDetectionModel` | `public DisguiseDetectionModel DisguiseDetectionModel` | property |
| `BribeCalculationModel` | `public BribeCalculationModel BribeCalculationModel` | property |
| `TroopSacrificeModel` | `public TroopSacrificeModel TroopSacrificeModel` | property |
| `SiegeStrategyActionModel` | `public SiegeStrategyActionModel SiegeStrategyActionModel` | property |
| `SiegeEventModel` | `public SiegeEventModel SiegeEventModel` | property |
| `SiegeAftermathModel` | `public SiegeAftermathModel SiegeAftermathModel` | property |
| `SiegeLordsHallFightModel` | `public SiegeLordsHallFightModel SiegeLordsHallFightModel` | property |
| `CompanionHiringPriceCalculationModel` | `public CompanionHiringPriceCalculationModel CompanionHiringPriceCalculationModel` | property |
| `BuildingScoreCalculationModel` | `public BuildingScoreCalculationModel BuildingScoreCalculationModel` | property |
| `SettlementAccessModel` | `public SettlementAccessModel SettlementAccessModel` | property |
| `IssueModel` | `public IssueModel IssueModel` | property |
| `PrisonerRecruitmentCalculationModel` | `public PrisonerRecruitmentCalculationModel PrisonerRecruitmentCalculationModel` | property |
| `PartyTroopUpgradeModel` | `public PartyTroopUpgradeModel PartyTroopUpgradeModel` | property |
| `TavernMercenaryTroopsModel` | `public TavernMercenaryTroopsModel TavernMercenaryTroopsModel` | property |
| `WorkshopModel` | `public WorkshopModel WorkshopModel` | property |
| `DifficultyModel` | `public DifficultyModel DifficultyModel` | property |
| `LocationModel` | `public LocationModel LocationModel` | property |
| `PrisonBreakModel` | `public PrisonBreakModel PrisonBreakModel` | property |
| `BattleCaptainModel` | `public BattleCaptainModel BattleCaptainModel` | property |
| `ExecutionRelationModel` | `public ExecutionRelationModel ExecutionRelationModel` | property |
| `BannerItemModel` | `public BannerItemModel BannerItemModel` | property |
| `DelayedTeleportationModel` | `public DelayedTeleportationModel DelayedTeleportationModel` | property |
| `TroopSupplierProbabilityModel` | `public TroopSupplierProbabilityModel TroopSupplierProbabilityModel` | property |
| `CutsceneSelectionModel` | `public CutsceneSelectionModel CutsceneSelectionModel` | property |
| `EquipmentSelectionModel` | `public EquipmentSelectionModel EquipmentSelectionModel` | property |
| `AlleyModel` | `public AlleyModel AlleyModel` | property |
| `VoiceOverModel` | `public VoiceOverModel VoiceOverModel` | property |
| `CampaignTimeModel` | `public CampaignTimeModel CampaignTimeModel` | property |
| `VillageTradeModel` | `public VillageTradeModel VillageTradeModel` | property |
| `HeroCreationModel` | `public HeroCreationModel HeroCreationModel` | property |
| `CampaignShipDamageModel` | `public CampaignShipDamageModel CampaignShipDamageModel` | property |
| `CampaignShipParametersModel` | `public CampaignShipParametersModel CampaignShipParametersModel` | property |
| `BuildingModel` | `public BuildingModel BuildingModel` | property |
| `ShipCostModel` | `public ShipCostModel ShipCostModel` | property |
| `ShipStatModel` | `public ShipStatModel ShipStatModel` | property |
| `SceneModel` | `public SceneModel SceneModel` | property |
| `BodyPropertiesModel` | `public BodyPropertiesModel BodyPropertiesModel` | property |
| `IncidentModel` | `public IncidentModel IncidentModel` | property |
| `FleetManagementModel` | `public FleetManagementModel FleetManagementModel` | property |
| `ClanMemberPartyRoleModel` | `public ClanMemberPartyRoleModel ClanMemberPartyRoleModel` | property |
| `GameModels` | `public GameModels(IEnumerable<GameModel>inputComponents) : base(inputComponents)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
