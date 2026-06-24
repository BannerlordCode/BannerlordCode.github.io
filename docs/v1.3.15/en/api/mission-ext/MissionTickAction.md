<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionTickAction`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionTickAction

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum MissionTickAction`
**Area:** mission-ext

## Overview

`MissionTickAction` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `TryToSheathWeaponInHand` |
| `RemoveEquippedWeapon` |
| `TryToWieldWeaponInSlot` |
| `DropItem` |

## Usage Example

```csharp
MissionTickAction example = MissionTickAction.TryToSheathWeaponInHand;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
