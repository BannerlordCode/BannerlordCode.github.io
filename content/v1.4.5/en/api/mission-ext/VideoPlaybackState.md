---
title: "VideoPlaybackState"
description: "Auto-generated class reference for VideoPlaybackState."
---
# VideoPlaybackState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VideoPlaybackState : GameState`
**Base:** `GameState`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/VideoPlaybackState.cs`

## Overview

`VideoPlaybackState` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `VideoPath` | `public string VideoPath { get; }` |
| `AudioPath` | `public string AudioPath { get; }` |
| `FrameRate` | `public float FrameRate { get; }` |
| `SubtitleFileBasePath` | `public string SubtitleFileBasePath { get; }` |
| `CanUserSkip` | `public bool CanUserSkip { get; }` |

## Key Methods

### SetStartingParameters
`public void SetStartingParameters(string videoPath, string audioPath, string subtitleFileBasePath, float frameRate = 30f, bool canUserSkip = true)`

**Purpose:** Assigns a new value to starting parameters and updates the object's internal state.

```csharp
// Obtain an instance of VideoPlaybackState from the subsystem API first
VideoPlaybackState videoPlaybackState = ...;
videoPlaybackState.SetStartingParameters("example", "example", "example", 0, false);
```

### SetOnVideoFinisedDelegate
`public void SetOnVideoFinisedDelegate(Action onVideoFinised)`

**Purpose:** Assigns a new value to on video finised delegate and updates the object's internal state.

```csharp
// Obtain an instance of VideoPlaybackState from the subsystem API first
VideoPlaybackState videoPlaybackState = ...;
videoPlaybackState.SetOnVideoFinisedDelegate(onVideoFinised);
```

### OnVideoStarted
`public void OnVideoStarted()`

**Purpose:** Invoked when the video started event is raised.

```csharp
// Obtain an instance of VideoPlaybackState from the subsystem API first
VideoPlaybackState videoPlaybackState = ...;
videoPlaybackState.OnVideoStarted();
```

### OnVideoFinished
`public void OnVideoFinished()`

**Purpose:** Invoked when the video finished event is raised.

```csharp
// Obtain an instance of VideoPlaybackState from the subsystem API first
VideoPlaybackState videoPlaybackState = ...;
videoPlaybackState.OnVideoFinished();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VideoPlaybackState videoPlaybackState = ...;
videoPlaybackState.SetStartingParameters("example", "example", "example", 0, false);
```

## See Also

- [Area Index](../)