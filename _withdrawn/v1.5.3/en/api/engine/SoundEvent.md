---
title: "SoundEvent"
description: "Auto-generated class reference for SoundEvent."
---
# SoundEvent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class SoundEvent `
**Base:** System.Object
**Source:** TaleWorlds.Engine/SoundEvent.cs

## Overview

Auto-generated stub for `SoundEvent`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetSoundId
`public int GetSoundId()`

### CreateEventFromString
`public static SoundEvent CreateEventFromString(string eventId,Scene scene)`

### SetEventMinMaxDistance
`public void SetEventMinMaxDistance(Vec3 newRadius)`

### GetEventIdFromString
`public static int GetEventIdFromString(string name)`

### PlaySound2D
`public static bool PlaySound2D(int soundCodeId)`

### GetTotalEventCount
`public static int GetTotalEventCount()`

### CreateEvent
`public static SoundEvent CreateEvent(int soundCodeId,Scene scene)`

### IsNullSoundEvent
`public bool IsNullSoundEvent()`

### Play
`public bool Play()`

### Pause
`public void Pause()`

### Resume
`public void Resume()`

### PlayExtraEvent
`public void PlayExtraEvent(string eventName)`

### SetSwitch
`public void SetSwitch(string switchGroupName,string newSwitchStateName)`

### TriggerCue
`public void TriggerCue()`

### PlayInPosition
`public bool PlayInPosition(Vec3 position)`

### Stop
`public void Stop()`

### SetParameter
`public void SetParameter(string parameterName,float value)`

### GetEventMinMaxDistance
`public Vec3 GetEventMinMaxDistance()`

### SetPosition
`public void SetPosition(Vec3 vec)`

### SetVelocity
`public void SetVelocity(Vec3 vec)`

### Release
`public void Release()`

### IsPlaying
`public bool IsPlaying()`

### IsPaused
`public bool IsPaused()`

### IsStopped
`public bool IsStopped()`

### CreateEventFromSoundBuffer
`public static SoundEvent CreateEventFromSoundBuffer(string eventId,byte[] soundData,Scene scene,bool is3d,bool isBlocking)`

### CreateEventFromExternalFile
`public static SoundEvent CreateEventFromExternalFile(string programmerEventName,string soundFilePath,Scene scene,bool is3d,bool isBlocking)`

## See Also

- [Section index](../)
