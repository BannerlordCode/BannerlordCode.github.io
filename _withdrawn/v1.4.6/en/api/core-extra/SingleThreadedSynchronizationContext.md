---
title: "SingleThreadedSynchronizationContext"
description: "SingleThreadedSynchronizationContext: a public class in TaleWorlds.Library, inheriting SynchronizationContext; 4 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/SingleThreadedSynchronizationContext.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SingleThreadedSynchronizationContext

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public sealed class SingleThreadedSynchronizationContext : SynchronizationContext`
**File:** `TaleWorlds.Library/SingleThreadedSynchronizationContext.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

SingleThreadedSynchronizationContext lives in the TaleWorlds.Library module, source file TaleWorlds.Library/SingleThreadedSynchronizationContext.cs. It is a public class (sealed), implementing/inheriting SynchronizationContext; the inheritance chain is SingleThreadedSynchronizationContext → SynchronizationContext. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SingleThreadedSynchronizationContext lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain SingleThreadedSynchronizationContext → SynchronizationContext. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. SynchronizationContext on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/SingleThreadedSynchronizationContext.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SingleThreadedSynchronizationContext` | `public SingleThreadedSynchronizationContext()` | constructor |
| `Send` | `public override void Send(SendOrPostCallback callback, object state)` | method |
| `Post` | `public override void Post(SendOrPostCallback callback, object state)` | method |
| `Tick` | `public void Tick()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
