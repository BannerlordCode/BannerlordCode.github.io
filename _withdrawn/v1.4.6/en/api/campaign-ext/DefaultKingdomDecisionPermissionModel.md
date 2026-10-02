---
title: "DefaultKingdomDecisionPermissionModel"
description: "DefaultKingdomDecisionPermissionModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting KingdomDecisionPermissionModel; 7 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultKingdomDecisionPermissionModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultKingdomDecisionPermissionModel : KingdomDecisionPermissionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultKingdomDecisionPermissionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs. It is a public class, implementing/inheriting KingdomDecisionPermissionModel; the inheritance chain is DefaultKingdomDecisionPermissionModel → KingdomDecisionPermissionModel → MBGameModel → GameModel. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultKingdomDecisionPermissionModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultKingdomDecisionPermissionModel → KingdomDecisionPermissionModel → MBGameModel → GameModel. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsPolicyDecisionAllowed` | `public override bool IsPolicyDecisionAllowed(PolicyObject policy)` | method |
| `IsWarDecisionAllowedBetweenKingdoms` | `public override bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)` | method |
| `IsPeaceDecisionAllowedBetweenKingdoms` | `public override bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)` | method |
| `IsAnnexationDecisionAllowed` | `public override bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)` | method |
| `IsExpulsionDecisionAllowed` | `public override bool IsExpulsionDecisionAllowed(Clan expelledClan)` | method |
| `IsKingSelectionDecisionAllowed` | `public override bool IsKingSelectionDecisionAllowed(Kingdom kingdom)` | method |
| `IsStartAllianceDecisionAllowedBetweenKingdoms` | `public override bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface KingdomDecisionPermissionModel](../KingdomDecisionPermissionModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
