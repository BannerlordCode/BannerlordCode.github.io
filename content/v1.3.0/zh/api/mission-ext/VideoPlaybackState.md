---
title: "VideoPlaybackState"
description: "VideoPlaybackState 的自动生成类参考。"
---
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

**用途 / Purpose:** 为 「starting parameters」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 VideoPlaybackState 实例
VideoPlaybackState videoPlaybackState = ...;
videoPlaybackState.SetStartingParameters("example", "example", "example", 0, false);
```

### SetOnVideoFinisedDelegate
`public void SetOnVideoFinisedDelegate(Action onVideoFinised)`

**用途 / Purpose:** 为 「on video finised delegate」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 VideoPlaybackState 实例
VideoPlaybackState videoPlaybackState = ...;
videoPlaybackState.SetOnVideoFinisedDelegate(onVideoFinised);
```

### OnVideoFinished
`public void OnVideoFinished()`

**用途 / Purpose:** 在 「video finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 VideoPlaybackState 实例
VideoPlaybackState videoPlaybackState = ...;
videoPlaybackState.OnVideoFinished();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VideoPlaybackState videoPlaybackState = ...;
videoPlaybackState.SetStartingParameters("example", "example", "example", 0, false);
```

## 参见

- [本区域目录](../)