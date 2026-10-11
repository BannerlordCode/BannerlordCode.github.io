---
title: Audio System
description: TaleWorlds.Native.dll audio system class reference
---
# Audio System

## Mental Model

Treat `Audio System` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

The audio system manages all sounds in the game, including background music, battle sound effects, ambient sounds, etc.

## Overview

The audio subsystem is built on FMOD. `rglFMOD_Sound_manager` is the live implementation; `rglNull_Sound_manager` and `rglNullSound_event` provide silent fallbacks (used on dedicated servers or when audio is disabled). Sound events (`rglSound_event` / `rglFMOD_Sound_event`) are played through emitters (`sound_emitter`, `ambient_sound_emitter`) attached to scene objects, with 3D positioning and distance attenuation handled by the manager.

## Sound Manager

### rglSound_manager

Sound manager base class.

```cpp
rglSound_manager::vftable
```

### rglFMOD_Sound_manager

FMOD sound manager implementation.

```cpp
rglFMOD_Sound_manager::vftable
```

**Responsibilities:**
- Sound playback control
- Volume management
- Mixing control

### rglNull_Sound_manager

Null sound manager (silent).

```cpp
rglNull_Sound_manager::vftable
```

### rglNullSound_event

Null sound event.

```cpp
rglNullSound_event::vftable
```

## Sound Events

### rglSound_event

Sound event.

```cpp
rglSound_event::vftable
```

### rglFMOD_Sound_event

FMOD sound event.

```cpp
rglFMOD_Sound_event::vftable
```

**Types:**
- One-shot
- Looping
- 3D spatial

### rglDedicated_server_fmod

Dedicated server FMOD.

```cpp
rglDedicated_server_fmod::vftable
```

## Sound Emitters

### sound_emitter

Sound emitter.

```cpp
sound_emitter::vftable
```

### ambient_sound_emitter

Ambient sound emitter.

```cpp
ambient_sound_emitter::vftable
```

**Responsibilities:**
- 3D positioning
- Volume attenuation
- Ambient sound control

## Path Sounds

### path_spline_sound_emitter

Path spline sound emitter.

```cpp
path_spline_sound_emitter::vftable
```

### river_generator

River sound generator.

```cpp
river_generator::vftable
```

### road_generator

Road sound generator.

```cpp
road_generator::vftable
```

### road_instance

Road instance.

```cpp
road_instance::vftable
```

## Other Audio Classes

### reverb_instance

Reverb instance.

```cpp
reverb_instance::vftable
```

## Usage Example

```csharp
// Example: the audio system is driven by the engine's scene and mission logic.
// Modders rarely call these vftables directly; instead, sound behavior is
// customized through module data (sound events, triggers) and the managed
// scene/mission APIs. Use this reference to identify which emitter or manager
// handles a sound when debugging missing or duplicated audio.
```

---

**Last updated:** 2026-05-14  
**Source version:** TaleWorlds.Native.dll v1.3.15
