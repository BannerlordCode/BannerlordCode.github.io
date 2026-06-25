---
title: "WalkModeItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WalkModeItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WalkModeItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WalkModeItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/WalkModeItemVM.cs`

## Overview

`WalkModeItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ToggleInputKey` | `public InputKeyItemVM ToggleInputKey { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `TypeId` | `public string TypeId { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnEnabled
`public void OnEnabled()`

**Purpose:** Called when the `enabled` event is raised.

### ToggleState
`public void ToggleState()`

**Purpose:** Handles logic related to `toggle state`.

### SetToggleInputKey
`public void SetToggleInputKey(HotKey hotKey, bool isHotKeyConsoleOnly)`

**Purpose:** Sets the value or state of `toggle input key`.

### SetToggleInputKey
`public void SetToggleInputKey(GameKey gameKey, bool isHotKeyConsoleOnly)`

**Purpose:** Sets the value or state of `toggle input key`.

## Usage Example

```csharp
var value = new WalkModeItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)