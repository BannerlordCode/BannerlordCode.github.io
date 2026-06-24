<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Music`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Music

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public class Music`
**领域:** engine

## 概述

`Music` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
Music.GetFreeMusicChannelIndex();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
