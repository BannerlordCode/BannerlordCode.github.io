<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponSpawnFlags`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponSpawnFlags

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum WeaponSpawnFlags : uint`
**Base:** `uint`
**Area:** mission-ext

## Overview

`WeaponSpawnFlags` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `0U` |
| `WithHolster` |
| `1U` |
| `WithoutHolster` |
| `2U` |
| `AsMissile` |
| `4U` |
| `WithPhysics` |
| `8U` |
| `WithStaticPhysics` |
| `16U` |
| `UseAnimationSpeed` |
| `32U` |
| `CannotBePickedUp` |

## Usage Example

```csharp
WeaponSpawnFlags example = WeaponSpawnFlags.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
