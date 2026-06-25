---
title: "MovementState"
description: "Auto-generated class reference for MovementState."
---
# MovementState

**Namespace:** SandBox.BoardGames.Pawns
**Module:** SandBox.BoardGames
**Type:** `public enum MovementState`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames.Pawns/PawnPuluc.cs`

## Overview

`MovementState` lives in `SandBox.BoardGames.Pawns` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Pawns` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MovementState instance = ...;
```

## See Also

- [Area Index](../)