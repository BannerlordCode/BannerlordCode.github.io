---
title: "AudioData"
description: "AudioData 的自动生成类参考。"
---
# AudioData

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class AudioData : ICloneable`
**Base:** `ICloneable`
**File:** `TaleWorlds.PSAI/Editor/AudioData.cs`

## 概述

`AudioData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `AudioData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FilePathRelativeToProjectDir` | `public string FilePathRelativeToProjectDir { get; set; }` |
| `ModuleID` | `public string ModuleID { get; set; }` |
| `FilePathRelativeToProjectDirForCurrentSystem` | `public string FilePathRelativeToProjectDirForCurrentSystem { get; set; }` |
| `Bpm` | `public float Bpm { get; set; }` |
| `PreBeats` | `public float PreBeats { get; set; }` |
| `PostBeats` | `public float PostBeats { get; set; }` |
| `CalculatePostAndPrebeatLengthBasedOnBeats` | `public bool CalculatePostAndPrebeatLengthBasedOnBeats { get; set; }` |
| `PreBeatLengthInSamples` | `public int PreBeatLengthInSamples { get; }` |
| `PostBeatLengthInSamples` | `public int PostBeatLengthInSamples { get; }` |
| `TotalLengthInSamples` | `public int TotalLengthInSamples { get; set; }` |
| `SampleRate` | `public int SampleRate { get; set; }` |
| `BitsPerSample` | `public int BitsPerSample { get; set; }` |
| `ChannelCount` | `public int ChannelCount { get; set; }` |
| `ByteIndexOfWaveformDataWithinAudioFile` | `public long ByteIndexOfWaveformDataWithinAudioFile { get; set; }` |
| `LengthOfWaveformDataInBytes` | `public int LengthOfWaveformDataInBytes { get; set; }` |

## 主要方法

### CreatePsaiDotNetVersion
`public AudioData CreatePsaiDotNetVersion()`

**用途 / Purpose:** 构建一个新的 psai dot net version 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 AudioData 实例
AudioData audioData = ...;
var result = audioData.CreatePsaiDotNetVersion();
```

### GetMillisecondsFromSampleCount
`public int GetMillisecondsFromSampleCount(int sampleCount)`

**用途 / Purpose:** 读取并返回当前对象中 milliseconds from sample count 的结果。

```csharp
// 先通过子系统 API 拿到 AudioData 实例
AudioData audioData = ...;
var result = audioData.GetMillisecondsFromSampleCount(0);
```

### GetSampleCountFromMilliseconds
`public int GetSampleCountFromMilliseconds(int durationMs)`

**用途 / Purpose:** 读取并返回当前对象中 sample count from milliseconds 的结果。

```csharp
// 先通过子系统 API 拿到 AudioData 实例
AudioData audioData = ...;
var result = audioData.GetSampleCountFromMilliseconds(0);
```

### GetLengthInSamplesBasedOnBeats
`public int GetLengthInSamplesBasedOnBeats(float bpm, float beats)`

**用途 / Purpose:** 读取并返回当前对象中 length in samples based on beats 的结果。

```csharp
// 先通过子系统 API 拿到 AudioData 实例
AudioData audioData = ...;
var result = audioData.GetLengthInSamplesBasedOnBeats(0, 0);
```

### GetPostbeatLengthInSamplesBasedOnBeats
`public int GetPostbeatLengthInSamplesBasedOnBeats()`

**用途 / Purpose:** 读取并返回当前对象中 postbeat length in samples based on beats 的结果。

```csharp
// 先通过子系统 API 拿到 AudioData 实例
AudioData audioData = ...;
var result = audioData.GetPostbeatLengthInSamplesBasedOnBeats();
```

### GetPrebeatLengthInSamplesBasedOnBeats
`public int GetPrebeatLengthInSamplesBasedOnBeats()`

**用途 / Purpose:** 读取并返回当前对象中 prebeat length in samples based on beats 的结果。

```csharp
// 先通过子系统 API 拿到 AudioData 实例
AudioData audioData = ...;
var result = audioData.GetPrebeatLengthInSamplesBasedOnBeats();
```

### CalculateTotalLengthInSamples
`public static int CalculateTotalLengthInSamples(int lengthOfWaveformDataInBytes, int bitsPerSample, int channelCount)`

**用途 / Purpose:** 计算total length in samples的当前值或结果。

```csharp
// 静态调用，不需要实例
AudioData.CalculateTotalLengthInSamples(0, 0, 0);
```

### DoUpdateMembersBasedOnWaveHeader
`public bool DoUpdateMembersBasedOnWaveHeader(string fullPathToAudioFile, out string errorMessage)`

**用途 / Purpose:** 调用 DoUpdateMembersBasedOnWaveHeader 对应的操作。

```csharp
// 先通过子系统 API 拿到 AudioData 实例
AudioData audioData = ...;
var result = audioData.DoUpdateMembersBasedOnWaveHeader("example", errorMessage);
```

### SeekChunkInWaveHeader
`public static bool SeekChunkInWaveHeader(ref BinaryReader reader, string chunk)`

**用途 / Purpose:** 调用 SeekChunkInWaveHeader 对应的操作。

```csharp
// 静态调用，不需要实例
AudioData.SeekChunkInWaveHeader(reader, "example");
```

### ReadWaveHeader
`public static PsaiResult ReadWaveHeader(Stream stream, out int outChannelCount, out int outSampleRate, out int outBitsPerSample, out int outLengthOfWaveformDatablockInBytes, out long outBytePositionOfWaveformData)`

**用途 / Purpose:** 从当前实例读取wave header相关数据。

```csharp
// 静态调用，不需要实例
AudioData.ReadWaveHeader(stream, outChannelCount, outSampleRate, outBitsPerSample, outLengthOfWaveformDatablockInBytes, outBytePositionOfWaveformData);
```

### LoadWaveformDataToByteArray
`public static byte LoadWaveformDataToByteArray(string fullFilePath, long byteIndexOfWaveformDataWithinAudioFile, int lengthOfWaveformDataInBytes)`

**用途 / Purpose:** 从持久化存储或流中读取 waveform data to byte array。

```csharp
// 静态调用，不需要实例
AudioData.LoadWaveformDataToByteArray("example", 0, 0);
```

### Clone
`public object Clone()`

**用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 AudioData 实例
AudioData audioData = ...;
var result = audioData.Clone();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
AudioData entry = ...;
```

## 参见

- [本区域目录](../)