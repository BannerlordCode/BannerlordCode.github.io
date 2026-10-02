---
title: "AutoHideRichTextWidget"
description: "AutoHideRichTextWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting RichTextWidget; 3 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideRichTextWidget.cs."
---
# AutoHideRichTextWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class AutoHideRichTextWidget : RichTextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideRichTextWidget.cs`

## Overview

AutoHideRichTextWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideRichTextWidget.cs. It is a public class, implementing/inheriting RichTextWidget; the inheritance chain is AutoHideRichTextWidget → RichTextWidget. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AutoHideRichTextWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain AutoHideRichTextWidget → RichTextWidget. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. RichTextWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideRichTextWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AutoHideRichTextWidget` | `public AutoHideRichTextWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `WidgetToHideIfEmpty` | `public Widget WidgetToHideIfEmpty` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
- [same namespace BannerTableauWidget](../BannerTableauWidget)
