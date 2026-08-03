---
title: "DefaultPartySpeedCalculatingModel"
description: "The default campaign model for party base speed, terrain, encumbrance, composition, and scouting modifiers."
---
# DefaultPartySpeedCalculatingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartySpeedCalculatingModel : PartySpeedModel`  
**Base:** [`PartySpeedModel`](../PartySpeedModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySpeedCalculatingModel.cs` (v1.3.15; the v1.4.5 counterpart is under `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents`)

## One-line job

This model turns party size, mounted troops, herd, cargo, wounded members, prisoners, morale, weather, terrain, scouting perks, and party state into map movement speed. It does not move a party, change its position, or mutate its roster.

## Mental model

```text
MobileParty / AttachedParties / ItemRoster / map state
                              |
        CalculateBaseSpeed (men, mounts, cargo, wounded)
                              |
        CalculateFinalSpeed (terrain, weather, time, scouting)
                              |
       MobileParty.SpeedExplained / speed cache / map AI
```

`DefaultPartySpeedCalculatingModel` exposes `BaseSpeed = 4` and `MinimumSpeed = 1`. `MobileParty` normally calls `CalculateBaseSpeed`, passes that explained result to `CalculateFinalSpeed`, then stores the final `ResultNumber` and explanation. The base stage handles party composition; the final stage reads navigation face, terrain, weather, and time. Merging or repeating the stages applies factors twice.

### Use it when

- You need to diagnose why a party slows down: inspect the base and final `ExplainedNumber` stages for cargo, wounded, over-capacity, terrain, and perk factors.
- You need to change the rule seen by all map-speed consumers: replace `PartySpeedModel` during campaign startup and preserve `MinimumSpeed` and the official cache contract.
- You need a temporary estimate for an order or formation: use `additionalTroopOnFootCount` and `additionalTroopOnHorseCount`; these inputs do not write to the roster.

### Do not use it when

Do not modify `MobileParty.Position`, teleport a party, recruit/remove troops, or raise encounter events from the speed model. Movement and world changes belong to party APIs, behaviors, or actions. Do not multiply a result again on every tick; `MobileParty` owns cache invalidation and recalculation timing.

## Dependencies

### Upstream inputs

| Type / system | What it supplies |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) / attached parties | Members, wounded, prisoners, mounts, party state, army relation, leader, and speed-cache context. |
| [`ItemRoster`](../ItemRoster) | Mounts, pack/livestock animals, and total carried weight. |
| [`PartySizeLimitModel`](../PartySizeLimitModel) | Member and prisoner capacity for over-capacity speed factors. |
| `InventoryCapacityModel` | Carry capacity for the current party and additional troops. |
| [`PartyMoraleModel`](../PartyMoraleModel) / `CharacterDevelopmentModel` | Morale value and the skill threshold for epic perks. |
| `MapWeatherModel` / `MapSceneWrapper` | Weather, wet-terrain effect, navigation-face terrain, and snow context. |
| `DefaultPerks` / `DefaultCulturalFeats` | Athletics, Riding, Scouting, Medicine, and Battanian/Aserai/Khuzait speed modifiers. |

### Downstream consumers

| Consumer | How it uses the model |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | Calls both stages, stores `Speed`/`SpeedExplained`, and refreshes caches from state versions. |
| [`PartyNavigationModel`](../PartyNavigationModel) | Uses party speed when evaluating routes and targets. |
| Map AI / encounter flow | Uses final speed for pursuit, escape, encounter selection, and map movement. |
| [`MapEvent`](../../campaign/MapEvent) | Uses party movement state during map encounters and battle setup. |

## Public contract

| Member | Default behavior | Important boundary |
| --- | --- | --- |
| `BaseSpeed` | Returns `4`. | A base constant, not the current party's final speed. |
| `MinimumSpeed` | Returns `1`. | The lower bound expected by map movement; replacements must preserve it. |
| `CalculateBaseSpeed` | Combines members/attached parties, mounts, herd, cargo, wounded, prisoners, morale, and party state. | Additional foot/horse counts affect this calculation only; they do not mutate the roster. |
| `CalculateFinalSpeed` | Adds terrain, weather, time-of-day, scouting, army, and custom-party factors. | Receives the base `ExplainedNumber` and clamps to `MinimumSpeed` again. |

## Default calculations

### Base speed: party composition and cargo

`CalculateBaseSpeed` uses the land-base formula in both v1.3.15 and v1.4.5 while allowing inventory capacity and selected perks to see sea state:

1. Total men starts with the party's member count plus the two additional-count parameters. Attached parties add their members, total weight, inventory capacity, mounted/unmounted counts, wounded, prisoners, and member capacity.
2. The base size formula is:

   ```text
   4 * (200 / (200 + totalMenCount)) ^ 0.4
   ```

3. Cavalry contributes `0.3 * cavalry / men`. Footmen that have mounts use `min(footmen, availableMounts)`, with mounted-footmen contribution `0.15 * mountedFootmen / men`. Wet weather subtracts `30%` of each of those two ratios; the leader's `Riding.NomadicTraditions` can add a factor based on mounted-footmen ratio.
4. Cargo within capacity contributes `-0.02 * min(weight, capacity) / capacity`. Overburdening uses the excess weight divided by capacity times `-0.4`; on land, `Athletics.Energetic` and `Scouting.Unburdened` can modify that explained factor.
5. Over-capacity members use `1 / (men / partySize) - 1`; the Deserters party receives half that factor. Extra mounts, pack animals, and livestock create herding loss capped at `-0.8`; villagers skip herding, and `Riding.Shepherd` can reduce the loss.
6. Wounded members slow the party only after they exceed one quarter of total men. The usual factor is `-0.05 * wounded / men`, capped at `-0.8`; zero men returns `-0.5`. Land parties can receive a `Medicine.Sledges` adjustment.
7. Non-caravans receive a prisoner-size factor; exceeding `PrisonerSizeLimit` adds another penalty. Caravans skip both prisoner-size branches.
8. Morale above `70` adds up to `+5%` linearly, while morale below `30` adds up to `-10%`. The main party also reads the difficulty map-speed multiplier, caravans add `+10%`, and disorganized parties add `-40%`.

The base result ends with `LimitMin(1)`. After a legitimate roster or weight change, let the official speed cache invalidate and recalculate rather than treating one read as permanent state.

### Final speed: terrain, weather, and scouting

`CalculateFinalSpeed` receives the base explained result and applies:

- A non-zero `CustomPartyComponent.BaseSpeed` replaces the passed base result for a custom party.
- Forest gives `-30%`; an effective Scout with `ForestKin` can reduce the penalty when at least 75% of members are unmounted, and the Battanian forest feat adds a culture factor.
- Non-sea parties on Water, River, UnderBridge, Bridge, or Fording faces receive `-30%`. Desert/Dune gives `-10%` unless the Aserai desert feat applies; `DesertBorn` and `Pathfinder` add scouting bonuses in their respective terrain.
- Snowy or Blizzard weather adds a `-10%` snow factor.
- On land, night gives `-25%`, with `NightRunner` compensation; during daytime, `DayTraveler` can add its bonus. Sea parties skip the night and other land-only scouting branches.
- Land parties receive the Scout epic `UncannyInsight`; `ForcedMarch` applies when morale is above `75`. During an `EngageParty` behavior, `Tracker` can apply when the target is an enemy land party.
- A land army subparty that is neither the leader nor directly attached to the leader can receive `Tactics.CallToArms` from the army leader.

The final result is clamped to `MinimumSpeed` again. `includeDescriptions` changes explanation text only and must not change the numeric result.

## Real read path

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Library;

MobileParty party = MobileParty.MainParty;
PartySpeedModel model = Campaign.Current.Models.PartySpeedCalculatingModel;
ExplainedNumber baseSpeed = model.CalculateBaseSpeed(
    party, includeDescriptions: true);
ExplainedNumber finalSpeed = model.CalculateFinalSpeed(party, baseSpeed);
float mapSpeed = finalSpeed.ResultNumber;
```

This mirrors `MobileParty`'s two-stage read path. For ordinary reads, `party.Speed` or `party.SpeedExplained` is preferable; do not call `CalculateFinalSpeed` again and apply the result to position or cache state.

## Replacing the default model

Register a subclass during campaign starter setup, delegate the vanilla formula, and add a bounded correction:

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.Localization;

public sealed class MyPartySpeedModel : DefaultPartySpeedCalculatingModel
{
    public override ExplainedNumber CalculateFinalSpeed(
        MobileParty party, ExplainedNumber speed)
    {
        ExplainedNumber result = base.CalculateFinalSpeed(party, speed);
        result.AddFactor(0.05f, new TextObject("{=my_speed_bonus}My speed bonus"));
        result.LimitMin(MinimumSpeed);
        return result;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyPartySpeedModel());
}
```

When decorating an already registered model, retain an explicit `BaseModel` reference during starter setup. Do not read `Campaign.Current.Models.PartySpeedCalculatingModel` as your own replacement base, and do not return a result without the minimum-speed guard.

## Risks and crash boundaries

1. **Repeated two-stage application:** the base result already contains composition/cargo factors and the final result already contains terrain/weather factors; do not call either stage twice.
2. **Stale cache:** `MobileParty` caches speed from roster, position, weather, time, and state versions. Use official APIs that invalidate it rather than writing private cache fields.
3. **Additional troops are not roster changes:** additional foot/horse counts are estimates for a calculation; treating them as already added creates a mismatch between UI and actual speed.
4. **Zero capacity or zero men:** capacity, member, and prisoner values participate in division. Preserve vanilla empty-party boundaries and avoid NaN or infinite output.
5. **Sea and land branches:** sea state skips some terrain, night, and land-perk paths while still affecting inventory and selected encumbrance logic; a land-only copy is incomplete.
6. **Model timing:** title-screen and early module-loading phases may not have `Campaign.Current`, a map face, or weather. Call the model after campaign startup through official consumers.

## Version note

The v1.3.15 and v1.4.5 interfaces, `BaseSpeed = 4`, `MinimumSpeed = 1`, and major composition, encumbrance, terrain, and weather branches remain consistent. v1.4.5 has more surrounding ship-state and sea-cache paths; delegate to the target version's default model instead of copying an older formula and losing new state inputs.

## See also

- [Campaign-ext Models family](../models/)
- [`PartySpeedModel`](../PartySpeedModel)
- [`MobileParty`](../../campaign/MobileParty)
- [`PartyNavigationModel`](../PartyNavigationModel)
- [`PartySizeLimitModel`](../PartySizeLimitModel)
- [`PartyMoraleModel`](../PartyMoraleModel)
- [`CharacterDevelopmentModel`](../CharacterDevelopmentModel)
- [`CampaignGameStarter`](../CampaignGameStarter)
