---
title: "ManagedScriptHolder"
description: "ManagedScriptHolder: a public class in TaleWorlds.Engine, inheriting DotNetObject; 5 exposed members (3 methods, 0 properties, 1 fields). Canonical bucket engine. Source: TaleWorlds.Engine/ManagedScriptHolder.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ManagedScriptHolder

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class ManagedScriptHolder : DotNetObject`
**File:** `TaleWorlds.Engine/ManagedScriptHolder.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

ManagedScriptHolder lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/ManagedScriptHolder.cs. It is a public class (sealed), implementing/inheriting DotNetObject; the inheritance chain is ManagedScriptHolder → DotNetObject. It exposes 5 public/protected members: 3 methods, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ManagedScriptHolder lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain ManagedScriptHolder → DotNetObject. The surface is method-led (methods 3/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/ManagedScriptHolder.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ManagedScriptHolder` | `public ManagedScriptHolder()` | constructor |
| `SetScriptComponentHolder` | `public void SetScriptComponentHolder(ScriptComponentBehavior sc)` | method |
| `UpdateTickRequirement` | `public void UpdateTickRequirement(ScriptComponentBehavior sc, ScriptComponentBehavior.TickRequirement oldTickRequirement, ScriptComponentBehavior.TickRequirement newTickRequirement)` | method |
| `RemoveScriptComponentFromAllTickLists` | `public void RemoveScriptComponentFromAllTickLists(ScriptComponentBehavior sc)` | method |
| `AddRemoveLockObject` | `public object AddRemoveLockObject` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface DotNetObject](../../core-extra/DotNetObject/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
