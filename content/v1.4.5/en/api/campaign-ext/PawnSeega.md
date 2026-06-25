---
title: "PawnSeega"
description: "Auto-generated class reference for PawnSeega."
---
# PawnSeega

**Namespace:** SandBox.BoardGames.Pawns
**Module:** SandBox.BoardGames
**Type:** `public class PawnSeega : PawnBase`
**Base:** `PawnBase`
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames.Pawns/PawnSeega.cs`

## Overview

`PawnSeega` lives in `SandBox.BoardGames.Pawns` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Pawns` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPlaced` | `public override bool IsPlaced { get; }` |
| `MovedThisTurn` | `public bool MovedThisTurn { get; }` |
| `PrevX` | `public int PrevX { get; set; }` |
| `PrevY` | `public int PrevY { get; set; }` |

## Key Methods

### Reset
`public override void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of PawnSeega from the subsystem API first
PawnSeega pawnSeega = ...;
pawnSeega.Reset();
```

### UpdateMoveBackAvailable
`public void UpdateMoveBackAvailable()`

**Purpose:** Recalculates and stores the latest representation of `move back available`.

```csharp
// Obtain an instance of PawnSeega from the subsystem API first
PawnSeega pawnSeega = ...;
pawnSeega.UpdateMoveBackAvailable();
```

### AISetMovedThisTurn
`public void AISetMovedThisTurn(bool moved)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PawnSeega from the subsystem API first
PawnSeega pawnSeega = ...;
pawnSeega.AISetMovedThisTurn(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PawnSeega pawnSeega = ...;
pawnSeega.Reset();
```

## See Also

- [Area Index](../)