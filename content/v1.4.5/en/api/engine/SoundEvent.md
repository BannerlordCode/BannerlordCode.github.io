---
title: "SoundEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SoundEvent`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SoundEvent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class SoundEvent`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/SoundEvent.cs`

## Overview

`SoundEvent` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### GetSoundId
`public int GetSoundId()`

**Purpose:** Gets the current value of `sound id`.

### CreateEventFromString
`public static SoundEvent CreateEventFromString(string eventId, Scene scene)`

**Purpose:** Creates a new `event from string` instance or object.

### SetEventMinMaxDistance
`public void SetEventMinMaxDistance(Vec3 newRadius)`

**Purpose:** Sets the value or state of `event min max distance`.

### GetEventIdFromString
`public static int GetEventIdFromString(string name)`

**Purpose:** Gets the current value of `event id from string`.

### PlaySound2D
`public static bool PlaySound2D(int soundCodeId)`

**Purpose:** Handles logic related to `play sound2 d`.

### PlaySound2D
`public static bool PlaySound2D(string soundName)`

**Purpose:** Handles logic related to `play sound2 d`.

### GetTotalEventCount
`public static int GetTotalEventCount()`

**Purpose:** Gets the current value of `total event count`.

### CreateEvent
`public static SoundEvent CreateEvent(int soundCodeId, Scene scene)`

**Purpose:** Creates a new `event` instance or object.

### IsNullSoundEvent
`public bool IsNullSoundEvent()`

**Purpose:** Handles logic related to `is null sound event`.

### Play
`public bool Play()`

**Purpose:** Handles logic related to `play`.

### Pause
`public void Pause()`

**Purpose:** Handles logic related to `pause`.

### Resume
`public void Resume()`

**Purpose:** Handles logic related to `resume`.

### PlayExtraEvent
`public void PlayExtraEvent(string eventName)`

**Purpose:** Handles logic related to `play extra event`.

### SetSwitch
`public void SetSwitch(string switchGroupName, string newSwitchStateName)`

**Purpose:** Sets the value or state of `switch`.

### TriggerCue
`public void TriggerCue()`

**Purpose:** Handles logic related to `trigger cue`.

### PlayInPosition
`public bool PlayInPosition(Vec3 position)`

**Purpose:** Handles logic related to `play in position`.

### Stop
`public void Stop()`

**Purpose:** Handles logic related to `stop`.

### SetParameter
`public void SetParameter(string parameterName, float value)`

**Purpose:** Sets the value or state of `parameter`.

### SetParameter
`public void SetParameter(int parameterIndex, float value)`

**Purpose:** Sets the value or state of `parameter`.

### GetEventMinMaxDistance
`public Vec3 GetEventMinMaxDistance()`

**Purpose:** Gets the current value of `event min max distance`.

### SetPosition
`public void SetPosition(Vec3 vec)`

**Purpose:** Sets the value or state of `position`.

### SetVelocity
`public void SetVelocity(Vec3 vec)`

**Purpose:** Sets the value or state of `velocity`.

### Release
`public void Release()`

**Purpose:** Handles logic related to `release`.

### IsPlaying
`public bool IsPlaying()`

**Purpose:** Handles logic related to `is playing`.

### IsPaused
`public bool IsPaused()`

**Purpose:** Handles logic related to `is paused`.

### IsStopped
`public bool IsStopped()`

**Purpose:** Handles logic related to `is stopped`.

### CreateEventFromSoundBuffer
`public static SoundEvent CreateEventFromSoundBuffer(string eventId, byte soundData, Scene scene, bool is3d, bool isBlocking)`

**Purpose:** Creates a new `event from sound buffer` instance or object.

### CreateEventFromExternalFile
`public static SoundEvent CreateEventFromExternalFile(string programmerEventName, string soundFilePath, Scene scene, bool is3d, bool isBlocking)`

**Purpose:** Creates a new `event from external file` instance or object.

## Usage Example

```csharp
var value = new SoundEvent();
value.GetSoundId();
```

## See Also

- [Complete Class Catalog](../catalog)