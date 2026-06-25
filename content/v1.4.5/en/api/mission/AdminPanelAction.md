---
title: "AdminPanelAction"
description: "Auto-generated class reference for AdminPanelAction."
---
# AdminPanelAction

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class AdminPanelAction : IAdminPanelActionInternal, IAdminPanelAction`
**Base:** `IAdminPanelActionInternal`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/AdminPanelAction.cs`

## Overview

`AdminPanelAction` lives in `TaleWorlds.MountAndBlade.Multiplayer.Admin` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.Admin` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnFinalize
`public virtual void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of AdminPanelAction from the subsystem API first
AdminPanelAction adminPanelAction = ...;
adminPanelAction.OnFinalize();
```

### GetIsAvailable
`public virtual bool GetIsAvailable()`

**Purpose:** Reads and returns the is available value held by the this instance.

```csharp
// Obtain an instance of AdminPanelAction from the subsystem API first
AdminPanelAction adminPanelAction = ...;
var result = adminPanelAction.GetIsAvailable();
```

### GetIsDisabled
`public virtual bool GetIsDisabled(out string reason)`

**Purpose:** Reads and returns the is disabled value held by the this instance.

```csharp
// Obtain an instance of AdminPanelAction from the subsystem API first
AdminPanelAction adminPanelAction = ...;
var result = adminPanelAction.GetIsDisabled(reason);
```

### BuildName
`public AdminPanelAction BuildName(TextObject name)`

**Purpose:** Assembles and returns the built result for name.

```csharp
// Obtain an instance of AdminPanelAction from the subsystem API first
AdminPanelAction adminPanelAction = ...;
var result = adminPanelAction.BuildName(name);
```

### BuildDescription
`public AdminPanelAction BuildDescription(TextObject description)`

**Purpose:** Assembles and returns the built result for description.

```csharp
// Obtain an instance of AdminPanelAction from the subsystem API first
AdminPanelAction adminPanelAction = ...;
var result = adminPanelAction.BuildDescription(description);
```

### BuildOnActionExecutedCallback
`public AdminPanelAction BuildOnActionExecutedCallback(Action onActionExecuted)`

**Purpose:** Assembles and returns the built result for on action executed callback.

```csharp
// Obtain an instance of AdminPanelAction from the subsystem API first
AdminPanelAction adminPanelAction = ...;
var result = adminPanelAction.BuildOnActionExecutedCallback(onActionExecuted);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AdminPanelAction adminPanelAction = ...;
adminPanelAction.OnFinalize();
```

## See Also

- [Area Index](../)