---
title: "RecruitTroopPanelButtonWidget"
description: "RecruitTroopPanelButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 8 exposed members (1 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Recruitment/RecruitTroopPanelButtonWidget.cs."
---
# RecruitTroopPanelButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Recruitment`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class RecruitTroopPanelButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Recruitment/RecruitTroopPanelButtonWidget.cs`

## Overview

RecruitTroopPanelButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Recruitment/RecruitTroopPanelButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is RecruitTroopPanelButtonWidget → ButtonWidget. It exposes 8 public/protected members: 1 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RecruitTroopPanelButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Recruitment) the module directory; inheritance chain RecruitTroopPanelButtonWidget → ButtonWidget. The surface is property-led (properties 6/8, methods 1/8), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Recruitment/RecruitTroopPanelButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RecruitTroopPanelButtonWidget` | `public RecruitTroopPanelButtonWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `CanBeRecruited` | `public bool CanBeRecruited` | property |
| `IsInCart` | `public bool IsInCart` | property |
| `RemoveFromCartButton` | `public ButtonWidget RemoveFromCartButton` | property |
| `CharacterImageWidget` | `public ImageIdentifierWidget CharacterImageWidget` | property |
| `IsTroopEmpty` | `public bool IsTroopEmpty` | property |
| `PlayerHasEnoughRelation` | `public bool PlayerHasEnoughRelation` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
