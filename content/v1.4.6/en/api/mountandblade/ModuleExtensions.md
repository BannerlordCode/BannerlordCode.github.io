---
title: "ModuleExtensions"
description: "ModuleExtensions: a public class in TaleWorlds.MountAndBlade; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ModuleExtensions.cs."
---
# ModuleExtensions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class ModuleExtensions`
**File:** `TaleWorlds.MountAndBlade/ModuleExtensions.cs`

## Overview

ModuleExtensions lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ModuleExtensions.cs. It is a public class; the inheritance chain is ModuleExtensions. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ModuleExtensions is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ModuleExtensions. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ModuleExtensions.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public static IEnumerable<UsableMachine>GetUsedMachines(this Formation formation)` | method |
| `StartUsingMachine` | `public static void StartUsingMachine(this Formation formation, UsableMachine usable, bool isPlayerOrder = false)` | method |
| `StopUsingMachine` | `public static void StopUsingMachine(this Formation formation, UsableMachine usable, bool isPlayerOrder = false)` | method |
| `ToWorldPosition` | `public static WorldPosition ToWorldPosition(this Vec3 rawPosition)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
