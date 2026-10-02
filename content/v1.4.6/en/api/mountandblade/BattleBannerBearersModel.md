---
title: "BattleBannerBearersModel"
description: "BattleBannerBearersModel: a public class in TaleWorlds.MountAndBlade, inheriting MBGameModel<BattleBannerBearersModel>; 21 exposed members (19 methods, 1 properties, 1 fields). Source: TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs."
---
# BattleBannerBearersModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BattleBannerBearersModel : MBGameModel<BattleBannerBearersModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs`

## Overview

BattleBannerBearersModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BattleBannerBearersModel>; the inheritance chain is BattleBannerBearersModel → MBGameModel. It exposes 21 public/protected members: 19 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleBannerBearersModel is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.ComponentInterfaces) the module directory; inheritance chain BattleBannerBearersModel → MBGameModel. The surface is method-led (methods 19/21, properties 1/21), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BannerBearerLogic` | `protected BannerBearerLogic BannerBearerLogic` | property |
| `InitializeModel` | `public void InitializeModel(BannerBearerLogic bannerBearerLogic)` | method |
| `FinalizeModel` | `public void FinalizeModel()` | method |
| `IsFormationBanner` | `public bool IsFormationBanner(Formation formation, SpawnedItemEntity item)` | method |
| `IsBannerSearchingAgent` | `public bool IsBannerSearchingAgent(Agent agent)` | method |
| `IsInteractableFormationBanner` | `public bool IsInteractableFormationBanner(SpawnedItemEntity item, Agent interactingAgent)` | method |
| `HasFormationBanner` | `public bool HasFormationBanner(Formation formation)` | method |
| `HasBannerOnGround` | `public bool HasBannerOnGround(Formation formation)` | method |
| `GetFormationBanner` | `public ItemObject GetFormationBanner(Formation formation)` | method |
| `List` | `public List<Agent>GetFormationBannerBearers(Formation formation)` | method |
| `GetActiveBanner` | `public BannerComponent GetActiveBanner(Formation formation)` | method |
| `GetMinimumFormationTroopCountToBearBanners` | `public abstract int GetMinimumFormationTroopCountToBearBanners();` | method |
| `GetBannerInteractionDistance` | `public abstract float GetBannerInteractionDistance(Agent interactingAgent);` | method |
| `CanBannerBearerProvideEffectToFormation` | `public abstract bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation);` | method |
| `CanAgentPickUpAnyBanner` | `public abstract bool CanAgentPickUpAnyBanner(Agent agent);` | method |
| `CanAgentBecomeBannerBearer` | `public abstract bool CanAgentBecomeBannerBearer(Agent agent);` | method |
| `GetAgentBannerBearingPriority` | `public abstract int GetAgentBannerBearingPriority(Agent agent);` | method |
| `CanFormationDeployBannerBearers` | `public abstract bool CanFormationDeployBannerBearers(Formation formation);` | method |
| `GetDesiredNumberOfBannerBearersForFormation` | `public abstract int GetDesiredNumberOfBannerBearersForFormation(Formation formation);` | method |
| `GetBannerBearerReplacementWeapon` | `public abstract ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter);` | method |
| `DefaultDetachmentCostMultiplier` | `public const float DefaultDetachmentCostMultiplier` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel)
- [same namespace AutoBlockModel](../AutoBlockModel)
