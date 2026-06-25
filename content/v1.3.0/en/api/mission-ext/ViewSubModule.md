---
title: "ViewSubModule"
description: "Auto-generated class reference for ViewSubModule."
---
# ViewSubModule

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ViewSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewSubModule.cs`

## Overview

`ViewSubModule` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BannerTexturedMaterialCache` | `public static Dictionary<Tuple<Material, Banner>, Material> BannerTexturedMaterialCache { get; set; }` |
| `GameStateScreenManager` | `public static GameStateScreenManager GameStateScreenManager { get; }` |

## Key Methods

### OnCampaignStart
`public override void OnCampaignStart(Game game, object starterObject)`

**Purpose:** Invoked when the `campaign start` event is raised.

```csharp
// Obtain an instance of ViewSubModule from the subsystem API first
ViewSubModule viewSubModule = ...;
viewSubModule.OnCampaignStart(game, starterObject);
```

### OnMultiplayerGameStart
`public override void OnMultiplayerGameStart(Game game, object starterObject)`

**Purpose:** Invoked when the `multiplayer game start` event is raised.

```csharp
// Obtain an instance of ViewSubModule from the subsystem API first
ViewSubModule viewSubModule = ...;
viewSubModule.OnMultiplayerGameStart(game, starterObject);
```

### OnGameLoaded
`public override void OnGameLoaded(Game game, object initializerObject)`

**Purpose:** Invoked when the `game loaded` event is raised.

```csharp
// Obtain an instance of ViewSubModule from the subsystem API first
ViewSubModule viewSubModule = ...;
viewSubModule.OnGameLoaded(game, initializerObject);
```

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**Purpose:** Invoked when the `game initialization finished` event is raised.

```csharp
// Obtain an instance of ViewSubModule from the subsystem API first
ViewSubModule viewSubModule = ...;
viewSubModule.OnGameInitializationFinished(game);
```

### BeginGameStart
`public override void BeginGameStart(Game game)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ViewSubModule from the subsystem API first
ViewSubModule viewSubModule = ...;
viewSubModule.BeginGameStart(game);
```

### DoLoading
`public override bool DoLoading(Game game)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ViewSubModule from the subsystem API first
ViewSubModule viewSubModule = ...;
var result = viewSubModule.DoLoading(game);
```

### OnGameEnd
`public override void OnGameEnd(Game game)`

**Purpose:** Invoked when the `game end` event is raised.

```csharp
// Obtain an instance of ViewSubModule from the subsystem API first
ViewSubModule viewSubModule = ...;
viewSubModule.OnGameEnd(game);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ViewSubModule viewSubModule = ...;
viewSubModule.OnCampaignStart(game, starterObject);
```

## See Also

- [Area Index](../)