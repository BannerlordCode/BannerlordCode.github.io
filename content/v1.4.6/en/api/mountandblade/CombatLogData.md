---
title: "CombatLogData"
description: "CombatLogData: a public struct in TaleWorlds.MountAndBlade; 6 exposed members (2 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade/CombatLogData.cs."
---
# CombatLogData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct CombatLogData`
**File:** `TaleWorlds.MountAndBlade/CombatLogData.cs`

## Overview

CombatLogData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CombatLogData.cs. It is a public struct; the inheritance chain is CombatLogData. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CombatLogData is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain CombatLogData. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CombatLogData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TotalDamage` | `public int TotalDamage` | property |
| `TotalFireDamage` | `public int TotalFireDamage` | property |
| `AttackProgress` | `public float AttackProgress` | property |
| `uint>>GetLogString` | `public List<ValueTuple<string, uint>>GetLogString()` | method |
| `CombatLogData` | `public CombatLogData(bool isVictimAgentSameAsAttackerAgent, bool isAttackerAgentHuman, bool isAttackerAgentMine, bool doesAttackerAgentHaveRiderAgent, bool isAttackerAgentRiderAgentMine, bool isAttackerAgentMount, bool isVictimAgentHuman, bool isVictimAgentMine, bool isVictimAgentDead, bool doesVictimAgentHaveRiderAgent, bool isVictimAgentRiderAgentIsMine, bool isVictimAgentMount, MissionObject missionObjectHit, bool isVictimRiderAgentSameAsAttackerAgent, bool crushedThrough, bool chamber, float distance)` | constructor |
| `SetVictimAgent` | `public void SetVictimAgent(Agent victimAgent)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
