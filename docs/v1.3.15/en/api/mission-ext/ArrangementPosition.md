<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArrangementPosition`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArrangementPosition

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ArrangementPosition`
**Area:** mission-ext

## Overview

`ArrangementPosition` lives in `TaleWorlds.MountAndBlade.ComponentInterfaces`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ComponentInterfaces` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
// First obtain a ArrangementPosition instance from game state, then call one of its public methods
var value = new ArrangementPosition();
value.GetBannerBearerPositions(formation, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
