---
title: "DCSHelperVM"
description: "Auto-generated class reference for DCSHelperVM."
---
# DCSHelperVM

**Namespace:** TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DCSHelperVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/DCSHelperVM.cs`

## Overview

`DCSHelperVM` lives in `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Download` | `public string Download { get; }` |
| `Downloading` | `public string Downloading { get; }` |
| `Cancel` | `public string Cancel { get; }` |
| `Close` | `public string Close { get; }` |
| `Dismiss` | `public string Dismiss { get; }` |
| `SelectAll` | `public string SelectAll { get; }` |
| `UnselectAll` | `public string UnselectAll { get; }` |
| `DownloadPanel` | `public string DownloadPanel { get; }` |
| `DownloadComplete` | `public string DownloadComplete { get; }` |
| `DownloadFailed` | `public string DownloadFailed { get; }` |
| `Yes` | `public string Yes { get; }` |
| `No` | `public string No { get; }` |
| `IsLoading` | `public bool IsLoading { get; set; }` |
| `IsDownloading` | `public bool IsDownloading { get; set; }` |
| `ShowProgress` | `public bool ShowProgress { get; set; }` |
| `ReadyToDownload` | `public bool ReadyToDownload { get; set; }` |
| `PanelTitleText` | `public string PanelTitleText { get; set; }` |
| `DownloadButtonText` | `public string DownloadButtonText { get; set; }` |
| `CloseButtonText` | `public string CloseButtonText { get; set; }` |
| `ToggleSelectionButtonText` | `public string ToggleSelectionButtonText { get; set; }` |
| `HostAddressText` | `public string HostAddressText { get; set; }` |
| `ProgressCounterText` | `public string ProgressCounterText { get; set; }` |
| `ProgressText` | `public string ProgressText { get; set; }` |
| `DownloadRatio` | `public float DownloadRatio { get; set; }` |
| `MapList` | `public MBBindingList<DCSHelperMapItemVM> MapList { get; set; }` |

## Key Methods

### Refresh
`public void Refresh()`

**Purpose:** **Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of DCSHelperVM from the subsystem API first
DCSHelperVM dCSHelperVM = ...;
dCSHelperVM.Refresh();
```

### GetPanelSubtitle
`public string GetPanelSubtitle(string serverName)`

**Purpose:** **Purpose:** Reads and returns the panel subtitle value held by the this instance.

```csharp
// Obtain an instance of DCSHelperVM from the subsystem API first
DCSHelperVM dCSHelperVM = ...;
var result = dCSHelperVM.GetPanelSubtitle("example");
```

### GetProgressCounter
`public string GetProgressCounter(int downloadedCount, int totalCount)`

**Purpose:** **Purpose:** Reads and returns the progress counter value held by the this instance.

```csharp
// Obtain an instance of DCSHelperVM from the subsystem API first
DCSHelperVM dCSHelperVM = ...;
var result = dCSHelperVM.GetProgressCounter(0, 0);
```

### GetDownloadCompleteMessageSingular
`public string GetDownloadCompleteMessageSingular(string mapName)`

**Purpose:** **Purpose:** Reads and returns the download complete message singular value held by the this instance.

```csharp
// Obtain an instance of DCSHelperVM from the subsystem API first
DCSHelperVM dCSHelperVM = ...;
var result = dCSHelperVM.GetDownloadCompleteMessageSingular("example");
```

### GetDownloadCompleteMessagePlural
`public string GetDownloadCompleteMessagePlural(int mapCount)`

**Purpose:** **Purpose:** Reads and returns the download complete message plural value held by the this instance.

```csharp
// Obtain an instance of DCSHelperVM from the subsystem API first
DCSHelperVM dCSHelperVM = ...;
var result = dCSHelperVM.GetDownloadCompleteMessagePlural(0);
```

### GetReplacementConfirmationMessage
`public string GetReplacementConfirmationMessage(string mapName)`

**Purpose:** **Purpose:** Reads and returns the replacement confirmation message value held by the this instance.

```csharp
// Obtain an instance of DCSHelperVM from the subsystem API first
DCSHelperVM dCSHelperVM = ...;
var result = dCSHelperVM.GetReplacementConfirmationMessage("example");
```

### OpenPopup
`public async Task OpenPopup()`

**Purpose:** **Purpose:** Opens the resource or UI associated with popup.

```csharp
// Obtain an instance of DCSHelperVM from the subsystem API first
DCSHelperVM dCSHelperVM = ...;
var result = dCSHelperVM.OpenPopup();
```

### ExecuteDownloadMap
`public async Task ExecuteDownloadMap()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with download map.

```csharp
// Obtain an instance of DCSHelperVM from the subsystem API first
DCSHelperVM dCSHelperVM = ...;
var result = dCSHelperVM.ExecuteDownloadMap();
```

### ExecuteCloseOrCancel
`public void ExecuteCloseOrCancel()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close or cancel.

```csharp
// Obtain an instance of DCSHelperVM from the subsystem API first
DCSHelperVM dCSHelperVM = ...;
dCSHelperVM.ExecuteCloseOrCancel();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close popup.

```csharp
// Obtain an instance of DCSHelperVM from the subsystem API first
DCSHelperVM dCSHelperVM = ...;
dCSHelperVM.ExecuteClosePopup();
```

### ExecuteCancelDownload
`public void ExecuteCancelDownload()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with cancel download.

```csharp
// Obtain an instance of DCSHelperVM from the subsystem API first
DCSHelperVM dCSHelperVM = ...;
dCSHelperVM.ExecuteCancelDownload();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DCSHelperVM dCSHelperVM = ...;
dCSHelperVM.Refresh();
```

## See Also

- [Area Index](../)