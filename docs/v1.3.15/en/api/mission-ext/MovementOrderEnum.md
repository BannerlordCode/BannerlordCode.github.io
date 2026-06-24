<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MovementOrderEnum`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MovementOrderEnum

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum MovementOrderEnum`
**Area:** mission-ext

## Overview

`MovementOrderEnum` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Invalid` |
| `AttackEntity` |
| `Charge` |
| `ChargeToTarget` |
| `Follow` |
| `FollowEntity` |
| `Move` |
| `7` |
| `Retreat` |
| `Stop` |
| `Advance` |

## Usage Example

```csharp
MovementOrderEnum example = MovementOrderEnum.Invalid;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
