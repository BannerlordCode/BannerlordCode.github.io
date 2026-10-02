---
title: "TextureWidget"
description: "TextureWidget：TaleWorlds.GauntletUI.BaseTypes 的 public 类，继承 ImageWidget；公开成员 15 个（方法 9、属性 5、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextureWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TextureWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class TextureWidget : ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextureWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

TextureWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextureWidget.cs。它是一个 public 类，实现/继承 ImageWidget，继承链为 TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 15 个：9 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TextureWidget 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.BaseTypes`，继承链 TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以方法为主（方法 9/15，属性 5/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextureWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LoadingIconWidget` | `public Widget LoadingIconWidget` | 属性 |
| `TextureProvider` | `public TextureProvider TextureProvider` | 属性 |
| `SetForClearNextFrame` | `public bool SetForClearNextFrame` | 属性 |
| `TextureProviderName` | `public string TextureProviderName` | 属性 |
| `Texture` | `public Texture Texture` | 属性 |
| `TextureWidget` | `public TextureWidget(UIContext context) : base(context)` | 构造函数 |
| `OnClearTextureProvider` | `public virtual void OnClearTextureProvider()` | 方法 |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | 方法 |
| `SetTextureProviderProperty` | `protected void SetTextureProviderProperty(string name, object value)` | 方法 |
| `GetTextureProviderProperty` | `protected object GetTextureProviderProperty(string propertyName)` | 方法 |
| `GetTextureProviderProperty` | `protected TObject? GetTextureProviderProperty<TObject>(string propertyName) where TObject : struct` | 方法 |
| `UpdateTextureWidget` | `protected void UpdateTextureWidget()` | 方法 |
| `OnTextureUpdated` | `protected virtual void OnTextureUpdated()` | 方法 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ImageWidget](../ImageWidget/)
- [同命名空间 BasicContainer](../BasicContainer/)
- [同命名空间 BrushWidget](../BrushWidget/)
- [同命名空间 ButtonType](../ButtonType/)
- [同命名空间 ButtonWidget](../ButtonWidget/)
