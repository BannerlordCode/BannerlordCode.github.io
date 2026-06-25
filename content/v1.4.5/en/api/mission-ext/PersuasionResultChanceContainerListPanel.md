---
title: "PersuasionResultChanceContainerListPanel"
description: "Auto-generated class reference for PersuasionResultChanceContainerListPanel."
---
# PersuasionResultChanceContainerListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PersuasionResultChanceContainerListPanel : BrushListPanel`
**Base:** `BrushListPanel`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation/PersuasionResultChanceContainerListPanel.cs`

## Overview

`PersuasionResultChanceContainerListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StayTime` | `public float StayTime { get; set; }` |
| `CritFailWidget` | `public Widget CritFailWidget { get; set; }` |
| `FailWidget` | `public Widget FailWidget { get; set; }` |
| `SuccessWidget` | `public Widget SuccessWidget { get; set; }` |
| `CritSuccessWidget` | `public Widget CritSuccessWidget { get; set; }` |
| `IsResultReady` | `public bool IsResultReady { get; set; }` |
| `ResultIndex` | `public int ResultIndex { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
PersuasionResultChanceContainerListPanel instance = ...;
```

## See Also

- [Area Index](../)