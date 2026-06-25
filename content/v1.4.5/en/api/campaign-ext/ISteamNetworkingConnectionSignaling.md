---
title: "ISteamNetworkingConnectionSignaling"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ISteamNetworkingConnectionSignaling`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ISteamNetworkingConnectionSignaling

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct ISteamNetworkingConnectionSignaling`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/ISteamNetworkingConnectionSignaling.cs`

## Overview

`ISteamNetworkingConnectionSignaling` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SendSignal
`public bool SendSignal(HSteamNetConnection hConn, ref SteamNetConnectionInfo_t info, IntPtr pMsg, int cbMsg)`

**Purpose:** Handles logic related to `send signal`.

### Release
`public void Release()`

**Purpose:** Handles logic related to `release`.

## Usage Example

```csharp
var value = new ISteamNetworkingConnectionSignaling();
value.SendSignal(hConn, info, pMsg, 0);
```

## See Also

- [Complete Class Catalog](../catalog)