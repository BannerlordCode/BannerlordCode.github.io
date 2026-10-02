---
title: "AutoHideTextWidget"
description: "AutoHideTextWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting TextWidget; 3 exposed members (1 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideTextWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AutoHideTextWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class AutoHideTextWidget : TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideTextWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AutoHideTextWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideTextWidget.cs. It is a public class, implementing/inheriting TextWidget; the inheritance chain is AutoHideTextWidget → TextWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AutoHideTextWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets`, inheritance chain AutoHideTextWidget → TextWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideTextWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AutoHideTextWidget` | `public AutoHideTextWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `WidgetToHideIfEmpty` | `public Widget WidgetToHideIfEmpty` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TextWidget](../../gui/TextWidget/)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
- [same namespace BannerTableauWidget](../BannerTableauWidget/)
