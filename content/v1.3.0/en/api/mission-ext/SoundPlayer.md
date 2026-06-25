---
title: "SoundPlayer"
description: "Auto-generated class reference for SoundPlayer."
---
# SoundPlayer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SoundPlayer : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/SoundPlayer.cs`

## Overview

`SoundPlayer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### UpdatePlaying
`public void UpdatePlaying()`

**Purpose:** Recalculates and stores the latest representation of playing.

```csharp
// Obtain an instance of SoundPlayer from the subsystem API first
SoundPlayer soundPlayer = ...;
soundPlayer.UpdatePlaying();
```

### PlaySound
`public void PlaySound()`

**Purpose:** Executes the PlaySound logic.

```csharp
// Obtain an instance of SoundPlayer from the subsystem API first
SoundPlayer soundPlayer = ...;
soundPlayer.PlaySound();
```

### ResumeSound
`public void ResumeSound()`

**Purpose:** Executes the ResumeSound logic.

```csharp
// Obtain an instance of SoundPlayer from the subsystem API first
SoundPlayer soundPlayer = ...;
soundPlayer.ResumeSound();
```

### PauseSound
`public void PauseSound()`

**Purpose:** Executes the PauseSound logic.

```csharp
// Obtain an instance of SoundPlayer from the subsystem API first
SoundPlayer soundPlayer = ...;
soundPlayer.PauseSound();
```

### StopSound
`public void StopSound()`

**Purpose:** Stops the sound flow or state machine.

```csharp
// Obtain an instance of SoundPlayer from the subsystem API first
SoundPlayer soundPlayer = ...;
soundPlayer.StopSound();
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of SoundPlayer from the subsystem API first
SoundPlayer soundPlayer = ...;
var result = soundPlayer.GetTickRequirement();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SoundPlayer soundPlayer = ...;
soundPlayer.UpdatePlaying();
```

## See Also

- [Area Index](../)