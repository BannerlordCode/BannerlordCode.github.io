---
title: "SimpleRectangle"
description: "Auto-generated class reference for SimpleRectangle."
---
# SimpleRectangle

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct SimpleRectangle`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/SimpleRectangle.cs`

## Overview

`SimpleRectangle` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsCollide
`public bool IsCollide(SimpleRectangle other)`

**Purpose:** Determines whether the current object is in the `collide` state or condition.

```csharp
// Obtain an instance of SimpleRectangle from the subsystem API first
SimpleRectangle simpleRectangle = ...;
var result = simpleRectangle.IsCollide(other);
```

### GetCenter
`public Vector2 GetCenter()`

**Purpose:** Reads and returns the `center` value held by the current object.

```csharp
// Obtain an instance of SimpleRectangle from the subsystem API first
SimpleRectangle simpleRectangle = ...;
var result = simpleRectangle.GetCenter();
```

### IsSubRectOf
`public bool IsSubRectOf(SimpleRectangle other)`

**Purpose:** Determines whether the current object is in the `sub rect of` state or condition.

```csharp
// Obtain an instance of SimpleRectangle from the subsystem API first
SimpleRectangle simpleRectangle = ...;
var result = simpleRectangle.IsSubRectOf(other);
```

### IsValid
`public bool IsValid()`

**Purpose:** Determines whether the current object is in the `valid` state or condition.

```csharp
// Obtain an instance of SimpleRectangle from the subsystem API first
SimpleRectangle simpleRectangle = ...;
var result = simpleRectangle.IsValid();
```

### IsPointInside
`public bool IsPointInside(Vector2 point)`

**Purpose:** Determines whether the current object is in the `point inside` state or condition.

```csharp
// Obtain an instance of SimpleRectangle from the subsystem API first
SimpleRectangle simpleRectangle = ...;
var result = simpleRectangle.IsPointInside(point);
```

### ReduceToIntersection
`public void ReduceToIntersection(SimpleRectangle other)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SimpleRectangle from the subsystem API first
SimpleRectangle simpleRectangle = ...;
simpleRectangle.ReduceToIntersection(other);
```

### Lerp
`public static SimpleRectangle Lerp(SimpleRectangle from, SimpleRectangle to, float ratio)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
SimpleRectangle.Lerp(from, to, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SimpleRectangle simpleRectangle = ...;
simpleRectangle.IsCollide(other);
```

## See Also

- [Area Index](../)