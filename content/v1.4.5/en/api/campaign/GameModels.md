---
title: "GameModels"
description: "The campaign rule facade: it collects GameModel components from CampaignGameStarter during startup, binds PartyWageModel, DiplomacyModel, SettlementEconomyModel and other contracts, and exposes them through Campaign.Current.Models."
---

# GameModels

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public sealed class GameModels : GameModelsManager`  
**Base:** `GameModelsManager`  
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/GameModels.cs`

## One-line responsibility

`GameModels` is the strongly typed facade for campaign rules. It does not calculate wages, diplomacy, or settlement output itself; during campaign assembly it binds `GameModel` implementations to stable properties so `Campaign`, Behaviors, and other models can consume the contracts.

## Mental Model

This class sits between the Core model manager and concrete campaign rules. `GameModelsManager` copies the incoming `IEnumerable<GameModel>`; the `GameModels` constructor then calls generic `GetGameModel<T>()` for each property. The lookup scans from the end of the list, so the last component of a given contract type wins.

- **Who creates and owns it**: `Campaign.OnInitialize()` creates `CampaignGameStarter` and lets modules add models. It then calls `Game.SetBasicModels(campaignGameStarter.Models)` and `Game.AddGameModelsManager<GameModels>(campaignGameStarter.Models)`. `Campaign` stores the returned instance and exposes it through `Campaign.Models`.
- **When it exists**: read it through `Campaign.Current.Models` only after campaign initialization has created the managers. New campaigns and loaded campaigns use the same model assembly path; `GetSpecificGameBehaviors()` binds campaign properties only for Campaign or Tutorial mode.
- **When to use it**: query a rule through its typed facade property, such as `Campaign.Current.Models.PartyWageModel`, `DiplomacyModel`, or `SettlementEconomyModel`. The concrete model contract is the extension point.
- **When not to use it**: do not call `new GameModels(...)` directly, and do not treat this object as world state, an event bus, or an Action. Use an Action to change gold, relations, or ownership; add a model implementation during starter assembly instead of reflecting into these `private set` properties at runtime.

### Assembly order

```text
Module / SandBox / StoryMode
  -> CampaignGameStarter.AddModel(model)
  -> Campaign.OnInitialize()
  -> Game.SetBasicModels(starter.Models)
  -> Game.AddGameModelsManager<GameModels>(starter.Models)
  -> GameModels.GetSpecificGameBehaviors()
  -> Campaign.Current.Models
```

The `GameModelsManager` constructor copies the enumerable into an internal `MBList<GameModel>`. Adding a model to the starter after the managers have been created does not back-fill the existing `GameModels`; replacement must happen before both managers are constructed. There is no public remove API, so replacement normally means appending another implementation of the same contract.

## Dependencies

**Upstream (creation and injection)**

- [Campaign](../Campaign) stores the facade during initialization and exposes it through `Models`.
- [CampaignGameStarter](../CampaignGameStarter) is the module-startup `AddModel` entry point.
- [Game](../../core/Game) creates `BasicGameModels` and the campaign `GameModels` manager.
- [GameModelsManager](../../core-extra/GameModelsManager) copies the component list and performs reverse type lookup.
- [GameModel](../../core-extra/GameModel) / [MBGameModel](../../core-extra/MBGameModel) provide the rule-model contract and wrapper base.

**Downstream (readers and consumers)**

- [PartyWageModel](../PartyWageModel) is read by `Campaign`, `CharacterObject`, recruitment, and garrison logic.
- [DiplomacyModel](../DiplomacyModel) is read by war, peace, and diplomatic scoring logic.
- [SettlementEconomyModel](../SettlementEconomyModel) is read by settlement economy behaviors.
- [DefaultPartyWageModel](../DefaultPartyWageModel) is the native default implementation; it is not the facade.
- [CampaignBehaviorBase](../CampaignBehaviorBase) is the usual place where a behavior consumes a model in an event or tick callback.

**Boundaries**

