---
title: "MultiplayerIntermissionScreen"
description: "Auto-generated class reference for MultiplayerIntermissionScreen."
---
# MultiplayerIntermissionScreen

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerIntermissionScreen : ScreenBase, IGameStateListener, IChatLogHandlerScreen`
**Base:** `ScreenBase`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/MultiplayerIntermissionScreen.cs`

## Overview

`MultiplayerIntermissionScreen` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Layer` | `public GauntletLayer Layer { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MultiplayerIntermissionScreen instance = ...;
```

## See Also

- [Area Index](../)