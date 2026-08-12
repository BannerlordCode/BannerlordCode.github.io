---
title: "PartyDesertionModel"
description: "Selects troops that desert because of morale, unpaid wages, or exceeding party capacity, computes the per-troop desertion chance and the low-morale threshold, but never mutates the real roster — a replaceable policy."
---

# PartyDesertionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyDesertionModel : MBGameModel<PartyDesertionModel>`  
**Base:** `MBGameModel<PartyDesertionModel>`  
**Source file path:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\PartyDesertionModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyDesertionModel.cs`

## One-line responsibility

It decides which regular troops may desert because of morale, wages, or party size, but it only returns a separate action plan and never removes any unit from the live party roster. The actual troop removal, event broadcast, and empty-party destruction are performed by `DesertionCampaignBehavior` on eligible daily ticks.

## Mental model

`PartyDesertionModel` is the "selection layer" between a `MobileParty` and [DesertionCampaignBehavior](../DesertionCampaignBehavior/). On the daily party tick, the behavior calls `Campaign.Current.Models.PartyDesertionModel.GetTroopsToDesert(party)` and obtains a separate dummy `TroopRoster`. This result only describes the healthy-troop count and wounded-troop count to be subtracted; the behavior then subtracts them from the real `MemberRoster`, broadcasts `OnTroopsDeserted`, and calls `DestroyPartyAction` when the party's members reach zero.

The computation chain is: party morale, payment limit, party-size limit, wages, and wound status first enter `GetTroopsToDesert`, which internally merges two kinds of pressure — a random-probability selection driven by low morale, and a deterministic selection driven by unpaid wages / over-capacity — and then returns the dummy roster. Settlement forecasts ([SettlementHelper](../SettlementHelper/)) also read this result to estimate garrison losses, so the model can be queried repeatedly, even before the real troop removal. This differs from [PartySpeedModel](../PartySpeedModel/): the speed model changes the map speed seen by all consumers, whereas the desertion model changes who leaves during the daily resolution.

Use this model to change the desertion candidate set, the per-troop probability, or the morale threshold used by the default formula. If the goal is to actually remove troops, broadcast events, or destroy empty parties, use [DesertionCampaignBehavior](../DesertionCampaignBehavior/) and the corresponding `*Action`; do not call `MemberRoster.AddToCounts` or `DestroyPartyAction` from within a model method. The model returns a "plan"; treating it as an immediate write causes duplicate subtraction on data the caller is about to iterate.

### Lifecycle and registration

`Campaign.Current.Models` holds the current instance. The default instance is `DefaultPartyDesertionModel`, registered by the game launcher through `IGameStarter.AddModel` (`GameModels`) during campaign initialization; a custom model must be registered before the campaign system begins querying it. On the title screen, during early module loading, or when no active campaign exists, `Campaign.Current` may be `null`, so it must not be read unconditionally inside static field initializers or menu constructors. The model itself has no `SyncData`; thresholds or counters that must persist across saves should go into a separate [CampaignBehaviorBase](../CampaignBehaviorBase/) save contract.

## When to use and when not to

- Replace the model when you want to change the desertion candidate set, the low-morale probability, or the morale threshold used by the default formula.
- Read from `Campaign.Current.Models.PartyDesertionModel` when you need a diagnostic or forecast showing the next possible desertion result.
- Do not call `MemberRoster.AddToCounts`, `DestroyPartyAction`, or transfer gold from within a model method; those writes belong to layers such as [DesertionCampaignBehavior](../DesertionCampaignBehavior/) and [PartyWageModel](../PartyWageModel/).
- Do not treat `GetMoraleThresholdForTroopDesertion` as a complete desertion switch; the wage limit, capacity overflow, party type, sea state, map-event state, and regular-member count are checked by other layers.

## Dependencies

### Upstream

| Type | Relationship |
| --- | --- |
| [`Campaign`](../../campaign/Campaign/) | Provides the active campaign, the `Models` registry, and the global quantities the default implementation needs (such as `AverageWage`). |
| [`MobileParty`](../../campaign/MobileParty/) | Provides morale, payment limit, party-size limit, wages, sea/activity state, disbandment bookkeeping, and the `MemberRoster`. |
| [`TroopRoster`](../TroopRoster/) / `TroopRosterElement` | Carries raw counts, wounded counts, and troop tiers, and hosts the dummy subtraction plan. |
| [`PartyMoraleModel`](../PartyMoraleModel/) | Provides `MobileParty.Morale`, the morale input read by the default probability formula. |
| [`PartyWageModel`](../PartyWageModel/) | Provides `GetTotalWage`, used for the payment comparison in the wage-pressure branch. |
| [`PartySizeLimitModel`](../PartySizeLimitModel/) | Provides `PartySizeLimit`, used in the capacity-overflow branch. |
| [`Settlement`](../../campaign/Settlement/) / [`Town`](../../campaign/Town/) | Settlement garrisons (`GarrisonParty`) are among the primary consumers; the forecast path enters the model from here. |

### Downstream

| Type | Relationship |
| --- | --- |
| [`DesertionCampaignBehavior`](../DesertionCampaignBehavior/) | Calls the model on eligible daily ticks and applies the returned plan to the real roster. |
| [`SettlementHelper`](../SettlementHelper/) | Reads `GetTroopsToDesert(garrisonParty).TotalManCount` to estimate garrison changes. |
| [`CampaignEvents`](../CampaignEvents/) | After the real roster is modified, broadcasts the desertion event via `OnTroopsDeserted`. |
| [`DestroyPartyAction`](../DestroyPartyAction/) | May remove the party after the behavior observes that the member count has reached zero. |

### Action, events, and save boundaries

The model result itself has no save fields and dispatches no events. Legitimate troop removal goes through `MemberRoster.AddToCounts` inside [DesertionCampaignBehavior](../DesertionCampaignBehavior/), event dispatch goes through `CampaignEventDispatcher.Instance.OnTroopsDeserted`, and party destruction goes through `DestroyPartyAction.Apply`. A custom model should stay deterministic for the same input, to avoid inconsistency with replayed campaign ticks.

## Members contract

| Member | Theme | Purpose and when called | Side-effect boundary |
| --- | --- | --- | --- |
| `GetTroopsToDesert(MobileParty)` | Calculation | Builds a dummy `TroopRoster` that merges "morale pressure" with "wage/capacity pressure"; called on eligible daily ticks ([`DesertionCampaignBehavior.DailyTickParty`](../DesertionCampaignBehavior/)) and in settlement forecasts ([`SettlementHelper`](../SettlementHelper/)). | Must not modify `mobileParty.MemberRoster`; the returned roster is only a plan, applied by the caller. |
| `GetDesertionChanceForTroop(MobileParty, in TroopRosterElement)` | Calculation | Computes the desertion probability (0–1) for a non-hero roster element in the morale-driven selection; the default implementation depends only on `party.Morale` and `troopRosterElement.Character.Level`. | Returns a value only; the deterministic seeded randomness is provided by the default selector (`RandomFloatWithSeed`), the model itself does not roll dice. |
| `GetMoraleThresholdForTroopDesertion()` | Configuration | Provides the morale level used by the default probability curve; vanilla returns `10`. | Does not modify morale and does not trigger desertion on its own. |

## Vanilla selection details

The vanilla `GetTroopsToDesert` first calls `TroopRoster.CreateDummyTroopRoster()`, then merges two caps. Relevant constants: `MaxAcceptableDesertionCountForNormal = 20`, `MoraleThresholdForParty = 10`, `AverageTroopLevel = 20`.

1. **Morale pressure**: estimates a count as the regular-member count times `CalculateDesertionChanceFromTroopLevel(morale, 20)` (average troop tier 20), then makes a probabilistic selection over wounded and healthy troops using `GetDesertionChanceForTroop`.
2. **Wage and capacity pressure**: compares `NumberOfAllMembers - plannedCount - PartySizeLimit` (capacity overflow) with `TotalWage - PaymentLimit` (unpaid wages). The unpaid-wage branch selects at most `min(20, ...)`; the capacity branch takes `0.25` times the overflow; when it is a garrison and `HasUnpaidWages > 0`, it additionally adds at most `min(healthyMemberCount, 5)`; the final count never exceeds `TotalRegulars`. This path uses `useProbability: false`, i.e. a deterministic selection.

The default selector skips heroes (`Character.HeroObject == null`), scans the roster from the end forward, and seeds the morale probability with `CampaignTime.Now.ToHours` and `rosterIndex * 100 + elementIndex` via `RandomFloatWithSeed`. Therefore a replacement implementation must not interpret the return value as a normalized percentage, nor assume the result stays identical after the roster ordering changes.

## Real acquisition and query example

The following code only queries the model already registered in the current campaign, in the exact same order as [DesertionCampaignBehavior](../DesertionCampaignBehavior/):

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;

public int PredictDesertionLoss(MobileParty party)
{
    if (Campaign.Current == null || party == null || party.MemberRoster.Count == 0)
    {
        return 0;
    }

    PartyDesertionModel desertion = Campaign.Current.Models.PartyDesertionModel;
    TroopRoster plan = desertion.GetTroopsToDesert(party);

    int plannedLoss = plan.TotalManCount;
    if (plannedLoss > 0)
    {
        TroopRosterElement element = party.MemberRoster.GetElementCopyAtIndex(0);
        float chance = desertion.GetDesertionChanceForTroop(party, in element);
        int moraleThreshold = desertion.GetMoraleThresholdForTroopDesertion();
        // chance is only for diagnostic display; the actual troop removal is performed by DesertionCampaignBehavior.
    }

    return plannedLoss;
}
```