- **Actions** change world state, for example [GiveGoldAction](../../campaign-ext/GiveGoldAction) or [ChangeRelationAction](../../campaign-ext/ChangeRelationAction); `GameModels` only supplies calculations.
- **Events and Behaviors** decide when a calculation runs. Do not cache model instances across campaigns; discard old `Campaign.Current` references when a campaign ends.
- **Save**: models are not the entry point for mod-owned persistent fields. Store behavior state through [CampaignBehaviorBase](../CampaignBehaviorBase) and `SyncData(IDataStore)`.

## Member Notes

All facade properties have `private set`. Mods normally read them and cannot safely replace a facade member at runtime. The groups below cover the actual properties; every property is a separate rule contract, and its timing follows the campaign phase that consumes it.

### Map, parties, and movement

| Properties | Purpose, timing, and side effects |
|-----------|-----------------------------------|
| `MapVisibilityModel`, `InformationRestrictionModel` | Map visibility and information filtering; read during map queries and UI information construction, not used to mutate map state. |
| `PartySpeedCalculatingModel`, `PartyHealingModel`, `PartyNavigationModel`, `MapDistanceModel`, `MapWeatherModel`, `MapTrackModel` | Party speed, healing, navigation, distance, weather, and tracking; read frequently by map ticks, pursuits, and path calculations, so results affect AI and player movement. |
| `CaravanModel`, `PartyTrainingModel`, `MobilePartyAIModel`, `ArmyManagementCalculationModel`, `TargetScoreCalculatingModel`, `BanditDensityModel` | Caravan, training, party AI, army composition, target scores, and bandit density; called by campaign behaviors and AI, not something to advance from a UI thread. |
| `PartySizeLimitModel`, `PartyShipLimitModel`, `PartyTransitionModel`, `PartyImpairmentModel`, `PartyDesertionModel` | Party limits, ships, transitions, impairment, and desertion; changing results can make rosters, formations, or saved state disagree. |
| `PartyMoraleModel` | Party morale baselines, victory and defeat changes, starvation and unpaid-wage penalties, and explained effective morale; `MobileParty`, daily food/finance settlement, and healing logic consume it, while querying the model does not write morale state back to the party. |

### Economy, trade, and resources

| Properties | Purpose, timing, and side effects |
|-----------|-----------------------------------|
| `PartyWageModel`, `InventoryCapacityModel`, `PartyFoodBuyingModel`, `MobilePartyFoodConsumptionModel`, `RaidModel` | Wages, carrying capacity, food buying, food consumption, and raid rewards or costs; read by daily settlement, budgets, garrison, and raid logic. A query does not add gold or food. |
| `PartyTradeModel`, `TradeItemPriceFactorModel`, `TradeAgreementModel`, `ValuationModel`, `RansomValueCalculationModel` | Trade prices, agreements, valuation, and ransom; trade flows combine them with settlement and roster state, while the model itself does not edit an inventory. |
| `SettlementEconomyModel`, `SettlementFoodModel`, `SettlementTaxModel`, `SettlementProsperityModel`, `VillageProductionCalculatorModel`, `VillageTradeModel` | Settlement and village production, food, tax, prosperity, and trade boundaries; daily behaviors consume these contracts and depend on their units and result ranges. |
| `BuildingModel`, `BuildingConstructionModel`, `BuildingEffectModel`, `BuildingScoreCalculationModel`, `WorkshopModel`, `ItemDiscardModel`, `SmithingModel` | Building objects, construction queues, building effects, construction scores, workshops, item handling, and smithing; these calculate decisions, while behaviors or Actions perform the actual world changes. |

### Settlements, factions, and diplomacy

| Properties | Purpose, timing, and side effects |
|-----------|-----------------------------------|
| `SettlementValueModel`, `SettlementAccessModel`, `SettlementPatrolModel`, `SettlementGarrisonModel` | Settlement value, access, patrols, and garrisons; siege, entry, and garrison behaviors rely on them, so abnormal results can select invalid targets or budgets. |
| `SettlementMilitiaModel`, `SettlementLoyaltyModel`, `SettlementSecurityModel` | Militia, loyalty, and security changes or limits; normally read during daily or event settlement, not written back into several state fields by hand. |
| `ClanTierModel`, `ClanPoliticsModel`, `ClanFinanceModel`, `VassalRewardsModel`, `MinorFactionsModel` | Clan tier, politics, finance, vassal rewards, and minor-faction rules; decisions and faction behaviors consume them, while state changes belong to the relevant Action or Behavior. |
| `DiplomacyModel`, `AllianceModel`, `KingdomCreationModel`, `KingdomDecisionPermissionModel`, `EmissaryModel`, `DefectionModel`, `BarterModel`, `PersuasionModel` | Diplomacy, alliances, kingdom creation, decision permission, emissaries, defection, barter, and persuasion; called during dialogue or decisions, not used to declare war or change relations directly. |

