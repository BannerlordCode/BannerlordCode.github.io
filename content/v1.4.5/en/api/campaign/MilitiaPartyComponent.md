---
title: "MilitiaPartyComponent"
description: "MilitiaPartyComponent is the stationary party component that exposes a settlement's ready militia to map events and settlement systems."
---
# MilitiaPartyComponent

**Namespace:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class MilitiaPartyComponent : PartyComponent`  
**Base:** [PartyComponent](../PartyComponent)  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/MilitiaPartyComponent.cs`

## One-sentence responsibility

It owns the settlement militia `MobileParty`, initializes its troops from the settlement culture's militia template, and exposes the party through the settlement's militia back-reference.

## Mental Model

Militia is a stationary party representation used by the settlement and map-event systems, not an ordinary roaming AI party. `CreateMilitiaParty` creates the party, disables AI, sets zero aggressiveness, disables navigation, initializes at the settlement gate from `Settlement.Culture.MilitiaPartyTemplate`, and immediately applies `EnterSettlementAction`.

The reverse link is part of the lifecycle: `OnInitialize` assigns `Settlement.MilitiaPartyComponent`, and `OnFinalize` clears it. Settlement militia calculations read the active party through that field and combine it with ready-militia counts. A mod should therefore acquire the component from the settlement rather than searching all parties or creating a replacement for a read operation.

## When to use and when not to use

- Read `settlement.MilitiaPartyComponent` when a map event, rebellion, or settlement calculation needs the active militia party.
- Use `CreateMilitiaParty` only during settlement initialization or a deliberate replacement flow; it has immediate settlement-entry and party-state side effects.
- Use `ConvertPartyToMilitiaParty` only when the owning campaign code intentionally changes an existing party's category.
- Do not use militia as a mobile patrol or attach ordinary AI navigation to it. The component's creation callback disables AI and leaves navigation unavailable.
- Do not treat the component's `Settlement` field as a disposable label. It is the saved owner of the party and the source of the reverse reference.

## Dependencies

```text
Settlement + Culture.MilitiaPartyTemplate
  -> MilitiaPartyComponent.CreateMilitiaParty
  -> MobileParty creation callback + EnterSettlementAction
  -> Settlement.MilitiaPartyComponent
  -> militia counts and map-event participation
```

- Host: [MobileParty](../MobileParty) owns the component, roster, and map-event party side.
- Campaign owner: [Settlement](../Settlement) exposes the active militia and consumes its member count.
- Data source: [CultureObject](../CultureObject) provides `MilitiaPartyTemplate`.
- Mutation boundary: [EnterSettlementAction](../../campaign-ext/EnterSettlementAction) is part of the factory's creation path.
- Shared contract: [PartyComponent](../PartyComponent) supplies binding and finalization.

## State and operations

| Member | Meaning and timing |
|---|---|
| `Settlement` | Saveable settlement association and the key used by initialization and cleanup. |
| `PartyOwner` / `HomeSettlement` | Resolve to the settlement owner's clan leader and the associated settlement. |
| `Name` | Lazily caches the localized militia name with the settlement name. |
| `CanHaveNavalNavigationCapability` | Always `false`; militia remains a stationary settlement party. |
| `CreateMilitiaParty` | Creates a party with a source-derived ID, sets no navigation, initializes the culture template, and enters the settlement. |
| `ConvertPartyToMilitiaParty` | Replaces an existing party component with the settlement's militia component. |
| `GetDefaultComponentBanner` | Returns `Settlement.Banner`. |
| `ClearCachedName` | Invalidates the localized name cache. |

## Real example

The safe read path used by settlement and map-event code is the settlement back-reference:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.CurrentSettlement;
MilitiaPartyComponent militia = settlement?.MilitiaPartyComponent;
MobileParty party = militia?.MobileParty;

if (militia != null && party != null && party.IsActive)
{
    int militiaCount = party.Party.NumberOfAllMembers;
    Settlement home = militia.HomeSettlement;
}
```

`Settlement` creates the component through `CreateMilitiaParty` when it initializes a militia party. That factory's `EnterSettlementAction.ApplyForParty` call is why a mod should not use it as a periodic “ensure present” helper.

## Risks and save boundaries

- `CreateMilitiaParty` performs several mutations at once: it creates a party, disables AI, chooses a template, enters the settlement, and installs a reverse reference. Calling it twice can create duplicate militia parties.
- `Settlement.Culture.MilitiaPartyTemplate` must be loaded before creation. A missing culture/template is a data-load problem, not something the component repairs.
- Map events read `Settlement.MilitiaPartyComponent` and may set `MapEventSide` on its `MobileParty`. Do not replace the component while the party participates in an event.
- Finalization clears the settlement back-reference. Holding the old component after party destruction can make code read an inactive roster.
- The component is saved with its settlement association, while Agent and MapEvent objects are transient. Do not persist engine references through it.

## Version note

This page follows v1.4.5 `MilitiaPartyComponent`, `Settlement`, `RebellionsCampaignBehavior`, and map-event militia call sites. Militia templates, initialization IDs, and event integration may change across versions.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [PartyComponent](../PartyComponent) · [GarrisonPartyComponent](../GarrisonPartyComponent) · [PatrolPartyComponent](../PatrolPartyComponent)
- Related: [MobileParty](../MobileParty) · [Settlement](../Settlement) · [CultureObject](../CultureObject) · [EnterSettlementAction](../../campaign-ext/EnterSettlementAction)
