---
title: "GauntletClanScreen"
description: "GauntletClanScreen: a public class in SandBox.GauntletUI, inheriting ScreenBase, IGameStateListener; 11 exposed members (9 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/GauntletClanScreen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletClanScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletClanScreen : ScreenBase, IGameStateListener`
**File:** `SandBox.GauntletUI/GauntletClanScreen.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletClanScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/GauntletClanScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is GauntletClanScreen → ScreenBase. It exposes 11 public/protected members: 9 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletClanScreen lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI`, inheritance chain GauntletClanScreen → ScreenBase. The surface is method-led (methods 9/11, properties 1/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/GauntletClanScreen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IGameStateListener](../../core-extra/IGameStateListener/)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen/)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen/)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen/)
- [same namespace GauntletEducationScreen](../GauntletEducationScreen/)
