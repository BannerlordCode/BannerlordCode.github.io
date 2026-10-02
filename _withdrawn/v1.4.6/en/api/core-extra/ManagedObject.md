---
title: "ManagedObject"
description: "ManagedObject: a public class in TaleWorlds.DotNet; 4 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.DotNet/ManagedObject.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ManagedObject

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public abstract class ManagedObject`
**File:** `TaleWorlds.DotNet/ManagedObject.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.DotNet)

## Overview

ManagedObject lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/ManagedObject.cs. It is a public class (abstract); the inheritance chain is ManagedObject. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ManagedObject lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.DotNet`), namespace `TaleWorlds.DotNet`, inheritance chain ManagedObject. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/ManagedObject.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AddUnmanagedMemoryPressure` | `protected void AddUnmanagedMemoryPressure(int size)` | method |
| `ManagedObject` | `protected ManagedObject(UIntPtr ptr, bool createManagedObjectOwner)` | constructor |
| `GetManagedId` | `public int GetManagedId()` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CallbackDebugTool](../CallbackDebugTool/)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager/)
- [same namespace Controller](../Controller/)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData/)
