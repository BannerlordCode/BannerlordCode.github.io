---
title: "MPArmoryCosmeticItemBaseVM"
description: "Auto-generated class reference for MPArmoryCosmeticItemBaseVM."
---
# MPArmoryCosmeticItemBaseVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPArmoryCosmeticItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem/MPArmoryCosmeticItemBaseVM.cs`

## Overview

`MPArmoryCosmeticItemBaseVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UnequipText` | `public string UnequipText { get; }` |
| `CosmeticType` | `public CosmeticType CosmeticType { get; set; }` |
| `IsUnlocked` | `public bool IsUnlocked { get; set; }` |
| `IsUsed` | `public bool IsUsed { get; set; }` |
| `AreActionsEnabled` | `public bool AreActionsEnabled { get; set; }` |
| `IsSelectable` | `public bool IsSelectable { get; set; }` |
| `IsUnequippable` | `public bool IsUnequippable { get; set; }` |
| `Cost` | `public int Cost { get; set; }` |
| `Rarity` | `public int Rarity { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `OwnedText` | `public string OwnedText { get; set; }` |
| `ActionText` | `public string ActionText { get; set; }` |
| `PreviewText` | `public string PreviewText { get; set; }` |
| `Icon` | `public ItemImageIdentifierVM Icon { get; set; }` |
| `ActionKey` | `public InputKeyItemVM ActionKey { get; set; }` |
| `PreviewKey` | `public InputKeyItemVM PreviewKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPArmoryCosmeticItemBaseVM from the subsystem API first
MPArmoryCosmeticItemBaseVM mPArmoryCosmeticItemBaseVM = ...;
mPArmoryCosmeticItemBaseVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPArmoryCosmeticItemBaseVM from the subsystem API first
MPArmoryCosmeticItemBaseVM mPArmoryCosmeticItemBaseVM = ...;
mPArmoryCosmeticItemBaseVM.OnFinalize();
```

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with action.

```csharp
// Obtain an instance of MPArmoryCosmeticItemBaseVM from the subsystem API first
MPArmoryCosmeticItemBaseVM mPArmoryCosmeticItemBaseVM = ...;
mPArmoryCosmeticItemBaseVM.ExecuteAction();
```

### ExecutePreview
`public void ExecutePreview()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with preview.

```csharp
// Obtain an instance of MPArmoryCosmeticItemBaseVM from the subsystem API first
MPArmoryCosmeticItemBaseVM mPArmoryCosmeticItemBaseVM = ...;
mPArmoryCosmeticItemBaseVM.ExecutePreview();
```

### ExecuteEnableActions
`public void ExecuteEnableActions()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with enable actions.

```csharp
// Obtain an instance of MPArmoryCosmeticItemBaseVM from the subsystem API first
MPArmoryCosmeticItemBaseVM mPArmoryCosmeticItemBaseVM = ...;
mPArmoryCosmeticItemBaseVM.ExecuteEnableActions();
```

### ExecuteDisableActions
`public void ExecuteDisableActions()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with disable actions.

```csharp
// Obtain an instance of MPArmoryCosmeticItemBaseVM from the subsystem API first
MPArmoryCosmeticItemBaseVM mPArmoryCosmeticItemBaseVM = ...;
mPArmoryCosmeticItemBaseVM.ExecuteDisableActions();
```

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey actionKey, HotKey previewKey)`

**Purpose:** **Purpose:** Keeps the display or cache of key bindings in sync with the underlying state.

```csharp
// Obtain an instance of MPArmoryCosmeticItemBaseVM from the subsystem API first
MPArmoryCosmeticItemBaseVM mPArmoryCosmeticItemBaseVM = ...;
mPArmoryCosmeticItemBaseVM.RefreshKeyBindings(actionKey, previewKey);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MPArmoryCosmeticItemBaseVM instance = ...;
```

## See Also

- [Area Index](../)