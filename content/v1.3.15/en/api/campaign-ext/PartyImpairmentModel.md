---
title: "PartyImpairmentModel"
description: "The replaceable policy model that decides whether campaign parties can enter a disorganized state, the duration of disorganized and vulnerable states, and the siege vulnerability timing."
---

# PartyImpairmentModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyImpairmentModel : MBGameModel<PartyImpairmentModel>`  
**Base:** `MBGameModel<PartyImpairmentModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyImpairmentModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyImpairmentModel.cs`

## One-line responsibility

It computes whether a party qualifies to enter a disorganized state, how long the disorganized and general vulnerable states should last, and the vulnerability time the siege flow should use; it does not decide which battle triggers the state, and it does not directly write the party state fields on `MobileParty`.

## Mental model

This is the campaign rules layer for "allowed or not, and for how long", not a state-machine command. `DisorganizedStateCampaignBehavior` calls `CanGetDisorganized` at map-event start/end, party leaving an army, and attack-menu events; only after passing does the behavior call `MobileParty.SetDisorganized(true)`. `SetDisorganized` then calls `GetDisorganizedStateDuration`, converts the hours into `CampaignTime.HoursFromNow(...)`, and writes the party's expiry time.

```text
MapEvent / Army / Siege lifecycle
             |
             v
Campaign.Current.Models.PartyImpairmentModel
       +-----+------------------+
       v                        v
CanGetDisorganized        duration/time queries
       |                        |
       v                        v
Behavior -> SetDisorganized   MobileParty / siege consumers
```

Therefore, a `true` from `CanGetDisorganized` does not mean the party is already disorganized, and reading a duration does not change the party. This model receives `MobileParty`/`PartyBase` and campaign time and must not be used as a Mission `Agent` state API; query methods must stay side-effect free, because the same result may be read repeatedly across multiple campaign phases.

## When to use and when not to

- Replace this model when you want to adjust disorganization eligibility, the disorganized duration, the general vulnerable duration, or the siege vulnerability-time distribution.
- Read from `Campaign.Current.Models.PartyImpairmentModel` when you want to read the current rules in UI, logs, or an AI preview, and treat the `ExplainedNumber.ResultNumber` as hours.
- Do not call `SetDisorganized`, mutate `_isDisorganized`, advance `CampaignTime`, or publish events inside a Model method; the trigger timing belongs to the Behavior, Siege, and party lifecycle.
- Do not cache one query as a cross-save state time. What needs to persist is the behavior state and timestamps, not the randomly generated next duration.

## Dependencies

### Upstream

| Type | Relationship |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the current campaign and the `Models` registry. |
| [`GameModels`](../GameModels) | Holds the `PartyImpairmentModel` instance at campaign construction. |
| [`PartyBase`](../../campaign/PartyBase) | Provides active/mobile state and the association to `MobileParty`. |
| [`MobileParty`](../../campaign/MobileParty) | Provides member count, army relationships, map events, and sea state. |
| [`CampaignTime`](../CampaignTime) | Converts duration hours into an expiry that advances with the campaign. |

### Downstream

| Type | Relationship |
| --- | --- |
| [`DisorganizedStateCampaignBehavior`](../../campaign/DisorganizedStateCampaignBehavior) | Subscribes to map events, army removal, and attack-menu events, and writes the disorganized state after eligibility passes. |
| [`MobileParty`](../../campaign/MobileParty) | Uses the disorganized duration to set the expiry time and clears the state once time has passed. |
| [`BesiegerCamp`](../BesiegerCamp) | Checks eligibility when a party leaves a siege and may set disorganization. |
| [`MapEvent`](../../campaign/MapEvent) | Provides state inputs such as raid, siege assault, retreat, and diplomatic end. |

### Events, Actions & save boundaries

The model dispatches no events and has no save payload of its own. `DisorganizedStateCampaignBehavior.SyncData` persists the behavior's internal event-check flags; party state and expiry times are handled by the `MobileParty` lifecycle. Do not simulate map events, call Actions, or write your own time field from inside the model.

## Members contract

| Member | Purpose and timing | Side-effect boundary |
| --- | --- | --- |
| `GetDisorganizedStateDuration(MobileParty party)` | Computes the hours a party should stay disorganized after entering that state; `MobileParty.SetDisorganized(true)` calls it before actually writing state. | Returns an explained `ExplainedNumber`; it sets no state and advances no time. |
| `GetVulnerabilityStateDuration(PartyBase party)` | Computes the general vulnerable-state duration requested by a campaign flow. | Returns a `float`; it starts no battle and changes no party. |
| `GetSiegeExpectedVulnerabilityTime()` | Supplies the expected vulnerability time within a day for the siege flow. | Returns a time value; it creates no siege event and writes no party state. |
| `CanGetDisorganized(PartyBase partyBase)` | Checks whether the party is active, mobile, has enough members, and is in an army relationship that allows disorganization. | Performs eligibility only; `true` does not mean `SetDisorganized` was already called. |

