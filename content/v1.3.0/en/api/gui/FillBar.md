---
title: "FillBar"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FillBar`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FillBar

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBar : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBar.cs`

## Overview

`FillBar` lives in `TaleWorlds.GauntletUI.ExtraWidgets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.ExtraWidgets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxAmount` | `public int MaxAmount { get; set; }` |
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `InitialAmount` | `public int InitialAmount { get; set; }` |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat { get; set; }` |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat { get; set; }` |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat { get; set; }` |
| `IsVertical` | `public bool IsVertical { get; set; }` |
| `IsSmoothFillEnabled` | `public bool IsSmoothFillEnabled { get; set; }` |

## Usage Example

```csharp
var example = new FillBar();
```

## See Also

- [Complete Class Catalog](../catalog)