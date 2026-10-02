---
title: "SoundEvent"
description: "SoundEvent 的自动生成类参考。"
---
# SoundEvent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class SoundEvent `
**Base:** System.Object
**Source:** TaleWorlds.Engine/SoundEvent.cs

## 概述

`SoundEvent` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/SoundEvent.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetSoundId
`public int GetSoundId() `

### CreateEventFromString
`public static SoundEvent CreateEventFromString(string eventId,Scene scene) `

### SetEventMinMaxDistance
`public void SetEventMinMaxDistance(Vec3 newRadius) `

### GetEventIdFromString
`public static int GetEventIdFromString(string name) `

### PlaySound2D
`public static bool PlaySound2D(int soundCodeId) `
`public static bool PlaySound2D(string soundName) `

### GetTotalEventCount
`public static int GetTotalEventCount() `

### CreateEvent
`public static SoundEvent CreateEvent(int soundCodeId,Scene scene) `

### IsNullSoundEvent
`public bool IsNullSoundEvent() `

### Play
`public bool Play() `

### Pause
`public void Pause() `

### Resume
`public void Resume() `

### PlayExtraEvent
`public void PlayExtraEvent(string eventName) `

### SetSwitch
`public void SetSwitch(string switchGroupName,string newSwitchStateName) `

### TriggerCue
`public void TriggerCue() `

### PlayInPosition
`public bool PlayInPosition(Vec3 position) `

### Stop
`public void Stop() `

### SetParameter
`public void SetParameter(string parameterName,float value) `
`public void SetParameter(int parameterIndex,float value) `

### GetEventMinMaxDistance
`public Vec3 GetEventMinMaxDistance() `

### SetPosition
`public void SetPosition(Vec3 vec) `

### SetVelocity
`public void SetVelocity(Vec3 vec) `

### Release
`public void Release() `

### IsPlaying
`public bool IsPlaying() `

### IsPaused
`public bool IsPaused() `

### IsStopped
`public bool IsStopped() `

### CreateEventFromSoundBuffer
`public static SoundEvent CreateEventFromSoundBuffer(string eventId,byte[] soundData,Scene scene,bool is3d,bool isBlocking) `

### CreateEventFromExternalFile
`public static SoundEvent CreateEventFromExternalFile(string programmerEventName,string soundFilePath,Scene scene,bool is3d,bool isBlocking) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
