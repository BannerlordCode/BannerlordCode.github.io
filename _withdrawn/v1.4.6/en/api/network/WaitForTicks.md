---
title: "WaitForTicks"
description: "WaitForTicks: a public class in TaleWorlds.Network, inheriting CoroutineState; 3 exposed members (1 methods, 1 properties, 0 fields). Canonical bucket network. Source: TaleWorlds.Network/WaitForTicks.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WaitForTicks

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public class WaitForTicks : CoroutineState`
**File:** `TaleWorlds.Network/WaitForTicks.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

WaitForTicks lives in the TaleWorlds.Network module, source file TaleWorlds.Network/WaitForTicks.cs. It is a public class, implementing/inheriting CoroutineState; the inheritance chain is WaitForTicks → CoroutineState. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WaitForTicks lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain WaitForTicks → CoroutineState. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/WaitForTicks.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `WaitForTicks` | `public WaitForTicks(int tickCount)` | constructor |
| `Initialize` | `protected internal override void Initialize(CoroutineManager coroutineManager)` | method |
| `IsFinished` | `protected internal override bool IsFinished` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface CoroutineState](../CoroutineState/)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
