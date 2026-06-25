---
title: "OptionsKeyItemListPanel"
description: "Auto-generated class reference for OptionsKeyItemListPanel."
---
# OptionsKeyItemListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsKeyItemListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsKeyItemListPanel.cs`

## Overview

`OptionsKeyItemListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OptionTitle` | `public string OptionTitle { get; set; }` |
| `OptionDescription` | `public string OptionDescription { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
OptionsKeyItemListPanel instance = ...;
```

## See Also

- [Area Index](../)