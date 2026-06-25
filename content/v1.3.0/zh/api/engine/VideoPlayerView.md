---
title: "VideoPlayerView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VideoPlayerView`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# VideoPlayerView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class VideoPlayerView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/VideoPlayerView.cs`

## 概述

`VideoPlayerView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `VideoPlayerView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateVideoPlayerView
`public static VideoPlayerView CreateVideoPlayerView()`

**用途 / Purpose:** 创建一个 `video player view` 实例或对象。

### PlayVideo
`public void PlayVideo(string videoFileName, string soundFileName, float framerate, bool looping)`

**用途 / Purpose:** 处理 `play video` 相关逻辑。

### StopVideo
`public void StopVideo()`

**用途 / Purpose:** 处理 `stop video` 相关逻辑。

### IsVideoFinished
`public bool IsVideoFinished()`

**用途 / Purpose:** 处理 `is video finished` 相关逻辑。

### FinalizePlayer
`public void FinalizePlayer()`

**用途 / Purpose:** 处理 `finalize player` 相关逻辑。

## 使用示例

```csharp
var view = new VideoPlayerView();
```

## 参见

- [完整类目录](../catalog)