---
title: "PartyNavigationModel"
description: "The campaign navigation policy for legal terrain, navigation types, and player destination checks."
---
# PartyNavigationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyNavigationModel : MBGameModel<PartyNavigationModel>`  
**Base:** `MBGameModel<PartyNavigationModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyNavigationModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyNavigationModel.cs`

## One-line job

`PartyNavigationModel` decides whether a party may use a navigation type over a terrain face and whether a player destination is legal; it does not calculate speed, move a party, or create an embarkation flow. Both map AI and player destination checks may call it, so its terrain rules must stay consistent with the actual map capabilities.

## Mental Model

Treat this model as the map path-feasibility policy, below movement execution. `MobileParty`, map path helpers, and campaign AI read `Campaign.Current.Models.PartyNavigationModel` to obtain excluded terrain faces before choosing a target. The map simulation still performs movement. In the default implementation, `Default` and `All` use an array cached from the `TerrainType` enum; other navigation types are rejected by the terrain predicate and return no invalid terrain entries.

```text
Target CampaignVec2 / current position / NavigationType
                         |
                         v
Campaign.Current.Models.PartyNavigationModel
                         |
          +--------------+---------------+
          v                              v
Valid terrain / excluded faces       player destination checks
          |                              |
          +--> MobileParty / map AI / return-to-land behavior
```

The default `CanPlayerNavigateToPosition` requires a valid target face, the main party to be on land, the target to be on land, and the target face group not to be in the default invalid array. It sets the output navigation type to `Default`. `HasNavalNavigationCapability` is always `false` by default, so owning a ship does not grant naval navigation merely by using this model. Teleporting, embarking, and changing party position belong to party and map flows, not to a policy callback.

### Registration and ownership

`Campaign.Current.Models` owns the registered instance. The default is `DefaultPartyNavigationModel`, which builds its invalid-terrain cache in its constructor by enumerating `TerrainType`. This is a rule snapshot, not a path calculation performed on every query. Register a replacement before map AI starts asking for navigation data, and do not call the player check before the campaign and `MobileParty.MainParty` exist.

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Owns the registered model, map scene wrapper, and campaign map state. |
| [`MobileParty`](../../campaign/MobileParty) | Supplies `MainParty.Position`, current navigation face, and `NavigationType`. |
| `CampaignVec2` / `TerrainType` | Supply target face, land state, and terrain identity. |

### Downstream

| Type | Relation |
| --- | --- |
| `AIMoveToNearestLandBehavior` | Uses the `All` invalid-face list to find a path back to land for a party at sea. |
| [`MobileParty`](../../campaign/MobileParty) | Reads excluded terrain when repairing navigation faces and handling sea/land transitions. |
| [`PartySpeedModel`](../PartySpeedModel) | Calculates how fast a legal route can be travelled; it does not decide route legality. |
| [`Settlement`](../../campaign/Settlement) | Can be an AI destination, but entering or moving to it is handled outside this model. |

### Actions, events, and save boundaries

The model has no save payload and dispatches no embark, settlement-entry, or position-change event. Destination checks may run frequently and must be side-effect free. State changes must use `MobileParty` and map APIs/behaviors so the normal events and persistence boundaries remain intact.

## Member contract

| Member | Purpose | Default behavior and timing |
| --- | --- | --- |
| `CanPlayerNavigateToPosition(CampaignVec2, out NavigationType)` | Checks player position and target-face prerequisites and returns the selected navigation type. | Sets `Default`; requires valid faces and both positions on land, then excludes the target face group. |
| `GetEmbarkDisembarkThresholdDistance()` | Supplies the distance threshold for embark/disembark decisions. | Returns `0f` by default; it is a distance rule, not an embark action. |
| `IsTerrainTypeValidForNavigationType(TerrainType, NavigationType)` | Tests whether one terrain type is valid for a navigation type. | Default accepts the default land terrain set only for `Default` and `All`. |
| `GetInvalidTerrainTypesForNavigationType(NavigationType)` | Returns terrain-type integer values that a path query must exclude. | Returns the cached array for `Default`/`All`, and an empty array for other types. Callers must not mutate the shared array. |
| `HasNavalNavigationCapability(MobileParty)` | Reports whether a party has naval navigation capability. | Always `false` in the default implementation; this is not the same as “currently at sea” or “owns a ship”. |

## Real access paths

### Check a player destination

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

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

### Provide excluded faces to pathfinding

The source `AIMoveToNearestLandBehavior` uses the `All` navigation type when it searches a route from a party at sea:

```csharp
PartyNavigationModel model = Campaign.Current.Models.PartyNavigationModel;
int[] invalidFaces = model.GetInvalidTerrainTypesForNavigationType(
    MobileParty.NavigationType.All);
CampaignVec2 landTarget = Campaign.Current.MapSceneWrapper
    .GetNearestFaceCenterForPositionWithPath(
        party.CurrentNavigationFace, true, Campaign.MapDiagonal / 2f, invalidFaces);
```

The array excludes terrain faces; it is not a target position and not a speed multiplier. Do not treat the default cached array as a writable collection.

## Customization boundary

If you allow a new terrain class, keep `IsTerrainTypeValidForNavigationType`, `GetInvalidTerrainTypesForNavigationType`, player destination checks, and AI return-to-land semantics consistent. Changing only one entry point creates split behavior such as “the player can click it but AI cannot path there.” Naval support also requires a compatible ship, sea movement, embark distance, and speed model; returning `true` from `HasNavalNavigationCapability` does not create a ship or a route.

## Risks and debugging order

1. **No campaign or main party:** the default player check depends on `Campaign.Current` and `MobileParty.MainParty`; title-screen or early-load calls can fail.
2. **Only one contract changed:** inconsistent invalid arrays and terrain predicates make UI and map AI disagree.
3. **Shared array mutation:** the default `Default`/`All` result is a constructor-built cache; do not sort, append to, or clear it.
4. **Legality mistaken for movement:** the model does not teleport, embark, or enter a settlement; use the party/map flow and its events.
5. **Naval capability misunderstood:** default `false` is a capability policy, not a water-position check; sea parties also depend on `AIMoveToNearestLandBehavior` and its `All` terrain query.

## Version and navigation

The five public members and default land rules are stable between v1.3.15 and v1.4.5; v1.4.5 source still defaults naval capability to `false`. A naval mod must depend on the target version's complete sea system rather than flipping this one flag.

- [Party model family](../models/)
- [Parent: Campaign extension API](../)
- [↔ PartySpeedModel](../PartySpeedModel)
- [↔ PartyFoodBuyingModel](../PartyFoodBuyingModel)
- [MobileParty](../../campaign/MobileParty)
- [AIMoveToNearestLandBehavior](../../campaign/AIMoveToNearestLandBehavior/)
- [Settlement](../../campaign/Settlement)
