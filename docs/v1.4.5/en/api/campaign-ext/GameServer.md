<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameServer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameServer

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class GameServer`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/GameServer.cs`

## Overview

`GameServer` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Init
`public static bool Init(uint unIP, ushort usGamePort, ushort usQueryPort, EServerMode eServerMode, string pchVersionString)`

**Purpose:** Initializes the state, resources, or bindings for `init`.

### Shutdown
`public static void Shutdown()`

**Purpose:** Handles logic related to `shutdown`.

### RunCallbacks
`public static void RunCallbacks()`

**Purpose:** Handles logic related to `run callbacks`.

### ReleaseCurrentThreadMemory
`public static void ReleaseCurrentThreadMemory()`

**Purpose:** Handles logic related to `release current thread memory`.

### BSecure
`public static bool BSecure()`

**Purpose:** Handles logic related to `b secure`.

### GetSteamID
`public static CSteamID GetSteamID()`

**Purpose:** Gets the current value of `steam i d`.

### GetHSteamPipe
`public static HSteamPipe GetHSteamPipe()`

**Purpose:** Gets the current value of `h steam pipe`.

### GetHSteamUser
`public static HSteamUser GetHSteamUser()`

**Purpose:** Gets the current value of `h steam user`.

## Usage Example

```csharp
GameServer.Init(0, 0, 0, eServerMode, "example");
```

## See Also

- [Complete Class Catalog](../catalog)