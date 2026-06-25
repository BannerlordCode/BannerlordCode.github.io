---
title: "MenuView"
description: "MenuView 的自动生成类参考。"
---
# MenuView

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public abstract class MenuView : SandboxView`
**Base:** `SandboxView`
**File:** `SandBox.View/Menu/MenuView.cs`

## 概述

`MenuView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MenuView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ShouldUpdateMenuAfterRemoved` | `public virtual bool ShouldUpdateMenuAfterRemoved { get; set; }` |
| `MenuViewContext` | `public MenuViewContext MenuViewContext { get; set; }` |
| `MenuContext` | `public MenuContext MenuContext { get; set; }` |

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MenuView instance = ...;
```

## 参见

- [本区域目录](../)