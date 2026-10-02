---
title: "MultiplayerPerkContainerPanelWidget"
description: "MultiplayerPerkContainerPanelWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks 的 public 类，继承 Widget；公开成员 7 个（方法 2、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkContainerPanelWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerPerkContainerPanelWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerPerkContainerPanelWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkContainerPanelWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MultiplayerPerkContainerPanelWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkContainerPanelWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 MultiplayerPerkContainerPanelWidget → Widget → PropertyOwnerObject。public/protected 成员共 7 个：2 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerPerkContainerPanelWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks`，继承链 MultiplayerPerkContainerPanelWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 4/7，方法 2/7），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkContainerPanelWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerPerkContainerPanelWidget` | `public MultiplayerPerkContainerPanelWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `PerkSelected` | `public void PerkSelected(MultiplayerPerkItemToggleWidget selectedItem)` | 方法 |
| `PopupWidgetFirst` | `public MultiplayerPerkPopupWidget PopupWidgetFirst` | 属性 |
| `PopupWidgetSecond` | `public MultiplayerPerkPopupWidget PopupWidgetSecond` | 属性 |
| `PopupWidgetThird` | `public MultiplayerPerkPopupWidget PopupWidgetThird` | 属性 |
| `TroopTupleBodyWidget` | `public MultiplayerClassLoadoutTroopSubclassButtonWidget TroopTupleBodyWidget` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 MultiplayerPerkItemToggleWidget](../MultiplayerPerkItemToggleWidget/)
- [同命名空间 MultiplayerPerkPopupWidget](../MultiplayerPerkPopupWidget/)
