---
title: "AdminPanelMultiSelectionItem"
description: "Auto-generated class reference for AdminPanelMultiSelectionItem."
---
# AdminPanelMultiSelectionItem

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class AdminPanelMultiSelectionItem : IAdminPanelMultiSelectionItem`
**Base:** `IAdminPanelMultiSelectionItem`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal/AdminPanelMultiSelectionItem.cs`

## Overview

`AdminPanelMultiSelectionItem` lives in `TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetIsFallbackValue
`public void SetIsFallbackValue(bool value)`

**Purpose:** Assigns a new value to is fallback value and updates the object's internal state.

```csharp
// Obtain an instance of AdminPanelMultiSelectionItem from the subsystem API first
AdminPanelMultiSelectionItem adminPanelMultiSelectionItem = ...;
adminPanelMultiSelectionItem.SetIsFallbackValue(false);
```

### SetIsDisabled
`public void SetIsDisabled(bool value)`

**Purpose:** Assigns a new value to is disabled and updates the object's internal state.

```csharp
// Obtain an instance of AdminPanelMultiSelectionItem from the subsystem API first
AdminPanelMultiSelectionItem adminPanelMultiSelectionItem = ...;
adminPanelMultiSelectionItem.SetIsDisabled(false);
```

### SetCanBeApplied
`public void SetCanBeApplied(bool value)`

**Purpose:** Assigns a new value to can be applied and updates the object's internal state.

```csharp
// Obtain an instance of AdminPanelMultiSelectionItem from the subsystem API first
AdminPanelMultiSelectionItem adminPanelMultiSelectionItem = ...;
adminPanelMultiSelectionItem.SetCanBeApplied(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AdminPanelMultiSelectionItem adminPanelMultiSelectionItem = ...;
adminPanelMultiSelectionItem.SetIsFallbackValue(false);
```

## See Also

- [Area Index](../)