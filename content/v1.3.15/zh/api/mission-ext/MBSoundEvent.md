---
title: "MBSoundEvent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBSoundEvent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSoundEvent

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class MBSoundEvent`
**领域:** mission-ext

## 概述

`MBSoundEvent` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### PlaySound
`public static bool PlaySound(int soundCodeId, in Vec3 position)`

**用途 / Purpose:** 处理 `play sound` 相关逻辑。

### PlaySound
`public static bool PlaySound(int soundCodeId, Vec3 position)`

**用途 / Purpose:** 处理 `play sound` 相关逻辑。

### PlaySound
`public static bool PlaySound(int soundCodeId, ref SoundEventParameter parameter, Vec3 position)`

**用途 / Purpose:** 处理 `play sound` 相关逻辑。

### PlaySound
`public static bool PlaySound(string soundPath, ref SoundEventParameter parameter, Vec3 position)`

**用途 / Purpose:** 处理 `play sound` 相关逻辑。

### PlaySound
`public static bool PlaySound(int soundCodeId, ref SoundEventParameter parameter, in Vec3 position)`

**用途 / Purpose:** 处理 `play sound` 相关逻辑。

### PlayEventFromSoundBuffer
`public static void PlayEventFromSoundBuffer(string eventId, byte soundData, Scene scene, bool is3d, bool isBlocking)`

**用途 / Purpose:** 处理 `play event from sound buffer` 相关逻辑。

### CreateEventFromExternalFile
`public static void CreateEventFromExternalFile(string programmerEventName, string soundFilePath, Scene scene, bool is3d, bool isBlocking)`

**用途 / Purpose:** 创建一个 `event from external file` 实例或对象。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MBSoundEvent.PlaySound(0, position);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
