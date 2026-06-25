---
title: "MPArmoryCosmeticTauntSlotVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPArmoryCosmeticTauntSlotVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPArmoryCosmeticTauntSlotVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryCosmeticTauntSlotVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem/MPArmoryCosmeticTauntSlotVM.cs`

## Overview

`MPArmoryCosmeticTauntSlotVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectKeyVisual` | `public InputKeyItemVM SelectKeyVisual { get; set; }` |
| `EmptySlotKeyVisual` | `public InputKeyItemVM EmptySlotKeyVisual { get; set; }` |
| `IsAcceptingTaunts` | `public bool IsAcceptingTaunts { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsEmpty` | `public bool IsEmpty { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `AssignedTauntItem` | `public MPArmoryCosmeticTauntItemVM AssignedTauntItem { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### AssignTauntItem
`public void AssignTauntItem(MPArmoryCosmeticTauntItemVM tauntItem, bool isSwapping = false)`

**Purpose:** Handles logic related to `assign taunt item`.

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** Executes the `select` operation or workflow.

### ExecutePreview
`public void ExecutePreview()`

**Purpose:** Executes the `preview` operation or workflow.

### ExecuteFocus
`public void ExecuteFocus()`

**Purpose:** Executes the `focus` operation or workflow.

### ExecuteUnfocus
`public void ExecuteUnfocus()`

**Purpose:** Executes the `unfocus` operation or workflow.

### SetSelectKeyVisual
`public void SetSelectKeyVisual(HotKey hotKey)`

**Purpose:** Sets the value or state of `select key visual`.

### SetEmptySlotKeyVisual
`public void SetEmptySlotKeyVisual(HotKey hotKey)`

**Purpose:** Sets the value or state of `empty slot key visual`.

## Usage Example

```csharp
var value = new MPArmoryCosmeticTauntSlotVM();
value.OnFinalize();
```

## See Also

- [Complete Class Catalog](../catalog)