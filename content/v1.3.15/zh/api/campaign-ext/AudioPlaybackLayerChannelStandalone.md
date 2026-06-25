---
title: "AudioPlaybackLayerChannelStandalone"
description: "AudioPlaybackLayerChannelStandalone 的自动生成类参考。"
---
# AudioPlaybackLayerChannelStandalone

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class AudioPlaybackLayerChannelStandalone : IAudioPlaybackLayerChannel`
**Base:** `IAudioPlaybackLayerChannel`
**File:** `TaleWorlds.PSAI/net/AudioPlaybackLayerChannelStandalone.cs`

## 概述

`AudioPlaybackLayerChannelStandalone` 位于 `psai.net`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `psai.net` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Release
`public void Release()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 AudioPlaybackLayerChannelStandalone 实例
AudioPlaybackLayerChannelStandalone audioPlaybackLayerChannelStandalone = ...;
audioPlaybackLayerChannelStandalone.Release();
```

### LoadSegment
`public PsaiResult LoadSegment(Segment segment)`

**用途 / Purpose:** 从持久化存储或流中读取 「segment」。

```csharp
// 先通过子系统 API 拿到 AudioPlaybackLayerChannelStandalone 实例
AudioPlaybackLayerChannelStandalone audioPlaybackLayerChannelStandalone = ...;
var result = audioPlaybackLayerChannelStandalone.LoadSegment(segment);
```

### ReleaseSegment
`public PsaiResult ReleaseSegment()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 AudioPlaybackLayerChannelStandalone 实例
AudioPlaybackLayerChannelStandalone audioPlaybackLayerChannelStandalone = ...;
var result = audioPlaybackLayerChannelStandalone.ReleaseSegment();
```

### ScheduleSegmentPlayback
`public PsaiResult ScheduleSegmentPlayback(Segment snippet, int delayMilliseconds)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 AudioPlaybackLayerChannelStandalone 实例
AudioPlaybackLayerChannelStandalone audioPlaybackLayerChannelStandalone = ...;
var result = audioPlaybackLayerChannelStandalone.ScheduleSegmentPlayback(snippet, 0);
```

### StopChannel
`public PsaiResult StopChannel()`

**用途 / Purpose:** 停止「channel」流程或状态机。

```csharp
// 先通过子系统 API 拿到 AudioPlaybackLayerChannelStandalone 实例
AudioPlaybackLayerChannelStandalone audioPlaybackLayerChannelStandalone = ...;
var result = audioPlaybackLayerChannelStandalone.StopChannel();
```

### SetVolume
`public PsaiResult SetVolume(float volume)`

**用途 / Purpose:** 为 「volume」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AudioPlaybackLayerChannelStandalone 实例
AudioPlaybackLayerChannelStandalone audioPlaybackLayerChannelStandalone = ...;
var result = audioPlaybackLayerChannelStandalone.SetVolume(0);
```

### SetPaused
`public PsaiResult SetPaused(bool paused)`

**用途 / Purpose:** 为 「paused」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AudioPlaybackLayerChannelStandalone 实例
AudioPlaybackLayerChannelStandalone audioPlaybackLayerChannelStandalone = ...;
var result = audioPlaybackLayerChannelStandalone.SetPaused(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AudioPlaybackLayerChannelStandalone audioPlaybackLayerChannelStandalone = ...;
audioPlaybackLayerChannelStandalone.Release();
```

## 参见

- [本区域目录](../)