<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamVideo`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamVideo

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamVideo`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamVideo.cs`

## Overview

`SteamVideo` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetVideoURL
`public static void GetVideoURL(AppId_t unVideoAppID)`

**Purpose:** Gets the current value of `video u r l`.

### IsBroadcasting
`public static bool IsBroadcasting(out int pnNumViewers)`

**Purpose:** Handles logic related to `is broadcasting`.

### GetOPFSettings
`public static void GetOPFSettings(AppId_t unVideoAppID)`

**Purpose:** Gets the current value of `o p f settings`.

### GetOPFStringForApp
`public static bool GetOPFStringForApp(AppId_t unVideoAppID, out string pchBuffer, ref int pnBufferSize)`

**Purpose:** Gets the current value of `o p f string for app`.

## Usage Example

```csharp
SteamVideo.GetVideoURL(unVideoAppID);
```

## See Also

- [Complete Class Catalog](../catalog)