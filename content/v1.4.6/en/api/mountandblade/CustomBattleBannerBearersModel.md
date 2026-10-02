---
title: "CustomBattleBannerBearersModel"
description: "CustomBattleBannerBearersModel: a public class in TaleWorlds.MountAndBlade, inheriting BattleBannerBearersModel; 9 exposed members (9 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/CustomBattleBannerBearersModel.cs."
---
# CustomBattleBannerBearersModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomBattleBannerBearersModel : BattleBannerBearersModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleBannerBearersModel.cs`

## Overview

CustomBattleBannerBearersModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CustomBattleBannerBearersModel.cs. It is a public class, implementing/inheriting BattleBannerBearersModel; the inheritance chain is CustomBattleBannerBearersModel → BattleBannerBearersModel → MBGameModel. It exposes 9 public/protected members: 9 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleBannerBearersModel is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain CustomBattleBannerBearersModel → BattleBannerBearersModel → MBGameModel. The surface is method-led (methods 9/9, properties 0/9), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CustomBattleBannerBearersModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BattleBannerBearersModel](../BattleBannerBearersModel)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
