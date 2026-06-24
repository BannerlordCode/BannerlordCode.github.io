<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamNetworkingIPAddr`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamNetworkingIPAddr

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct SteamNetworkingIPAddr : IEquatable<SteamNetworkingIPAddr>`
**Base:** `IEquatable<SteamNetworkingIPAddr>`
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamNetworkingIPAddr.cs`

## Overview

`SteamNetworkingIPAddr` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### IsIPv6AllZeros
`public bool IsIPv6AllZeros()`

**Purpose:** Handles logic related to `is i pv6 all zeros`.

### SetIPv6
`public void SetIPv6(byte ipv6, ushort nPort)`

**Purpose:** Sets the value or state of `i pv6`.

### SetIPv4
`public void SetIPv4(uint nIP, ushort nPort)`

**Purpose:** Sets the value or state of `i pv4`.

### IsIPv4
`public bool IsIPv4()`

**Purpose:** Handles logic related to `is i pv4`.

### GetIPv4
`public uint GetIPv4()`

**Purpose:** Gets the current value of `i pv4`.

### SetIPv6LocalHost
`public void SetIPv6LocalHost(ushort nPort = 0)`

**Purpose:** Sets the value or state of `i pv6 local host`.

### IsLocalHost
`public bool IsLocalHost()`

**Purpose:** Handles logic related to `is local host`.

### ToString
`public void ToString(out string buf, bool bWithPort)`

**Purpose:** Handles logic related to `to string`.

### ParseString
`public bool ParseString(string pszStr)`

**Purpose:** Handles logic related to `parse string`.

### Equals
`public bool Equals(SteamNetworkingIPAddr x)`

**Purpose:** Handles logic related to `equals`.

### GetFakeIPType
`public ESteamNetworkingFakeIPType GetFakeIPType()`

**Purpose:** Gets the current value of `fake i p type`.

### IsFakeIP
`public bool IsFakeIP()`

**Purpose:** Handles logic related to `is fake i p`.

## Usage Example

```csharp
var value = new SteamNetworkingIPAddr();
value.Clear();
```

## See Also

- [Complete Class Catalog](../catalog)