---
title: "MultiplayerSceneNotificationContextProvider"
description: "Auto-generated class reference for MultiplayerSceneNotificationContextProvider."
---
# MultiplayerSceneNotificationContextProvider

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerSceneNotificationContextProvider : ISceneNotificationContextProvider`
**Base:** `ISceneNotificationContextProvider`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/MultiplayerSceneNotificationContextProvider.cs`

## Overview

`MultiplayerSceneNotificationContextProvider` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsContextAllowed
`public bool IsContextAllowed(RelevantContextType relevantType)`

**Purpose:** Determines whether the this instance is in the context allowed state or condition.

```csharp
// Obtain an instance of MultiplayerSceneNotificationContextProvider from the subsystem API first
MultiplayerSceneNotificationContextProvider multiplayerSceneNotificationContextProvider = ...;
var result = multiplayerSceneNotificationContextProvider.IsContextAllowed(relevantType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerSceneNotificationContextProvider multiplayerSceneNotificationContextProvider = ...;
multiplayerSceneNotificationContextProvider.IsContextAllowed(relevantType);
```

## See Also

- [Area Index](../)