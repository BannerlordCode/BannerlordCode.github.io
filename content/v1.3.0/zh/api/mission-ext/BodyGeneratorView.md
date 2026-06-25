---
title: "BodyGeneratorView"
description: "BodyGeneratorView 的自动生成类参考。"
---
# BodyGeneratorView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BodyGeneratorView : IFaceGeneratorHandler`
**Base:** `IFaceGeneratorHandler`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs`

## 概述

`BodyGeneratorView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `BodyGeneratorView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `DataSource` | `public FaceGenVM DataSource { get; }` |
| `GauntletLayer` | `public GauntletLayer GauntletLayer { get; }` |
| `SceneLayer` | `public SceneLayer SceneLayer { get; }` |
| `BodyGen` | `public BodyGenerator BodyGen { get; }` |

## 主要方法

### ResetFaceToDefault
`public void ResetFaceToDefault()`

**用途 / Purpose:** 将 face to default 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 BodyGeneratorView 实例
BodyGeneratorView bodyGeneratorView = ...;
bodyGeneratorView.ResetFaceToDefault();
```

### FaceGenShowDebug
`public static string FaceGenShowDebug(List<string> strings)`

**用途 / Purpose:** 调用 FaceGenShowDebug 对应的操作。

```csharp
// 静态调用，不需要实例
BodyGeneratorView.FaceGenShowDebug(strings);
```

### FaceGenUpdateDeformKeys
`public static string FaceGenUpdateDeformKeys(List<string> strings)`

**用途 / Purpose:** 调用 FaceGenUpdateDeformKeys 对应的操作。

```csharp
// 静态调用，不需要实例
BodyGeneratorView.FaceGenUpdateDeformKeys(strings);
```

### ReadyToRender
`public bool ReadyToRender()`

**用途 / Purpose:** 从当前实例读取y to render相关数据。

```csharp
// 先通过子系统 API 拿到 BodyGeneratorView 实例
BodyGeneratorView bodyGeneratorView = ...;
var result = bodyGeneratorView.ReadyToRender();
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BodyGeneratorView 实例
BodyGeneratorView bodyGeneratorView = ...;
bodyGeneratorView.OnTick(0);
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BodyGeneratorView 实例
BodyGeneratorView bodyGeneratorView = ...;
bodyGeneratorView.OnFinalize();
```

### InitCamera
`public static MatrixFrame InitCamera(Camera camera, Vec3 cameraPosition)`

**用途 / Purpose:** 为 camera 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
BodyGeneratorView.InitCamera(camera, cameraPosition);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
BodyGeneratorView view = ...;
```

## 参见

- [本区域目录](../)