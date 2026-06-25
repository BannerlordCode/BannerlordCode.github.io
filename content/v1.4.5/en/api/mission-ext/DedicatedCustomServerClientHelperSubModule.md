---
title: "DedicatedCustomServerClientHelperSubModule"
description: "Auto-generated class reference for DedicatedCustomServerClientHelperSubModule."
---
# DedicatedCustomServerClientHelperSubModule

**Namespace:** TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DedicatedCustomServerClientHelperSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/DedicatedCustomServerClientHelperSubModule.cs`

## Overview

`DedicatedCustomServerClientHelperSubModule` lives in `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnActivate
`public void OnActivate()`

**Purpose:** **Purpose:** Invoked when the activate event is raised.

```csharp
// Obtain an instance of DedicatedCustomServerClientHelperSubModule from the subsystem API first
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnActivate();
```

### OnDeactivate
`public void OnDeactivate()`

**Purpose:** **Purpose:** Invoked when the deactivate event is raised.

```csharp
// Obtain an instance of DedicatedCustomServerClientHelperSubModule from the subsystem API first
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnDeactivate();
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of DedicatedCustomServerClientHelperSubModule from the subsystem API first
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnFinalize();
```

### OnInitialize
`public void OnInitialize()`

**Purpose:** **Purpose:** Invoked when the initialize event is raised.

```csharp
// Obtain an instance of DedicatedCustomServerClientHelperSubModule from the subsystem API first
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnInitialize();
```

### OnCreateState
`public void OnCreateState(GameState gameState)`

**Purpose:** **Purpose:** Invoked when the create state event is raised.

```csharp
// Obtain an instance of DedicatedCustomServerClientHelperSubModule from the subsystem API first
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnCreateState(gameState);
```

### OnPopState
`public void OnPopState(GameState gameState)`

**Purpose:** **Purpose:** Invoked when the pop state event is raised.

```csharp
// Obtain an instance of DedicatedCustomServerClientHelperSubModule from the subsystem API first
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnPopState(gameState);
```

### OnPushState
`public void OnPushState(GameState gameState, bool isTopGameState)`

**Purpose:** **Purpose:** Invoked when the push state event is raised.

```csharp
// Obtain an instance of DedicatedCustomServerClientHelperSubModule from the subsystem API first
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnPushState(gameState, false);
```

### OnCleanStates
`public void OnCleanStates()`

**Purpose:** **Purpose:** Invoked when the clean states event is raised.

```csharp
// Obtain an instance of DedicatedCustomServerClientHelperSubModule from the subsystem API first
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnCleanStates();
```

### OnSavedGameLoadFinished
`public void OnSavedGameLoadFinished()`

**Purpose:** **Purpose:** Invoked when the saved game load finished event is raised.

```csharp
// Obtain an instance of DedicatedCustomServerClientHelperSubModule from the subsystem API first
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnSavedGameLoadFinished();
```

### OnMultiplayerGameStart
`public override void OnMultiplayerGameStart(Game game, object _)`

**Purpose:** **Purpose:** Invoked when the multiplayer game start event is raised.

```csharp
// Obtain an instance of DedicatedCustomServerClientHelperSubModule from the subsystem API first
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnMultiplayerGameStart(game, _);
```

### DownloadMapFromHost
`public async Task DownloadMapFromHost(string hostAddress, string mapName, bool replaceExisting = false, IProgress<ProgressUpdate> progress = null, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** **Purpose:** Executes the DownloadMapFromHost logic.

```csharp
// Obtain an instance of DedicatedCustomServerClientHelperSubModule from the subsystem API first
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
var result = dedicatedCustomServerClientHelperSubModule.DownloadMapFromHost("example", "example", false, null, default(CancellationToken));
```

### GetMapListFromHost
`public async Task<MapListResponse> GetMapListFromHost(string hostAddress)`

**Purpose:** **Purpose:** Reads and returns the map list from host value held by the this instance.

```csharp
// Obtain an instance of DedicatedCustomServerClientHelperSubModule from the subsystem API first
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
var result = dedicatedCustomServerClientHelperSubModule.GetMapListFromHost("example");
```

### DownloadMapCommand
`public static string DownloadMapCommand(List<string> strings)`

**Purpose:** **Purpose:** Executes the DownloadMapCommand logic.

```csharp
// Static call; no instance required
DedicatedCustomServerClientHelperSubModule.DownloadMapCommand(strings);
```

### GetMapListCommand
`public static string GetMapListCommand(List<string> strings)`

**Purpose:** **Purpose:** Reads and returns the map list command value held by the this instance.

```csharp
// Static call; no instance required
DedicatedCustomServerClientHelperSubModule.GetMapListCommand(strings);
```

### OpenDownloadPanel
`public static string OpenDownloadPanel(List<string> strings)`

**Purpose:** **Purpose:** Opens the resource or UI associated with download panel.

```csharp
// Static call; no instance required
DedicatedCustomServerClientHelperSubModule.OpenDownloadPanel(strings);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DedicatedCustomServerClientHelperSubModule dedicatedCustomServerClientHelperSubModule = ...;
dedicatedCustomServerClientHelperSubModule.OnActivate();
```

## See Also

- [Area Index](../)