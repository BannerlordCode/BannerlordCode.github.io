---
title: "AgentList"
description: "AgentList: a public class in TaleWorlds.MountAndBlade, inheriting AgentReadOnlyList; 3 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Missions/AgentList.cs."
---
# AgentList

**Namespace:** `TaleWorlds.MountAndBlade.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentList : AgentReadOnlyList`
**File:** `TaleWorlds.MountAndBlade/Missions/AgentList.cs`

## Overview

AgentList lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Missions/AgentList.cs. It is a public class, implementing/inheriting AgentReadOnlyList; the inheritance chain is AgentList → AgentReadOnlyList → MBReadOnlyList. It exposes 3 public/protected members: 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentList is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Missions) the module directory; inheritance chain AgentList → AgentReadOnlyList → MBReadOnlyList. The surface is method-led (methods 0/3, properties 0/3), so it mostly exposes operations. MBReadOnlyList on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Missions/AgentList.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AgentList` | `public AgentList(int capacity) : base(capacity)` | constructor |
| `AgentList` | `public AgentList(IEnumerable<Agent>collection) : base(collection)` | constructor |
| `AgentList` | `public AgentList(List<Agent>collection) : base(collection)` | constructor |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface AgentReadOnlyList](../AgentReadOnlyList)
- [same namespace AgentReadOnlyList](../AgentReadOnlyList)
- [same namespace IMissionSiegeWeaponsController](../IMissionSiegeWeaponsController)
- [same namespace MissionSiegeWeaponsController](../MissionSiegeWeaponsController)
