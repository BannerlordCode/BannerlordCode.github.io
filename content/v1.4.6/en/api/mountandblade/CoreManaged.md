---
title: "CoreManaged"
description: "CoreManaged: a public class in TaleWorlds.MountAndBlade, inheriting IManagedComponent; 3 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/CoreManaged.cs."
---
# CoreManaged

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CoreManaged : IManagedComponent`
**File:** `TaleWorlds.MountAndBlade/CoreManaged.cs`

## Overview

CoreManaged lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CoreManaged.cs. It is a public class, implementing/inheriting IManagedComponent; the inheritance chain is CoreManaged → IManagedComponent. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CoreManaged is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain CoreManaged → IManagedComponent. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. IManagedComponent on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CoreManaged.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ManagedCallbacksDll` | `public string ManagedCallbacksDll` | property |
| `CoreManaged` | `public CoreManaged()` | constructor |
| `Start` | `public static void Start()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
