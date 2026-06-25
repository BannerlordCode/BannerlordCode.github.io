---
title: "SteamAppList"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamAppList`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamAppList

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamAppList`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamAppList.cs`

## Overview

`SteamAppList` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetNumInstalledApps
`public static uint GetNumInstalledApps()`

**Purpose:** Gets the current value of `num installed apps`.

### GetInstalledApps
`public static uint GetInstalledApps(AppId_t pvecAppID, uint unMaxAppIDs)`

**Purpose:** Gets the current value of `installed apps`.

### GetAppName
`public static int GetAppName(AppId_t nAppID, out string pchName, int cchNameMax)`

**Purpose:** Gets the current value of `app name`.

### GetAppInstallDir
`public static int GetAppInstallDir(AppId_t nAppID, out string pchDirectory, int cchNameMax)`

**Purpose:** Gets the current value of `app install dir`.

### GetAppBuildId
`public static int GetAppBuildId(AppId_t nAppID)`

**Purpose:** Gets the current value of `app build id`.

## Usage Example

```csharp
SteamAppList.GetNumInstalledApps();
```

## See Also

- [Complete Class Catalog](../catalog)