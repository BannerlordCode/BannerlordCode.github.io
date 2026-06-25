---
title: "GauntletMapEncyclopediaView"
description: "GauntletMapEncyclopediaView 的自动生成类参考。"
---
# GauntletMapEncyclopediaView

**Namespace:** SandBox.GauntletUI.Encyclopedia
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapEncyclopediaView : MapEncyclopediaView`
**Base:** `MapEncyclopediaView`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Encyclopedia/GauntletMapEncyclopediaView.cs`

## 概述

`GauntletMapEncyclopediaView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletMapEncyclopediaView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CloseEncyclopedia
`public override void CloseEncyclopedia()`

**用途 / Purpose:** 关闭encyclopedia对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 GauntletMapEncyclopediaView 实例
GauntletMapEncyclopediaView gauntletMapEncyclopediaView = ...;
gauntletMapEncyclopediaView.CloseEncyclopedia();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
GauntletMapEncyclopediaView view = ...;
```

## 参见

- [本区域目录](../)