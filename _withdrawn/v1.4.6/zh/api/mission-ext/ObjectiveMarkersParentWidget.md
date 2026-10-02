---
title: "ObjectiveMarkersParentWidget"
description: "ObjectiveMarkersParentWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker 的 public 类，继承 Widget；公开成员 7 个（方法 1、属性 5、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkersParentWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ObjectiveMarkersParentWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ObjectiveMarkersParentWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkersParentWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ObjectiveMarkersParentWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkersParentWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 ObjectiveMarkersParentWidget → Widget → PropertyOwnerObject。public/protected 成员共 7 个：1 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ObjectiveMarkersParentWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`，继承链 ObjectiveMarkersParentWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 5/7，方法 1/7），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkersParentWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinDistanceToFocus` | `public float MinDistanceToFocus` | 属性 |
| `ObjectiveMarkersParentWidget` | `public ObjectiveMarkersParentWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `IsMarkersEnabled` | `public bool IsMarkersEnabled` | 属性 |
| `TargetAlphaValue` | `public float TargetAlphaValue` | 属性 |
| `MaxDistanceToCombineMarkers` | `public float MaxDistanceToCombineMarkers` | 属性 |
| `MarkersContainer` | `public Widget MarkersContainer` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AlwaysVisibleNameMarkerListPanel](../AlwaysVisibleNameMarkerListPanel/)
- [同命名空间 DuelTargetMarkerListPanel](../DuelTargetMarkerListPanel/)
- [同命名空间 MarkerRect](../MarkerRect/)
- [同命名空间 NameMarkerListPanel](../NameMarkerListPanel/)
