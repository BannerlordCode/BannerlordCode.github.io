---
title: "SandBoxSubModule"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxSubModule`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxSubModule

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class SandBoxSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/Sandbox/SandBoxSubModule.cs`

## Overview

`SandBoxSubModule` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnCampaignStart
`public override void OnCampaignStart(Game game, object starterObject)`

**Purpose:** Called when the `campaign start` event is raised.

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**Purpose:** Called when the `game initialization finished` event is raised.

### RegisterSubModuleObjects
`public override void RegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** Handles logic related to `register sub module objects`.

### AfterRegisterSubModuleObjects
`public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** Handles logic related to `after register sub module objects`.

### OnGameLoaded
`public override void OnGameLoaded(Game game, object starterObject)`

**Purpose:** Called when the `game loaded` event is raised.

### OnConfigChanged
`public override void OnConfigChanged()`

**Purpose:** Called when the `config changed` event is raised.

## Usage Example

```csharp
var value = new SandBoxSubModule();
value.OnCampaignStart(game, starterObject);
```

## See Also

- [Complete Class Catalog](../catalog)