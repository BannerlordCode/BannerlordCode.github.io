<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyShipLimitModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyShipLimitModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyShipLimitModel : MBGameModel<PartyShipLimitModel>`
**Base:** `MBGameModel<PartyShipLimitModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyShipLimitModel.cs`

## Overview

`PartyShipLimitModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyShipLimitModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetIdealShipNumber
`public abstract int GetIdealShipNumber(MobileParty mobileParty)`

**Purpose:** Gets the current value of `ideal ship number`.

### GetIdealShipNumber
`public abstract int GetIdealShipNumber(Clan clan)`

**Purpose:** Gets the current value of `ideal ship number`.

### GetShipPriority
`public abstract float GetShipPriority(MobileParty mobileParty, Ship ship, bool isSelling)`

**Purpose:** Gets the current value of `ship priority`.

## Usage Example

```csharp
var implementation = new CustomPartyShipLimitModel();
```

## See Also

- [Complete Class Catalog](../catalog)