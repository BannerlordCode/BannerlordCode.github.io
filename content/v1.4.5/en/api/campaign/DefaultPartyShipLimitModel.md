---
title: "DefaultPartyShipLimitModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyShipLimitModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyShipLimitModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyShipLimitModel : PartyShipLimitModel`
**Base:** `PartyShipLimitModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyShipLimitModel.cs`

## Overview

`DefaultPartyShipLimitModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyShipLimitModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetIdealShipNumber
`public override int GetIdealShipNumber(MobileParty mobileParty)`

**Purpose:** Gets the current value of `ideal ship number`.

### GetIdealShipNumber
`public override int GetIdealShipNumber(Clan clan)`

**Purpose:** Gets the current value of `ideal ship number`.

### GetShipPriority
`public override float GetShipPriority(MobileParty mobileParty, Ship ship, bool isSelling)`

**Purpose:** Gets the current value of `ship priority`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyShipLimitModel>(new MyDefaultPartyShipLimitModel());
```

## See Also

- [Complete Class Catalog](../catalog)