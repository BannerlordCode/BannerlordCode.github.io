---
title: "IMatchmaking"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IMatchmaking`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IMatchmaking

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IMatchmaking : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IMatchmaking.cs`

## Overview

`IMatchmaking` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public virtual void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### SendLobbyMessage
`public bool SendLobbyMessage(GalaxyID lobbyID, string msg)`

**Purpose:** Handles logic related to `send lobby message`.

### GetLobbyMessage
`public uint GetLobbyMessage(GalaxyID lobbyID, uint messageID, ref GalaxyID _senderID, out string msg, uint internalBufferLen = 1024u)`

**Purpose:** Gets the current value of `lobby message`.

### CreateLobby
`public virtual void CreateLobby(LobbyType lobbyType, uint maxMembers, bool joinable, LobbyTopologyType lobbyTopologyType, ILobbyCreatedListener lobbyCreatedListener, ILobbyEnteredListener lobbyEnteredListener)`

**Purpose:** Creates a new `lobby` instance or object.

### CreateLobby
`public virtual void CreateLobby(LobbyType lobbyType, uint maxMembers, bool joinable, LobbyTopologyType lobbyTopologyType, ILobbyCreatedListener lobbyCreatedListener)`

**Purpose:** Creates a new `lobby` instance or object.

### CreateLobby
`public virtual void CreateLobby(LobbyType lobbyType, uint maxMembers, bool joinable, LobbyTopologyType lobbyTopologyType)`

**Purpose:** Creates a new `lobby` instance or object.

### RequestLobbyList
`public virtual void RequestLobbyList(bool allowFullLobbies, ILobbyListListener listener)`

**Purpose:** Handles logic related to `request lobby list`.

### RequestLobbyList
`public virtual void RequestLobbyList(bool allowFullLobbies)`

**Purpose:** Handles logic related to `request lobby list`.

### RequestLobbyList
`public virtual void RequestLobbyList()`

**Purpose:** Handles logic related to `request lobby list`.

### AddRequestLobbyListResultCountFilter
`public virtual void AddRequestLobbyListResultCountFilter(uint limit)`

**Purpose:** Adds `request lobby list result count filter` to the current collection or state.

### AddRequestLobbyListStringFilter
`public virtual void AddRequestLobbyListStringFilter(string keyToMatch, string valueToMatch, LobbyComparisonType comparisonType)`

**Purpose:** Adds `request lobby list string filter` to the current collection or state.

### AddRequestLobbyListNumericalFilter
`public virtual void AddRequestLobbyListNumericalFilter(string keyToMatch, int valueToMatch, LobbyComparisonType comparisonType)`

**Purpose:** Adds `request lobby list numerical filter` to the current collection or state.

### AddRequestLobbyListNearValueFilter
`public virtual void AddRequestLobbyListNearValueFilter(string keyToMatch, int valueToBeCloseTo)`

**Purpose:** Adds `request lobby list near value filter` to the current collection or state.

### GetLobbyByIndex
`public virtual GalaxyID GetLobbyByIndex(uint index)`

**Purpose:** Gets the current value of `lobby by index`.

### JoinLobby
`public virtual void JoinLobby(GalaxyID lobbyID, ILobbyEnteredListener listener)`

**Purpose:** Handles logic related to `join lobby`.

### JoinLobby
`public virtual void JoinLobby(GalaxyID lobbyID)`

**Purpose:** Handles logic related to `join lobby`.

### LeaveLobby
`public virtual void LeaveLobby(GalaxyID lobbyID, ILobbyLeftListener listener)`

**Purpose:** Handles logic related to `leave lobby`.

### LeaveLobby
`public virtual void LeaveLobby(GalaxyID lobbyID)`

**Purpose:** Handles logic related to `leave lobby`.

### SetMaxNumLobbyMembers
`public virtual void SetMaxNumLobbyMembers(GalaxyID lobbyID, uint maxNumLobbyMembers, ILobbyDataUpdateListener listener)`

**Purpose:** Sets the value or state of `max num lobby members`.

### SetMaxNumLobbyMembers
`public virtual void SetMaxNumLobbyMembers(GalaxyID lobbyID, uint maxNumLobbyMembers)`

**Purpose:** Sets the value or state of `max num lobby members`.

### GetMaxNumLobbyMembers
`public virtual uint GetMaxNumLobbyMembers(GalaxyID lobbyID)`

**Purpose:** Gets the current value of `max num lobby members`.

### GetNumLobbyMembers
`public virtual uint GetNumLobbyMembers(GalaxyID lobbyID)`

**Purpose:** Gets the current value of `num lobby members`.

### GetLobbyMemberByIndex
`public virtual GalaxyID GetLobbyMemberByIndex(GalaxyID lobbyID, uint index)`

**Purpose:** Gets the current value of `lobby member by index`.

### SetLobbyType
`public virtual void SetLobbyType(GalaxyID lobbyID, LobbyType lobbyType, ILobbyDataUpdateListener listener)`

**Purpose:** Sets the value or state of `lobby type`.

### SetLobbyType
`public virtual void SetLobbyType(GalaxyID lobbyID, LobbyType lobbyType)`

