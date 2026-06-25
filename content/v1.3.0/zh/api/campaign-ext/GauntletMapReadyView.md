---
title: "GauntletMapReadyView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletMapReadyView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapReadyView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapReadyView : MapReadyView`
**Base:** `MapReadyView`
**File:** `SandBox.GauntletUI/Map/GauntletMapReadyView.cs`

## 概述

`GauntletMapReadyView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletMapReadyView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetIsMapSceneReady
`public override void SetIsMapSceneReady(bool isReady)`

**用途 / Purpose:** 设置 `is map scene ready` 的值或状态。

## 使用示例

```csharp
var view = new GauntletMapReadyView();
```

## 参见

- [完整类目录](../catalog)