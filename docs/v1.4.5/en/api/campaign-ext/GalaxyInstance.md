<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GalaxyInstance`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GalaxyInstance

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public static class GalaxyInstance`
**Base:** none
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/GalaxyInstance.cs`

## Overview

`GalaxyInstance` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CustomExceptionDelegate
`public delegate void CustomExceptionDelegate(IError.Type type, string message)`

**Purpose:** Handles logic related to `custom exception delegate`.

### CustomExceptionRegisterCallback
`public static extern void CustomExceptionRegisterCallback(CustomExceptionDelegate customCallback)`

**Purpose:** Handles logic related to `custom exception register callback`.

### GetError
`public static IError GetError()`

**Purpose:** Gets the current value of `error`.

### ListenerRegistrar
`public static IListenerRegistrar ListenerRegistrar()`

**Purpose:** Handles logic related to `listener registrar`.

### GameServerListenerRegistrar
`public static IListenerRegistrar GameServerListenerRegistrar()`

**Purpose:** Handles logic related to `game server listener registrar`.

### Init
`public static void Init(InitParams initpParams)`

**Purpose:** Initializes the state, resources, or bindings for `init`.

### InitGameServer
`public static void InitGameServer(InitParams initpParams)`

**Purpose:** Initializes the state, resources, or bindings for `game server`.

### Shutdown
`public static void Shutdown(bool unloadModule)`

**Purpose:** Handles logic related to `shutdown`.

### User
`public static IUser User()`

**Purpose:** Handles logic related to `user`.

### Friends
`public static IFriends Friends()`

**Purpose:** Handles logic related to `friends`.

### Chat
`public static IChat Chat()`

**Purpose:** Handles logic related to `chat`.

### Matchmaking
`public static IMatchmaking Matchmaking()`

**Purpose:** Handles logic related to `matchmaking`.

### Networking
`public static INetworking Networking()`

**Purpose:** Handles logic related to `networking`.

### Stats
`public static IStats Stats()`

**Purpose:** Handles logic related to `stats`.

### Utils
`public static IUtils Utils()`

**Purpose:** Handles logic related to `utils`.

### Apps
`public static IApps Apps()`

**Purpose:** Handles logic related to `apps`.

### Storage
`public static IStorage Storage()`

**Purpose:** Handles logic related to `storage`.

### CustomNetworking
`public static ICustomNetworking CustomNetworking()`

**Purpose:** Handles logic related to `custom networking`.

### Logger
`public static ILogger Logger()`

**Purpose:** Handles logic related to `logger`.

### Telemetry
`public static ITelemetry Telemetry()`

**Purpose:** Handles logic related to `telemetry`.

### ProcessData
`public static void ProcessData()`

**Purpose:** Handles logic related to `process data`.

### ShutdownGameServer
`public static void ShutdownGameServer()`

**Purpose:** Handles logic related to `shutdown game server`.

### GameServerUser
`public static IUser GameServerUser()`

**Purpose:** Handles logic related to `game server user`.

### GameServerMatchmaking
`public static IMatchmaking GameServerMatchmaking()`

**Purpose:** Handles logic related to `game server matchmaking`.

### GameServerNetworking
`public static INetworking GameServerNetworking()`

**Purpose:** Handles logic related to `game server networking`.

### GameServerUtils
`public static IUtils GameServerUtils()`

**Purpose:** Handles logic related to `game server utils`.

### GameServerTelemetry
`public static ITelemetry GameServerTelemetry()`

**Purpose:** Handles logic related to `game server telemetry`.

### GameServerLogger
`public static ILogger GameServerLogger()`

**Purpose:** Handles logic related to `game server logger`.

### ProcessGameServerData
`public static void ProcessGameServerData()`

**Purpose:** Handles logic related to `process game server data`.

## Usage Example

```csharp
var value = new GalaxyInstance();
value.CustomExceptionDelegate(type, "example");
```

## See Also

- [Complete Class Catalog](../catalog)