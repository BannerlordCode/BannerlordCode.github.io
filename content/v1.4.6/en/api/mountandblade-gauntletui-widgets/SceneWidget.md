---
title: "SceneWidget"
description: "SceneWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting TextureWidget; 18 exposed members (3 methods, 14 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/SceneWidget.cs."
---
# SceneWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SceneWidget : TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SceneWidget.cs`

## Overview

SceneWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/SceneWidget.cs. It is a public class, implementing/inheriting TextureWidget; the inheritance chain is SceneWidget → TextureWidget. It exposes 18 public/protected members: 3 methods, 14 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SceneWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain SceneWidget → TextureWidget. The surface is property-led (properties 14/18, methods 3/18), so it mostly exposes state for reading. TextureWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/SceneWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SceneWidget` | `public SceneWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `OnMouseReleased` | `protected override void OnMouseReleased(bool isFromInput)` | method |
| `Scene` | `public object Scene` | property |
| `AffirmativeButton` | `public ButtonWidget AffirmativeButton` | property |
| `CancelButton` | `public ButtonWidget CancelButton` | property |
| `ClickToContinueTextWidget` | `public RichTextWidget ClickToContinueTextWidget` | property |
| `TitleTextWidget` | `public TextWidget TitleTextWidget` | property |
| `FadeImageWidget` | `public Widget FadeImageWidget` | property |
| `PreparingVisualWidget` | `public Widget PreparingVisualWidget` | property |
| `EndProgress` | `public float EndProgress` | property |
| `FadeInDuration` | `public float FadeInDuration` | property |
| `IsOkShown` | `public bool IsOkShown` | property |
| `IsCancelShown` | `public bool IsCancelShown` | property |
| `IsReady` | `public bool IsReady` | property |
| `AffirmativeTitleText` | `public string AffirmativeTitleText` | property |
| `NegativeTitleText` | `public string NegativeTitleText` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
