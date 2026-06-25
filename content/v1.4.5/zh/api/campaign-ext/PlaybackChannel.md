---
title: "PlaybackChannel"
description: "PlaybackChannel 的自动生成类参考。"
---
# PlaybackChannel

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class PlaybackChannel`
**Base:** 无
**File:** `bin/TaleWorlds.PSAI/psai.net/PlaybackChannel.cs`

## 概述

`PlaybackChannel` 位于 `psai.net`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `psai.net` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnPlaybackHasStarted
`public void OnPlaybackHasStarted()`

**用途 / Purpose:** **用途 / Purpose:** 在 playback has started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PlaybackChannel 实例
PlaybackChannel playbackChannel = ...;
playbackChannel.OnPlaybackHasStarted();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PlaybackChannel playbackChannel = ...;
playbackChannel.OnPlaybackHasStarted();
```

## 参见

- [本区域目录](../)