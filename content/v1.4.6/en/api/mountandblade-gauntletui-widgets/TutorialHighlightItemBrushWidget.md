---
title: "TutorialHighlightItemBrushWidget"
description: "TutorialHighlightItemBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 10 exposed members (1 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialHighlightItemBrushWidget.cs."
---
# TutorialHighlightItemBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TutorialHighlightItemBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialHighlightItemBrushWidget.cs`

## Overview

TutorialHighlightItemBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialHighlightItemBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is TutorialHighlightItemBrushWidget → BrushWidget. It exposes 10 public/protected members: 1 methods, 6 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialHighlightItemBrushWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial) the module directory; inheritance chain TutorialHighlightItemBrushWidget → BrushWidget. The surface is property-led (properties 6/10, methods 1/10), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialHighlightItemBrushWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CustomSizeSyncTarget` | `public Widget CustomSizeSyncTarget` | property |
| `DoNotOverrideWidth` | `public bool DoNotOverrideWidth` | property |
| `DoNotOverrideHeight` | `public bool DoNotOverrideHeight` | property |
| `TutorialHighlightItemBrushWidget` | `public TutorialHighlightItemBrushWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled` | property |
| `AnimState` | `public enum AnimState` | property |
| `EventBase` | `public class HighlightElementToggledEvent : EventBase` | property |
| `AnimState` | `public enum AnimState` | nested type |
| `EventBase` | `public class HighlightElementToggledEvent : EventBase` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ElementNotificationWidget](../ElementNotificationWidget)
- [same namespace TutorialArrowWidget](../TutorialArrowWidget)
- [same namespace TutorialDirectionArrowWidget](../TutorialDirectionArrowWidget)
- [same namespace TutorialObjectiveItemWidget](../TutorialObjectiveItemWidget)
