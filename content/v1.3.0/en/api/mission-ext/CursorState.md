---
title: "CursorState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CursorState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CursorState

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum CursorState`
**Area:** mission-ext

## Overview

`CursorState` lives in `TaleWorlds.MountAndBlade.View.MissionViews.Order`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.MissionViews.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Invisible` |
| `Normal` |
| `Ground` |
| `Rotation` |
| `Count` |

## Usage Example

```csharp
CursorState example = CursorState.Invisible;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
