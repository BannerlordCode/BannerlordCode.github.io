---
title: "SteamApps"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamApps`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamApps

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamApps`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamApps.cs`

## Overview

`SteamApps` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BIsSubscribed
`public static bool BIsSubscribed()`

**Purpose:** Handles logic related to `b is subscribed`.

### BIsLowViolence
`public static bool BIsLowViolence()`

**Purpose:** Handles logic related to `b is low violence`.

### BIsCybercafe
`public static bool BIsCybercafe()`

**Purpose:** Handles logic related to `b is cybercafe`.

### BIsVACBanned
`public static bool BIsVACBanned()`

**Purpose:** Handles logic related to `b is v a c banned`.

### GetCurrentGameLanguage
`public static string GetCurrentGameLanguage()`

**Purpose:** Gets the current value of `current game language`.

### GetAvailableGameLanguages
`public static string GetAvailableGameLanguages()`

**Purpose:** Gets the current value of `available game languages`.

### BIsSubscribedApp
`public static bool BIsSubscribedApp(AppId_t appID)`

**Purpose:** Handles logic related to `b is subscribed app`.

### BIsDlcInstalled
`public static bool BIsDlcInstalled(AppId_t appID)`

**Purpose:** Handles logic related to `b is dlc installed`.

### GetEarliestPurchaseUnixTime
`public static uint GetEarliestPurchaseUnixTime(AppId_t nAppID)`

**Purpose:** Gets the current value of `earliest purchase unix time`.

### BIsSubscribedFromFreeWeekend
`public static bool BIsSubscribedFromFreeWeekend()`

**Purpose:** Handles logic related to `b is subscribed from free weekend`.

### GetDLCCount
`public static int GetDLCCount()`

**Purpose:** Gets the current value of `d l c count`.

### BGetDLCDataByIndex
`public static bool BGetDLCDataByIndex(int iDLC, out AppId_t pAppID, out bool pbAvailable, out string pchName, int cchNameBufferSize)`

**Purpose:** Handles logic related to `b get d l c data by index`.

### InstallDLC
`public static void InstallDLC(AppId_t nAppID)`

**Purpose:** Handles logic related to `install d l c`.

### UninstallDLC
`public static void UninstallDLC(AppId_t nAppID)`

**Purpose:** Handles logic related to `uninstall d l c`.

### RequestAppProofOfPurchaseKey
`public static void RequestAppProofOfPurchaseKey(AppId_t nAppID)`

**Purpose:** Handles logic related to `request app proof of purchase key`.

### GetCurrentBetaName
`public static bool GetCurrentBetaName(out string pchName, int cchNameBufferSize)`

**Purpose:** Gets the current value of `current beta name`.

### MarkContentCorrupt
`public static bool MarkContentCorrupt(bool bMissingFilesOnly)`

**Purpose:** Handles logic related to `mark content corrupt`.

### GetInstalledDepots
`public static uint GetInstalledDepots(AppId_t appID, DepotId_t pvecDepots, uint cMaxDepots)`

**Purpose:** Gets the current value of `installed depots`.

### GetAppInstallDir
`public static uint GetAppInstallDir(AppId_t appID, out string pchFolder, uint cchFolderBufferSize)`

**Purpose:** Gets the current value of `app install dir`.

### BIsAppInstalled
`public static bool BIsAppInstalled(AppId_t appID)`

**Purpose:** Handles logic related to `b is app installed`.

### GetAppOwner
`public static CSteamID GetAppOwner()`

**Purpose:** Gets the current value of `app owner`.

### GetLaunchQueryParam
`public static string GetLaunchQueryParam(string pchKey)`

**Purpose:** Gets the current value of `launch query param`.

### GetDlcDownloadProgress
`public static bool GetDlcDownloadProgress(AppId_t nAppID, out ulong punBytesDownloaded, out ulong punBytesTotal)`

**Purpose:** Gets the current value of `dlc download progress`.

### GetAppBuildId
`public static int GetAppBuildId()`

**Purpose:** Gets the current value of `app build id`.

### RequestAllProofOfPurchaseKeys
`public static void RequestAllProofOfPurchaseKeys()`

**Purpose:** Handles logic related to `request all proof of purchase keys`.

### GetFileDetails
`public static SteamAPICall_t GetFileDetails(string pszFileName)`

**Purpose:** Gets the current value of `file details`.

### GetLaunchCommandLine
`public static int GetLaunchCommandLine(out string pszCommandLine, int cubCommandLine)`

**Purpose:** Gets the current value of `launch command line`.

### BIsSubscribedFromFamilySharing
`public static bool BIsSubscribedFromFamilySharing()`

**Purpose:** Handles logic related to `b is subscribed from family sharing`.

### BIsTimedTrial
`public static bool BIsTimedTrial(out uint punSecondsAllowed, out uint punSecondsPlayed)`

**Purpose:** Handles logic related to `b is timed trial`.

## Usage Example

```csharp
SteamApps.BIsSubscribed();
```

## See Also

- [Complete Class Catalog](../catalog)