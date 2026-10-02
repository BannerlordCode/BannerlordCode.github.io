---
title: "GauntletMenuTroopSelectionView"
description: "GauntletMenuTroopSelectionView: a public class in SandBox.GauntletUI, inheriting MenuView; 6 exposed members (5 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Menu/GauntletMenuTroopSelectionView.cs."
---
# GauntletMenuTroopSelectionView

**Namespace:** `SandBox.GauntletUI.Menu`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMenuTroopSelectionView : MenuView`
**File:** `SandBox.GauntletUI/Menu/GauntletMenuTroopSelectionView.cs`

## Overview

GauntletMenuTroopSelectionView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Menu/GauntletMenuTroopSelectionView.cs. It is a public class, implementing/inheriting MenuView; the inheritance chain is GauntletMenuTroopSelectionView → MenuView. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMenuTroopSelectionView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Menu) the module directory; inheritance chain GauntletMenuTroopSelectionView → MenuView. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. MenuView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Menu/GauntletMenuTroopSelectionView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletMenuTroopSelectionView` | `public GauntletMenuTroopSelectionView(TroopRoster fullRoster, TroopRoster initialSelections, Func<CharacterObject, bool>canChangeStatusOfTroop, Action<TroopRoster>onDone, int maxSelectableTroopCount, int minSelectableTroopCount)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnMapConversationActivated` | `protected override void OnMapConversationActivated()` | method |
| `OnMapConversationDeactivated` | `protected override void OnMapConversationDeactivated()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletMenuBackground](../GauntletMenuBackground)
- [same namespace GauntletMenuBaseView](../GauntletMenuBaseView)
- [same namespace GauntletMenuOverlayBaseView](../GauntletMenuOverlayBaseView)
- [same namespace GauntletMenuRecruitVolunteersView](../GauntletMenuRecruitVolunteersView)
