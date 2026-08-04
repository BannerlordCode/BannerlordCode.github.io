---
title: "PartyComponent"
description: "PartyComponent is the abstract MobileParty component that defines party ownership, leadership, home settlement, wage, and navigation contracts."
---
# PartyComponent

**Namespace:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyComponent`  
**Base:** no explicit base class  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/PartyComponent.cs`

## One-sentence responsibility

It is the typed state and lifecycle boundary for a `MobileParty`: a concrete component describes who owns the party, what it is called, where it belongs, who leads it, and which wage or navigation capabilities it has.

## Mental Model

**A component, not an independent party**

`PartyComponent` is not a map party by itself. Its internal lifecycle binds it to a [MobileParty](../MobileParty), and its contract supplies `Party`, `PartyOwner`, `Name`, `HomeSettlement`, `Leader`, `Banner`, wage limits, and land or naval navigation capabilities. `MobileParty.Party` is the [PartyBase](../PartyBase) that connects the component to map, roster, and battle systems.

Concrete categories derive from it, including [CaravanPartyComponent](../CaravanPartyComponent), [LordPartyComponent](../LordPartyComponent), [GarrisonPartyComponent](../GarrisonPartyComponent), and [CustomPartyComponent](../CustomPartyComponent). Their creation paths provide the owner, name, home, and cleanup behavior. A reference typed as the base therefore tells you that the party has a component, not which category-specific rules apply.

**Lifecycle and changes**

Concrete factories pass a component to `MobileParty.CreateParty(stringId, component)`. The component then receives creation, initialization, and finalization callbacks. `ChangePartyLeader` first verifies that the new hero is in the member roster, invokes the concrete component's leader-change hook, and only then sends the leader-change notification through the [CampaignEvents](../CampaignEvents) dispatch chain.

Wage limits, home settlement, name, and navigation capability can depend on the active campaign, clan, roster, or derived component. The object is therefore a runtime contract, not a bag of fields for a mod to replace directly.

## When to use and when not to use

- **Use it:** to read shared owner, leader, home, banner, or capability information from an existing `MobileParty.PartyComponent`, then inspect a concrete component for category-specific state.
- **Do not use it:** as `new PartyComponent()`; it is abstract and a party must be created with a concrete component through the `MobileParty` lifecycle.
- **Do not use it:** to edit private or derived fields to transfer ownership, leadership, or home settlement. Use the concrete component's supported Action or conversion entry point.
- **Mind the leader rule:** `ChangePartyLeader` requires the new hero to be in `MemberRoster`; otherwise the source asserts and keeps the old leader.

Passing `null` clears the leader; when the party is not in a map event, the component also switches the party to Hold movement. The dispatcher reports `OnPartyLeaderChanged` only when the effective leader changes, so calling the method is not itself a guaranteed notification.

## Dependencies

- **Host:** [MobileParty](../MobileParty) owns the component and exposes its [PartyBase](../PartyBase); [CampaignObjectManager](../CampaignObjectManager) reclassifies parties when their component changes.
- **Concrete implementations:** [CaravanPartyComponent](../CaravanPartyComponent), [LordPartyComponent](../LordPartyComponent), [GarrisonPartyComponent](../GarrisonPartyComponent), and [CustomPartyComponent](../CustomPartyComponent) own category-specific creation and cleanup semantics.
- **Observation and mutation:** leader changes reach the campaign event fan-out through [CampaignEvents](../CampaignEvents); owner, home, and roster changes should use their relevant Actions rather than replacing the component reference.

## Key members

| Member | Reading or calling boundary |
| --- | --- |
| `MobileParty` / `Party` | Return the host and its `PartyBase`; meaningful only after the component is bound. |
| `PartyOwner` / `Leader` / `HomeSettlement` | Describe the concrete party category; a `null` result must be handled according to the derived type. |
| `Name` / `Banner` | Supply display and map-icon data; the name is not a persistent object ID. |
| `AvoidHostileActions` | Express the component's default hostile-action policy, not a complete AI override. |
| `WagePaymentLimit` / `SetWagePaymentLimit` | The default limit comes from [PartyWageModel](../PartyWageModel); the base setter is not a universal write API. |
| `CanHaveNavalNavigationCapability` / `CanHaveLandNavigationCapability` | Report capability from the component and current clan; they do not move the party on the map. |
| `ChangePartyLeader(Hero)` | Enforce the roster-member rule, invoke derived logic, and publish a leader change. |

## Real example

Reading the component from the current player party is a real existing-object path. Do not infer that every component has an owner or home settlement: custom and temporary parties can return `null` for those contracts.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Settlements;

if (Campaign.Current != null)
{
    MobileParty party = MobileParty.MainParty;
    PartyComponent component = party?.PartyComponent;
    if (component != null)
    {
        PartyBase partyBase = component.Party;
        Hero owner = component.PartyOwner;
        Settlement home = component.HomeSettlement;
        bool canUseLand = component.CanHaveLandNavigationCapability;
    }
}
```

When category-specific behavior matters, check the concrete type or typed `MobileParty` property before reading it; `party.CaravanPartyComponent` is meaningful only for a caravan. Use the concrete component's conversion method when changing categories so registration, flags, banner, and lifecycle stay aligned.

## Risks and save boundaries

- **Binding phase:** `MobileParty` is assigned during creation or initialization; reading host state before the factory returns or after finalization is unsafe.
- **Leader invariant:** if the new hero is not in `MemberRoster`, `ChangePartyLeader` asserts and leaves the leader unchanged; assigning another hero reference is not equivalent.
- **Wage setter:** the base `SetWagePaymentLimit` reports invalid usage; do not treat it as a universal setter for every derived party.
- **Registration:** replacing a component directly can bypass `CampaignObjectManager.BeforePartyComponentChanged` and `AfterPartyComponentChanged`, leaving the party in the old category.
- **Save and cleanup:** concrete components clear home, owner, cached, and callback state during finalization. Direct construction or persistence of an abstract component can leave an orphaned party after load.

## Version note

This page follows v1.4.5 `PartyComponent.cs`, `MobileParty.cs`, and the concrete party components. For another version, recheck navigation capability, wage-model, and component-property behavior instead of copying a conversion assumption from one derived type.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [MobileParty](../MobileParty) · [PartyBase](../PartyBase) · [CampaignObjectManager](../CampaignObjectManager) · [CampaignEvents](../CampaignEvents)
- Concrete components: [CaravanPartyComponent](../CaravanPartyComponent) · [LordPartyComponent](../LordPartyComponent) · [GarrisonPartyComponent](../GarrisonPartyComponent) · [CustomPartyComponent](../CustomPartyComponent)
