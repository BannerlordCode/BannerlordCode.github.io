<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InterpolationType`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InterpolationType

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum InterpolationType`
**Area:** mission-ext

## Overview

`InterpolationType` lives in `TaleWorlds.MountAndBlade.View.Scripts`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Scripts` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Linear` |
| `EaseIn` |
| `EaseOut` |

## Usage Example

```csharp
InterpolationType example = InterpolationType.Linear;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
