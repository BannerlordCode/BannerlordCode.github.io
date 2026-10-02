---
title: "DetachmentManager"
description: "DetachmentManager: a public class in TaleWorlds.MountAndBlade; 18 exposed members (16 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/DetachmentManager.cs."
---
# DetachmentManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DetachmentManager`
**File:** `TaleWorlds.MountAndBlade/DetachmentManager.cs`

## Overview

DetachmentManager lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DetachmentManager.cs. It is a public class; the inheritance chain is DetachmentManager. It exposes 18 public/protected members: 16 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DetachmentManager is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain DetachmentManager. The surface is method-led (methods 16/18, properties 1/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DetachmentManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DetachmentData>>Detachments` | `public MBReadOnlyList<ValueTuple<IDetachment, DetachmentData>>Detachments` | property |
| `DetachmentManager` | `public DetachmentManager(Team team)` | constructor |
| `Clear` | `public void Clear()` | method |
| `ContainsDetachment` | `public bool ContainsDetachment(IDetachment detachment)` | method |
| `MakeDetachment` | `public void MakeDetachment(IDetachment detachment)` | method |
| `DestroyDetachment` | `public void DestroyDetachment(IDetachment destroyedDetachment)` | method |
| `OnFormationJoinDetachment` | `public void OnFormationJoinDetachment(Formation formation, IDetachment joinedDetachment)` | method |
| `OnFormationLeaveDetachment` | `public void OnFormationLeaveDetachment(Formation formation, IDetachment leftDetachment)` | method |
| `TickDetachments` | `public void TickDetachments()` | method |
| `TickAgent` | `public void TickAgent(Agent agent)` | method |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | method |
| `RemoveScoresOfAgentFromDetachments` | `public void RemoveScoresOfAgentFromDetachments(Agent agent)` | method |
| `RemoveScoresOfAgentFromDetachment` | `public void RemoveScoresOfAgentFromDetachment(Agent agent, IDetachment detachmentToBeRemovedFrom)` | method |
| `AddAgentAsMovingToDetachment` | `public void AddAgentAsMovingToDetachment(Agent agent, IDetachment detachment)` | method |
| `RemoveAgentAsMovingToDetachment` | `public void RemoveAgentAsMovingToDetachment(Agent agent)` | method |
| `AddAgentAsDefendingToDetachment` | `public void AddAgentAsDefendingToDetachment(Agent agent, IDetachment detachment)` | method |
| `RemoveAgentAsDefendingToDetachment` | `public void RemoveAgentAsDefendingToDetachment(Agent agent)` | method |
| `AssertDetachment` | `public void AssertDetachment(Team team, IDetachment detachment)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
