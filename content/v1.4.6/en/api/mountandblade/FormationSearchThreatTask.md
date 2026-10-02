---
title: "FormationSearchThreatTask"
description: "FormationSearchThreatTask: a public class in TaleWorlds.MountAndBlade, inheriting DividableTask; 4 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/DividableTasks/FormationSearchThreatTask.cs."
---
# FormationSearchThreatTask

**Namespace:** `TaleWorlds.MountAndBlade.DividableTasks`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FormationSearchThreatTask : DividableTask`
**File:** `TaleWorlds.MountAndBlade/DividableTasks/FormationSearchThreatTask.cs`

## Overview

FormationSearchThreatTask lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DividableTasks/FormationSearchThreatTask.cs. It is a public class, implementing/inheriting DividableTask; the inheritance chain is FormationSearchThreatTask → DividableTask. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FormationSearchThreatTask is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.DividableTasks) the module directory; inheritance chain FormationSearchThreatTask → DividableTask. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DividableTasks/FormationSearchThreatTask.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UpdateExtra` | `protected override bool UpdateExtra()` | method |
| `Prepare` | `public void Prepare(Formation formation, RangedSiegeWeapon weapon)` | method |
| `GetResult` | `public bool GetResult(out Agent targetAgent)` | method |
| `FormationSearchThreatTask` | `public FormationSearchThreatTask() : base(null)` | constructor |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface DividableTask](../DividableTask)
- [same namespace FindMostDangerousThreat](../FindMostDangerousThreat)
