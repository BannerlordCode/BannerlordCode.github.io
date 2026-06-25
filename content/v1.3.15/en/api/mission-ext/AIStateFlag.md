---
title: "AIStateFlag"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AIStateFlag`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AIStateFlag

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum AIStateFlag : uint`
**Base:** `uint`
**Area:** mission-ext

## Overview

`AIStateFlag` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `0U` |
| `Cautious` |
| `1U` |
| `PatrollingCautious` |
| `2U` |
| `Alarmed` |
| `3U` |
| `Paused` |
| `8U` |
| `UseObjectMoving` |
| `16U` |
| `UseObjectUsing` |
| `32U` |
| `UseObjectWaiting` |
| `64U` |
| `ColumnwiseFollow` |
| `256U` |
| `AlarmStateMask` |

## Usage Example

```csharp
AIStateFlag example = AIStateFlag.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
