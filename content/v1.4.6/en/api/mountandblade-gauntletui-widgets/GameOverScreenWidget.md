---
title: "GameOverScreenWidget"
description: "GameOverScreenWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 6 exposed members (0 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameOver/GameOverScreenWidget.cs."
---
# GameOverScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameOver`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class GameOverScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameOver/GameOverScreenWidget.cs`

## Overview

GameOverScreenWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameOver/GameOverScreenWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is GameOverScreenWidget → Widget. It exposes 6 public/protected members: 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameOverScreenWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameOver) the module directory; inheritance chain GameOverScreenWidget → Widget. The surface is property-led (properties 5/6, methods 0/6), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameOver/GameOverScreenWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ConceptVisualWidget` | `public BrushWidget ConceptVisualWidget` | property |
| `BannerBrushWidget` | `public BrushWidget BannerBrushWidget` | property |
| `BannerFrameBrushWidget1` | `public BrushWidget BannerFrameBrushWidget1` | property |
| `BannerFrameBrushWidget2` | `public BrushWidget BannerFrameBrushWidget2` | property |
| `GameOverReason` | `public string GameOverReason` | property |
| `GameOverScreenWidget` | `public GameOverScreenWidget(UIContext context) : base(context)` | constructor |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameOverCategoryButtonWidget](../GameOverCategoryButtonWidget)
- [same namespace GameOverCategoryIconBrushWidget](../GameOverCategoryIconBrushWidget)
