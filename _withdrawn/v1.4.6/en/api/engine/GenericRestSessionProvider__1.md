---
title: "GenericRestSessionProvider<T>"
description: "GenericRestSessionProvider<T>: a public class in TaleWorlds.Diamond.ClientApplication, inheriting IClientSessionProvider<T>; 2 exposed members (1 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/ClientApplication/GenericRestSessionProvider.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GenericRestSessionProvider<T>

**Namespace:** `TaleWorlds.Diamond.ClientApplication`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class GenericRestSessionProvider<T>: IClientSessionProvider<T>where T : Client<T>`
**File:** `TaleWorlds.Diamond/ClientApplication/GenericRestSessionProvider.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

GenericRestSessionProvider<T> lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/ClientApplication/GenericRestSessionProvider.cs. It is a public class, implementing/inheriting IClientSessionProvider<T>; the inheritance chain is GenericRestSessionProvider → IClientSessionProvider → Client → DiamondClientApplicationObject. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GenericRestSessionProvider<T> lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond.ClientApplication`, inheritance chain GenericRestSessionProvider → IClientSessionProvider → Client → DiamondClientApplicationObject. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/ClientApplication/GenericRestSessionProvider.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GenericRestSessionProvider` | `public GenericRestSessionProvider(string address, IHttpDriver httpDriver)` | constructor |
| `CreateSession` | `public IClientSession CreateSession(T session)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IClientSessionProvider](../IClientSessionProvider__1/)
- [same namespace ClientApplicationConfiguration](../ClientApplicationConfiguration/)
- [same namespace DiamondClientApplication](../DiamondClientApplication/)
- [same namespace DiamondClientApplicationObject](../DiamondClientApplicationObject/)
- [same namespace GenericThreadedRestSessionProvider](../GenericThreadedRestSessionProvider__1/)
