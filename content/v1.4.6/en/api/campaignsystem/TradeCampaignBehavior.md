---
title: "TradeCampaignBehavior"
description: "TradeCampaignBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase; 8 exposed members (4 methods, 1 properties, 2 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/TradeCampaignBehavior.cs."
---
# TradeCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TradeCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/TradeCampaignBehavior.cs`

## Overview

TradeCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/TradeCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is TradeCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 8 public/protected members: 4 methods, 1 properties, 2 fields, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TradeCampaignBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain TradeCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 4/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/TradeCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnNewGameCreated` | `public void OnNewGameCreated(CampaignGameStarter campaignGameStarter)` | method |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `DailyTickTown` | `public void DailyTickTown(Town town)` | method |
| `MaximumTaxRatioForVillages` | `public const float MaximumTaxRatioForVillages` | field |
| `MaximumTaxRatioForTowns` | `public const float MaximumTaxRatioForTowns` | field |
| `TradeGoodType` | `public enum TradeGoodType` | property |
| `TradeGoodType` | `public enum TradeGoodType` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
