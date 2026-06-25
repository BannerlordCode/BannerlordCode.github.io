---
title: "VideoPlayerView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VideoPlayerView`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VideoPlayerView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class VideoPlayerView : View`
**Base:** `View`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/VideoPlayerView.cs`

## Overview

`VideoPlayerView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `VideoPlayerView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateVideoPlayerView
`public static VideoPlayerView CreateVideoPlayerView()`

**Purpose:** Creates a new `video player view` instance or object.

### PlayVideo
`public void PlayVideo(string videoFileName, string soundFileName, float framerate, bool looping)`

**Purpose:** Handles logic related to `play video`.

### StopVideo
`public void StopVideo()`

**Purpose:** Handles logic related to `stop video`.

### IsVideoFinished
`public bool IsVideoFinished()`

**Purpose:** Handles logic related to `is video finished`.

### FinalizePlayer
`public void FinalizePlayer()`

**Purpose:** Handles logic related to `finalize player`.

## Usage Example

```csharp
var view = new VideoPlayerView();
```

## See Also

- [Complete Class Catalog](../catalog)