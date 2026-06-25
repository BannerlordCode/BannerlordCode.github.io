---
title: "GauntletMapOverlayView"
description: "GauntletMapOverlayView 的自动生成类参考。"
---
# GauntletMapOverlayView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapOverlayView : MapView`
**Base:** `MapView`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapOverlayView.cs`

## 概述

`GauntletMapOverlayView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletMapOverlayView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInArmyManagement` | `public bool IsInArmyManagement { get; }` |

## 主要方法

### GetOverlay
`public GameMenuOverlay GetOverlay(MapScreen.MapOverlayType mapOverlayType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 overlay 的结果。

```csharp
// 先通过子系统 API 拿到 GauntletMapOverlayView 实例
GauntletMapOverlayView gauntletMapOverlayView = ...;
var result = gauntletMapOverlayView.GetOverlay(mapOverlayType);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
GauntletMapOverlayView view = ...;
```

## 参见

- [本区域目录](../)