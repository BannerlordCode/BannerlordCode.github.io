<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AudioData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AudioData

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `AudioData` is a class in the `psai.Editor` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)