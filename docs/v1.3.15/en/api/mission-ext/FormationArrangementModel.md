<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormationArrangementModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormationArrangementModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class FormationArrangementModel : MBGameModel<FormationArrangementModel>`
**Base:** `MBGameModel<FormationArrangementModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/FormationArrangementModel.cs`

## Overview

`FormationArrangementModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<FormationArrangementModel>(new MyFormationArrangementModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Invalid` | `public static FormationArrangementModel.ArrangementPosition Invalid { get; }` |

## Key Methods

### GetBannerBearerPositions
```csharp
public abstract List<FormationArrangementModel.ArrangementPosition> GetBannerBearerPositions(Formation formation, int maxCount)
```

## Usage Example

```csharp
// Typical usage of FormationArrangementModel (Model)
Game.Current.ReplaceModel<FormationArrangementModel>(new MyFormationArrangementModel());
```

## See Also

- [Complete Class Catalog](../catalog)