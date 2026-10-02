---
title: "CharacterTableauWidget"
description: "CharacterTableauWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 TextureWidget；公开成员 29 个（方法 4、属性 24、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterTableauWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterTableauWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CharacterTableauWidget : TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterTableauWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CharacterTableauWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterTableauWidget.cs。它是一个 public 类，实现/继承 TextureWidget，继承链为 CharacterTableauWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 29 个：4 方法、24 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterTableauWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets`，继承链 CharacterTableauWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 24/29，方法 4/29），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterTableauWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterTableauWidget` | `public CharacterTableauWidget(UIContext context) : base(context)` | 构造函数 |
| `OnMousePressed` | `protected override void OnMousePressed()` | 方法 |
| `OnMouseReleased` | `protected override void OnMouseReleased(bool isFromInput)` | 方法 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | 方法 |
| `BannerCodeText` | `public string BannerCodeText` | 属性 |
| `SwapPlacesButtonWidget` | `public ButtonWidget SwapPlacesButtonWidget` | 属性 |
| `BodyProperties` | `public string BodyProperties` | 属性 |
| `CustomAnimationProgressRatio` | `public float CustomAnimationProgressRatio` | 属性 |
| `CustomRenderScale` | `public float CustomRenderScale` | 属性 |
| `CustomAnimationWaitDuration` | `public float CustomAnimationWaitDuration` | 属性 |
| `CharStringId` | `public string CharStringId` | 属性 |
| `StanceIndex` | `public int StanceIndex` | 属性 |
| `IsEquipmentAnimActive` | `public bool IsEquipmentAnimActive` | 属性 |
| `IsFemale` | `public bool IsFemale` | 属性 |
| `Race` | `public int Race` | 属性 |
| `EquipmentCode` | `public string EquipmentCode` | 属性 |
| `MountCreationKey` | `public string MountCreationKey` | 属性 |
| `IdleAction` | `public string IdleAction` | 属性 |
| `IdleFaceAnim` | `public string IdleFaceAnim` | 属性 |
| `CustomAnimation` | `public string CustomAnimation` | 属性 |
| `LeftHandWieldedEquipmentIndex` | `public int LeftHandWieldedEquipmentIndex` | 属性 |
| `RightHandWieldedEquipmentIndex` | `public int RightHandWieldedEquipmentIndex` | 属性 |
| `ArmorColor1` | `public uint ArmorColor1` | 属性 |
| `ArmorColor2` | `public uint ArmorColor2` | 属性 |
| `IsBannerShownInBackground` | `public bool IsBannerShownInBackground` | 属性 |
| `IsPlayingCustomAnimations` | `public bool IsPlayingCustomAnimations` | 属性 |
| `ShouldLoopCustomAnimation` | `public bool ShouldLoopCustomAnimation` | 属性 |
| `IsTableauEnabled` | `public bool IsTableauEnabled` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TextureWidget](../../gui/TextureWidget/)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget/)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
