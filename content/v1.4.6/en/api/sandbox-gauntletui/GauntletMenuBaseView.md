---
title: "GauntletMenuBaseView"
description: "GauntletMenuBaseView: a public class in SandBox.GauntletUI, inheriting MenuView; 12 exposed members (11 methods, 1 properties, 0 fields). Source: SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs."
---
# GauntletMenuBaseView

**Namespace:** `SandBox.GauntletUI.Menu`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMenuBaseView : MenuView`
**File:** `SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs`

## Overview

GauntletMenuBaseView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs. It is a public class, implementing/inheriting MenuView; the inheritance chain is GauntletMenuBaseView → MenuView. It exposes 12 public/protected members: 11 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMenuBaseView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Menu) the module directory; inheritance chain GauntletMenuBaseView → MenuView. The surface is method-led (methods 11/12, properties 1/12), so it mostly exposes operations. MenuView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameMenuDataSource` | `public GameMenuVM GameMenuDataSource` | property |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `OnResume` | `protected override void OnResume()` | method |
| `OnMenuContextRefreshed` | `protected override void OnMenuContextRefreshed()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnMapConversationActivated` | `protected override void OnMapConversationActivated()` | method |
| `OnMapConversationDeactivated` | `protected override void OnMapConversationDeactivated()` | method |
| `OnMenuContextUpdated` | `protected override void OnMenuContextUpdated(MenuContext newMenuContext)` | method |
| `OnBackgroundMeshNameSet` | `protected override void OnBackgroundMeshNameSet(string name)` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletMenuBackground](../GauntletMenuBackground)
- [same namespace GauntletMenuOverlayBaseView](../GauntletMenuOverlayBaseView)
- [same namespace GauntletMenuRecruitVolunteersView](../GauntletMenuRecruitVolunteersView)
- [same namespace GauntletMenuTournamentLeaderboardView](../GauntletMenuTournamentLeaderboardView)
