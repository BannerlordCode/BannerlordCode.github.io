---
title: "KingdomTabControlListPanel"
description: "Auto-generated class reference for KingdomTabControlListPanel."
---
# KingdomTabControlListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class KingdomTabControlListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomTabControlListPanel.cs`

## Overview

`KingdomTabControlListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DiplomacyPanel` | `public Widget DiplomacyPanel { get; set; }` |
| `ArmiesPanel` | `public Widget ArmiesPanel { get; set; }` |
| `ClansPanel` | `public Widget ClansPanel { get; set; }` |
| `PoliciesPanel` | `public Widget PoliciesPanel { get; set; }` |
| `FiefsPanel` | `public Widget FiefsPanel { get; set; }` |
| `FiefsButton` | `public ButtonWidget FiefsButton { get; set; }` |
| `PoliciesButton` | `public ButtonWidget PoliciesButton { get; set; }` |
| `ClansButton` | `public ButtonWidget ClansButton { get; set; }` |
| `ArmiesButton` | `public ButtonWidget ArmiesButton { get; set; }` |
| `DiplomacyButton` | `public ButtonWidget DiplomacyButton { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
KingdomTabControlListPanel instance = ...;
```

## See Also

- [Area Index](../)