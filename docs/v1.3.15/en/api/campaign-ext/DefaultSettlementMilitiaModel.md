<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementMilitiaModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementMilitiaModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementMilitiaModel : SettlementMilitiaModel`
**Base:** `SettlementMilitiaModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs`

## Overview

`DefaultSettlementMilitiaModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSettlementMilitiaModel>(new MyDefaultSettlementMilitiaModel())` to change how it computes.

## Key Methods

### MilitiaToSpawnAfterSiege
```csharp
public override int MilitiaToSpawnAfterSiege(Town town)
```

### CalculateMilitiaChange
```csharp
public override ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)
```

### CalculateVeteranMilitiaSpawnChance
```csharp
public override ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)
```

### CalculateMilitiaSpawnRate
```csharp
public override void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)
```

## Usage Example

```csharp
// Typical usage of DefaultSettlementMilitiaModel (Model)
Game.Current.ReplaceModel<DefaultSettlementMilitiaModel>(new MyDefaultSettlementMilitiaModel());
```

## See Also

- [Complete Class Catalog](../catalog)