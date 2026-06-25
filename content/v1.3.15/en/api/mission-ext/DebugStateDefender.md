---
title: "DebugStateDefender"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DebugStateDefender`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DebugStateDefender

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum DebugStateDefender`
**Area:** mission-ext

## Overview

`DebugStateDefender` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `DebugDefendersToBallistae` |
| `DebugDefendersToMangonels` |
| `DebugDefendersToRam` |

## Usage Example

```csharp
DebugStateDefender example = DebugStateDefender.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
