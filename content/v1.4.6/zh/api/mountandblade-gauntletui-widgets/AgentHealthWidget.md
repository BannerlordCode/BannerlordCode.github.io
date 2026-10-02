---
title: "AgentHealthWidget"
description: "AgentHealthWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 10 个（方法 1、属性 7、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentHealthWidget.cs。"
---
# AgentHealthWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class AgentHealthWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentHealthWidget.cs`

## 概述

AgentHealthWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentHealthWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 AgentHealthWidget → Widget。public/protected 成员共 10 个：1 方法、7 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentHealthWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission），继承链 AgentHealthWidget → Widget。成员构成以属性为主（属性 7/10，方法 1/10），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentHealthWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AgentHealthWidget` | `public AgentHealthWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `Health` | `public int Health` | 属性 |
| `MaxHealth` | `public int MaxHealth` | 属性 |
| `HealthBar` | `public FillBarWidget HealthBar` | 属性 |
| `HealthDropContainer` | `public Widget HealthDropContainer` | 属性 |
| `HealthDropBrush` | `public Brush HealthDropBrush` | 属性 |
| `ShowHealthBar` | `public bool ShowHealthBar` | 属性 |
| `HealthDropData` | `public class HealthDropData` | 属性 |
| `HealthDropData` | `public class HealthDropData` | 嵌套类型 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgentAlarmStateWidget](../AgentAlarmStateWidget)
- [同命名空间 AgentAmmoTextWidget](../AgentAmmoTextWidget)
- [同命名空间 AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget)
- [同命名空间 AgentWeaponPassiveUsageVisualBrushWidget](../AgentWeaponPassiveUsageVisualBrushWidget)
