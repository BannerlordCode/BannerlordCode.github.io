---
title: "SandboxBattleBannerBearersModel"
description: "SandboxBattleBannerBearersModel: a public class in SandBox, inheriting BattleBannerBearersModel; 9 exposed members (9 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/SandboxBattleBannerBearersModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandboxBattleBannerBearersModel

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public class SandboxBattleBannerBearersModel : BattleBannerBearersModel`
**File:** `SandBox/SandboxBattleBannerBearersModel.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandboxBattleBannerBearersModel lives in the SandBox module, source file SandBox/SandboxBattleBannerBearersModel.cs. It is a public class, implementing/inheriting BattleBannerBearersModel; the inheritance chain is SandboxBattleBannerBearersModel → BattleBannerBearersModel → MBGameModel → GameModel. It exposes 9 public/protected members: 9 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxBattleBannerBearersModel lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox`, inheritance chain SandboxBattleBannerBearersModel → BattleBannerBearersModel → MBGameModel → GameModel. The surface is method-led (methods 9/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/SandboxBattleBannerBearersModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetMinimumFormationTroopCountToBearBanners` | `public override int GetMinimumFormationTroopCountToBearBanners()` | method |
| `GetBannerInteractionDistance` | `public override float GetBannerInteractionDistance(Agent interactingAgent)` | method |
| `CanBannerBearerProvideEffectToFormation` | `public override bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)` | method |
| `CanAgentPickUpAnyBanner` | `public override bool CanAgentPickUpAnyBanner(Agent agent)` | method |
| `CanAgentBecomeBannerBearer` | `public override bool CanAgentBecomeBannerBearer(Agent agent)` | method |
| `GetAgentBannerBearingPriority` | `public override int GetAgentBannerBearingPriority(Agent agent)` | method |
| `CanFormationDeployBannerBearers` | `public override bool CanFormationDeployBannerBearers(Formation formation)` | method |
| `GetDesiredNumberOfBannerBearersForFormation` | `public override int GetDesiredNumberOfBannerBearersForFormation(Formation formation)` | method |
| `GetBannerBearerReplacementWeapon` | `public override ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BattleBannerBearersModel](../../mission-ext/BattleBannerBearersModel/)
- [same namespace Add1000GoldCheat](../Add1000GoldCheat/)
- [same namespace Add100InfluenceCheat](../Add100InfluenceCheat/)
- [same namespace Add100RenownCheat](../Add100RenownCheat/)
- [same namespace AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)
