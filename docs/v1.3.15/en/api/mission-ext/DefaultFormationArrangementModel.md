<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultFormationArrangementModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultFormationArrangementModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultFormationArrangementModel : FormationArrangementModel`
**Base:** `FormationArrangementModel`
**File:** `TaleWorlds.MountAndBlade/DefaultFormationArrangementModel.cs`

## Overview

`DefaultFormationArrangementModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultFormationArrangementModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBannerBearerPositions
`public override List<FormationArrangementModel.ArrangementPosition> GetBannerBearerPositions(Formation formation, int maxCount)`

**Purpose:** Gets the current value of `banner bearer positions`.

### GetArrangementPosition
`public FormationArrangementModel.ArrangementPosition GetArrangementPosition(int fileCount, int rankCount)`

**Purpose:** Gets the current value of `arrangement position`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultFormationArrangementModel>(new MyDefaultFormationArrangementModel());
```

## See Also

- [Complete Class Catalog](../catalog)