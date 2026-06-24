<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ISteamMatchmakingServerListResponse`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ISteamMatchmakingServerListResponse

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public class ISteamMatchmakingServerListResponse`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/ISteamMatchmakingServerListResponse.cs`

## Overview

`ISteamMatchmakingServerListResponse` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ServerResponded
`public delegate void ServerResponded(HServerListRequest hRequest, int iServer)`

**Purpose:** Handles logic related to `server responded`.

### ServerFailedToRespond
`public delegate void ServerFailedToRespond(HServerListRequest hRequest, int iServer)`

**Purpose:** Handles logic related to `server failed to respond`.

### RefreshComplete
`public delegate void RefreshComplete(HServerListRequest hRequest, EMatchMakingServerResponse response)`

**Purpose:** Refreshes the display or cache of `complete`.

### IntPtr
`public static explicit operator IntPtr(ISteamMatchmakingServerListResponse that)`

**Purpose:** Handles logic related to `int ptr`.

## Usage Example

```csharp
var value = new ISteamMatchmakingServerListResponse();
value.ServerResponded(hRequest, 0);
```

## See Also

- [Complete Class Catalog](../catalog)