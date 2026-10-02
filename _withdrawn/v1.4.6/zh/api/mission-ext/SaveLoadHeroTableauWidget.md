---
title: "SaveLoadHeroTableauWidget"
description: "SaveLoadHeroTableauWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.SaveLoad 的 public 类，继承 TextureWidget；公开成员 6 个（方法 2、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/SaveLoad/SaveLoadHeroTableauWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SaveLoadHeroTableauWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.SaveLoad`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SaveLoadHeroTableauWidget : TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SaveLoad/SaveLoadHeroTableauWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SaveLoadHeroTableauWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/SaveLoad/SaveLoadHeroTableauWidget.cs。它是一个 public 类，实现/继承 TextureWidget，继承链为 SaveLoadHeroTableauWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 6 个：2 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SaveLoadHeroTableauWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.SaveLoad`，继承链 SaveLoadHeroTableauWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 3/6，方法 2/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/SaveLoad/SaveLoadHeroTableauWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsVersionCompatible` | `public bool IsVersionCompatible` | 属性 |
| `HeroVisualCode` | `public string HeroVisualCode` | 属性 |
| `BannerCode` | `public string BannerCode` | 属性 |
| `SaveLoadHeroTableauWidget` | `public SaveLoadHeroTableauWidget(UIContext context) : base(context)` | 构造函数 |
| `OnMousePressed` | `protected override void OnMousePressed()` | 方法 |
| `OnMouseReleased` | `protected override void OnMouseReleased(bool isFromInput)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TextureWidget](../../gui/TextureWidget/)
- [同命名空间 SaveLoadMainHeroVisualWidget](../SaveLoadMainHeroVisualWidget/)
