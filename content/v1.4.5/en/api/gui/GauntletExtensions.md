---
title: "GauntletExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletExtensions`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletExtensions

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class GauntletExtensions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/GauntletExtensions.cs`

## Overview

`GauntletExtensions` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetGlobalAlphaRecursively
`public static void SetGlobalAlphaRecursively(this Widget widget, float alphaFactor)`

**Purpose:** Sets the value or state of `global alpha recursively`.

### SetAlpha
`public static void SetAlpha(this Widget widget, float alphaFactor)`

**Purpose:** Sets the value or state of `alpha`.

### RegisterBrushStatesOfWidget
`public static void RegisterBrushStatesOfWidget(this Widget widget)`

**Purpose:** Handles logic related to `register brush states of widget`.

### GetFullIDPath
`public static string GetFullIDPath(this Widget widget)`

**Purpose:** Gets the current value of `full i d path`.

### ApplyActionForThisAndAllChildren
`public static void ApplyActionForThisAndAllChildren(this Widget widget, Action<Widget> action)`

**Purpose:** Applies `action for this and all children` to the current object.

## Usage Example

```csharp
GauntletExtensions.SetGlobalAlphaRecursively(widget, 0);
```

## See Also

- [Complete Class Catalog](../catalog)