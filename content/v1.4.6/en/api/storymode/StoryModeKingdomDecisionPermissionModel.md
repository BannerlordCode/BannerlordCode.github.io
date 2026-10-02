---
title: "StoryModeKingdomDecisionPermissionModel"
description: "StoryModeKingdomDecisionPermissionModel: a public class in StoryMode, inheriting KingdomDecisionPermissionModel; 7 exposed members (7 methods, 0 properties, 0 fields). Source: StoryMode/GameComponents/StoryModeKingdomDecisionPermissionModel.cs."
---
# StoryModeKingdomDecisionPermissionModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeKingdomDecisionPermissionModel : KingdomDecisionPermissionModel`
**File:** `StoryMode/GameComponents/StoryModeKingdomDecisionPermissionModel.cs`

## Overview

StoryModeKingdomDecisionPermissionModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModeKingdomDecisionPermissionModel.cs. It is a public class, implementing/inheriting KingdomDecisionPermissionModel; the inheritance chain is StoryModeKingdomDecisionPermissionModel → KingdomDecisionPermissionModel. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeKingdomDecisionPermissionModel is a top-level type in StoryMode, namespace differing from (StoryMode.GameComponents) the module directory; inheritance chain StoryModeKingdomDecisionPermissionModel → KingdomDecisionPermissionModel. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. KingdomDecisionPermissionModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModeKingdomDecisionPermissionModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsPolicyDecisionAllowed` | `public override bool IsPolicyDecisionAllowed(PolicyObject policy)` | method |
| `IsAnnexationDecisionAllowed` | `public override bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)` | method |
| `IsExpulsionDecisionAllowed` | `public override bool IsExpulsionDecisionAllowed(Clan expelledClan)` | method |
| `IsKingSelectionDecisionAllowed` | `public override bool IsKingSelectionDecisionAllowed(Kingdom kingdom)` | method |
| `IsWarDecisionAllowedBetweenKingdoms` | `public override bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)` | method |
| `IsPeaceDecisionAllowedBetweenKingdoms` | `public override bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)` | method |
| `IsStartAllianceDecisionAllowedBetweenKingdoms` | `public override bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)` | method |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel)
