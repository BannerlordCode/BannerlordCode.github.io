---
title: "SandBoxGauntletUISubModule"
description: "SandBoxGauntletUISubModule: a public class in SandBox.GauntletUI, inheriting MBSubModuleBase; 6 exposed members (5 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/SandBoxGauntletUISubModule.cs."
---
# SandBoxGauntletUISubModule

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class SandBoxGauntletUISubModule : MBSubModuleBase`
**File:** `SandBox.GauntletUI/SandBoxGauntletUISubModule.cs`

## Overview

SandBoxGauntletUISubModule lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/SandBoxGauntletUISubModule.cs. It is a public class, implementing/inheriting MBSubModuleBase; the inheritance chain is SandBoxGauntletUISubModule → MBSubModuleBase. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxGauntletUISubModule is a top-level type in SandBox.GauntletUI, namespace matching the module directory; inheritance chain SandBoxGauntletUISubModule → MBSubModuleBase. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. MBSubModuleBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/SandBoxGauntletUISubModule.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SandBoxGauntletUISubModule` | `public SandBoxGauntletUISubModule()` | constructor |
| `OnCampaignStart` | `public override void OnCampaignStart(Game game, object starterObject)` | method |
| `OnGameStart` | `protected override void OnGameStart(Game game, IGameStarter gameStarterObject)` | method |
| `OnGameEnd` | `public override void OnGameEnd(Game game)` | method |
| `BeginGameStart` | `public override void BeginGameStart(Game game)` | method |
| `OnApplicationTick` | `protected override void OnApplicationTick(float dt)` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen)
- [same namespace GauntletClanScreen](../GauntletClanScreen)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen)
