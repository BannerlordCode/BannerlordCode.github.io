---
title: "OrderOfBattleCampaignBehavior"
description: "OrderOfBattleCampaignBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase; 7 exposed members (4 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/OrderOfBattleCampaignBehavior.cs."
---
# OrderOfBattleCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class OrderOfBattleCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/OrderOfBattleCampaignBehavior.cs`

## Overview

OrderOfBattleCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/OrderOfBattleCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is OrderOfBattleCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 7 public/protected members: 4 methods, 1 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderOfBattleCampaignBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain OrderOfBattleCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 4/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/OrderOfBattleCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderOfBattleCampaignBehavior` | `public OrderOfBattleCampaignBehavior()` | constructor |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `GetFormationDataAtIndex` | `public OrderOfBattleCampaignBehavior.OrderOfBattleFormationData GetFormationDataAtIndex(int formationIndex, bool isSiegeBattle, bool isInArmy)` | method |
| `SetFormationInfos` | `public void SetFormationInfos(List<OrderOfBattleCampaignBehavior.OrderOfBattleFormationData>formationInfos, bool isSiegeBattle, bool isInArmy)` | method |
| `OrderOfBattleFormationData` | `public class OrderOfBattleFormationData` | property |
| `OrderOfBattleFormationData` | `public class OrderOfBattleFormationData` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
