---
title: "GenericThreadedRestSessionProvider<T>"
description: "GenericThreadedRestSessionProvider<T>: a public class in TaleWorlds.Diamond.ClientApplication, inheriting IClientSessionProvider<T>; 3 exposed members (1 methods, 0 properties, 1 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/ClientApplication/GenericThreadedRestSessionProvider.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GenericThreadedRestSessionProvider<T>

**Namespace:** `TaleWorlds.Diamond.ClientApplication`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class GenericThreadedRestSessionProvider<T>: IClientSessionProvider<T>where T : Client<T>`
**File:** `TaleWorlds.Diamond/ClientApplication/GenericThreadedRestSessionProvider.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

GenericThreadedRestSessionProvider<T> lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/ClientApplication/GenericThreadedRestSessionProvider.cs. It is a public class, implementing/inheriting IClientSessionProvider<T>; the inheritance chain is GenericThreadedRestSessionProvider → IClientSessionProvider → Client → DiamondClientApplicationObject. It exposes 3 public/protected members: 1 methods, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GenericThreadedRestSessionProvider<T> lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond.ClientApplication`, inheritance chain GenericThreadedRestSessionProvider → IClientSessionProvider → Client → DiamondClientApplicationObject. The surface is method-led (methods 1/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/ClientApplication/GenericThreadedRestSessionProvider.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GenericThreadedRestSessionProvider` | `public GenericThreadedRestSessionProvider(string address, IHttpDriver httpDriver)` | constructor |
| `CreateSession` | `public IClientSession CreateSession(T client)` | method |
| `DefaultThreadSleepTime` | `public const int DefaultThreadSleepTime` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IClientSessionProvider](../IClientSessionProvider__1/)
- [same namespace ClientApplicationConfiguration](../ClientApplicationConfiguration/)
- [same namespace DiamondClientApplication](../DiamondClientApplication/)
- [same namespace DiamondClientApplicationObject](../DiamondClientApplicationObject/)
- [same namespace GenericRestSessionProvider](../GenericRestSessionProvider__1/)
