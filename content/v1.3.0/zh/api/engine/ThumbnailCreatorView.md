---
title: "ThumbnailCreatorView"
description: "ThumbnailCreatorView 的自动生成类参考。"
---
# ThumbnailCreatorView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ThumbnailCreatorView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/ThumbnailCreatorView.cs`

## 概述

`ThumbnailCreatorView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `ThumbnailCreatorView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateThumbnailCreatorView
`public static ThumbnailCreatorView CreateThumbnailCreatorView()`

**用途 / Purpose:** 构建一个新的 「thumbnail creator view」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ThumbnailCreatorView.CreateThumbnailCreatorView();
```

### RegisterScene
`public void RegisterScene(Scene scene, bool usePostFx = true)`

**用途 / Purpose:** 将「scene」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 ThumbnailCreatorView 实例
ThumbnailCreatorView thumbnailCreatorView = ...;
thumbnailCreatorView.RegisterScene(scene, false);
```

### RegisterCachedEntity
`public void RegisterCachedEntity(Scene scene, GameEntity entity, string cacheId)`

**用途 / Purpose:** 将「cached entity」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 ThumbnailCreatorView 实例
ThumbnailCreatorView thumbnailCreatorView = ...;
thumbnailCreatorView.RegisterCachedEntity(scene, entity, "example");
```

### UnregisterCachedEntity
`public void UnregisterCachedEntity(string cacheId)`

**用途 / Purpose:** 从当前系统中注销「cached entity」。

```csharp
// 先通过子系统 API 拿到 ThumbnailCreatorView 实例
ThumbnailCreatorView thumbnailCreatorView = ...;
thumbnailCreatorView.UnregisterCachedEntity("example");
```

### RegisterRenderRequest
`public void RegisterRenderRequest(ref ThumbnailRenderRequest request)`

**用途 / Purpose:** 将「render request」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 ThumbnailCreatorView 实例
ThumbnailCreatorView thumbnailCreatorView = ...;
thumbnailCreatorView.RegisterRenderRequest(request);
```

### ClearRequests
`public void ClearRequests()`

**用途 / Purpose:** 清空当前对象中的「requests」。

```csharp
// 先通过子系统 API 拿到 ThumbnailCreatorView 实例
ThumbnailCreatorView thumbnailCreatorView = ...;
thumbnailCreatorView.ClearRequests();
```

### CancelRequest
`public void CancelRequest(string renderID)`

**用途 / Purpose:** 检查当前对象是否满足 「cel request」 的前置条件。

```csharp
// 先通过子系统 API 拿到 ThumbnailCreatorView 实例
ThumbnailCreatorView thumbnailCreatorView = ...;
thumbnailCreatorView.CancelRequest("example");
```

### GetNumberOfPendingRequests
`public int GetNumberOfPendingRequests()`

**用途 / Purpose:** 读取并返回当前对象中 「number of pending requests」 的结果。

```csharp
// 先通过子系统 API 拿到 ThumbnailCreatorView 实例
ThumbnailCreatorView thumbnailCreatorView = ...;
var result = thumbnailCreatorView.GetNumberOfPendingRequests();
```

### IsMemoryCleared
`public bool IsMemoryCleared()`

**用途 / Purpose:** 判断当前对象是否处于 「memory cleared」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ThumbnailCreatorView 实例
ThumbnailCreatorView thumbnailCreatorView = ...;
var result = thumbnailCreatorView.IsMemoryCleared();
```

### OnThumbnailRenderCompleteDelegate
`public delegate void OnThumbnailRenderCompleteDelegate(string renderId, Texture renderTarget)`

**用途 / Purpose:** 在 「thumbnail render complete delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ThumbnailCreatorView 实例
ThumbnailCreatorView thumbnailCreatorView = ...;
thumbnailCreatorView.OnThumbnailRenderCompleteDelegate("example", renderTarget);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
ThumbnailCreatorView view = ...;
```

## 参见

- [本区域目录](../)