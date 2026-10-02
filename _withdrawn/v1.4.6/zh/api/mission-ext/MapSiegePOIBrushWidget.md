---
title: "MapSiegePOIBrushWidget"
description: "MapSiegePOIBrushWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege 的 public 类，继承 BrushWidget；公开成员 20 个（方法 4、属性 14、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapSiegePOIBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MapSiegePOIBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MapSiegePOIBrushWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 MapSiegePOIBrushWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 20 个：4 方法、14 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapSiegePOIBrushWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege`，继承链 MapSiegePOIBrushWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 14/20，方法 4/20），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Slider` | `public SliderWidget Slider` | 属性 |
| `ConstructionBrush` | `public Brush ConstructionBrush` | 属性 |
| `NormalBrush` | `public Brush NormalBrush` | 属性 |
| `ScreenPosition` | `public Vec2 ScreenPosition` | 属性 |
| `MapSiegePOIBrushWidget` | `public MapSiegePOIBrushWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnMousePressed` | `protected override void OnMousePressed()` | 方法 |
| `OnHoverBegin` | `protected override void OnHoverBegin()` | 方法 |
| `OnHoverEnd` | `protected override void OnHoverEnd()` | 方法 |
| `ConstructionControllerWidget` | `public MapSiegeConstructionControllerWidget ConstructionControllerWidget` | 属性 |
| `IsPlayerSidePOI` | `public bool IsPlayerSidePOI` | 属性 |
| `IsInVisibleRange` | `public bool IsInVisibleRange` | 属性 |
| `IsPOISelected` | `public bool IsPOISelected` | 属性 |
| `IsConstructing` | `public bool IsConstructing` | 属性 |
| `MachineType` | `public int MachineType` | 属性 |
| `QueueIndex` | `public int QueueIndex` | 属性 |
| `MachineTypeIconWidget` | `public Widget MachineTypeIconWidget` | 属性 |
| `HammerAnimWidget` | `public BrushWidget HammerAnimWidget` | 属性 |
| `AnimState` | `public enum AnimState` | 属性 |
| `AnimState` | `public enum AnimState` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BrushWidget](../../gui/BrushWidget/)
- [同命名空间 MapSiegeConstructionControllerWidget](../MapSiegeConstructionControllerWidget/)
- [同命名空间 MapSiegeMachineButtonWidget](../MapSiegeMachineButtonWidget/)
- [同命名空间 MapSiegeQueueIndexTextWidget](../MapSiegeQueueIndexTextWidget/)
- [同命名空间 MapSiegeScreenWidget](../MapSiegeScreenWidget/)
