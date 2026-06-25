---
title: "AdminPanelMultiSelectionOption"
description: "Auto-generated class reference for AdminPanelMultiSelectionOption."
---
# AdminPanelMultiSelectionOption

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class AdminPanelMultiSelectionOption : AdminPanelOption<IAdminPanelMultiSelectionItem>, IAdminPanelMultiSelectionOption, IAdminPanelOption<IAdminPanelMultiSelectionItem>, IAdminPanelOption`
**Base:** `AdminPanelOption<IAdminPanelMultiSelectionItem>`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal/AdminPanelMultiSelectionOption.cs`

## Overview

`AdminPanelMultiSelectionOption` lives in `TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BuildAvailableOptions
`public virtual AdminPanelMultiSelectionOption BuildAvailableOptions(MBReadOnlyList<IAdminPanelMultiSelectionItem> options)`

**Purpose:** Assembles and returns the built result for `available options`.

```csharp
// Obtain an instance of AdminPanelMultiSelectionOption from the subsystem API first
AdminPanelMultiSelectionOption adminPanelMultiSelectionOption = ...;
var result = adminPanelMultiSelectionOption.BuildAvailableOptions(options);
```

### BuildAvailableOptions
`public virtual AdminPanelMultiSelectionOption BuildAvailableOptions(OptionType optionType, bool buildDefaultValue = true)`

**Purpose:** Assembles and returns the built result for `available options`.

```csharp
// Obtain an instance of AdminPanelMultiSelectionOption from the subsystem API first
AdminPanelMultiSelectionOption adminPanelMultiSelectionOption = ...;
var result = adminPanelMultiSelectionOption.BuildAvailableOptions(optionType, false);
```

### GetAvailableOptions
`public MBReadOnlyList<IAdminPanelMultiSelectionItem> GetAvailableOptions()`

**Purpose:** Reads and returns the `available options` value held by the current object.

```csharp
// Obtain an instance of AdminPanelMultiSelectionOption from the subsystem API first
AdminPanelMultiSelectionOption adminPanelMultiSelectionOption = ...;
var result = adminPanelMultiSelectionOption.GetAvailableOptions();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AdminPanelMultiSelectionOption adminPanelMultiSelectionOption = ...;
adminPanelMultiSelectionOption.BuildAvailableOptions(options);
```

## See Also

- [Area Index](../)