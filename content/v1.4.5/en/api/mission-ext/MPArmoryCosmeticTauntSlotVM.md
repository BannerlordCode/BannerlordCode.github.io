---
title: "MPArmoryCosmeticTauntSlotVM"
description: "Auto-generated class reference for MPArmoryCosmeticTauntSlotVM."
---
# MPArmoryCosmeticTauntSlotVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryCosmeticTauntSlotVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem/MPArmoryCosmeticTauntSlotVM.cs`

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

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPArmoryCosmeticTauntSlotVM from the subsystem API first
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.OnFinalize();
```

### AssignTauntItem
`public void AssignTauntItem(MPArmoryCosmeticTauntItemVM tauntItem, bool isSwapping = false)`

**Purpose:** Executes the AssignTauntItem logic.

```csharp
// Obtain an instance of MPArmoryCosmeticTauntSlotVM from the subsystem API first
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.AssignTauntItem(tauntItem, false);
```

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** Runs the operation or workflow associated with select.

```csharp
// Obtain an instance of MPArmoryCosmeticTauntSlotVM from the subsystem API first
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.ExecuteSelect();
```

### ExecutePreview
`public void ExecutePreview()`

**Purpose:** Runs the operation or workflow associated with preview.

```csharp
// Obtain an instance of MPArmoryCosmeticTauntSlotVM from the subsystem API first
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.ExecutePreview();
```

### ExecuteFocus
`public void ExecuteFocus()`

**Purpose:** Runs the operation or workflow associated with focus.

```csharp
// Obtain an instance of MPArmoryCosmeticTauntSlotVM from the subsystem API first
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.ExecuteFocus();
```

### ExecuteUnfocus
`public void ExecuteUnfocus()`

**Purpose:** Runs the operation or workflow associated with unfocus.

```csharp
// Obtain an instance of MPArmoryCosmeticTauntSlotVM from the subsystem API first
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.ExecuteUnfocus();
```

### SetSelectKeyVisual
`public void SetSelectKeyVisual(HotKey hotKey)`

**Purpose:** Assigns a new value to select key visual and updates the object's internal state.

```csharp
// Obtain an instance of MPArmoryCosmeticTauntSlotVM from the subsystem API first
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.SetSelectKeyVisual(hotKey);
```

### SetEmptySlotKeyVisual
`public void SetEmptySlotKeyVisual(HotKey hotKey)`

**Purpose:** Assigns a new value to empty slot key visual and updates the object's internal state.

```csharp
// Obtain an instance of MPArmoryCosmeticTauntSlotVM from the subsystem API first
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.SetEmptySlotKeyVisual(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.OnFinalize();
```

## See Also

- [Area Index](../)