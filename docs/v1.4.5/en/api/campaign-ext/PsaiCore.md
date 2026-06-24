<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PsaiCore`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PsaiCore

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class PsaiCore`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.PSAI/psai.net/PsaiCore.cs`

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

**Purpose:** Handles logic related to `is instance initialized`.

### SetMaximumLatencyNeededByPlatformToBufferSounddata
`public PsaiResult SetMaximumLatencyNeededByPlatformToBufferSounddata(int latencyInMilliseconds)`

**Purpose:** Sets the value or state of `maximum latency needed by platform to buffer sounddata`.

### SetMaximumLatencyNeededByPlatformToPlayBackBufferedSounddata
`public PsaiResult SetMaximumLatencyNeededByPlatformToPlayBackBufferedSounddata(int latencyInMilliseconds)`

**Purpose:** Sets the value or state of `maximum latency needed by platform to play back buffered sounddata`.

### LoadSoundtrackFromProjectFile
`public PsaiResult LoadSoundtrackFromProjectFile(List<string> pathToProjectFiles)`

**Purpose:** Loads `soundtrack from project file` data.

### TriggerMusicTheme
`public PsaiResult TriggerMusicTheme(int themeId, float intensity)`

**Purpose:** Handles logic related to `trigger music theme`.

### TriggerMusicTheme
`public PsaiResult TriggerMusicTheme(int themeId, float intensity, int musicDurationInSeconds)`

**Purpose:** Handles logic related to `trigger music theme`.

### AddToCurrentIntensity
`public PsaiResult AddToCurrentIntensity(float deltaIntensity)`

**Purpose:** Adds `to current intensity` to the current collection or state.

### StopMusic
`public PsaiResult StopMusic(bool immediately)`

**Purpose:** Handles logic related to `stop music`.

### StopMusic
`public PsaiResult StopMusic(bool immediately, float fadeOutSeconds)`

**Purpose:** Handles logic related to `stop music`.

### ReturnToLastBasicMood
`public PsaiResult ReturnToLastBasicMood(bool immediately)`

**Purpose:** Handles logic related to `return to last basic mood`.

### GoToRest
`public PsaiResult GoToRest(bool immediately, float fadeOutSeconds)`

**Purpose:** Handles logic related to `go to rest`.

### GoToRest
`public PsaiResult GoToRest(bool immediately, float fadeOutSeconds, int restTimeMin, int restTimeMax)`

**Purpose:** Handles logic related to `go to rest`.

### HoldCurrentIntensity
`public PsaiResult HoldCurrentIntensity(bool hold)`

**Purpose:** Handles logic related to `hold current intensity`.

### GetVersion
`public string GetVersion()`

**Purpose:** Gets the current value of `version`.

### Update
`public PsaiResult Update()`

**Purpose:** Updates the state or data of `update`.

### GetVolume
`public float GetVolume()`

**Purpose:** Gets the current value of `volume`.

### SetVolume
`public void SetVolume(float volume)`

**Purpose:** Sets the value or state of `volume`.

### SetPaused
`public void SetPaused(bool setPaused)`

**Purpose:** Sets the value or state of `paused`.

### GetCurrentIntensity
`public float GetCurrentIntensity()`

**Purpose:** Gets the current value of `current intensity`.

### GetPsaiInfo
`public PsaiInfo GetPsaiInfo()`

**Purpose:** Gets the current value of `psai info`.

### GetSoundtrackInfo
`public SoundtrackInfo GetSoundtrackInfo()`

**Purpose:** Gets the current value of `soundtrack info`.

### GetThemeInfo
`public ThemeInfo GetThemeInfo(int themeId)`

**Purpose:** Gets the current value of `theme info`.

### GetSegmentInfo
`public SegmentInfo GetSegmentInfo(int segmentId)`

**Purpose:** Gets the current value of `segment info`.

### GetCurrentSegmentId
`public int GetCurrentSegmentId()`

**Purpose:** Gets the current value of `current segment id`.

### GetCurrentThemeId
`public int GetCurrentThemeId()`

**Purpose:** Gets the current value of `current theme id`.

### GetRemainingMillisecondsOfCurrentSegmentPlayback
`public int GetRemainingMillisecondsOfCurrentSegmentPlayback()`

**Purpose:** Gets the current value of `remaining milliseconds of current segment playback`.

### GetRemainingMillisecondsUntilNextSegmentStart
`public int GetRemainingMillisecondsUntilNextSegmentStart()`

**Purpose:** Gets the current value of `remaining milliseconds until next segment start`.

### MenuModeEnter
`public PsaiResult MenuModeEnter(int menuThemeId, float menuThemeIntensity)`

**Purpose:** Handles logic related to `menu mode enter`.

### MenuModeLeave
`public PsaiResult MenuModeLeave()`

**Purpose:** Handles logic related to `menu mode leave`.

### MenuModeIsActive
`public bool MenuModeIsActive()`

**Purpose:** Handles logic related to `menu mode is active`.

### CutSceneIsActive
`public bool CutSceneIsActive()`

**Purpose:** Handles logic related to `cut scene is active`.

### CutSceneEnter
`public PsaiResult CutSceneEnter(int themeId, float intensity)`

**Purpose:** Handles logic related to `cut scene enter`.

### CutSceneLeave
`public PsaiResult CutSceneLeave(bool immediately, bool reset)`

**Purpose:** Handles logic related to `cut scene leave`.

### PlaySegment
`public PsaiResult PlaySegment(int segmentId)`

**Purpose:** Handles logic related to `play segment`.

### CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible
`public bool CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible(int sourceSegmentId, int targetThemeId)`

**Purpose:** Handles logic related to `check if at least one direct transition or layering is possible`.

### SetLastBasicMood
`public void SetLastBasicMood(int themeId)`

**Purpose:** Sets the value or state of `last basic mood`.

### Release
`public void Release()`

**Purpose:** Handles logic related to `release`.

## Usage Example

```csharp
PsaiCore.IsInstanceInitialized();
```

## See Also

- [Complete Class Catalog](../catalog)