---
title: "GauntletPartyScreen"
description: "GauntletPartyScreen: a public class in SandBox.GauntletUI, inheriting ScreenBase, IGameStateListener; 7 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/GauntletPartyScreen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletPartyScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletPartyScreen : ScreenBase, IGameStateListener, IChangeableScreen, IPartyScreenLogicHandler, IPartyScreenPrisonHandler, IPartyScreenTroopHandler`
**File:** `SandBox.GauntletUI/GauntletPartyScreen.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletPartyScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/GauntletPartyScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener, IChangeableScreen, IPartyScreenLogicHandler, IPartyScreenPrisonHandler, IPartyScreenTroopHandler; the inheritance chain is GauntletPartyScreen → ScreenBase. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletPartyScreen lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI`, inheritance chain GauntletPartyScreen → ScreenBase. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/GauntletPartyScreen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsTroopUpgradesDisabled` | `public bool IsTroopUpgradesDisabled` | property |
| `GauntletPartyScreen` | `public GauntletPartyScreen(PartyState partyState)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnReady` | `protected override void OnReady()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnResume` | `protected override void OnResume()` | method |
| `RequestUserInput` | `public void RequestUserInput(string text, Action accept, Action cancel)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IGameStateListener](../../core-extra/IGameStateListener/)
- [base / interface IChangeableScreen](../IChangeableScreen/)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen/)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen/)
- [same namespace GauntletClanScreen](../GauntletClanScreen/)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen/)
