---
title: "GauntletInitialScreen"
description: "Auto-generated class reference for GauntletInitialScreen."
---
# GauntletInitialScreen

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletInitialScreen : MBInitialScreenBase, IChatLogHandlerScreen`
**Base:** `MBInitialScreenBase`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletInitialScreen.cs`

## Overview

`GauntletInitialScreen` lives in `TaleWorlds.MountAndBlade.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TryUpdateChatLogLayerParameters
`public void TryUpdateChatLogLayerParameters(ref bool isTeamChatAvailable, ref bool inputEnabled, ref bool isToggleChatHintAvailable, ref bool isMouseVisible, ref InputContext inputContext)`

**Purpose:** Attempts to retrieve `update chat log layer parameters`, usually returning success through an out parameter.

```csharp
// Obtain an instance of GauntletInitialScreen from the subsystem API first
GauntletInitialScreen gauntletInitialScreen = ...;
gauntletInitialScreen.TryUpdateChatLogLayerParameters(isTeamChatAvailable, inputEnabled, isToggleChatHintAvailable, isMouseVisible, inputContext);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GauntletInitialScreen gauntletInitialScreen = ...;
gauntletInitialScreen.TryUpdateChatLogLayerParameters(isTeamChatAvailable, inputEnabled, isToggleChatHintAvailable, isMouseVisible, inputContext);
```

## See Also

- [Area Index](../)