### Characters, encounters, and campaign content

| Properties | Purpose, timing, and side effects |
|-----------|-----------------------------------|
| `CharacterDevelopmentModel`, `CharacterStatsModel`, `AgeModel`, `MarriageModel`, `PregnancyModel`, `RomanceModel`, `HeroCreationModel` | Character growth, stats, age, marriage, pregnancy, romance, and creation; lifecycle behaviors consume them, so replacements must preserve Hero lifecycle and event assumptions. |
| `EncounterModel`, `EncounterGameMenuModel`, `HideoutModel`, `CrimeModel`, `DisguiseDetectionModel`, `BribeCalculationModel`, `LocationModel` | Encounters, encounter menus, hideouts, crime, disguise detection, bribes, and locations; read during map encounters or menu initialization, not fabricated from an arbitrary tick. |
| `VolunteerModel`, `NotablePowerModel`, `NotableSpawnModel`, `TavernMercenaryTroopsModel`, `CompanionHiringPriceCalculationModel`, `PrisonerRecruitmentCalculationModel`, `PrisonerDonationModel`, `PartyTroopUpgradeModel`, `TroopSupplierProbabilityModel` | Volunteers, notables, spawning, tavern mercenaries, companion prices, prisoner recruitment or donation, troop upgrades, and troop-supplier probabilities; recruitment behaviors must also update rosters, gold, and events. |
| `PlayerProgressionModel`, `GenericXpModel`, `CombatXpModel`, `DailyTroopXpBonusModel`, `PrisonBreakModel`, `ExecutionRelationModel`, `HeirSelectionCalculationModel`, `HeroAgentLocationModel`, `HeroDeathProbabilityCalculationModel` | Player progress, experience, daily troop XP, prison breaks, execution relations, heir selection, hero Agent locations, and hero death probability; read during battle or campaign settlement, not used to fake the corresponding Action result. |

### Combat, sieges, ships, and presentation

| Properties | Purpose, timing, and side effects |
|-----------|-----------------------------------|
| `CombatSimulationModel`, `BattleRewardModel`, `TroopSacrificeModel`, `BattleCaptainModel`, `BodyPropertiesModel`, `EquipmentSelectionModel` | Simulation, rewards, sacrifice, captains, body properties, and equipment selection; called while creating or resolving battles, and bad replacements affect Agent setup and results. |
| `SiegeStrategyActionModel`, `SiegeEventModel`, `SiegeAftermathModel`, `SiegeLordsHallFightModel`, `WallHitPointCalculationModel`, `MilitaryPowerModel` | Siege strategy, siege events, aftermath, lord's hall fights, wall hit points, and military power; read during the siege lifecycle, not after a SiegeEvent has been destroyed. |
| `BannerItemModel`, `VoiceOverModel`, `SceneModel`, `CutsceneSelectionModel`, `IncidentModel`, `AlleyModel` | Banner items, voice-over, scenes, cutscenes, incidents, and alleys; some depend on UI or scene lifetime, and a calculation model is not permission to load engine resources from a background thread. |
| `CampaignTimeModel`, `DifficultyModel`, `DelayedTeleportationModel`, `CampaignShipDamageModel`, `CampaignShipParametersModel`, `ShipCostModel`, `ShipStatModel`, `FleetManagementModel`, `ClanMemberPartyRoleModel`, `TournamentModel`, `IssueModel` | Campaign time, difficulty, delayed teleportation, ship damage/parameters/cost/stats, fleet management, clan-member roles, tournaments, and Issues; used at campaign start, map travel, content events, and daily settlement, with units and contracts that must be rechecked across versions. |

### Inherited members

`GetGameModels()` returns the manager's `MBReadOnlyList<GameModel>`. Use it to inspect registered components and confirm replacement order; it is not a writable registration API. Register during startup through [CampaignGameStarter](../CampaignGameStarter) and `AddModel`.

