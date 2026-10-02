---
title: "MaskedTextureWidget"
description: "MaskedTextureWidget：TaleWorlds.GauntletUI.BaseTypes 的 public 类，继承 TextureWidget；公开成员 9 个（方法 4、属性 4、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/MaskedTextureWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MaskedTextureWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class MaskedTextureWidget : TextureWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/MaskedTextureWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

MaskedTextureWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/MaskedTextureWidget.cs。它是一个 public 类，实现/继承 TextureWidget，继承链为 MaskedTextureWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 9 个：4 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MaskedTextureWidget 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.BaseTypes`，继承链 MaskedTextureWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以方法为主（方法 4/9，属性 4/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/MaskedTextureWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OverlayTextureScale` | `public float OverlayTextureScale` | 属性 |
| `MaskedTextureWidget` | `public MaskedTextureWidget(UIContext context) : base(context)` | 构造函数 |
| `OnClearTextureProvider` | `public override void OnClearTextureProvider()` | 方法 |
| `OnContextActivated` | `protected internal override void OnContextActivated()` | 方法 |
| `OnContextDeactivated` | `protected internal override void OnContextDeactivated()` | 方法 |
| `ImageId` | `public string ImageId` | 属性 |
| `AdditionalArgs` | `public string AdditionalArgs` | 属性 |
| `IsBig` | `public bool IsBig` | 属性 |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TextureWidget](../TextureWidget/)
- [同命名空间 BasicContainer](../BasicContainer/)
- [同命名空间 BrushWidget](../BrushWidget/)
- [同命名空间 ButtonType](../ButtonType/)
- [同命名空间 ButtonWidget](../ButtonWidget/)
