---
title: "BoardInformation"
description: "Auto-generated class reference for BoardInformation."
---
# BoardInformation

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public struct BoardInformation`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames/BoardGameBaghChal.cs`

## Overview

`BoardInformation` lives in `SandBox.BoardGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BoardInformation
`public struct BoardInformation(ref PawnInformation pawns, ref TileBaseInformation tiles)`

**Purpose:** Executes the BoardInformation logic.

```csharp
// Obtain an instance of BoardInformation from the subsystem API first
BoardInformation boardInformation = ...;
var result = boardInformation.BoardInformation(pawns, tiles);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoardInformation boardInformation = ...;
boardInformation.BoardInformation(pawns, tiles);
```

## See Also

- [Area Index](../)