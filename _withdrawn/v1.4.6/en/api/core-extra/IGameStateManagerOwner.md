---
title: "IGameStateManagerOwner"
description: "IGameStateManagerOwner: a public interface in TaleWorlds.Core; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/IGameStateManagerOwner.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IGameStateManagerOwner

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IGameStateManagerOwner`
**File:** `TaleWorlds.Core/IGameStateManagerOwner.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

IGameStateManagerOwner lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IGameStateManagerOwner.cs. It is a public interface; the inheritance chain is IGameStateManagerOwner. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IGameStateManagerOwner lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain IGameStateManagerOwner. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IGameStateManagerOwner.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnStateStackEmpty` | `void OnStateStackEmpty();` | method |
| `OnStateChanged` | `void OnStateChanged(GameState oldState);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
