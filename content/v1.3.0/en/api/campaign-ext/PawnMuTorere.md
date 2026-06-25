---
title: "PawnMuTorere"
description: "Auto-generated class reference for PawnMuTorere."
---
# PawnMuTorere

**Namespace:** SandBox.BoardGames.Pawns
**Module:** SandBox.BoardGames
**Type:** `public class PawnMuTorere : PawnBase`
**Base:** `PawnBase`
**File:** `SandBox/BoardGames/Pawns/PawnMuTorere.cs`

## Overview

`PawnMuTorere` lives in `SandBox.BoardGames.Pawns` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Pawns` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `X` | `public int X { get; set; }` |
| `IsPlaced` | `public override bool IsPlaced { get; }` |

## Key Methods

### Reset
`public override void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of PawnMuTorere from the subsystem API first
PawnMuTorere pawnMuTorere = ...;
pawnMuTorere.Reset();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PawnMuTorere pawnMuTorere = ...;
pawnMuTorere.Reset();
```

## See Also

- [Area Index](../)