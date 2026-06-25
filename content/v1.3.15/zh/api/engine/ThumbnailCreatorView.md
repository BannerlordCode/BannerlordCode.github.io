---
title: "ThumbnailCreatorView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ThumbnailCreatorView`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 创建一个 `thumbnail creator view` 实例或对象。

### RegisterScene
`public void RegisterScene(Scene scene, bool usePostFx = true)`

**用途 / Purpose:** 处理 `register scene` 相关逻辑。

### RegisterCachedEntity
`public void RegisterCachedEntity(Scene scene, GameEntity entity, string cacheId)`

**用途 / Purpose:** 处理 `register cached entity` 相关逻辑。

### UnregisterCachedEntity
`public void UnregisterCachedEntity(string cacheId)`

**用途 / Purpose:** 处理 `unregister cached entity` 相关逻辑。

### RegisterRenderRequest
`public void RegisterRenderRequest(ref ThumbnailRenderRequest request)`

**用途 / Purpose:** 处理 `register render request` 相关逻辑。

### ClearRequests
`public void ClearRequests()`

**用途 / Purpose:** 处理 `clear requests` 相关逻辑。

### CancelRequest
`public void CancelRequest(string renderID)`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel request`。

### GetNumberOfPendingRequests
`public int GetNumberOfPendingRequests()`

**用途 / Purpose:** 获取 `number of pending requests` 的当前值。

### IsMemoryCleared
`public bool IsMemoryCleared()`

**用途 / Purpose:** 处理 `is memory cleared` 相关逻辑。

### OnThumbnailRenderCompleteDelegate
`public delegate void OnThumbnailRenderCompleteDelegate(string renderId, Texture renderTarget)`

**用途 / Purpose:** 当 `thumbnail render complete delegate` 事件触发时调用此方法。

## 使用示例

```csharp
var view = new ThumbnailCreatorView();
```

## 参见

- [完整类目录](../catalog)