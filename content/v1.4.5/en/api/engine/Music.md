---
title: "Music"
description: "Auto-generated class reference for Music."
---
# Music

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Music`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Music.cs`

## Overview

`Music` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetFreeMusicChannelIndex
`public static int GetFreeMusicChannelIndex()`

**Purpose:** **Purpose:** Reads and returns the free music channel index value held by the this instance.

```csharp
// Static call; no instance required
Music.GetFreeMusicChannelIndex();
```

### LoadClip
`public static void LoadClip(int index, string pathToClip)`

**Purpose:** **Purpose:** Reads clip from persistent storage or a stream.

```csharp
// Static call; no instance required
Music.LoadClip(0, "example");
```

### UnloadClip
`public static void UnloadClip(int index)`

**Purpose:** **Purpose:** Executes the UnloadClip logic.

```csharp
// Static call; no instance required
Music.UnloadClip(0);
```

### IsClipLoaded
`public static bool IsClipLoaded(int index)`

**Purpose:** **Purpose:** Determines whether the this instance is in the clip loaded state or condition.

```csharp
// Static call; no instance required
Music.IsClipLoaded(0);
```

### PlayMusic
`public static void PlayMusic(int index)`

**Purpose:** **Purpose:** Executes the PlayMusic logic.

```csharp
// Static call; no instance required
Music.PlayMusic(0);
```

### PlayDelayed
`public static void PlayDelayed(int index, int deltaMilliseconds)`

**Purpose:** **Purpose:** Executes the PlayDelayed logic.

```csharp
// Static call; no instance required
Music.PlayDelayed(0, 0);
```

### IsMusicPlaying
`public static bool IsMusicPlaying(int index)`

**Purpose:** **Purpose:** Determines whether the this instance is in the music playing state or condition.

```csharp
// Static call; no instance required
Music.IsMusicPlaying(0);
```

### PauseMusic
`public static void PauseMusic(int index)`

**Purpose:** **Purpose:** Executes the PauseMusic logic.

```csharp
// Static call; no instance required
Music.PauseMusic(0);
```

### StopMusic
`public static void StopMusic(int index)`

**Purpose:** **Purpose:** Stops the music flow or state machine.

```csharp
// Static call; no instance required
Music.StopMusic(0);
```

### SetVolume
`public static void SetVolume(int index, float volume)`

**Purpose:** **Purpose:** Assigns a new value to volume and updates the object's internal state.

```csharp
// Static call; no instance required
Music.SetVolume(0, 0);
```

## Usage Example

```csharp
Music.GetFreeMusicChannelIndex();
```

## See Also

- [Area Index](../)