<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Direction`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Direction

**Namespace:** TaleWorlds.MountAndBlade.Source.Objects.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum Direction`
**Area:** mission-ext

## Overview

`Direction` lives in `TaleWorlds.MountAndBlade.Source.Objects.Siege`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Source.Objects.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `ForwardOnly` |
| `BackwardOnly` |

## Usage Example

```csharp
Direction example = Direction.ForwardOnly;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
