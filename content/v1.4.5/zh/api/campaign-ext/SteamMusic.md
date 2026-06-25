---
title: "SteamMusic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamMusic`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamMusic

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamMusic`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamMusic.cs`

## 概述

`SteamMusic` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### BIsEnabled
`public static bool BIsEnabled()`

**用途 / Purpose:** 处理 `b is enabled` 相关逻辑。

### BIsPlaying
`public static bool BIsPlaying()`

**用途 / Purpose:** 处理 `b is playing` 相关逻辑。

### GetPlaybackStatus
`public static AudioPlayback_Status GetPlaybackStatus()`

**用途 / Purpose:** 获取 `playback status` 的当前值。

### Play
`public static void Play()`

**用途 / Purpose:** 处理 `play` 相关逻辑。

### Pause
`public static void Pause()`

**用途 / Purpose:** 处理 `pause` 相关逻辑。

### PlayPrevious
`public static void PlayPrevious()`

**用途 / Purpose:** 处理 `play previous` 相关逻辑。

### PlayNext
`public static void PlayNext()`

**用途 / Purpose:** 处理 `play next` 相关逻辑。

### SetVolume
`public static void SetVolume(float flVolume)`

**用途 / Purpose:** 设置 `volume` 的值或状态。

### GetVolume
`public static float GetVolume()`

**用途 / Purpose:** 获取 `volume` 的当前值。

## 使用示例

```csharp
SteamMusic.BIsEnabled();
```

## 参见

- [完整类目录](../catalog)