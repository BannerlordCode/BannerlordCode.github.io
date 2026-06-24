<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBSoundEvent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBSoundEvent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBSoundEvent`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBSoundEvent.cs`

## 概述

`MBSoundEvent` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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
MBSoundEvent.PlaySound(0, position);
```

## 参见

- [完整类目录](../catalog)