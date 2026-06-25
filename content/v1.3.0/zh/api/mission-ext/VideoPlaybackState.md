---
title: "VideoPlaybackState"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VideoPlaybackState`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# VideoPlaybackState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VideoPlaybackState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.MountAndBlade/VideoPlaybackState.cs`

## 概述

`VideoPlaybackState` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `VideoPath` | `public string VideoPath { get; }` |
| `AudioPath` | `public string AudioPath { get; }` |
| `FrameRate` | `public float FrameRate { get; }` |
| `SubtitleFileBasePath` | `public string SubtitleFileBasePath { get; }` |
| `CanUserSkip` | `public bool CanUserSkip { get; }` |

## 主要方法

### SetStartingParameters
`public void SetStartingParameters(string videoPath, string audioPath, string subtitleFileBasePath, float frameRate = 30f, bool canUserSkip = true)`

**用途 / Purpose:** 设置 `starting parameters` 的值或状态。

### SetOnVideoFinisedDelegate
`public void SetOnVideoFinisedDelegate(Action onVideoFinised)`

**用途 / Purpose:** 设置 `on video finised delegate` 的值或状态。

### OnVideoFinished
`public void OnVideoFinished()`

**用途 / Purpose:** 当 `video finished` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new VideoPlaybackState();
value.SetStartingParameters("example", "example", "example", 0, false);
```

## 参见

- [完整类目录](../catalog)