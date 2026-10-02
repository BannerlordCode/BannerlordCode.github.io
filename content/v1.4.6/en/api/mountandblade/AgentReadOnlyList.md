---
title: "AgentReadOnlyList"
description: "AgentReadOnlyList: a public class in TaleWorlds.MountAndBlade, inheriting MBReadOnlyList<Agent>; 3 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Missions/AgentReadOnlyList.cs."
---
# AgentReadOnlyList

**Namespace:** `TaleWorlds.MountAndBlade.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentReadOnlyList : MBReadOnlyList<Agent>`
**File:** `TaleWorlds.MountAndBlade/Missions/AgentReadOnlyList.cs`

## Overview

AgentReadOnlyList lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Missions/AgentReadOnlyList.cs. It is a public class, implementing/inheriting MBReadOnlyList<Agent>; the inheritance chain is AgentReadOnlyList → MBReadOnlyList. It exposes 3 public/protected members: 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentReadOnlyList is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Missions) the module directory; inheritance chain AgentReadOnlyList → MBReadOnlyList. The surface is method-led (methods 0/3, properties 0/3), so it mostly exposes operations. MBReadOnlyList on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Missions/AgentReadOnlyList.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AgentReadOnlyList` | `public AgentReadOnlyList(int capacity) : base(capacity)` | constructor |
| `AgentReadOnlyList` | `public AgentReadOnlyList(IEnumerable<Agent>collection) : base(collection)` | constructor |
| `AgentReadOnlyList` | `public AgentReadOnlyList(List<Agent>collection) : base(collection)` | constructor |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentList](../AgentList)
- [same namespace IMissionSiegeWeaponsController](../IMissionSiegeWeaponsController)
- [same namespace MissionSiegeWeaponsController](../MissionSiegeWeaponsController)
