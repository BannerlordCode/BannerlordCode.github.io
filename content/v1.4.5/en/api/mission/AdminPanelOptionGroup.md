---
title: "AdminPanelOptionGroup"
description: "Auto-generated class reference for AdminPanelOptionGroup."
---
# AdminPanelOptionGroup

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class AdminPanelOptionGroup : IAdminPanelOptionGroup, IAdminPanelTickable`
**Base:** `IAdminPanelOptionGroup`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/AdminPanelOptionGroup.cs`

## Overview

`AdminPanelOptionGroup` lives in `TaleWorlds.MountAndBlade.Multiplayer.Admin` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.Admin` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddOption
`public void AddOption(IAdminPanelOption option)`

**Purpose:** **Purpose:** Adds option to the current collection or state.

```csharp
// Obtain an instance of AdminPanelOptionGroup from the subsystem API first
AdminPanelOptionGroup adminPanelOptionGroup = ...;
adminPanelOptionGroup.AddOption(option);
```

### AddAction
`public void AddAction(IAdminPanelAction action)`

**Purpose:** **Purpose:** Adds action to the current collection or state.

```csharp
// Obtain an instance of AdminPanelOptionGroup from the subsystem API first
AdminPanelOptionGroup adminPanelOptionGroup = ...;
adminPanelOptionGroup.AddAction(action);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AdminPanelOptionGroup adminPanelOptionGroup = ...;
adminPanelOptionGroup.AddOption(option);
```

## See Also

- [Area Index](../)