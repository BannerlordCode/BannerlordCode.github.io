---
title: "GameModels"
description: "GameModels：TaleWorlds.CampaignSystem 的 public 类，继承 GameModelsManager；公开成员 125 个（方法 0、属性 124、字段 0）。源文件 TaleWorlds.CampaignSystem/GameModels.cs。"
---
# GameModels

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class GameModels : GameModelsManager`
**File:** `TaleWorlds.CampaignSystem/GameModels.cs`

## 概述

GameModels 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameModels.cs。它是一个 public 类（sealed），实现/继承 GameModelsManager，继承链为 GameModels → GameModelsManager。public/protected 成员共 125 个：124 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameModels 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 GameModels → GameModelsManager。成员构成以属性为主（属性 124/125，方法 0/125），对外主要以状态读取接口暴露。继承链上的 GameModelsManager 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameModels.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapVisibilityModel` | `public MapVisibilityModel MapVisibilityModel` | 属性 |
| `InformationRestrictionModel` | `public InformationRestrictionModel InformationRestrictionModel` | 属性 |
| `PartySpeedCalculatingModel` | `public PartySpeedModel PartySpeedCalculatingModel` | 属性 |
| `PartyHealingModel` | `public PartyHealingModel PartyHealingModel` | 属性 |
| `CaravanModel` | `public CaravanModel CaravanModel` | 属性 |
| `PartyTrainingModel` | `public PartyTrainingModel PartyTrainingModel` | 属性 |
| `BarterModel` | `public BarterModel BarterModel` | 属性 |
| `PersuasionModel` | `public PersuasionModel PersuasionModel` | 属性 |
| `DefectionModel` | `public DefectionModel DefectionModel` | 属性 |
| `CombatSimulationModel` | `public CombatSimulationModel CombatSimulationModel` | 属性 |
| `CombatXpModel` | `public CombatXpModel CombatXpModel` | 属性 |
| `GenericXpModel` | `public GenericXpModel GenericXpModel` | 属性 |
| `TradeAgreementModel` | `public TradeAgreementModel TradeAgreementModel` | 属性 |
| `SmithingModel` | `public SmithingModel SmithingModel` | 属性 |
| `PartyTradeModel` | `public PartyTradeModel PartyTradeModel` | 属性 |
| `RansomValueCalculationModel` | `public RansomValueCalculationModel RansomValueCalculationModel` | 属性 |
| `RaidModel` | `public RaidModel RaidModel` | 属性 |
| `MobilePartyFoodConsumptionModel` | `public MobilePartyFoodConsumptionModel MobilePartyFoodConsumptionModel` | 属性 |
| `PartyFoodBuyingModel` | `public PartyFoodBuyingModel PartyFoodBuyingModel` | 属性 |
| `PartyImpairmentModel` | `public PartyImpairmentModel PartyImpairmentModel` | 属性 |
| `PartyMoraleModel` | `public PartyMoraleModel PartyMoraleModel` | 属性 |
| `PartyDesertionModel` | `public PartyDesertionModel PartyDesertionModel` | 属性 |
| `PartyTransitionModel` | `public PartyTransitionModel PartyTransitionModel` | 属性 |
| `DiplomacyModel` | `public DiplomacyModel DiplomacyModel` | 属性 |
| `AllianceModel` | `public AllianceModel AllianceModel` | 属性 |
| `MinorFactionsModel` | `public MinorFactionsModel MinorFactionsModel` | 属性 |
| `HideoutModel` | `public HideoutModel HideoutModel` | 属性 |
| `KingdomCreationModel` | `public KingdomCreationModel KingdomCreationModel` | 属性 |
| `KingdomDecisionPermissionModel` | `public KingdomDecisionPermissionModel KingdomDecisionPermissionModel` | 属性 |
| `EmissaryModel` | `public EmissaryModel EmissaryModel` | 属性 |
| `CharacterDevelopmentModel` | `public CharacterDevelopmentModel CharacterDevelopmentModel` | 属性 |
| `CharacterStatsModel` | `public CharacterStatsModel CharacterStatsModel` | 属性 |
| `EncounterModel` | `public EncounterModel EncounterModel` | 属性 |
| `SettlementPatrolModel` | `public SettlementPatrolModel SettlementPatrolModel` | 属性 |
| `ItemDiscardModel` | `public ItemDiscardModel ItemDiscardModel` | 属性 |
| `ValuationModel` | `public ValuationModel ValuationModel` | 属性 |
| `PartySizeLimitModel` | `public PartySizeLimitModel PartySizeLimitModel` | 属性 |
| `PartyShipLimitModel` | `public PartyShipLimitModel PartyShipLimitModel` | 属性 |
| `InventoryCapacityModel` | `public InventoryCapacityModel InventoryCapacityModel` | 属性 |
| `PartyWageModel` | `public PartyWageModel PartyWageModel` | 属性 |
| `VillageProductionCalculatorModel` | `public VillageProductionCalculatorModel VillageProductionCalculatorModel` | 属性 |
| `VolunteerModel` | `public VolunteerModel VolunteerModel` | 属性 |
| `RomanceModel` | `public RomanceModel RomanceModel` | 属性 |
| `MobilePartyAIModel` | `public MobilePartyAIModel MobilePartyAIModel` | 属性 |
| `ArmyManagementCalculationModel` | `public ArmyManagementCalculationModel ArmyManagementCalculationModel` | 属性 |
| `BanditDensityModel` | `public BanditDensityModel BanditDensityModel` | 属性 |
| `EncounterGameMenuModel` | `public EncounterGameMenuModel EncounterGameMenuModel` | 属性 |
| `BattleRewardModel` | `public BattleRewardModel BattleRewardModel` | 属性 |
| `MapTrackModel` | `public MapTrackModel MapTrackModel` | 属性 |
| `MapDistanceModel` | `public MapDistanceModel MapDistanceModel` | 属性 |
| `PartyNavigationModel` | `public PartyNavigationModel PartyNavigationModel` | 属性 |
| `MapWeatherModel` | `public MapWeatherModel MapWeatherModel` | 属性 |
| `TargetScoreCalculatingModel` | `public TargetScoreCalculatingModel TargetScoreCalculatingModel` | 属性 |
| `TradeItemPriceFactorModel` | `public TradeItemPriceFactorModel TradeItemPriceFactorModel` | 属性 |
| `SettlementEconomyModel` | `public SettlementEconomyModel SettlementEconomyModel` | 属性 |
| `SettlementFoodModel` | `public SettlementFoodModel SettlementFoodModel` | 属性 |
| `SettlementValueModel` | `public SettlementValueModel SettlementValueModel` | 属性 |
| `SettlementMilitiaModel` | `public SettlementMilitiaModel SettlementMilitiaModel` | 属性 |
| `SettlementLoyaltyModel` | `public SettlementLoyaltyModel SettlementLoyaltyModel` | 属性 |
| `SettlementSecurityModel` | `public SettlementSecurityModel SettlementSecurityModel` | 属性 |
| `SettlementProsperityModel` | `public SettlementProsperityModel SettlementProsperityModel` | 属性 |
| `SettlementGarrisonModel` | `public SettlementGarrisonModel SettlementGarrisonModel` | 属性 |
| `ClanTierModel` | `public ClanTierModel ClanTierModel` | 属性 |
| `VassalRewardsModel` | `public VassalRewardsModel VassalRewardsModel` | 属性 |
| `ClanPoliticsModel` | `public ClanPoliticsModel ClanPoliticsModel` | 属性 |
| `ClanFinanceModel` | `public ClanFinanceModel ClanFinanceModel` | 属性 |
| `SettlementTaxModel` | `public SettlementTaxModel SettlementTaxModel` | 属性 |
| `HeroAgentLocationModel` | `public HeroAgentLocationModel HeroAgentLocationModel` | 属性 |
| `HeirSelectionCalculationModel` | `public HeirSelectionCalculationModel HeirSelectionCalculationModel` | 属性 |
| `HeroDeathProbabilityCalculationModel` | `public HeroDeathProbabilityCalculationModel HeroDeathProbabilityCalculationModel` | 属性 |
| `BuildingConstructionModel` | `public BuildingConstructionModel BuildingConstructionModel` | 属性 |
| `BuildingEffectModel` | `public BuildingEffectModel BuildingEffectModel` | 属性 |
| `WallHitPointCalculationModel` | `public WallHitPointCalculationModel WallHitPointCalculationModel` | 属性 |
| `MarriageModel` | `public MarriageModel MarriageModel` | 属性 |
| `AgeModel` | `public AgeModel AgeModel` | 属性 |
| `PlayerProgressionModel` | `public PlayerProgressionModel PlayerProgressionModel` | 属性 |
| `DailyTroopXpBonusModel` | `public DailyTroopXpBonusModel DailyTroopXpBonusModel` | 属性 |
| `PregnancyModel` | `public PregnancyModel PregnancyModel` | 属性 |
| `NotablePowerModel` | `public NotablePowerModel NotablePowerModel` | 属性 |
| `MilitaryPowerModel` | `public MilitaryPowerModel MilitaryPowerModel` | 属性 |
| `PrisonerDonationModel` | `public PrisonerDonationModel PrisonerDonationModel` | 属性 |
| `NotableSpawnModel` | `public NotableSpawnModel NotableSpawnModel` | 属性 |
| `TournamentModel` | `public TournamentModel TournamentModel` | 属性 |
| `CrimeModel` | `public CrimeModel CrimeModel` | 属性 |
| `DisguiseDetectionModel` | `public DisguiseDetectionModel DisguiseDetectionModel` | 属性 |
| `BribeCalculationModel` | `public BribeCalculationModel BribeCalculationModel` | 属性 |
| `TroopSacrificeModel` | `public TroopSacrificeModel TroopSacrificeModel` | 属性 |
| `SiegeStrategyActionModel` | `public SiegeStrategyActionModel SiegeStrategyActionModel` | 属性 |
| `SiegeEventModel` | `public SiegeEventModel SiegeEventModel` | 属性 |
| `SiegeAftermathModel` | `public SiegeAftermathModel SiegeAftermathModel` | 属性 |
| `SiegeLordsHallFightModel` | `public SiegeLordsHallFightModel SiegeLordsHallFightModel` | 属性 |
| `CompanionHiringPriceCalculationModel` | `public CompanionHiringPriceCalculationModel CompanionHiringPriceCalculationModel` | 属性 |
| `BuildingScoreCalculationModel` | `public BuildingScoreCalculationModel BuildingScoreCalculationModel` | 属性 |
| `SettlementAccessModel` | `public SettlementAccessModel SettlementAccessModel` | 属性 |
| `IssueModel` | `public IssueModel IssueModel` | 属性 |
| `PrisonerRecruitmentCalculationModel` | `public PrisonerRecruitmentCalculationModel PrisonerRecruitmentCalculationModel` | 属性 |
| `PartyTroopUpgradeModel` | `public PartyTroopUpgradeModel PartyTroopUpgradeModel` | 属性 |
| `TavernMercenaryTroopsModel` | `public TavernMercenaryTroopsModel TavernMercenaryTroopsModel` | 属性 |
| `WorkshopModel` | `public WorkshopModel WorkshopModel` | 属性 |
| `DifficultyModel` | `public DifficultyModel DifficultyModel` | 属性 |
| `LocationModel` | `public LocationModel LocationModel` | 属性 |
| `PrisonBreakModel` | `public PrisonBreakModel PrisonBreakModel` | 属性 |
| `BattleCaptainModel` | `public BattleCaptainModel BattleCaptainModel` | 属性 |
| `ExecutionRelationModel` | `public ExecutionRelationModel ExecutionRelationModel` | 属性 |
| `BannerItemModel` | `public BannerItemModel BannerItemModel` | 属性 |
| `DelayedTeleportationModel` | `public DelayedTeleportationModel DelayedTeleportationModel` | 属性 |
| `TroopSupplierProbabilityModel` | `public TroopSupplierProbabilityModel TroopSupplierProbabilityModel` | 属性 |
| `CutsceneSelectionModel` | `public CutsceneSelectionModel CutsceneSelectionModel` | 属性 |
| `EquipmentSelectionModel` | `public EquipmentSelectionModel EquipmentSelectionModel` | 属性 |
| `AlleyModel` | `public AlleyModel AlleyModel` | 属性 |
| `VoiceOverModel` | `public VoiceOverModel VoiceOverModel` | 属性 |
| `CampaignTimeModel` | `public CampaignTimeModel CampaignTimeModel` | 属性 |
| `VillageTradeModel` | `public VillageTradeModel VillageTradeModel` | 属性 |
| `HeroCreationModel` | `public HeroCreationModel HeroCreationModel` | 属性 |
| `CampaignShipDamageModel` | `public CampaignShipDamageModel CampaignShipDamageModel` | 属性 |
| `CampaignShipParametersModel` | `public CampaignShipParametersModel CampaignShipParametersModel` | 属性 |
| `BuildingModel` | `public BuildingModel BuildingModel` | 属性 |
| `ShipCostModel` | `public ShipCostModel ShipCostModel` | 属性 |
| `ShipStatModel` | `public ShipStatModel ShipStatModel` | 属性 |
| `SceneModel` | `public SceneModel SceneModel` | 属性 |
| `BodyPropertiesModel` | `public BodyPropertiesModel BodyPropertiesModel` | 属性 |
| `IncidentModel` | `public IncidentModel IncidentModel` | 属性 |
| `FleetManagementModel` | `public FleetManagementModel FleetManagementModel` | 属性 |
| `ClanMemberPartyRoleModel` | `public ClanMemberPartyRoleModel ClanMemberPartyRoleModel` | 属性 |
| `GameModels` | `public GameModels(IEnumerable<GameModel>inputComponents) : base(inputComponents)` | 构造函数 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
