---
title: "MultiplayerAdminInformationScreen"
description: "Auto-generated class reference for MultiplayerAdminInformationScreen."
---
# MultiplayerAdminInformationScreen

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminInformationScreen : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/MultiplayerAdminInformationScreen.cs`

## Overview

`MultiplayerAdminInformationScreen` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static MultiplayerAdminInformationScreen Current { get; }` |

## Key Methods

### OnInitialize
`public static void OnInitialize()`

**Purpose:** Invoked when the initialize event is raised.

```csharp
// Static call; no instance required
MultiplayerAdminInformationScreen.OnInitialize();
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MultiplayerAdminInformationScreen from the subsystem API first
MultiplayerAdminInformationScreen multiplayerAdminInformationScreen = ...;
multiplayerAdminInformationScreen.OnFinalize();
```

### OnRemove
`public static void OnRemove()`

**Purpose:** Invoked when the remove event is raised.

```csharp
// Static call; no instance required
MultiplayerAdminInformationScreen.OnRemove();
```

## Usage Example

```csharp
MultiplayerAdminInformationScreen.OnInitialize();
```

## See Also

- [Area Index](../)