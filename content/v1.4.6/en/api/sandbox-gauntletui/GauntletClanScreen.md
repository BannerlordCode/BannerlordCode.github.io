---
title: "GauntletClanScreen"
description: "GauntletClanScreen: a public class in SandBox.GauntletUI, inheriting ScreenBase, IGameStateListener; 11 exposed members (9 methods, 1 properties, 0 fields). Source: SandBox.GauntletUI/GauntletClanScreen.cs."
---
# GauntletClanScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletClanScreen : ScreenBase, IGameStateListener`
**File:** `SandBox.GauntletUI/GauntletClanScreen.cs`

## Overview

GauntletClanScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/GauntletClanScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is GauntletClanScreen → ScreenBase. It exposes 11 public/protected members: 9 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletClanScreen is a top-level type in SandBox.GauntletUI, namespace matching the module directory; inheritance chain GauntletClanScreen → ScreenBase. The surface is method-led (methods 9/11, properties 1/11), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/GauntletClanScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `_dataSource` | `public ClanManagementVM _dataSource` | property |
| `GauntletClanScreen` | `public GauntletClanScreen(ClanState clanState)` | constructor |
| `CreateDataSource` | `protected virtual ClanManagementVM CreateDataSource()` | method |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `IsRoleSelectionPopupActive` | `protected bool IsRoleSelectionPopupActive()` | method |
| `OpenPartyScreenForNewClanParty` | `protected void OpenPartyScreenForNewClanParty(Hero hero)` | method |
| `OpenBannerEditorWithPlayerClan` | `protected void OpenBannerEditorWithPlayerClan()` | method |
| `ShowHeroOnMap` | `protected void ShowHeroOnMap(Hero hero)` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `CloseClanScreen` | `protected void CloseClanScreen()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen)
- [same namespace GauntletEducationScreen](../GauntletEducationScreen)
