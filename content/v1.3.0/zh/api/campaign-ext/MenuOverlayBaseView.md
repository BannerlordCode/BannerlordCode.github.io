---
title: "MenuOverlayBaseView"
description: "MenuOverlayBaseView 的自动生成类参考。"
---
# MenuOverlayBaseView

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuOverlayBaseView : MenuView`
**Base:** `MenuView`
**File:** `SandBox.View/Menu/MenuOverlayBaseView.cs`

## 概述

`MenuOverlayBaseView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MenuOverlayBaseView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MenuOverlayBaseView view = ...;
```

## 参见

- [本区域目录](../)