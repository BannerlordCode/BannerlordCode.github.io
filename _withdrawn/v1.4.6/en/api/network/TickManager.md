---
title: "TickManager"
description: "TickManager: a public class in TaleWorlds.Network; 4 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket network. Source: TaleWorlds.Network/TickManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TickManager

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public class TickManager`
**File:** `TaleWorlds.Network/TickManager.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

TickManager lives in the TaleWorlds.Network module, source file TaleWorlds.Network/TickManager.cs. It is a public class; the inheritance chain is TickManager. It exposes 4 public/protected members: 2 methods, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TickManager lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain TickManager. The surface is method-led (methods 2/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/TickManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TickManager` | `public TickManager(int tickRate, TickManager.TickDelegate tickMethod)` | constructor |
| `Tick` | `public void Tick()` | method |
| `TickDelegate` | `public delegate void TickDelegate();` | method |
| `TickDelegate` | `public delegate void TickDelegate()` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
