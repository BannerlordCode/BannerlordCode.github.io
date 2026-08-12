---
title: "SettlementMilitiaModel"
description: "The replaceable strategy model that converts settlement prosperity, hearth, loyalty, buildings and policies into daily militia change and post-siege reinforcement."
---
# SettlementMilitiaModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementMilitiaModel : MBGameModel<SettlementMilitiaModel>`  
**Base:** `MBGameModel<SettlementMilitiaModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMilitiaModel.cs`  
**Default:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs`

## Overview

It answers "how much militia should this settlement grow today, how much should be reinforced after a siege, and what are the melee/ranged and veteran ratios of the reinforcement," and returns the numbers with optional explanations. It does **not** put people into the settlement's militia roster itself, does not change the composition, and does not trigger any world mutation. The actual roster change happens in the settlement's daily tick — this model only computes "how much should change."

## Mental Model

This is the rule layer read before the settlement's daily clock runs. The settlement's militia value (`Settlement.Militia`, a float) is driven in the daily tick by the per-day delta returned from `CalculateMilitiaChange`; after a siege ends, a town changes hands, or a rebellion is suppressed, `MilitiaToSpawnAfterSiege` together with `CalculateMilitiaSpawnRate` / `CalculateVeteranMilitiaSpawnChance` decide "how much to add at once, melee or ranged, and whether veterans appear." The model itself is a pure query: it sums prosperity, hearth count, loyalty, building effects, kingdom policies, governor perks and bounty-quest effects into an `ExplainedNumber`.

The default implementation (`DefaultSettlementMilitiaModel`) is composed as follows: castle/town base +2, village base +0.5; the more existing militia, the more "retires" (`-militia * 0.025`, a soft cap); villages grow by hearth `/400`; towns/castles grow by prosperity `/1000`, with an extra bonus from low loyalty during rebellion; towns additionally get modifiers from market armaments (weapon-type goods) and several policies (e.g. `Cantons` +1, `Serfdom` -1); castles/towns further stack buildings (`Militia`, `MilitiaReduction`), policies, governor perks and bounty-quest effects. Note: the model reads the rebellion loyalty threshold from `Campaign.Current.Models.SettlementLoyaltyModel`, so it is one part of the wider settlement economy rules (prosperity / loyalty / security / food), but directly consumes only a subset of those inputs.

Use this model to **read** the militia growth and reinforcement rules — for example to show the UI a prediction of "this town gains +X militia per day," or to preview the melee/ranged ratio of a post-siege reinforcement. If the goal is to actually add, remove or transfer militia troops, use the settlement daily tick and the corresponding action/roster API, not a field write inside the model callback such as `Settlement.Militia` or `Settlement.MilitiaParty`. A model callback must be a read-only query: recruiting, transferring or re-composing troops inside `CalculateMilitiaChange` / `CalculateMilitiaSpawnRate` turns a "compute" call into a side effect that repeats every tick, and fights the official daily-tick write. `includeDescriptions` only controls whether `ExplainedNumber` records the factor descriptions, and must not change the number.

### Lifecycle and Registration

`Campaign.Current.Models` holds the current instance, accessed by the key `SettlementMilitiaModel`. The default instance is `DefaultSettlementMilitiaModel`, which the game launcher registers during campaign initialization through `IGameStarter.AddModel`; a custom model must also be registered before the campaign system starts querying it. On the title screen, early module-loading, or when no active campaign exists, `Campaign.Current` may be `null`, so it must not be read unconditionally in static field initializers or menu constructors — every read should null-check first.

## Dependencies

### Upstream

| Type | Relationship |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the active campaign and the `Models` registry, plus sibling models such as `Models.SettlementLoyaltyModel`. |
| [`Settlement`](../../campaign/Settlement) | Provides core inputs: `Militia`, `IsFortification`/`IsVillage`/`IsTown`/`IsCastle`, `Village.Hearth`, `Town.Prosperity`. |
| [`Town`](../../campaign/Town) | Provides prosperity, loyalty, rebellion state, governor, market sell records and building effects. |
| [`Village`](../../campaign/Village) | Provides hearth count (`Hearth`) and the bound trade town (`TradeBound`). |
| [`ExplainedNumber`](../ExplainedNumber) | Carries the daily militia delta, veteran chance and factor descriptions. |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | The default implementation reads its rebellion loyalty threshold to compute the low-loyalty militia bonus. |

### Downstream

| Type | Relationship |
| --- | --- |
| [`Settlement`](../../campaign/Settlement) | The daily tick consumes the return of `CalculateMilitiaChange` to rewrite `Settlement.Militia`. |
| [`MilitiaPartyComponent`](../MilitiaPartyComponent) | The reinforced militia exists in the world as the settlement's militia party (`Settlement.MilitiaParty`); the model only computes "how much / what ratio," it does not create that party itself. |
| [`SiegeEvent`](../SiegeEvent) | On siege end / change of ownership it triggers queries for `MilitiaToSpawnAfterSiege` and the reinforcement ratio. |
| [`SettlementSecurityModel`](../SettlementSecurityModel) | An adjacent settlement-rule model; it governs security and belongs to the same settlement-economy layer as militia. Replacing one must not implicitly trigger writes into the other. |

### Actions, Events and Save Boundary

The model result has no save fields of its own and dispatches no events — the returned `ExplainedNumber` is a transient computation. The actual militia value change happens in the settlement daily tick (which is part of the saved settlement state). A custom model should stay deterministic for identical inputs, to avoid diverging from replayed campaign ticks; all legitimate militia roster changes must go through the official daily tick / roster API, never inside a computation callback.

## Risks and Debugging

1. **Campaign not yet present:** `Campaign.Current` is null on the title screen and during early module loading; the default implementation reads `Campaign.Current.Models.SettlementLoyaltyModel` directly, so callers must null-check first, or they get a `NullReferenceException` in menus / early loading.
2. **Mutating the world inside a callback:** Writing `Settlement.Militia` or `Settlement.MilitiaParty`, recruiting units or moving gold inside `CalculateMilitiaChange` / `CalculateMilitiaSpawnRate` breaks the authoritative daily-tick write and creates duplicate side effects.
3. **Unbounded / negative results:** A custom `CalculateMilitiaChange` returning a huge or negative-infinite value blows up or zeroes out the militia value; it should keep the same magnitude as the default (castle/town +2 baseline, village +0.5 baseline, retirement term inversely proportional to militia).
4. **`out` parameters left unassigned:** `CalculateMilitiaSpawnRate`'s `meleeTroopRate` / `rangedTroopRate` are `out`; a custom implementation must assign both, and the two should sum to a normalized value (the default is 0.5 each), otherwise the melee/ranged ratio of the reinforcement becomes distorted.
5. **Double-consuming the number:** Calling the model and then writing its return value back or stacking it again makes the delta apply twice; UI previews should be read-only, and only the daily tick should write.
6. **Reading itself after replacement:** After registering a replacement model, looking itself up again through `Campaign.Current.Models.SettlementMilitiaModel` inside a callback recurses; prefer delegating to the vanilla delegate.

See [`Crash and Save Boundary`](../../../architecture/crash-boundaries) for more.

## Member Contract

| Member | Purpose | When called & side effects |
| --- | --- | --- |
| `MilitiaToSpawnAfterSiege(Town town)` | Returns the one-time militia added after a siege ends / ownership changes. The default returns `2 * (45 + RandomInt(10))`, i.e. 90–109. | Queried by official logic on siege resolution, town capture or rebellion suppression; pure query, must not create troops here. |
| `CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)` | Returns the settlement's **daily** militia delta as an `ExplainedNumber` (base + retirement + hearth/prosperity + per-item policy/building/perk/bounty stacking). | Used by the settlement daily tick to rewrite `Settlement.Militia`; also for UI preview "daily +X". `includeDescriptions` only controls the factor description text, not the number. |
| `CalculateVeteranMilitiaSpawnChance(Settlement settlement)` | Returns the veteran-probability bonus `ExplainedNumber` for reinforced militia: governor perks (CitizenMilitia / Drills / SevenVeterans), Battanian culture trait, building `MilitiaVeterancyChance`, `LandGrantsForVeteran` policy +10%. | Queried when reinforcing militia after a siege; pure query. |
| `CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)` | Gives the melee/ranged reinforcement ratio through `out` parameters. The default sets `melee = 0.5`, `ranged = 0.5`. | Decides melee vs ranged for post-siege reinforcement; must receive both ratios via `out`; the return value is meaningless. |

Observable factors of the default implementation (taking `CalculateMilitiaChange` as example): castle/town base +2, village base +0.5; more existing militia retires more; villages grow by hearth `/400`; towns/castles grow by prosperity `/1000`, with extra low-loyalty bonus during rebellion; towns are affected by market armaments, policies (`Cantons` +1, `Serfdom` -1) and culture traits; castles/towns additionally stack buildings, policies, governor perks and bounty quests. When replacing the model, keep the magnitude and sign of these terms.

## Real Access Path

The code below only queries the model already registered in the current campaign, consistent with both the daily-tick read and the UI preview:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public void PreviewMilitiaGrowth(Settlement settlement)
{
    if (Campaign.Current == null || settlement == null)
    {
        return;
    }

    // Daily militia change with factor descriptions, good for "this town +X militia/day" UI
    ExplainedNumber daily = Campaign.Current.Models.SettlementMilitiaModel
        .CalculateMilitiaChange(settlement, includeDescriptions: true);

    // Melee/ranged ratio of post-siege reinforcement (out params, return value is meaningless)
    Campaign.Current.Models.SettlementMilitiaModel
        .CalculateMilitiaSpawnRate(settlement, out float melee, out float ranged);

    // Veteran-probability bonus for reinforced militia
    ExplainedNumber veteran = Campaign.Current.Models.SettlementMilitiaModel
        .CalculateVeteranMilitiaSpawnChance(settlement);

    // One-time reinforcement after siege ends / ownership changes
    if (settlement.IsFortification && settlement.Town != null)
    {
        int toSpawn = Campaign.Current.Models.SettlementMilitiaModel
            .MilitiaToSpawnAfterSiege(settlement.Town);
    }
}
```

