---
title: "ManagedOptions"
description: "ManagedOptions: a public class in TaleWorlds.MountAndBlade; 8 exposed members (5 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ManagedOptions.cs."
---
# ManagedOptions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class ManagedOptions`
**File:** `TaleWorlds.MountAndBlade/ManagedOptions.cs`

## Overview

ManagedOptions lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ManagedOptions.cs. It is a public class; the inheritance chain is ManagedOptions. It exposes 8 public/protected members: 5 methods, 1 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ManagedOptions is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ManagedOptions. The surface is method-led (methods 5/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ManagedOptions.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetConfig` | `public static float GetConfig(ManagedOptions.ManagedOptionsType type)` | method |
| `GetDefaultConfig` | `public static float GetDefaultConfig(ManagedOptions.ManagedOptionsType type)` | method |
| `SetConfig` | `public static void SetConfig(ManagedOptions.ManagedOptionsType type, float value)` | method |
| `SaveConfig` | `public static SaveResult SaveConfig()` | method |
| `ManagedOptionsType` | `public enum ManagedOptionsType` | property |
| `OnManagedOptionChangedDelegate` | `public delegate void OnManagedOptionChangedDelegate(ManagedOptions.ManagedOptionsType changedManagedOptionsType);` | method |
| `ManagedOptionsType` | `public enum ManagedOptionsType` | nested type |
| `OnManagedOptionChangedDelegate` | `public delegate void OnManagedOptionChangedDelegate(ManagedOptions.ManagedOptionsType changedManagedOptionsType)` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
