<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamRemotePlay`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamRemotePlay

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamRemotePlay`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamRemotePlay.cs`

## Overview

`SteamRemotePlay` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSessionCount
`public static uint GetSessionCount()`

**Purpose:** Gets the current value of `session count`.

### GetSessionID
`public static RemotePlaySessionID_t GetSessionID(int iSessionIndex)`

**Purpose:** Gets the current value of `session i d`.

### GetSessionSteamID
`public static CSteamID GetSessionSteamID(RemotePlaySessionID_t unSessionID)`

**Purpose:** Gets the current value of `session steam i d`.

### GetSessionClientName
`public static string GetSessionClientName(RemotePlaySessionID_t unSessionID)`

**Purpose:** Gets the current value of `session client name`.

### GetSessionClientFormFactor
`public static ESteamDeviceFormFactor GetSessionClientFormFactor(RemotePlaySessionID_t unSessionID)`

**Purpose:** Gets the current value of `session client form factor`.

### BGetSessionClientResolution
`public static bool BGetSessionClientResolution(RemotePlaySessionID_t unSessionID, out int pnResolutionX, out int pnResolutionY)`

**Purpose:** Handles logic related to `b get session client resolution`.

### BSendRemotePlayTogetherInvite
`public static bool BSendRemotePlayTogetherInvite(CSteamID steamIDFriend)`

**Purpose:** Handles logic related to `b send remote play together invite`.

## Usage Example

```csharp
SteamRemotePlay.GetSessionCount();
```

## See Also

- [Complete Class Catalog](../catalog)