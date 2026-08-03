---
title: "DefaultPartyNavigationModel"
description: "The default campaign map-navigation policy: legal land terrain, excluded-terrain arrays, embark thresholds, and player destination checks without movement execution."
---

# DefaultPartyNavigationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartyNavigationModel : PartyNavigationModel`  
**Base:** [PartyNavigationModel](../PartyNavigationModel/)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs`  
**1.4.5 source:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyNavigationModel.cs`

## One-line responsibility

This is the vanilla map-feasibility policy: it accepts the default land-navigation rules, supplies excluded-terrain integer values to pathfinding, and checks basic player destination conditions; it does not move parties, teleport them, or create ships.

## Mental model

Place this class in the “may this route be used?” layer, below movement execution. During campaign startup, `GameModels` installs it as `Campaign.Current.Models.PartyNavigationModel`; map helpers and AI then read the policy and pass its results to the navigation mesh and `MobileParty`. The model does not change position or dispatch embarkation, settlement-entry, or position-change events.

```text
Campaign.Current.Models.PartyNavigationModel
          |
          +--> terrain predicate / excluded-terrain integer array
          |          |
          |          +--> NavigationHelper / MobilePartyAi / map pathfinding
          |
          +--> player destination preconditions
                     |
                     +--> MapCursor navigation feedback
```

The default constructor enumerates `TerrainType` and caches every value outside `Plain`, `Desert`, `Snow`, `Forest`, `Steppe`, `Swamp`, `Dune`, `Bridge`, `Fording`, and `Beach` in `_invalidTerrainTypes`. This is a rule snapshot, not a path recalculated on every query. `Default` and `All` use that array; other navigation types return an empty array, but that does not mean the default model supports those types because the terrain predicate still returns `false`.

## When to use and when not to

- Read `Campaign.Current.Models.PartyNavigationModel` when you need the active campaign rule. Do not construct a separate `DefaultPartyNavigationModel` and assume it is the selected instance.
- Register a consistent `PartyNavigationModel` implementation during the campaign starter phase when a custom map needs different navigation rules. Consider the terrain predicate, excluded array, player check, and AI pathfinding together.
- Do not set `MobileParty.Position`, call teleport or embark flows, or alter map faces from this model. Those operations belong to the party/map execution layer.
- Do not append to, sort, or clear the array returned by `GetInvalidTerrainTypesForNavigationType`. The default `Default`/`All` result is a shared array cached by the instance.
- Do not claim to support naval movement by changing only `HasNavalNavigationCapability` to `true`. Ships, naval paths, transitions, speed, and return-to-land behavior must also exist.

## Dependencies and consumers

### Inputs

| Type | Relationship |
| --- | --- |
| [`Campaign`](../../campaign/Campaign/) / [`GameModels`](../GameModels/) | Registers the model during campaign startup and owns the active instance at runtime. |
| [`MobileParty`](../../campaign/MobileParty/) | Supplies the player position, navigation face, and party-navigation context. |
| `CampaignVec2` / `TerrainType` | Supply the target face, land state, and terrain enum. |

### Consumers

| Type | Relationship |
| --- | --- |
| [`NavigationHelper`](../NavigationHelper/) | Passes the excluded-terrain array to the map path APIs and uses the embark threshold to calculate transition points. |
| [`AIMoveToNearestLandBehavior`](../../campaign/AIMoveToNearestLandBehavior/) | Uses the `All` excluded array to find reachable land for a party at sea. |
| [`MobilePartyAi`](../MobilePartyAi/) | Reads excluded terrain and terrain validity while choosing return-to-land and flee directions. |
| [`PartySpeedModel`](../PartySpeedModel/) | Calculates speed on a legal route; it does not replace this model's legality decision. |
| `MapCursor` | Uses the map navigation flow to show whether the player's target is legal; its call chain goes through `NavigationHelper`. |

The model has no save fields. Its rules are read frequently by map AI, so overrides should be side-effect free and state-dependent checks should not run before the campaign and `MobileParty.MainParty` exist.

## Member contract

| Member | Default behavior | Timing and side-effect boundary |
| --- | --- | --- |
| `GetEmbarkDisembarkThresholdDistance()` | Returns `0f`. | `NavigationHelper` uses it while calculating navigation-mesh transition points; it does not start embarkation or change position. |
| `GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)` | Returns the constructor-cached `_invalidTerrainTypes` for `Default` or `All`; returns a new empty `int[]` for other types. | Map pathfinding uses these integer values to exclude faces; callers must not treat the result as writable configuration. |
| `IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType)` | Returns `true` only for the default land set with `Default` or `All`; the default returns `false` for `Naval`. | `MobilePartyAi` and related code use it to test candidate flee directions; it reports policy only. |
| `HasNavalNavigationCapability(MobileParty mobileParty)` | Always returns `false`; the default implementation ignores the party argument. | This is a model-level capability report, not a check for being at sea or owning a ship. |
| `CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)` | Sets the output to `Default`, then requires a valid target face, a land-based main party, a land target, and a target `FaceGroupIndex` outside the active model's excluded array. | `MapCursor` can use it for destination preconditions; a `false` result still leaves the output at `Default` and changes no world state. |

