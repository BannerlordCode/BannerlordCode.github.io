---
title: "TroopUpgradeTracker"
description: "TroopUpgradeTracker: a public class in TaleWorlds.CampaignSystem; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/TroopUpgradeTracker.cs."
---
# TroopUpgradeTracker

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TroopUpgradeTracker`
**File:** `TaleWorlds.CampaignSystem/TroopUpgradeTracker.cs`

## Overview

TroopUpgradeTracker lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/TroopUpgradeTracker.cs. It is a public class; the inheritance chain is TroopUpgradeTracker. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TroopUpgradeTracker is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain TroopUpgradeTracker. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/TroopUpgradeTracker.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddParty` | `public void AddParty(MapEventParty mapEventParty)` | method |
| `RemoveParty` | `public void RemoveParty(MapEventParty mapEventParty)` | method |
| `AddTrackedTroop` | `public void AddTrackedTroop(PartyBase party, CharacterObject character)` | method |
| `IEnumerable` | `public IEnumerable<SkillObject>CheckSkillUpgrades(Hero hero)` | method |
| `CheckUpgradedCount` | `public int CheckUpgradedCount(PartyBase party, CharacterObject character)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
