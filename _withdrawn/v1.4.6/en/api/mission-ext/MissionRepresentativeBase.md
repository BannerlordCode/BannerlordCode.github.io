---
title: "MissionRepresentativeBase"
description: "MissionRepresentativeBase: a public class in TaleWorlds.MountAndBlade, inheriting PeerComponent; 11 exposed members (4 methods, 5 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionRepresentativeBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionRepresentativeBase : PeerComponent`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionRepresentativeBase lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs. It is a public class (abstract), implementing/inheriting PeerComponent; the inheritance chain is MissionRepresentativeBase → PeerComponent → IEntityComponent. It exposes 11 public/protected members: 4 methods, 5 properties, 1 events, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionRepresentativeBase lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MissionRepresentativeBase → PeerComponent → IEntityComponent. The surface is property-led (properties 5/11, methods 4/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlayerType` | `protected MissionRepresentativeBase.PlayerTypes PlayerType` | property |
| `ControlledAgent` | `public Agent ControlledAgent` | property |
| `Gold` | `public int Gold` | property |
| `MissionPeer` | `public MissionPeer MissionPeer` | property |
| `OnGoldUpdated;` | `public event Action OnGoldUpdated;` | event |
| `SetAgent` | `public void SetAgent(Agent agent)` | method |
| `OnAgentSpawned` | `public virtual void OnAgentSpawned()` | method |
| `Tick` | `public virtual void Tick(float dt)` | method |
| `UpdateGold` | `public void UpdateGold(int gold)` | method |
| `PlayerTypes` | `protected enum PlayerTypes` | property |
| `PlayerTypes` | `protected enum PlayerTypes` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PeerComponent](../../core-extra/PeerComponent/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
