---
title: "BodyGeneratorView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BodyGeneratorView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BodyGeneratorView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BodyGeneratorView : IFaceGeneratorHandler`
**Base:** `IFaceGeneratorHandler`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator/BodyGeneratorView.cs`

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

**用途 / Purpose:** 将 `face to default` 重置为初始状态。

### FaceGenShowDebug
`public static string FaceGenShowDebug(List<string> strings)`

**用途 / Purpose:** 处理 `face gen show debug` 相关逻辑。

### FaceGenUpdateDeformKeys
`public static string FaceGenUpdateDeformKeys(List<string> strings)`

**用途 / Purpose:** 处理 `face gen update deform keys` 相关逻辑。

### ReadyToRender
`public bool ReadyToRender()`

**用途 / Purpose:** 处理 `ready to render` 相关逻辑。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### InitCamera
`public static MatrixFrame InitCamera(Camera camera, Vec3 cameraPosition)`

**用途 / Purpose:** 初始化 `camera` 的状态、资源或绑定。

## 使用示例

```csharp
var view = new BodyGeneratorView();
```

## 参见

- [完整类目录](../catalog)