<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PsaiCore`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PsaiCore

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class PsaiCore`
**Area:** campaign-ext

## Overview

`PsaiCore` lives in `psai.net`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
PsaiCore.IsInstanceInitialized();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
