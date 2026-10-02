---
title: "TutorialArrowWidget"
description: "TutorialArrowWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 9 exposed members (4 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs."
---
# TutorialArrowWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TutorialArrowWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs`

## Overview

TutorialArrowWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is TutorialArrowWidget → Widget. It exposes 9 public/protected members: 4 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialArrowWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial) the module directory; inheritance chain TutorialArrowWidget → Widget. The surface is method-led (methods 4/9, properties 4/9), so it mostly exposes operations. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ElementNotificationWidget](../ElementNotificationWidget)
- [same namespace TutorialDirectionArrowWidget](../TutorialDirectionArrowWidget)
- [same namespace TutorialHighlightItemBrushWidget](../TutorialHighlightItemBrushWidget)
- [same namespace TutorialObjectiveItemWidget](../TutorialObjectiveItemWidget)
