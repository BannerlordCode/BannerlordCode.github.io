---
title: "ScreenBackgroundBrushWidget"
description: "ScreenBackgroundBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 12 exposed members (1 methods, 10 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/ScreenBackgroundBrushWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ScreenBackgroundBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ScreenBackgroundBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ScreenBackgroundBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ScreenBackgroundBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/ScreenBackgroundBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is ScreenBackgroundBrushWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 12 public/protected members: 1 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScreenBackgroundBrushWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets`, inheritance chain ScreenBackgroundBrushWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 10/12, methods 1/12), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/ScreenBackgroundBrushWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsParticleVisible` | `public bool IsParticleVisible` | property |
| `IsSmokeVisible` | `public bool IsSmokeVisible` | property |
| `IsFullscreenImageEnabled` | `public bool IsFullscreenImageEnabled` | property |
| `AnimEnabled` | `public bool AnimEnabled` | property |
| `ParticleWidget1` | `public Widget ParticleWidget1` | property |
| `ParticleWidget2` | `public Widget ParticleWidget2` | property |
| `SmokeWidget1` | `public Widget SmokeWidget1` | property |
| `SmokeWidget2` | `public Widget SmokeWidget2` | property |
| `SmokeSpeedModifier` | `public float SmokeSpeedModifier` | property |
| `ParticleSpeedModifier` | `public float ParticleSpeedModifier` | property |
| `ScreenBackgroundBrushWidget` | `public ScreenBackgroundBrushWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../../gui/BrushWidget/)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget/)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
