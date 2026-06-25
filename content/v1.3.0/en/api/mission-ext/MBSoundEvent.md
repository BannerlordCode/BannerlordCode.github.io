---
title: "MBSoundEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBSoundEvent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBSoundEvent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBSoundEvent`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBSoundEvent.cs`

## Overview

`MBSoundEvent` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### PlaySound
`public static bool PlaySound(int soundCodeId, in Vec3 position)`

**Purpose:** Handles logic related to `play sound`.

### PlaySound
`public static bool PlaySound(int soundCodeId, Vec3 position)`

**Purpose:** Handles logic related to `play sound`.

### PlaySound
`public static bool PlaySound(int soundCodeId, ref SoundEventParameter parameter, Vec3 position)`

**Purpose:** Handles logic related to `play sound`.

### PlaySound
`public static bool PlaySound(string soundPath, ref SoundEventParameter parameter, Vec3 position)`

**Purpose:** Handles logic related to `play sound`.

### PlaySound
`public static bool PlaySound(int soundCodeId, ref SoundEventParameter parameter, in Vec3 position)`

**Purpose:** Handles logic related to `play sound`.

### PlayEventFromSoundBuffer
`public static void PlayEventFromSoundBuffer(string eventId, byte soundData, Scene scene, bool is3d, bool isBlocking)`

**Purpose:** Handles logic related to `play event from sound buffer`.

### CreateEventFromExternalFile
`public static void CreateEventFromExternalFile(string programmerEventName, string soundFilePath, Scene scene, bool is3d, bool isBlocking)`

**Purpose:** Creates a new `event from external file` instance or object.

## Usage Example

```csharp
MBSoundEvent.PlaySound(0, position);
```

## See Also

- [Complete Class Catalog](../catalog)