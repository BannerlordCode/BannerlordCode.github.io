---
title: "SandboxBattleInitializationModel"
description: "SandboxBattleInitializationModel: a public class in SandBox.GameComponents, inheriting BattleInitializationModel; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/GameComponents/SandboxBattleInitializationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandboxBattleInitializationModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxBattleInitializationModel : BattleInitializationModel`
**File:** `SandBox/GameComponents/SandboxBattleInitializationModel.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandboxBattleInitializationModel lives in the SandBox module, source file SandBox/GameComponents/SandboxBattleInitializationModel.cs. It is a public class, implementing/inheriting BattleInitializationModel; the inheritance chain is SandboxBattleInitializationModel → BattleInitializationModel → MBGameModel → GameModel. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxBattleInitializationModel lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GameComponents`, inheritance chain SandboxBattleInitializationModel → BattleInitializationModel → MBGameModel → GameModel. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/GameComponents/SandboxBattleInitializationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `List` | `public override List<FormationClass>GetAllAvailableTroopTypes()` | method |
| `CanPlayerSideDeployWithOrderOfBattleAux` | `protected override bool CanPlayerSideDeployWithOrderOfBattleAux()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BattleInitializationModel](../../mission-ext/BattleInitializationModel/)
- [same namespace IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler/)
- [same namespace SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel/)
- [same namespace SandboxAgentDecideKilledOrUnconsciousModel](../SandboxAgentDecideKilledOrUnconsciousModel/)
- [same namespace SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel/)
