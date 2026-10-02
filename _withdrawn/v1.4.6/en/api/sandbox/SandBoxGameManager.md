---
title: "SandBoxGameManager"
description: "SandBoxGameManager: a public class in SandBox, inheriting MBGameManager; 10 exposed members (5 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/SandBoxGameManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxGameManager

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public class SandBoxGameManager : MBGameManager`
**File:** `SandBox/SandBoxGameManager.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandBoxGameManager lives in the SandBox module, source file SandBox/SandBoxGameManager.cs. It is a public class, implementing/inheriting MBGameManager; the inheritance chain is SandBoxGameManager → MBGameManager → GameManagerBase. It exposes 10 public/protected members: 5 methods, 2 properties, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxGameManager lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox`, inheritance chain SandBoxGameManager → MBGameManager → GameManagerBase. The surface is method-led (methods 5/10, properties 2/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/SandBoxGameManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `LoadingSavedGame` | `public bool LoadingSavedGame` | property |
| `MetaData` | `public MetaData MetaData` | property |
| `SandBoxGameManager` | `public SandBoxGameManager(SandBoxGameManager.CampaignCreatorDelegate campaignCreator)` | constructor |
| `SandBoxGameManager` | `public SandBoxGameManager(LoadResult loadedGameResult)` | constructor |
| `OnGameEnd` | `public override void OnGameEnd(Game game)` | method |
| `DoLoadingForGameManager` | `protected override void DoLoadingForGameManager(GameManagerLoadingSteps gameManagerLoadingStep, out GameManagerLoadingSteps nextStep)` | method |
| `OnAfterCampaignStart` | `public override void OnAfterCampaignStart(Game game)` | method |
| `OnLoadFinished` | `public override void OnLoadFinished()` | method |
| `CampaignCreatorDelegate` | `public delegate Campaign CampaignCreatorDelegate();` | method |
| `CampaignCreatorDelegate` | `public delegate Campaign CampaignCreatorDelegate()` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameManager](../../mission-ext/MBGameManager/)
- [same namespace Add1000GoldCheat](../Add1000GoldCheat/)
- [same namespace Add100InfluenceCheat](../Add100InfluenceCheat/)
- [same namespace Add100RenownCheat](../Add100RenownCheat/)
- [same namespace AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)
