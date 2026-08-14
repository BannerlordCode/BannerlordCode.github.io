---
title: "TwoDimensionView"
description: "TwoDimensionView 的自动生成类参考。"
---
# TwoDimensionView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TwoDimensionView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/TwoDimensionView.cs`

## 概述

`TwoDimensionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `TwoDimensionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateTwoDimension
`public static TwoDimensionView CreateTwoDimension(string viewName)`

**用途 / Purpose:** 构建一个新的 two dimension 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TwoDimensionView.CreateTwoDimension("example");
```

### BeginFrame
`public void BeginFrame()`

**用途 / Purpose:** 调用 BeginFrame 对应的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionView 实例
TwoDimensionView twoDimensionView = ...;
twoDimensionView.BeginFrame();
```

### EndFrame
`public void EndFrame()`

**用途 / Purpose:** 调用 EndFrame 对应的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionView 实例
TwoDimensionView twoDimensionView = ...;
twoDimensionView.EndFrame();
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 TwoDimensionView 实例
TwoDimensionView twoDimensionView = ...;
twoDimensionView.Clear();
```

### CreateMeshFromDescription
`public void CreateMeshFromDescription(WeakMaterial material, TwoDimensionMeshDrawData meshDrawData)`

**用途 / Purpose:** 构建一个新的 mesh from description 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 TwoDimensionView 实例
TwoDimensionView twoDimensionView = ...;
twoDimensionView.CreateMeshFromDescription(material, meshDrawData);
```

### CreateTextMeshFromCache
`public bool CreateTextMeshFromCache(Material material, TwoDimensionTextMeshDrawData meshDrawData)`

**用途 / Purpose:** 构建一个新的 text mesh from cache 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 TwoDimensionView 实例
TwoDimensionView twoDimensionView = ...;
var result = twoDimensionView.CreateTextMeshFromCache(material, meshDrawData);
```

### CreateTextMeshFromDescription
`public void CreateTextMeshFromDescription(float vertices, float uvs, uint indices, int indexCount, Material material, TwoDimensionTextMeshDrawData meshDrawData)`

**用途 / Purpose:** 构建一个新的 text mesh from description 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 TwoDimensionView 实例
TwoDimensionView twoDimensionView = ...;
twoDimensionView.CreateTextMeshFromDescription(0, 0, 0, 0, material, meshDrawData);
```

### GetOrCreateMaterial
`public WeakMaterial GetOrCreateMaterial(Texture mainTexture, Texture overlayTexture)`

**用途 / Purpose:** 读取并返回当前对象中 or create material 的结果。

```csharp
// 先通过子系统 API 拿到 TwoDimensionView 实例
TwoDimensionView twoDimensionView = ...;
var result = twoDimensionView.GetOrCreateMaterial(mainTexture, overlayTexture);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
TwoDimensionView view = ...;
```

## 参见

- [本区域目录](../)