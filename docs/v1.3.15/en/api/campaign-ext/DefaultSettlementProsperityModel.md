<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementProsperityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementProsperityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementProsperityModel : SettlementProsperityModel`
**Base:** `SettlementProsperityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementProsperityModel.cs`

## Overview

`DefaultSettlementProsperityModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSettlementProsperityModel>(new MyDefaultSettlementProsperityModel())` to change how it computes.

## Key Methods

### CalculateProsperityChange
```csharp
public override ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false)
```

### CalculateHearthChange
```csharp
public override ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)
```

## Usage Example

```csharp
// Typical usage of DefaultSettlementProsperityModel (Model)
Game.Current.ReplaceModel<DefaultSettlementProsperityModel>(new MyDefaultSettlementProsperityModel());
```

## See Also

- [Complete Class Catalog](../catalog)