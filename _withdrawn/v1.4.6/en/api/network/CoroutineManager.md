---
title: "CoroutineManager"
description: "CoroutineManager: a public class in TaleWorlds.Network; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket network. Source: TaleWorlds.Network/CoroutineManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CoroutineManager

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public class CoroutineManager`
**File:** `TaleWorlds.Network/CoroutineManager.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

CoroutineManager lives in the TaleWorlds.Network module, source file TaleWorlds.Network/CoroutineManager.cs. It is a public class; the inheritance chain is CoroutineManager. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CoroutineManager lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain CoroutineManager. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/CoroutineManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CurrentTick` | `public int CurrentTick` | property |
| `CoroutineCount` | `public int CoroutineCount` | property |
| `CoroutineManager` | `public CoroutineManager()` | constructor |
| `AddCoroutine` | `public void AddCoroutine(CoroutineDelegate coroutineMethod)` | method |
| `Tick` | `public void Tick()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
