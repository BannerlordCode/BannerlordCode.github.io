---
title: "SoundEvent"
description: "Auto-generated class reference for SoundEvent."
---
# SoundEvent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class SoundEvent`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/SoundEvent.cs`

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

**Purpose:** **Purpose:** Reads and returns the sound id value held by the this instance.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
var result = soundEvent.GetSoundId();
```

### CreateEventFromString
`public static SoundEvent CreateEventFromString(string eventId, Scene scene)`

**Purpose:** **Purpose:** Constructs a new event from string entity and returns it to the caller.

```csharp
// Static call; no instance required
SoundEvent.CreateEventFromString("example", scene);
```

### SetEventMinMaxDistance
`public void SetEventMinMaxDistance(Vec3 newRadius)`

**Purpose:** **Purpose:** Assigns a new value to event min max distance and updates the object's internal state.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
soundEvent.SetEventMinMaxDistance(newRadius);
```

### GetEventIdFromString
`public static int GetEventIdFromString(string name)`

**Purpose:** **Purpose:** Reads and returns the event id from string value held by the this instance.

```csharp
// Static call; no instance required
SoundEvent.GetEventIdFromString("example");
```

### PlaySound2D
`public static bool PlaySound2D(int soundCodeId)`

**Purpose:** **Purpose:** Executes the PlaySound2D logic.

```csharp
// Static call; no instance required
SoundEvent.PlaySound2D(0);
```

### PlaySound2D
`public static bool PlaySound2D(string soundName)`

**Purpose:** **Purpose:** Executes the PlaySound2D logic.

```csharp
// Static call; no instance required
SoundEvent.PlaySound2D("example");
```

### GetTotalEventCount
`public static int GetTotalEventCount()`

**Purpose:** **Purpose:** Reads and returns the total event count value held by the this instance.

```csharp
// Static call; no instance required
SoundEvent.GetTotalEventCount();
```

### CreateEvent
`public static SoundEvent CreateEvent(int soundCodeId, Scene scene)`

**Purpose:** **Purpose:** Constructs a new event entity and returns it to the caller.

```csharp
// Static call; no instance required
SoundEvent.CreateEvent(0, scene);
```

### IsNullSoundEvent
`public bool IsNullSoundEvent()`

**Purpose:** **Purpose:** Determines whether the this instance is in the null sound event state or condition.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
var result = soundEvent.IsNullSoundEvent();
```

### Play
`public bool Play()`

**Purpose:** **Purpose:** Executes the Play logic.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
var result = soundEvent.Play();
```

### Pause
`public void Pause()`

**Purpose:** **Purpose:** Executes the Pause logic.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
soundEvent.Pause();
```

### Resume
`public void Resume()`

**Purpose:** **Purpose:** Executes the Resume logic.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
soundEvent.Resume();
```

### PlayExtraEvent
`public void PlayExtraEvent(string eventName)`

**Purpose:** **Purpose:** Executes the PlayExtraEvent logic.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
soundEvent.PlayExtraEvent("example");
```

### SetSwitch
`public void SetSwitch(string switchGroupName, string newSwitchStateName)`

**Purpose:** **Purpose:** Assigns a new value to switch and updates the object's internal state.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
soundEvent.SetSwitch("example", "example");
```

### TriggerCue
`public void TriggerCue()`

**Purpose:** **Purpose:** Triggers the logic or event associated with cue.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
soundEvent.TriggerCue();
```

### PlayInPosition
`public bool PlayInPosition(Vec3 position)`

**Purpose:** **Purpose:** Executes the PlayInPosition logic.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
var result = soundEvent.PlayInPosition(position);
```

### Stop
`public void Stop()`

**Purpose:** **Purpose:** Stops the this instance's flow or state machine.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
soundEvent.Stop();
```

### SetParameter
`public void SetParameter(string parameterName, float value)`

**Purpose:** **Purpose:** Assigns a new value to parameter and updates the object's internal state.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
soundEvent.SetParameter("example", 0);
```

### SetParameter
`public void SetParameter(int parameterIndex, float value)`

**Purpose:** **Purpose:** Assigns a new value to parameter and updates the object's internal state.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
soundEvent.SetParameter(0, 0);
```

### GetEventMinMaxDistance
`public Vec3 GetEventMinMaxDistance()`

**Purpose:** **Purpose:** Reads and returns the event min max distance value held by the this instance.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
var result = soundEvent.GetEventMinMaxDistance();
```

### SetPosition
`public void SetPosition(Vec3 vec)`

**Purpose:** **Purpose:** Assigns a new value to position and updates the object's internal state.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
soundEvent.SetPosition(vec);
```

### SetVelocity
`public void SetVelocity(Vec3 vec)`

**Purpose:** **Purpose:** Assigns a new value to velocity and updates the object's internal state.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
soundEvent.SetVelocity(vec);
```

### Release
`public void Release()`

**Purpose:** **Purpose:** Executes the Release logic.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
soundEvent.Release();
```

### IsPlaying
`public bool IsPlaying()`

**Purpose:** **Purpose:** Determines whether the this instance is in the playing state or condition.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
var result = soundEvent.IsPlaying();
```

### IsPaused
`public bool IsPaused()`

**Purpose:** **Purpose:** Determines whether the this instance is in the paused state or condition.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
var result = soundEvent.IsPaused();
```

### IsStopped
`public bool IsStopped()`

**Purpose:** **Purpose:** Determines whether the this instance is in the stopped state or condition.

```csharp
// Obtain an instance of SoundEvent from the subsystem API first
SoundEvent soundEvent = ...;
var result = soundEvent.IsStopped();
```

### CreateEventFromSoundBuffer
`public static SoundEvent CreateEventFromSoundBuffer(string eventId, byte soundData, Scene scene, bool is3d, bool isBlocking)`

**Purpose:** **Purpose:** Constructs a new event from sound buffer entity and returns it to the caller.

```csharp
// Static call; no instance required
SoundEvent.CreateEventFromSoundBuffer("example", 0, scene, false, false);
```

### CreateEventFromExternalFile
`public static SoundEvent CreateEventFromExternalFile(string programmerEventName, string soundFilePath, Scene scene, bool is3d, bool isBlocking)`

**Purpose:** **Purpose:** Constructs a new event from external file entity and returns it to the caller.

```csharp
// Static call; no instance required
SoundEvent.CreateEventFromExternalFile("example", "example", scene, false, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SoundEvent soundEvent = ...;
soundEvent.GetSoundId();
```

## See Also

- [Area Index](../)