---
title: "SoundPlayer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SoundPlayer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Updates the state or data of `playing`.

### PlaySound
`public void PlaySound()`

**Purpose:** Handles logic related to `play sound`.

### ResumeSound
`public void ResumeSound()`

**Purpose:** Handles logic related to `resume sound`.

### PauseSound
`public void PauseSound()`

**Purpose:** Handles logic related to `pause sound`.

### StopSound
`public void StopSound()`

**Purpose:** Handles logic related to `stop sound`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

## Usage Example

```csharp
var value = new SoundPlayer();
value.UpdatePlaying();
```

## See Also

- [Complete Class Catalog](../catalog)