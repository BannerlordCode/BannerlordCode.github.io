---
title: "DividableTask"
description: "DividableTask: a public class in TaleWorlds.MountAndBlade; 6 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/DividableTask.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DividableTask

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DividableTask`
**File:** `TaleWorlds.MountAndBlade/DividableTask.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DividableTask lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DividableTask.cs. It is a public class; the inheritance chain is DividableTask. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DividableTask lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain DividableTask. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DividableTask.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DividableTask` | `public DividableTask(DividableTask continueToTask = null)` | constructor |
| `ResetTaskStatus` | `public void ResetTaskStatus()` | method |
| `SetTaskFinished` | `public void SetTaskFinished(bool callLastAction = false)` | method |
| `Update` | `public bool Update()` | method |
| `SetLastAction` | `public void SetLastAction(Action action)` | method |
| `UpdateExtra` | `protected virtual bool UpdateExtra()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
