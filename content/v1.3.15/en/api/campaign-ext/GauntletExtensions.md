---
title: "GauntletExtensions"
description: "Auto-generated class reference for GauntletExtensions."
---
# GauntletExtensions

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class GauntletExtensions`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletExtensions.cs`

## Overview

`GauntletExtensions` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetGlobalAlphaRecursively
`public static void SetGlobalAlphaRecursively(this Widget widget, float alphaFactor)`

**Purpose:** Assigns a new value to `global alpha recursively` and updates the object's internal state.

```csharp
// Static call; no instance required
GauntletExtensions.SetGlobalAlphaRecursively(widget, 0);
```

### SetAlpha
`public static void SetAlpha(this Widget widget, float alphaFactor)`

**Purpose:** Assigns a new value to `alpha` and updates the object's internal state.

```csharp
// Static call; no instance required
GauntletExtensions.SetAlpha(widget, 0);
```

### RegisterBrushStatesOfWidget
`public static void RegisterBrushStatesOfWidget(this Widget widget)`

**Purpose:** Registers `brush states of widget` with the current system so it can later be observed or dispatched.

```csharp
// Static call; no instance required
GauntletExtensions.RegisterBrushStatesOfWidget(widget);
```

### GetFullIDPath
`public static string GetFullIDPath(this Widget widget)`

**Purpose:** Reads and returns the `full i d path` value held by the current object.

```csharp
// Static call; no instance required
GauntletExtensions.GetFullIDPath(widget);
```

### ApplyActionForThisAndAllChildren
`public static void ApplyActionForThisAndAllChildren(this Widget widget, Action<Widget> action)`

**Purpose:** Applies the effect of `action for this and all children` to the current object.

```csharp
// Static call; no instance required
GauntletExtensions.ApplyActionForThisAndAllChildren(widget, action);
```

## Usage Example

```csharp
GauntletExtensions.SetGlobalAlphaRecursively(widget, 0);
```

## See Also

- [Area Index](../)