<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LordPartyComponent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LordPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordPartyComponent : WarPartyComponent`
**Base:** `WarPartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/LordPartyComponent.cs`

## Overview

`LordPartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `LordPartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `CanHaveNavalNavigationCapability` | `public override bool CanHaveNavalNavigationCapability { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `Owner` | `public Hero Owner { get; }` |
| `Leader` | `public override Hero Leader { get; }` |
| `WagePaymentLimit` | `public override int WagePaymentLimit { get; }` |

## Key Methods

### SetWagePaymentLimit
`public override void SetWagePaymentLimit(int newLimit)`

**Purpose:** Sets the value or state of `wage payment limit`.

### CreateLordParty
`public static MobileParty CreateLordParty(string stringId, Hero hero, CampaignVec2 position, float spawnRadius, Settlement spawnSettlement, Hero partyLeader)`

**Purpose:** Creates a new `lord party` instance or object.

### ConvertPartyToLordParty
`public static void ConvertPartyToLordParty(MobileParty mobileParty, Hero owner, Hero partyLeader)`

**Purpose:** Handles logic related to `convert party to lord party`.

### ClearCachedName
`public override void ClearCachedName()`

**Purpose:** Handles logic related to `clear cached name`.

### InitializeLordPartyProperties
`public void InitializeLordPartyProperties(MobileParty mobileParty, Hero owner)`

**Purpose:** Initializes the state, resources, or bindings for `lord party properties`.

## Usage Example

```csharp
var component = agent.GetComponent<LordPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)