---
title: "ThumbnailCacheManager"
description: "ThumbnailCacheManager 的自动生成类参考。"
---
# ThumbnailCacheManager

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ThumbnailCacheManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/ThumbnailCacheManager.cs`

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

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 cached inventory tableau scene used 状态或条件。

```csharp
// 先通过子系统 API 拿到 ThumbnailCacheManager 实例
ThumbnailCacheManager thumbnailCacheManager = ...;
var result = thumbnailCacheManager.IsCachedInventoryTableauSceneUsed();
```

### GetCachedInventoryTableauScene
`public Scene GetCachedInventoryTableauScene()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cached inventory tableau scene 的结果。

```csharp
// 先通过子系统 API 拿到 ThumbnailCacheManager 实例
ThumbnailCacheManager thumbnailCacheManager = ...;
var result = thumbnailCacheManager.GetCachedInventoryTableauScene();
```

### ReturnCachedInventoryTableauScene
`public void ReturnCachedInventoryTableauScene()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ReturnCachedInventoryTableauScene 对应的操作。

```csharp
// 先通过子系统 API 拿到 ThumbnailCacheManager 实例
ThumbnailCacheManager thumbnailCacheManager = ...;
thumbnailCacheManager.ReturnCachedInventoryTableauScene();
```

### IsCachedMapConversationTableauSceneUsed
`public bool IsCachedMapConversationTableauSceneUsed()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 cached map conversation tableau scene used 状态或条件。

```csharp
// 先通过子系统 API 拿到 ThumbnailCacheManager 实例
ThumbnailCacheManager thumbnailCacheManager = ...;
var result = thumbnailCacheManager.IsCachedMapConversationTableauSceneUsed();
```

### GetCachedMapConversationTableauScene
`public Scene GetCachedMapConversationTableauScene()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cached map conversation tableau scene 的结果。

```csharp
// 先通过子系统 API 拿到 ThumbnailCacheManager 实例
ThumbnailCacheManager thumbnailCacheManager = ...;
var result = thumbnailCacheManager.GetCachedMapConversationTableauScene();
```

### ReturnCachedMapConversationTableauScene
`public void ReturnCachedMapConversationTableauScene()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ReturnCachedMapConversationTableauScene 对应的操作。

```csharp
// 先通过子系统 API 拿到 ThumbnailCacheManager 实例
ThumbnailCacheManager thumbnailCacheManager = ...;
thumbnailCacheManager.ReturnCachedMapConversationTableauScene();
```

### GetNumberOfPendingRequests
`public static int GetNumberOfPendingRequests()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 number of pending requests 的结果。

```csharp
// 静态调用，不需要实例
ThumbnailCacheManager.GetNumberOfPendingRequests();
```

### IsNativeMemoryCleared
`public static bool IsNativeMemoryCleared()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 native memory cleared 状态或条件。

```csharp
// 静态调用，不需要实例
ThumbnailCacheManager.IsNativeMemoryCleared();
```

### InitializeManager
`public static void InitializeManager()`

**用途 / Purpose:** **用途 / Purpose:** 为 manager 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
ThumbnailCacheManager.InitializeManager();
```

### RegisterThumbnailCache
`public void RegisterThumbnailCache(IThumbnailCache thumbnailCache)`

**用途 / Purpose:** **用途 / Purpose:** 将thumbnail cache注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 ThumbnailCacheManager 实例
ThumbnailCacheManager thumbnailCacheManager = ...;
thumbnailCacheManager.RegisterThumbnailCache(thumbnailCache);
```

### UnregisterThumbnailCache
`public void UnregisterThumbnailCache(IThumbnailCache thumbnailCache)`

**用途 / Purpose:** **用途 / Purpose:** 从当前系统中注销thumbnail cache。

```csharp
// 先通过子系统 API 拿到 ThumbnailCacheManager 实例
ThumbnailCacheManager thumbnailCacheManager = ...;
thumbnailCacheManager.UnregisterThumbnailCache(thumbnailCache);
```

### InitializeSandboxValues
`public static void InitializeSandboxValues()`

**用途 / Purpose:** **用途 / Purpose:** 为 sandbox values 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
ThumbnailCacheManager.InitializeSandboxValues();
```

### ReleaseSandboxValues
`public static void ReleaseSandboxValues()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ReleaseSandboxValues 对应的操作。

```csharp
// 静态调用，不需要实例
ThumbnailCacheManager.ReleaseSandboxValues();
```

### ClearManager
`public static void ClearManager()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的manager。

```csharp
// 静态调用，不需要实例
ThumbnailCacheManager.ClearManager();
```

### CreateTexture
`public Texture CreateTexture(ThumbnailCreationData thumbnailCreationData)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 texture 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 ThumbnailCacheManager 实例
ThumbnailCacheManager thumbnailCacheManager = ...;
var result = thumbnailCacheManager.CreateTexture(thumbnailCreationData);
```

### DestroyTexture
`public void DestroyTexture(ThumbnailCreationData thumbnailCreationData)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DestroyTexture 对应的操作。

```csharp
// 先通过子系统 API 拿到 ThumbnailCacheManager 实例
ThumbnailCacheManager thumbnailCacheManager = ...;
thumbnailCacheManager.DestroyTexture(thumbnailCreationData);
```

### ForceDestroyTexture
`public void ForceDestroyTexture(ThumbnailCreationData thumbnailCreationData)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ForceDestroyTexture 对应的操作。

```csharp
// 先通过子系统 API 拿到 ThumbnailCacheManager 实例
ThumbnailCacheManager thumbnailCacheManager = ...;
thumbnailCacheManager.ForceDestroyTexture(thumbnailCreationData);
```

### GetCachedHeroSilhouetteTexture
`public Texture GetCachedHeroSilhouetteTexture()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cached hero silhouette texture 的结果。

```csharp
// 先通过子系统 API 拿到 ThumbnailCacheManager 实例
ThumbnailCacheManager thumbnailCacheManager = ...;
var result = thumbnailCacheManager.GetCachedHeroSilhouetteTexture();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 ThumbnailCacheManager 实例
ThumbnailCacheManager thumbnailCacheManager = ...;
thumbnailCacheManager.Tick(0);
```

## 使用示例

```csharp
var manager = ThumbnailCacheManager.Current;
```

## 参见

- [本区域目录](../)