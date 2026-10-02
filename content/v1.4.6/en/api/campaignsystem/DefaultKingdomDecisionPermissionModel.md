---
title: "DefaultKingdomDecisionPermissionModel"
description: "DefaultKingdomDecisionPermissionModel: a public class in TaleWorlds.CampaignSystem, inheriting KingdomDecisionPermissionModel; 7 exposed members (7 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs."
---
# DefaultKingdomDecisionPermissionModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultKingdomDecisionPermissionModel : KingdomDecisionPermissionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs`

## Overview

DefaultKingdomDecisionPermissionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs. It is a public class, implementing/inheriting KingdomDecisionPermissionModel; the inheritance chain is DefaultKingdomDecisionPermissionModel → KingdomDecisionPermissionModel → MBGameModel. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultKingdomDecisionPermissionModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultKingdomDecisionPermissionModel → KingdomDecisionPermissionModel → MBGameModel. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsPolicyDecisionAllowed` | `public override bool IsPolicyDecisionAllowed(PolicyObject policy)` | method |
| `IsWarDecisionAllowedBetweenKingdoms` | `public override bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)` | method |
| `IsPeaceDecisionAllowedBetweenKingdoms` | `public override bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)` | method |
| `IsAnnexationDecisionAllowed` | `public override bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)` | method |
| `IsExpulsionDecisionAllowed` | `public override bool IsExpulsionDecisionAllowed(Clan expelledClan)` | method |
| `IsKingSelectionDecisionAllowed` | `public override bool IsKingSelectionDecisionAllowed(Kingdom kingdom)` | method |
| `IsStartAllianceDecisionAllowedBetweenKingdoms` | `public override bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface KingdomDecisionPermissionModel](../KingdomDecisionPermissionModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
