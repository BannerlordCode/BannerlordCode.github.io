---
title: "BannerBearerCondition"
description: "BannerBearerCondition: a public class in TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions, inheriting MPPerkCondition; 7 exposed members (3 methods, 2 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Network/Gameplay/Perks/Conditions/BannerBearerCondition.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerBearerCondition

**Namespace:** `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BannerBearerCondition : MPPerkCondition`
**File:** `TaleWorlds.MountAndBlade/Network/Gameplay/Perks/Conditions/BannerBearerCondition.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BannerBearerCondition lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Network/Gameplay/Perks/Conditions/BannerBearerCondition.cs. It is a public class, implementing/inheriting MPPerkCondition; the inheritance chain is BannerBearerCondition → MPPerkCondition. It exposes 7 public/protected members: 3 methods, 2 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerBearerCondition lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`, inheritance chain BannerBearerCondition → MPPerkCondition. The surface is method-led (methods 3/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Network/Gameplay/Perks/Conditions/BannerBearerCondition.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EventFlags` | `public override MPPerkCondition.PerkEventFlags EventFlags` | property |
| `IsPeerCondition` | `public override bool IsPeerCondition` | property |
| `BannerBearerCondition` | `protected BannerBearerCondition()` | constructor |
| `Deserialize` | `protected override void Deserialize(XmlNode node)` | method |
| `Check` | `public override bool Check(MissionPeer peer)` | method |
| `Check` | `public override bool Check(Agent agent)` | method |
| `StringType` | `protected static string StringType` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MPPerkCondition](../MPPerkCondition/)
- [same namespace AgentStatusCondition](../AgentStatusCondition/)
- [same namespace ClosestFlagCondition](../ClosestFlagCondition/)
- [same namespace ControllerCondition](../ControllerCondition/)
- [same namespace FlagDominationStatusCondition](../FlagDominationStatusCondition/)
