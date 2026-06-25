---
title: "AudioPlaybackLayerChannelStandalone"
description: "Auto-generated class reference for AudioPlaybackLayerChannelStandalone."
---
# AudioPlaybackLayerChannelStandalone

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class AudioPlaybackLayerChannelStandalone : IAudioPlaybackLayerChannel`
**Base:** `IAudioPlaybackLayerChannel`
**File:** `bin/TaleWorlds.PSAI/psai.net/AudioPlaybackLayerChannelStandalone.cs`

## Overview

`AudioPlaybackLayerChannelStandalone` lives in `psai.net` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.net` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Release
`public void Release()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AudioPlaybackLayerChannelStandalone from the subsystem API first
AudioPlaybackLayerChannelStandalone audioPlaybackLayerChannelStandalone = ...;
audioPlaybackLayerChannelStandalone.Release();
```

### LoadSegment
`public PsaiResult LoadSegment(Segment segment)`

**Purpose:** Reads `segment` from persistent storage or a stream.

```csharp
// Obtain an instance of AudioPlaybackLayerChannelStandalone from the subsystem API first
AudioPlaybackLayerChannelStandalone audioPlaybackLayerChannelStandalone = ...;
var result = audioPlaybackLayerChannelStandalone.LoadSegment(segment);
```

### ReleaseSegment
`public PsaiResult ReleaseSegment()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AudioPlaybackLayerChannelStandalone from the subsystem API first
AudioPlaybackLayerChannelStandalone audioPlaybackLayerChannelStandalone = ...;
var result = audioPlaybackLayerChannelStandalone.ReleaseSegment();
```

### ScheduleSegmentPlayback
`public PsaiResult ScheduleSegmentPlayback(Segment snippet, int delayMilliseconds)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AudioPlaybackLayerChannelStandalone from the subsystem API first
AudioPlaybackLayerChannelStandalone audioPlaybackLayerChannelStandalone = ...;
var result = audioPlaybackLayerChannelStandalone.ScheduleSegmentPlayback(snippet, 0);
```

### StopChannel
`public PsaiResult StopChannel()`

**Purpose:** Stops the `channel` flow or state machine.

```csharp
// Obtain an instance of AudioPlaybackLayerChannelStandalone from the subsystem API first
AudioPlaybackLayerChannelStandalone audioPlaybackLayerChannelStandalone = ...;
var result = audioPlaybackLayerChannelStandalone.StopChannel();
```

### SetVolume
`public PsaiResult SetVolume(float volume)`

**Purpose:** Assigns a new value to `volume` and updates the object's internal state.

```csharp
// Obtain an instance of AudioPlaybackLayerChannelStandalone from the subsystem API first
AudioPlaybackLayerChannelStandalone audioPlaybackLayerChannelStandalone = ...;
var result = audioPlaybackLayerChannelStandalone.SetVolume(0);
```

### SetPaused
`public PsaiResult SetPaused(bool paused)`

**Purpose:** Assigns a new value to `paused` and updates the object's internal state.

```csharp
// Obtain an instance of AudioPlaybackLayerChannelStandalone from the subsystem API first
AudioPlaybackLayerChannelStandalone audioPlaybackLayerChannelStandalone = ...;
var result = audioPlaybackLayerChannelStandalone.SetPaused(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AudioPlaybackLayerChannelStandalone audioPlaybackLayerChannelStandalone = ...;
audioPlaybackLayerChannelStandalone.Release();
```

## See Also

- [Area Index](../)