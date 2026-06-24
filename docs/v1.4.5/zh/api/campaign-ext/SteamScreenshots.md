<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamScreenshots`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamScreenshots

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamScreenshots`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamScreenshots.cs`

## 概述

`SteamScreenshots` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### WriteScreenshot
`public static ScreenshotHandle WriteScreenshot(byte pubRGB, uint cubRGB, int nWidth, int nHeight)`

**用途 / Purpose:** 处理 `write screenshot` 相关逻辑。

### AddScreenshotToLibrary
`public static ScreenshotHandle AddScreenshotToLibrary(string pchFilename, string pchThumbnailFilename, int nWidth, int nHeight)`

**用途 / Purpose:** 向当前集合/状态中添加 `screenshot to library`。

### TriggerScreenshot
`public static void TriggerScreenshot()`

**用途 / Purpose:** 处理 `trigger screenshot` 相关逻辑。

### HookScreenshots
`public static void HookScreenshots(bool bHook)`

**用途 / Purpose:** 处理 `hook screenshots` 相关逻辑。

### SetLocation
`public static bool SetLocation(ScreenshotHandle hScreenshot, string pchLocation)`

**用途 / Purpose:** 设置 `location` 的值或状态。

### TagUser
`public static bool TagUser(ScreenshotHandle hScreenshot, CSteamID steamID)`

**用途 / Purpose:** 处理 `tag user` 相关逻辑。

### TagPublishedFile
`public static bool TagPublishedFile(ScreenshotHandle hScreenshot, PublishedFileId_t unPublishedFileID)`

**用途 / Purpose:** 处理 `tag published file` 相关逻辑。

### IsScreenshotsHooked
`public static bool IsScreenshotsHooked()`

**用途 / Purpose:** 处理 `is screenshots hooked` 相关逻辑。

### AddVRScreenshotToLibrary
`public static ScreenshotHandle AddVRScreenshotToLibrary(EVRScreenshotType eType, string pchFilename, string pchVRFilename)`

**用途 / Purpose:** 向当前集合/状态中添加 `v r screenshot to library`。

## 使用示例

```csharp
SteamScreenshots.WriteScreenshot(0, 0, 0, 0);
```

## 参见

- [完整类目录](../catalog)