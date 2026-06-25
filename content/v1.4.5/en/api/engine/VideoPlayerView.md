---
title: "VideoPlayerView"
description: "Auto-generated class reference for VideoPlayerView."
---
# VideoPlayerView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class VideoPlayerView : View`
**Base:** `View`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/VideoPlayerView.cs`

## Overview

`VideoPlayerView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `VideoPlayerView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateVideoPlayerView
`public static VideoPlayerView CreateVideoPlayerView()`

**Purpose:** Constructs a new video player view entity and returns it to the caller.

```csharp
// Static call; no instance required
VideoPlayerView.CreateVideoPlayerView();
```

### PlayVideo
`public void PlayVideo(string videoFileName, string soundFileName, float framerate, bool looping)`

**Purpose:** Executes the PlayVideo logic.

```csharp
// Obtain an instance of VideoPlayerView from the subsystem API first
VideoPlayerView videoPlayerView = ...;
videoPlayerView.PlayVideo("example", "example", 0, false);
```

### StopVideo
`public void StopVideo()`

**Purpose:** Stops the video flow or state machine.

```csharp
// Obtain an instance of VideoPlayerView from the subsystem API first
VideoPlayerView videoPlayerView = ...;
videoPlayerView.StopVideo();
```

### IsVideoFinished
`public bool IsVideoFinished()`

**Purpose:** Determines whether the this instance is in the video finished state or condition.

```csharp
// Obtain an instance of VideoPlayerView from the subsystem API first
VideoPlayerView videoPlayerView = ...;
var result = videoPlayerView.IsVideoFinished();
```

### FinalizePlayer
`public void FinalizePlayer()`

**Purpose:** Executes the FinalizePlayer logic.

```csharp
// Obtain an instance of VideoPlayerView from the subsystem API first
VideoPlayerView videoPlayerView = ...;
videoPlayerView.FinalizePlayer();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
VideoPlayerView view = ...;
```

## See Also

- [Area Index](../)