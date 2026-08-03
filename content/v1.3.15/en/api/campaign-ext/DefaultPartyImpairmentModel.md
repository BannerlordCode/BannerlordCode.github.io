---
title: "DefaultPartyImpairmentModel"
description: "The Sandbox default PartyImpairmentModel for party state, member-count, army-attachment, and perk-based impairment rules."
---

# DefaultPartyImpairmentModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartyImpairmentModel : PartyImpairmentModel`  
**Base:** `PartyImpairmentModel`  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs`  
**Contract:** [PartyImpairmentModel](../PartyImpairmentModel/)

## One-line responsibility

This is the vanilla impairment policy: it starts disorganization at `6` hours, applies `Swift Regroup`/`Foragers` adjustments, and requires an active, mobile party with at least 10 regular members before disorganization is allowed.

## Mental model

This class supplies calculation results for [PartyImpairmentModel](../PartyImpairmentModel/). Sandbox registers it during campaign setup. [DisorganizedStateCampaignBehavior](../../campaign/DisorganizedStateCampaignBehavior/) checks eligibility around map events and army boundaries, then calls `MobileParty.SetDisorganized(true)`. `MobileParty` asks this Model for the duration only while it is writing the expiry.

Replacing this Model changes the rule; it does not mark every party disorganized and it does not persist random results. `MobileParty` owns the resulting expiry time using [CampaignTime](../CampaignTime/).

## When to use and when not to

- Inherit this class when vanilla perk adjustments should remain while eligibility or general vulnerability duration changes.
- Read `Campaign.Current.Models.PartyImpairmentModel` for diagnostics instead of creating another default instance.
- Do not call `SetDisorganized`, write party fields, or fire map events from an override; that bypasses the phase checks in [DisorganizedStateCampaignBehavior](../../campaign/DisorganizedStateCampaignBehavior/).
- Do not interpret `GetSiegeExpectedVulnerabilityTime` as a duration; it is a time-of-day value.

## Dependencies and consumers

- [PartyImpairmentModel](../PartyImpairmentModel/) is the abstract contract.
- [GameModels](../GameModels/) controls registration order and runtime exposure.
- [MobileParty](../../campaign/MobileParty/) supplies member count, sea state, map events, perks, and army relationships.
- [DisorganizedStateCampaignBehavior](../../campaign/DisorganizedStateCampaignBehavior/) checks eligibility and applies the state.
- [BesiegerCamp](../BesiegerCamp/) also checks eligibility in siege flow; [CampaignTime](../CampaignTime/) turns duration hours into an expiry.

## Member behavior

| Member | Vanilla behavior | Timing and side-effect boundary |
|---|---|---|
| `GetDisorganizedStateDuration(MobileParty party)` | Starts an `ExplainedNumber` at `6f`; adds `Swift Regroup` during non-sea raids/siege assaults, then adds the `Foragers` party adjustment. | Called before `MobileParty.SetDisorganized(true)` writes expiry; returns a value only. |
| `GetVulnerabilityStateDuration(PartyBase party)` | Returns `MBRandom.RandomFloatNormal + 4f`. | Read by campaign flows; does not set vulnerability. |
| `GetSiegeExpectedVulnerabilityTime()` | Computes a time within the current day from current hour, sunrise, day length, and random values. | Read by siege logic; starts no siege and mutates no party. |
| `CanGetDisorganized(PartyBase party)` | Requires active/mobile state, at least `10` regular members, and either army-leader status or an army attachment. | Called before `SetDisorganized`; `true` is not an applied status. |

## Real acquisition and replacement example

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

PartyImpairmentModel model = Campaign.Current.Models.PartyImpairmentModel;
PartyBase party = MobileParty.MainParty.Party;
bool canDisorganize = model.CanGetDisorganized(party);
```

To require a living leader while retaining the default checks, register a derived implementation during setup:

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;

public sealed class MyPartyImpairmentModel : DefaultPartyImpairmentModel
{
    public override bool CanGetDisorganized(PartyBase party)
    {
        return base.CanGetDisorganized(party) && party.MobileParty.LeaderHero != null;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyPartyImpairmentModel());
}
```

The campaign behavior still applies state at the correct map-event boundary by calling `SetDisorganized`; the replacement model should not set it itself.

## Risks and version boundaries

1. An eligibility override that drops active/mobile/member-count/army checks can put removed or non-map-moving objects into a party state.
2. Duration overrides should return reasonable non-negative hours; `MobileParty` passes `ResultNumber` directly to `CampaignTime.HoursFromNow`.
3. `GetSiegeExpectedVulnerabilityTime` returns a time-of-day position, not an `HoursFromNow` duration. Confusing the units shifts siege AI into the wrong vulnerability window.
4. Do not persist random values or invoke state Actions from the Model. Save custom state through the [CampaignBehaviorBase](../CampaignBehaviorBase/) save contract.
5. v1.4.5 retains the `6`-hour base, `4`-hour random vulnerability duration, `10`-member eligibility threshold, and perk adjustments; decompiled syntax changes do not alter the mod-visible contract.

## Navigation

- [Parent: campaign-ext](../)
- [Contract: PartyImpairmentModel](../PartyImpairmentModel/)
- [Models family guide](../models/)
- [Siblings: DefaultPartyTradeModel](../DefaultPartyTradeModel/) · [DefaultPartyFoodBuyingModel](../DefaultPartyFoodBuyingModel/)
- [Consumers: DisorganizedStateCampaignBehavior](../../campaign/DisorganizedStateCampaignBehavior/) · [BesiegerCamp](../BesiegerCamp/)
- [Registration container: GameModels](../GameModels/) · [CampaignGameStarter](../CampaignGameStarter/)
