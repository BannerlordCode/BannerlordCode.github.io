---
title: "DCSHelperVM"
description: "DCSHelperVM 的自动生成类参考。"
---
# DCSHelperVM

**Namespace:** TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DCSHelperVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/DCSHelperVM.cs`

## 概述

`DCSHelperVM` 位于 `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 DCSHelperVM 实例
DCSHelperVM dCSHelperVM = ...;
dCSHelperVM.Refresh();
```

### GetPanelSubtitle
`public string GetPanelSubtitle(string serverName)`

**用途 / Purpose:** 读取并返回当前对象中 panel subtitle 的结果。

```csharp
// 先通过子系统 API 拿到 DCSHelperVM 实例
DCSHelperVM dCSHelperVM = ...;
var result = dCSHelperVM.GetPanelSubtitle("example");
```

### GetProgressCounter
`public string GetProgressCounter(int downloadedCount, int totalCount)`

**用途 / Purpose:** 读取并返回当前对象中 progress counter 的结果。

```csharp
// 先通过子系统 API 拿到 DCSHelperVM 实例
DCSHelperVM dCSHelperVM = ...;
var result = dCSHelperVM.GetProgressCounter(0, 0);
```

### GetDownloadCompleteMessageSingular
`public string GetDownloadCompleteMessageSingular(string mapName)`

**用途 / Purpose:** 读取并返回当前对象中 download complete message singular 的结果。

```csharp
// 先通过子系统 API 拿到 DCSHelperVM 实例
DCSHelperVM dCSHelperVM = ...;
var result = dCSHelperVM.GetDownloadCompleteMessageSingular("example");
```

### GetDownloadCompleteMessagePlural
`public string GetDownloadCompleteMessagePlural(int mapCount)`

**用途 / Purpose:** 读取并返回当前对象中 download complete message plural 的结果。

```csharp
// 先通过子系统 API 拿到 DCSHelperVM 实例
DCSHelperVM dCSHelperVM = ...;
var result = dCSHelperVM.GetDownloadCompleteMessagePlural(0);
```

### GetReplacementConfirmationMessage
`public string GetReplacementConfirmationMessage(string mapName)`

**用途 / Purpose:** 读取并返回当前对象中 replacement confirmation message 的结果。

```csharp
// 先通过子系统 API 拿到 DCSHelperVM 实例
DCSHelperVM dCSHelperVM = ...;
var result = dCSHelperVM.GetReplacementConfirmationMessage("example");
```

### OpenPopup
`public async Task OpenPopup()`

**用途 / Purpose:** 打开popup对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 DCSHelperVM 实例
DCSHelperVM dCSHelperVM = ...;
var result = dCSHelperVM.OpenPopup();
```

### ExecuteDownloadMap
`public async Task ExecuteDownloadMap()`

**用途 / Purpose:** 执行 download map 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 DCSHelperVM 实例
DCSHelperVM dCSHelperVM = ...;
var result = dCSHelperVM.ExecuteDownloadMap();
```

### ExecuteCloseOrCancel
`public void ExecuteCloseOrCancel()`

**用途 / Purpose:** 执行 close or cancel 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 DCSHelperVM 实例
DCSHelperVM dCSHelperVM = ...;
dCSHelperVM.ExecuteCloseOrCancel();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 close popup 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 DCSHelperVM 实例
DCSHelperVM dCSHelperVM = ...;
dCSHelperVM.ExecuteClosePopup();
```

### ExecuteCancelDownload
`public void ExecuteCancelDownload()`

**用途 / Purpose:** 执行 cancel download 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 DCSHelperVM 实例
DCSHelperVM dCSHelperVM = ...;
dCSHelperVM.ExecuteCancelDownload();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DCSHelperVM dCSHelperVM = ...;
dCSHelperVM.Refresh();
```

## 参见

- [本区域目录](../)