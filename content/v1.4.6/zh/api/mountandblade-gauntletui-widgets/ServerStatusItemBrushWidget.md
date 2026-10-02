---
title: "ServerStatusItemBrushWidget"
description: "ServerStatusItemBrushWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 BrushWidget；公开成员 3 个（方法 1、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/ServerStatusItemBrushWidget.cs。"
---
# ServerStatusItemBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ServerStatusItemBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/ServerStatusItemBrushWidget.cs`

## 概述

ServerStatusItemBrushWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/ServerStatusItemBrushWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 ServerStatusItemBrushWidget → BrushWidget。public/protected 成员共 3 个：1 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ServerStatusItemBrushWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD），继承链 ServerStatusItemBrushWidget → BrushWidget。成员构成以方法为主（方法 1/3，属性 1/3），对外主要以操作入口暴露。继承链上的 BrushWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/ServerStatusItemBrushWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ServerStatusItemBrushWidget` | `public ServerStatusItemBrushWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `Status` | `public int Status` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DuelArenaFlagVisualBrushWidget](../DuelArenaFlagVisualBrushWidget)
- [同命名空间 HUDExtensionBrushWidget](../HUDExtensionBrushWidget)
- [同命名空间 MoraleArrowBrushWidget](../MoraleArrowBrushWidget)
- [同命名空间 MoraleWidget](../MoraleWidget)
