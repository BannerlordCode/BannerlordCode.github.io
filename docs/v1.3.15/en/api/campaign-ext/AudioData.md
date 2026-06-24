<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AudioData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AudioData

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class AudioData : ICloneable`
**Base:** `ICloneable`
**File:** `TaleWorlds.PSAI/Editor/AudioData.cs`

## Overview

`AudioData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AudioData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public AudioData CreatePsaiDotNetVersion()`

**Purpose:** Creates a new `psai dot net version` instance or object.

### GetMillisecondsFromSampleCount
`public int GetMillisecondsFromSampleCount(int sampleCount)`

**Purpose:** Gets the current value of `milliseconds from sample count`.

### GetSampleCountFromMilliseconds
`public int GetSampleCountFromMilliseconds(int durationMs)`

**Purpose:** Gets the current value of `sample count from milliseconds`.

### GetLengthInSamplesBasedOnBeats
`public int GetLengthInSamplesBasedOnBeats(float bpm, float beats)`

**Purpose:** Gets the current value of `length in samples based on beats`.

### GetPostbeatLengthInSamplesBasedOnBeats
`public int GetPostbeatLengthInSamplesBasedOnBeats()`

**Purpose:** Gets the current value of `postbeat length in samples based on beats`.

### GetPrebeatLengthInSamplesBasedOnBeats
`public int GetPrebeatLengthInSamplesBasedOnBeats()`

**Purpose:** Gets the current value of `prebeat length in samples based on beats`.

### CalculateTotalLengthInSamples
`public static int CalculateTotalLengthInSamples(int lengthOfWaveformDataInBytes, int bitsPerSample, int channelCount)`

**Purpose:** Handles logic related to `calculate total length in samples`.

### DoUpdateMembersBasedOnWaveHeader
`public bool DoUpdateMembersBasedOnWaveHeader(string fullPathToAudioFile, out string errorMessage)`

**Purpose:** Handles logic related to `do update members based on wave header`.

### SeekChunkInWaveHeader
`public static bool SeekChunkInWaveHeader(ref BinaryReader reader, string chunk)`

**Purpose:** Handles logic related to `seek chunk in wave header`.

### ReadWaveHeader
`public static PsaiResult ReadWaveHeader(Stream stream, out int outChannelCount, out int outSampleRate, out int outBitsPerSample, out int outLengthOfWaveformDatablockInBytes, out long outBytePositionOfWaveformData)`

**Purpose:** Handles logic related to `read wave header`.

### LoadWaveformDataToByteArray
`public static byte LoadWaveformDataToByteArray(string fullFilePath, long byteIndexOfWaveformDataWithinAudioFile, int lengthOfWaveformDataInBytes)`

**Purpose:** Loads `waveform data to byte array` data.

### Clone
`public object Clone()`

**Purpose:** Handles logic related to `clone`.

## Usage Example

```csharp
var value = new AudioData();
```

## See Also

- [Complete Class Catalog](../catalog)