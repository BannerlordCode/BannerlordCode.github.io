<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementMilitiaModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementMilitiaModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementMilitiaModel : MBGameModel<SettlementMilitiaModel>`
**Base:** `MBGameModel<SettlementMilitiaModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMilitiaModel.cs`

## Overview

`SettlementMilitiaModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SettlementMilitiaModel>(new MySettlementMilitiaModel())` to change how it computes.

## Key Methods

### MilitiaToSpawnAfterSiege
```csharp
public abstract int MilitiaToSpawnAfterSiege(Town town)
```

### CalculateMilitiaChange
```csharp
public abstract ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)
```

### CalculateVeteranMilitiaSpawnChance
```csharp
public abstract ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)
```

### CalculateMilitiaSpawnRate
```csharp
public abstract void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)
```

## Usage Example

```csharp
// Typical usage of SettlementMilitiaModel (Model)
Game.Current.ReplaceModel<SettlementMilitiaModel>(new MySettlementMilitiaModel());
```

## See Also

- [Complete Class Catalog](../catalog)