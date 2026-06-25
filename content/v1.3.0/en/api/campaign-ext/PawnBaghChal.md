---
title: "PawnBaghChal"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PawnBaghChal`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PawnBaghChal

**Namespace:** SandBox.BoardGames.Pawns
**Module:** SandBox.BoardGames
**Type:** `public class PawnBaghChal : PawnBase`
**Base:** `PawnBase`
**File:** `SandBox/BoardGames/Pawns/PawnBaghChal.cs`

## Overview

`PawnBaghChal` lives in `SandBox.BoardGames.Pawns` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Pawns` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPlaced` | `public override bool IsPlaced { get; }` |
| `InitialFrame` | `public MatrixFrame InitialFrame { get; }` |
| `IsTiger` | `public bool IsTiger { get; }` |
| `IsGoat` | `public bool IsGoat { get; }` |

## Key Methods

### Reset
`public override void Reset()`

**Purpose:** Resets `reset` to its initial state.

## Usage Example

```csharp
var value = new PawnBaghChal();
value.Reset();
```

## See Also

- [Complete Class Catalog](../catalog)