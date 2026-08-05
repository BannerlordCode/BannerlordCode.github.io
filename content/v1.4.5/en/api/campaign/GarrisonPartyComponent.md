---
title: "GarrisonPartyComponent"
description: "GarrisonPartyComponent is the stationary party component that binds a settlement town's garrison party to its settlement and wage limit."
---
# GarrisonPartyComponent

**Namespace:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class GarrisonPartyComponent : PartyComponent`  
**Base:** [PartyComponent](../PartyComponent)  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/GarrisonPartyComponent.cs`

## One-sentence responsibility

It represents the non-navigating garrison `MobileParty` owned by a settlement, including its settlement link, display name, wage limit, and town back-reference.

## Mental Model

A garrison is a party-shaped holder for troops already assigned to a town. `CreateGarrisonParty` creates the `MobileParty`, but its creation callback disables AI, sets zero aggressiveness and no desired navigation, initializes party trade, and places it at the settlement gate. The component is therefore not a roaming party and should not be treated as one just because it exposes `MobileParty`.

The settlement owns the reverse reference. During `OnInitialize`, the component assigns itself to `Settlement.Town.GarrisonPartyComponent`; during `OnFinalize`, it clears that reference. The `Settlement` and `Town` objects, not a mod-side cache, are the authoritative way to find the current garrison.

## When to use and when not to use

- Read `settlement.Town.GarrisonPartyComponent` or `settlement.Fief.GarrisonParty` when a campaign behavior needs the current garrison party.
- Use `CreateGarrisonParty` only from a settlement initialization or replacement flow that owns the town's garrison lifecycle.
- Use `SetWagePaymentLimit` to delegate the value to `Settlement.SetGarrisonWagePaymentLimit`; the settlement is the persisted authority.
- Do not send a garrison through normal map AI or navigation APIs. Its creation callback explicitly disables AI and sets `NavigationType.None`.
- Do not keep a reference after the component is finalized; the town back-reference is cleared and the MobileParty may be inactive.

## Dependencies

```text
Settlement/Town
  -> GarrisonPartyComponent.CreateGarrisonParty
  -> MobileParty creation callback disables AI and positions party
  -> Town.GarrisonPartyComponent back-reference
  -> Settlement wage and garrison systems
```

- Host: [MobileParty](../MobileParty) owns the component and its party roster.
- Campaign owner: [Settlement](../Settlement) and [Fief](../Fief) expose the garrison to settlement and map systems.
- Shared contract: [PartyComponent](../PartyComponent) supplies the party identity and lifecycle callbacks.
- Persistence: `Settlement` is the source for the garrison wage limit; the component's `Settlement` property is saveable.

## State and operations

| Member | Meaning and timing |
|---|---|
| `Settlement` | Saveable settlement association. It must remain the same settlement that owns the town back-reference. |
| `PartyOwner` / `HomeSettlement` | Resolve to the settlement owner's clan leader and the associated settlement. They require a valid settlement owner. |
| `Name` | Lazily caches the localized garrison name using the settlement name. `ClearCachedName` is needed after a display identity change. |
| `WagePaymentLimit` | Reads `Settlement.GarrisonWagePaymentLimit`; it is not an independent component field. |
| `CanHaveNavalNavigationCapability` | Always `false`; garrison parties are not naval parties. |
| `CreateGarrisonParty` | Creates the party and schedules initialization at the settlement gate. It is not a read-only accessor. |
| `ConvertPartyToGarrisonParty` | Replaces an existing party component and should be used only by a controlled reclassification flow. |
| `GetDefaultComponentBanner` | Returns `Settlement.Banner`. |
| `SetWagePaymentLimit` | Delegates persistence to the settlement's garrison wage setter. |

## Real example

Reading an existing town garrison uses the settlement-owned reference and does not create a duplicate party:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.CurrentSettlement;
GarrisonPartyComponent garrison = settlement?.Town?.GarrisonPartyComponent;
MobileParty party = garrison?.MobileParty;

if (garrison != null && party != null)
{
    int wageLimit = garrison.WagePaymentLimit;
    Settlement home = garrison.HomeSettlement;
}
```

The source settlement initialization calls `GarrisonPartyComponent.CreateGarrisonParty` with a stable settlement-derived ID. A mod should not call that factory every tick or while the town already owns an active garrison.

## Risks and save boundaries

- `Settlement.Town` must exist for the town back-reference. Applying this component to a village or other settlement kind violates the source assumptions.
- The component is initialized and finalized as part of `MobileParty` lifecycle. Manually clearing or replacing `Town.GarrisonPartyComponent` can make the settlement point at a party that no longer owns it.
- Garrison creation changes AI, navigation, trade, position, and party visual state. It is a mutation path, not a harmless constructor helper.
- `SetWagePaymentLimit` writes settlement state. Use the settlement-owned setter and do not cache a detached component value as the source of truth.
- After finalization, `Town.GarrisonPartyComponent` is null. Check both the component and `MobileParty.IsActive` before using the party in map logic.

## Version note

This page follows v1.4.5 `GarrisonPartyComponent`, `Settlement.Initialize`, `Fief`, and the `Town.GarrisonPartyComponent` back-reference. Garrison initialization and wage ownership are version-sensitive.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [PartyComponent](../PartyComponent) · [MilitiaPartyComponent](../MilitiaPartyComponent) · [PatrolPartyComponent](../PatrolPartyComponent)
- Related: [MobileParty](../MobileParty) · [Settlement](../Settlement) · [Fief](../Fief)
