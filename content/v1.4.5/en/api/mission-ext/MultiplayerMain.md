---
title: "MultiplayerMain"
description: "Auto-generated class reference for MultiplayerMain."
---
# MultiplayerMain

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerMain`
**Base:** none
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MultiplayerMain.cs`

## Overview

`MultiplayerMain` lives in `TaleWorlds.MountAndBlade.Multiplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInitialized` | `public static bool IsInitialized { get; }` |

## Key Methods

### Initialize
`public static void Initialize(IGameNetworkHandler gameNetworkHandler)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Static call; no instance required
MultiplayerMain.Initialize(gameNetworkHandler);
```

### InitializeAsDedicatedServer
`public static void InitializeAsDedicatedServer(IGameNetworkHandler gameNetworkHandler)`

**Purpose:** Prepares the resources, state, or bindings required by `as dedicated server`.

```csharp
// Static call; no instance required
MultiplayerMain.InitializeAsDedicatedServer(gameNetworkHandler);
```

### GetAvailableRankedGameModes
`public static MultiplayerGameType GetAvailableRankedGameModes()`

**Purpose:** Reads and returns the `available ranked game modes` value held by the current object.

```csharp
// Static call; no instance required
MultiplayerMain.GetAvailableRankedGameModes();
```

### GetAvailableCustomGameModes
`public static MultiplayerGameType GetAvailableCustomGameModes()`

**Purpose:** Reads and returns the `available custom game modes` value held by the current object.

```csharp
// Static call; no instance required
MultiplayerMain.GetAvailableCustomGameModes();
```

### GetAvailableQuickPlayGameModes
`public static MultiplayerGameType GetAvailableQuickPlayGameModes()`

**Purpose:** Reads and returns the `available quick play game modes` value held by the current object.

```csharp
// Static call; no instance required
MultiplayerMain.GetAvailableQuickPlayGameModes();
```

### GetAvailableMatchmakerRegions
`public static string GetAvailableMatchmakerRegions()`

**Purpose:** Reads and returns the `available matchmaker regions` value held by the current object.

```csharp
// Static call; no instance required
MultiplayerMain.GetAvailableMatchmakerRegions();
```

### GetUserDefaultRegion
`public static string GetUserDefaultRegion()`

**Purpose:** Reads and returns the `user default region` value held by the current object.

```csharp
// Static call; no instance required
MultiplayerMain.GetUserDefaultRegion();
```

### GetUserCurrentRegion
`public static string GetUserCurrentRegion()`

**Purpose:** Reads and returns the `user current region` value held by the current object.

```csharp
// Static call; no instance required
MultiplayerMain.GetUserCurrentRegion();
```

### GetUserSelectedGameTypes
`public static string GetUserSelectedGameTypes()`

**Purpose:** Reads and returns the `user selected game types` value held by the current object.

```csharp
// Static call; no instance required
MultiplayerMain.GetUserSelectedGameTypes();
```

### GetDedicatedCustomServerAuthToken
`public static string GetDedicatedCustomServerAuthToken(List<string> strings)`

**Purpose:** Reads and returns the `dedicated custom server auth token` value held by the current object.

```csharp
// Static call; no instance required
MultiplayerMain.GetDedicatedCustomServerAuthToken(strings);
```

## Usage Example

```csharp
MultiplayerMain.Initialize(gameNetworkHandler);
```

## See Also

- [Area Index](../)