---
title: "Authorize"
description: "Authorize: a public class in TaleWorlds.Network, inheriting Attribute; 2 exposed members (0 methods, 2 properties, 0 fields). Canonical bucket network. Source: TaleWorlds.Network/Authorize.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Authorize

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public class Authorize : Attribute`
**File:** `TaleWorlds.Network/Authorize.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

Authorize lives in the TaleWorlds.Network module, source file TaleWorlds.Network/Authorize.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is Authorize → Attribute. It exposes 2 public/protected members: 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Authorize lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain Authorize → Attribute. The surface is property-led (properties 2/2, methods 0/2), so it mostly exposes state for reading. Attribute on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/Authorize.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Users` | `public string Users` | property |
| `Roles` | `public string Roles` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
- [same namespace Coroutine](../Coroutine/)
