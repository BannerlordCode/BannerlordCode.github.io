---
title: "GauntletMenuBaseView"
description: "GauntletMenuBaseView 的自动生成类参考。"
---
# GauntletMenuBaseView

**Namespace:** SandBox.GauntletUI.Menu
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMenuBaseView : MenuView`
**Base:** `MenuView`
**File:** `SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs`

## 概述

`GauntletMenuBaseView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletMenuBaseView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameMenuDataSource` | `public GameMenuVM GameMenuDataSource { get; }` |

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
GauntletMenuBaseView view = ...;
```

## 参见

- [本区域目录](../)