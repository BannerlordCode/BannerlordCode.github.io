---
title: "LoadingWindowHandler"
description: "Auto-generated class reference for LoadingWindowHandler."
---
# LoadingWindowHandler

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal class LoadingWindowHandler<T> : ILoadingWindowHandler where T : class, ILoadingWindowManager, new()`
**Base:** `ILoadingWindowHandler where T : class`
**File:** `TaleWorlds.Engine/LoadingWindowHandler.cs`

## Overview

`LoadingWindowHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `LoadingWindowHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LoadingWindowManager` | `public ILoadingWindowManager LoadingWindowManager { get; }` |
| `IsLoadingWindowActive` | `public bool IsLoadingWindowActive { get; }` |

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of LoadingWindowHandler from the subsystem API first
LoadingWindowHandler loadingWindowHandler = ...;
loadingWindowHandler.Initialize();
```

### Enable
`public void Enable()`

**Purpose:** Executes the Enable logic.

```csharp
// Obtain an instance of LoadingWindowHandler from the subsystem API first
LoadingWindowHandler loadingWindowHandler = ...;
loadingWindowHandler.Enable();
```

### Disable
`public void Disable()`

**Purpose:** Executes the Disable logic.

```csharp
// Obtain an instance of LoadingWindowHandler from the subsystem API first
LoadingWindowHandler loadingWindowHandler = ...;
loadingWindowHandler.Disable();
```

### Destroy
`public void Destroy()`

**Purpose:** Executes the Destroy logic.

```csharp
// Obtain an instance of LoadingWindowHandler from the subsystem API first
LoadingWindowHandler loadingWindowHandler = ...;
loadingWindowHandler.Destroy();
```

### SetCurrentModeIsMultiplayer
`public void SetCurrentModeIsMultiplayer(bool isMultiplayer)`

**Purpose:** Assigns a new value to current mode is multiplayer and updates the object's internal state.

```csharp
// Obtain an instance of LoadingWindowHandler from the subsystem API first
LoadingWindowHandler loadingWindowHandler = ...;
loadingWindowHandler.SetCurrentModeIsMultiplayer(false);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<LoadingWindowHandler>();
```

## See Also

- [Area Index](../)