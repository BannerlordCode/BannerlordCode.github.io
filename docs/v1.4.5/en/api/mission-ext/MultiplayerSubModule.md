<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerSubModule`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerSubModule

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MultiplayerSubModule.cs`

## Overview

`MultiplayerSubModule` lives in `TaleWorlds.MountAndBlade.Multiplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnGameLoaded
`public override void OnGameLoaded(Game game, object initializerObject)`

**Purpose:** Called when the `game loaded` event is raised.

### OnInitialState
`public override void OnInitialState()`

**Purpose:** Called when the `initial state` event is raised.

## Usage Example

```csharp
var value = new MultiplayerSubModule();
value.OnGameLoaded(game, initializerObject);
```

## See Also

- [Complete Class Catalog](../catalog)