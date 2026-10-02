---
title: "CharacterTableauWidget"
description: "CharacterTableauWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 TextureWidget；公开成员 29 个（方法 4、属性 24、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterTableauWidget.cs。"
---
# CharacterTableauWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CharacterTableauWidget : TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterTableauWidget.cs`

## 概述

CharacterTableauWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterTableauWidget.cs。它是一个 public 类，实现/继承 TextureWidget，继承链为 CharacterTableauWidget → TextureWidget。public/protected 成员共 29 个：4 方法、24 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterTableauWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录一致，继承链 CharacterTableauWidget → TextureWidget。成员构成以属性为主（属性 24/29，方法 4/29），对外主要以状态读取接口暴露。继承链上的 TextureWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterTableauWidget.cs 的方法体或该类型的深写页确认。

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

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
