<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VideoPlayerView`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VideoPlayerView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class VideoPlayerView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/VideoPlayerView.cs`

## Overview

`VideoPlayerView` is an engine view/surface (render, texture, scene preview, etc.). Accessed via the engine view system.

## Key Methods

### CreateVideoPlayerView
```csharp
public static VideoPlayerView CreateVideoPlayerView()
```

### PlayVideo
```csharp
public void PlayVideo(string videoFileName, string soundFileName, float framerate, bool looping)
```

### StopVideo
```csharp
public void StopVideo()
```

### IsVideoFinished
```csharp
public bool IsVideoFinished()
```

### FinalizePlayer
```csharp
public void FinalizePlayer()
```

## Usage Example

```csharp
// Typical usage of VideoPlayerView (View)
VideoPlayerView /* via engine view system */;
```

## See Also

- [Complete Class Catalog](../catalog)