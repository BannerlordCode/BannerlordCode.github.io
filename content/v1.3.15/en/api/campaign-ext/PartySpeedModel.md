---
title: "PartySpeedModel"
description: "The replaceable campaign policy that explains a MobileParty's map speed before movement consumes it."
---
# PartySpeedModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartySpeedModel : MBGameModel<PartySpeedModel>`  
**Base:** `MBGameModel<PartySpeedModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySpeedModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartySpeedCalculatingModel.cs`

## One-line job

`PartySpeedModel` turns a `MobileParty`'s roster, mounts, encumbrance, terrain, and campaign modifiers into an explainable map-speed result. It answers **how fast this party may move**; it does not move the party or change its roster.

## Mental Model

The model is the policy layer between party state and the map clock. `MobileParty.CalculateSpeed` asks for a base result, then asks for the final result. `MobileParty` caches the result and the map simulation consumes it on later ticks. The default implementation is registered by the game starter, so a replacement must be installed before campaign systems begin querying it.

```text
Party roster / mounts / terrain
          |
          v
Campaign.Current.Models.PartySpeedCalculatingModel
          |
          +--> CalculateBaseSpeed(...)
          +--> CalculateFinalSpeed(...)
          |
          v
MobileParty speed cache -> map AI / encounter selection / map movement
```

Use this model for a rule that changes the calculated value for every relevant consumer. Use a `MobileParty` or an Action for state changes: changing `MobileParty.Position`, adding troops, or teleporting a party inside a model creates feedback loops and bypasses events. `includeDescriptions: true` is for UI and debugging; it adds explanation lines but should not alter the numeric result.

### Registration and ownership

`Campaign.Current.Models` owns the registered instance. The default is a `DefaultPartySpeedCalculatingModel`; mods replace it through `IGameStarter.AddModel` during campaign startup. Do not instantiate the model in a menu callback, mission tick, or static field before a campaign exists.

### Consumers in the source

- `MobileParty.CalculateSpeed` calls `CalculateBaseSpeed` and `CalculateFinalSpeed` and stores the explained result.
- `DefaultPartySpeedCalculatingModel` reads `CharacterDevelopmentModel` for perk thresholds and applies its factors to the `ExplainedNumber`.
- Map AI and encounter code consume the cached speed; they do not call a custom setter on the model.

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Owns the `Models` registry and the active campaign lifetime. |
| [`MobileParty`](../../campaign/MobileParty) | Supplies roster, party component, terrain context, and the speed cache. |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | Provides skill/perk thresholds used by vanilla speed factors. |
| [`ExplainedNumber`](../ExplainedNumber) | Carries the numeric result and optional factor descriptions. |

### Downstream

| Type | Relation |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | Calls both calculation stages and exposes `Speed`/`SpeedExplained`. |
| [`PartyNavigationModel`](../PartyNavigationModel) | Chooses movement targets using the resulting speed. |
| [`MapEvent`](../../campaign/MapEvent) | Uses party state and speed during encounter and battle setup. |

### Actions, events, and save

There is no save payload for this model result. Party roster changes must use roster APIs or the relevant `*Action`; movement changes must use the map/party APIs. A replacement model should remain deterministic for the same inputs so speed caches and replayed campaign ticks stay coherent.

## Key contract

| Member | Purpose | Typical timing |
| --- | --- | --- |
| `BaseSpeed` | Default lower-level speed constant exposed to consumers. | Model registration and previews |
| `MinimumSpeed` | Lower bound expected by map movement rules. | Final-speed clamping |
| `CalculateBaseSpeed` | Combines party composition and base modifiers into an `ExplainedNumber`. | `MobileParty.CalculateSpeed` |
| `CalculateFinalSpeed` | Applies final factors such as perks and state to the base result. | Immediately after base calculation |

## Real access path

```csharp
using TaleWorlds.CampaignSystem;

public ExplainedNumber ExplainPartySpeed(MobileParty party)
{
    if (Campaign.Current == null || party == null)
    {
        return new ExplainedNumber(0f);
    }

    PartySpeedModel model = Campaign.Current.Models.PartySpeedCalculatingModel;
    ExplainedNumber baseSpeed = model.CalculateBaseSpeed(party, includeDescriptions: true);
    return model.CalculateFinalSpeed(party, baseSpeed);
}
```

This mirrors the two calls in `MobileParty.CalculateSpeed`. It is a read-only query: do not assign the result back to `party.Position` or mutate the roster from the callback.

## Replacing the policy safely

```csharp
public sealed class ModPartySpeedModel : PartySpeedModel
{
    private readonly PartySpeedModel _vanilla;

    public ModPartySpeedModel(PartySpeedModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override float BaseSpeed => _vanilla.BaseSpeed;
    public override float MinimumSpeed => _vanilla.MinimumSpeed;

    public override ExplainedNumber CalculateBaseSpeed(
        MobileParty party, bool includeDescriptions = false,
        int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)
    {
        ExplainedNumber result = _vanilla.CalculateBaseSpeed(
            party, includeDescriptions, additionalTroopOnFootCount, additionalTroopOnHorseCount);
        if (party.IsCurrentlyAtSea)
        {
            result.AddFactor(0.9f, new TextObject("Mod: sea handling"));
        }
        return result;
    }

    public override ExplainedNumber CalculateFinalSpeed(MobileParty party, ExplainedNumber speed)
    {
        return _vanilla.CalculateFinalSpeed(party, speed);
    }
}
```

The decorator preserves vanilla factors and only adds a bounded factor. If the default implementation is not available at registration time, defer construction until the game starter has registered the model chain; never use a null fallback that makes every party stop.

## Risks and debugging order

1. **No campaign:** `Campaign.Current` is null on the title screen and during early module loading.
2. **Double application:** Calling the model and then applying the result again in a behavior doubles factors. Prefer the `MobileParty` cache for ordinary reads.
3. **Unbounded values:** Negative or NaN results can break pathfinding and encounter selection. Preserve `MinimumSpeed` and vanilla clamping.
4. **Roster mutation in a query:** Recruitment or desertion belongs to campaign behaviors/actions, not a calculation callback.
5. **Stale cache:** After a legitimate roster change, use the party API that invalidates speed; do not reach into private cache fields.

## Cross-version notes

The two-stage base/final contract and `Campaign.Current.Models.PartySpeedCalculatingModel` access path are stable in v1.3.0 and v1.3.15. Both v1.3.15 and v1.4.5 include `IsCurrentlyAtSea` conditions; v1.4.5 differs more visibly in ship state, wind, and sea-related cache invalidation around the model. Preserve unknown factors by delegating to the installed vanilla model rather than copying an older formula.

## Navigation

- [Campaign-ext models family](../models/)
- [MobileParty](../../campaign/MobileParty)
- [PartyNavigationModel](../PartyNavigationModel)
- [CharacterDevelopmentModel](../CharacterDevelopmentModel)
- [Campaign system guide](../../../guide/campaign-system)
