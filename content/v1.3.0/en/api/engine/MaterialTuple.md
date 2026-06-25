---
title: "MaterialTuple"
description: "Auto-generated class reference for MaterialTuple."
---
# MaterialTuple

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public struct MaterialTuple : IEquatable<TwoDimensionEnginePlatform.MaterialTuple>`
**Base:** `IEquatable<TwoDimensionEnginePlatform.MaterialTuple>`
**File:** `TaleWorlds.Engine.GauntletUI/TwoDimensionEnginePlatform.cs`

## Overview

`MaterialTuple` lives in `TaleWorlds.Engine.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public bool Equals(TwoDimensionEnginePlatform.MaterialTuple other)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MaterialTuple from the subsystem API first
MaterialTuple materialTuple = ...;
var result = materialTuple.Equals(other);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MaterialTuple from the subsystem API first
MaterialTuple materialTuple = ...;
var result = materialTuple.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MaterialTuple materialTuple = ...;
materialTuple.Equals(other);
```

## See Also

- [Area Index](../)