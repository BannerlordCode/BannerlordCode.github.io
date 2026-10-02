---
title: "MissionRepresentativeBase"
description: "MissionRepresentativeBase: a public class in TaleWorlds.MountAndBlade, inheriting PeerComponent; 11 exposed members (4 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs."
---
# MissionRepresentativeBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionRepresentativeBase : PeerComponent`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs`

## Overview

MissionRepresentativeBase lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs. It is a public class (abstract), implementing/inheriting PeerComponent; the inheritance chain is MissionRepresentativeBase → PeerComponent. It exposes 11 public/protected members: 4 methods, 5 properties, 1 events, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionRepresentativeBase is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionRepresentativeBase → PeerComponent. The surface is property-led (properties 5/11, methods 4/11), so it mostly exposes state for reading. PeerComponent on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
