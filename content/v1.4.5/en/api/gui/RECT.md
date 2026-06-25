---
title: "RECT"
description: "Auto-generated class reference for RECT."
---
# RECT

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct RECT`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone.Native.Windows/DXGI.cs`

## Overview

`RECT` lives in `TaleWorlds.TwoDimension.Standalone.Native.Windows` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public override bool Equals(object o)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of RECT from the subsystem API first
RECT rECT = ...;
var result = rECT.Equals(o);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of RECT from the subsystem API first
RECT rECT = ...;
var result = rECT.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RECT rECT = ...;
rECT.Equals(o);
```

## See Also

- [Area Index](../)