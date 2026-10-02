---
title: "ImageIdentifierWidget"
description: "ImageIdentifierWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 TextureWidget；公开成员 8 个（方法 3、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ImageIdentifierWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ImageIdentifierWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ImageIdentifierWidget : TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ImageIdentifierWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ImageIdentifierWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ImageIdentifierWidget.cs。它是一个 public 类，实现/继承 TextureWidget，继承链为 ImageIdentifierWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 8 个：3 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ImageIdentifierWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets`，继承链 ImageIdentifierWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 4/8，方法 3/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ImageIdentifierWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ImageIdentifierWidget` | `public ImageIdentifierWidget(UIContext context) : base(context)` | 构造函数 |
| `OnContextActivated` | `protected override void OnContextActivated()` | 方法 |
| `OnContextDeactivated` | `protected override void OnContextDeactivated()` | 方法 |
| `OnClearTextureProvider` | `public override void OnClearTextureProvider()` | 方法 |
| `ImageId` | `public string ImageId` | 属性 |
| `AdditionalArgs` | `public string AdditionalArgs` | 属性 |
| `IsBig` | `public bool IsBig` | 属性 |
| `HideWhenNull` | `public bool HideWhenNull` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TextureWidget](../../gui/TextureWidget/)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget/)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
