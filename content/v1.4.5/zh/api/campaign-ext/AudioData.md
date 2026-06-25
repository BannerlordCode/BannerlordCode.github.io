---
title: "AudioData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AudioData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AudioData

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class AudioData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.PSAI/psai.net/AudioData.cs`

## 概述

`AudioData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `AudioData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetFullLengthInMilliseconds
`public int GetFullLengthInMilliseconds()`

**用途 / Purpose:** 获取 `full length in milliseconds` 的当前值。

### GetPreBeatZoneInMilliseconds
`public int GetPreBeatZoneInMilliseconds()`

**用途 / Purpose:** 获取 `pre beat zone in milliseconds` 的当前值。

### GetPostBeatZoneInMilliseconds
`public int GetPostBeatZoneInMilliseconds()`

**用途 / Purpose:** 获取 `post beat zone in milliseconds` 的当前值。

### GetSampleCountByMilliseconds
`public int GetSampleCountByMilliseconds(int milliSeconds)`

**用途 / Purpose:** 获取 `sample count by milliseconds` 的当前值。

## 使用示例

```csharp
var value = new AudioData();
```

## 参见

- [完整类目录](../catalog)