**Purpose:** Sets the value or state of `lobby type`.

### GetLobbyType
`public virtual LobbyType GetLobbyType(GalaxyID lobbyID)`

**Purpose:** Gets the current value of `lobby type`.

### SetLobbyJoinable
`public virtual void SetLobbyJoinable(GalaxyID lobbyID, bool joinable, ILobbyDataUpdateListener listener)`

**Purpose:** Sets the value or state of `lobby joinable`.

### SetLobbyJoinable
`public virtual void SetLobbyJoinable(GalaxyID lobbyID, bool joinable)`

**Purpose:** Sets the value or state of `lobby joinable`.

### IsLobbyJoinable
`public virtual bool IsLobbyJoinable(GalaxyID lobbyID)`

**Purpose:** Handles logic related to `is lobby joinable`.

### RequestLobbyData
`public virtual void RequestLobbyData(GalaxyID lobbyID, ILobbyDataRetrieveListener listener)`

**Purpose:** Handles logic related to `request lobby data`.

### RequestLobbyData
`public virtual void RequestLobbyData(GalaxyID lobbyID)`

**Purpose:** Handles logic related to `request lobby data`.

### GetLobbyData
`public virtual string GetLobbyData(GalaxyID lobbyID, string key)`

**Purpose:** Gets the current value of `lobby data`.

### GetLobbyDataCopy
`public virtual void GetLobbyDataCopy(GalaxyID lobbyID, string key, out string buffer, uint bufferLength)`

**Purpose:** Gets the current value of `lobby data copy`.

### SetLobbyData
`public virtual void SetLobbyData(GalaxyID lobbyID, string key, string value, ILobbyDataUpdateListener listener)`

**Purpose:** Sets the value or state of `lobby data`.

### SetLobbyData
`public virtual void SetLobbyData(GalaxyID lobbyID, string key, string value)`

**Purpose:** Sets the value or state of `lobby data`.

### GetLobbyDataCount
`public virtual uint GetLobbyDataCount(GalaxyID lobbyID)`

**Purpose:** Gets the current value of `lobby data count`.

### GetLobbyDataByIndex
`public virtual bool GetLobbyDataByIndex(GalaxyID lobbyID, uint index, ref byte key, uint keyLength, ref byte value, uint valueLength)`

**Purpose:** Gets the current value of `lobby data by index`.

### DeleteLobbyData
`public virtual void DeleteLobbyData(GalaxyID lobbyID, string key, ILobbyDataUpdateListener listener)`

**Purpose:** Handles logic related to `delete lobby data`.

### DeleteLobbyData
`public virtual void DeleteLobbyData(GalaxyID lobbyID, string key)`

**Purpose:** Handles logic related to `delete lobby data`.

### GetLobbyMemberData
`public virtual string GetLobbyMemberData(GalaxyID lobbyID, GalaxyID memberID, string key)`

**Purpose:** Gets the current value of `lobby member data`.

### GetLobbyMemberDataCopy
`public virtual void GetLobbyMemberDataCopy(GalaxyID lobbyID, GalaxyID memberID, string key, out string buffer, uint bufferLength)`

**Purpose:** Gets the current value of `lobby member data copy`.

### SetLobbyMemberData
`public virtual void SetLobbyMemberData(GalaxyID lobbyID, string key, string value, ILobbyMemberDataUpdateListener listener)`

**Purpose:** Sets the value or state of `lobby member data`.

### SetLobbyMemberData
`public virtual void SetLobbyMemberData(GalaxyID lobbyID, string key, string value)`

**Purpose:** Sets the value or state of `lobby member data`.

### GetLobbyMemberDataCount
`public virtual uint GetLobbyMemberDataCount(GalaxyID lobbyID, GalaxyID memberID)`

**Purpose:** Gets the current value of `lobby member data count`.

### GetLobbyMemberDataByIndex
`public virtual bool GetLobbyMemberDataByIndex(GalaxyID lobbyID, GalaxyID memberID, uint index, ref byte key, uint keyLength, ref byte value, uint valueLength)`

**Purpose:** Gets the current value of `lobby member data by index`.

### DeleteLobbyMemberData
`public virtual void DeleteLobbyMemberData(GalaxyID lobbyID, string key, ILobbyMemberDataUpdateListener listener)`

**Purpose:** Handles logic related to `delete lobby member data`.

### DeleteLobbyMemberData
`public virtual void DeleteLobbyMemberData(GalaxyID lobbyID, string key)`

**Purpose:** Handles logic related to `delete lobby member data`.

### GetLobbyOwner
`public virtual GalaxyID GetLobbyOwner(GalaxyID lobbyID)`

**Purpose:** Gets the current value of `lobby owner`.

### SendLobbyMessage
`public virtual bool SendLobbyMessage(GalaxyID lobbyID, byte data, uint dataSize)`

**Purpose:** Handles logic related to `send lobby message`.

### GetLobbyMessage
`public virtual uint GetLobbyMessage(GalaxyID lobbyID, uint messageID, ref GalaxyID senderID, ref byte msg, uint msgLength)`

**Purpose:** Gets the current value of `lobby message`.

## Usage Example

```csharp
var value = new IMatchmaking();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)