---
title: "MBFastRandomSelector<T>"
description: "MBFastRandomSelector<T>: a public class in TaleWorlds.Core; 11 exposed members (4 methods, 2 properties, 2 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/MBFastRandomSelector.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBFastRandomSelector<T>

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MBFastRandomSelector<T>`
**File:** `TaleWorlds.Core/MBFastRandomSelector.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

MBFastRandomSelector<T> lives in the TaleWorlds.Core module, source file TaleWorlds.Core/MBFastRandomSelector.cs. It is a public class; the inheritance chain is MBFastRandomSelector. It exposes 11 public/protected members: 4 methods, 2 properties, 2 fields, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBFastRandomSelector<T> lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain MBFastRandomSelector. The surface is method-led (methods 4/11, properties 2/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/MBFastRandomSelector.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RemainingCount` | `public ushort RemainingCount` | property |
| `MBFastRandomSelector` | `public MBFastRandomSelector(ushort capacity = 32)` | constructor |
| `MBFastRandomSelector` | `public MBFastRandomSelector(MBReadOnlyList<T>list, ushort capacity = 32)` | constructor |
| `Initialize` | `public void Initialize(MBReadOnlyList<T>list)` | method |
| `Reset` | `public void Reset()` | method |
| `Pack` | `public void Pack()` | method |
| `SelectRandom` | `public bool SelectRandom(out T selection, Predicate<T>conditions = null)` | method |
| `MinimumCapacity` | `public const ushort MinimumCapacity` | field |
| `MaximumCapacity` | `public const ushort MaximumCapacity` | field |
| `IndexEntry` | `public struct IndexEntry` | property |
| `IndexEntry` | `public struct IndexEntry` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
