---
title: "SteamHTMLSurface"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamHTMLSurface`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamHTMLSurface

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamHTMLSurface`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamHTMLSurface.cs`

## Overview

`SteamHTMLSurface` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Init
`public static bool Init()`

**Purpose:** Initializes the state, resources, or bindings for `init`.

### Shutdown
`public static bool Shutdown()`

**Purpose:** Handles logic related to `shutdown`.

### CreateBrowser
`public static SteamAPICall_t CreateBrowser(string pchUserAgent, string pchUserCSS)`

**Purpose:** Creates a new `browser` instance or object.

### RemoveBrowser
`public static void RemoveBrowser(HHTMLBrowser unBrowserHandle)`

**Purpose:** Removes `browser` from the current collection or state.

### LoadURL
`public static void LoadURL(HHTMLBrowser unBrowserHandle, string pchURL, string pchPostData)`

**Purpose:** Loads `u r l` data.

### SetSize
`public static void SetSize(HHTMLBrowser unBrowserHandle, uint unWidth, uint unHeight)`

**Purpose:** Sets the value or state of `size`.

### StopLoad
`public static void StopLoad(HHTMLBrowser unBrowserHandle)`

**Purpose:** Handles logic related to `stop load`.

### Reload
`public static void Reload(HHTMLBrowser unBrowserHandle)`

**Purpose:** Handles logic related to `reload`.

### GoBack
`public static void GoBack(HHTMLBrowser unBrowserHandle)`

**Purpose:** Handles logic related to `go back`.

### GoForward
`public static void GoForward(HHTMLBrowser unBrowserHandle)`

**Purpose:** Handles logic related to `go forward`.

### AddHeader
`public static void AddHeader(HHTMLBrowser unBrowserHandle, string pchKey, string pchValue)`

**Purpose:** Adds `header` to the current collection or state.

### ExecuteJavascript
`public static void ExecuteJavascript(HHTMLBrowser unBrowserHandle, string pchScript)`

**Purpose:** Executes the `javascript` operation or workflow.

### MouseUp
`public static void MouseUp(HHTMLBrowser unBrowserHandle, EHTMLMouseButton eMouseButton)`

**Purpose:** Handles logic related to `mouse up`.

### MouseDown
`public static void MouseDown(HHTMLBrowser unBrowserHandle, EHTMLMouseButton eMouseButton)`

**Purpose:** Handles logic related to `mouse down`.

### MouseDoubleClick
`public static void MouseDoubleClick(HHTMLBrowser unBrowserHandle, EHTMLMouseButton eMouseButton)`

**Purpose:** Handles logic related to `mouse double click`.

### MouseMove
`public static void MouseMove(HHTMLBrowser unBrowserHandle, int x, int y)`

**Purpose:** Handles logic related to `mouse move`.

### MouseWheel
`public static void MouseWheel(HHTMLBrowser unBrowserHandle, int nDelta)`

**Purpose:** Handles logic related to `mouse wheel`.

### KeyDown
`public static void KeyDown(HHTMLBrowser unBrowserHandle, uint nNativeKeyCode, EHTMLKeyModifiers eHTMLKeyModifiers, bool bIsSystemKey = false)`

**Purpose:** Handles logic related to `key down`.

### KeyUp
`public static void KeyUp(HHTMLBrowser unBrowserHandle, uint nNativeKeyCode, EHTMLKeyModifiers eHTMLKeyModifiers)`

**Purpose:** Handles logic related to `key up`.

### KeyChar
`public static void KeyChar(HHTMLBrowser unBrowserHandle, uint cUnicodeChar, EHTMLKeyModifiers eHTMLKeyModifiers)`

**Purpose:** Handles logic related to `key char`.

### SetHorizontalScroll
`public static void SetHorizontalScroll(HHTMLBrowser unBrowserHandle, uint nAbsolutePixelScroll)`

**Purpose:** Sets the value or state of `horizontal scroll`.

### SetVerticalScroll
`public static void SetVerticalScroll(HHTMLBrowser unBrowserHandle, uint nAbsolutePixelScroll)`

**Purpose:** Sets the value or state of `vertical scroll`.

### SetKeyFocus
`public static void SetKeyFocus(HHTMLBrowser unBrowserHandle, bool bHasKeyFocus)`

**Purpose:** Sets the value or state of `key focus`.

### ViewSource
`public static void ViewSource(HHTMLBrowser unBrowserHandle)`

**Purpose:** Handles logic related to `view source`.

### CopyToClipboard
`public static void CopyToClipboard(HHTMLBrowser unBrowserHandle)`

**Purpose:** Handles logic related to `copy to clipboard`.

### PasteFromClipboard
`public static void PasteFromClipboard(HHTMLBrowser unBrowserHandle)`

**Purpose:** Handles logic related to `paste from clipboard`.

### Find
`public static void Find(HHTMLBrowser unBrowserHandle, string pchSearchStr, bool bCurrentlyInFind, bool bReverse)`

**Purpose:** Handles logic related to `find`.

### StopFind
`public static void StopFind(HHTMLBrowser unBrowserHandle)`

**Purpose:** Handles logic related to `stop find`.

### GetLinkAtPosition
`public static void GetLinkAtPosition(HHTMLBrowser unBrowserHandle, int x, int y)`

**Purpose:** Gets the current value of `link at position`.

### SetCookie
`public static void SetCookie(string pchHostname, string pchKey, string pchValue, string pchPath = "/", uint nExpires = 0u, bool bSecure = false, bool bHTTPOnly = false)`

**Purpose:** Sets the value or state of `cookie`.

### SetPageScaleFactor
`public static void SetPageScaleFactor(HHTMLBrowser unBrowserHandle, float flZoom, int nPointX, int nPointY)`

**Purpose:** Sets the value or state of `page scale factor`.

### SetBackgroundMode
`public static void SetBackgroundMode(HHTMLBrowser unBrowserHandle, bool bBackgroundMode)`

**Purpose:** Sets the value or state of `background mode`.

### SetDPIScalingFactor
`public static void SetDPIScalingFactor(HHTMLBrowser unBrowserHandle, float flDPIScaling)`

**Purpose:** Sets the value or state of `d p i scaling factor`.

### OpenDeveloperTools
`public static void OpenDeveloperTools(HHTMLBrowser unBrowserHandle)`

**Purpose:** Handles logic related to `open developer tools`.

### AllowStartRequest
`public static void AllowStartRequest(HHTMLBrowser unBrowserHandle, bool bAllowed)`

**Purpose:** Handles logic related to `allow start request`.

### JSDialogResponse
`public static void JSDialogResponse(HHTMLBrowser unBrowserHandle, bool bResult)`

**Purpose:** Handles logic related to `j s dialog response`.

### FileLoadDialogResponse
`public static void FileLoadDialogResponse(HHTMLBrowser unBrowserHandle, IntPtr pchSelectedFiles)`

**Purpose:** Handles logic related to `file load dialog response`.

## Usage Example

```csharp
SteamHTMLSurface.Init();
```

## See Also

- [Complete Class Catalog](../catalog)