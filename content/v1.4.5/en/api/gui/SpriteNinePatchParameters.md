---
title: "SpriteNinePatchParameters"
description: "Auto-generated class reference for SpriteNinePatchParameters."
---
# SpriteNinePatchParameters

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct SpriteNinePatchParameters`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/SpriteNinePatchParameters.cs`

## Overview

`SpriteNinePatchParameters` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SpriteNinePatchParameters
`public struct SpriteNinePatchParameters(int leftWidth, int rightWidth, int topHeight, int bottomHeight)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SpriteNinePatchParameters from the subsystem API first
SpriteNinePatchParameters spriteNinePatchParameters = ...;
var result = spriteNinePatchParameters.SpriteNinePatchParameters(0, 0, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SpriteNinePatchParameters spriteNinePatchParameters = ...;
spriteNinePatchParameters.SpriteNinePatchParameters(0, 0, 0, 0);
```

## See Also

- [Area Index](../)