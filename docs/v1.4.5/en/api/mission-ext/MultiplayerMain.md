<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerMain`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerMain

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerMain`
**Area:** mission-ext

## Overview

`MultiplayerMain` lives in `TaleWorlds.MountAndBlade.Multiplayer`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInitialized` | `public static bool IsInitialized { get; }` |

## Key Methods

### Initialize
`public static void Initialize(IGameNetworkHandler gameNetworkHandler)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### InitializeAsDedicatedServer
`public static void InitializeAsDedicatedServer(IGameNetworkHandler gameNetworkHandler)`

**Purpose:** Initializes the state, resources, or bindings for `as dedicated server`.

### GetAvailableRankedGameModes
`public static MultiplayerGameType GetAvailableRankedGameModes()`

**Purpose:** Gets the current value of `available ranked game modes`.

### GetAvailableCustomGameModes
`public static MultiplayerGameType GetAvailableCustomGameModes()`

**Purpose:** Gets the current value of `available custom game modes`.

### GetAvailableQuickPlayGameModes
`public static MultiplayerGameType GetAvailableQuickPlayGameModes()`

**Purpose:** Gets the current value of `available quick play game modes`.

### GetAvailableMatchmakerRegions
`public static string GetAvailableMatchmakerRegions()`

**Purpose:** Gets the current value of `available matchmaker regions`.

### GetUserDefaultRegion
`public static string GetUserDefaultRegion()`

**Purpose:** Gets the current value of `user default region`.

### GetUserCurrentRegion
`public static string GetUserCurrentRegion()`

**Purpose:** Gets the current value of `user current region`.

### GetUserSelectedGameTypes
`public static string GetUserSelectedGameTypes()`

**Purpose:** Gets the current value of `user selected game types`.

### GetDedicatedCustomServerAuthToken
`public static string GetDedicatedCustomServerAuthToken(List<string> strings)`

**Purpose:** Gets the current value of `dedicated custom server auth token`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MultiplayerMain.Initialize(gameNetworkHandler);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
