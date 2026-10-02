---
title: "BuildingModel"
description: "A replaceable rule model that decides which building types a settlement (town or castle) is allowed to unlock at game start."
---
# BuildingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class BuildingModel : MBGameModel<BuildingModel>`  
**Base:** `MBGameModel<BuildingModel>`  
**Source File:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\BuildingModel.cs`  
**Default Implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultBuildingModel.cs`

## One-line Responsibility

It answers "which `BuildingType` should this `Town` be allowed to show", performing a one-time eligibility check only. It does not advance building progress, does not spend gold, and does not enqueue buildings. The game's town panel, construction queue, and economy model treat this decision as the source of that settlement's available building list, so replacing it changes the buildings every town can see at game start, rather than a temporary per-UI toggle.

## Mental Model

This is a "qualification gate" model queried once during campaign initialization, not a computation model that participates every tick. Across the whole game its only public method is `CanAddBuildingTypeToTown(BuildingType, Town)`, returning a `bool`, telling `BuildingsCampaignBehavior` whether a given `BuildingType` should appear on a `Town` when laying down initial buildings for a new settlement.

The call chain: when a campaign is created, `OnNewGameCreated` triggers `BuildDevelopmentsAtGameStart`, which iterates every fortress (`IsFortification`) in `Settlement.All`, takes its `Town`, then iterates `BuildingType.All`; for each `BuildingType` not yet owned, as long as `Campaign.Current.Models.BuildingModel.CanAddBuildingTypeToTown(buildingType, town)` returns `true`, it does `new Building(...)` and adds it to `town.Buildings`. In other words, this model is read exactly once when "generating the initial building list for a settlement"; afterwards, when the player upgrades, enqueues, or constructs buildings in the town panel, it is never consulted again.

The default implementation `DefaultBuildingModel`'s decision logic is purely based on `town.IsTown` / `town.IsCastle` and the constant groups in `DefaultBuildingTypes`: town-class buildings (keep, barracks, training ground, guard post, siege workshop, tax office, marketplace, granary, stonemason, aqueduct, courthouse, roads) require `town.IsTown`; castle-class buildings (castle keep, castle barracks, castle training ground, guard post, siege workshop, lord's hall, grain warehouse, artisans' shops, cropland, stonemason, roads) require `town.IsCastle`; daily projects (town's daily housing, daily militia training, daily festival, daily irrigation; castle's daily garrison relax, daily recruit, daily drill, daily irrigation) are likewise divided by town / castle; any other `BuildingType` not in the above list returns `true` unconditionally. This means: if you add a custom `BuildingType` via a mod, as long as it is not in the hardcoded branches of `DefaultBuildingTypes`, the default model will allow it to appear in all settlements — you must explicitly reject it in a custom model, or it will show up everywhere.

Use this model to change "which buildings a settlement can unlock at game start". If the goal is to advance building progress, deduct construction resources, enqueue a building, or max out its level, you should go through `BuildingConstructionModel`, `BuildingScoreCalculationModel`, `BuildingHelper`, or the corresponding behavior, instead of mutating world state inside this read-only query. Do not write `town.Buildings.Add`, `BuildingHelper.ChangeDefaultBuilding`, or any code that mutates settlement state inside `CanAddBuildingTypeToTown` — it may be called repeatedly during `OnNewGameCreated`, turning a one-time gate into repeated side effects.

### Lifecycle and Registration

`Campaign.Current.Models` holds the current instance. The default instance `DefaultBuildingModel` is registered during campaign initialization via `GameModels` (`BuildingModel = GetGameModel<BuildingModel>()`); a custom model must also be registered before the campaign system begins querying. On the title screen, during early module loading, or when no active campaign exists, `Campaign.Current` may be `null`, so it must not be read unconditionally inside static field initializers or menu constructors.

## Dependencies

### Upstream

| Type | Relationship |
| --- | --- |
| [`Town`](../../campaign/Town) | Provides `IsTown` / `IsCastle`, one of the sole inputs to the eligibility check. |
| [`BuildingType`](../BuildingType) | The building type being queried; the default implementation decides by the `DefaultBuildingTypes` constant groups. |
| [`DefaultBuildingTypes`](../DefaultBuildingTypes) | Constant set of town / castle / daily-project building types, decides the default model's branches. |
| [`Settlement`](../../campaign/Settlement) | Fortresses (`IsFortification`) are iterated via `Settlement.All` during initialization, then their `Town` is taken. |

### Downstream

| Type | Relationship |
| --- | --- |
| [`BuildingsCampaignBehavior`](../BuildingsCampaignBehavior) | Calls this model in `BuildDevelopmentsAtGameStart` to lay down initial buildings for settlements. |
| [`Building`](../Building) | The concrete building instance `new Building(...)`-added to `town.Buildings` after the check passes. |
| [`BuildingScoreCalculationModel`](../BuildingScoreCalculationModel) | Adjacent rule model; responsible for choosing the next building to construct / advance each day; not responsible for this model's eligibility check. |
| [`BuildingConstructionModel`](../BuildingConstructionModel) | Adjacent rule model; responsible for building cost and progress advancement; this model does not touch those. |

### Actions, Events, and Save Boundary

This model itself dispatches no events and holds no save fields; it is only synchronously called once during `OnNewGameCreated`. The later ticks of `BuildingsCampaignBehavior` such as `DailyTickSettlement`, `OnBuildingLevelChanged` never come back to this model for re-evaluation. Legitimate building progress, queueing, and leveling go through `BuildingHelper`, the corresponding `*Action`, and behaviors; when replacing the model you should keep it deterministic under identical inputs, to avoid inconsistent initial building lists across campaigns.

