<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamScreenshots`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamScreenshots

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamScreenshots`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamScreenshots.cs`

## Overview

`SteamScreenshots` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### WriteScreenshot
`public static ScreenshotHandle WriteScreenshot(byte pubRGB, uint cubRGB, int nWidth, int nHeight)`

**Purpose:** Handles logic related to `write screenshot`.

### AddScreenshotToLibrary
`public static ScreenshotHandle AddScreenshotToLibrary(string pchFilename, string pchThumbnailFilename, int nWidth, int nHeight)`

**Purpose:** Adds `screenshot to library` to the current collection or state.

### TriggerScreenshot
`public static void TriggerScreenshot()`

**Purpose:** Handles logic related to `trigger screenshot`.

### HookScreenshots
`public static void HookScreenshots(bool bHook)`

**Purpose:** Handles logic related to `hook screenshots`.

### SetLocation
`public static bool SetLocation(ScreenshotHandle hScreenshot, string pchLocation)`

**Purpose:** Sets the value or state of `location`.

### TagUser
`public static bool TagUser(ScreenshotHandle hScreenshot, CSteamID steamID)`

**Purpose:** Handles logic related to `tag user`.

### TagPublishedFile
`public static bool TagPublishedFile(ScreenshotHandle hScreenshot, PublishedFileId_t unPublishedFileID)`

**Purpose:** Handles logic related to `tag published file`.

### IsScreenshotsHooked
`public static bool IsScreenshotsHooked()`

**Purpose:** Handles logic related to `is screenshots hooked`.

### AddVRScreenshotToLibrary
`public static ScreenshotHandle AddVRScreenshotToLibrary(EVRScreenshotType eType, string pchFilename, string pchVRFilename)`

**Purpose:** Adds `v r screenshot to library` to the current collection or state.

## Usage Example

```csharp
SteamScreenshots.WriteScreenshot(0, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)