`GameModels(IEnumerable<GameModel>)` is the engine assembly entry point. It delegates to the base manager to copy the list and then binds properties; calling it directly skips `Campaign.Current`, default models, and the module ordering contract.

## Real Examples

### Read an existing rule from a campaign behavior

`Campaign.Current.Models` is the real runtime acquisition path. This reads the wage limit only; it does not change party gold or bypass wage settlement.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public static int ReadWageLimit()
{
    Campaign campaign = Campaign.Current;
    if (campaign == null || campaign.Models == null)
    {
        return 0;
    }

    PartyWageModel wageModel = campaign.Models.PartyWageModel;
    return wageModel == null ? 0 : wageModel.MaxWagePaymentLimit;
}
```

Native code follows the same path: `Campaign` reads `Current.Models.PartyWageModel.MaxWagePaymentLimit` while initializing the main party, and `CharacterObject.GetWage()` uses the same model for a character wage. To change world state, move to an Action such as [GiveGoldAction](../../campaign-ext/GiveGoldAction), rather than changing a model result.

### Replace a model during starter assembly

This is the real 1.4.5 StoryMode registration shape. `StoryModePartyWageModel` derives from `PartyWageModel`, delegates unchanged behavior through `MBGameModel<PartyWageModel>.BaseModel`, and overrides only the tutorial recruitment-cost case.

```csharp
private void AddModels(CampaignGameStarter campaignGameStarter)
{
    campaignGameStarter.AddModel<PartyWageModel>(
        (MBGameModel<PartyWageModel>)(object)new StoryModePartyWageModel());
}
```

`CampaignGameStarter.AddModel<T>` initializes the wrapper with the current model of the same type and then appends it. The later reverse scan in `GameModelsManager.GetGameModel<T>` therefore selects it. A mod should register its own `PartyWageModel` subclass in the same startup phase and preserve every abstract method's return contract.

## Risks and Failure Boundaries

- **Reading too early**: calling `Campaign.Current.Models` before the campaign managers exist, or retaining it after the campaign is destroyed, can yield `null` or stale objects. Read it from a completed campaign startup hook, behavior, or event.
- **Missing contract implementation**: `GetGameModel<T>()` returns `null` when no matching type was registered. Every consumer that dereferences `Campaign.Current.Models.SomeModel` can then fail with a null reference.
- **Wrong replacement order**: lookup runs from the end of the list. A wrapper added before the default implementation is hidden by the default; a model added after `GameModels` construction cannot update the existing facade.
- **Null BaseModel**: `AddModel<T>(MBGameModel<T>)` passes the current model to `Initialize`, but that model may be absent. A wrapper that unconditionally reads `BaseModel` turns a startup configuration error into a null reference.
- **Replacing only one manager**: campaign initialization creates `BasicGameModels` and campaign `GameModels` from the same component enumerable. Considering only one manager can make Core and Campaign consume different implementations.
- **Treating a query as a write**: model results do not update `Hero`, `MobileParty`, `Settlement`, or save fields. Direct state edits used to simulate a model result skip events, Actions, and save boundaries.
- **Wrong phase or thread**: some models depend on initialized map, scene, or campaign objects. Do not read stateful models from static initialization, a background thread, or a Mission-end callback without checking the relevant lifetime.
- **Version contract drift**: property names and abstract methods can change between versions. A 1.3.15/1.4.5 mod must recheck the interface instead of relying on reflection by property name alone.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [Campaign](../Campaign) · [CampaignGameStarter](../CampaignGameStarter) · [DiplomacyModel](../DiplomacyModel) · [PartyWageModel](../PartyWageModel)
- Upstream hubs: [GameModelsManager](../../core-extra/GameModelsManager) · [Game](../../core/Game)
- Downstream / related: [CampaignBehaviorBase](../CampaignBehaviorBase) · [DefaultPartyWageModel](../DefaultPartyWageModel) · [MBGameModel](../../core-extra/MBGameModel)
- Architecture boundaries: [Crash boundaries](../../../architecture/crash-boundary) · [Documentation contract](../../../architecture/doc-contract)
