---
title: "MoraleWidget"
description: "TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD.MoraleWidget —— 命名空间 TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# MoraleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class MoraleWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleWidget.cs`

## 概述

`MoraleWidget` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD` 下的类，声明于模块目录 `TaleWorlds.MountAndBlade.GauntletUI.Widgets` 的 `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleWidget.cs`（第 9 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `Widget`；解析到的成员共 42 项，其中 7 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public Widget ParentWidget { get; private set; }` — 属性，get/set，类型 Widget
- `public Widget MaskWidget { get; private set; }` — 属性，get/set，类型 Widget
- `public BrushWidget ItemWidget { get; private set; }` — 属性，get/set，类型 BrushWidget
- `public BrushWidget ItemGlowWidget { get; private set; }` — 属性，get/set，类型 BrushWidget
- `public Widget ItemBackgroundWidget { get; private set; }` — 属性，get/set，类型 Widget
- `public MoraleItemWidget(Widget parentWidget, Widget maskWidget, BrushWidget itemWidget, BrushWidget itemGlowWidget, Widget itemBackgroundWidget)` — 方法，5 个参数，返回 M
- `public void SetFillAmount(float fill, int fillMargin)` — 方法，2 个参数，返回 void


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 7 条成员记录全部来自 `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleWidget.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class MoraleWidget : Widget` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`mission-ext` API](../)
- [BrushWidget（成员类型）](../../gui/BrushWidget)
- [ActionOptionData（同命名空间）](../ActionOptionData)
- [AgentAlarmStateWidget（同命名空间）](../AgentAlarmStateWidget)
- [AgentAmmoTextWidget（同命名空间）](../AgentAmmoTextWidget)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
