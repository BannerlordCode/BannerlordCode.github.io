---
title: "GauntletExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletExtensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GauntletExtensions

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class GauntletExtensions`
**Area:** campaign-ext

## Overview

`GauntletExtensions` lives in `TaleWorlds.GauntletUI`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
GauntletExtensions.SetGlobalAlphaRecursively(widget, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
