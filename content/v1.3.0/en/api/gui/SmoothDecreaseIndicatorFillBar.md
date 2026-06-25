---
title: "SmoothDecreaseIndicatorFillBar"
description: "Auto-generated class reference for SmoothDecreaseIndicatorFillBar."
---
# SmoothDecreaseIndicatorFillBar

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SmoothDecreaseIndicatorFillBar : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/SmoothDecreaseIndicatorFillBar.cs`

## Overview

`SmoothDecreaseIndicatorFillBar` lives in `TaleWorlds.GauntletUI.ExtraWidgets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.ExtraWidgets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxAmount` | `public float MaxAmount { get; set; }` |
| `CurrentAmount` | `public float CurrentAmount { get; set; }` |
| `IsVertical` | `public bool IsVertical { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SmoothDecreaseIndicatorFillBar instance = ...;
```

## See Also

- [Area Index](../)