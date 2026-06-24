<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamNetworkingIdentity`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamNetworkingIdentity

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct SteamNetworkingIdentity : IEquatable<SteamNetworkingIdentity>`
**Base:** `IEquatable<SteamNetworkingIdentity>`
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamNetworkingIdentity.cs`

## Overview

`SteamNetworkingIdentity` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### IsInvalid
`public bool IsInvalid()`

**Purpose:** Handles logic related to `is invalid`.

### SetSteamID
`public void SetSteamID(CSteamID steamID)`

**Purpose:** Sets the value or state of `steam i d`.

### GetSteamID
`public CSteamID GetSteamID()`

**Purpose:** Gets the current value of `steam i d`.

### SetSteamID64
`public void SetSteamID64(ulong steamID)`

**Purpose:** Sets the value or state of `steam i d64`.

### GetSteamID64
`public ulong GetSteamID64()`

**Purpose:** Gets the current value of `steam i d64`.

### SetIPAddr
`public void SetIPAddr(SteamNetworkingIPAddr addr)`

**Purpose:** Sets the value or state of `i p addr`.

### GetIPAddr
`public SteamNetworkingIPAddr GetIPAddr()`

**Purpose:** Gets the current value of `i p addr`.

### SetIPv4Addr
`public void SetIPv4Addr(uint nIPv4, ushort nPort)`

**Purpose:** Sets the value or state of `i pv4 addr`.

### GetIPv4
`public uint GetIPv4()`

**Purpose:** Gets the current value of `i pv4`.

### GetFakeIPType
`public ESteamNetworkingFakeIPType GetFakeIPType()`

**Purpose:** Gets the current value of `fake i p type`.

### IsFakeIP
`public bool IsFakeIP()`

**Purpose:** Handles logic related to `is fake i p`.

### SetLocalHost
`public void SetLocalHost()`

**Purpose:** Sets the value or state of `local host`.

### IsLocalHost
`public bool IsLocalHost()`

**Purpose:** Handles logic related to `is local host`.

### SetGenericString
`public bool SetGenericString(string pszString)`

**Purpose:** Sets the value or state of `generic string`.

### GetGenericString
`public string GetGenericString()`

**Purpose:** Gets the current value of `generic string`.

### SetGenericBytes
`public bool SetGenericBytes(byte data, uint cbLen)`

**Purpose:** Sets the value or state of `generic bytes`.

### GetGenericBytes
`public byte GetGenericBytes(out int cbLen)`

**Purpose:** Gets the current value of `generic bytes`.

### Equals
`public bool Equals(SteamNetworkingIdentity x)`

**Purpose:** Handles logic related to `equals`.

### ToString
`public void ToString(out string buf)`

**Purpose:** Handles logic related to `to string`.

### ParseString
`public bool ParseString(string pszStr)`

**Purpose:** Handles logic related to `parse string`.

## Usage Example

```csharp
var value = new SteamNetworkingIdentity();
value.Clear();
```

## See Also

- [Complete Class Catalog](../catalog)