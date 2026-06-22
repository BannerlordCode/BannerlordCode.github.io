<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BribeCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BribeCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BribeCalculationModel : MBGameModel<BribeCalculationModel>`
**Base:** `MBGameModel<BribeCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BribeCalculationModel.cs`

## Overview

`BribeCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<BribeCalculationModel>(new MyBribeCalculationModel())` to change how it computes.

## Key Methods

### GetBribeToEnterLordsHall
```csharp
public abstract int GetBribeToEnterLordsHall(Settlement settlement)
```

### GetBribeToEnterDungeon
```csharp
public abstract int GetBribeToEnterDungeon(Settlement settlement)
```

### IsBribeNotNeededToEnterKeep
```csharp
public abstract bool IsBribeNotNeededToEnterKeep(Settlement settlement)
```

### IsBribeNotNeededToEnterDungeon
```csharp
public abstract bool IsBribeNotNeededToEnterDungeon(Settlement settlement)
```

## Usage Example

```csharp
// Typical usage of BribeCalculationModel (Model)
Game.Current.ReplaceModel<BribeCalculationModel>(new MyBribeCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)