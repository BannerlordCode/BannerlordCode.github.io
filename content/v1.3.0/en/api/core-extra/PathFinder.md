---
title: "PathFinder"
description: "Auto-generated class reference for PathFinder."
---
# PathFinder

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class PathFinder`
**Base:** none
**File:** `TaleWorlds.Library/PathFinder.cs`

## Overview

`PathFinder` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Destroy
`public virtual void Destroy()`

**Purpose:** Executes the Destroy logic.

```csharp
// Obtain an instance of PathFinder from the subsystem API first
PathFinder pathFinder = ...;
pathFinder.Destroy();
```

### Initialize
`public abstract void Initialize(Vec3 bbSize)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of PathFinder from the subsystem API first
PathFinder pathFinder = ...;
pathFinder.Initialize(bbSize);
```

### FindPath
`public abstract bool FindPath(Vec3 wSource, Vec3 wDestination, List<Vec3> path, float craftWidth = 5f)`

**Purpose:** Looks up the matching path in the current collection or scope.

```csharp
// Obtain an instance of PathFinder from the subsystem API first
PathFinder pathFinder = ...;
var result = pathFinder.FindPath(wSource, wDestination, path, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PathFinder instance = ...;
```

## See Also

- [Area Index](../)