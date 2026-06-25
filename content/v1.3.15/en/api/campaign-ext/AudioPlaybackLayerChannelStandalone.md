---
title: "AudioPlaybackLayerChannelStandalone"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AudioPlaybackLayerChannelStandalone`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AudioPlaybackLayerChannelStandalone

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class AudioPlaybackLayerChannelStandalone : IAudioPlaybackLayerChannel`
**Base:** `IAudioPlaybackLayerChannel`
**File:** `TaleWorlds.PSAI/net/AudioPlaybackLayerChannelStandalone.cs`

## Overview

`AudioPlaybackLayerChannelStandalone` lives in `psai.net` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.net` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Release
`public void Release()`

**Purpose:** Handles logic related to `release`.

### LoadSegment
`public PsaiResult LoadSegment(Segment segment)`

**Purpose:** Loads `segment` data.

### ReleaseSegment
`public PsaiResult ReleaseSegment()`

**Purpose:** Handles logic related to `release segment`.

### ScheduleSegmentPlayback
`public PsaiResult ScheduleSegmentPlayback(Segment snippet, int delayMilliseconds)`

**Purpose:** Handles logic related to `schedule segment playback`.

### StopChannel
`public PsaiResult StopChannel()`

**Purpose:** Handles logic related to `stop channel`.

### SetVolume
`public PsaiResult SetVolume(float volume)`

**Purpose:** Sets the value or state of `volume`.

### SetPaused
`public PsaiResult SetPaused(bool paused)`

**Purpose:** Sets the value or state of `paused`.

## Usage Example

```csharp
var value = new AudioPlaybackLayerChannelStandalone();
value.Release();
```

## See Also

- [Complete Class Catalog](../catalog)