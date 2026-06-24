<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GarrisonPartyComponent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GarrisonPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GarrisonPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/GarrisonPartyComponent.cs`

## Overview

`GarrisonPartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `GarrisonPartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `WagePaymentLimit` | `public override int WagePaymentLimit { get; }` |
| `CanHaveNavalNavigationCapability` | `public override bool CanHaveNavalNavigationCapability { get; }` |
| `Settlement` | `public Settlement Settlement { get; }` |

## Key Methods

### CreateGarrisonParty
`public static MobileParty CreateGarrisonParty(string stringId, Settlement settlement)`

**Purpose:** Creates a new `garrison party` instance or object.

### ConvertPartyToGarrisonParty
`public static void ConvertPartyToGarrisonParty(MobileParty mobileParty, Settlement settlement)`

**Purpose:** Handles logic related to `convert party to garrison party`.

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**Purpose:** Gets the current value of `default component banner`.

### SetWagePaymentLimit
`public override void SetWagePaymentLimit(int newLimit)`

**Purpose:** Sets the value or state of `wage payment limit`.

### ClearCachedName
`public override void ClearCachedName()`

**Purpose:** Handles logic related to `clear cached name`.

### InitializeGarrisonPartyProperties
`public void InitializeGarrisonPartyProperties(MobileParty mobileParty, Settlement settlement)`

**Purpose:** Initializes the state, resources, or bindings for `garrison party properties`.

## Usage Example

```csharp
var component = agent.GetComponent<GarrisonPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)