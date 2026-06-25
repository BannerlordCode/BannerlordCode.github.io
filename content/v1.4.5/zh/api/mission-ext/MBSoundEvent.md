---
title: "MBSoundEvent"
description: "MBSoundEvent 的自动生成类参考。"
---
# MBSoundEvent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBSoundEvent`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBSoundEvent.cs`

## 概述

`MBSoundEvent` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### PlaySound
`public static bool PlaySound(int soundCodeId, in Vec3 position)`

**用途 / Purpose:** 处理与 「play sound」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBSoundEvent.PlaySound(0, position);
```

### PlaySound
`public static bool PlaySound(int soundCodeId, Vec3 position)`

**用途 / Purpose:** 处理与 「play sound」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBSoundEvent.PlaySound(0, position);
```

### PlaySound
`public static bool PlaySound(int soundCodeId, ref SoundEventParameter parameter, Vec3 position)`

**用途 / Purpose:** 处理与 「play sound」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBSoundEvent.PlaySound(0, parameter, position);
```

### PlaySound
`public static bool PlaySound(string soundPath, ref SoundEventParameter parameter, Vec3 position)`

**用途 / Purpose:** 处理与 「play sound」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBSoundEvent.PlaySound("example", parameter, position);
```

### PlaySound
`public static bool PlaySound(int soundCodeId, ref SoundEventParameter parameter, in Vec3 position)`

**用途 / Purpose:** 处理与 「play sound」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBSoundEvent.PlaySound(0, parameter, position);
```

### PlayEventFromSoundBuffer
`public static void PlayEventFromSoundBuffer(string eventId, byte soundData, Scene scene, bool is3d, bool isBlocking)`

**用途 / Purpose:** 处理与 「play event from sound buffer」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBSoundEvent.PlayEventFromSoundBuffer("example", 0, scene, false, false);
```

### CreateEventFromExternalFile
`public static void CreateEventFromExternalFile(string programmerEventName, string soundFilePath, Scene scene, bool is3d, bool isBlocking)`

**用途 / Purpose:** 构建一个新的 「event from external file」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MBSoundEvent.CreateEventFromExternalFile("example", "example", scene, false, false);
```

## 使用示例

```csharp
MBSoundEvent.PlaySound(0, position);
```

## 参见

- [本区域目录](../)