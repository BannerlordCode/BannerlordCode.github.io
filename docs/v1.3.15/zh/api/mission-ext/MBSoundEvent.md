<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBSoundEvent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSoundEvent

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MBSoundEvent` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### PlaySound

```csharp
public static bool PlaySound(int soundCodeId, in Vec3 position)
```

### PlaySound

```csharp
public static bool PlaySound(int soundCodeId, Vec3 position)
```

### PlaySound

```csharp
public static bool PlaySound(int soundCodeId, ref SoundEventParameter parameter, Vec3 position)
```

### PlaySound

```csharp
public static bool PlaySound(string soundPath, ref SoundEventParameter parameter, Vec3 position)
```

### PlaySound

```csharp
public static bool PlaySound(int soundCodeId, ref SoundEventParameter parameter, in Vec3 position)
```

### PlayEventFromSoundBuffer

```csharp
public static void PlayEventFromSoundBuffer(string eventId, byte soundData, Scene scene, bool is3d, bool isBlocking)
```

### CreateEventFromExternalFile

```csharp
public static void CreateEventFromExternalFile(string programmerEventName, string soundFilePath, Scene scene, bool is3d, bool isBlocking)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)