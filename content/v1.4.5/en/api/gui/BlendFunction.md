---
title: "BlendFunction"
description: "Auto-generated class reference for BlendFunction."
---
# BlendFunction

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct BlendFunction`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone.Native.Windows/BlendFunction.cs`

## Overview

`BlendFunction` lives in `TaleWorlds.TwoDimension.Standalone.Native.Windows` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BlendFunction
`public struct BlendFunction(AlphaFormatFlags op, byte flags, byte alpha, AlphaFormatFlags format)`

**Purpose:** **Purpose:** Executes the BlendFunction logic.

```csharp
// Obtain an instance of BlendFunction from the subsystem API first
BlendFunction blendFunction = ...;
var result = blendFunction.BlendFunction(op, 0, 0, format);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BlendFunction blendFunction = ...;
blendFunction.BlendFunction(op, 0, 0, format);
```

## See Also

- [Area Index](../)