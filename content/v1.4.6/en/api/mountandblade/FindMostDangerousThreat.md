---
title: "FindMostDangerousThreat"
description: "FindMostDangerousThreat: a public class in TaleWorlds.MountAndBlade, inheriting DividableTask; 4 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/DividableTasks/FindMostDangerousThreat.cs."
---
# FindMostDangerousThreat

**Namespace:** `TaleWorlds.MountAndBlade.DividableTasks`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FindMostDangerousThreat : DividableTask`
**File:** `TaleWorlds.MountAndBlade/DividableTasks/FindMostDangerousThreat.cs`

## Overview

FindMostDangerousThreat lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DividableTasks/FindMostDangerousThreat.cs. It is a public class, implementing/inheriting DividableTask; the inheritance chain is FindMostDangerousThreat → DividableTask. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FindMostDangerousThreat is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.DividableTasks) the module directory; inheritance chain FindMostDangerousThreat → DividableTask. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DividableTasks/FindMostDangerousThreat.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FindMostDangerousThreat` | `public FindMostDangerousThreat(DividableTask continueToTask = null) : base(continueToTask)` | constructor |
| `UpdateExtra` | `protected override bool UpdateExtra()` | method |
| `Prepare` | `public void Prepare(List<Threat>threats, RangedSiegeWeapon weapon)` | method |
| `GetResult` | `public Threat GetResult(out Agent targetAgent)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface DividableTask](../DividableTask)
- [same namespace FormationSearchThreatTask](../FormationSearchThreatTask)
