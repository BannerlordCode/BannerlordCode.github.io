<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EventControlFlag`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EventControlFlag

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum EventControlFlag : uint`
**Base:** `uint`
**Area:** mission-ext

## Overview

`EventControlFlag` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `0U` |
| `Dismount` |
| `1U` |
| `Mount` |
| `2U` |
| `Rear` |
| `4U` |
| `Jump` |
| `8U` |
| `Wield0` |
| `16U` |
| `Wield1` |
| `32U` |
| `Wield2` |
| `64U` |
| `Wield3` |
| `128U` |
| `Sheath0` |
| `256U` |
| `Sheath1` |
| `512U` |
| `ToggleAlternativeWeapon` |
| `1024U` |
| `Walk` |
| `2048U` |
| `Run` |
| `4096U` |
| `Crouch` |
| `8192U` |

## Usage Example

```csharp
EventControlFlag example = EventControlFlag.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
