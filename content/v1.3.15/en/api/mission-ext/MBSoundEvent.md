---
title: "MBSoundEvent"
description: "Auto-generated class reference for MBSoundEvent."
---
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

**Purpose:** **Purpose:** Executes the PlaySound logic.

```csharp
// Static call; no instance required
MBSoundEvent.PlaySound(0, position);
```

### PlaySound
`public static bool PlaySound(int soundCodeId, Vec3 position)`

**Purpose:** **Purpose:** Executes the PlaySound logic.

```csharp
// Static call; no instance required
MBSoundEvent.PlaySound(0, position);
```

### PlaySound
`public static bool PlaySound(int soundCodeId, ref SoundEventParameter parameter, Vec3 position)`

**Purpose:** **Purpose:** Executes the PlaySound logic.

```csharp
// Static call; no instance required
MBSoundEvent.PlaySound(0, parameter, position);
```

### PlaySound
`public static bool PlaySound(string soundPath, ref SoundEventParameter parameter, Vec3 position)`

**Purpose:** **Purpose:** Executes the PlaySound logic.

```csharp
// Static call; no instance required
MBSoundEvent.PlaySound("example", parameter, position);
```

### PlaySound
`public static bool PlaySound(int soundCodeId, ref SoundEventParameter parameter, in Vec3 position)`

**Purpose:** **Purpose:** Executes the PlaySound logic.

```csharp
// Static call; no instance required
MBSoundEvent.PlaySound(0, parameter, position);
```

### PlayEventFromSoundBuffer
`public static void PlayEventFromSoundBuffer(string eventId, byte soundData, Scene scene, bool is3d, bool isBlocking)`

**Purpose:** **Purpose:** Executes the PlayEventFromSoundBuffer logic.

```csharp
// Static call; no instance required
MBSoundEvent.PlayEventFromSoundBuffer("example", 0, scene, false, false);
```

### CreateEventFromExternalFile
`public static void CreateEventFromExternalFile(string programmerEventName, string soundFilePath, Scene scene, bool is3d, bool isBlocking)`

**Purpose:** **Purpose:** Constructs a new event from external file entity and returns it to the caller.

```csharp
// Static call; no instance required
MBSoundEvent.CreateEventFromExternalFile("example", "example", scene, false, false);
```

## Usage Example

```csharp
MBSoundEvent.PlaySound(0, position);
```

## See Also

- [Area Index](../)