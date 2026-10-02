---
title: "SoundEvent"
description: "SoundEvent：TaleWorlds.Engine 的 public 类；公开成员 29 个（方法 28、属性 1、字段 0）。源文件 TaleWorlds.Engine/SoundEvent.cs。"
---
# SoundEvent

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public class SoundEvent`
**File:** `TaleWorlds.Engine/SoundEvent.cs`

## 概述

SoundEvent 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/SoundEvent.cs。它是一个 public 类，继承链为 SoundEvent。public/protected 成员共 29 个：28 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SoundEvent 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 SoundEvent。成员构成以方法为主（方法 28/29，属性 1/29），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/SoundEvent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSoundId` | `public int GetSoundId()` | 方法 |
| `CreateEventFromString` | `public static SoundEvent CreateEventFromString(string eventId, Scene scene)` | 方法 |
| `SetEventMinMaxDistance` | `public void SetEventMinMaxDistance(Vec3 newRadius)` | 方法 |
| `GetEventIdFromString` | `public static int GetEventIdFromString(string name)` | 方法 |
| `PlaySound2D` | `public static bool PlaySound2D(int soundCodeId)` | 方法 |
| `PlaySound2D` | `public static bool PlaySound2D(string soundName)` | 方法 |
| `GetTotalEventCount` | `public static int GetTotalEventCount()` | 方法 |
| `CreateEvent` | `public static SoundEvent CreateEvent(int soundCodeId, Scene scene)` | 方法 |
| `IsNullSoundEvent` | `public bool IsNullSoundEvent()` | 方法 |
| `IsValid` | `public bool IsValid` | 属性 |
| `Play` | `public bool Play()` | 方法 |
| `Pause` | `public void Pause()` | 方法 |
| `Resume` | `public void Resume()` | 方法 |
| `PlayExtraEvent` | `public void PlayExtraEvent(string eventName)` | 方法 |
| `SetSwitch` | `public void SetSwitch(string switchGroupName, string newSwitchStateName)` | 方法 |
| `TriggerCue` | `public void TriggerCue()` | 方法 |
| `PlayInPosition` | `public bool PlayInPosition(Vec3 position)` | 方法 |
| `Stop` | `public void Stop()` | 方法 |
| `SetParameter` | `public void SetParameter(string parameterName, float value)` | 方法 |
| `SetParameter` | `public void SetParameter(int parameterIndex, float value)` | 方法 |
| `GetEventMinMaxDistance` | `public Vec3 GetEventMinMaxDistance()` | 方法 |
| `SetPosition` | `public void SetPosition(Vec3 vec)` | 方法 |
| `SetVelocity` | `public void SetVelocity(Vec3 vec)` | 方法 |
| `Release` | `public void Release()` | 方法 |
| `IsPlaying` | `public bool IsPlaying()` | 方法 |
| `IsPaused` | `public bool IsPaused()` | 方法 |
| `IsStopped` | `public bool IsStopped()` | 方法 |
| `CreateEventFromSoundBuffer` | `public static SoundEvent CreateEventFromSoundBuffer(string eventId, byte[]soundData, Scene scene, bool is3d, bool isBlocking)` | 方法 |
| `CreateEventFromExternalFile` | `public static SoundEvent CreateEventFromExternalFile(string programmerEventName, string soundFilePath, Scene scene, bool is3d, bool isBlocking)` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
