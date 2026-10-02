---
title: "IClientSessionProvider<T>"
description: "IClientSessionProvider<T>: a public interface in TaleWorlds.Diamond, inheriting Client<T>; 1 exposed members (1 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/IClientSessionProvider.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IClientSessionProvider<T>

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public interface IClientSessionProvider<T>where T : Client<T>`
**File:** `TaleWorlds.Diamond/IClientSessionProvider.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

IClientSessionProvider<T> lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/IClientSessionProvider.cs. It is a public interface, implementing/inheriting Client<T>; the inheritance chain is IClientSessionProvider → Client → DiamondClientApplicationObject. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IClientSessionProvider<T> lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain IClientSessionProvider → Client → DiamondClientApplicationObject. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/IClientSessionProvider.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateSession` | `IClientSession CreateSession(T session);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Client](../Client__1/)
- [same namespace AccessObject](../AccessObject/)
- [same namespace AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [same namespace AccessObjectResult](../AccessObjectResult/)
- [same namespace AesHelper](../AesHelper/)
