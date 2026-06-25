---
title: "CursorStates"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CursorStates`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CursorStates

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum CursorStates`
**Area:** mission-ext

## Overview

`CursorStates` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Move` |
| `Face` |

## Usage Example

```csharp
CursorStates example = CursorStates.Move;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
