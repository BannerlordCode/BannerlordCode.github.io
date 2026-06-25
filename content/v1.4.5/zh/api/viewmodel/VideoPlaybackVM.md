---
title: "VideoPlaybackVM"
description: "VideoPlaybackVM 的自动生成类参考。"
---
# VideoPlaybackVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VideoPlaybackVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback/VideoPlaybackVM.cs`

## 概述

`VideoPlaybackVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SubtitleText` | `public string SubtitleText { get; set; }` |

## 主要方法

### Tick
`public void Tick(float totalElapsedTimeInVideoInSeconds)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 VideoPlaybackVM 实例
VideoPlaybackVM videoPlaybackVM = ...;
videoPlaybackVM.Tick(0);
```

### GetItemInTimeframe
`public SRTHelper.SubtitleItem GetItemInTimeframe(float timeInSecondsInVideo)`

**用途 / Purpose:** 读取并返回当前对象中 item in timeframe 的结果。

```csharp
// 先通过子系统 API 拿到 VideoPlaybackVM 实例
VideoPlaybackVM videoPlaybackVM = ...;
var result = videoPlaybackVM.GetItemInTimeframe(0);
```

### SetSubtitles
`public void SetSubtitles(List<SRTHelper.SubtitleItem> lines)`

**用途 / Purpose:** 为 subtitles 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 VideoPlaybackVM 实例
VideoPlaybackVM videoPlaybackVM = ...;
videoPlaybackVM.SetSubtitles(lines);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VideoPlaybackVM videoPlaybackVM = ...;
videoPlaybackVM.Tick(0);
```

## 参见

- [本区域目录](../)