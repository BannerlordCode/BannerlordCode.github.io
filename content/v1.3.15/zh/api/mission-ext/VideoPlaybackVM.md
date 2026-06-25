---
title: "VideoPlaybackVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VideoPlaybackVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VideoPlaybackVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VideoPlaybackVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/VideoPlayback/VideoPlaybackVM.cs`

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

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### GetItemInTimeframe
`public SRTHelper.SubtitleItem GetItemInTimeframe(float timeInSecondsInVideo)`

**用途 / Purpose:** 获取 `item in timeframe` 的当前值。

### SetSubtitles
`public void SetSubtitles(List<SRTHelper.SubtitleItem> lines)`

**用途 / Purpose:** 设置 `subtitles` 的值或状态。

## 使用示例

```csharp
var value = new VideoPlaybackVM();
value.Tick(0);
```

## 参见

- [完整类目录](../catalog)