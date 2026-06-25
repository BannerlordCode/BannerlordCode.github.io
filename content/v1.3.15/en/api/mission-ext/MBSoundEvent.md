---
title: "MBSoundEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBSoundEvent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSoundEvent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBSoundEvent`
**Area:** mission-ext

## Overview

`MBSoundEvent` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
MBSoundEvent.PlaySound(0, position);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
