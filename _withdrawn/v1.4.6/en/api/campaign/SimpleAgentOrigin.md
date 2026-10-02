---
title: "SimpleAgentOrigin"
description: "SimpleAgentOrigin: a public class in TaleWorlds.CampaignSystem.AgentOrigins, inheriting IAgentOriginBase; 17 exposed members (5 methods, 11 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/AgentOrigins/SimpleAgentOrigin.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SimpleAgentOrigin

**Namespace:** `TaleWorlds.CampaignSystem.AgentOrigins`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class SimpleAgentOrigin : IAgentOriginBase`
**File:** `TaleWorlds.CampaignSystem/AgentOrigins/SimpleAgentOrigin.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

SimpleAgentOrigin lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/AgentOrigins/SimpleAgentOrigin.cs. It is a public class, implementing/inheriting IAgentOriginBase; the inheritance chain is SimpleAgentOrigin → IAgentOriginBase. It exposes 17 public/protected members: 5 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SimpleAgentOrigin lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.AgentOrigins`, inheritance chain SimpleAgentOrigin → IAgentOriginBase. The surface is property-led (properties 11/17, methods 5/17), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/AgentOrigins/SimpleAgentOrigin.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Troop` | `public BasicCharacterObject Troop` | property |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand` | property |
| `IsInSameArmyAsPlayer` | `public bool IsInSameArmyAsPlayer` | property |
| `FactionColor` | `public uint FactionColor` | property |
| `FactionColor2` | `public uint FactionColor2` | property |
| `Seed` | `public int Seed` | property |
| `Party` | `public PartyBase Party` | property |
| `BattleCombatant` | `public IBattleCombatant BattleCombatant` | property |
| `Banner` | `public Banner Banner` | property |
| `Rank` | `public int Rank` | property |
| `UniqueSeed` | `public int UniqueSeed` | property |
| `SimpleAgentOrigin` | `public SimpleAgentOrigin(BasicCharacterObject troop, int rank = -1, Banner banner = null, UniqueTroopDescriptor descriptor = default(UniqueTroopDescriptor))` | constructor |
| `SetWounded` | `public void SetWounded()` | method |
| `SetKilled` | `public void SetKilled()` | method |
| `SetRouted` | `public void SetRouted(bool isOrderRetreat)` | method |
| `OnAgentRemoved` | `public void OnAgentRemoved(float agentHealth)` | method |
| `SetBanner` | `public void SetBanner(Banner banner)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IAgentOriginBase](../../core-extra/IAgentOriginBase/)
- [same namespace PartyAgentOrigin](../PartyAgentOrigin/)
- [same namespace PartyGroupAgentOrigin](../PartyGroupAgentOrigin/)
