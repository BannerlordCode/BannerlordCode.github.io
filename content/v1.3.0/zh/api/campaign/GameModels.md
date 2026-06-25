---
title: "GameModels"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameModels`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameModels

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class GameModels : GameModelsManager`
**Base:** `GameModelsManager`
**File:** `TaleWorlds.CampaignSystem/GameModels.cs`

## 概述

`GameModels` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapVisibilityModel` | `public MapVisibilityModel MapVisibilityModel { get; }` |
| `InformationRestrictionModel` | `public InformationRestrictionModel InformationRestrictionModel { get; }` |
| `PartySpeedCalculatingModel` | `public PartySpeedModel PartySpeedCalculatingModel { get; }` |
| `PartyHealingModel` | `public PartyHealingModel PartyHealingModel { get; }` |
| `CaravanModel` | `public CaravanModel CaravanModel { get; }` |
| `PartyTrainingModel` | `public PartyTrainingModel PartyTrainingModel { get; }` |
| `BarterModel` | `public BarterModel BarterModel { get; }` |
| `PersuasionModel` | `public PersuasionModel PersuasionModel { get; }` |
| `DefectionModel` | `public DefectionModel DefectionModel { get; }` |
| `CombatSimulationModel` | `public CombatSimulationModel CombatSimulationModel { get; }` |
| `CombatXpModel` | `public CombatXpModel CombatXpModel { get; }` |
| `GenericXpModel` | `public GenericXpModel GenericXpModel { get; }` |
| `TradeAgreementModel` | `public TradeAgreementModel TradeAgreementModel { get; }` |
| `SmithingModel` | `public SmithingModel SmithingModel { get; }` |
| `PartyTradeModel` | `public PartyTradeModel PartyTradeModel { get; }` |
| `RansomValueCalculationModel` | `public RansomValueCalculationModel RansomValueCalculationModel { get; }` |
| `RaidModel` | `public RaidModel RaidModel { get; }` |
| `MobilePartyFoodConsumptionModel` | `public MobilePartyFoodConsumptionModel MobilePartyFoodConsumptionModel { get; }` |
| `PartyFoodBuyingModel` | `public PartyFoodBuyingModel PartyFoodBuyingModel { get; }` |
| `PartyImpairmentModel` | `public PartyImpairmentModel PartyImpairmentModel { get; }` |
| `PartyMoraleModel` | `public PartyMoraleModel PartyMoraleModel { get; }` |
| `PartyDesertionModel` | `public PartyDesertionModel PartyDesertionModel { get; }` |
| `PartyTransitionModel` | `public PartyTransitionModel PartyTransitionModel { get; }` |
| `DiplomacyModel` | `public DiplomacyModel DiplomacyModel { get; }` |
| `AllianceModel` | `public AllianceModel AllianceModel { get; }` |
| `MinorFactionsModel` | `public MinorFactionsModel MinorFactionsModel { get; }` |
| `HideoutModel` | `public HideoutModel HideoutModel { get; }` |
| `KingdomCreationModel` | `public KingdomCreationModel KingdomCreationModel { get; }` |
| `KingdomDecisionPermissionModel` | `public KingdomDecisionPermissionModel KingdomDecisionPermissionModel { get; }` |
| `EmissaryModel` | `public EmissaryModel EmissaryModel { get; }` |
| `CharacterDevelopmentModel` | `public CharacterDevelopmentModel CharacterDevelopmentModel { get; }` |
| `CharacterStatsModel` | `public CharacterStatsModel CharacterStatsModel { get; }` |
| `EncounterModel` | `public EncounterModel EncounterModel { get; }` |
| `SettlementPatrolModel` | `public SettlementPatrolModel SettlementPatrolModel { get; }` |
| `ItemDiscardModel` | `public ItemDiscardModel ItemDiscardModel { get; }` |
| `ValuationModel` | `public ValuationModel ValuationModel { get; }` |
| `PartySizeLimitModel` | `public PartySizeLimitModel PartySizeLimitModel { get; }` |
| `PartyShipLimitModel` | `public PartyShipLimitModel PartyShipLimitModel { get; }` |
| `InventoryCapacityModel` | `public InventoryCapacityModel InventoryCapacityModel { get; }` |
| `PartyWageModel` | `public PartyWageModel PartyWageModel { get; }` |
| `VillageProductionCalculatorModel` | `public VillageProductionCalculatorModel VillageProductionCalculatorModel { get; }` |
| `VolunteerModel` | `public VolunteerModel VolunteerModel { get; }` |
| `RomanceModel` | `public RomanceModel RomanceModel { get; }` |
| `MobilePartyAIModel` | `public MobilePartyAIModel MobilePartyAIModel { get; }` |
| `ArmyManagementCalculationModel` | `public ArmyManagementCalculationModel ArmyManagementCalculationModel { get; }` |
| `BanditDensityModel` | `public BanditDensityModel BanditDensityModel { get; }` |
| `EncounterGameMenuModel` | `public EncounterGameMenuModel EncounterGameMenuModel { get; }` |
| `BattleRewardModel` | `public BattleRewardModel BattleRewardModel { get; }` |
| `MapTrackModel` | `public MapTrackModel MapTrackModel { get; }` |
| `MapDistanceModel` | `public MapDistanceModel MapDistanceModel { get; }` |
| `PartyNavigationModel` | `public PartyNavigationModel PartyNavigationModel { get; }` |
| `MapWeatherModel` | `public MapWeatherModel MapWeatherModel { get; }` |
| `TargetScoreCalculatingModel` | `public TargetScoreCalculatingModel TargetScoreCalculatingModel { get; }` |
| `TradeItemPriceFactorModel` | `public TradeItemPriceFactorModel TradeItemPriceFactorModel { get; }` |
| `SettlementEconomyModel` | `public SettlementEconomyModel SettlementEconomyModel { get; }` |
| `SettlementFoodModel` | `public SettlementFoodModel SettlementFoodModel { get; }` |
| `SettlementValueModel` | `public SettlementValueModel SettlementValueModel { get; }` |
| `SettlementMilitiaModel` | `public SettlementMilitiaModel SettlementMilitiaModel { get; }` |
| `SettlementLoyaltyModel` | `public SettlementLoyaltyModel SettlementLoyaltyModel { get; }` |
| `SettlementSecurityModel` | `public SettlementSecurityModel SettlementSecurityModel { get; }` |
| `SettlementProsperityModel` | `public SettlementProsperityModel SettlementProsperityModel { get; }` |
| `SettlementGarrisonModel` | `public SettlementGarrisonModel SettlementGarrisonModel { get; }` |
| `ClanTierModel` | `public ClanTierModel ClanTierModel { get; }` |
| `VassalRewardsModel` | `public VassalRewardsModel VassalRewardsModel { get; }` |
| `ClanPoliticsModel` | `public ClanPoliticsModel ClanPoliticsModel { get; }` |
| `ClanFinanceModel` | `public ClanFinanceModel ClanFinanceModel { get; }` |
| `SettlementTaxModel` | `public SettlementTaxModel SettlementTaxModel { get; }` |
| `HeroAgentLocationModel` | `public HeroAgentLocationModel HeroAgentLocationModel { get; }` |
| `HeirSelectionCalculationModel` | `public HeirSelectionCalculationModel HeirSelectionCalculationModel { get; }` |
| `HeroDeathProbabilityCalculationModel` | `public HeroDeathProbabilityCalculationModel HeroDeathProbabilityCalculationModel { get; }` |
| `BuildingConstructionModel` | `public BuildingConstructionModel BuildingConstructionModel { get; }` |
| `BuildingEffectModel` | `public BuildingEffectModel BuildingEffectModel { get; }` |
| `WallHitPointCalculationModel` | `public WallHitPointCalculationModel WallHitPointCalculationModel { get; }` |
| `MarriageModel` | `public MarriageModel MarriageModel { get; }` |
| `AgeModel` | `public AgeModel AgeModel { get; }` |
| `PlayerProgressionModel` | `public PlayerProgressionModel PlayerProgressionModel { get; }` |
| `DailyTroopXpBonusModel` | `public DailyTroopXpBonusModel DailyTroopXpBonusModel { get; }` |
| `PregnancyModel` | `public PregnancyModel PregnancyModel { get; }` |
| `NotablePowerModel` | `public NotablePowerModel NotablePowerModel { get; }` |
| `MilitaryPowerModel` | `public MilitaryPowerModel MilitaryPowerModel { get; }` |
| `PrisonerDonationModel` | `public PrisonerDonationModel PrisonerDonationModel { get; }` |
| `NotableSpawnModel` | `public NotableSpawnModel NotableSpawnModel { get; }` |
| `TournamentModel` | `public TournamentModel TournamentModel { get; }` |
| `CrimeModel` | `public CrimeModel CrimeModel { get; }` |
| `DisguiseDetectionModel` | `public DisguiseDetectionModel DisguiseDetectionModel { get; }` |
| `BribeCalculationModel` | `public BribeCalculationModel BribeCalculationModel { get; }` |
| `TroopSacrificeModel` | `public TroopSacrificeModel TroopSacrificeModel { get; }` |
| `SiegeStrategyActionModel` | `public SiegeStrategyActionModel SiegeStrategyActionModel { get; }` |
| `SiegeEventModel` | `public SiegeEventModel SiegeEventModel { get; }` |
| `SiegeAftermathModel` | `public SiegeAftermathModel SiegeAftermathModel { get; }` |
| `SiegeLordsHallFightModel` | `public SiegeLordsHallFightModel SiegeLordsHallFightModel { get; }` |
| `CompanionHiringPriceCalculationModel` | `public CompanionHiringPriceCalculationModel CompanionHiringPriceCalculationModel { get; }` |
| `BuildingScoreCalculationModel` | `public BuildingScoreCalculationModel BuildingScoreCalculationModel { get; }` |
| `SettlementAccessModel` | `public SettlementAccessModel SettlementAccessModel { get; }` |
| `IssueModel` | `public IssueModel IssueModel { get; }` |
| `PrisonerRecruitmentCalculationModel` | `public PrisonerRecruitmentCalculationModel PrisonerRecruitmentCalculationModel { get; }` |
| `PartyTroopUpgradeModel` | `public PartyTroopUpgradeModel PartyTroopUpgradeModel { get; }` |
| `TavernMercenaryTroopsModel` | `public TavernMercenaryTroopsModel TavernMercenaryTroopsModel { get; }` |
| `WorkshopModel` | `public WorkshopModel WorkshopModel { get; }` |
| `DifficultyModel` | `public DifficultyModel DifficultyModel { get; }` |
| `LocationModel` | `public LocationModel LocationModel { get; }` |
| `PrisonBreakModel` | `public PrisonBreakModel PrisonBreakModel { get; }` |
| `BattleCaptainModel` | `public BattleCaptainModel BattleCaptainModel { get; }` |
| `ExecutionRelationModel` | `public ExecutionRelationModel ExecutionRelationModel { get; }` |
| `BannerItemModel` | `public BannerItemModel BannerItemModel { get; }` |
| `DelayedTeleportationModel` | `public DelayedTeleportationModel DelayedTeleportationModel { get; }` |
| `TroopSupplierProbabilityModel` | `public TroopSupplierProbabilityModel TroopSupplierProbabilityModel { get; }` |
| `CutsceneSelectionModel` | `public CutsceneSelectionModel CutsceneSelectionModel { get; }` |
| `EquipmentSelectionModel` | `public EquipmentSelectionModel EquipmentSelectionModel { get; }` |
| `AlleyModel` | `public AlleyModel AlleyModel { get; }` |
| `VoiceOverModel` | `public VoiceOverModel VoiceOverModel { get; }` |
| `CampaignTimeModel` | `public CampaignTimeModel CampaignTimeModel { get; }` |
| `VillageTradeModel` | `public VillageTradeModel VillageTradeModel { get; }` |
| `HeroCreationModel` | `public HeroCreationModel HeroCreationModel { get; }` |
| `CampaignShipDamageModel` | `public CampaignShipDamageModel CampaignShipDamageModel { get; }` |
| `CampaignShipParametersModel` | `public CampaignShipParametersModel CampaignShipParametersModel { get; }` |
| `BuildingModel` | `public BuildingModel BuildingModel { get; }` |
| `ShipCostModel` | `public ShipCostModel ShipCostModel { get; }` |
| `ShipStatModel` | `public ShipStatModel ShipStatModel { get; }` |
| `SceneModel` | `public SceneModel SceneModel { get; }` |
| `BodyPropertiesModel` | `public BodyPropertiesModel BodyPropertiesModel { get; }` |
| `IncidentModel` | `public IncidentModel IncidentModel { get; }` |
| `FleetManagementModel` | `public FleetManagementModel FleetManagementModel { get; }` |

## 使用示例

```csharp
var example = new GameModels();
```

## 参见

- [完整类目录](../catalog)