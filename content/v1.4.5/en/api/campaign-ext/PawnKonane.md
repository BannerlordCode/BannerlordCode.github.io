---
title: "PawnKonane"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PawnKonane`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PawnKonane

**Namespace:** SandBox.BoardGames.Pawns
**Module:** SandBox.BoardGames
**Type:** `public class PawnKonane : PawnBase`
**Base:** `PawnBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.BoardGames.Pawns/PawnKonane.cs`

## Overview

`PawnKonane` lives in `SandBox.BoardGames.Pawns` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Pawns` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPlaced` | `public override bool IsPlaced { get; }` |

## Key Methods

### Reset
`public override void Reset()`

**Purpose:** Resets `reset` to its initial state.

## Usage Example

```csharp
var value = new PawnKonane();
value.Reset();
```

## See Also

- [Complete Class Catalog](../catalog)