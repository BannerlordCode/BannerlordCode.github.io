---
title: "SteamMatchmaking"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamMatchmaking`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamMatchmaking

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamMatchmaking`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamMatchmaking.cs`

## Overview

`SteamMatchmaking` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetFavoriteGameCount
`public static int GetFavoriteGameCount()`

**Purpose:** Gets the current value of `favorite game count`.

### GetFavoriteGame
`public static bool GetFavoriteGame(int iGame, out AppId_t pnAppID, out uint pnIP, out ushort pnConnPort, out ushort pnQueryPort, out uint punFlags, out uint pRTime32LastPlayedOnServer)`

**Purpose:** Gets the current value of `favorite game`.

### AddFavoriteGame
`public static int AddFavoriteGame(AppId_t nAppID, uint nIP, ushort nConnPort, ushort nQueryPort, uint unFlags, uint rTime32LastPlayedOnServer)`

**Purpose:** Adds `favorite game` to the current collection or state.

### RemoveFavoriteGame
`public static bool RemoveFavoriteGame(AppId_t nAppID, uint nIP, ushort nConnPort, ushort nQueryPort, uint unFlags)`

**Purpose:** Removes `favorite game` from the current collection or state.

### RequestLobbyList
`public static SteamAPICall_t RequestLobbyList()`

**Purpose:** Handles logic related to `request lobby list`.

### AddRequestLobbyListStringFilter
`public static void AddRequestLobbyListStringFilter(string pchKeyToMatch, string pchValueToMatch, ELobbyComparison eComparisonType)`

**Purpose:** Adds `request lobby list string filter` to the current collection or state.

### AddRequestLobbyListNumericalFilter
`public static void AddRequestLobbyListNumericalFilter(string pchKeyToMatch, int nValueToMatch, ELobbyComparison eComparisonType)`

**Purpose:** Adds `request lobby list numerical filter` to the current collection or state.

### AddRequestLobbyListNearValueFilter
`public static void AddRequestLobbyListNearValueFilter(string pchKeyToMatch, int nValueToBeCloseTo)`

**Purpose:** Adds `request lobby list near value filter` to the current collection or state.

### AddRequestLobbyListFilterSlotsAvailable
`public static void AddRequestLobbyListFilterSlotsAvailable(int nSlotsAvailable)`

**Purpose:** Adds `request lobby list filter slots available` to the current collection or state.

### AddRequestLobbyListDistanceFilter
`public static void AddRequestLobbyListDistanceFilter(ELobbyDistanceFilter eLobbyDistanceFilter)`

**Purpose:** Adds `request lobby list distance filter` to the current collection or state.

### AddRequestLobbyListResultCountFilter
`public static void AddRequestLobbyListResultCountFilter(int cMaxResults)`

**Purpose:** Adds `request lobby list result count filter` to the current collection or state.

### AddRequestLobbyListCompatibleMembersFilter
`public static void AddRequestLobbyListCompatibleMembersFilter(CSteamID steamIDLobby)`

**Purpose:** Adds `request lobby list compatible members filter` to the current collection or state.

### GetLobbyByIndex
`public static CSteamID GetLobbyByIndex(int iLobby)`

**Purpose:** Gets the current value of `lobby by index`.

### CreateLobby
`public static SteamAPICall_t CreateLobby(ELobbyType eLobbyType, int cMaxMembers)`

**Purpose:** Creates a new `lobby` instance or object.

### JoinLobby
`public static SteamAPICall_t JoinLobby(CSteamID steamIDLobby)`

**Purpose:** Handles logic related to `join lobby`.

### LeaveLobby
`public static void LeaveLobby(CSteamID steamIDLobby)`

**Purpose:** Handles logic related to `leave lobby`.

### InviteUserToLobby
`public static bool InviteUserToLobby(CSteamID steamIDLobby, CSteamID steamIDInvitee)`

**Purpose:** Handles logic related to `invite user to lobby`.

### GetNumLobbyMembers
`public static int GetNumLobbyMembers(CSteamID steamIDLobby)`

**Purpose:** Gets the current value of `num lobby members`.

### GetLobbyMemberByIndex
`public static CSteamID GetLobbyMemberByIndex(CSteamID steamIDLobby, int iMember)`

**Purpose:** Gets the current value of `lobby member by index`.

### GetLobbyData
`public static string GetLobbyData(CSteamID steamIDLobby, string pchKey)`

**Purpose:** Gets the current value of `lobby data`.

### SetLobbyData
`public static bool SetLobbyData(CSteamID steamIDLobby, string pchKey, string pchValue)`

**Purpose:** Sets the value or state of `lobby data`.

### GetLobbyDataCount
`public static int GetLobbyDataCount(CSteamID steamIDLobby)`

**Purpose:** Gets the current value of `lobby data count`.

### GetLobbyDataByIndex
`public static bool GetLobbyDataByIndex(CSteamID steamIDLobby, int iLobbyData, out string pchKey, int cchKeyBufferSize, out string pchValue, int cchValueBufferSize)`

**Purpose:** Gets the current value of `lobby data by index`.

### DeleteLobbyData
`public static bool DeleteLobbyData(CSteamID steamIDLobby, string pchKey)`

**Purpose:** Handles logic related to `delete lobby data`.

### GetLobbyMemberData
`public static string GetLobbyMemberData(CSteamID steamIDLobby, CSteamID steamIDUser, string pchKey)`

**Purpose:** Gets the current value of `lobby member data`.

### SetLobbyMemberData
`public static void SetLobbyMemberData(CSteamID steamIDLobby, string pchKey, string pchValue)`

**Purpose:** Sets the value or state of `lobby member data`.

### SendLobbyChatMsg
`public static bool SendLobbyChatMsg(CSteamID steamIDLobby, byte pvMsgBody, int cubMsgBody)`

**Purpose:** Handles logic related to `send lobby chat msg`.

### GetLobbyChatEntry
`public static int GetLobbyChatEntry(CSteamID steamIDLobby, int iChatID, out CSteamID pSteamIDUser, byte pvData, int cubData, out EChatEntryType peChatEntryType)`

**Purpose:** Gets the current value of `lobby chat entry`.

### RequestLobbyData
`public static bool RequestLobbyData(CSteamID steamIDLobby)`

**Purpose:** Handles logic related to `request lobby data`.

### SetLobbyGameServer
`public static void SetLobbyGameServer(CSteamID steamIDLobby, uint unGameServerIP, ushort unGameServerPort, CSteamID steamIDGameServer)`

**Purpose:** Sets the value or state of `lobby game server`.

### GetLobbyGameServer
`public static bool GetLobbyGameServer(CSteamID steamIDLobby, out uint punGameServerIP, out ushort punGameServerPort, out CSteamID psteamIDGameServer)`

**Purpose:** Gets the current value of `lobby game server`.

### SetLobbyMemberLimit
`public static bool SetLobbyMemberLimit(CSteamID steamIDLobby, int cMaxMembers)`

**Purpose:** Sets the value or state of `lobby member limit`.

### GetLobbyMemberLimit
`public static int GetLobbyMemberLimit(CSteamID steamIDLobby)`

**Purpose:** Gets the current value of `lobby member limit`.

### SetLobbyType
`public static bool SetLobbyType(CSteamID steamIDLobby, ELobbyType eLobbyType)`

**Purpose:** Sets the value or state of `lobby type`.

### SetLobbyJoinable
`public static bool SetLobbyJoinable(CSteamID steamIDLobby, bool bLobbyJoinable)`

**Purpose:** Sets the value or state of `lobby joinable`.

### GetLobbyOwner
`public static CSteamID GetLobbyOwner(CSteamID steamIDLobby)`

**Purpose:** Gets the current value of `lobby owner`.

### SetLobbyOwner
`public static bool SetLobbyOwner(CSteamID steamIDLobby, CSteamID steamIDNewOwner)`

**Purpose:** Sets the value or state of `lobby owner`.

### SetLinkedLobby
`public static bool SetLinkedLobby(CSteamID steamIDLobby, CSteamID steamIDLobbyDependent)`

**Purpose:** Sets the value or state of `linked lobby`.

## Usage Example

```csharp
SteamMatchmaking.GetFavoriteGameCount();
```

## See Also

- [Complete Class Catalog](../catalog)