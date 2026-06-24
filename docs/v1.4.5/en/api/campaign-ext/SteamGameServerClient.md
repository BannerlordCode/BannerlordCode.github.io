<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamGameServerClient`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamGameServerClient

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamGameServerClient`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamGameServerClient.cs`

## Overview

`SteamGameServerClient` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateSteamPipe
`public static HSteamPipe CreateSteamPipe()`

**Purpose:** Creates a new `steam pipe` instance or object.

### BReleaseSteamPipe
`public static bool BReleaseSteamPipe(HSteamPipe hSteamPipe)`

**Purpose:** Handles logic related to `b release steam pipe`.

### ConnectToGlobalUser
`public static HSteamUser ConnectToGlobalUser(HSteamPipe hSteamPipe)`

**Purpose:** Handles logic related to `connect to global user`.

### CreateLocalUser
`public static HSteamUser CreateLocalUser(out HSteamPipe phSteamPipe, EAccountType eAccountType)`

**Purpose:** Creates a new `local user` instance or object.

### ReleaseUser
`public static void ReleaseUser(HSteamPipe hSteamPipe, HSteamUser hUser)`

**Purpose:** Handles logic related to `release user`.

### GetISteamUser
`public static IntPtr GetISteamUser(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam user`.

### GetISteamGameServer
`public static IntPtr GetISteamGameServer(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam game server`.

### SetLocalIPBinding
`public static void SetLocalIPBinding(ref SteamIPAddress_t unIP, ushort usPort)`

**Purpose:** Sets the value or state of `local i p binding`.

### GetISteamFriends
`public static IntPtr GetISteamFriends(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam friends`.

### GetISteamUtils
`public static IntPtr GetISteamUtils(HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam utils`.

### GetISteamMatchmaking
`public static IntPtr GetISteamMatchmaking(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam matchmaking`.

### GetISteamMatchmakingServers
`public static IntPtr GetISteamMatchmakingServers(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam matchmaking servers`.

### GetISteamGenericInterface
`public static IntPtr GetISteamGenericInterface(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam generic interface`.

### GetISteamUserStats
`public static IntPtr GetISteamUserStats(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam user stats`.

### GetISteamGameServerStats
`public static IntPtr GetISteamGameServerStats(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam game server stats`.

### GetISteamApps
`public static IntPtr GetISteamApps(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam apps`.

### GetISteamNetworking
`public static IntPtr GetISteamNetworking(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam networking`.

### GetISteamRemoteStorage
`public static IntPtr GetISteamRemoteStorage(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam remote storage`.

### GetISteamScreenshots
`public static IntPtr GetISteamScreenshots(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam screenshots`.

### GetISteamGameSearch
`public static IntPtr GetISteamGameSearch(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam game search`.

### GetIPCCallCount
`public static uint GetIPCCallCount()`

**Purpose:** Gets the current value of `i p c call count`.

### SetWarningMessageHook
`public static void SetWarningMessageHook(SteamAPIWarningMessageHook_t pFunction)`

**Purpose:** Sets the value or state of `warning message hook`.

### BShutdownIfAllPipesClosed
`public static bool BShutdownIfAllPipesClosed()`

**Purpose:** Handles logic related to `b shutdown if all pipes closed`.

### GetISteamHTTP
`public static IntPtr GetISteamHTTP(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam h t t p`.

### GetISteamController
`public static IntPtr GetISteamController(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam controller`.

### GetISteamUGC
`public static IntPtr GetISteamUGC(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam u g c`.

### GetISteamAppList
`public static IntPtr GetISteamAppList(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam app list`.

### GetISteamMusic
`public static IntPtr GetISteamMusic(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam music`.

### GetISteamMusicRemote
`public static IntPtr GetISteamMusicRemote(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam music remote`.

### GetISteamHTMLSurface
`public static IntPtr GetISteamHTMLSurface(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam h t m l surface`.

### GetISteamInventory
`public static IntPtr GetISteamInventory(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam inventory`.

### GetISteamVideo
`public static IntPtr GetISteamVideo(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam video`.

### GetISteamParentalSettings
`public static IntPtr GetISteamParentalSettings(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam parental settings`.

### GetISteamInput
`public static IntPtr GetISteamInput(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam input`.

### GetISteamParties
`public static IntPtr GetISteamParties(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam parties`.

### GetISteamRemotePlay
`public static IntPtr GetISteamRemotePlay(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**Purpose:** Gets the current value of `i steam remote play`.

## Usage Example

```csharp
SteamGameServerClient.CreateSteamPipe();
```

## See Also

- [Complete Class Catalog](../catalog)