---
title: "TutorialScreenWidget"
description: "TutorialScreenWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 12 exposed members (1 methods, 10 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialScreenWidget.cs."
---
# TutorialScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TutorialScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialScreenWidget.cs`

## Overview

TutorialScreenWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialScreenWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is TutorialScreenWidget → Widget. It exposes 12 public/protected members: 1 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialScreenWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial) the module directory; inheritance chain TutorialScreenWidget → Widget. The surface is property-led (properties 10/12, methods 1/12), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialScreenWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LeftItem` | `public TutorialPanelImageWidget LeftItem` | property |
| `RightItem` | `public TutorialPanelImageWidget RightItem` | property |
| `BottomItem` | `public TutorialPanelImageWidget BottomItem` | property |
| `TopItem` | `public TutorialPanelImageWidget TopItem` | property |
| `LeftTopItem` | `public TutorialPanelImageWidget LeftTopItem` | property |
| `RightTopItem` | `public TutorialPanelImageWidget RightTopItem` | property |
| `LeftBottomItem` | `public TutorialPanelImageWidget LeftBottomItem` | property |
| `RightBottomItem` | `public TutorialPanelImageWidget RightBottomItem` | property |
| `CenterItem` | `public TutorialPanelImageWidget CenterItem` | property |
| `ArrowWidget` | `public TutorialArrowWidget ArrowWidget` | property |
| `TutorialScreenWidget` | `public TutorialScreenWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ElementNotificationWidget](../ElementNotificationWidget)
- [same namespace TutorialArrowWidget](../TutorialArrowWidget)
- [same namespace TutorialDirectionArrowWidget](../TutorialDirectionArrowWidget)
- [same namespace TutorialHighlightItemBrushWidget](../TutorialHighlightItemBrushWidget)
