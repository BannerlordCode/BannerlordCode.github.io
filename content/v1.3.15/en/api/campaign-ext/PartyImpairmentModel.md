---
title: "PartyImpairmentModel"
description: "The campaign party-impairment policy for disorganized/vulnerable durations, siege vulnerability timing, and disorganization eligibility."
---

# PartyImpairmentModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyImpairmentModel : MBGameModel<PartyImpairmentModel>`  
**Base:** `MBGameModel<PartyImpairmentModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyImpairmentModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyImpairmentModel.cs`

## One-line responsibility

This model calculates whether a party may become disorganized and how long impairment/vulnerability lasts, including an expected siege-vulnerability time. It does not decide which battle triggers the state and does not write the party state itself.

## Mental model

`PartyImpairmentModel` is the “allowed and for how long” policy layer. `DisorganizedStateCampaignBehavior` checks `CanGetDisorganized` around map-event start/end, party removal from an army, and attack-menu events. Only after that check does it call `MobileParty.SetDisorganized(true)`. `MobileParty.SetDisorganized` then asks the model for `GetDisorganizedStateDuration`, converts the result into `CampaignTime.HoursFromNow(...)`, and stores the expiry time.

The Model therefore provides inputs, not commands. A `true` eligibility result does not mean the party is already disorganized, and reading a duration does not set it. Siege and other campaign consumers can also query vulnerability timing in their own phases; a query must not be treated as a global event.

## When to use and when not to

- Replace this model to change disorganization eligibility, disorganization duration, general vulnerability duration, or the siege vulnerability-time distribution.
- Read `Campaign.Current.Models.PartyImpairmentModel` for UI or diagnostics that predict a duration; keep that query side-effect free.
- Do not call `SetDisorganized`, write `_isDisorganized`, or publish events inside a Model method. Trigger timing belongs to [DisorganizedStateCampaignBehavior](../../campaign/DisorganizedStateCampaignBehavior/) and the party lifecycle.
- Do not use this Campaign Model as a Mission `Agent` state API. Its inputs are `MobileParty`/`PartyBase`, and its durations are based on campaign time.

## Dependencies and consumers

#### Upstream

- [GameModels](../GameModels/) supplies the model selected during campaign construction.
- [PartyBase](../../campaign/PartyBase/) supplies active/mobile state and the association to `MobileParty`; `CanGetDisorganized` accepts it.
- [MobileParty](../../campaign/MobileParty/) supplies member count, army leader/attachment state, map-event state, and sea state.
- [CampaignTime](../CampaignTime/) converts duration hours into an advancing campaign-time expiry.

#### Downstream

- [DisorganizedStateCampaignBehavior](../../campaign/DisorganizedStateCampaignBehavior/) checks eligibility at map-event and army-event boundaries and calls `SetDisorganized`.
- [MobileParty](../../campaign/MobileParty/) consumes `GetDisorganizedStateDuration(...).ResultNumber` when it writes the expiry and clears the state after time passes.
- [BesiegerCamp](../BesiegerCamp/) checks `CanGetDisorganized` during siege handling before setting impairment on involved parties.

## Members and timing

| Member | Purpose and timing | Side-effect boundary |
|---|---|---|
| `GetDisorganizedStateDuration(MobileParty party)` | Calculates the duration in hours after a party becomes disorganized; `MobileParty.SetDisorganized(true)` calls it before writing state. | Returns an explained value; it does not set state or change campaign time. |
| `GetVulnerabilityStateDuration(PartyBase party)` | Calculates a party's vulnerability duration when a campaign flow requests it. | Returns a `float`; it cannot start a battle or mutate the party. |
| `GetSiegeExpectedVulnerabilityTime()` | Supplies a time-of-day value to siege-related logic. | Returns a time value only; it creates no siege event and writes no state. |
| `CanGetDisorganized(PartyBase partyBase)` | Determines whether the party is active, mobile, large enough, and in an allowed army relationship. Behaviors use it before calling `SetDisorganized`. | Performs eligibility evaluation only; `true` is not an applied status. |

## Vanilla default rules

`DefaultPartyImpairmentModel` starts disorganization at `6` hours. When a non-sea party is raiding or making a siege assault and has `Swift Regroup`, it adds that perk factor; `Foragers` also contributes a party perk adjustment. `CanGetDisorganized` requires an active, mobile party with at least `10` regular members, and requires it to be an army leader or attached to an army.

The default general vulnerability duration is `MBRandom.RandomFloatNormal + 4`. The expected siege vulnerability time combines the current campaign hour, sunrise, normal random values, and `HoursInDay` to a time within the day. It is therefore a distribution over a day, not a fixed number of hours from now.

## Real acquisition and query example

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

MobileParty party = MobileParty.MainParty;
PartyImpairmentModel impairment = Campaign.Current.Models.PartyImpairmentModel;
PartyBase partyBase = party.Party;

bool eligible = impairment.CanGetDisorganized(partyBase);
ExplainedNumber duration = impairment.GetDisorganizedStateDuration(party);
float vulnerabilityHours = impairment.GetVulnerabilityStateDuration(partyBase);
float siegeHour = impairment.GetSiegeExpectedVulnerabilityTime();
```

These calls only read the policy results. When the game actually needs to apply disorganization, the appropriate campaign event/behavior should call `party.SetDisorganized(true)`; the query code should not perform the state write.

## Risks and debugging boundaries

1. A `PartyBase` is not guaranteed to have a live `MobileParty`. Check the association and active state before reading mobile-party members or army relationships on custom or removed parties.
2. `GetDisorganizedStateDuration` returns an `ExplainedNumber`; callers should use `ResultNumber` as hours, not serialize the entire explanation object as custom save state.
3. Calling `SetDisorganized` from the Model can cause recursive or duplicate writes and bypass map-event checks for the main party, retreating side, sea parties, and other boundaries.
4. Results depend on `CampaignTime.Now`, map-event state, and randomness. Do not cache a duration during loading and assume it remains valid across saves or days; persist behavior state and timestamps through the [CampaignBehaviorBase](../CampaignBehaviorBase/) save contract instead.
5. Replacing only the eligibility result without reviewing `MobileParty.SetDisorganized` callers can put inactive parties, unattached army parties, or undersized parties into a state that map AI and party lifetime logic do not expect.
6. A null model usually means campaign assembly has not happened or registration is missing/overridden. Cross-version code should use `GetGameModel<PartyImpairmentModel>()`, check for `null`, and choose an explicit fallback rather than calling a null property.

## Navigation

- [Parent: campaign-ext](../)
- [Models family guide](../models/)
- [Siblings: PartyTradeModel](../PartyTradeModel/) · [PartyFoodBuyingModel](../PartyFoodBuyingModel/) · [PartyDesertionModel](../PartyDesertionModel/)
- [Consumers: DisorganizedStateCampaignBehavior](../../campaign/DisorganizedStateCampaignBehavior/) · [MobileParty](../../campaign/MobileParty/)
- [Registration container: GameModels](../GameModels/) · [CampaignGameStarter](../CampaignGameStarter/)
- [Related: PartyBase](../../campaign/PartyBase/) · [CampaignTime](../CampaignTime/) · [CampaignBehaviorBase](../CampaignBehaviorBase/)
