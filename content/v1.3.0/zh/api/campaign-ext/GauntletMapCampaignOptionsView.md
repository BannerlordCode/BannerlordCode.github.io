---
title: "GauntletMapCampaignOptionsView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletMapCampaignOptionsView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapCampaignOptionsView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapCampaignOptionsView : MapCampaignOptionsView`
**Base:** `MapCampaignOptionsView`
**File:** `SandBox.GauntletUI/Map/GauntletMapCampaignOptionsView.cs`

## 概述

`GauntletMapCampaignOptionsView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletMapCampaignOptionsView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var view = new GauntletMapCampaignOptionsView();
```

## 参见

- [完整类目录](../catalog)