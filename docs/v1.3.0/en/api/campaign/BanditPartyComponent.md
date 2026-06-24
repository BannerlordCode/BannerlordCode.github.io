<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BanditPartyComponent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BanditPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BanditPartyComponent : WarPartyComponent`
**Base:** `WarPartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/BanditPartyComponent.cs`

## Overview

`BanditPartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `BanditPartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hideout` | `public Hideout Hideout { get; }` |
| `IsBossParty` | `public bool IsBossParty { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## Key Methods

### CreateBanditParty
`public static MobileParty CreateBanditParty(string stringId, Clan clan, Hideout hideout, bool isBossParty)`

**Purpose:** Creates a new `bandit party` instance or object.

### ConvertPartyToBanditParty
`public static void ConvertPartyToBanditParty(MobileParty mobileParty, Clan clan, Hideout hideout, bool isBossParty)`

**Purpose:** Handles logic related to `convert party to bandit party`.

### CreateLooterParty
`public static MobileParty CreateLooterParty(string stringId, Clan clan, Settlement relatedSettlement, bool isBossParty)`

**Purpose:** Creates a new `looter party` instance or object.

### ConvertPartyToLooterParty
`public static void ConvertPartyToLooterParty(MobileParty mobileParty, Clan clan, Settlement relatedSettlement)`

**Purpose:** Handles logic related to `convert party to looter party`.

### SetHomeHideout
`public void SetHomeHideout(Hideout hideout)`

**Purpose:** Sets the value or state of `home hideout`.

### ClearCachedName
`public override void ClearCachedName()`

**Purpose:** Handles logic related to `clear cached name`.

## Usage Example

```csharp
var component = agent.GetComponent<BanditPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)