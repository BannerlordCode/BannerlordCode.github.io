<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBribeCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBribeCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBribeCalculationModel : BribeCalculationModel`
**Base:** `BribeCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBribeCalculationModel.cs`

## Overview

`DefaultBribeCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultBribeCalculationModel>(new MyDefaultBribeCalculationModel())` to change how it computes.

## Key Methods

### IsBribeNotNeededToEnterKeep
```csharp
public override bool IsBribeNotNeededToEnterKeep(Settlement settlement)
```

### IsBribeNotNeededToEnterDungeon
```csharp
public override bool IsBribeNotNeededToEnterDungeon(Settlement settlement)
```

### GetBribeToEnterLordsHall
```csharp
public override int GetBribeToEnterLordsHall(Settlement settlement)
```

### GetBribeToEnterDungeon
```csharp
public override int GetBribeToEnterDungeon(Settlement settlement)
```

## Usage Example

```csharp
// Typical usage of DefaultBribeCalculationModel (Model)
Game.Current.ReplaceModel<DefaultBribeCalculationModel>(new MyDefaultBribeCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)