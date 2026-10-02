---
title: "TutorialObjectiveMouseParentWidget"
description: "TutorialObjectiveMouseParentWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 10 exposed members (1 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveMouseParentWidget.cs."
---
# TutorialObjectiveMouseParentWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TutorialObjectiveMouseParentWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveMouseParentWidget.cs`

## Overview

TutorialObjectiveMouseParentWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveMouseParentWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is TutorialObjectiveMouseParentWidget → Widget. It exposes 10 public/protected members: 1 methods, 7 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialObjectiveMouseParentWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial) the module directory; inheritance chain TutorialObjectiveMouseParentWidget → Widget. The surface is property-led (properties 7/10, methods 1/10), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveMouseParentWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MouseBodyWidget` | `public BrushWidget MouseBodyWidget` | property |
| `MouseLeftClickWidget` | `public BrushWidget MouseLeftClickWidget` | property |
| `MouseRightClickWidget` | `public BrushWidget MouseRightClickWidget` | property |
| `MouseMiddleClickWidget` | `public BrushWidget MouseMiddleClickWidget` | property |
| `TutorialObjectiveMouseParentWidget` | `public TutorialObjectiveMouseParentWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `KeyId` | `public string KeyId` | property |
| `MovementType` | `public int MovementType` | property |
| `MovementTypes` | `public enum MovementTypes` | property |
| `MovementTypes` | `public enum MovementTypes` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ElementNotificationWidget](../ElementNotificationWidget)
- [same namespace TutorialArrowWidget](../TutorialArrowWidget)
- [same namespace TutorialDirectionArrowWidget](../TutorialDirectionArrowWidget)
- [same namespace TutorialHighlightItemBrushWidget](../TutorialHighlightItemBrushWidget)
