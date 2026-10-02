---
title: "MBSoundEvent"
description: "MBSoundEvent 的自动生成类参考。"
---
# MBSoundEvent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBSoundEvent `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MBSoundEvent.cs

## 概述

`MBSoundEvent` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MBSoundEvent.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### PlaySound
`public static bool PlaySound(int soundCodeId,in Vec3 position) `
`public static bool PlaySound(int soundCodeId,Vec3 position) `
`public static bool PlaySound(int soundCodeId,ref SoundEventParameter parameter,Vec3 position) `
`public static bool PlaySound(string soundPath,ref SoundEventParameter parameter,Vec3 position) `
`public static bool PlaySound(int soundCodeId,ref SoundEventParameter parameter,in Vec3 position) `

### PlayEventFromSoundBuffer
`public static void PlayEventFromSoundBuffer(string eventId,byte[] soundData,Scene scene,bool is3d,bool isBlocking) `

### CreateEventFromExternalFile
`public static void CreateEventFromExternalFile(string programmerEventName,string soundFilePath,Scene scene,bool is3d,bool isBlocking) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
