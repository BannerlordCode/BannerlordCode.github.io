<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormationArrangementModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FormationArrangementModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class FormationArrangementModel : MBGameModel<FormationArrangementModel>`
**Base:** `MBGameModel<FormationArrangementModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/FormationArrangementModel.cs`

## Overview

`FormationArrangementModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `FormationArrangementModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Invalid` | `public static FormationArrangementModel.ArrangementPosition Invalid { get; }` |

## Key Methods

### GetBannerBearerPositions
`public abstract List<FormationArrangementModel.ArrangementPosition> GetBannerBearerPositions(Formation formation, int maxCount)`

**Purpose:** Gets the current value of `banner bearer positions`.

## Usage Example

```csharp
var implementation = new CustomFormationArrangementModel();
```

## See Also

- [Complete Class Catalog](../catalog)