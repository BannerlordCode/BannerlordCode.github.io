---
title: "MissionMainAgentEquipDropView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMainAgentEquipDropView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMainAgentEquipDropView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentEquipDropView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionMainAgentEquipDropView.cs`

## 概述

`MissionMainAgentEquipDropView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionMainAgentEquipDropView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var view = new MissionMainAgentEquipDropView();
```

## 参见

- [完整类目录](../catalog)