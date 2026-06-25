---
title: "ISteamNetworkingSignalingRecvContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ISteamNetworkingSignalingRecvContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ISteamNetworkingSignalingRecvContext

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct ISteamNetworkingSignalingRecvContext`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/ISteamNetworkingSignalingRecvContext.cs`

## Overview

`ISteamNetworkingSignalingRecvContext` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnConnectRequest
`public IntPtr OnConnectRequest(HSteamNetConnection hConn, ref SteamNetworkingIdentity identityPeer, int nLocalVirtualPort)`

**Purpose:** Called when the `connect request` event is raised.

### SendRejectionSignal
`public void SendRejectionSignal(ref SteamNetworkingIdentity identityPeer, IntPtr pMsg, int cbMsg)`

**Purpose:** Handles logic related to `send rejection signal`.

## Usage Example

```csharp
var value = new ISteamNetworkingSignalingRecvContext();
value.OnConnectRequest(hConn, identityPeer, 0);
```

## See Also

- [Complete Class Catalog](../catalog)