<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamNetworking`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamNetworking

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamNetworking`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamNetworking.cs`

## Overview

`SteamNetworking` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SendP2PPacket
`public static bool SendP2PPacket(CSteamID steamIDRemote, byte pubData, uint cubData, EP2PSend eP2PSendType, int nChannel = 0)`

**Purpose:** Handles logic related to `send p2 p packet`.

### IsP2PPacketAvailable
`public static bool IsP2PPacketAvailable(out uint pcubMsgSize, int nChannel = 0)`

**Purpose:** Handles logic related to `is p2 p packet available`.

### ReadP2PPacket
`public static bool ReadP2PPacket(byte pubDest, uint cubDest, out uint pcubMsgSize, out CSteamID psteamIDRemote, int nChannel = 0)`

**Purpose:** Handles logic related to `read p2 p packet`.

### AcceptP2PSessionWithUser
`public static bool AcceptP2PSessionWithUser(CSteamID steamIDRemote)`

**Purpose:** Handles logic related to `accept p2 p session with user`.

### CloseP2PSessionWithUser
`public static bool CloseP2PSessionWithUser(CSteamID steamIDRemote)`

**Purpose:** Handles logic related to `close p2 p session with user`.

### CloseP2PChannelWithUser
`public static bool CloseP2PChannelWithUser(CSteamID steamIDRemote, int nChannel)`

**Purpose:** Handles logic related to `close p2 p channel with user`.

### GetP2PSessionState
`public static bool GetP2PSessionState(CSteamID steamIDRemote, out P2PSessionState_t pConnectionState)`

**Purpose:** Gets the current value of `p2 p session state`.

### AllowP2PPacketRelay
`public static bool AllowP2PPacketRelay(bool bAllow)`

**Purpose:** Handles logic related to `allow p2 p packet relay`.

### CreateListenSocket
`public static SNetListenSocket_t CreateListenSocket(int nVirtualP2PPort, SteamIPAddress_t nIP, ushort nPort, bool bAllowUseOfPacketRelay)`

**Purpose:** Creates a new `listen socket` instance or object.

### CreateP2PConnectionSocket
`public static SNetSocket_t CreateP2PConnectionSocket(CSteamID steamIDTarget, int nVirtualPort, int nTimeoutSec, bool bAllowUseOfPacketRelay)`

**Purpose:** Creates a new `p2 p connection socket` instance or object.

### CreateConnectionSocket
`public static SNetSocket_t CreateConnectionSocket(SteamIPAddress_t nIP, ushort nPort, int nTimeoutSec)`

**Purpose:** Creates a new `connection socket` instance or object.

### DestroySocket
`public static bool DestroySocket(SNetSocket_t hSocket, bool bNotifyRemoteEnd)`

**Purpose:** Handles logic related to `destroy socket`.

### DestroyListenSocket
`public static bool DestroyListenSocket(SNetListenSocket_t hSocket, bool bNotifyRemoteEnd)`

**Purpose:** Handles logic related to `destroy listen socket`.

### SendDataOnSocket
`public static bool SendDataOnSocket(SNetSocket_t hSocket, byte pubData, uint cubData, bool bReliable)`

**Purpose:** Handles logic related to `send data on socket`.

### IsDataAvailableOnSocket
`public static bool IsDataAvailableOnSocket(SNetSocket_t hSocket, out uint pcubMsgSize)`

**Purpose:** Handles logic related to `is data available on socket`.

### RetrieveDataFromSocket
`public static bool RetrieveDataFromSocket(SNetSocket_t hSocket, byte pubDest, uint cubDest, out uint pcubMsgSize)`

**Purpose:** Handles logic related to `retrieve data from socket`.

### IsDataAvailable
`public static bool IsDataAvailable(SNetListenSocket_t hListenSocket, out uint pcubMsgSize, out SNetSocket_t phSocket)`

**Purpose:** Handles logic related to `is data available`.

### RetrieveData
`public static bool RetrieveData(SNetListenSocket_t hListenSocket, byte pubDest, uint cubDest, out uint pcubMsgSize, out SNetSocket_t phSocket)`

**Purpose:** Handles logic related to `retrieve data`.

### GetSocketInfo
`public static bool GetSocketInfo(SNetSocket_t hSocket, out CSteamID pSteamIDRemote, out int peSocketStatus, out SteamIPAddress_t punIPRemote, out ushort punPortRemote)`

**Purpose:** Gets the current value of `socket info`.

### GetListenSocketInfo
`public static bool GetListenSocketInfo(SNetListenSocket_t hListenSocket, out SteamIPAddress_t pnIP, out ushort pnPort)`

**Purpose:** Gets the current value of `listen socket info`.

### GetSocketConnectionType
`public static ESNetSocketConnectionType GetSocketConnectionType(SNetSocket_t hSocket)`

**Purpose:** Gets the current value of `socket connection type`.

### GetMaxPacketSize
`public static int GetMaxPacketSize(SNetSocket_t hSocket)`

**Purpose:** Gets the current value of `max packet size`.

## Usage Example

```csharp
SteamNetworking.SendP2PPacket(steamIDRemote, 0, 0, eP2PSendType, 0);
```

## See Also

- [Complete Class Catalog](../catalog)