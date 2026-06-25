---
title: "SandBoxViewSubModule"
description: "Auto-generated class reference for SandBoxViewSubModule."
---
# SandBoxViewSubModule

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public class SandBoxViewSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Modules.SandBox/SandBox.View/SandBox.View/SandBoxViewSubModule.cs`

## Overview

`SandBoxViewSubModule` lives in `SandBox.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnCampaignStart
`public override void OnCampaignStart(Game game, object starterObject)`

**Purpose:** **Purpose:** Invoked when the campaign start event is raised.

```csharp
// Obtain an instance of SandBoxViewSubModule from the subsystem API first
SandBoxViewSubModule sandBoxViewSubModule = ...;
sandBoxViewSubModule.OnCampaignStart(game, starterObject);
```

### OnGameLoaded
`public override void OnGameLoaded(Game game, object initializerObject)`

**Purpose:** **Purpose:** Invoked when the game loaded event is raised.

```csharp
// Obtain an instance of SandBoxViewSubModule from the subsystem API first
SandBoxViewSubModule sandBoxViewSubModule = ...;
sandBoxViewSubModule.OnGameLoaded(game, initializerObject);
```

### OnAfterGameInitializationFinished
`public override void OnAfterGameInitializationFinished(Game game, object starterObject)`

**Purpose:** **Purpose:** Invoked when the after game initialization finished event is raised.

```csharp
// Obtain an instance of SandBoxViewSubModule from the subsystem API first
SandBoxViewSubModule sandBoxViewSubModule = ...;
sandBoxViewSubModule.OnAfterGameInitializationFinished(game, starterObject);
```

### BeginGameStart
`public override void BeginGameStart(Game game)`

**Purpose:** **Purpose:** Executes the BeginGameStart logic.

```csharp
// Obtain an instance of SandBoxViewSubModule from the subsystem API first
SandBoxViewSubModule sandBoxViewSubModule = ...;
sandBoxViewSubModule.BeginGameStart(game);
```

### OnGameEnd
`public override void OnGameEnd(Game game)`

**Purpose:** **Purpose:** Invoked when the game end event is raised.

```csharp
// Obtain an instance of SandBoxViewSubModule from the subsystem API first
SandBoxViewSubModule sandBoxViewSubModule = ...;
sandBoxViewSubModule.OnGameEnd(game);
```

### OnInitialState
`public override void OnInitialState()`

**Purpose:** **Purpose:** Invoked when the initial state event is raised.

```csharp
// Obtain an instance of SandBoxViewSubModule from the subsystem API first
SandBoxViewSubModule sandBoxViewSubModule = ...;
sandBoxViewSubModule.OnInitialState();
```

### SetMapConversationDataProvider
`public static void SetMapConversationDataProvider(IMapConversationDataProvider mapConversationDataProvider)`

**Purpose:** **Purpose:** Assigns a new value to map conversation data provider and updates the object's internal state.

```csharp
// Static call; no instance required
SandBoxViewSubModule.SetMapConversationDataProvider(mapConversationDataProvider);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SandBoxViewSubModule sandBoxViewSubModule = ...;
sandBoxViewSubModule.OnCampaignStart(game, starterObject);
```

## See Also

- [Area Index](../)