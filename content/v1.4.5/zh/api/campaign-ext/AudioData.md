---
title: "AudioData"
description: "AudioData 的自动生成类参考。"
---
# AudioData

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class AudioData`
**Base:** 无
**File:** `bin/TaleWorlds.PSAI/psai.net/AudioData.cs`

## 概述

`AudioData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `AudioData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetFullLengthInMilliseconds
`public int GetFullLengthInMilliseconds()`

**用途 / Purpose:** 读取并返回当前对象中 「full length in milliseconds」 的结果。

```csharp
// 先通过子系统 API 拿到 AudioData 实例
AudioData audioData = ...;
var result = audioData.GetFullLengthInMilliseconds();
```

### GetPreBeatZoneInMilliseconds
`public int GetPreBeatZoneInMilliseconds()`

**用途 / Purpose:** 读取并返回当前对象中 「pre beat zone in milliseconds」 的结果。

```csharp
// 先通过子系统 API 拿到 AudioData 实例
AudioData audioData = ...;
var result = audioData.GetPreBeatZoneInMilliseconds();
```

### GetPostBeatZoneInMilliseconds
`public int GetPostBeatZoneInMilliseconds()`

**用途 / Purpose:** 读取并返回当前对象中 「post beat zone in milliseconds」 的结果。

```csharp
// 先通过子系统 API 拿到 AudioData 实例
AudioData audioData = ...;
var result = audioData.GetPostBeatZoneInMilliseconds();
```

### GetSampleCountByMilliseconds
`public int GetSampleCountByMilliseconds(int milliSeconds)`

**用途 / Purpose:** 读取并返回当前对象中 「sample count by milliseconds」 的结果。

```csharp
// 先通过子系统 API 拿到 AudioData 实例
AudioData audioData = ...;
var result = audioData.GetSampleCountByMilliseconds(0);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
AudioData entry = ...;
```

## 参见

- [本区域目录](../)