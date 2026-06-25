---
title: "PawnInformation"
description: "Auto-generated class reference for PawnInformation."
---
# PawnInformation

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public struct PawnInformation`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames/BoardGameBaghChal.cs`

## Overview

`PawnInformation` lives in `SandBox.BoardGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### PawnInformation
`public struct PawnInformation(int x, int y, int prevX, int prevY, bool captured, Vec3 position)`

**Purpose:** Executes the PawnInformation logic.

```csharp
// Obtain an instance of PawnInformation from the subsystem API first
PawnInformation pawnInformation = ...;
var result = pawnInformation.PawnInformation(0, 0, 0, 0, false, position);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PawnInformation pawnInformation = ...;
pawnInformation.PawnInformation(0, 0, 0, 0, false, position);
```

## See Also

- [Area Index](../)