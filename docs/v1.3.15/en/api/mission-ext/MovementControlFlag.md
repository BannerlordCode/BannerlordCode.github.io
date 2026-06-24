<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MovementControlFlag`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MovementControlFlag

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum MovementControlFlag : uint`
**Base:** `uint`
**Area:** mission-ext

## Overview

`MovementControlFlag` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `0U` |
| `Forward` |
| `1U` |
| `Backward` |
| `2U` |
| `StrafeRight` |
| `4U` |
| `StrafeLeft` |
| `8U` |
| `TurnRight` |
| `16U` |
| `TurnLeft` |
| `32U` |
| `AttackLeft` |
| `64U` |
| `AttackRight` |
| `128U` |
| `AttackUp` |
| `256U` |
| `AttackDown` |
| `512U` |
| `DefendLeft` |
| `1024U` |
| `DefendRight` |
| `2048U` |
| `DefendUp` |
| `4096U` |
| `DefendDown` |
| `8192U` |

## Usage Example

```csharp
MovementControlFlag example = MovementControlFlag.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
