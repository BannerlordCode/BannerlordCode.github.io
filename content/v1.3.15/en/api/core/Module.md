---
title: "Module"
description: "Auto-generated class reference for Module."
---
# Module

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Module : DotNetObject, IGameStateManagerOwner`
**Base:** `DotNetObject`
**File:** `TaleWorlds.MountAndBlade/Module.cs`

## Overview

`Module` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentModule` | `public static Module CurrentModule { get; }` |
| `GlobalGameStateManager` | `public GameStateManager GlobalGameStateManager { get; }` |
| `MultiplayerRequested` | `public bool MultiplayerRequested { get; }` |
| `ReturnToEditorState` | `public bool ReturnToEditorState { get; }` |
| `LoadingFinished` | `public bool LoadingFinished { get; }` |
| `GlobalTextManager` | `public GameTextManager GlobalTextManager { get; }` |
| `IsOnlyCoreContentEnabled` | `public bool IsOnlyCoreContentEnabled { get; }` |
| `JobManager` | `public JobManager JobManager { get; }` |
| `StartupInfo` | `public GameStartupInfo StartupInfo { get; }` |

## Key Methods

### CollectSubModules
`public MBReadOnlyList<MBSubModuleBase> CollectSubModules()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
var result = module.CollectSubModules();
```

### GetMetaMeshPackageMapping
`public static void GetMetaMeshPackageMapping(Dictionary<string, string> metaMeshPackageMappings)`

**Purpose:** Reads and returns the `meta mesh package mapping` value held by the current object.

```csharp
// Static call; no instance required
Module.GetMetaMeshPackageMapping(dictionary<string, "example");
```

### GetItemMeshNames
`public static void GetItemMeshNames(HashSet<string> itemMeshNames)`

**Purpose:** Reads and returns the `item mesh names` value held by the current object.

```csharp
// Static call; no instance required
Module.GetItemMeshNames(itemMeshNames);
```

### GetCraftedItemMeshNames
`public static string GetCraftedItemMeshNames(List<string> arguments)`

**Purpose:** Reads and returns the `crafted item mesh names` value held by the current object.

```csharp
// Static call; no instance required
Module.GetCraftedItemMeshNames(arguments);
```

### SetInitialModuleScreenAsRootScreen
`public void SetInitialModuleScreenAsRootScreen()`

**Purpose:** Assigns a new value to `initial module screen as root screen` and updates the object's internal state.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
module.SetInitialModuleScreenAsRootScreen();
```

### GetSubModuleType
`public Type GetSubModuleType(string name)`

**Purpose:** Reads and returns the `sub module type` value held by the current object.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
var result = module.GetSubModuleType("example");
```

### CheckIfSubmoduleCanBeLoadable
`public bool CheckIfSubmoduleCanBeLoadable(SubModuleInfo subModuleInfo)`

**Purpose:** Verifies whether `if submodule can be loadable` holds true for the current object.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
var result = module.CheckIfSubmoduleCanBeLoadable(subModuleInfo);
```

### ClearStateOptions
`public void ClearStateOptions()`

**Purpose:** Removes all `state options` from the current object.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
module.ClearStateOptions();
```

### AddInitialStateOption
`public void AddInitialStateOption(InitialStateOption initialStateOption)`

**Purpose:** Adds `initial state option` to the current collection or state.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
module.AddInitialStateOption(initialStateOption);
```

### OverrideInitialStateOption
`public void OverrideInitialStateOption(string id, InitialStateOption newInitialStateOption)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
module.OverrideInitialStateOption("example", newInitialStateOption);
```

### GetInitialStateOptions
`public IEnumerable<InitialStateOption> GetInitialStateOptions()`

**Purpose:** Reads and returns the `initial state options` value held by the current object.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
var result = module.GetInitialStateOptions();
```

### GetInitialStateOptionWithId
`public InitialStateOption GetInitialStateOptionWithId(string id)`

**Purpose:** Reads and returns the `initial state option with id` value held by the current object.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
var result = module.GetInitialStateOptionWithId("example");
```

### ExecuteInitialStateOptionWithId
`public void ExecuteInitialStateOptionWithId(string id)`

**Purpose:** Runs the operation or workflow associated with `initial state option with id`.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
module.ExecuteInitialStateOptionWithId("example");
```

### SetCanLoadModules
`public void SetCanLoadModules(bool canLoadModules)`

**Purpose:** Assigns a new value to `can load modules` and updates the object's internal state.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
module.SetCanLoadModules(false);
```

### SetEditorMissionTester
`public void SetEditorMissionTester(IEditorMissionTester editorMissionTester)`

**Purpose:** Assigns a new value to `editor mission tester` and updates the object's internal state.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
module.SetEditorMissionTester(editorMissionTester);
```

### StartMissionForEditorAux
`public void StartMissionForEditorAux(string missionName, string sceneName, string levels, bool forReplay, string replayFileName, bool isRecord)`

**Purpose:** Starts the `mission for editor aux` flow or state machine.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
module.StartMissionForEditorAux("example", "example", "example", false, "example", false);
```

### GetMultiplayerGameMode
`public MultiplayerGameMode GetMultiplayerGameMode(string gameType)`

**Purpose:** Reads and returns the `multiplayer game mode` value held by the current object.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
var result = module.GetMultiplayerGameMode("example");
```

### AddMultiplayerGameMode
`public void AddMultiplayerGameMode(MultiplayerGameMode multiplayerGameMode)`

**Purpose:** Adds `multiplayer game mode` to the current collection or state.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
module.AddMultiplayerGameMode(multiplayerGameMode);
```

### GetMultiplayerGameTypes
`public MBReadOnlyList<MultiplayerGameTypeInfo> GetMultiplayerGameTypes()`

**Purpose:** Reads and returns the `multiplayer game types` value held by the current object.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
var result = module.GetMultiplayerGameTypes();
```

### StartMultiplayerGame
`public bool StartMultiplayerGame(string multiplayerGameType, string scene)`

**Purpose:** Starts the `multiplayer game` flow or state machine.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
var result = module.StartMultiplayerGame("example", "example");
```

### ShutDownWithDelay
`public void ShutDownWithDelay(string reason, int seconds)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
module.ShutDownWithDelay("example", 0);
```

### DeactiveModule
`public void DeactiveModule(string moduleId)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
module.DeactiveModule("example");
```

### ActivateModule
`public void ActivateModule(string moduleId)`

**Purpose:** Activates the resource, state, or feature associated with `module`.

```csharp
// Obtain an instance of Module from the subsystem API first
Module module = ...;
module.ActivateModule("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Module module = ...;
module.CollectSubModules();
```

## See Also

- [Area Index](../)