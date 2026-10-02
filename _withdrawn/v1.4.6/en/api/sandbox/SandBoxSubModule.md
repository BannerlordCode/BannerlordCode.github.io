---
title: "SandBoxSubModule"
description: "SandBoxSubModule: a public class in SandBox, inheriting MBSubModuleBase; 10 exposed members (10 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/SandBoxSubModule.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxSubModule

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public class SandBoxSubModule : MBSubModuleBase`
**File:** `SandBox/SandBoxSubModule.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandBoxSubModule lives in the SandBox module, source file SandBox/SandBoxSubModule.cs. It is a public class, implementing/inheriting MBSubModuleBase; the inheritance chain is SandBoxSubModule → MBSubModuleBase. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxSubModule lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox`, inheritance chain SandBoxSubModule → MBSubModuleBase. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/SandBoxSubModule.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnSubModuleLoad` | `protected override void OnSubModuleLoad()` | method |
| `InitializeGameStarter` | `protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)` | method |
| `OnCampaignStart` | `public override void OnCampaignStart(Game game, object starterObject)` | method |
| `OnGameInitializationFinished` | `public override void OnGameInitializationFinished(Game game)` | method |
| `RegisterSubModuleObjects` | `public override void RegisterSubModuleObjects(bool isSavedCampaign)` | method |
| `AfterRegisterSubModuleObjects` | `public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)` | method |
| `OnGameLoaded` | `public override void OnGameLoaded(Game game, object starterObject)` | method |
| `OnBeforeInitialModuleScreenSetAsRoot` | `protected override void OnBeforeInitialModuleScreenSetAsRoot()` | method |
| `OnConfigChanged` | `public override void OnConfigChanged()` | method |
| `OnNewModuleLoad` | `protected override void OnNewModuleLoad()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Add1000GoldCheat](../Add1000GoldCheat/)
- [same namespace Add100InfluenceCheat](../Add100InfluenceCheat/)
- [same namespace Add100RenownCheat](../Add100RenownCheat/)
- [same namespace AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)
