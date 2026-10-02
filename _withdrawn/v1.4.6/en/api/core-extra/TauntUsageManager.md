---
title: "TauntUsageManager"
description: "TauntUsageManager: a public class in TaleWorlds.Core; 15 exposed members (9 methods, 3 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/TauntUsageManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TauntUsageManager

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class TauntUsageManager`
**File:** `TaleWorlds.Core/TauntUsageManager.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

TauntUsageManager lives in the TaleWorlds.Core module, source file TaleWorlds.Core/TauntUsageManager.cs. It is a public class; the inheritance chain is TauntUsageManager. It exposes 15 public/protected members: 9 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TauntUsageManager lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain TauntUsageManager. The surface is method-led (methods 9/15, properties 3/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/TauntUsageManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Instance` | `public static TauntUsageManager Instance` | property |
| `Initialize` | `public static TauntUsageManager Initialize()` | method |
| `Read` | `public void Read()` | method |
| `GetUsageSet` | `public TauntUsageManager.TauntUsageSet GetUsageSet(string id)` | method |
| `GetAction` | `public string GetAction(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)` | method |
| `GetActionDisabledReasonText` | `public static string GetActionDisabledReasonText(TauntUsageManager.TauntUsage.TauntUsageFlag disabledReasonFlag)` | method |
| `GetIsActionNotSuitableReason` | `public TauntUsageManager.TauntUsage.TauntUsageFlag GetIsActionNotSuitableReason(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)` | method |
| `GetTauntItemCount` | `public int GetTauntItemCount()` | method |
| `GetIndexOfAction` | `public int GetIndexOfAction(string id)` | method |
| `GetDefaultAction` | `public string GetDefaultAction(int index)` | method |
| `TauntUsageSet` | `public class TauntUsageSet` | property |
| `TauntUsage` | `public class TauntUsage` | property |
| `TauntUsageSet` | `public class TauntUsageSet` | nested type |
| `TauntUsage` | `public class TauntUsage` | nested type |
| `TauntUsageFlag` | `public enum TauntUsageFlag` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
