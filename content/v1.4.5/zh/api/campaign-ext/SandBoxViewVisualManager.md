---
title: "SandBoxViewVisualManager"
description: "SandBoxViewVisualManager 的自动生成类参考。"
---
# SandBoxViewVisualManager

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public class SandBoxViewVisualManager`
**Base:** 无
**File:** `Modules.SandBox/SandBox.View/SandBox.View/SandBoxViewVisualManager.cs`

## 概述

`SandBoxViewVisualManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SandBoxViewVisualManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### VisualTick
`public static void VisualTick(MapScreen screen, float realDt, float dt)`

**用途 / Purpose:** 推进 「visual」 状态的周期性更新。

```csharp
// 静态调用，不需要实例
SandBoxViewVisualManager.VisualTick(screen, 0, 0);
```

### OnTick
`public static void OnTick(float realDt, float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SandBoxViewVisualManager.OnTick(0, 0);
```

### ClearVisualMemory
`public static void ClearVisualMemory()`

**用途 / Purpose:** 清空当前对象中的「visual memory」。

```csharp
// 静态调用，不需要实例
SandBoxViewVisualManager.ClearVisualMemory();
```

### OnFrameTick
`public static void OnFrameTick(float dt)`

**用途 / Purpose:** 在 「frame tick」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SandBoxViewVisualManager.OnFrameTick(0);
```

### OnMouseClick
`public static bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)`

**用途 / Purpose:** 在 「mouse click」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SandBoxViewVisualManager.OnMouseClick(visualOfSelectedEntity, intersectionPoint, mouseOverFaceIndex, false);
```

### OnGameLoadFinished
`public static void OnGameLoadFinished()`

**用途 / Purpose:** 在 「game load finished」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SandBoxViewVisualManager.OnGameLoadFinished();
```

### GetComponents
`public MBList<CampaignEntityVisualComponent> GetComponents()`

**用途 / Purpose:** 读取并返回当前对象中 「components」 的结果。

```csharp
// 先通过子系统 API 拿到 SandBoxViewVisualManager 实例
SandBoxViewVisualManager sandBoxViewVisualManager = ...;
var result = sandBoxViewVisualManager.GetComponents();
```

## 使用示例

```csharp
var manager = SandBoxViewVisualManager.Current;
```

## 参见

- [本区域目录](../)