---
title: "DXGI"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DXGI`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DXGI

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class DXGI`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone.Native.Windows/DXGI.cs`

## Overview

`DXGI` lives in `TaleWorlds.TwoDimension.Standalone.Native.Windows` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public override bool Equals(object o)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### CreateDXGIFactory
`public static extern int CreateDXGIFactory(ref Guid riid, out IntPtr factory)`

**Purpose:** Creates a new `d x g i factory` instance or object.

## Usage Example

```csharp
var value = new DXGI();
value.Equals(o);
```

## See Also

- [Complete Class Catalog](../catalog)