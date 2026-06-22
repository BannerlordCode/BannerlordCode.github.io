<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AudioData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AudioData

**命名空间:** psai.Editor
**模块:** psai.Editor
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`AudioData` 是 `psai.Editor` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public AudioData CreatePsaiDotNetVersion()
```

### GetMillisecondsFromSampleCount

```csharp
public int GetMillisecondsFromSampleCount(int sampleCount)
```

### GetSampleCountFromMilliseconds

```csharp
public int GetSampleCountFromMilliseconds(int durationMs)
```

### GetLengthInSamplesBasedOnBeats

```csharp
public int GetLengthInSamplesBasedOnBeats(float bpm, float beats)
```

### GetPostbeatLengthInSamplesBasedOnBeats

```csharp
public int GetPostbeatLengthInSamplesBasedOnBeats()
```

### GetPrebeatLengthInSamplesBasedOnBeats

```csharp
public int GetPrebeatLengthInSamplesBasedOnBeats()
```

### CalculateTotalLengthInSamples

```csharp
public static int CalculateTotalLengthInSamples(int lengthOfWaveformDataInBytes, int bitsPerSample, int channelCount)
```

### DoUpdateMembersBasedOnWaveHeader

```csharp
public bool DoUpdateMembersBasedOnWaveHeader(string fullPathToAudioFile, out string errorMessage)
```

### SeekChunkInWaveHeader

```csharp
public static bool SeekChunkInWaveHeader(ref BinaryReader reader, string chunk)
```

### ReadWaveHeader

```csharp
public static PsaiResult ReadWaveHeader(Stream stream, out int outChannelCount, out int outSampleRate, out int outBitsPerSample, out int outLengthOfWaveformDatablockInBytes, out long outBytePositionOfWaveformData)
```

### LoadWaveformDataToByteArray

```csharp
public static byte LoadWaveformDataToByteArray(string fullFilePath, long byteIndexOfWaveformDataWithinAudioFile, int lengthOfWaveformDataInBytes)
```

### Clone

```csharp
public object Clone()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)