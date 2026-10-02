---
title: "ObjectiveMarkerWidget"
description: "ObjectiveMarkerWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 25 个（方法 2、属性 22、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkerWidget.cs。"
---
# ObjectiveMarkerWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ObjectiveMarkerWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkerWidget.cs`

## 概述

ObjectiveMarkerWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkerWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 ObjectiveMarkerWidget → Widget。public/protected 成员共 25 个：2 方法、22 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ObjectiveMarkerWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker），继承链 ObjectiveMarkerWidget → Widget。成员构成以属性为主（属性 22/25，方法 2/25），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkerWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsCombinedWithOtherMarkers` | `public bool IsCombinedWithOtherMarkers` | 属性 |
| `FarAlphaTarget` | `public float FarAlphaTarget` | 属性 |
| `FarDistanceCutoff` | `public float FarDistanceCutoff` | 属性 |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff` | 属性 |
| `Rect` | `public MarkerRect Rect` | 属性 |
| `IsInScreenBoundaries` | `public bool IsInScreenBoundaries` | 属性 |
| `ObjectiveMarkerWidget` | `public ObjectiveMarkerWidget(UIContext context) : base(context)` | 构造函数 |
| `Update` | `public void Update(float dt)` | 方法 |
| `UpdateRectangle` | `public void UpdateRectangle()` | 方法 |
| `NameTextWidget` | `public TextWidget NameTextWidget` | 属性 |
| `CombinationCountWidget` | `public TextWidget CombinationCountWidget` | 属性 |
| `QuestIconWidget` | `public Widget QuestIconWidget` | 属性 |
| `MainContainer` | `public Widget MainContainer` | 属性 |
| `DistanceContainerWidget` | `public Widget DistanceContainerWidget` | 属性 |
| `DistanceIconWidget` | `public Widget DistanceIconWidget` | 属性 |
| `DistanceTextWidget` | `public Widget DistanceTextWidget` | 属性 |
| `Position` | `public Vec2 Position` | 属性 |
| `CombinedAveragePosition` | `public Vec2 CombinedAveragePosition` | 属性 |
| `Distance` | `public int Distance` | 属性 |
| `CombinedSiblingsCount` | `public int CombinedSiblingsCount` | 属性 |
| `IsMainCombinationMarker` | `public bool IsMainCombinationMarker` | 属性 |
| `IsDistanceRelevant` | `public bool IsDistanceRelevant` | 属性 |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled` | 属性 |
| `IsMarkerActive` | `public bool IsMarkerActive` | 属性 |
| `IsFocused` | `public new bool IsFocused` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlwaysVisibleNameMarkerListPanel](../AlwaysVisibleNameMarkerListPanel)
- [同命名空间 DuelTargetMarkerListPanel](../DuelTargetMarkerListPanel)
- [同命名空间 MarkerRect](../MarkerRect)
- [同命名空间 NameMarkerListPanel](../NameMarkerListPanel)
