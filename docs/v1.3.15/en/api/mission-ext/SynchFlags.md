<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SynchFlags`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SynchFlags

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum SynchFlags : uint`
**Base:** `uint`
**Area:** mission-ext

## Overview

`SynchFlags` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `SynchNone` |
| `0U` |
| `SynchTransform` |
| `1U` |
| `SynchAnimation` |
| `2U` |
| `SynchBodyFlags` |
| `4U` |
| `SyncColors` |
| `8U` |
| `SynchAll` |

## Usage Example

```csharp
SynchFlags example = SynchFlags.SynchNone;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