### A special boundary in `CanPlayerNavigateToPosition`

The default implementation does not call `IsTerrainTypeValidForNavigationType` for the target. It compares the target `FaceGroupIndex` with `Campaign.Current.Models.PartyNavigationModel.GetInvalidTerrainTypesForNavigationType(Default)`. Replacing only the terrain predicate, only the excluded array, or only the player check can therefore make the cursor, AI, and map pathfinder disagree. A custom model should keep these entry points coherent.

## Real read paths

### Check a player destination

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

public bool CanPlayerSelect(CampaignVec2 target, out MobileParty.NavigationType navigationType)
{
    navigationType = MobileParty.NavigationType.Default;
    if (Campaign.Current == null || MobileParty.MainParty == null)
    {
        return false;
    }

    PartyNavigationModel model = Campaign.Current.Models.PartyNavigationModel;
    return model.CanPlayerNavigateToPosition(target, out navigationType);
}
```

This code only queries the rule. Once the target passes, the map controller and party AI still perform movement.

### Supply exclusions to return-to-land pathfinding

When `AIMoveToNearestLandBehavior` needs to bring a party from sea to land, it reads the `All` rule and passes it to the map scene wrapper through this real call path:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

MobileParty party = MobileParty.MainParty;
PartyNavigationModel model = Campaign.Current.Models.PartyNavigationModel;
int[] invalidTerrainTypes = model.GetInvalidTerrainTypesForNavigationType(
    MobileParty.NavigationType.All);
CampaignVec2 landTarget = Campaign.Current.MapSceneWrapper
    .GetNearestFaceCenterForPositionWithPath(
        party.CurrentNavigationFace,
        true,
        Campaign.MapDiagonal / 2f,
        invalidTerrainTypes);
```

`landTarget` is the path result. `invalidTerrainTypes` is only a filter argument, not a position, speed multiplier, or configuration to persist in a mod.

## Replacing the default model

Register the model from an `MBSubModuleBase` starter hook. This example changes only the transition threshold and keeps the default land rules; the sea/land boundary and return-to-land path must still be tested in the target game version.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class MyPartyNavigationModel : DefaultPartyNavigationModel
{
    public override float GetEmbarkDisembarkThresholdDistance()
    {
        return 0.25f;
    }
}

public sealed class MySubModule : MBSubModuleBase
{
    protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
    {
        if (game.GameType is Campaign)
        {
            CampaignGameStarter starter = (CampaignGameStarter)starterObject;
            starter.AddModel(new MyPartyNavigationModel());
        }
    }
}
```

After registration, obtain the live instance from `Campaign.Current.Models.PartyNavigationModel`. Registration must happen before the map scene creates `SandBoxNavigationCache`; otherwise the cache can retain the old excluded-face array and region-switch costs. Do not call that same live property as your replacement's base implementation, or the replacement can recurse or read the wrong layer.

## Risks and version boundary

1. `CanPlayerNavigateToPosition` depends on `Campaign.Current` and `MobileParty.MainParty.Position`. Calling it from title-screen code, static initialization, or before the campaign objects exist can dereference incomplete state.
2. Changing only `IsTerrainTypeValidForNavigationType`, only the excluded array, or only `CanPlayerNavigateToPosition` creates split behavior such as “the cursor allows it but AI will not travel there.”
3. The default `Default`/`All` array is cached on the instance. Mutating it contaminates later path queries; return an owned copy or implement the full contract when custom data is required.
4. The default naval capability is `false`. Returning `true` alone does not create ships, naval speed, transitions, or save state. A naval mod must validate the target version's ship, map-distance, speed, and return-to-land systems together.
5. `GetEmbarkDisembarkThresholdDistance` participates in transition-point calculation. Increasing it without testing can push transition points onto invalid faces; it is not a teleport-distance setting.
6. A model replacement must be registered before `SandBoxNavigationCache` is initialized. That cache stores excluded faces and region-switch costs, and late registration does not automatically rebuild the old cache.
7. The five public members, default land set, `0f` threshold, and default lack of naval capability are consistent between v1.3.15 and v1.4.5. The v1.4.5 source is under `Bannerlord.Source/bin`; its surrounding naval system is more complete, so an implementation tested only on the older version should not be copied blindly.

## Navigation

- [Parent: campaign-ext](../)
- [Contract: PartyNavigationModel](../PartyNavigationModel/)
- [Models family](../models/)
- [Siblings: DefaultPartySpeedCalculatingModel](../DefaultPartySpeedCalculatingModel/) · [PartySpeedModel](../PartySpeedModel/)
- [Related readers: MobileParty](../../campaign/MobileParty/) · [MobilePartyAi](../MobilePartyAi/)
- [Map callers: NavigationHelper](../NavigationHelper/) · [AIMoveToNearestLandBehavior](../../campaign/AIMoveToNearestLandBehavior/)
- [Registration: CampaignGameStarter](../CampaignGameStarter/)
