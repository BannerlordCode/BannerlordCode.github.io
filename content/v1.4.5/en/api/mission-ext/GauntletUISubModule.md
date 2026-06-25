---
title: "GauntletUISubModule"
description: "Auto-generated class reference for GauntletUISubModule."
---
# GauntletUISubModule

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletUISubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletUISubModule.cs`

## Overview

`GauntletUISubModule` lives in `TaleWorlds.MountAndBlade.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static GauntletUISubModule Instance { get; }` |

## Key Methods

### OnMultiplayerGameStart
`public override void OnMultiplayerGameStart(Game game, object starterObject)`

**Purpose:** Invoked when the `multiplayer game start` event is raised.

```csharp
// Obtain an instance of GauntletUISubModule from the subsystem API first
GauntletUISubModule gauntletUISubModule = ...;
gauntletUISubModule.OnMultiplayerGameStart(game, starterObject);
```

### OnGameEnd
`public override void OnGameEnd(Game game)`

**Purpose:** Invoked when the `game end` event is raised.

```csharp
// Obtain an instance of GauntletUISubModule from the subsystem API first
GauntletUISubModule gauntletUISubModule = ...;
gauntletUISubModule.OnGameEnd(game);
```

### ClearChatLog
`public static string ClearChatLog(List<string> strings)`

**Purpose:** Removes all `chat log` from the current object.

```csharp
// Static call; no instance required
GauntletUISubModule.ClearChatLog(strings);
```

### SetCanFocusWhileInMission
`public static string SetCanFocusWhileInMission(List<string> strings)`

**Purpose:** Assigns a new value to `can focus while in mission` and updates the object's internal state.

```csharp
// Static call; no instance required
GauntletUISubModule.SetCanFocusWhileInMission(strings);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GauntletUISubModule gauntletUISubModule = ...;
gauntletUISubModule.OnMultiplayerGameStart(game, starterObject);
```

## See Also

- [Area Index](../)