---
title: "ThreadedClient"
description: "ThreadedClient: a public class in TaleWorlds.Diamond, inheriting IClient; 6 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/ThreadedClient.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ThreadedClient

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class ThreadedClient : IClient`
**File:** `TaleWorlds.Diamond/ThreadedClient.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

ThreadedClient lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/ThreadedClient.cs. It is a public class, implementing/inheriting IClient; the inheritance chain is ThreadedClient → IClient. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ThreadedClient lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain ThreadedClient → IClient. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/ThreadedClient.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AccessProvider` | `public ILoginAccessProvider AccessProvider` | property |
| `IsInCriticalState` | `public bool IsInCriticalState` | property |
| `AliveCheckTimeInMiliSeconds` | `public long AliveCheckTimeInMiliSeconds` | property |
| `ThreadedClient` | `public ThreadedClient(IClient client)` | constructor |
| `Tick` | `public void Tick()` | method |
| `Task` | `public Task<bool>CheckConnection()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IClient](../IClient/)
- [same namespace AccessObject](../AccessObject/)
- [same namespace AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [same namespace AccessObjectResult](../AccessObjectResult/)
- [same namespace AesHelper](../AesHelper/)
