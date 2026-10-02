---
title: "MultiplayerBattleBannerBearersModel"
description: "MultiplayerBattleBannerBearersModel: a public class in TaleWorlds.MountAndBlade, inheriting BattleBannerBearersModel; 9 exposed members (9 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MultiplayerBattleBannerBearersModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerBattleBannerBearersModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerBattleBannerBearersModel : BattleBannerBearersModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerBattleBannerBearersModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerBattleBannerBearersModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerBattleBannerBearersModel.cs. It is a public class, implementing/inheriting BattleBannerBearersModel; the inheritance chain is MultiplayerBattleBannerBearersModel → BattleBannerBearersModel → MBGameModel → GameModel. It exposes 9 public/protected members: 9 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerBattleBannerBearersModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MultiplayerBattleBannerBearersModel → BattleBannerBearersModel → MBGameModel → GameModel. The surface is method-led (methods 9/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerBattleBannerBearersModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetMinimumFormationTroopCountToBearBanners` | `public override int GetMinimumFormationTroopCountToBearBanners()` | method |
| `GetBannerInteractionDistance` | `public override float GetBannerInteractionDistance(Agent interactingAgent)` | method |
| `CanAgentPickUpAnyBanner` | `public override bool CanAgentPickUpAnyBanner(Agent agent)` | method |
| `CanBannerBearerProvideEffectToFormation` | `public override bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)` | method |
| `CanAgentBecomeBannerBearer` | `public override bool CanAgentBecomeBannerBearer(Agent agent)` | method |
| `GetAgentBannerBearingPriority` | `public override int GetAgentBannerBearingPriority(Agent agent)` | method |
| `CanFormationDeployBannerBearers` | `public override bool CanFormationDeployBannerBearers(Formation formation)` | method |
| `GetDesiredNumberOfBannerBearersForFormation` | `public override int GetDesiredNumberOfBannerBearersForFormation(Formation formation)` | method |
| `GetBannerBearerReplacementWeapon` | `public override ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BattleBannerBearersModel](../BattleBannerBearersModel/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
