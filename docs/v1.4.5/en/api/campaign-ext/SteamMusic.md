<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamMusic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamMusic

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamMusic`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamMusic.cs`

## Overview

`SteamMusic` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BIsEnabled
`public static bool BIsEnabled()`

**Purpose:** Handles logic related to `b is enabled`.

### BIsPlaying
`public static bool BIsPlaying()`

**Purpose:** Handles logic related to `b is playing`.

### GetPlaybackStatus
`public static AudioPlayback_Status GetPlaybackStatus()`

**Purpose:** Gets the current value of `playback status`.

### Play
`public static void Play()`

**Purpose:** Handles logic related to `play`.

### Pause
`public static void Pause()`

**Purpose:** Handles logic related to `pause`.

### PlayPrevious
`public static void PlayPrevious()`

**Purpose:** Handles logic related to `play previous`.

### PlayNext
`public static void PlayNext()`

**Purpose:** Handles logic related to `play next`.

### SetVolume
`public static void SetVolume(float flVolume)`

**Purpose:** Sets the value or state of `volume`.

### GetVolume
`public static float GetVolume()`

**Purpose:** Gets the current value of `volume`.

## Usage Example

```csharp
SteamMusic.BIsEnabled();
```

## See Also

- [Complete Class Catalog](../catalog)