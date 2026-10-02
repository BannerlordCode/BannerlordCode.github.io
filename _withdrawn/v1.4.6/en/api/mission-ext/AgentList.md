---
title: "AgentList"
description: "AgentList: a public class in TaleWorlds.MountAndBlade.Missions, inheriting AgentReadOnlyList; 3 exposed members (0 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Missions/AgentList.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentList

**Namespace:** `TaleWorlds.MountAndBlade.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentList : AgentReadOnlyList`
**File:** `TaleWorlds.MountAndBlade/Missions/AgentList.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AgentList lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Missions/AgentList.cs. It is a public class, implementing/inheriting AgentReadOnlyList; the inheritance chain is AgentList → AgentReadOnlyList → MBReadOnlyList → List. It exposes 3 public/protected members: 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentList lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Missions`, inheritance chain AgentList → AgentReadOnlyList → MBReadOnlyList → List. The surface is method-led (methods 0/3, properties 0/3), so it mostly exposes operations. List on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Missions/AgentList.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AgentList` | `public AgentList(int capacity) : base(capacity)` | constructor |
| `AgentList` | `public AgentList(IEnumerable<Agent>collection) : base(collection)` | constructor |
| `AgentList` | `public AgentList(List<Agent>collection) : base(collection)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentReadOnlyList](../AgentReadOnlyList/)
- [same namespace AgentReadOnlyList](../AgentReadOnlyList/)
- [same namespace IMissionSiegeWeaponsController](../IMissionSiegeWeaponsController/)
- [same namespace MissionSiegeWeaponsController](../MissionSiegeWeaponsController/)
