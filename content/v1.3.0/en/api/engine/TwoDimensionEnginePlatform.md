---
title: "TwoDimensionEnginePlatform"
description: "Auto-generated class reference for TwoDimensionEnginePlatform."
---
# TwoDimensionEnginePlatform

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public class TwoDimensionEnginePlatform : ITwoDimensionPlatform`
**Base:** `ITwoDimensionPlatform`
**File:** `TaleWorlds.Engine.GauntletUI/TwoDimensionEnginePlatform.cs`

## Overview

`TwoDimensionEnginePlatform` lives in `TaleWorlds.Engine.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Reset
`public void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of TwoDimensionEnginePlatform from the subsystem API first
TwoDimensionEnginePlatform twoDimensionEnginePlatform = ...;
twoDimensionEnginePlatform.Reset();
```

### Equals
`public bool Equals(TwoDimensionEnginePlatform.MaterialTuple other)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of TwoDimensionEnginePlatform from the subsystem API first
TwoDimensionEnginePlatform twoDimensionEnginePlatform = ...;
var result = twoDimensionEnginePlatform.Equals(other);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of TwoDimensionEnginePlatform from the subsystem API first
TwoDimensionEnginePlatform twoDimensionEnginePlatform = ...;
var result = twoDimensionEnginePlatform.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TwoDimensionEnginePlatform twoDimensionEnginePlatform = ...;
twoDimensionEnginePlatform.Reset();
```

## See Also

- [Area Index](../)