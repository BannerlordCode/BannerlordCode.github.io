<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StanceTypes`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StanceTypes

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public enum StanceTypes`
**Area:** core-extra

## Overview

`StanceTypes` lives in `TaleWorlds.Core.ViewModelCollection`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `EmphasizeFace` |
| `SideView` |
| `CelebrateVictory` |

## Usage Example

```csharp
StanceTypes example = StanceTypes.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
