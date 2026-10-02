---
title: "GameEntityComponent"
description: "GameEntityComponent: a public class in TaleWorlds.Engine, inheriting NativeObject; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/GameEntityComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameEntityComponent

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public abstract class GameEntityComponent : NativeObject`
**File:** `TaleWorlds.Engine/GameEntityComponent.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

GameEntityComponent lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/GameEntityComponent.cs. It is a public class (abstract), implementing/inheriting NativeObject; the inheritance chain is GameEntityComponent → NativeObject. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameEntityComponent lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain GameEntityComponent → NativeObject. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/GameEntityComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetEntity` | `public WeakGameEntity GetEntity()` | method |
| `GetFirstMetaMesh` | `public virtual MetaMesh GetFirstMetaMesh()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface NativeObject](../../core-extra/NativeObject/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
