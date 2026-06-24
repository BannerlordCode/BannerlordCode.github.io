<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ISteamMatchmakingPingResponse`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ISteamMatchmakingPingResponse

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public class ISteamMatchmakingPingResponse`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/ISteamMatchmakingPingResponse.cs`

## Overview

`ISteamMatchmakingPingResponse` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ServerResponded
`public delegate void ServerResponded(gameserveritem_t server)`

**Purpose:** Handles logic related to `server responded`.

### ServerFailedToRespond
`public delegate void ServerFailedToRespond()`

**Purpose:** Handles logic related to `server failed to respond`.

### IntPtr
`public static explicit operator IntPtr(ISteamMatchmakingPingResponse that)`

**Purpose:** Handles logic related to `int ptr`.

## Usage Example

```csharp
var value = new ISteamMatchmakingPingResponse();
value.ServerResponded(server);
```

## See Also

- [Complete Class Catalog](../catalog)