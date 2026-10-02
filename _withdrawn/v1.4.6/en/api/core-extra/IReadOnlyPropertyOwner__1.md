---
title: "IReadOnlyPropertyOwner<T>"
description: "IReadOnlyPropertyOwner<T>: a public interface in TaleWorlds.Core, inheriting MBObjectBase; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/IReadOnlyPropertyOwner.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IReadOnlyPropertyOwner<T>

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IReadOnlyPropertyOwner<T>where T : MBObjectBase`
**File:** `TaleWorlds.Core/IReadOnlyPropertyOwner.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

IReadOnlyPropertyOwner<T> lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IReadOnlyPropertyOwner.cs. It is a public interface, implementing/inheriting MBObjectBase; the inheritance chain is IReadOnlyPropertyOwner → MBObjectBase. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IReadOnlyPropertyOwner<T> lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain IReadOnlyPropertyOwner → MBObjectBase. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IReadOnlyPropertyOwner.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetPropertyValue` | `int GetPropertyValue(T attribute);` | method |
| `HasProperty` | `bool HasProperty(T attribute);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
