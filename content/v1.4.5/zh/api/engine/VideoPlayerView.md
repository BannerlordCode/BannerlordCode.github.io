---
title: "VideoPlayerView"
description: "VideoPlayerView 的自动生成类参考。"
---
# VideoPlayerView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class VideoPlayerView : View`
**Base:** `View`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/VideoPlayerView.cs`

## 概述

`VideoPlayerView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `VideoPlayerView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateVideoPlayerView
`public static VideoPlayerView CreateVideoPlayerView()`

**用途 / Purpose:** 构建一个新的 video player view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
VideoPlayerView.CreateVideoPlayerView();
```

### PlayVideo
`public void PlayVideo(string videoFileName, string soundFileName, float framerate, bool looping)`

**用途 / Purpose:** 调用 PlayVideo 对应的操作。

```csharp
// 先通过子系统 API 拿到 VideoPlayerView 实例
VideoPlayerView videoPlayerView = ...;
videoPlayerView.PlayVideo("example", "example", 0, false);
```

### StopVideo
`public void StopVideo()`

**用途 / Purpose:** 停止video流程或状态机。

```csharp
// 先通过子系统 API 拿到 VideoPlayerView 实例
VideoPlayerView videoPlayerView = ...;
videoPlayerView.StopVideo();
```

### IsVideoFinished
`public bool IsVideoFinished()`

**用途 / Purpose:** 判断当前对象是否处于 video finished 状态或条件。

```csharp
// 先通过子系统 API 拿到 VideoPlayerView 实例
VideoPlayerView videoPlayerView = ...;
var result = videoPlayerView.IsVideoFinished();
```

### FinalizePlayer
`public void FinalizePlayer()`

**用途 / Purpose:** 调用 FinalizePlayer 对应的操作。

```csharp
// 先通过子系统 API 拿到 VideoPlayerView 实例
VideoPlayerView videoPlayerView = ...;
videoPlayerView.FinalizePlayer();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
VideoPlayerView view = ...;
```

## 参见

- [本区域目录](../)