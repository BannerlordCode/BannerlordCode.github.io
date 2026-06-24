<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VideoPlaybackState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VideoPlaybackState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VideoPlaybackState : GameState`
**Base:** `GameState`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/VideoPlaybackState.cs`

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

**Purpose:** Sets the value or state of `starting parameters`.

### SetOnVideoFinisedDelegate
`public void SetOnVideoFinisedDelegate(Action onVideoFinised)`

**Purpose:** Sets the value or state of `on video finised delegate`.

### OnVideoStarted
`public void OnVideoStarted()`

**Purpose:** Called when the `video started` event is raised.

### OnVideoFinished
`public void OnVideoFinished()`

**Purpose:** Called when the `video finished` event is raised.

## Usage Example

```csharp
var value = new VideoPlaybackState();
value.SetStartingParameters("example", "example", "example", 0, false);
```

## See Also

- [Complete Class Catalog](../catalog)