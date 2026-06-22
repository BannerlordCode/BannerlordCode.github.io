<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultVillageTradeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultVillageTradeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVillageTradeModel : VillageTradeModel`
**Base:** `VillageTradeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVillageTradeModel.cs`

## Overview

`DefaultVillageTradeModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultVillageTradeModel>(new MyDefaultVillageTradeModel())` to change how it computes.

## Key Methods

### TradeBoundDistanceLimitAsDays
```csharp
public override float TradeBoundDistanceLimitAsDays(MobileParty.NavigationType navigationType)
```

### GetTradeBoundToAssignForVillage
```csharp
public override Settlement GetTradeBoundToAssignForVillage(Village village)
```

## Usage Example

```csharp
// Typical usage of DefaultVillageTradeModel (Model)
Game.Current.ReplaceModel<DefaultVillageTradeModel>(new MyDefaultVillageTradeModel());
```

## See Also

- [Complete Class Catalog](../catalog)