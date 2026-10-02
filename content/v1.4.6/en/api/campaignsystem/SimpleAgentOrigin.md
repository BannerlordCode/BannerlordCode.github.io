---
title: "SimpleAgentOrigin"
description: "SimpleAgentOrigin: a public class in TaleWorlds.CampaignSystem, inheriting IAgentOriginBase; 17 exposed members (5 methods, 11 properties, 0 fields). Source: TaleWorlds.CampaignSystem/AgentOrigins/SimpleAgentOrigin.cs."
---
# SimpleAgentOrigin

**Namespace:** `TaleWorlds.CampaignSystem.AgentOrigins`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class SimpleAgentOrigin : IAgentOriginBase`
**File:** `TaleWorlds.CampaignSystem/AgentOrigins/SimpleAgentOrigin.cs`

## Overview

SimpleAgentOrigin lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/AgentOrigins/SimpleAgentOrigin.cs. It is a public class, implementing/inheriting IAgentOriginBase; the inheritance chain is SimpleAgentOrigin → IAgentOriginBase. It exposes 17 public/protected members: 5 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SimpleAgentOrigin is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.AgentOrigins) the module directory; inheritance chain SimpleAgentOrigin → IAgentOriginBase. The surface is property-led (properties 11/17, methods 5/17), so it mostly exposes state for reading. IAgentOriginBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/AgentOrigins/SimpleAgentOrigin.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PartyAgentOrigin](../PartyAgentOrigin)
- [same namespace PartyGroupAgentOrigin](../PartyGroupAgentOrigin)
