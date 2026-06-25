---
title: "GauntletMapBasicView"
description: "GauntletMapBasicView 的自动生成类参考。"
---
# GauntletMapBasicView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapBasicView : MapView`
**Base:** `MapView`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapBasicView.cs`

## 概述

`GauntletMapBasicView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletMapBasicView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `GauntletLayer` | `public GauntletLayer GauntletLayer { get; }` |
| `GauntletNameplateLayer` | `public GauntletLayer GauntletNameplateLayer { get; }` |

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
GauntletMapBasicView view = ...;
```

## 参见

- [本区域目录](../)