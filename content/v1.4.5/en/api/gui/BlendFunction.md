---
title: "BlendFunction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BlendFunction`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BlendFunction

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct BlendFunction`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone.Native.Windows/BlendFunction.cs`

## Overview

`BlendFunction` lives in `TaleWorlds.TwoDimension.Standalone.Native.Windows` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BlendFunction
`public struct BlendFunction(AlphaFormatFlags op, byte flags, byte alpha, AlphaFormatFlags format)`

**Purpose:** Handles logic related to `blend function`.

## Usage Example

```csharp
var value = new BlendFunction();
value.BlendFunction(op, 0, 0, format);
```

## See Also

- [Complete Class Catalog](../catalog)