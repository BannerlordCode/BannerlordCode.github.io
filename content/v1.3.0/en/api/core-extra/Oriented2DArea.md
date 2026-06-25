---
title: "Oriented2DArea"
description: "Auto-generated class reference for Oriented2DArea."
---
# Oriented2DArea

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Oriented2DArea`
**Base:** none
**File:** `TaleWorlds.Library/Oriented2DArea.cs`

## Overview

`Oriented2DArea` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Center` | `public Vec2 Center { get; }` |
| `Forward` | `public Vec2 Forward { get; }` |
| `Right` | `public Vec2 Right { get; }` |
| `Dimensions` | `public Vec2 Dimensions { get; }` |
| `TopLeft` | `public Vec2 TopLeft { get; }` |
| `TopRight` | `public Vec2 TopRight { get; }` |
| `BottomLeft` | `public Vec2 BottomLeft { get; }` |
| `BottomRight` | `public Vec2 BottomRight { get; }` |
| `this` | `public Vec2 this { get; }` |

## Key Methods

### SetCenter
`public void SetCenter(in Vec2 center)`

**Purpose:** Assigns a new value to `center` and updates the object's internal state.

```csharp
// Obtain an instance of Oriented2DArea from the subsystem API first
Oriented2DArea oriented2DArea = ...;
oriented2DArea.SetCenter(center);
```

### SetForward
`public void SetForward(in Vec2 forward)`

**Purpose:** Assigns a new value to `forward` and updates the object's internal state.

```csharp
// Obtain an instance of Oriented2DArea from the subsystem API first
Oriented2DArea oriented2DArea = ...;
oriented2DArea.SetForward(forward);
```

### SetDimensions
`public void SetDimensions(in Vec2 dimensions)`

**Purpose:** Assigns a new value to `dimensions` and updates the object's internal state.

```csharp
// Obtain an instance of Oriented2DArea from the subsystem API first
Oriented2DArea oriented2DArea = ...;
oriented2DArea.SetDimensions(dimensions);
```

### Overlaps
`public bool Overlaps(in Oriented2DArea otherArea, float clearanceMargin)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Oriented2DArea from the subsystem API first
Oriented2DArea oriented2DArea = ...;
var result = oriented2DArea.Overlaps(otherArea, 0);
```

### Intersects
`public bool Intersects(in LineSegment2D line, float clearanceMargin)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Oriented2DArea from the subsystem API first
Oriented2DArea oriented2DArea = ...;
var result = oriented2DArea.Intersects(line, 0);
```

### GetCorners
`public Oriented2DArea.Corners GetCorners()`

**Purpose:** Reads and returns the `corners` value held by the current object.

```csharp
// Obtain an instance of Oriented2DArea from the subsystem API first
Oriented2DArea oriented2DArea = ...;
var result = oriented2DArea.GetCorners();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Oriented2DArea oriented2DArea = ...;
oriented2DArea.SetCenter(center);
```

## See Also

- [Area Index](../)