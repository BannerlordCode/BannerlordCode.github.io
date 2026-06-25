---
title: "TileBaseInformation"
description: "Auto-generated class reference for TileBaseInformation."
---
# TileBaseInformation

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public struct TileBaseInformation`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames/TileBaseInformation.cs`

## Overview

`TileBaseInformation` lives in `SandBox.BoardGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TileBaseInformation
`public struct TileBaseInformation(ref PawnBase pawnOnTile)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TileBaseInformation from the subsystem API first
TileBaseInformation tileBaseInformation = ...;
var result = tileBaseInformation.TileBaseInformation(pawnOnTile);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TileBaseInformation tileBaseInformation = ...;
tileBaseInformation.TileBaseInformation(pawnOnTile);
```

## See Also

- [Area Index](../)