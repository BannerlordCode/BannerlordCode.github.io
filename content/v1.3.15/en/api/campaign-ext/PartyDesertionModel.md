---
title: "PartyDesertionModel"
description: "The replaceable policy that selects troops for desertion, computes per-troop chance, and defines the low-morale threshold without mutating the real party roster."
---

# PartyDesertionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyDesertionModel : MBGameModel<PartyDesertionModel>`  
**Base:** `MBGameModel<PartyDesertionModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyDesertionModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyDesertionModel.cs`

## One-line responsibility

This model decides which regular troops are candidates to desert because of morale, wages, or party size, but it does not remove them from the live party.

## Mental model

`PartyDesertionModel` is the selection layer between a `MobileParty` and [DesertionCampaignBehavior](../DesertionCampaignBehavior/). On the daily party tick, the behavior asks `Campaign.Current.Models.PartyDesertionModel` for a separate dummy `TroopRoster`. That result describes counts and wounded counts to remove; the behavior then subtracts those counts from the real `MemberRoster`, raises the troops-deserted event, and destroys the party if no members remain.

The default model combines two different pressures. Low morale uses a level-based probability, while wage and party-size pressure selects a guaranteed maximum count. The selection skips heroes, treats wounded and healthy troops separately, and walks the roster from the end. This is why the model must return a plan rather than mutate the party: callers also use the result for settlement forecasts, and a calculation can be repeated before the actual removal stage.

## When to use and when not to

- Replace the model to change the desertion candidate set, low-morale probability, or morale threshold used by the vanilla selection formula.
- Read it through `Campaign.Current.Models.PartyDesertionModel` when a forecast needs to display the next possible desertion result.
- Do not call `MemberRoster.AddToCounts` or `DestroyPartyAction` from a model method. Those writes belong to [DesertionCampaignBehavior](../DesertionCampaignBehavior/).
- Do not treat `GetMoraleThresholdForTroopDesertion` as a complete desertion switch. Wage limits, party-size overflow, party type, sea state, map-event state, and regular-member count are checked by other layers.

## Dependencies and consumers

#### Upstream

- [Campaign](../../campaign/Campaign/) and [GameModels](../GameModels/) own the registered policy instance.
- [MobileParty](../../campaign/MobileParty/) supplies morale, payment limit, party-size limit, wage, sea, activity, and roster state.
- [TroopRoster](../TroopRoster/) and `TroopRosterElement` carry source counts, wounded counts, troop levels, and the dummy removal plan.
- [PartyMoraleModel](../PartyMoraleModel/) supplies the morale result read by the default probability formula; [PartyWageModel](../PartyWageModel/) supplies the wage total used for payment pressure.

#### Downstream

- [DesertionCampaignBehavior](../DesertionCampaignBehavior/) invokes the model once per eligible daily party tick and applies the returned plan to the live roster.
- `SettlementHelper` reads the returned roster when estimating garrison changes and settlement effects.
- [CampaignEvents](../CampaignEvents/) publishes `OnTroopsDeserted` after the live roster has been changed.
- [DestroyPartyAction](../DestroyPartyAction/) may remove a party after the behavior observes that its member count reached zero.

## Members and timing

| Member | Purpose and timing | Side-effect boundary |
|---|---|---|
| `GetTroopsToDesert(MobileParty)` | Builds a dummy roster containing morale-driven and wage/size-driven desertion counts; called during the eligible daily tick and settlement forecasts. | Must not modify `mobileParty.MemberRoster`; the returned roster is a plan. |
| `GetDesertionChanceForTroop(MobileParty, in TroopRosterElement)` | Returns the probability used for a particular non-hero roster element in morale-driven selection. | Returns a value only; the default caller supplies deterministic seeded random values. |
| `GetMoraleThresholdForTroopDesertion()` | Provides the morale level used to shape the default chance curve; the vanilla value is 10. | Does not change morale or trigger desertion by itself. |

## Default selection details

The vanilla `GetTroopsToDesert` starts with `TroopRoster.CreateDummyTroopRoster()`, then combines two limits:

1. Morale pressure estimates a count from regular members and the chance curve evaluated at average troop level 20. It selects wounded and healthy members separately, with the per-element chance from `GetDesertionChanceForTroop`.
2. Wage and size pressure compares the party's all-member count with `PartySizeLimit`, and compares the effective wage with `PaymentLimit`. A garrison with unpaid wages can add up to five healthy members to the count. This branch selects without probability and caps the result at the number of regular members.

The default selection ignores heroes and scans roster entries backwards. It uses `CampaignTime.Now`, roster index, and element index to seed morale probability, so a replacement should not assume the return value is a normalized random percentage or a stable list across changed roster ordering.

## Real acquisition and query example

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;

Campaign campaign = Campaign.Current;
MobileParty party = MobileParty.MainParty;
PartyDesertionModel desertion = campaign.Models.PartyDesertionModel;

TroopRoster plan = desertion.GetTroopsToDesert(party);
int plannedLosses = plan.TotalManCount;

if (party.MemberRoster.Count > 0)
{
    TroopRosterElement element = party.MemberRoster.GetElementCopyAtIndex(0);
    float chance = desertion.GetDesertionChanceForTroop(party, in element);
    int moraleThreshold = desertion.GetMoraleThresholdForTroopDesertion();
}
```

This is a read-only forecast. It does not apply `plan` to the player party. The vanilla behavior checks party eligibility before making this query, and only that behavior removes troops and dispatches the desertion event.

## Risks and debugging boundaries

1. Returning the live `MemberRoster` instead of a separate removal plan lets the caller iterate data that it is about to mutate and can subtract the wrong counts, especially wounded counts.
2. Removing heroes or failing to preserve `WoundedNumber` changes the meaning of desertion and can corrupt prisoner/member accounting. The default model explicitly excludes heroes and records wounded losses in the dummy roster.
3. A model result can be queried by both daily desertion and settlement forecasts. Mutating gold, food, morale, or rosters inside the calculation causes duplicate state changes.
4. Returning an unbounded chance is unsafe: the default selection compares it with a seeded random float. Keep the contract as a probability-like value for morale-driven selection.
5. Wage pressure depends on [PartyWageModel](../PartyWageModel/) and party payment limits. Changing both policies without checking their shared boundary can make desertion oscillate or make the payment-limit branch unreachable.
6. `DesertionCampaignBehavior` only applies the result for active non-sea, non-disbanding parties outside map events and only for lord parties, caravans, and garrisons. A forecast must not claim that every party type will immediately desert.
7. The model has no `SyncData`; persist custom thresholds or counters in a separate [CampaignBehaviorBase](../CampaignBehaviorBase/) save contract rather than in the model instance.

## Navigation

- [Parent: campaign-ext](../)
- [Models family guide](../models/)
- [Siblings: PartyMoraleModel](../PartyMoraleModel/) · [PartyWageModel](../PartyWageModel/) · [PartySizeLimitModel](../PartySizeLimitModel/)
- [Consumer: DesertionCampaignBehavior](../DesertionCampaignBehavior/)
- [Related: MobileParty](../../campaign/MobileParty/) · [TroopRoster](../TroopRoster/) · [DestroyPartyAction](../DestroyPartyAction/)
