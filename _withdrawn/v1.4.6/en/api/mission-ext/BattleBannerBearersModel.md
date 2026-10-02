---
title: "BattleBannerBearersModel"
description: "BattleBannerBearersModel: a public class in TaleWorlds.MountAndBlade.ComponentInterfaces, inheriting MBGameModel<BattleBannerBearersModel>; 21 exposed members (19 methods, 1 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleBannerBearersModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BattleBannerBearersModel : MBGameModel<BattleBannerBearersModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BattleBannerBearersModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BattleBannerBearersModel>; the inheritance chain is BattleBannerBearersModel → MBGameModel → GameModel. It exposes 21 public/protected members: 19 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleBannerBearersModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.ComponentInterfaces`, inheritance chain BattleBannerBearersModel → MBGameModel → GameModel. The surface is method-led (methods 19/21, properties 1/21), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel/)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel/)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel/)
- [same namespace AutoBlockModel](../AutoBlockModel/)
