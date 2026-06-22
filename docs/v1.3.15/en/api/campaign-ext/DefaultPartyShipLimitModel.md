<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyShipLimitModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyShipLimitModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyShipLimitModel : PartyShipLimitModel`
**Base:** `PartyShipLimitModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyShipLimitModel.cs`

## Overview

`DefaultPartyShipLimitModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPartyShipLimitModel>(new MyDefaultPartyShipLimitModel())` to change how it computes.

## Key Methods

### GetIdealShipNumber
```csharp
public override int GetIdealShipNumber(MobileParty mobileParty)
```

### GetIdealShipNumber
```csharp
public override int GetIdealShipNumber(Clan clan)
```

### GetShipPriority
```csharp
public override float GetShipPriority(MobileParty mobileParty, Ship ship, bool isSelling)
```

## Usage Example

```csharp
// Typical usage of DefaultPartyShipLimitModel (Model)
Game.Current.ReplaceModel<DefaultPartyShipLimitModel>(new MyDefaultPartyShipLimitModel());
```

## See Also

- [Complete Class Catalog](../catalog)