---
title: "BlockadePositionScript"
description: "Auto-generated class reference for BlockadePositionScript."
---
# BlockadePositionScript

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class BlockadePositionScript : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `SandBox.View/Map/BlockadePositionScript.cs`

## Overview

`BlockadePositionScript` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetBlockadeArc
`public List<List<Vec3>> GetBlockadeArc(int totalNumberOfShips, out Vec3 center)`

**Purpose:** Reads and returns the blockade arc value held by the this instance.

```csharp
// Obtain an instance of BlockadePositionScript from the subsystem API first
BlockadePositionScript blockadePositionScript = ...;
var result = blockadePositionScript.GetBlockadeArc(0, center);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BlockadePositionScript blockadePositionScript = ...;
blockadePositionScript.GetBlockadeArc(0, center);
```

## See Also

- [Area Index](../)