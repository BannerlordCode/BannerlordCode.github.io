---
title: "TableauView"
description: "TableauView 的自动生成类参考。"
---
# TableauView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TableauView : SceneView`
**Base:** `SceneView`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/TableauView.cs`

## 概述

`TableauView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `TableauView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateTableauView
`public static TableauView CreateTableauView(string viewName)`

**用途 / Purpose:** 构建一个新的 tableau view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TableauView.CreateTableauView("example");
```

### SetSortingEnabled
`public void SetSortingEnabled(bool value)`

**用途 / Purpose:** 为 sorting enabled 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TableauView 实例
TableauView tableauView = ...;
tableauView.SetSortingEnabled(false);
```

### SetContinuousRendering
`public void SetContinuousRendering(bool value)`

**用途 / Purpose:** 为 continuous rendering 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TableauView 实例
TableauView tableauView = ...;
tableauView.SetContinuousRendering(false);
```

### SetDoNotRenderThisFrame
`public void SetDoNotRenderThisFrame(bool value)`

**用途 / Purpose:** 为 do not render this frame 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TableauView 实例
TableauView tableauView = ...;
tableauView.SetDoNotRenderThisFrame(false);
```

### SetDeleteAfterRendering
`public void SetDeleteAfterRendering(bool value)`

**用途 / Purpose:** 为 delete after rendering 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TableauView 实例
TableauView tableauView = ...;
tableauView.SetDeleteAfterRendering(false);
```

### AddTableau
`public static Texture AddTableau(string name, RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, int tableauSizeX, int tableauSizeY)`

**用途 / Purpose:** 将 tableau 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
TableauView.AddTableau("example", eventHandler, objectRef, 0, 0);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
TableauView view = ...;
```

## 参见

- [本区域目录](../)