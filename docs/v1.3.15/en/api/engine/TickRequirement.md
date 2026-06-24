<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TickRequirement`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TickRequirement

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public enum TickRequirement : uint`
**Base:** `uint`
**Area:** engine

## Overview

`TickRequirement` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `0U` |
| `TickOccasionally` |
| `1U` |
| `Tick` |
| `2U` |
| `TickParallel` |
| `4U` |
| `TickParallel2` |
| `8U` |
| `FixedTick` |
| `16U` |
| `FixedParallelTick` |
| `32U` |
| `TickParallel3` |

## Usage Example

```csharp
TickRequirement example = TickRequirement.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
