---
title: 音频系统 / Audio System
description: TaleWorlds.Native.dll 音频系统类参考
---

# 音频系统 / Audio System

## 概述 / Overview

音频系统管理游戏中的所有声音，包括背景音乐、战斗音效、环境音效等。

The audio system manages all sounds in the game, including background music, battle sound effects, ambient sounds, etc.

## 音效管理器 / Sound Manager

### rglSound_manager

音效管理器基类。

```cpp
rglSound_manager::vftable
```

### rglFMOD_Sound_manager

FMOD 音效管理器实现。

```cpp
rglFMOD_Sound_manager::vftable
```

**功能:**
- 音效播放控制
- 音量管理
- 混音控制

### rglNull_Sound_manager

空音效管理器（无声音）。

```cpp
rglNull_Sound_manager::vftable
```

### rglNullSound_event

空音效事件。

```cpp
rglNullSound_event::vftable
```

## 音效事件 / Sound Events

### rglSound_event

音效事件。

```cpp
rglSound_event::vftable
```

### rglFMOD_Sound_event

FMOD 音效事件。

```cpp
rglFMOD_Sound_event::vftable
```

**类型:**
- 单次播放 (One-shot)
- 循环播放 (Looping)
- 3D 空间音 (3D Spatial)

### rglDedicated_server_fmod

专用服务器 FMOD。

```cpp
rglDedicated_server_fmod::vftable
```

## 音效发射器 / Sound Emitters

### sound_emitter

音效发射器。

```cpp
sound_emitter::vftable
```

### ambient_sound_emitter

环境音效发射器。

```cpp
ambient_sound_emitter::vftable
```

**功能:**
- 3D 位置
- 音量衰减
- 环境音效控制

## 路径声音 / Path Sounds

### path_spline_sound_emitter

路径样条音效发射器。

```cpp
path_spline_sound_emitter::vftable
```

### river_generator

河流音效生成器。

```cpp
river_generator::vftable
```

### road_generator

道路音效生成器。

```cpp
road_generator::vftable
```

### road_instance

道路实例。

```cpp
road_instance::vftable
```

## 其他音频类 / Other Audio Classes

### reverb_instance

混响实例。

```cpp
reverb_instance::vftable
```
