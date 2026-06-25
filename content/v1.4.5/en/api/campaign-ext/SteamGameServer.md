---
title: "SteamGameServer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamGameServer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamGameServer

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamGameServer`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamGameServer.cs`

## Overview

`SteamGameServer` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetProduct
`public static void SetProduct(string pszProduct)`

**Purpose:** Sets the value or state of `product`.

### SetGameDescription
`public static void SetGameDescription(string pszGameDescription)`

**Purpose:** Sets the value or state of `game description`.

### SetModDir
`public static void SetModDir(string pszModDir)`

**Purpose:** Sets the value or state of `mod dir`.

### SetDedicatedServer
`public static void SetDedicatedServer(bool bDedicated)`

**Purpose:** Sets the value or state of `dedicated server`.

### LogOn
`public static void LogOn(string pszToken)`

**Purpose:** Handles logic related to `log on`.

### LogOnAnonymous
`public static void LogOnAnonymous()`

**Purpose:** Handles logic related to `log on anonymous`.

### LogOff
`public static void LogOff()`

**Purpose:** Handles logic related to `log off`.

### BLoggedOn
`public static bool BLoggedOn()`

**Purpose:** Handles logic related to `b logged on`.

### BSecure
`public static bool BSecure()`

**Purpose:** Handles logic related to `b secure`.

### GetSteamID
`public static CSteamID GetSteamID()`

**Purpose:** Gets the current value of `steam i d`.

### WasRestartRequested
`public static bool WasRestartRequested()`

**Purpose:** Handles logic related to `was restart requested`.

### SetMaxPlayerCount
`public static void SetMaxPlayerCount(int cPlayersMax)`

**Purpose:** Sets the value or state of `max player count`.

### SetBotPlayerCount
`public static void SetBotPlayerCount(int cBotplayers)`

**Purpose:** Sets the value or state of `bot player count`.

### SetServerName
`public static void SetServerName(string pszServerName)`

**Purpose:** Sets the value or state of `server name`.

### SetMapName
`public static void SetMapName(string pszMapName)`

**Purpose:** Sets the value or state of `map name`.

### SetPasswordProtected
`public static void SetPasswordProtected(bool bPasswordProtected)`

**Purpose:** Sets the value or state of `password protected`.

### SetSpectatorPort
`public static void SetSpectatorPort(ushort unSpectatorPort)`

**Purpose:** Sets the value or state of `spectator port`.

### SetSpectatorServerName
`public static void SetSpectatorServerName(string pszSpectatorServerName)`

**Purpose:** Sets the value or state of `spectator server name`.

### ClearAllKeyValues
`public static void ClearAllKeyValues()`

**Purpose:** Handles logic related to `clear all key values`.

### SetKeyValue
`public static void SetKeyValue(string pKey, string pValue)`

**Purpose:** Sets the value or state of `key value`.

### SetGameTags
`public static void SetGameTags(string pchGameTags)`

**Purpose:** Sets the value or state of `game tags`.

### SetGameData
`public static void SetGameData(string pchGameData)`

**Purpose:** Sets the value or state of `game data`.

### SetRegion
`public static void SetRegion(string pszRegion)`

**Purpose:** Sets the value or state of `region`.

### SetAdvertiseServerActive
`public static void SetAdvertiseServerActive(bool bActive)`

**Purpose:** Sets the value or state of `advertise server active`.

### GetAuthSessionTicket
`public static HAuthTicket GetAuthSessionTicket(byte pTicket, int cbMaxTicket, out uint pcbTicket)`

**Purpose:** Gets the current value of `auth session ticket`.

### BeginAuthSession
`public static EBeginAuthSessionResult BeginAuthSession(byte pAuthTicket, int cbAuthTicket, CSteamID steamID)`

**Purpose:** Handles logic related to `begin auth session`.

### EndAuthSession
`public static void EndAuthSession(CSteamID steamID)`

**Purpose:** Handles logic related to `end auth session`.

### CancelAuthTicket
`public static void CancelAuthTicket(HAuthTicket hAuthTicket)`

**Purpose:** Checks whether the current object can `cel auth ticket`.

### UserHasLicenseForApp
`public static EUserHasLicenseForAppResult UserHasLicenseForApp(CSteamID steamID, AppId_t appID)`

**Purpose:** Handles logic related to `user has license for app`.

### RequestUserGroupStatus
`public static bool RequestUserGroupStatus(CSteamID steamIDUser, CSteamID steamIDGroup)`

**Purpose:** Handles logic related to `request user group status`.

### GetGameplayStats
`public static void GetGameplayStats()`

**Purpose:** Gets the current value of `gameplay stats`.

### GetServerReputation
`public static SteamAPICall_t GetServerReputation()`

**Purpose:** Gets the current value of `server reputation`.

### GetPublicIP
`public static SteamIPAddress_t GetPublicIP()`

**Purpose:** Gets the current value of `public i p`.

### HandleIncomingPacket
`public static bool HandleIncomingPacket(byte pData, int cbData, uint srcIP, ushort srcPort)`

**Purpose:** Handles the `incoming packet` event or callback.

### GetNextOutgoingPacket
`public static int GetNextOutgoingPacket(byte pOut, int cbMaxOut, out uint pNetAdr, out ushort pPort)`

**Purpose:** Gets the current value of `next outgoing packet`.

### AssociateWithClan
`public static SteamAPICall_t AssociateWithClan(CSteamID steamIDClan)`

**Purpose:** Handles logic related to `associate with clan`.

### ComputeNewPlayerCompatibility
`public static SteamAPICall_t ComputeNewPlayerCompatibility(CSteamID steamIDNewPlayer)`

**Purpose:** Handles logic related to `compute new player compatibility`.

### SendUserConnectAndAuthenticate_DEPRECATED
`public static bool SendUserConnectAndAuthenticate_DEPRECATED(uint unIPClient, byte pvAuthBlob, uint cubAuthBlobSize, out CSteamID pSteamIDUser)`

**Purpose:** Handles logic related to `send user connect and authenticate_ d e p r e c a t e d`.

### CreateUnauthenticatedUserConnection
`public static CSteamID CreateUnauthenticatedUserConnection()`

**Purpose:** Creates a new `unauthenticated user connection` instance or object.

### SendUserDisconnect_DEPRECATED
`public static void SendUserDisconnect_DEPRECATED(CSteamID steamIDUser)`

**Purpose:** Handles logic related to `send user disconnect_ d e p r e c a t e d`.

### BUpdateUserData
`public static bool BUpdateUserData(CSteamID steamIDUser, string pchPlayerName, uint uScore)`

**Purpose:** Handles logic related to `b update user data`.

## Usage Example

```csharp
SteamGameServer.SetProduct("example");
```

## See Also

- [Complete Class Catalog](../catalog)