<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TileBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TileBase

**Namespace:** SandBox.BoardGames.Tiles
**Module:** SandBox.BoardGames
**Type:** `public abstract class TileBase`
**Base:** none
**File:** `SandBox/BoardGames/Tiles/TileBase.cs`

## Overview

`TileBase` lives in `SandBox.BoardGames.Tiles` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Tiles` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Entity` | `public GameEntity Entity { get; }` |
| `ValidMoveDecal` | `public BoardGameDecal ValidMoveDecal { get; }` |

## Key Methods

### Reset
`public virtual void Reset()`

**Purpose:** Resets `reset` to its initial state.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### SetVisibility
`public void SetVisibility(bool isVisible)`

**Purpose:** Sets the value or state of `visibility`.

## Usage Example

```csharp
var implementation = new CustomTileBase();
```

## See Also

- [Complete Class Catalog](../catalog)