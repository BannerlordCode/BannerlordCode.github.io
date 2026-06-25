---
title: "DecisionSupportStrengthListPanel"
description: "Auto-generated class reference for DecisionSupportStrengthListPanel."
---
# DecisionSupportStrengthListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DecisionSupportStrengthListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom/DecisionSupportStrengthListPanel.cs`

## Overview

`DecisionSupportStrengthListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAbstain` | `public bool IsAbstain { get; set; }` |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter { get; set; }` |
| `IsOptionSelected` | `public bool IsOptionSelected { get; set; }` |
| `IsKingsOutcome` | `public bool IsKingsOutcome { get; set; }` |
| `CurrentIndex` | `public int CurrentIndex { get; set; }` |
| `StrengthButton0` | `public ButtonWidget StrengthButton0 { get; set; }` |
| `StrengthButton1` | `public ButtonWidget StrengthButton1 { get; set; }` |
| `StrengthButton2` | `public ButtonWidget StrengthButton2 { get; set; }` |
| `StrengthButton0Text` | `public RichTextWidget StrengthButton0Text { get; set; }` |
| `StrengthButton1Text` | `public RichTextWidget StrengthButton1Text { get; set; }` |
| `StrengthButton2Text` | `public RichTextWidget StrengthButton2Text { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DecisionSupportStrengthListPanel instance = ...;
```

## See Also

- [Area Index](../)