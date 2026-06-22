<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VideoPlayerView`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VideoPlayerView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class VideoPlayerView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/VideoPlayerView.cs`

## 概述

`VideoPlayerView` 是一个引擎视图/表面（渲染、纹理、场景预览等）。经引擎视图系统访问。

## 主要方法

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

## 使用示例

```csharp
// VideoPlayerView (View) 的典型用法
VideoPlayerView /* via engine view system */;
```

## 参见

- [完整类目录](../catalog)