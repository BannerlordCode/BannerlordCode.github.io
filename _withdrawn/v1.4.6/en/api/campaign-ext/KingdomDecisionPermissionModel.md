---
title: "KingdomDecisionPermissionModel"
description: "KingdomDecisionPermissionModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<KingdomDecisionPermissionModel>; 7 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomDecisionPermissionModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomDecisionPermissionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class KingdomDecisionPermissionModel : MBGameModel<KingdomDecisionPermissionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomDecisionPermissionModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

KingdomDecisionPermissionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomDecisionPermissionModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<KingdomDecisionPermissionModel>; the inheritance chain is KingdomDecisionPermissionModel → MBGameModel → GameModel. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomDecisionPermissionModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain KingdomDecisionPermissionModel → MBGameModel → GameModel. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomDecisionPermissionModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsPolicyDecisionAllowed` | `public abstract bool IsPolicyDecisionAllowed(PolicyObject policy);` | method |
| `IsWarDecisionAllowedBetweenKingdoms` | `public abstract bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason);` | method |
| `IsPeaceDecisionAllowedBetweenKingdoms` | `public abstract bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason);` | method |
| `IsStartAllianceDecisionAllowedBetweenKingdoms` | `public abstract bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason);` | method |
| `IsAnnexationDecisionAllowed` | `public abstract bool IsAnnexationDecisionAllowed(Settlement annexedSettlement);` | method |
| `IsExpulsionDecisionAllowed` | `public abstract bool IsExpulsionDecisionAllowed(Clan expelledClan);` | method |
| `IsKingSelectionDecisionAllowed` | `public abstract bool IsKingSelectionDecisionAllowed(Kingdom kingdom);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
