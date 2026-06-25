---
title: "Tile"
description: "Auto-generated class reference for Tile."
---
# Tile

**Namespace:** SandBox.BoardGames.Objects
**Module:** SandBox.BoardGames
**Type:** `public class Tile : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `SandBox/BoardGames/Objects/Tile.cs`

## Overview

`Tile` lives in `SandBox.BoardGames.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetVisibility
`public void SetVisibility(bool visible)`

**Purpose:** Assigns a new value to `visibility` and updates the object's internal state.

```csharp
// Obtain an instance of Tile from the subsystem API first
Tile tile = ...;
tile.SetVisibility(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Tile tile = ...;
tile.SetVisibility(false);
```

## See Also

- [Area Index](../)