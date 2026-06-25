---
title: "AudioData"
description: "Auto-generated class reference for AudioData."
---
# AudioData

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class AudioData`
**Base:** none
**File:** `TaleWorlds.PSAI/net/AudioData.cs`

## Overview

`AudioData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AudioData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetFullLengthInMilliseconds
`public int GetFullLengthInMilliseconds()`

**Purpose:** Reads and returns the `full length in milliseconds` value held by the current object.

```csharp
// Obtain an instance of AudioData from the subsystem API first
AudioData audioData = ...;
var result = audioData.GetFullLengthInMilliseconds();
```

### GetPreBeatZoneInMilliseconds
`public int GetPreBeatZoneInMilliseconds()`

**Purpose:** Reads and returns the `pre beat zone in milliseconds` value held by the current object.

```csharp
// Obtain an instance of AudioData from the subsystem API first
AudioData audioData = ...;
var result = audioData.GetPreBeatZoneInMilliseconds();
```

### GetPostBeatZoneInMilliseconds
`public int GetPostBeatZoneInMilliseconds()`

**Purpose:** Reads and returns the `post beat zone in milliseconds` value held by the current object.

```csharp
// Obtain an instance of AudioData from the subsystem API first
AudioData audioData = ...;
var result = audioData.GetPostBeatZoneInMilliseconds();
```

### GetSampleCountByMilliseconds
`public int GetSampleCountByMilliseconds(int milliSeconds)`

**Purpose:** Reads and returns the `sample count by milliseconds` value held by the current object.

```csharp
// Obtain an instance of AudioData from the subsystem API first
AudioData audioData = ...;
var result = audioData.GetSampleCountByMilliseconds(0);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
AudioData entry = ...;
```

## See Also

- [Area Index](../)