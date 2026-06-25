---
title: "VideoPlaybackVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VideoPlaybackVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VideoPlaybackVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VideoPlaybackVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback/VideoPlaybackVM.cs`

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

**Purpose:** Handles logic related to `tick`.

### GetItemInTimeframe
`public SRTHelper.SubtitleItem GetItemInTimeframe(float timeInSecondsInVideo)`

**Purpose:** Gets the current value of `item in timeframe`.

### SetSubtitles
`public void SetSubtitles(List<SRTHelper.SubtitleItem> lines)`

**Purpose:** Sets the value or state of `subtitles`.

## Usage Example

```csharp
var value = new VideoPlaybackVM();
value.Tick(0);
```

## See Also

- [Complete Class Catalog](../catalog)