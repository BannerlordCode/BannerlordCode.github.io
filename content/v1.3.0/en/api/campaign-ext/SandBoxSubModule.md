---
title: "SandBoxSubModule"
description: "Auto-generated class reference for SandBoxSubModule."
---
# SandBoxSubModule

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class SandBoxSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `SandBox/SandBoxSubModule.cs`

## Overview

`SandBoxSubModule` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnCampaignStart
`public override void OnCampaignStart(Game game, object starterObject)`

**Purpose:** **Purpose:** Invoked when the campaign start event is raised.

```csharp
// Obtain an instance of SandBoxSubModule from the subsystem API first
SandBoxSubModule sandBoxSubModule = ...;
sandBoxSubModule.OnCampaignStart(game, starterObject);
```

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**Purpose:** **Purpose:** Invoked when the game initialization finished event is raised.

```csharp
// Obtain an instance of SandBoxSubModule from the subsystem API first
SandBoxSubModule sandBoxSubModule = ...;
sandBoxSubModule.OnGameInitializationFinished(game);
```

### RegisterSubModuleObjects
`public override void RegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** **Purpose:** Registers sub module objects with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of SandBoxSubModule from the subsystem API first
SandBoxSubModule sandBoxSubModule = ...;
sandBoxSubModule.RegisterSubModuleObjects(false);
```

### AfterRegisterSubModuleObjects
`public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** **Purpose:** Executes the AfterRegisterSubModuleObjects logic.

```csharp
// Obtain an instance of SandBoxSubModule from the subsystem API first
SandBoxSubModule sandBoxSubModule = ...;
sandBoxSubModule.AfterRegisterSubModuleObjects(false);
```

### OnGameLoaded
`public override void OnGameLoaded(Game game, object starterObject)`

**Purpose:** **Purpose:** Invoked when the game loaded event is raised.

```csharp
// Obtain an instance of SandBoxSubModule from the subsystem API first
SandBoxSubModule sandBoxSubModule = ...;
sandBoxSubModule.OnGameLoaded(game, starterObject);
```

### OnConfigChanged
`public override void OnConfigChanged()`

**Purpose:** **Purpose:** Invoked when the config changed event is raised.

```csharp
// Obtain an instance of SandBoxSubModule from the subsystem API first
SandBoxSubModule sandBoxSubModule = ...;
sandBoxSubModule.OnConfigChanged();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SandBoxSubModule sandBoxSubModule = ...;
sandBoxSubModule.OnCampaignStart(game, starterObject);
```

## See Also

- [Area Index](../)