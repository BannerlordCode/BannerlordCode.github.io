---
title: "TutorialObjectiveItemWidget"
description: "TutorialObjectiveItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 9 exposed members (1 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveItemWidget.cs."
---
# TutorialObjectiveItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TutorialObjectiveItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveItemWidget.cs`

## Overview

TutorialObjectiveItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveItemWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is TutorialObjectiveItemWidget → Widget. It exposes 9 public/protected members: 1 methods, 6 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialObjectiveItemWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial) the module directory; inheritance chain TutorialObjectiveItemWidget → Widget. The surface is property-led (properties 6/9, methods 1/9), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveItemWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KeyPressWidget` | `public InputKeyVisualWidget KeyPressWidget` | property |
| `MouseMoveWidget` | `public TutorialObjectiveMouseParentWidget MouseMoveWidget` | property |
| `StickMoveWidget` | `public TutorialObjectiveStickParentWidget StickMoveWidget` | property |
| `TutorialObjectiveItemWidget` | `public TutorialObjectiveItemWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `MovementType` | `public int MovementType` | property |
| `InputType` | `public int InputType` | property |
| `InputTypes` | `public enum InputTypes` | property |
| `InputTypes` | `public enum InputTypes` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ElementNotificationWidget](../ElementNotificationWidget)
- [same namespace TutorialArrowWidget](../TutorialArrowWidget)
- [same namespace TutorialDirectionArrowWidget](../TutorialDirectionArrowWidget)
- [same namespace TutorialHighlightItemBrushWidget](../TutorialHighlightItemBrushWidget)
