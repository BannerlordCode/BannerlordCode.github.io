<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DedicatedCustomServerClientHelperSubModule`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DedicatedCustomServerClientHelperSubModule

**Namespace:** TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DedicatedCustomServerClientHelperSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/DedicatedCustomServerClientHelperSubModule.cs`

## Overview

`DedicatedCustomServerClientHelperSubModule` lives in `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnActivate
`public void OnActivate()`

**Purpose:** Called when the `activate` event is raised.

### OnDeactivate
`public void OnDeactivate()`

**Purpose:** Called when the `deactivate` event is raised.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnInitialize
`public void OnInitialize()`

**Purpose:** Called when the `initialize` event is raised.

### OnCreateState
`public void OnCreateState(GameState gameState)`

**Purpose:** Called when the `create state` event is raised.

### OnPopState
`public void OnPopState(GameState gameState)`

**Purpose:** Called when the `pop state` event is raised.

### OnPushState
`public void OnPushState(GameState gameState, bool isTopGameState)`

**Purpose:** Called when the `push state` event is raised.

### OnCleanStates
`public void OnCleanStates()`

**Purpose:** Called when the `clean states` event is raised.

### OnSavedGameLoadFinished
`public void OnSavedGameLoadFinished()`

**Purpose:** Called when the `saved game load finished` event is raised.

### OnMultiplayerGameStart
`public override void OnMultiplayerGameStart(Game game, object _)`

**Purpose:** Called when the `multiplayer game start` event is raised.

### DownloadMapFromHost
`public async Task DownloadMapFromHost(string hostAddress, string mapName, bool replaceExisting = false, IProgress<ProgressUpdate> progress = null, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `download map from host`.

### GetMapListFromHost
`public async Task<MapListResponse> GetMapListFromHost(string hostAddress)`

**Purpose:** Gets the current value of `map list from host`.

### DownloadMapCommand
`public static string DownloadMapCommand(List<string> strings)`

**Purpose:** Handles logic related to `download map command`.

### GetMapListCommand
`public static string GetMapListCommand(List<string> strings)`

**Purpose:** Gets the current value of `map list command`.

### OpenDownloadPanel
`public static string OpenDownloadPanel(List<string> strings)`

**Purpose:** Handles logic related to `open download panel`.

## Usage Example

```csharp
var value = new DedicatedCustomServerClientHelperSubModule();
value.OnActivate();
```

## See Also

- [Complete Class Catalog](../catalog)