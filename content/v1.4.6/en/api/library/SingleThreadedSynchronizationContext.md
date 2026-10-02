---
title: "SingleThreadedSynchronizationContext"
description: "SingleThreadedSynchronizationContext: a public class in TaleWorlds.Library, inheriting SynchronizationContext; 4 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/SingleThreadedSynchronizationContext.cs."
---
# SingleThreadedSynchronizationContext

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public sealed class SingleThreadedSynchronizationContext : SynchronizationContext`
**File:** `TaleWorlds.Library/SingleThreadedSynchronizationContext.cs`

## Overview

SingleThreadedSynchronizationContext lives in the TaleWorlds.Library module, source file TaleWorlds.Library/SingleThreadedSynchronizationContext.cs. It is a public class (sealed), implementing/inheriting SynchronizationContext; the inheritance chain is SingleThreadedSynchronizationContext → SynchronizationContext. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SingleThreadedSynchronizationContext is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain SingleThreadedSynchronizationContext → SynchronizationContext. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. SynchronizationContext on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/SingleThreadedSynchronizationContext.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SingleThreadedSynchronizationContext` | `public SingleThreadedSynchronizationContext()` | constructor |
| `Send` | `public override void Send(SendOrPostCallback callback, object state)` | method |
| `Post` | `public override void Post(SendOrPostCallback callback, object state)` | method |
| `Tick` | `public void Tick()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