This result is good for debugging or UI preview; do not write `daily` back into `Settlement.Militia` yourself — that is the daily tick's job.

## Safe Replacement Pattern

If you only want to add a bounded modifier, keep the original model as a delegate to avoid recursing by looking yourself up again inside the callback:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public sealed class ModSettlementMilitiaModel : SettlementMilitiaModel
{
    private readonly SettlementMilitiaModel _vanilla;

    public ModSettlementMilitiaModel(SettlementMilitiaModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override int MilitiaToSpawnAfterSiege(Town town)
        => _vanilla.MilitiaToSpawnAfterSiege(town);

    public override ExplainedNumber CalculateMilitiaChange(
        Settlement settlement, bool includeDescriptions = false)
    {
        ExplainedNumber result = _vanilla.CalculateMilitiaChange(settlement, includeDescriptions);
        result.Add(0.5f, new TextObject("Mod: garrison drill"));
        return result;
    }

    public override ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)
        => _vanilla.CalculateVeteranMilitiaSpawnChance(settlement);

    public override void CalculateMilitiaSpawnRate(
        Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)
    {
        _vanilla.CalculateMilitiaSpawnRate(settlement, out meleeTroopRate, out rangedTroopRate);
    }
}
```

At registration time, capture the vanilla delegate during the `CampaignGameStarter` model-registration phase; do not look yourself up again through `Campaign.Current.Models.SettlementMilitiaModel` after the model has been replaced, or it will recurse.

## Version and Navigation

The v1.3.15 and v1.4.5 interfaces and default-implementation structure are consistent: all four abstract members — `MilitiaToSpawnAfterSiege`, `CalculateMilitiaChange`, `CalculateVeteranMilitiaSpawnChance`, `CalculateMilitiaSpawnRate` — exist. Cross-version replacement should delegate to the current version's vanilla model rather than simply copying the old formula into the new version (the set of policies, perks and culture traits changes across versions).

- [Models directory](../models/)
- [Parent: Campaign-Ext API](../)
- [↔ PartySpeedModel](../PartySpeedModel)
- [↔ SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [↔ SettlementSecurityModel](../SettlementSecurityModel)
- [ExplainedNumber](../ExplainedNumber)
- [SiegeEvent](../SiegeEvent)
- [MilitiaPartyComponent](../MilitiaPartyComponent)
- [Campaign](../../campaign/Campaign)
- [Settlement](../../campaign/Settlement)
- [Town](../../campaign/Town)
- [Village](../../campaign/Village)
- [Crash and Save Boundary](../../../architecture/crash-boundaries)
