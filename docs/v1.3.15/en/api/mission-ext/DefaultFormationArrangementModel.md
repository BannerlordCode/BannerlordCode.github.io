<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultFormationArrangementModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultFormationArrangementModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultFormationArrangementModel : FormationArrangementModel`
**Base:** `FormationArrangementModel`
**File:** `TaleWorlds.MountAndBlade/DefaultFormationArrangementModel.cs`

## Overview

`DefaultFormationArrangementModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultFormationArrangementModel>(new MyDefaultFormationArrangementModel())` to change how it computes.

## Key Methods

### GetBannerBearerPositions
```csharp
public override List<FormationArrangementModel.ArrangementPosition> GetBannerBearerPositions(Formation formation, int maxCount)
```

### GetArrangementPosition
```csharp
public FormationArrangementModel.ArrangementPosition GetArrangementPosition(int fileCount, int rankCount)
```

## Usage Example

```csharp
// Typical usage of DefaultFormationArrangementModel (Model)
Game.Current.ReplaceModel<DefaultFormationArrangementModel>(new MyDefaultFormationArrangementModel());
```

## See Also

- [Complete Class Catalog](../catalog)