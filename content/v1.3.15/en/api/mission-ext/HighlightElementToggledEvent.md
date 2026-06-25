---
title: "HighlightElementToggledEvent"
description: "Auto-generated class reference for HighlightElementToggledEvent."
---
# HighlightElementToggledEvent

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HighlightElementToggledEvent : EventBase`
**Base:** `EventBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialHighlightItemBrushWidget.cs`

## Overview

`HighlightElementToggledEvent` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; }` |
| `HighlightFrameWidget` | `public TutorialHighlightItemBrushWidget HighlightFrameWidget { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
HighlightElementToggledEvent instance = ...;
```

## See Also

- [Area Index](../)