## Default implementation rules

In `DefaultPartyImpairmentModel` the base disorganized duration is `6` hours. If the party is not at sea, the current map event is a raid or a siege assault, and the party has `SwiftRegroup`, the perk's main effect is added to the explained value; `Foragers` also contributes a correction through the party-perk helper logic. `CanGetDisorganized` requires the `PartyBase` to be active, mobile, to have at least `10` regular members, and to be outside an army, to be the army leader, or to be attached to an army.

The default general vulnerable duration is `MBRandom.RandomFloatNormal + 4f`, so it is a random result. The expected siege vulnerability time uses the current campaign hour, sunrise, `HoursInDay`, and normal/power random values to map to a time within the day; it should not be interpreted as "a fixed number of hours from now".

## Real read & apply path

The query below reads the rules from the actually registered Model; it is suitable for diagnostics or a UI preview and it does not change the party:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public bool TryReadImpairmentPolicy(
    out float disorganizedHours, out float vulnerabilityHours)
{
    disorganizedHours = 0f;
    vulnerabilityHours = 0f;
    if (Campaign.Current == null || MobileParty.MainParty == null)
    {
        return false;
    }

    PartyImpairmentModel model = Campaign.Current.Models.PartyImpairmentModel;
    MobileParty party = MobileParty.MainParty;
    if (!model.CanGetDisorganized(party.Party))
    {
        return false;
    }

    disorganizedHours = model.GetDisorganizedStateDuration(party).ResultNumber;
    vulnerabilityHours = model.GetVulnerabilityStateDuration(party.Party);
    return true;
}
```

The actual state application is the behavior's responsibility; the typical order is to call `party.SetDisorganized(true)` only after `CanGetDisorganized(party.Party)` succeeds. Do not push that step into the query function above, or the map-event end, siege-leave, and party-removal events may write the state repeatedly.

## Safe boundaries for replacing the model

If you only want to adjust durations, keep the original model's eligibility check and its `ExplainedNumber` explanation chain; if you want to adjust eligibility, you must also inspect the call conditions in `DisorganizedStateCampaignBehavior`, `BesiegerCamp`, and `MobileParty.SetDisorganized`. A custom model still has to support the input boundaries of sea parties, parties without an army, army-attached parties, and inactive `PartyBase` values.

## Risks & debugging order

1. **Wrong `PartyBase` assumption:** `PartyBase` does not guarantee an always-live `MobileParty`; check the association and active state before reading member or army properties.
2. **Treating the explained value as a save:** `GetDisorganizedStateDuration` returns an `ExplainedNumber`; callers should take `ResultNumber` and must not serialize the whole explanation object.
3. **Writing state inside the model:** calling `SetDisorganized` causes recursion or duplicate writes and bypasses the map-event boundary checks for the main party, the retreating side, and sea parties.
4. **Caching the random value:** a duration generated at load must not be reused across saves or across days; persistence should be handled by the party/Behavior's existing time fields.
5. **Changing eligibility without checking callers:** over-loosening eligibility lets undersized, inactive, or incorrectly attached parties become disorganized, leading to inconsistency between map AI and the party lifecycle.
6. **Model not registered:** directly accessing the strongly typed Model before campaign assembly may be null; cross-mode code can use `GetGameModel<PartyImpairmentModel>()` to null-check and choose an explicit fallback.

## Version & navigation

v1.3.15 and v1.4.5 both keep the four abstract members and the `6`-hour base disorganized value; both versions also make conditional checks on sea parties, map events, and Perks. Treat version differences by the target version's `DefaultPartyImpairmentModel` and the Behavior call sites, not by copying a single random formula.

- [↑ Parent: Campaign extension API](../)
- [Models directory](../models/)
- [↔ Siblings: PartyTradeModel](../PartyTradeModel)
- [↔ Siblings: PartyFoodBuyingModel](../PartyFoodBuyingModel)
- [DisorganizedStateCampaignBehavior](../../campaign/DisorganizedStateCampaignBehavior)
- [MobileParty](../../campaign/MobileParty)
- [PartyBase](../../campaign/PartyBase)
- [CampaignTime](../CampaignTime)
- [BesiegerCamp](../BesiegerCamp)
