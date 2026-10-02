---
title: "TutorialArrowWidget"
description: "TutorialArrowWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial, inheriting Widget; 9 exposed members (4 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TutorialArrowWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TutorialArrowWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TutorialArrowWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is TutorialArrowWidget → Widget → PropertyOwnerObject. It exposes 9 public/protected members: 4 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialArrowWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`, inheritance chain TutorialArrowWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 4/9, properties 4/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsArrowEnabled` | `public bool IsArrowEnabled` | property |
| `FadeInTime` | `public float FadeInTime` | property |
| `BigCircleRadius` | `public float BigCircleRadius` | property |
| `SmallCircleRadius` | `public float SmallCircleRadius` | property |
| `TutorialArrowWidget` | `public TutorialArrowWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `SetArrowProperties` | `public void SetArrowProperties(float width, float height, bool isDirectionDown, bool isDirectionRight)` | method |
| `ResetFade` | `public void ResetFade()` | method |
| `DisableFade` | `public void DisableFade()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ElementNotificationWidget](../ElementNotificationWidget/)
- [same namespace TutorialDirectionArrowWidget](../TutorialDirectionArrowWidget/)
- [same namespace TutorialHighlightItemBrushWidget](../TutorialHighlightItemBrushWidget/)
- [same namespace TutorialObjectiveItemWidget](../TutorialObjectiveItemWidget/)
