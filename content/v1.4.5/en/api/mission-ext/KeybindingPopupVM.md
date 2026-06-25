---
title: "KeybindingPopupVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KeybindingPopupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KeybindingPopupVM

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class KeybindingPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/KeybindingPopupVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

## Usage Example

```csharp
var value = new KeybindingPopupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)