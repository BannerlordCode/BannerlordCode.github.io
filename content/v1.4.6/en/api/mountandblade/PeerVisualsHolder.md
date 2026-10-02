---
title: "PeerVisualsHolder"
description: "PeerVisualsHolder: a public class in TaleWorlds.MountAndBlade; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade/PeerVisualsHolder.cs."
---
# PeerVisualsHolder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class PeerVisualsHolder`
**File:** `TaleWorlds.MountAndBlade/PeerVisualsHolder.cs`

## Overview

PeerVisualsHolder lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/PeerVisualsHolder.cs. It is a public class; the inheritance chain is PeerVisualsHolder. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PeerVisualsHolder is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain PeerVisualsHolder. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/PeerVisualsHolder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Peer` | `public MissionPeer Peer` | property |
| `VisualsIndex` | `public int VisualsIndex` | property |
| `AgentVisuals` | `public IAgentVisual AgentVisuals` | property |
| `MountAgentVisuals` | `public IAgentVisual MountAgentVisuals` | property |
| `PeerVisualsHolder` | `public PeerVisualsHolder(MissionPeer peer, int index, IAgentVisual agentVisuals, IAgentVisual mountVisuals)` | constructor |
| `SetMountVisuals` | `public void SetMountVisuals(IAgentVisual mountAgentVisuals)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
