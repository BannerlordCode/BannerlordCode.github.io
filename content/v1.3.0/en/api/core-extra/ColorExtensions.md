---
title: "ColorExtensions"
description: "Auto-generated class reference for ColorExtensions."
---
# ColorExtensions

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class ColorExtensions`
**Base:** none
**File:** `TaleWorlds.Library/ColorExtensions.cs`

## Overview

`ColorExtensions` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddFactorInHSB
`public static Color AddFactorInHSB(this Color rgbColor, float hueDifference, float saturationDifference, float brighnessDifference)`

**Purpose:** **Purpose:** Adds factor in h s b to the current collection or state.

```csharp
// Static call; no instance required
ColorExtensions.AddFactorInHSB(rgbColor, 0, 0, 0);
```

## Usage Example

```csharp
ColorExtensions.AddFactorInHSB(rgbColor, 0, 0, 0);
```

## See Also

- [Area Index](../)