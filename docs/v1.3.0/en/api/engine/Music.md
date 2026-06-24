<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Music`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Music

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Music`
**Base:** none
**File:** `TaleWorlds.Engine/Music.cs`

## Overview

`Music` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetFreeMusicChannelIndex
`public static int GetFreeMusicChannelIndex()`

**Purpose:** Gets the current value of `free music channel index`.

### LoadClip
`public static void LoadClip(int index, string pathToClip)`

**Purpose:** Loads `clip` data.

### UnloadClip
`public static void UnloadClip(int index)`

**Purpose:** Handles logic related to `unload clip`.

### IsClipLoaded
`public static bool IsClipLoaded(int index)`

**Purpose:** Handles logic related to `is clip loaded`.

### PlayMusic
`public static void PlayMusic(int index)`

**Purpose:** Handles logic related to `play music`.

### PlayDelayed
`public static void PlayDelayed(int index, int deltaMilliseconds)`

**Purpose:** Handles logic related to `play delayed`.

### IsMusicPlaying
`public static bool IsMusicPlaying(int index)`

**Purpose:** Handles logic related to `is music playing`.

### PauseMusic
`public static void PauseMusic(int index)`

**Purpose:** Handles logic related to `pause music`.

### StopMusic
`public static void StopMusic(int index)`

**Purpose:** Handles logic related to `stop music`.

### SetVolume
`public static void SetVolume(int index, float volume)`

**Purpose:** Sets the value or state of `volume`.

## Usage Example

```csharp
Music.GetFreeMusicChannelIndex();
```

## See Also

- [Complete Class Catalog](../catalog)