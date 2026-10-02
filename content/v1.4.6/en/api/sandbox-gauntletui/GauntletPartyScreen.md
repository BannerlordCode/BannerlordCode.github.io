---
title: "GauntletPartyScreen"
description: "GauntletPartyScreen: a public class in SandBox.GauntletUI, inheriting ScreenBase, IGameStateListener; 7 exposed members (5 methods, 1 properties, 0 fields). Source: SandBox.GauntletUI/GauntletPartyScreen.cs."
---
# GauntletPartyScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletPartyScreen : ScreenBase, IGameStateListener, IChangeableScreen, IPartyScreenLogicHandler, IPartyScreenPrisonHandler, IPartyScreenTroopHandler`
**File:** `SandBox.GauntletUI/GauntletPartyScreen.cs`

## Overview

GauntletPartyScreen lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/GauntletPartyScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener, IChangeableScreen, IPartyScreenLogicHandler, IPartyScreenPrisonHandler, IPartyScreenTroopHandler; the inheritance chain is GauntletPartyScreen → ScreenBase. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletPartyScreen is a top-level type in SandBox.GauntletUI, namespace matching the module directory; inheritance chain GauntletPartyScreen → ScreenBase. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/GauntletPartyScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsTroopUpgradesDisabled` | `public bool IsTroopUpgradesDisabled` | property |
| `GauntletPartyScreen` | `public GauntletPartyScreen(PartyState partyState)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnReady` | `protected override void OnReady()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnResume` | `protected override void OnResume()` | method |
| `RequestUserInput` | `public void RequestUserInput(string text, Action accept, Action cancel)` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen)
- [same namespace GauntletClanScreen](../GauntletClanScreen)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen)
