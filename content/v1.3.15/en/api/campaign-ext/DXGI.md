---
title: "DXGI"
description: "Auto-generated class reference for DXGI."
---
# DXGI

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class DXGI`
**Base:** none
**File:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/DXGI.cs`

## Overview

`DXGI` lives in `TaleWorlds.TwoDimension.Standalone.Native.Windows` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateDXGIFactory
`public static extern int CreateDXGIFactory(ref Guid riid, out IntPtr factory)`

**Purpose:** Constructs a new `d x g i factory` entity and returns it to the caller.

```csharp
// Static call; no instance required
DXGI.CreateDXGIFactory(riid, factory);
```

### Equals
`public override bool Equals(object o)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of DXGI from the subsystem API first
DXGI dXGI = ...;
var result = dXGI.Equals(o);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of DXGI from the subsystem API first
DXGI dXGI = ...;
var result = dXGI.GetHashCode();
```

## Usage Example

```csharp
DXGI.CreateDXGIFactory(riid, factory);
```

## See Also

- [Area Index](../)