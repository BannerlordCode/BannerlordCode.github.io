---
title: "NameMarkerListPanel"
description: "NameMarkerListPanel：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker 的 public 类，继承 ListPanel；公开成员 28 个（方法 2、属性 25、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerListPanel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NameMarkerListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class NameMarkerListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerListPanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

NameMarkerListPanel 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerListPanel.cs。它是一个 public 类，实现/继承 ListPanel，继承链为 NameMarkerListPanel → ListPanel → Container → Widget → PropertyOwnerObject。public/protected 成员共 28 个：2 方法、25 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NameMarkerListPanel 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`，继承链 NameMarkerListPanel → ListPanel → Container → Widget → PropertyOwnerObject。成员构成以属性为主（属性 25/28，方法 2/28），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerListPanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FarAlphaTarget` | `public float FarAlphaTarget` | 属性 |
| `FarDistanceCutoff` | `public float FarDistanceCutoff` | 属性 |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff` | 属性 |
| `HasTypeMarker` | `public bool HasTypeMarker` | 属性 |
| `Rect` | `public MarkerRect Rect` | 属性 |
| `IsInScreenBoundaries` | `public bool IsInScreenBoundaries` | 属性 |
| `NameMarkerListPanel` | `public NameMarkerListPanel(UIContext context) : base(context)` | 构造函数 |
| `Update` | `public void Update(float dt)` | 方法 |
| `UpdateRectangle` | `public void UpdateRectangle()` | 方法 |
| `NameTextWidget` | `public TextWidget NameTextWidget` | 属性 |
| `TypeVisualWidget` | `public BrushWidget TypeVisualWidget` | 属性 |
| `DistanceIconWidget` | `public BrushWidget DistanceIconWidget` | 属性 |
| `DistanceTextWidget` | `public TextWidget DistanceTextWidget` | 属性 |
| `Position` | `public Vec2 Position` | 属性 |
| `IssueNotificationColor` | `public Color IssueNotificationColor` | 属性 |
| `MainQuestNotificationColor` | `public Color MainQuestNotificationColor` | 属性 |
| `EnemyColor` | `public Color EnemyColor` | 属性 |
| `FriendlyColor` | `public Color FriendlyColor` | 属性 |
| `IconType` | `public string IconType` | 属性 |
| `NameType` | `public string NameType` | 属性 |
| `Distance` | `public int Distance` | 属性 |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled` | 属性 |
| `IsMarkerPersistent` | `public bool IsMarkerPersistent` | 属性 |
| `HasIssue` | `public bool HasIssue` | 属性 |
| `HasMainQuest` | `public bool HasMainQuest` | 属性 |
| `IsEnemy` | `public bool IsEnemy` | 属性 |
| `IsFriendly` | `public bool IsFriendly` | 属性 |
| `IsFocused` | `public new bool IsFocused` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ListPanel](../../gui/ListPanel/)
- [同命名空间 AlwaysVisibleNameMarkerListPanel](../AlwaysVisibleNameMarkerListPanel/)
- [同命名空间 DuelTargetMarkerListPanel](../DuelTargetMarkerListPanel/)
- [同命名空间 MarkerRect](../MarkerRect/)
- [同命名空间 NameMarkerScreenWidget](../NameMarkerScreenWidget/)
