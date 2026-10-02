---
title: "PeerComponent"
description: "PeerComponent: a public class in TaleWorlds.Core, inheriting IEntityComponent; 8 exposed members (4 methods, 4 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/PeerComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PeerComponent

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class PeerComponent : IEntityComponent`
**File:** `TaleWorlds.Core/PeerComponent.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

PeerComponent lives in the TaleWorlds.Core module, source file TaleWorlds.Core/PeerComponent.cs. It is a public class (abstract), implementing/inheriting IEntityComponent; the inheritance chain is PeerComponent → IEntityComponent. It exposes 8 public/protected members: 4 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PeerComponent lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain PeerComponent → IEntityComponent. The surface is method-led (methods 4/8, properties 4/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/PeerComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Peer` | `public VirtualPlayer Peer` | property |
| `Initialize` | `public virtual void Initialize()` | method |
| `Name` | `public string Name` | property |
| `IsMine` | `public bool IsMine` | property |
| `GetComponent` | `public T GetComponent<T>() where T : PeerComponent` | method |
| `OnInitialize` | `public virtual void OnInitialize()` | method |
| `OnFinalize` | `public virtual void OnFinalize()` | method |
| `TypeId` | `public uint TypeId` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IEntityComponent](../IEntityComponent/)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
