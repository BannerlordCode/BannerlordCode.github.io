---
title: "CraftedWeaponDesignResultListPanel"
description: "Auto-generated class reference for CraftedWeaponDesignResultListPanel."
---
# CraftedWeaponDesignResultListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftedWeaponDesignResultListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CraftedWeaponDesignResultListPanel.cs`

## Overview

`CraftedWeaponDesignResultListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ChangeValueTextWidget` | `public CounterTextBrushWidget ChangeValueTextWidget { get; set; }` |
| `ValueTextWidget` | `public CounterTextBrushWidget ValueTextWidget { get; set; }` |
| `GoldEffectorTextWidget` | `public RichTextWidget GoldEffectorTextWidget { get; set; }` |
| `PositiveChangeBrush` | `public Brush PositiveChangeBrush { get; set; }` |
| `NegativeChangeBrush` | `public Brush NegativeChangeBrush { get; set; }` |
| `NeutralBrush` | `public Brush NeutralBrush { get; set; }` |
| `FadeInTimeIndexOffset` | `public float FadeInTimeIndexOffset { get; set; }` |
| `FadeInTime` | `public float FadeInTime { get; set; }` |
| `CounterStartTime` | `public float CounterStartTime { get; set; }` |
| `LabelTextWidget` | `public RichTextWidget LabelTextWidget { get; set; }` |
| `InitValue` | `public float InitValue { get; set; }` |
| `ChangeAmount` | `public float ChangeAmount { get; set; }` |
| `IsExceedingBeneficial` | `public bool IsExceedingBeneficial { get; set; }` |
| `TargetValue` | `public float TargetValue { get; set; }` |
| `IsOrderResult` | `public bool IsOrderResult { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
CraftedWeaponDesignResultListPanel instance = ...;
```

## See Also

- [Area Index](../)