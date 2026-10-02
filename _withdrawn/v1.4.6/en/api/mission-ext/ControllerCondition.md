---
title: "ControllerCondition"
description: "ControllerCondition: a public class in TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions, inheriting MPPerkCondition; 6 exposed members (3 methods, 1 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Conditions/ControllerCondition.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ControllerCondition

**Namespace:** `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public class ControllerCondition : MPPerkCondition`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Conditions/ControllerCondition.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ControllerCondition lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Conditions/ControllerCondition.cs. It is a public class, implementing/inheriting MPPerkCondition; the inheritance chain is ControllerCondition → MPPerkCondition. It exposes 6 public/protected members: 3 methods, 1 properties, 1 fields, 1 constructors. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ControllerCondition lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`, inheritance chain ControllerCondition → MPPerkCondition. The surface is method-led (methods 3/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Conditions/ControllerCondition.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EventFlags` | `public override MPPerkCondition.PerkEventFlags EventFlags` | property |
| `ControllerCondition` | `protected ControllerCondition()` | constructor |
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
- [same namespace BannerBearerCondition](../BannerBearerCondition/)
- [same namespace ClosestFlagCondition](../ClosestFlagCondition/)
- [same namespace FlagDominationStatusCondition](../FlagDominationStatusCondition/)
