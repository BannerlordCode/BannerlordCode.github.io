---
title: "KeybindingPopupVM"
description: "Auto-generated class reference for KeybindingPopupVM."
---
# KeybindingPopupVM

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class KeybindingPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/KeybindingPopupVM.cs`

## Overview

`KeybindingPopupVM` lives in `TaleWorlds.MountAndBlade.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PressKeyText` | `public string PressKeyText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of KeybindingPopupVM from the subsystem API first
KeybindingPopupVM keybindingPopupVM = ...;
keybindingPopupVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KeybindingPopupVM keybindingPopupVM = ...;
keybindingPopupVM.RefreshValues();
```

## See Also

- [Area Index](../)