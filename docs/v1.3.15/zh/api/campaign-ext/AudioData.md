<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AudioData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 创建一个 `psai dot net version` 实例或对象。

### GetMillisecondsFromSampleCount
`public int GetMillisecondsFromSampleCount(int sampleCount)`

**用途 / Purpose:** 获取 `milliseconds from sample count` 的当前值。

### GetSampleCountFromMilliseconds
`public int GetSampleCountFromMilliseconds(int durationMs)`

**用途 / Purpose:** 获取 `sample count from milliseconds` 的当前值。

### GetLengthInSamplesBasedOnBeats
`public int GetLengthInSamplesBasedOnBeats(float bpm, float beats)`

**用途 / Purpose:** 获取 `length in samples based on beats` 的当前值。

### GetPostbeatLengthInSamplesBasedOnBeats
`public int GetPostbeatLengthInSamplesBasedOnBeats()`

**用途 / Purpose:** 获取 `postbeat length in samples based on beats` 的当前值。

### GetPrebeatLengthInSamplesBasedOnBeats
`public int GetPrebeatLengthInSamplesBasedOnBeats()`

**用途 / Purpose:** 获取 `prebeat length in samples based on beats` 的当前值。

### CalculateTotalLengthInSamples
`public static int CalculateTotalLengthInSamples(int lengthOfWaveformDataInBytes, int bitsPerSample, int channelCount)`

**用途 / Purpose:** 处理 `calculate total length in samples` 相关逻辑。

### DoUpdateMembersBasedOnWaveHeader
`public bool DoUpdateMembersBasedOnWaveHeader(string fullPathToAudioFile, out string errorMessage)`

**用途 / Purpose:** 处理 `do update members based on wave header` 相关逻辑。

### SeekChunkInWaveHeader
`public static bool SeekChunkInWaveHeader(ref BinaryReader reader, string chunk)`

**用途 / Purpose:** 处理 `seek chunk in wave header` 相关逻辑。

### ReadWaveHeader
`public static PsaiResult ReadWaveHeader(Stream stream, out int outChannelCount, out int outSampleRate, out int outBitsPerSample, out int outLengthOfWaveformDatablockInBytes, out long outBytePositionOfWaveformData)`

**用途 / Purpose:** 处理 `read wave header` 相关逻辑。

### LoadWaveformDataToByteArray
`public static byte LoadWaveformDataToByteArray(string fullFilePath, long byteIndexOfWaveformDataWithinAudioFile, int lengthOfWaveformDataInBytes)`

**用途 / Purpose:** 加载 `waveform data to byte array` 数据。

### Clone
`public object Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

## 使用示例

```csharp
var value = new AudioData();
```

## 参见

- [完整类目录](../catalog)