---
title: "PsaiCore"
description: "Auto-generated class reference for PsaiCore."
---
# PsaiCore

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class PsaiCore`
**Base:** none
**File:** `bin/TaleWorlds.PSAI/psai.net/PsaiCore.cs`

## Overview

`PsaiCore` lives in `psai.net` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.net` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static PsaiCore Instance { get; set; }` |

## Key Methods

### IsInstanceInitialized
`public static bool IsInstanceInitialized()`

**Purpose:** Determines whether the current object is in the `instance initialized` state or condition.

```csharp
// Static call; no instance required
PsaiCore.IsInstanceInitialized();
```

### SetMaximumLatencyNeededByPlatformToBufferSounddata
`public PsaiResult SetMaximumLatencyNeededByPlatformToBufferSounddata(int latencyInMilliseconds)`

**Purpose:** Assigns a new value to `maximum latency needed by platform to buffer sounddata` and updates the object's internal state.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.SetMaximumLatencyNeededByPlatformToBufferSounddata(0);
```

### SetMaximumLatencyNeededByPlatformToPlayBackBufferedSounddata
`public PsaiResult SetMaximumLatencyNeededByPlatformToPlayBackBufferedSounddata(int latencyInMilliseconds)`

**Purpose:** Assigns a new value to `maximum latency needed by platform to play back buffered sounddata` and updates the object's internal state.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.SetMaximumLatencyNeededByPlatformToPlayBackBufferedSounddata(0);
```

### LoadSoundtrackFromProjectFile
`public PsaiResult LoadSoundtrackFromProjectFile(List<string> pathToProjectFiles)`

**Purpose:** Reads `soundtrack from project file` from persistent storage or a stream.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.LoadSoundtrackFromProjectFile(pathToProjectFiles);
```

### TriggerMusicTheme
`public PsaiResult TriggerMusicTheme(int themeId, float intensity)`

**Purpose:** Triggers the logic or event associated with `music theme`.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.TriggerMusicTheme(0, 0);
```

### TriggerMusicTheme
`public PsaiResult TriggerMusicTheme(int themeId, float intensity, int musicDurationInSeconds)`

**Purpose:** Triggers the logic or event associated with `music theme`.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.TriggerMusicTheme(0, 0, 0);
```

### AddToCurrentIntensity
`public PsaiResult AddToCurrentIntensity(float deltaIntensity)`

**Purpose:** Adds `to current intensity` to the current collection or state.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.AddToCurrentIntensity(0);
```

### StopMusic
`public PsaiResult StopMusic(bool immediately)`

**Purpose:** Stops the `music` flow or state machine.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.StopMusic(false);
```

### StopMusic
`public PsaiResult StopMusic(bool immediately, float fadeOutSeconds)`

**Purpose:** Stops the `music` flow or state machine.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.StopMusic(false, 0);
```

### ReturnToLastBasicMood
`public PsaiResult ReturnToLastBasicMood(bool immediately)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.ReturnToLastBasicMood(false);
```

### GoToRest
`public PsaiResult GoToRest(bool immediately, float fadeOutSeconds)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.GoToRest(false, 0);
```

### GoToRest
`public PsaiResult GoToRest(bool immediately, float fadeOutSeconds, int restTimeMin, int restTimeMax)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.GoToRest(false, 0, 0, 0);
```

### HoldCurrentIntensity
`public PsaiResult HoldCurrentIntensity(bool hold)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.HoldCurrentIntensity(false);
```

### GetVersion
`public string GetVersion()`

**Purpose:** Reads and returns the `version` value held by the current object.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.GetVersion();
```

### Update
`public PsaiResult Update()`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.Update();
```

### GetVolume
`public float GetVolume()`

**Purpose:** Reads and returns the `volume` value held by the current object.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.GetVolume();
```

### SetVolume
`public void SetVolume(float volume)`

**Purpose:** Assigns a new value to `volume` and updates the object's internal state.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
psaiCore.SetVolume(0);
```

### SetPaused
`public void SetPaused(bool setPaused)`

**Purpose:** Assigns a new value to `paused` and updates the object's internal state.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
psaiCore.SetPaused(false);
```

### GetCurrentIntensity
`public float GetCurrentIntensity()`

**Purpose:** Reads and returns the `current intensity` value held by the current object.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.GetCurrentIntensity();
```

### GetPsaiInfo
`public PsaiInfo GetPsaiInfo()`

**Purpose:** Reads and returns the `psai info` value held by the current object.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.GetPsaiInfo();
```

### GetSoundtrackInfo
`public SoundtrackInfo GetSoundtrackInfo()`

**Purpose:** Reads and returns the `soundtrack info` value held by the current object.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.GetSoundtrackInfo();
```

### GetThemeInfo
`public ThemeInfo GetThemeInfo(int themeId)`

**Purpose:** Reads and returns the `theme info` value held by the current object.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.GetThemeInfo(0);
```

### GetSegmentInfo
`public SegmentInfo GetSegmentInfo(int segmentId)`

**Purpose:** Reads and returns the `segment info` value held by the current object.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.GetSegmentInfo(0);
```

### GetCurrentSegmentId
`public int GetCurrentSegmentId()`

**Purpose:** Reads and returns the `current segment id` value held by the current object.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.GetCurrentSegmentId();
```

### GetCurrentThemeId
`public int GetCurrentThemeId()`

**Purpose:** Reads and returns the `current theme id` value held by the current object.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.GetCurrentThemeId();
```

### GetRemainingMillisecondsOfCurrentSegmentPlayback
`public int GetRemainingMillisecondsOfCurrentSegmentPlayback()`

**Purpose:** Reads and returns the `remaining milliseconds of current segment playback` value held by the current object.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.GetRemainingMillisecondsOfCurrentSegmentPlayback();
```

### GetRemainingMillisecondsUntilNextSegmentStart
`public int GetRemainingMillisecondsUntilNextSegmentStart()`

**Purpose:** Reads and returns the `remaining milliseconds until next segment start` value held by the current object.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.GetRemainingMillisecondsUntilNextSegmentStart();
```

### MenuModeEnter
`public PsaiResult MenuModeEnter(int menuThemeId, float menuThemeIntensity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.MenuModeEnter(0, 0);
```

### MenuModeLeave
`public PsaiResult MenuModeLeave()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.MenuModeLeave();
```

### MenuModeIsActive
`public bool MenuModeIsActive()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.MenuModeIsActive();
```

### CutSceneIsActive
`public bool CutSceneIsActive()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.CutSceneIsActive();
```

### CutSceneEnter
`public PsaiResult CutSceneEnter(int themeId, float intensity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.CutSceneEnter(0, 0);
```

### CutSceneLeave
`public PsaiResult CutSceneLeave(bool immediately, bool reset)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.CutSceneLeave(false, false);
```

### PlaySegment
`public PsaiResult PlaySegment(int segmentId)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.PlaySegment(0);
```

### CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible
`public bool CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible(int sourceSegmentId, int targetThemeId)`

**Purpose:** Verifies whether `if at least one direct transition or layering is possible` holds true for the current object.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
var result = psaiCore.CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible(0, 0);
```

### SetLastBasicMood
`public void SetLastBasicMood(int themeId)`

**Purpose:** Assigns a new value to `last basic mood` and updates the object's internal state.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
psaiCore.SetLastBasicMood(0);
```

### Release
`public void Release()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiCore from the subsystem API first
PsaiCore psaiCore = ...;
psaiCore.Release();
```

## Usage Example

```csharp
PsaiCore.IsInstanceInitialized();
```

## See Also

- [Area Index](../)