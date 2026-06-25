---
title: "InitialSpawnMethod"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InitialSpawnMethod`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InitialSpawnMethod

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum InitialSpawnMethod`
**Area:** mission-ext

## Overview

`InitialSpawnMethod` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `BattleSizeAllocating` |

## Usage Example

```csharp
InitialSpawnMethod example = InitialSpawnMethod.BattleSizeAllocating;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
