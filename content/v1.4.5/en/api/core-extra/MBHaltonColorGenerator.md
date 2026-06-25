---
title: "MBHaltonColorGenerator"
description: "Auto-generated class reference for MBHaltonColorGenerator."
---
# MBHaltonColorGenerator

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBHaltonColorGenerator`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBHaltonColorGenerator.cs`

## Overview

`MBHaltonColorGenerator` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetBase
`public void SetBase()`

**Purpose:** Assigns a new value to base and updates the object's internal state.

```csharp
// Obtain an instance of MBHaltonColorGenerator from the subsystem API first
MBHaltonColorGenerator mBHaltonColorGenerator = ...;
mBHaltonColorGenerator.SetBase();
```

### SetBase
`public void SetBase(int baseValue)`

**Purpose:** Assigns a new value to base and updates the object's internal state.

```csharp
// Obtain an instance of MBHaltonColorGenerator from the subsystem API first
MBHaltonColorGenerator mBHaltonColorGenerator = ...;
mBHaltonColorGenerator.SetBase(0);
```

### SetOffset
`public void SetOffset(float offset)`

**Purpose:** Assigns a new value to offset and updates the object's internal state.

```csharp
// Obtain an instance of MBHaltonColorGenerator from the subsystem API first
MBHaltonColorGenerator mBHaltonColorGenerator = ...;
mBHaltonColorGenerator.SetOffset(0);
```

### SetRandomOffset
`public void SetRandomOffset()`

**Purpose:** Assigns a new value to random offset and updates the object's internal state.

```csharp
// Obtain an instance of MBHaltonColorGenerator from the subsystem API first
MBHaltonColorGenerator mBHaltonColorGenerator = ...;
mBHaltonColorGenerator.SetRandomOffset();
```

### GetColor
`public Color GetColor(int index, int maxIndex)`

**Purpose:** Reads and returns the color value held by the this instance.

```csharp
// Obtain an instance of MBHaltonColorGenerator from the subsystem API first
MBHaltonColorGenerator mBHaltonColorGenerator = ...;
var result = mBHaltonColorGenerator.GetColor(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBHaltonColorGenerator mBHaltonColorGenerator = ...;
mBHaltonColorGenerator.SetBase();
```

## See Also

- [Area Index](../)