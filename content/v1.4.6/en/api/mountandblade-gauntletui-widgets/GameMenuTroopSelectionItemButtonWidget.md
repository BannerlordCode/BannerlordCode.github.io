---
title: "GameMenuTroopSelectionItemButtonWidget"
description: "GameMenuTroopSelectionItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 13 exposed members (2 methods, 10 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuTroopSelectionItemButtonWidget.cs."
---
# GameMenuTroopSelectionItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class GameMenuTroopSelectionItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuTroopSelectionItemButtonWidget.cs`

## Overview

GameMenuTroopSelectionItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuTroopSelectionItemButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is GameMenuTroopSelectionItemButtonWidget → ButtonWidget. It exposes 13 public/protected members: 2 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuTroopSelectionItemButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu) the module directory; inheritance chain GameMenuTroopSelectionItemButtonWidget → ButtonWidget. The surface is property-led (properties 10/13, methods 2/13), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuTroopSelectionItemButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddButtonWidget` | `public ButtonWidget AddButtonWidget` | property |
| `RemoveButtonWidget` | `public ButtonWidget RemoveButtonWidget` | property |
| `CheckmarkVisualWidget` | `public Widget CheckmarkVisualWidget` | property |
| `AddRemoveControls` | `public Widget AddRemoveControls` | property |
| `HeroHealthParent` | `public Widget HeroHealthParent` | property |
| `GameMenuTroopSelectionItemButtonWidget` | `public GameMenuTroopSelectionItemButtonWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `HandleClick` | `protected override void HandleClick()` | method |
| `IsRosterFull` | `public bool IsRosterFull` | property |
| `IsLocked` | `public bool IsLocked` | property |
| `IsTroopHero` | `public bool IsTroopHero` | property |
| `CurrentAmount` | `public int CurrentAmount` | property |
| `MaxAmount` | `public int MaxAmount` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameMenuWidget](../GameMenuWidget)
- [same namespace SettlementMenuPartyCharacterListsButtonWidget](../SettlementMenuPartyCharacterListsButtonWidget)
