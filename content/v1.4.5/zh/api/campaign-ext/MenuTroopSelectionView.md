---
title: "MenuTroopSelectionView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MenuTroopSelectionView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MenuTroopSelectionView

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuTroopSelectionView : MenuView`
**Base:** `MenuView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Menu/MenuTroopSelectionView.cs`

## 概述

`MenuTroopSelectionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MenuTroopSelectionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var view = new MenuTroopSelectionView();
```

## 参见

- [完整类目录](../catalog)