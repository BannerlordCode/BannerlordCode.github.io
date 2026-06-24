<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Music`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `free music channel index` 的当前值。

### LoadClip
`public static void LoadClip(int index, string pathToClip)`

**用途 / Purpose:** 加载 `clip` 数据。

### UnloadClip
`public static void UnloadClip(int index)`

**用途 / Purpose:** 处理 `unload clip` 相关逻辑。

### IsClipLoaded
`public static bool IsClipLoaded(int index)`

**用途 / Purpose:** 处理 `is clip loaded` 相关逻辑。

### PlayMusic
`public static void PlayMusic(int index)`

**用途 / Purpose:** 处理 `play music` 相关逻辑。

### PlayDelayed
`public static void PlayDelayed(int index, int deltaMilliseconds)`

**用途 / Purpose:** 处理 `play delayed` 相关逻辑。

### IsMusicPlaying
`public static bool IsMusicPlaying(int index)`

**用途 / Purpose:** 处理 `is music playing` 相关逻辑。

### PauseMusic
`public static void PauseMusic(int index)`

**用途 / Purpose:** 处理 `pause music` 相关逻辑。

### StopMusic
`public static void StopMusic(int index)`

**用途 / Purpose:** 处理 `stop music` 相关逻辑。

### SetVolume
`public static void SetVolume(int index, float volume)`

**用途 / Purpose:** 设置 `volume` 的值或状态。

## 使用示例

```csharp
Music.GetFreeMusicChannelIndex();
```

## 参见

- [完整类目录](../catalog)