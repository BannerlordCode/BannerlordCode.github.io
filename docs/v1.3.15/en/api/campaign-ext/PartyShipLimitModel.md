<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyShipLimitModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyShipLimitModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyShipLimitModel : MBGameModel<PartyShipLimitModel>`
**Base:** `MBGameModel<PartyShipLimitModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyShipLimitModel.cs`

## Overview

`PartyShipLimitModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PartyShipLimitModel>(new MyPartyShipLimitModel())` to change how it computes.

## Key Methods

### GetIdealShipNumber
```csharp
public abstract int GetIdealShipNumber(MobileParty mobileParty)
```

### GetIdealShipNumber
```csharp
public abstract int GetIdealShipNumber(Clan clan)
```

### GetShipPriority
```csharp
public abstract float GetShipPriority(MobileParty mobileParty, Ship ship, bool isSelling)
```

## Usage Example

```csharp
// Typical usage of PartyShipLimitModel (Model)
Game.Current.ReplaceModel<PartyShipLimitModel>(new MyPartyShipLimitModel());
```

## See Also

- [Complete Class Catalog](../catalog)