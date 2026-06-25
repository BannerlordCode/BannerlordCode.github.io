---
title: "TileBase"
description: "Auto-generated class reference for TileBase."
---
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

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of TileBase from the subsystem API first
TileBase tileBase = ...;
tileBase.Reset();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of TileBase from the subsystem API first
TileBase tileBase = ...;
tileBase.Tick(0);
```

### SetVisibility
`public void SetVisibility(bool isVisible)`

**Purpose:** Assigns a new value to visibility and updates the object's internal state.

```csharp
// Obtain an instance of TileBase from the subsystem API first
TileBase tileBase = ...;
tileBase.SetVisibility(false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TileBase instance = ...;
```

## See Also

- [Area Index](../)