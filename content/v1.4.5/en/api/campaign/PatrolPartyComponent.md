---
title: "PatrolPartyComponent"
description: "PatrolPartyComponent identifies a settlement patrol, including its home settlement, naval mode, localized name, and roster setup."
---
# PatrolPartyComponent

**Namespace:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class PatrolPartyComponent : PartyComponent`  
**Base:** [PartyComponent](../PartyComponent)  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/PatrolPartyComponent.cs`

## One-sentence responsibility

It marks a `MobileParty` as a land or coastal patrol, binds its home settlement, creates the localized patrol identity, and registers land patrols with that settlement.

## Mental Model

`PatrolPartyComponent` is a small identity and lifecycle component around a party created by `PatrolPartiesCampaignBehavior`. The factory decides naval mode from whether the supplied [PartyTemplateObject](../PartyTemplateObject) has ship hulls, creates the party, initializes it around a position, adds grain, sorts the roster, and removes land navigation access for naval patrols.

Land and naval patrols intentionally have different reverse-link behavior. `OnInitialize` and `OnFinalize` call `Settlement.SetPatrolParty` only when `IsNaval` is false; a coastal patrol still has a `HomeSettlement` but is not stored in the settlement's single land-patrol slot. The `IsNaval` flag is therefore a lifecycle decision, not merely a display option.

## When to use and when not to use

- Read `mobileParty.PatrolPartyComponent.HomeSettlement`, `Clan`, and `IsNaval` from an existing patrol selected by campaign behavior.
- Use `CreatePatrolParty` with the patrol model's template and a real spawn position when deliberately creating a patrol.
- Use `SortRoster` after the party has been created and bound; it delegates to `PartyBaseHelper.SortRoster` for the party's roster.
- Do not infer naval mode from the settlement having a port. The factory derives it from `template.ShipHulls`.
- Do not call the factory repeatedly for the same land settlement: the settlement stores one land patrol reference and the lifecycle callbacks replace or clear it.

## Dependencies

```text
SettlementPatrolModel template + settlement + position
  -> PatrolPartyComponent.CreatePatrolParty
  -> MobileParty creation, roster and navigation setup
  -> land Settlement.PatrolParty registration (non-naval only)
  -> PatrolPartiesCampaignBehavior tracks home and naval patrols
```

- Host: [MobileParty](../MobileParty) owns the component and roster.
- Campaign behavior: [PatrolPartiesCampaignBehavior](../PatrolPartiesCampaignBehavior) creates and queries patrols.
- Data source: [Settlement](../Settlement) and `SettlementPatrolModel` provide home settlement and template.
- Shared contract: [PartyComponent](../PartyComponent) supplies the creation, initialization, and finalization callbacks.
- Roster helper: [PartyBase](../PartyBase) is passed to the roster sorting helper.

## State and operations

| Member | Meaning and timing |
|---|---|
| `HomeSettlement` | Saved home settlement used by patrol scoring and naming. It is also the owner of a land patrol reverse reference. |
| `Clan` | Returns `HomeSettlement.OwnerClan`; it is derived and can fail if the home settlement is invalid. |
| `IsNaval` | Saveable mode chosen from `template.ShipHulls` during factory construction. |
| `Name` | Cached localized land or coastal patrol name using the home settlement name. |
| `PartyOwner` | Returns `HomeSettlement.Owner`; it is not an independent owner field. |
| `CreatePatrolParty` | Creates, positions, equips, sorts, and configures navigation for a patrol. It also initializes the component's settlement registration. |
| `GetDefaultComponentBanner` | Returns the home settlement banner. |
| `SortRoster` | Sorts the bound party roster through `PartyBaseHelper`. |

## Real example

The source patrol behavior acquires the template from the campaign model and uses the estimated bandit speed for its spawn radius:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.CurrentSettlement;
PartyTemplateObject template =
    Campaign.Current.Models.SettlementPatrolModel
        .GetPartyTemplateForPatrolParty(settlement, isNaval: false);

MobileParty patrol = PatrolPartyComponent.CreatePatrolParty(
    "patrol_party_mod_1",
    settlement.GatePosition,
    8f * Campaign.Current.EstimatedAverageBanditPartySpeed,
    settlement,
    template);

bool isNaval = patrol.PatrolPartyComponent.IsNaval;
```

The factory itself calls `SortRoster` and initializes the settlement registration. A caller should not repeat those operations unless it has deliberately changed the roster afterward.

## Risks and save boundaries

- `template.ShipHulls` determines `IsNaval`; a null or incorrectly selected template can create a patrol with the wrong navigation mode.
- `SetPatrolParty` is only called for land patrols. Code that searches `Settlement.PatrolParty` will not find a naval patrol even though it has the same `HomeSettlement`.
- `SortRoster` requires the component's `MobileParty` to be bound. Calling it on a detached or finalized component is invalid.
- Finalization clears the settlement's land-patrol reference. Do not cache that reference across party destruction or save reconstruction.
- The factory changes position, grain, roster order, and land-navigation access. Treat it as campaign state mutation, not a passive type conversion.

## Version note

This page follows v1.4.5 `PatrolPartyComponent`, `PatrolPartiesCampaignBehavior`, `Settlement.SetPatrolParty`, and the settlement patrol model. Naval patrol behavior and template fields are version-sensitive.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [PartyComponent](../PartyComponent) · [MilitiaPartyComponent](../MilitiaPartyComponent) · [GarrisonPartyComponent](../GarrisonPartyComponent)
- Related: [MobileParty](../MobileParty) · [Settlement](../Settlement) · [PartyTemplateObject](../PartyTemplateObject) · [PatrolPartiesCampaignBehavior](../PatrolPartiesCampaignBehavior)
