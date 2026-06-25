---
title: "SteamGameServerNetworkingSockets"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamGameServerNetworkingSockets`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamGameServerNetworkingSockets

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamGameServerNetworkingSockets`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamGameServerNetworkingSockets.cs`

## Overview

`SteamGameServerNetworkingSockets` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateListenSocketIP
`public static HSteamListenSocket CreateListenSocketIP(ref SteamNetworkingIPAddr localAddress, int nOptions, SteamNetworkingConfigValue_t pOptions)`

**Purpose:** Creates a new `listen socket i p` instance or object.

### ConnectByIPAddress
`public static HSteamNetConnection ConnectByIPAddress(ref SteamNetworkingIPAddr address, int nOptions, SteamNetworkingConfigValue_t pOptions)`

**Purpose:** Handles logic related to `connect by i p address`.

### CreateListenSocketP2P
`public static HSteamListenSocket CreateListenSocketP2P(int nLocalVirtualPort, int nOptions, SteamNetworkingConfigValue_t pOptions)`

**Purpose:** Creates a new `listen socket p2 p` instance or object.

### ConnectP2P
`public static HSteamNetConnection ConnectP2P(ref SteamNetworkingIdentity identityRemote, int nRemoteVirtualPort, int nOptions, SteamNetworkingConfigValue_t pOptions)`

**Purpose:** Handles logic related to `connect p2 p`.

### AcceptConnection
`public static EResult AcceptConnection(HSteamNetConnection hConn)`

**Purpose:** Handles logic related to `accept connection`.

### CloseConnection
`public static bool CloseConnection(HSteamNetConnection hPeer, int nReason, string pszDebug, bool bEnableLinger)`

**Purpose:** Handles logic related to `close connection`.

### CloseListenSocket
`public static bool CloseListenSocket(HSteamListenSocket hSocket)`

**Purpose:** Handles logic related to `close listen socket`.

### SetConnectionUserData
`public static bool SetConnectionUserData(HSteamNetConnection hPeer, long nUserData)`

**Purpose:** Sets the value or state of `connection user data`.

### GetConnectionUserData
`public static long GetConnectionUserData(HSteamNetConnection hPeer)`

**Purpose:** Gets the current value of `connection user data`.

### SetConnectionName
`public static void SetConnectionName(HSteamNetConnection hPeer, string pszName)`

**Purpose:** Sets the value or state of `connection name`.

### GetConnectionName
`public static bool GetConnectionName(HSteamNetConnection hPeer, out string pszName, int nMaxLen)`

**Purpose:** Gets the current value of `connection name`.

### SendMessageToConnection
`public static EResult SendMessageToConnection(HSteamNetConnection hConn, IntPtr pData, uint cbData, int nSendFlags, out long pOutMessageNumber)`

**Purpose:** Handles logic related to `send message to connection`.

### SendMessages
`public static void SendMessages(int nMessages, SteamNetworkingMessage_t pMessages, long pOutMessageNumberOrResult)`

**Purpose:** Handles logic related to `send messages`.

### FlushMessagesOnConnection
`public static EResult FlushMessagesOnConnection(HSteamNetConnection hConn)`

**Purpose:** Handles logic related to `flush messages on connection`.

### ReceiveMessagesOnConnection
`public static int ReceiveMessagesOnConnection(HSteamNetConnection hConn, IntPtr ppOutMessages, int nMaxMessages)`

**Purpose:** Handles logic related to `receive messages on connection`.

### GetConnectionInfo
`public static bool GetConnectionInfo(HSteamNetConnection hConn, out SteamNetConnectionInfo_t pInfo)`

**Purpose:** Gets the current value of `connection info`.

### GetConnectionRealTimeStatus
`public static EResult GetConnectionRealTimeStatus(HSteamNetConnection hConn, ref SteamNetConnectionRealTimeStatus_t pStatus, int nLanes, ref SteamNetConnectionRealTimeLaneStatus_t pLanes)`

**Purpose:** Gets the current value of `connection real time status`.

### GetDetailedConnectionStatus
`public static int GetDetailedConnectionStatus(HSteamNetConnection hConn, out string pszBuf, int cbBuf)`

**Purpose:** Gets the current value of `detailed connection status`.

### GetListenSocketAddress
`public static bool GetListenSocketAddress(HSteamListenSocket hSocket, out SteamNetworkingIPAddr address)`

**Purpose:** Gets the current value of `listen socket address`.

### CreateSocketPair
`public static bool CreateSocketPair(out HSteamNetConnection pOutConnection1, out HSteamNetConnection pOutConnection2, bool bUseNetworkLoopback, ref SteamNetworkingIdentity pIdentity1, ref SteamNetworkingIdentity pIdentity2)`

**Purpose:** Creates a new `socket pair` instance or object.

### ConfigureConnectionLanes
`public static EResult ConfigureConnectionLanes(HSteamNetConnection hConn, int nNumLanes, out int pLanePriorities, out ushort pLaneWeights)`

**Purpose:** Handles logic related to `configure connection lanes`.

### GetIdentity
`public static bool GetIdentity(out SteamNetworkingIdentity pIdentity)`

**Purpose:** Gets the current value of `identity`.

### InitAuthentication
`public static ESteamNetworkingAvailability InitAuthentication()`

**Purpose:** Initializes the state, resources, or bindings for `authentication`.

### GetAuthenticationStatus
`public static ESteamNetworkingAvailability GetAuthenticationStatus(out SteamNetAuthenticationStatus_t pDetails)`

**Purpose:** Gets the current value of `authentication status`.

### CreatePollGroup
`public static HSteamNetPollGroup CreatePollGroup()`

**Purpose:** Creates a new `poll group` instance or object.

### DestroyPollGroup
`public static bool DestroyPollGroup(HSteamNetPollGroup hPollGroup)`

**Purpose:** Handles logic related to `destroy poll group`.

### SetConnectionPollGroup
`public static bool SetConnectionPollGroup(HSteamNetConnection hConn, HSteamNetPollGroup hPollGroup)`

**Purpose:** Sets the value or state of `connection poll group`.

### ReceiveMessagesOnPollGroup
`public static int ReceiveMessagesOnPollGroup(HSteamNetPollGroup hPollGroup, IntPtr ppOutMessages, int nMaxMessages)`

**Purpose:** Handles logic related to `receive messages on poll group`.

### ReceivedRelayAuthTicket
`public static bool ReceivedRelayAuthTicket(IntPtr pvTicket, int cbTicket, out SteamDatagramRelayAuthTicket pOutParsedTicket)`

**Purpose:** Handles logic related to `received relay auth ticket`.

### FindRelayAuthTicketForServer
`public static int FindRelayAuthTicketForServer(ref SteamNetworkingIdentity identityGameServer, int nRemoteVirtualPort, out SteamDatagramRelayAuthTicket pOutParsedTicket)`

**Purpose:** Handles logic related to `find relay auth ticket for server`.

### ConnectToHostedDedicatedServer
`public static HSteamNetConnection ConnectToHostedDedicatedServer(ref SteamNetworkingIdentity identityTarget, int nRemoteVirtualPort, int nOptions, SteamNetworkingConfigValue_t pOptions)`

**Purpose:** Handles logic related to `connect to hosted dedicated server`.

### GetHostedDedicatedServerPort
`public static ushort GetHostedDedicatedServerPort()`

**Purpose:** Gets the current value of `hosted dedicated server port`.

### GetHostedDedicatedServerPOPID
`public static SteamNetworkingPOPID GetHostedDedicatedServerPOPID()`

**Purpose:** Gets the current value of `hosted dedicated server p o p i d`.

### GetHostedDedicatedServerAddress
`public static EResult GetHostedDedicatedServerAddress(out SteamDatagramHostedAddress pRouting)`

**Purpose:** Gets the current value of `hosted dedicated server address`.

### CreateHostedDedicatedServerListenSocket
`public static HSteamListenSocket CreateHostedDedicatedServerListenSocket(int nLocalVirtualPort, int nOptions, SteamNetworkingConfigValue_t pOptions)`

**Purpose:** Creates a new `hosted dedicated server listen socket` instance or object.

### GetGameCoordinatorServerLogin
`public static EResult GetGameCoordinatorServerLogin(IntPtr pLoginInfo, out int pcbSignedBlob, IntPtr pBlob)`

**Purpose:** Gets the current value of `game coordinator server login`.

### ConnectP2PCustomSignaling
`public static HSteamNetConnection ConnectP2PCustomSignaling(out ISteamNetworkingConnectionSignaling pSignaling, ref SteamNetworkingIdentity pPeerIdentity, int nRemoteVirtualPort, int nOptions, SteamNetworkingConfigValue_t pOptions)`

**Purpose:** Handles logic related to `connect p2 p custom signaling`.

### ReceivedP2PCustomSignal
`public static bool ReceivedP2PCustomSignal(IntPtr pMsg, int cbMsg, out ISteamNetworkingSignalingRecvContext pContext)`

**Purpose:** Handles logic related to `received p2 p custom signal`.

### GetCertificateRequest
`public static bool GetCertificateRequest(out int pcbBlob, IntPtr pBlob, out SteamNetworkingErrMsg errMsg)`

**Purpose:** Gets the current value of `certificate request`.

### SetCertificate
`public static bool SetCertificate(IntPtr pCertificate, int cbCertificate, out SteamNetworkingErrMsg errMsg)`

**Purpose:** Sets the value or state of `certificate`.

### ResetIdentity
`public static void ResetIdentity(ref SteamNetworkingIdentity pIdentity)`

**Purpose:** Resets `identity` to its initial state.

### RunCallbacks
`public static void RunCallbacks()`

**Purpose:** Handles logic related to `run callbacks`.

### BeginAsyncRequestFakeIP
`public static bool BeginAsyncRequestFakeIP(int nNumPorts)`

**Purpose:** Handles logic related to `begin async request fake i p`.

### GetFakeIP
`public static void GetFakeIP(int idxFirstPort, out SteamNetworkingFakeIPResult_t pInfo)`

**Purpose:** Gets the current value of `fake i p`.

### CreateListenSocketP2PFakeIP
`public static HSteamListenSocket CreateListenSocketP2PFakeIP(int idxFakePort, int nOptions, SteamNetworkingConfigValue_t pOptions)`

**Purpose:** Creates a new `listen socket p2 p fake i p` instance or object.

### GetRemoteFakeIPForConnection
`public static EResult GetRemoteFakeIPForConnection(HSteamNetConnection hConn, out SteamNetworkingIPAddr pOutAddr)`

**Purpose:** Gets the current value of `remote fake i p for connection`.

### CreateFakeUDPPort
`public static IntPtr CreateFakeUDPPort(int idxFakeServerPort)`

**Purpose:** Creates a new `fake u d p port` instance or object.

## Usage Example

```csharp
SteamGameServerNetworkingSockets.CreateListenSocketIP(localAddress, 0, pOptions);
```

## See Also

- [Complete Class Catalog](../catalog)