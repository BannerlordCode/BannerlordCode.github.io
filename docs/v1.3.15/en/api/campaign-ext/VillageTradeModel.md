<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillageTradeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageTradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VillageTradeModel : MBGameModel<VillageTradeModel>`
**Base:** `MBGameModel<VillageTradeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VillageTradeModel.cs`

## Overview

`VillageTradeModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<VillageTradeModel>(new MyVillageTradeModel())` to change how it computes.

## Key Methods

### TradeBoundDistanceLimitAsDays
```csharp
public abstract float TradeBoundDistanceLimitAsDays(MobileParty.NavigationType navigationType)
```

### GetTradeBoundToAssignForVillage
```csharp
public abstract Settlement GetTradeBoundToAssignForVillage(Village village)
```

## Usage Example

```csharp
// Typical usage of VillageTradeModel (Model)
Game.Current.ReplaceModel<VillageTradeModel>(new MyVillageTradeModel());
```

## See Also

- [Complete Class Catalog](../catalog)