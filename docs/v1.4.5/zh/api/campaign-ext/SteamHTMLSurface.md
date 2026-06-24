<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamHTMLSurface`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamHTMLSurface

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamHTMLSurface`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamHTMLSurface.cs`

## 概述

`SteamHTMLSurface` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Init
`public static bool Init()`

**用途 / Purpose:** 初始化 `init` 的状态、资源或绑定。

### Shutdown
`public static bool Shutdown()`

**用途 / Purpose:** 处理 `shutdown` 相关逻辑。

### CreateBrowser
`public static SteamAPICall_t CreateBrowser(string pchUserAgent, string pchUserCSS)`

**用途 / Purpose:** 创建一个 `browser` 实例或对象。

### RemoveBrowser
`public static void RemoveBrowser(HHTMLBrowser unBrowserHandle)`

**用途 / Purpose:** 从当前集合/状态中移除 `browser`。

### LoadURL
`public static void LoadURL(HHTMLBrowser unBrowserHandle, string pchURL, string pchPostData)`

**用途 / Purpose:** 加载 `u r l` 数据。

### SetSize
`public static void SetSize(HHTMLBrowser unBrowserHandle, uint unWidth, uint unHeight)`

**用途 / Purpose:** 设置 `size` 的值或状态。

### StopLoad
`public static void StopLoad(HHTMLBrowser unBrowserHandle)`

**用途 / Purpose:** 处理 `stop load` 相关逻辑。

### Reload
`public static void Reload(HHTMLBrowser unBrowserHandle)`

**用途 / Purpose:** 处理 `reload` 相关逻辑。

### GoBack
`public static void GoBack(HHTMLBrowser unBrowserHandle)`

**用途 / Purpose:** 处理 `go back` 相关逻辑。

### GoForward
`public static void GoForward(HHTMLBrowser unBrowserHandle)`

**用途 / Purpose:** 处理 `go forward` 相关逻辑。

### AddHeader
`public static void AddHeader(HHTMLBrowser unBrowserHandle, string pchKey, string pchValue)`

**用途 / Purpose:** 向当前集合/状态中添加 `header`。

### ExecuteJavascript
`public static void ExecuteJavascript(HHTMLBrowser unBrowserHandle, string pchScript)`

**用途 / Purpose:** 执行 `javascript` 操作或流程。

### MouseUp
`public static void MouseUp(HHTMLBrowser unBrowserHandle, EHTMLMouseButton eMouseButton)`

**用途 / Purpose:** 处理 `mouse up` 相关逻辑。

### MouseDown
`public static void MouseDown(HHTMLBrowser unBrowserHandle, EHTMLMouseButton eMouseButton)`

**用途 / Purpose:** 处理 `mouse down` 相关逻辑。

### MouseDoubleClick
`public static void MouseDoubleClick(HHTMLBrowser unBrowserHandle, EHTMLMouseButton eMouseButton)`

**用途 / Purpose:** 处理 `mouse double click` 相关逻辑。

### MouseMove
`public static void MouseMove(HHTMLBrowser unBrowserHandle, int x, int y)`

**用途 / Purpose:** 处理 `mouse move` 相关逻辑。

### MouseWheel
`public static void MouseWheel(HHTMLBrowser unBrowserHandle, int nDelta)`

**用途 / Purpose:** 处理 `mouse wheel` 相关逻辑。

### KeyDown
`public static void KeyDown(HHTMLBrowser unBrowserHandle, uint nNativeKeyCode, EHTMLKeyModifiers eHTMLKeyModifiers, bool bIsSystemKey = false)`

**用途 / Purpose:** 处理 `key down` 相关逻辑。

### KeyUp
`public static void KeyUp(HHTMLBrowser unBrowserHandle, uint nNativeKeyCode, EHTMLKeyModifiers eHTMLKeyModifiers)`

**用途 / Purpose:** 处理 `key up` 相关逻辑。

### KeyChar
`public static void KeyChar(HHTMLBrowser unBrowserHandle, uint cUnicodeChar, EHTMLKeyModifiers eHTMLKeyModifiers)`

**用途 / Purpose:** 处理 `key char` 相关逻辑。

### SetHorizontalScroll
`public static void SetHorizontalScroll(HHTMLBrowser unBrowserHandle, uint nAbsolutePixelScroll)`

**用途 / Purpose:** 设置 `horizontal scroll` 的值或状态。

### SetVerticalScroll
`public static void SetVerticalScroll(HHTMLBrowser unBrowserHandle, uint nAbsolutePixelScroll)`

**用途 / Purpose:** 设置 `vertical scroll` 的值或状态。

### SetKeyFocus
`public static void SetKeyFocus(HHTMLBrowser unBrowserHandle, bool bHasKeyFocus)`

**用途 / Purpose:** 设置 `key focus` 的值或状态。

### ViewSource
`public static void ViewSource(HHTMLBrowser unBrowserHandle)`

**用途 / Purpose:** 处理 `view source` 相关逻辑。

### CopyToClipboard
`public static void CopyToClipboard(HHTMLBrowser unBrowserHandle)`

**用途 / Purpose:** 处理 `copy to clipboard` 相关逻辑。

### PasteFromClipboard
`public static void PasteFromClipboard(HHTMLBrowser unBrowserHandle)`

**用途 / Purpose:** 处理 `paste from clipboard` 相关逻辑。

### Find
`public static void Find(HHTMLBrowser unBrowserHandle, string pchSearchStr, bool bCurrentlyInFind, bool bReverse)`

**用途 / Purpose:** 处理 `find` 相关逻辑。

### StopFind
`public static void StopFind(HHTMLBrowser unBrowserHandle)`

**用途 / Purpose:** 处理 `stop find` 相关逻辑。

### GetLinkAtPosition
`public static void GetLinkAtPosition(HHTMLBrowser unBrowserHandle, int x, int y)`

**用途 / Purpose:** 获取 `link at position` 的当前值。

### SetCookie
`public static void SetCookie(string pchHostname, string pchKey, string pchValue, string pchPath = "/", uint nExpires = 0u, bool bSecure = false, bool bHTTPOnly = false)`

**用途 / Purpose:** 设置 `cookie` 的值或状态。

### SetPageScaleFactor
`public static void SetPageScaleFactor(HHTMLBrowser unBrowserHandle, float flZoom, int nPointX, int nPointY)`

**用途 / Purpose:** 设置 `page scale factor` 的值或状态。

### SetBackgroundMode
`public static void SetBackgroundMode(HHTMLBrowser unBrowserHandle, bool bBackgroundMode)`

**用途 / Purpose:** 设置 `background mode` 的值或状态。

### SetDPIScalingFactor
`public static void SetDPIScalingFactor(HHTMLBrowser unBrowserHandle, float flDPIScaling)`

**用途 / Purpose:** 设置 `d p i scaling factor` 的值或状态。

### OpenDeveloperTools
`public static void OpenDeveloperTools(HHTMLBrowser unBrowserHandle)`

**用途 / Purpose:** 处理 `open developer tools` 相关逻辑。

### AllowStartRequest
`public static void AllowStartRequest(HHTMLBrowser unBrowserHandle, bool bAllowed)`

**用途 / Purpose:** 处理 `allow start request` 相关逻辑。

### JSDialogResponse
`public static void JSDialogResponse(HHTMLBrowser unBrowserHandle, bool bResult)`

**用途 / Purpose:** 处理 `j s dialog response` 相关逻辑。

### FileLoadDialogResponse
`public static void FileLoadDialogResponse(HHTMLBrowser unBrowserHandle, IntPtr pchSelectedFiles)`

**用途 / Purpose:** 处理 `file load dialog response` 相关逻辑。

## 使用示例

```csharp
SteamHTMLSurface.Init();
```

## 参见

- [完整类目录](../catalog)