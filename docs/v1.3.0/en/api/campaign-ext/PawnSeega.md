<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PawnSeega`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PawnSeega

**Namespace:** SandBox.BoardGames.Pawns
**Module:** SandBox.BoardGames
**Type:** `public class PawnSeega : PawnBase`
**Base:** `PawnBase`
**File:** `SandBox/BoardGames/Pawns/PawnSeega.cs`

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

**Purpose:** Resets `reset` to its initial state.

### UpdateMoveBackAvailable
`public void UpdateMoveBackAvailable()`

**Purpose:** Updates the state or data of `move back available`.

### AISetMovedThisTurn
`public void AISetMovedThisTurn(bool moved)`

**Purpose:** Handles logic related to `a i set moved this turn`.

## Usage Example

```csharp
var value = new PawnSeega();
value.Reset();
```

## See Also

- [Complete Class Catalog](../catalog)