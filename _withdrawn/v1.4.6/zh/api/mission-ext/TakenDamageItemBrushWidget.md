---
title: "TakenDamageItemBrushWidget"
description: "TakenDamageItemBrushWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission 的 public 类，继承 BrushWidget；公开成员 13 个（方法 2、属性 10、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/TakenDamageItemBrushWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TakenDamageItemBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TakenDamageItemBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/TakenDamageItemBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

TakenDamageItemBrushWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/TakenDamageItemBrushWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 TakenDamageItemBrushWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 13 个：2 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TakenDamageItemBrushWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`，继承链 TakenDamageItemBrushWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 10/13，方法 2/13），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/TakenDamageItemBrushWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VerticalWidth` | `public float VerticalWidth` | 属性 |
| `VerticalHeight` | `public float VerticalHeight` | 属性 |
| `HorizontalWidth` | `public float HorizontalWidth` | 属性 |
| `HorizontalHeight` | `public float HorizontalHeight` | 属性 |
| `RangedOnScreenStayTime` | `public float RangedOnScreenStayTime` | 属性 |
| `MeleeOnScreenStayTime` | `public float MeleeOnScreenStayTime` | 属性 |
| `TakenDamageItemBrushWidget` | `public TakenDamageItemBrushWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | 方法 |
| `DamageAmount` | `public int DamageAmount` | 属性 |
| `IsBehind` | `public bool IsBehind` | 属性 |
| `IsRanged` | `public bool IsRanged` | 属性 |
| `ScreenPosOfAffectorAgent` | `public Vec2 ScreenPosOfAffectorAgent` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BrushWidget](../../gui/BrushWidget/)
- [同命名空间 AgentAlarmStateWidget](../AgentAlarmStateWidget/)
- [同命名空间 AgentAmmoTextWidget](../AgentAmmoTextWidget/)
- [同命名空间 AgentHealthWidget](../AgentHealthWidget/)
- [同命名空间 AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget/)
