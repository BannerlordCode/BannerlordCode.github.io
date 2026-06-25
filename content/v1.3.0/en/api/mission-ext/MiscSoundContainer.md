---
title: "MiscSoundContainer"
description: "Auto-generated class reference for MiscSoundContainer."
---
# MiscSoundContainer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MiscSoundContainer`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MiscSoundContainer.cs`

## Overview

`MiscSoundContainer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SoundCodeMovementFoleyDoorOpen` | `public static int SoundCodeMovementFoleyDoorOpen { get; }` |
| `SoundCodeMovementFoleyDoorClose` | `public static int SoundCodeMovementFoleyDoorClose { get; }` |
| `SoundCodeAmbientNodeSiegeBallistaFire` | `public static int SoundCodeAmbientNodeSiegeBallistaFire { get; }` |
| `SoundCodeAmbientNodeSiegeMangonelFire` | `public static int SoundCodeAmbientNodeSiegeMangonelFire { get; }` |
| `SoundCodeAmbientNodeSiegeTrebuchetFire` | `public static int SoundCodeAmbientNodeSiegeTrebuchetFire { get; }` |
| `SoundCodeAmbientNodeSiegeBallistaHit` | `public static int SoundCodeAmbientNodeSiegeBallistaHit { get; }` |
| `SoundCodeAmbientNodeSiegeBoulderHit` | `public static int SoundCodeAmbientNodeSiegeBoulderHit { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MiscSoundContainer instance = ...;
```

## See Also

- [Area Index](../)