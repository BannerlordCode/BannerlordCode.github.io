---
title: "HideoutCampaignBehavior"
description: "HideoutCampaignBehavior: a public class in TaleWorlds.CampaignSystem, inheriting CampaignBehaviorBase, IHideoutCampaignBehavior; 10 exposed members (10 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/HideoutCampaignBehavior.cs."
---
# HideoutCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class HideoutCampaignBehavior : CampaignBehaviorBase, IHideoutCampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/HideoutCampaignBehavior.cs`

## Overview

HideoutCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/HideoutCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, IHideoutCampaignBehavior; the inheritance chain is HideoutCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HideoutCampaignBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain HideoutCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/HideoutCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `OnNewGameCreated` | `public void OnNewGameCreated(CampaignGameStarter campaignGameStarter)` | method |
| `OnGameLoaded` | `public void OnGameLoaded(CampaignGameStarter campaignGameStarter)` | method |
| `HourlyTickSettlement` | `public void HourlyTickSettlement(Settlement settlement)` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `AddGameMenus` | `protected void AddGameMenus(CampaignGameStarter campaignGameStarter)` | method |
| `GetInitialHideoutPopulation` | `public int GetInitialHideoutPopulation()` | method |
| `hideout_wait_menu_on_condition` | `public bool hideout_wait_menu_on_condition(MenuCallbackArgs args)` | method |
| `hideout_wait_menu_on_tick` | `public void hideout_wait_menu_on_tick(MenuCallbackArgs args, CampaignTime campaignTime)` | method |
| `hideout_wait_menu_on_consequence` | `public void hideout_wait_menu_on_consequence(MenuCallbackArgs args)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IHideoutCampaignBehavior](../IHideoutCampaignBehavior)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
