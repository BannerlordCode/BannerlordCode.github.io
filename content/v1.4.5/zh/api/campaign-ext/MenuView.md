---
title: "MenuView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MenuView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MenuView

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public abstract class MenuView : SandboxView`
**Base:** `SandboxView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Menu/MenuView.cs`

## 概述

`MenuView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MenuView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MenuViewContext` | `public MenuViewContext MenuViewContext { get; set; }` |
| `MenuContext` | `public MenuContext MenuContext { get; set; }` |

## 使用示例

```csharp
var implementation = new CustomMenuView();
```

## 参见

- [完整类目录](../catalog)