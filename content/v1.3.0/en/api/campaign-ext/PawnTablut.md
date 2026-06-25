---
title: "PawnTablut"
description: "Auto-generated class reference for PawnTablut."
---
# PawnTablut

**Namespace:** SandBox.BoardGames.Pawns
**Module:** SandBox.BoardGames
**Type:** `public class PawnTablut : PawnBase`
**Base:** `PawnBase`
**File:** `SandBox/BoardGames/Pawns/PawnTablut.cs`

## Overview

`PawnTablut` lives in `SandBox.BoardGames.Pawns` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Pawns` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPlaced` | `public override bool IsPlaced { get; }` |

## Key Methods

### Reset
`public override void Reset()`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of PawnTablut from the subsystem API first
PawnTablut pawnTablut = ...;
pawnTablut.Reset();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PawnTablut pawnTablut = ...;
pawnTablut.Reset();
```

## See Also

- [Area Index](../)