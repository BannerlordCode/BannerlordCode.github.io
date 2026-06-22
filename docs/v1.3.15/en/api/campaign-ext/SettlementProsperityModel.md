<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementProsperityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementProsperityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementProsperityModel : MBGameModel<SettlementProsperityModel>`
**Base:** `MBGameModel<SettlementProsperityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementProsperityModel.cs`

## Overview

`SettlementProsperityModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SettlementProsperityModel>(new MySettlementProsperityModel())` to change how it computes.

## Key Methods

### CalculateProsperityChange
```csharp
public abstract ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false)
```

### CalculateHearthChange
```csharp
public abstract ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)
```

## Usage Example

```csharp
// Typical usage of SettlementProsperityModel (Model)
Game.Current.ReplaceModel<SettlementProsperityModel>(new MySettlementProsperityModel());
```

## See Also

- [Complete Class Catalog](../catalog)