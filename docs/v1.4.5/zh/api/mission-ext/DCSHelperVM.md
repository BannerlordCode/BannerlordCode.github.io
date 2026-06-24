<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DCSHelperVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DCSHelperVM

**Namespace:** TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DCSHelperVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/DCSHelperVM.cs`

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

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### GetPanelSubtitle
`public string GetPanelSubtitle(string serverName)`

**用途 / Purpose:** 获取 `panel subtitle` 的当前值。

### GetProgressCounter
`public string GetProgressCounter(int downloadedCount, int totalCount)`

**用途 / Purpose:** 获取 `progress counter` 的当前值。

### GetDownloadCompleteMessageSingular
`public string GetDownloadCompleteMessageSingular(string mapName)`

**用途 / Purpose:** 获取 `download complete message singular` 的当前值。

### GetDownloadCompleteMessagePlural
`public string GetDownloadCompleteMessagePlural(int mapCount)`

**用途 / Purpose:** 获取 `download complete message plural` 的当前值。

### GetReplacementConfirmationMessage
`public string GetReplacementConfirmationMessage(string mapName)`

**用途 / Purpose:** 获取 `replacement confirmation message` 的当前值。

### OpenPopup
`public async Task OpenPopup()`

**用途 / Purpose:** 处理 `open popup` 相关逻辑。

### ExecuteDownloadMap
`public async Task ExecuteDownloadMap()`

**用途 / Purpose:** 执行 `download map` 操作或流程。

### ExecuteCloseOrCancel
`public void ExecuteCloseOrCancel()`

**用途 / Purpose:** 执行 `close or cancel` 操作或流程。

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 `close popup` 操作或流程。

### ExecuteCancelDownload
`public void ExecuteCancelDownload()`

**用途 / Purpose:** 执行 `cancel download` 操作或流程。

## 使用示例

```csharp
var value = new DCSHelperVM();
value.Refresh();
```

## 参见

- [完整类目录](../catalog)