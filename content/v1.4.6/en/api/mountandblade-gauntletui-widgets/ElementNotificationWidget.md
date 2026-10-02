---
title: "ElementNotificationWidget"
description: "ElementNotificationWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/ElementNotificationWidget.cs."
---
# ElementNotificationWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ElementNotificationWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/ElementNotificationWidget.cs`

## Overview

ElementNotificationWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/ElementNotificationWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is ElementNotificationWidget → Widget. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ElementNotificationWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial) the module directory; inheritance chain ElementNotificationWidget → Widget. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/ElementNotificationWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ElementNotificationWidget` | `public ElementNotificationWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `ElementID` | `public string ElementID` | property |
| `ElementToHighlight` | `public Widget ElementToHighlight` | property |
| `TutorialFrameWidget` | `public TutorialHighlightItemBrushWidget TutorialFrameWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace TutorialArrowWidget](../TutorialArrowWidget)
- [same namespace TutorialDirectionArrowWidget](../TutorialDirectionArrowWidget)
- [same namespace TutorialHighlightItemBrushWidget](../TutorialHighlightItemBrushWidget)
- [same namespace TutorialObjectiveItemWidget](../TutorialObjectiveItemWidget)
