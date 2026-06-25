---
title: "Music"
description: "Music 的自动生成类参考。"
---
# Music

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Music`
**Base:** 无
**File:** `TaleWorlds.Engine/Music.cs`

## 概述

`Music` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetFreeMusicChannelIndex
`public static int GetFreeMusicChannelIndex()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 free music channel index 的结果。

```csharp
// 静态调用，不需要实例
Music.GetFreeMusicChannelIndex();
```

### LoadClip
`public static void LoadClip(int index, string pathToClip)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 clip。

```csharp
// 静态调用，不需要实例
Music.LoadClip(0, "example");
```

### UnloadClip
`public static void UnloadClip(int index)`

**用途 / Purpose:** **用途 / Purpose:** 调用 UnloadClip 对应的操作。

```csharp
// 静态调用，不需要实例
Music.UnloadClip(0);
```

### IsClipLoaded
`public static bool IsClipLoaded(int index)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 clip loaded 状态或条件。

```csharp
// 静态调用，不需要实例
Music.IsClipLoaded(0);
```

### PlayMusic
`public static void PlayMusic(int index)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PlayMusic 对应的操作。

```csharp
// 静态调用，不需要实例
Music.PlayMusic(0);
```

### PlayDelayed
`public static void PlayDelayed(int index, int deltaMilliseconds)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PlayDelayed 对应的操作。

```csharp
// 静态调用，不需要实例
Music.PlayDelayed(0, 0);
```

### IsMusicPlaying
`public static bool IsMusicPlaying(int index)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 music playing 状态或条件。

```csharp
// 静态调用，不需要实例
Music.IsMusicPlaying(0);
```

### PauseMusic
`public static void PauseMusic(int index)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PauseMusic 对应的操作。

```csharp
// 静态调用，不需要实例
Music.PauseMusic(0);
```

### StopMusic
`public static void StopMusic(int index)`

**用途 / Purpose:** **用途 / Purpose:** 停止music流程或状态机。

```csharp
// 静态调用，不需要实例
Music.StopMusic(0);
```

### SetVolume
`public static void SetVolume(int index, float volume)`

**用途 / Purpose:** **用途 / Purpose:** 为 volume 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Music.SetVolume(0, 0);
```

## 使用示例

```csharp
Music.GetFreeMusicChannelIndex();
```

## 参见

- [本区域目录](../)