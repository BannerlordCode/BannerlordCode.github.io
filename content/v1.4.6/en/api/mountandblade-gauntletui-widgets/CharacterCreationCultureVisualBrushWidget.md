---
title: "CharacterCreationCultureVisualBrushWidget"
description: "CharacterCreationCultureVisualBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 9 exposed members (1 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Culture/CharacterCreationCultureVisualBrushWidget.cs."
---
# CharacterCreationCultureVisualBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Culture`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CharacterCreationCultureVisualBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Culture/CharacterCreationCultureVisualBrushWidget.cs`

## Overview

CharacterCreationCultureVisualBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Culture/CharacterCreationCultureVisualBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is CharacterCreationCultureVisualBrushWidget → BrushWidget. It exposes 9 public/protected members: 1 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationCultureVisualBrushWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Culture) the module directory; inheritance chain CharacterCreationCultureVisualBrushWidget → BrushWidget. The surface is property-led (properties 7/9, methods 1/9), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Culture/CharacterCreationCultureVisualBrushWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UseSmallVisuals` | `public bool UseSmallVisuals` | property |
| `Layer1Widget` | `public ParallaxItemBrushWidget Layer1Widget` | property |
| `Layer2Widget` | `public ParallaxItemBrushWidget Layer2Widget` | property |
| `Layer3Widget` | `public ParallaxItemBrushWidget Layer3Widget` | property |
| `Layer4Widget` | `public ParallaxItemBrushWidget Layer4Widget` | property |
| `CharacterCreationCultureVisualBrushWidget` | `public CharacterCreationCultureVisualBrushWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `CurrentCultureId` | `public string CurrentCultureId` | property |
| `IsBig` | `public bool IsBig` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterCreationBackgroundGradientBrushWidget](../CharacterCreationBackgroundGradientBrushWidget)
- [same namespace CharacterCreationFirstStageFadeOutWidget](../CharacterCreationFirstStageFadeOutWidget)