## Member Contract

| Member | Purpose | When Called & Side Effects |
| --- | --- | --- |
| `CanAddBuildingTypeToTown(BuildingType buildingType, Town town)` | Determines whether the given building type is allowed to appear in the specified town / castle's initial building list; the default implementation returns based on whether `town` is a town or castle, and whether `buildingType` belongs to the town / castle / daily-project groups of `DefaultBuildingTypes`. | Called exactly once per fortress at campaign creation (`BuildDevelopmentsAtGameStart`); pure read-only, no side effects, must not mutate `town` or `Building` state. |

Observable behavior of the default implementation: town-only buildings are allowed only when `town.IsTown`; castle-only buildings are allowed only when `town.IsCastle`; daily projects are likewise divided by town / castle; any custom `BuildingType` not listed in the hardcoded branches of `DefaultBuildingTypes` returns `true` by default (open to all settlements). The default `BuildingModel` interface and this decision logic are consistent between v1.3.15 and v1.4.5; when replacing across versions, prefer delegating to the current version's vanilla model, then layer your own gate rules on top.

## Real Read Path

The following code replicates the query style of `BuildingsCampaignBehavior.BuildDevelopmentsAtGameStart`, reading only the already-registered model in the current campaign, and lists the building types a given `Town` can still add:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Buildings;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using System.Collections.Generic;

public List<BuildingType> GetAllowedBuildingsForTown(Town town)
{
    var allowed = new List<BuildingType>();
    if (Campaign.Current == null || town == null)
    {
        return allowed;
    }

    BuildingModel model = Campaign.Current.Models.BuildingModel;
    foreach (BuildingType type in BuildingType.All)
    {
        bool notYetOwned = town.Buildings.All(b => b.BuildingType != type);
        if (notYetOwned && model.CanAddBuildingTypeToTown(type, town))
        {
            allowed.Add(type);
        }
    }
    return allowed;
}
```

This result is suitable for previewing "what else can this town unlock" in debugging or a custom panel; ordinary game logic should not re-run this list every tick — the initial building list is fixed after `OnNewGameCreated`.

## Safe Replacement Practices

If you only want to relax a settlement restriction for a certain building class, keep the original model as a delegate so the check is still delegated back:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Buildings;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public sealed class ModBuildingModel : BuildingModel
{
    private readonly BuildingModel _vanilla;

    public ModBuildingModel(BuildingModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override bool CanAddBuildingTypeToTown(BuildingType buildingType, Town town)
    {
        // Allow all towns to also build the training ground that was castle-only
        if (buildingType == DefaultBuildingTypes.CastleTrainingFields && town.IsTown)
        {
            return true;
        }
        return _vanilla.CanAddBuildingTypeToTown(buildingType, town);
    }
}
```

At actual registration time you should save the vanilla delegate during the model registration phase of `CampaignGameStarter` (for example, in your `MBSubModuleBase` hook, get the default instance via `GameModels` and wrap it); do not look up itself again via `Campaign.Current.Models.BuildingModel` after the model has already been replaced, or it will recurse. Note: because this model is only called once during `OnNewGameCreated`, replacing it only affects the initial building list of **campaigns started afterwards**; an already-running campaign will not automatically re-lay the buildings of its existing towns.

## Risks

1. **Queried only once at game start:** `CanAddBuildingTypeToTown` is only called by `BuildDevelopmentsAtGameStart` during `OnNewGameCreated`; replacing the model mid-game will not make buildings reappear / disappear in existing towns — you must start a new save for it to take effect.
2. **Returning false removes eligibility:** once a `BuildingType` returns `false` for a `Town`, that settlement will not own this building at game start; when debugging "why doesn't town X have building Y", check here first.
3. **Campaign does not yet exist:** `Campaign.Current` is null on the title screen and during early module loading; obtain the model in the campaign-start hook, do not read it unconditionally in static fields or menu constructors.
4. **Mutating the world inside the query:** `town.Buildings.Add`, `BuildingHelper.ChangeDefaultBuilding`, enqueueing, or leveling up must be done in behaviors / `BuildingHelper` / the corresponding `*Action`, not inside this read-only check callback.
5. **Custom buildings default to fully open:** a newly added `BuildingType` is not in the hardcoded branches of `DefaultBuildingTypes`, so the default implementation returns `true`; to disable it at a specific settlement, you must explicitly `return false` in a custom model.

## Version & Navigation

The `BuildingModel` interface in both v1.3.15 and v1.4.5 has only `CanAddBuildingTypeToTown(BuildingType, Town)`, and the default implementation's grouped decision logic is consistent; cross-version implementations should delegate to the current version's vanilla model, not copy old branches into the new version. This model sits at the Campaign layer, together with `BuildingScoreCalculationModel` and `BuildingConstructionModel` forming the settlement building system, but only this model is responsible for "start-of-game eligibility", while the other two handle "daily choice and progress".

- [↑ Parent: Campaign Ext API](../)
- [Models Index](../models/)
- [↔ DefaultBuildingModel](../DefaultBuildingModel)
- [↔ BuildingScoreCalculationModel](../BuildingScoreCalculationModel)
- [↔ BuildingConstructionModel](../BuildingConstructionModel)
- [↔ WorkshopModel](../WorkshopModel)
- [Town](../../campaign/Town)
- [BuildingType](../BuildingType)
- [BuildingsCampaignBehavior](../BuildingsCampaignBehavior)
- [Campaign System Guide](../../../guide/campaign-system)
