---
title: "ThumbnailCacheManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ThumbnailCacheManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ThumbnailCacheManager

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ThumbnailCacheManager`
**Base:** 无
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/ThumbnailCacheManager.cs`

## 概述

`ThumbnailCacheManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ThumbnailCacheManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static ThumbnailCacheManager Current { get; }` |
| `InventorySceneCameraFrame` | `public MatrixFrame InventorySceneCameraFrame { get; }` |

## 主要方法

### IsCachedInventoryTableauSceneUsed
`public bool IsCachedInventoryTableauSceneUsed()`

**用途 / Purpose:** 处理 `is cached inventory tableau scene used` 相关逻辑。

### GetCachedInventoryTableauScene
`public Scene GetCachedInventoryTableauScene()`

**用途 / Purpose:** 获取 `cached inventory tableau scene` 的当前值。

### ReturnCachedInventoryTableauScene
`public void ReturnCachedInventoryTableauScene()`

**用途 / Purpose:** 处理 `return cached inventory tableau scene` 相关逻辑。

### IsCachedMapConversationTableauSceneUsed
`public bool IsCachedMapConversationTableauSceneUsed()`

**用途 / Purpose:** 处理 `is cached map conversation tableau scene used` 相关逻辑。

### GetCachedMapConversationTableauScene
`public Scene GetCachedMapConversationTableauScene()`

**用途 / Purpose:** 获取 `cached map conversation tableau scene` 的当前值。

### ReturnCachedMapConversationTableauScene
`public void ReturnCachedMapConversationTableauScene()`

**用途 / Purpose:** 处理 `return cached map conversation tableau scene` 相关逻辑。

### GetNumberOfPendingRequests
`public static int GetNumberOfPendingRequests()`

**用途 / Purpose:** 获取 `number of pending requests` 的当前值。

### IsNativeMemoryCleared
`public static bool IsNativeMemoryCleared()`

**用途 / Purpose:** 处理 `is native memory cleared` 相关逻辑。

### InitializeManager
`public static void InitializeManager()`

**用途 / Purpose:** 初始化 `manager` 的状态、资源或绑定。

### RegisterThumbnailCache
`public void RegisterThumbnailCache(IThumbnailCache thumbnailCache)`

**用途 / Purpose:** 处理 `register thumbnail cache` 相关逻辑。

### UnregisterThumbnailCache
`public void UnregisterThumbnailCache(IThumbnailCache thumbnailCache)`

**用途 / Purpose:** 处理 `unregister thumbnail cache` 相关逻辑。

### InitializeSandboxValues
`public static void InitializeSandboxValues()`

**用途 / Purpose:** 初始化 `sandbox values` 的状态、资源或绑定。

### ReleaseSandboxValues
`public static void ReleaseSandboxValues()`

**用途 / Purpose:** 处理 `release sandbox values` 相关逻辑。

### ClearManager
`public static void ClearManager()`

**用途 / Purpose:** 处理 `clear manager` 相关逻辑。

### CreateTexture
`public TextureCreationInfo CreateTexture(ThumbnailCreationData thumbnailCreationData)`

**用途 / Purpose:** 创建一个 `texture` 实例或对象。

### DestroyTexture
`public bool DestroyTexture(ThumbnailCreationData thumbnailCreationData)`

**用途 / Purpose:** 处理 `destroy texture` 相关逻辑。

### ForceClearAllCache
`public void ForceClearAllCache(bool releaseImmediately)`

**用途 / Purpose:** 处理 `force clear all cache` 相关逻辑。

### GetCachedHeroSilhouetteTexture
`public Texture GetCachedHeroSilhouetteTexture()`

**用途 / Purpose:** 获取 `cached hero silhouette texture` 的当前值。

### ClearUnusedCache
`public void ClearUnusedCache()`

**用途 / Purpose:** 处理 `clear unused cache` 相关逻辑。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

## 使用示例

```csharp
var manager = ThumbnailCacheManager.Current;
```

## 参见

- [完整类目录](../catalog)