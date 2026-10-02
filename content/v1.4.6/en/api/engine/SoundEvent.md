---
title: "SoundEvent"
description: "SoundEvent: a public class in TaleWorlds.Engine; 29 exposed members (28 methods, 1 properties, 0 fields). Source: TaleWorlds.Engine/SoundEvent.cs."
---
# SoundEvent

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public class SoundEvent`
**File:** `TaleWorlds.Engine/SoundEvent.cs`

## Overview

SoundEvent lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/SoundEvent.cs. It is a public class; the inheritance chain is SoundEvent. It exposes 29 public/protected members: 28 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SoundEvent is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain SoundEvent. The surface is method-led (methods 28/29, properties 1/29), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/SoundEvent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSoundId` | `public int GetSoundId()` | method |
| `CreateEventFromString` | `public static SoundEvent CreateEventFromString(string eventId, Scene scene)` | method |
| `SetEventMinMaxDistance` | `public void SetEventMinMaxDistance(Vec3 newRadius)` | method |
| `GetEventIdFromString` | `public static int GetEventIdFromString(string name)` | method |
| `PlaySound2D` | `public static bool PlaySound2D(int soundCodeId)` | method |
| `PlaySound2D` | `public static bool PlaySound2D(string soundName)` | method |
| `GetTotalEventCount` | `public static int GetTotalEventCount()` | method |
| `CreateEvent` | `public static SoundEvent CreateEvent(int soundCodeId, Scene scene)` | method |
| `IsNullSoundEvent` | `public bool IsNullSoundEvent()` | method |
| `IsValid` | `public bool IsValid` | property |
| `Play` | `public bool Play()` | method |
| `Pause` | `public void Pause()` | method |
| `Resume` | `public void Resume()` | method |
| `PlayExtraEvent` | `public void PlayExtraEvent(string eventName)` | method |
| `SetSwitch` | `public void SetSwitch(string switchGroupName, string newSwitchStateName)` | method |
| `TriggerCue` | `public void TriggerCue()` | method |
| `PlayInPosition` | `public bool PlayInPosition(Vec3 position)` | method |
| `Stop` | `public void Stop()` | method |
| `SetParameter` | `public void SetParameter(string parameterName, float value)` | method |
| `SetParameter` | `public void SetParameter(int parameterIndex, float value)` | method |
| `GetEventMinMaxDistance` | `public Vec3 GetEventMinMaxDistance()` | method |
| `SetPosition` | `public void SetPosition(Vec3 vec)` | method |
| `SetVelocity` | `public void SetVelocity(Vec3 vec)` | method |
| `Release` | `public void Release()` | method |
| `IsPlaying` | `public bool IsPlaying()` | method |
| `IsPaused` | `public bool IsPaused()` | method |
| `IsStopped` | `public bool IsStopped()` | method |
| `CreateEventFromSoundBuffer` | `public static SoundEvent CreateEventFromSoundBuffer(string eventId, byte[]soundData, Scene scene, bool is3d, bool isBlocking)` | method |
| `CreateEventFromExternalFile` | `public static SoundEvent CreateEventFromExternalFile(string programmerEventName, string soundFilePath, Scene scene, bool is3d, bool isBlocking)` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
