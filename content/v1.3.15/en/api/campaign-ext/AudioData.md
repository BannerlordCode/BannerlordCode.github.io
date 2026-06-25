---
title: "AudioData"
description: "Auto-generated class reference for AudioData."
---
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

**Purpose:** Constructs a new `psai dot net version` entity and returns it to the caller.

```csharp
// Obtain an instance of AudioData from the subsystem API first
AudioData audioData = ...;
var result = audioData.CreatePsaiDotNetVersion();
```

### GetMillisecondsFromSampleCount
`public int GetMillisecondsFromSampleCount(int sampleCount)`

**Purpose:** Reads and returns the `milliseconds from sample count` value held by the current object.

```csharp
// Obtain an instance of AudioData from the subsystem API first
AudioData audioData = ...;
var result = audioData.GetMillisecondsFromSampleCount(0);
```

### GetSampleCountFromMilliseconds
`public int GetSampleCountFromMilliseconds(int durationMs)`

**Purpose:** Reads and returns the `sample count from milliseconds` value held by the current object.

```csharp
// Obtain an instance of AudioData from the subsystem API first
AudioData audioData = ...;
var result = audioData.GetSampleCountFromMilliseconds(0);
```

### GetLengthInSamplesBasedOnBeats
`public int GetLengthInSamplesBasedOnBeats(float bpm, float beats)`

**Purpose:** Reads and returns the `length in samples based on beats` value held by the current object.

```csharp
// Obtain an instance of AudioData from the subsystem API first
AudioData audioData = ...;
var result = audioData.GetLengthInSamplesBasedOnBeats(0, 0);
```

### GetPostbeatLengthInSamplesBasedOnBeats
`public int GetPostbeatLengthInSamplesBasedOnBeats()`

**Purpose:** Reads and returns the `postbeat length in samples based on beats` value held by the current object.

```csharp
// Obtain an instance of AudioData from the subsystem API first
AudioData audioData = ...;
var result = audioData.GetPostbeatLengthInSamplesBasedOnBeats();
```

### GetPrebeatLengthInSamplesBasedOnBeats
`public int GetPrebeatLengthInSamplesBasedOnBeats()`

**Purpose:** Reads and returns the `prebeat length in samples based on beats` value held by the current object.

```csharp
// Obtain an instance of AudioData from the subsystem API first
AudioData audioData = ...;
var result = audioData.GetPrebeatLengthInSamplesBasedOnBeats();
```

### CalculateTotalLengthInSamples
`public static int CalculateTotalLengthInSamples(int lengthOfWaveformDataInBytes, int bitsPerSample, int channelCount)`

**Purpose:** Calculates the current value or result of `total length in samples`.

```csharp
// Static call; no instance required
AudioData.CalculateTotalLengthInSamples(0, 0, 0);
```

### DoUpdateMembersBasedOnWaveHeader
`public bool DoUpdateMembersBasedOnWaveHeader(string fullPathToAudioFile, out string errorMessage)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AudioData from the subsystem API first
AudioData audioData = ...;
var result = audioData.DoUpdateMembersBasedOnWaveHeader("example", errorMessage);
```

### SeekChunkInWaveHeader
`public static bool SeekChunkInWaveHeader(ref BinaryReader reader, string chunk)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
AudioData.SeekChunkInWaveHeader(reader, "example");
```

### ReadWaveHeader
`public static PsaiResult ReadWaveHeader(Stream stream, out int outChannelCount, out int outSampleRate, out int outBitsPerSample, out int outLengthOfWaveformDatablockInBytes, out long outBytePositionOfWaveformData)`

**Purpose:** Reads the data or state of `wave header`.

```csharp
// Static call; no instance required
AudioData.ReadWaveHeader(stream, outChannelCount, outSampleRate, outBitsPerSample, outLengthOfWaveformDatablockInBytes, outBytePositionOfWaveformData);
```

### LoadWaveformDataToByteArray
`public static byte LoadWaveformDataToByteArray(string fullFilePath, long byteIndexOfWaveformDataWithinAudioFile, int lengthOfWaveformDataInBytes)`

**Purpose:** Reads `waveform data to byte array` from persistent storage or a stream.

```csharp
// Static call; no instance required
AudioData.LoadWaveformDataToByteArray("example", 0, 0);
```

### Clone
`public object Clone()`

**Purpose:** Duplicates the current object's state and returns a new instance.

```csharp
// Obtain an instance of AudioData from the subsystem API first
AudioData audioData = ...;
var result = audioData.Clone();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
AudioData entry = ...;
```

## See Also

- [Area Index](../)