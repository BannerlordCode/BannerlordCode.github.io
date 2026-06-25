---
title: "BrushLayerAnimation"
description: "Auto-generated class reference for BrushLayerAnimation."
---
# BrushLayerAnimation

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushLayerAnimation`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/BrushLayerAnimation.cs`

## Overview

`BrushLayerAnimation` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LayerName` | `public string LayerName { get; set; }` |

## Key Methods

### AddAnimationProperty
`public void AddAnimationProperty(BrushAnimationProperty property)`

**Purpose:** Adds animation property to the current collection or state.

```csharp
// Obtain an instance of BrushLayerAnimation from the subsystem API first
BrushLayerAnimation brushLayerAnimation = ...;
brushLayerAnimation.AddAnimationProperty(property);
```

### Clone
`public BrushLayerAnimation Clone()`

**Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of BrushLayerAnimation from the subsystem API first
BrushLayerAnimation brushLayerAnimation = ...;
var result = brushLayerAnimation.Clone();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BrushLayerAnimation brushLayerAnimation = ...;
brushLayerAnimation.AddAnimationProperty(property);
```

## See Also

- [Area Index](../)