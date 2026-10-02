---
title: "MBGlobals"
description: "MBGlobals: a public class in TaleWorlds.MountAndBlade; 7 exposed members (5 methods, 0 properties, 2 fields). Source: TaleWorlds.MountAndBlade/MBGlobals.cs."
---
# MBGlobals

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MBGlobals`
**File:** `TaleWorlds.MountAndBlade/MBGlobals.cs`

## Overview

MBGlobals lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBGlobals.cs. It is a public class; the inheritance chain is MBGlobals. It exposes 7 public/protected members: 5 methods, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBGlobals is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MBGlobals. The surface is method-led (methods 5/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBGlobals.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitializeReferences` | `public static void InitializeReferences()` | method |
| `GetActionSetWithSuffix` | `public static MBActionSet GetActionSetWithSuffix(Monster monster, bool isFemale, string suffix)` | method |
| `GetActionSet` | `public static MBActionSet GetActionSet(string actionSetCode)` | method |
| `GetMemberName` | `public static string GetMemberName<T>(Expression<Func<T>>memberExpression)` | method |
| `GetMethodName` | `public static string GetMethodName<T>(Expression<Func<T>>memberExpression)` | method |
| `Gravity` | `public const float Gravity` | field |
| `GravitationalAcceleration` | `public static readonly Vec3 GravitationalAcceleration` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
