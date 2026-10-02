---
title: "OwnedFlagCountCondition"
description: "OwnedFlagCountCondition: a public class in TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions, inheriting MPPerkCondition<MissionMultiplayerFlagDomination>; 7 exposed members (3 methods, 2 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Conditions/OwnedFlagCountCondition.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OwnedFlagCountCondition

**Namespace:** `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public class OwnedFlagCountCondition : MPPerkCondition<MissionMultiplayerFlagDomination>`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Conditions/OwnedFlagCountCondition.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

OwnedFlagCountCondition lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Conditions/OwnedFlagCountCondition.cs. It is a public class, implementing/inheriting MPPerkCondition<MissionMultiplayerFlagDomination>; the inheritance chain is OwnedFlagCountCondition → MPPerkCondition. It exposes 7 public/protected members: 3 methods, 2 properties, 1 fields, 1 constructors. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OwnedFlagCountCondition lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`, inheritance chain OwnedFlagCountCondition → MPPerkCondition. The surface is method-led (methods 3/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Conditions/OwnedFlagCountCondition.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EventFlags` | `public override MPPerkCondition.PerkEventFlags EventFlags` | property |
| `IsPeerCondition` | `public override bool IsPeerCondition` | property |
| `OwnedFlagCountCondition` | `protected OwnedFlagCountCondition()` | constructor |
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
- [same namespace ControllerCondition](../ControllerCondition/)
