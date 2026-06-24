<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Module`
- [← Area / Back to core](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Module

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Module : DotNetObject, IGameStateManagerOwner`
**Base:** `DotNetObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Module.cs`

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

**Purpose:** Handles logic related to `collect sub modules`.

### GetMetaMeshPackageMapping
`public static void GetMetaMeshPackageMapping(Dictionary<string, string> metaMeshPackageMappings)`

**Purpose:** Gets the current value of `meta mesh package mapping`.

### GetItemMeshNames
`public static void GetItemMeshNames(HashSet<string> itemMeshNames)`

**Purpose:** Gets the current value of `item mesh names`.

### GetCraftedItemMeshNames
`public static string GetCraftedItemMeshNames(List<string> arguments)`

**Purpose:** Gets the current value of `crafted item mesh names`.

### SetInitialModuleScreenAsRootScreen
`public void SetInitialModuleScreenAsRootScreen()`

**Purpose:** Sets the value or state of `initial module screen as root screen`.

### GetSubModuleType
`public Type GetSubModuleType(string name)`

**Purpose:** Gets the current value of `sub module type`.

### CheckIfSubmoduleCanBeLoadable
`public bool CheckIfSubmoduleCanBeLoadable(SubModuleInfo subModuleInfo)`

**Purpose:** Handles logic related to `check if submodule can be loadable`.

### ClearStateOptions
`public void ClearStateOptions()`

**Purpose:** Handles logic related to `clear state options`.

### AddInitialStateOption
`public void AddInitialStateOption(InitialStateOption initialStateOption)`

**Purpose:** Adds `initial state option` to the current collection or state.

### OverrideInitialStateOption
`public void OverrideInitialStateOption(string id, InitialStateOption newInitialStateOption)`

**Purpose:** Handles logic related to `override initial state option`.

### GetInitialStateOptions
`public IEnumerable<InitialStateOption> GetInitialStateOptions()`

**Purpose:** Gets the current value of `initial state options`.

### GetInitialStateOptionWithId
`public InitialStateOption GetInitialStateOptionWithId(string id)`

**Purpose:** Gets the current value of `initial state option with id`.

### ExecuteInitialStateOptionWithId
`public void ExecuteInitialStateOptionWithId(string id)`

**Purpose:** Executes the `initial state option with id` operation or workflow.

### SetCanLoadModules
`public void SetCanLoadModules(bool canLoadModules)`

**Purpose:** Sets the value or state of `can load modules`.

### SetEditorMissionTester
`public void SetEditorMissionTester(IEditorMissionTester editorMissionTester)`

**Purpose:** Sets the value or state of `editor mission tester`.

### StartMissionForEditorAux
`public void StartMissionForEditorAux(string missionName, string sceneName, string levels, bool forReplay, string replayFileName, bool isRecord)`

**Purpose:** Handles logic related to `start mission for editor aux`.

### GetMultiplayerGameMode
`public MultiplayerGameMode GetMultiplayerGameMode(string gameType)`

**Purpose:** Gets the current value of `multiplayer game mode`.

### AddMultiplayerGameMode
`public void AddMultiplayerGameMode(MultiplayerGameMode multiplayerGameMode)`

**Purpose:** Adds `multiplayer game mode` to the current collection or state.

### GetMultiplayerGameTypes
`public MBReadOnlyList<MultiplayerGameTypeInfo> GetMultiplayerGameTypes()`

**Purpose:** Gets the current value of `multiplayer game types`.

### StartMultiplayerGame
`public bool StartMultiplayerGame(string multiplayerGameType, string scene)`

**Purpose:** Handles logic related to `start multiplayer game`.

### ShutDownWithDelay
`public async void ShutDownWithDelay(string reason, int seconds)`

**Purpose:** Handles logic related to `shut down with delay`.

### DeactiveModule
`public void DeactiveModule(string moduleId)`

**Purpose:** Handles logic related to `deactive module`.

### ActivateModule
`public void ActivateModule(string moduleId)`

**Purpose:** Handles logic related to `activate module`.

## Usage Example

```csharp
var value = new Module();
value.CollectSubModules();
```

## See Also

- [Complete Class Catalog](../catalog)