This is a read-only forecast; it does not apply `plan` to the player party. The actual troop removal and desertion-event dispatch happen only inside [DesertionCampaignBehavior](../DesertionCampaignBehavior/).

## Safe practices when replacing the model

If you only want to add a bounded correction, keep the original model as a delegate and keep the three abstract members working as pairs:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;

public sealed class ModPartyDesertionModel : PartyDesertionModel
{
    private readonly PartyDesertionModel _vanilla;

    public ModPartyDesertionModel(PartyDesertionModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override int GetMoraleThresholdForTroopDesertion()
    {
        return _vanilla.GetMoraleThresholdForTroopDesertion();
    }

    public override float GetDesertionChanceForTroop(MobileParty mobileParty, in TroopRosterElement troopRosterElement)
    {
        return _vanilla.GetDesertionChanceForTroop(mobileParty, in troopRosterElement);
    }

    public override TroopRoster GetTroopsToDesert(MobileParty mobileParty)
    {
        TroopRoster plan = _vanilla.GetTroopsToDesert(mobileParty);
        // Apply a bounded correction to plan before returning; do not write the real roster here.
        return plan;
    }
}
```

In practice, save the vanilla delegate during the model-registration stage of `CampaignGameStarter`; do not look yourself up again through `Campaign.Current.Models.PartyDesertionModel` after the model has already been replaced, or you will recurse. If you want the replacement to cover version-specific rules around wages, capacity, and sea state, prefer delegating to the current version's vanilla model and then adding your own bounded correction.

## Risks and debugging boundaries

1. If you return the real `MemberRoster` instead of a separate subtraction plan, the caller may subtract the wrong counts while iterating data it is about to modify, and most easily corrupts the wounded count (`WoundedNumber`).
2. Removing heroes or not preserving `WoundedNumber` changes the desertion semantics and may corrupt prisoner/member statistics. The default implementation explicitly skips heroes and records wounded losses in the dummy roster.
3. The model result can be queried by both the daily desertion logic and settlement forecasts. Mutating gold, food, morale, or rosters during the calculation causes duplicate state changes.
4. Returning an unbounded probability is unsafe: the default selector compares it against a seeded random float. The morale branch should keep the probabilistic return contract (0–1).
5. Wage pressure depends on [PartyWageModel](../PartyWageModel/) and the party payment limit. Changing both policies at once without checking their shared boundary can cause desertion oscillation or make the payment branch permanently unreachable.
6. [DesertionCampaignBehavior](../DesertionCampaignBehavior/) applies the result only when `IsActive && !IsCurrentlyAtSea && !IsDisbanding && MapEvent == null && (IsLordParty || IsCaravan || IsGarrison) && TotalRegulars > 0`. A forecast page must not claim that every party type will desert immediately.
7. The model has no `SyncData`; thresholds or counters that must be saved should go into a separate `CampaignBehaviorBase` save contract, not the model instance.

## Version and navigation

The interfaces of v1.3.15 and v1.4.5 are identical (`GetTroopsToDesert` / `GetDesertionChanceForTroop` / `GetMoraleThresholdForTroopDesertion`), and the default-implementation constants are also `10` / `20` / `20`. Cross-version implementations should delegate to the current version's vanilla model rather than copying the old formula into the new version — sea-state, wage, and capacity logic can differ subtly between versions.

- [Parent: Campaign-ext API](../)
- [Models family guide](../models/)
- [↔ PartyMoraleModel](../PartyMoraleModel/) · [PartyWageModel](../PartyWageModel/) · [PartySizeLimitModel](../PartySizeLimitModel/) · [PartySpeedModel](../PartySpeedModel/)
- [Consumer: DesertionCampaignBehavior](../DesertionCampaignBehavior/)
- [Related: MobileParty](../../campaign/MobileParty/) · [TroopRoster](../TroopRoster/) · [TroopRosterElement](../TroopRosterElement/) · [DestroyPartyAction](../DestroyPartyAction/) · [CampaignEvents](../CampaignEvents/) · [SettlementHelper](../SettlementHelper/)
