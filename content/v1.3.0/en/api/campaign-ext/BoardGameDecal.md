---
title: "BoardGameDecal"
description: "Auto-generated class reference for BoardGameDecal."
---
# BoardGameDecal

**Namespace:** SandBox.BoardGames.Objects
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameDecal : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `SandBox/BoardGames/Objects/BoardGameDecal.cs`

## Overview

`BoardGameDecal` lives in `SandBox.BoardGames.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetAlpha
`public void SetAlpha(float alpha)`

**Purpose:** Assigns a new value to `alpha` and updates the object's internal state.

```csharp
// Obtain an instance of BoardGameDecal from the subsystem API first
BoardGameDecal boardGameDecal = ...;
boardGameDecal.SetAlpha(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoardGameDecal boardGameDecal = ...;
boardGameDecal.SetAlpha(0);
```

## See Also

- [Area Index](../)