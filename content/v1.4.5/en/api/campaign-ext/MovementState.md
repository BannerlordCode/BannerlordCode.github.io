---
title: "MovementState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MovementState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MovementState

**Namespace:** SandBox.BoardGames.Pawns
**Module:** SandBox.BoardGames
**Type:** `public enum MovementState`
**Area:** campaign-ext

## Overview

`MovementState` lives in `SandBox.BoardGames.Pawns`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.BoardGames.Pawns` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `MovingForward` |
| `MovingBackward` |

## Usage Example

```csharp
MovementState example = MovementState.MovingForward;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
