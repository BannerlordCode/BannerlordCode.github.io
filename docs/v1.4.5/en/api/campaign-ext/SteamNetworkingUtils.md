<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamNetworkingUtils`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamNetworkingUtils

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamNetworkingUtils`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamNetworkingUtils.cs`

## Overview

`SteamNetworkingUtils` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AllocateMessage
`public static IntPtr AllocateMessage(int cbAllocateBuffer)`

**Purpose:** Handles logic related to `allocate message`.

### InitRelayNetworkAccess
`public static void InitRelayNetworkAccess()`

**Purpose:** Initializes the state, resources, or bindings for `relay network access`.

### GetRelayNetworkStatus
`public static ESteamNetworkingAvailability GetRelayNetworkStatus(out SteamRelayNetworkStatus_t pDetails)`

**Purpose:** Gets the current value of `relay network status`.

### GetLocalPingLocation
`public static float GetLocalPingLocation(out SteamNetworkPingLocation_t result)`

**Purpose:** Gets the current value of `local ping location`.

### EstimatePingTimeBetweenTwoLocations
`public static int EstimatePingTimeBetweenTwoLocations(ref SteamNetworkPingLocation_t location1, ref SteamNetworkPingLocation_t location2)`

**Purpose:** Handles logic related to `estimate ping time between two locations`.

### EstimatePingTimeFromLocalHost
`public static int EstimatePingTimeFromLocalHost(ref SteamNetworkPingLocation_t remoteLocation)`

**Purpose:** Handles logic related to `estimate ping time from local host`.

### ConvertPingLocationToString
`public static void ConvertPingLocationToString(ref SteamNetworkPingLocation_t location, out string pszBuf, int cchBufSize)`

**Purpose:** Handles logic related to `convert ping location to string`.

### ParsePingLocationString
`public static bool ParsePingLocationString(string pszString, out SteamNetworkPingLocation_t result)`

**Purpose:** Handles logic related to `parse ping location string`.

### CheckPingDataUpToDate
`public static bool CheckPingDataUpToDate(float flMaxAgeSeconds)`

**Purpose:** Handles logic related to `check ping data up to date`.

### GetPingToDataCenter
`public static int GetPingToDataCenter(SteamNetworkingPOPID popID, out SteamNetworkingPOPID pViaRelayPoP)`

**Purpose:** Gets the current value of `ping to data center`.

### GetDirectPingToPOP
`public static int GetDirectPingToPOP(SteamNetworkingPOPID popID)`

**Purpose:** Gets the current value of `direct ping to p o p`.

### GetPOPCount
`public static int GetPOPCount()`

**Purpose:** Gets the current value of `p o p count`.

### GetPOPList
`public static int GetPOPList(out SteamNetworkingPOPID list, int nListSz)`

**Purpose:** Gets the current value of `p o p list`.

### GetLocalTimestamp
`public static SteamNetworkingMicroseconds GetLocalTimestamp()`

**Purpose:** Gets the current value of `local timestamp`.

### SetDebugOutputFunction
`public static void SetDebugOutputFunction(ESteamNetworkingSocketsDebugOutputType eDetailLevel, FSteamNetworkingSocketsDebugOutput pfnFunc)`

**Purpose:** Sets the value or state of `debug output function`.

### IsFakeIPv4
`public static bool IsFakeIPv4(uint nIPv4)`

**Purpose:** Handles logic related to `is fake i pv4`.

### GetIPv4FakeIPType
`public static ESteamNetworkingFakeIPType GetIPv4FakeIPType(uint nIPv4)`

**Purpose:** Gets the current value of `i pv4 fake i p type`.

### GetRealIdentityForFakeIP
`public static EResult GetRealIdentityForFakeIP(ref SteamNetworkingIPAddr fakeIP, out SteamNetworkingIdentity pOutRealIdentity)`

**Purpose:** Gets the current value of `real identity for fake i p`.

### SetConfigValue
`public static bool SetConfigValue(ESteamNetworkingConfigValue eValue, ESteamNetworkingConfigScope eScopeType, IntPtr scopeObj, ESteamNetworkingConfigDataType eDataType, IntPtr pArg)`

**Purpose:** Sets the value or state of `config value`.

### GetConfigValue
`public static ESteamNetworkingGetConfigValueResult GetConfigValue(ESteamNetworkingConfigValue eValue, ESteamNetworkingConfigScope eScopeType, IntPtr scopeObj, out ESteamNetworkingConfigDataType pOutDataType, IntPtr pResult, ref ulong cbResult)`

**Purpose:** Gets the current value of `config value`.

### GetConfigValueInfo
`public static string GetConfigValueInfo(ESteamNetworkingConfigValue eValue, out ESteamNetworkingConfigDataType pOutDataType, out ESteamNetworkingConfigScope pOutScope)`

**Purpose:** Gets the current value of `config value info`.

### IterateGenericEditableConfigValues
`public static ESteamNetworkingConfigValue IterateGenericEditableConfigValues(ESteamNetworkingConfigValue eCurrent, bool bEnumerateDevVars)`

**Purpose:** Handles logic related to `iterate generic editable config values`.

### SteamNetworkingIPAddr_ToString
`public static void SteamNetworkingIPAddr_ToString(ref SteamNetworkingIPAddr addr, out string buf, uint cbBuf, bool bWithPort)`

**Purpose:** Handles logic related to `steam networking i p addr_ to string`.

### SteamNetworkingIPAddr_ParseString
`public static bool SteamNetworkingIPAddr_ParseString(out SteamNetworkingIPAddr pAddr, string pszStr)`

**Purpose:** Handles logic related to `steam networking i p addr_ parse string`.

### SteamNetworkingIPAddr_GetFakeIPType
`public static ESteamNetworkingFakeIPType SteamNetworkingIPAddr_GetFakeIPType(ref SteamNetworkingIPAddr addr)`

**Purpose:** Handles logic related to `steam networking i p addr_ get fake i p type`.

### SteamNetworkingIdentity_ToString
`public static void SteamNetworkingIdentity_ToString(ref SteamNetworkingIdentity identity, out string buf, uint cbBuf)`

**Purpose:** Handles logic related to `steam networking identity_ to string`.

### SteamNetworkingIdentity_ParseString
`public static bool SteamNetworkingIdentity_ParseString(out SteamNetworkingIdentity pIdentity, string pszStr)`

**Purpose:** Handles logic related to `steam networking identity_ parse string`.

## Usage Example

```csharp
SteamNetworkingUtils.AllocateMessage(0);
```

## See Also

- [Complete Class Catalog](../catalog)