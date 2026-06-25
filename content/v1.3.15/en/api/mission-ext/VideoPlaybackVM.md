---
title: "VideoPlaybackVM"
description: "Auto-generated class reference for VideoPlaybackVM."
---
# VideoPlaybackVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VideoPlaybackVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/VideoPlayback/VideoPlaybackVM.cs`

## Overview

`VideoPlaybackVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SubtitleText` | `public string SubtitleText { get; set; }` |

## Key Methods

### Tick
`public void Tick(float totalElapsedTimeInVideoInSeconds)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of VideoPlaybackVM from the subsystem API first
VideoPlaybackVM videoPlaybackVM = ...;
videoPlaybackVM.Tick(0);
```

### GetItemInTimeframe
`public SRTHelper.SubtitleItem GetItemInTimeframe(float timeInSecondsInVideo)`

**Purpose:** Reads and returns the `item in timeframe` value held by the current object.

```csharp
// Obtain an instance of VideoPlaybackVM from the subsystem API first
VideoPlaybackVM videoPlaybackVM = ...;
var result = videoPlaybackVM.GetItemInTimeframe(0);
```

### SetSubtitles
`public void SetSubtitles(List<SRTHelper.SubtitleItem> lines)`

**Purpose:** Assigns a new value to `subtitles` and updates the object's internal state.

```csharp
// Obtain an instance of VideoPlaybackVM from the subsystem API first
VideoPlaybackVM videoPlaybackVM = ...;
videoPlaybackVM.SetSubtitles(lines);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VideoPlaybackVM videoPlaybackVM = ...;
videoPlaybackVM.Tick(0);
```

## See Also

- [Area Index](../)