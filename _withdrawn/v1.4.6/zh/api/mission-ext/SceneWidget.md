---
title: "SceneWidget"
description: "SceneWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 TextureWidget；公开成员 18 个（方法 3、属性 14、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/SceneWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SceneWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SceneWidget : TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SceneWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SceneWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/SceneWidget.cs。它是一个 public 类，实现/继承 TextureWidget，继承链为 SceneWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 18 个：3 方法、14 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SceneWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets`，继承链 SceneWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 14/18，方法 3/18），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/SceneWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SceneWidget` | `public SceneWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | 方法 |
| `OnMouseReleased` | `protected override void OnMouseReleased(bool isFromInput)` | 方法 |
| `Scene` | `public object Scene` | 属性 |
| `AffirmativeButton` | `public ButtonWidget AffirmativeButton` | 属性 |
| `CancelButton` | `public ButtonWidget CancelButton` | 属性 |
| `ClickToContinueTextWidget` | `public RichTextWidget ClickToContinueTextWidget` | 属性 |
| `TitleTextWidget` | `public TextWidget TitleTextWidget` | 属性 |
| `FadeImageWidget` | `public Widget FadeImageWidget` | 属性 |
| `PreparingVisualWidget` | `public Widget PreparingVisualWidget` | 属性 |
| `EndProgress` | `public float EndProgress` | 属性 |
| `FadeInDuration` | `public float FadeInDuration` | 属性 |
| `IsOkShown` | `public bool IsOkShown` | 属性 |
| `IsCancelShown` | `public bool IsCancelShown` | 属性 |
| `IsReady` | `public bool IsReady` | 属性 |
| `AffirmativeTitleText` | `public string AffirmativeTitleText` | 属性 |
| `NegativeTitleText` | `public string NegativeTitleText` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TextureWidget](../../gui/TextureWidget/)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget/)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
