---
title: "ManagedScriptHolder"
description: "ManagedScriptHolder: a public class in TaleWorlds.Engine, inheriting DotNetObject; 5 exposed members (3 methods, 0 properties, 1 fields). Source: TaleWorlds.Engine/ManagedScriptHolder.cs."
---
# ManagedScriptHolder

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class ManagedScriptHolder : DotNetObject`
**File:** `TaleWorlds.Engine/ManagedScriptHolder.cs`

## Overview

ManagedScriptHolder lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/ManagedScriptHolder.cs. It is a public class (sealed), implementing/inheriting DotNetObject; the inheritance chain is ManagedScriptHolder → DotNetObject. It exposes 5 public/protected members: 3 methods, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ManagedScriptHolder is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain ManagedScriptHolder → DotNetObject. The surface is method-led (methods 3/5, properties 0/5), so it mostly exposes operations. DotNetObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/ManagedScriptHolder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ManagedScriptHolder` | `public ManagedScriptHolder()` | constructor |
| `SetScriptComponentHolder` | `public void SetScriptComponentHolder(ScriptComponentBehavior sc)` | method |
| `UpdateTickRequirement` | `public void UpdateTickRequirement(ScriptComponentBehavior sc, ScriptComponentBehavior.TickRequirement oldTickRequirement, ScriptComponentBehavior.TickRequirement newTickRequirement)` | method |
| `RemoveScriptComponentFromAllTickLists` | `public void RemoveScriptComponentFromAllTickLists(ScriptComponentBehavior sc)` | method |
| `AddRemoveLockObject` | `public object AddRemoveLockObject` | field |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
