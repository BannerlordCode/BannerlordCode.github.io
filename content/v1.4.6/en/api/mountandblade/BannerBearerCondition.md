---
title: "BannerBearerCondition"
description: "BannerBearerCondition: a public class in TaleWorlds.MountAndBlade, inheriting MPPerkCondition; 7 exposed members (3 methods, 2 properties, 1 fields). Source: TaleWorlds.MountAndBlade/Network/Gameplay/Perks/Conditions/BannerBearerCondition.cs."
---
# BannerBearerCondition

**Namespace:** `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BannerBearerCondition : MPPerkCondition`
**File:** `TaleWorlds.MountAndBlade/Network/Gameplay/Perks/Conditions/BannerBearerCondition.cs`

## Overview

BannerBearerCondition lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Network/Gameplay/Perks/Conditions/BannerBearerCondition.cs. It is a public class, implementing/inheriting MPPerkCondition; the inheritance chain is BannerBearerCondition → MPPerkCondition. It exposes 7 public/protected members: 3 methods, 2 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerBearerCondition is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions) the module directory; inheritance chain BannerBearerCondition → MPPerkCondition. The surface is method-led (methods 3/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Network/Gameplay/Perks/Conditions/BannerBearerCondition.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EventFlags` | `public override MPPerkCondition.PerkEventFlags EventFlags` | property |
| `IsPeerCondition` | `public override bool IsPeerCondition` | property |
| `BannerBearerCondition` | `protected BannerBearerCondition()` | constructor |
| `Deserialize` | `protected override void Deserialize(XmlNode node)` | method |
| `Check` | `public override bool Check(MissionPeer peer)` | method |
| `Check` | `public override bool Check(Agent agent)` | method |
| `StringType` | `protected static string StringType` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MPPerkCondition](../MPPerkCondition)
