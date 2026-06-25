---
title: "DCSHelperVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DCSHelperVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DCSHelperVM

**Namespace:** TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DCSHelperVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/DCSHelperVM.cs`

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

**Purpose:** Refreshes the display or cache of `refresh`.

### GetPanelSubtitle
`public string GetPanelSubtitle(string serverName)`

**Purpose:** Gets the current value of `panel subtitle`.

### GetProgressCounter
`public string GetProgressCounter(int downloadedCount, int totalCount)`

**Purpose:** Gets the current value of `progress counter`.

### GetDownloadCompleteMessageSingular
`public string GetDownloadCompleteMessageSingular(string mapName)`

**Purpose:** Gets the current value of `download complete message singular`.

### GetDownloadCompleteMessagePlural
`public string GetDownloadCompleteMessagePlural(int mapCount)`

**Purpose:** Gets the current value of `download complete message plural`.

### GetReplacementConfirmationMessage
`public string GetReplacementConfirmationMessage(string mapName)`

**Purpose:** Gets the current value of `replacement confirmation message`.

### OpenPopup
`public async Task OpenPopup()`

**Purpose:** Handles logic related to `open popup`.

### ExecuteDownloadMap
`public async Task ExecuteDownloadMap()`

**Purpose:** Executes the `download map` operation or workflow.

### ExecuteCloseOrCancel
`public void ExecuteCloseOrCancel()`

**Purpose:** Executes the `close or cancel` operation or workflow.

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Executes the `close popup` operation or workflow.

### ExecuteCancelDownload
`public void ExecuteCancelDownload()`

**Purpose:** Executes the `cancel download` operation or workflow.

## Usage Example

```csharp
var value = new DCSHelperVM();
value.Refresh();
```

## See Also

- [Complete Class Catalog](../catalog)