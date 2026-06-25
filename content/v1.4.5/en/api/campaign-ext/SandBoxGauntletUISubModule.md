---
title: "SandBoxGauntletUISubModule"
description: "Auto-generated class reference for SandBoxGauntletUISubModule."
---
# SandBoxGauntletUISubModule

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class SandBoxGauntletUISubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI/SandBoxGauntletUISubModule.cs`

## Overview

`SandBoxGauntletUISubModule` lives in `SandBox.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnCampaignStart
`public override void OnCampaignStart(Game game, object starterObject)`

**Purpose:** Invoked when the campaign start event is raised.

```csharp
// Obtain an instance of SandBoxGauntletUISubModule from the subsystem API first
SandBoxGauntletUISubModule sandBoxGauntletUISubModule = ...;
sandBoxGauntletUISubModule.OnCampaignStart(game, starterObject);
```

### OnGameEnd
`public override void OnGameEnd(Game game)`

**Purpose:** Invoked when the game end event is raised.

```csharp
// Obtain an instance of SandBoxGauntletUISubModule from the subsystem API first
SandBoxGauntletUISubModule sandBoxGauntletUISubModule = ...;
sandBoxGauntletUISubModule.OnGameEnd(game);
```

### BeginGameStart
`public override void BeginGameStart(Game game)`

**Purpose:** Executes the BeginGameStart logic.

```csharp
// Obtain an instance of SandBoxGauntletUISubModule from the subsystem API first
SandBoxGauntletUISubModule sandBoxGauntletUISubModule = ...;
sandBoxGauntletUISubModule.BeginGameStart(game);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SandBoxGauntletUISubModule sandBoxGauntletUISubModule = ...;
sandBoxGauntletUISubModule.OnCampaignStart(game, starterObject);
```

## See Also

- [Area Index](../)