---
title: "IObjectResolver"
description: "IObjectResolver: a public interface in TaleWorlds.SaveSystem.Resolvers; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/Resolvers/IObjectResolver.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IObjectResolver

**Namespace:** `TaleWorlds.SaveSystem.Resolvers`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public interface IObjectResolver`
**File:** `TaleWorlds.SaveSystem/Resolvers/IObjectResolver.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

IObjectResolver lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Resolvers/IObjectResolver.cs. It is a public interface; the inheritance chain is IObjectResolver. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IObjectResolver lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem.Resolvers`, inheritance chain IObjectResolver. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Resolvers/IObjectResolver.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CheckIfRequiresAdvancedResolving` | `bool CheckIfRequiresAdvancedResolving(object originalObject);` | method |
| `ResolveObject` | `object ResolveObject(object originalObject);` | method |
| `AdvancedResolveObject` | `object AdvancedResolveObject(object originalObject, MetaData metaData, ObjectLoadData objectLoadData);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace IConflictResolver](../IConflictResolver/)
- [same namespace IEnumResolver](../IEnumResolver/)
