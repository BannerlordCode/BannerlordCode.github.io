---
title: "SpriteSizeComparer"
description: "Auto-generated class reference for SpriteSizeComparer."
---
# SpriteSizeComparer

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `class SpriteSizeComparer : IComparer<SpritePart>`
**Base:** `IComparer<SpritePart>`
**File:** `TaleWorlds.TwoDimension/SpriteCategory.cs`

## Overview

`SpriteSizeComparer` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(SpritePart x, SpritePart y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of SpriteSizeComparer from the subsystem API first
SpriteSizeComparer spriteSizeComparer = ...;
var result = spriteSizeComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SpriteSizeComparer spriteSizeComparer = ...;
spriteSizeComparer.Compare(x, y);
```

## See Also

- [Area Index](../)