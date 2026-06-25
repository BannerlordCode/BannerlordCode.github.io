---
title: "AudioPlaybackLayerChannelStandalone"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AudioPlaybackLayerChannelStandalone`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AudioPlaybackLayerChannelStandalone

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class AudioPlaybackLayerChannelStandalone : IAudioPlaybackLayerChannel`
**Base:** `IAudioPlaybackLayerChannel`
**File:** `Bannerlord.Source/bin/TaleWorlds.PSAI/psai.net/AudioPlaybackLayerChannelStandalone.cs`

## 概述

`AudioPlaybackLayerChannelStandalone` 位于 `psai.net`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `psai.net` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Release
`public void Release()`

**用途 / Purpose:** 处理 `release` 相关逻辑。

### LoadSegment
`public PsaiResult LoadSegment(Segment segment)`

**用途 / Purpose:** 加载 `segment` 数据。

### ReleaseSegment
`public PsaiResult ReleaseSegment()`

**用途 / Purpose:** 处理 `release segment` 相关逻辑。

### ScheduleSegmentPlayback
`public PsaiResult ScheduleSegmentPlayback(Segment snippet, int delayMilliseconds)`

**用途 / Purpose:** 处理 `schedule segment playback` 相关逻辑。

### StopChannel
`public PsaiResult StopChannel()`

**用途 / Purpose:** 处理 `stop channel` 相关逻辑。

### SetVolume
`public PsaiResult SetVolume(float volume)`

**用途 / Purpose:** 设置 `volume` 的值或状态。

### SetPaused
`public PsaiResult SetPaused(bool paused)`

**用途 / Purpose:** 设置 `paused` 的值或状态。

## 使用示例

```csharp
var value = new AudioPlaybackLayerChannelStandalone();
value.Release();
```

## 参见

- [完整类目录](../catalog)