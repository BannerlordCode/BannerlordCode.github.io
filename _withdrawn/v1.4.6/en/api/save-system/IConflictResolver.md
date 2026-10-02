---
title: "IConflictResolver"
description: "IConflictResolver: a public interface in TaleWorlds.SaveSystem.Resolvers; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/Resolvers/IConflictResolver.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IConflictResolver

**Namespace:** `TaleWorlds.SaveSystem.Resolvers`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public interface IConflictResolver`
**File:** `TaleWorlds.SaveSystem/Resolvers/IConflictResolver.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

IConflictResolver lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Resolvers/IConflictResolver.cs. It is a public interface; the inheritance chain is IConflictResolver. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IConflictResolver lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem.Resolvers`, inheritance chain IConflictResolver. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Resolvers/IConflictResolver.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsApplicable` | `bool IsApplicable(ApplicationVersion version);` | method |
| `GetNewType` | `Type GetNewType();` | method |
| `GetFieldMemberWithId` | `MemberTypeId GetFieldMemberWithId(MemberTypeId memberTypeId);` | method |
| `GetPropertyMemberWithId` | `MemberTypeId GetPropertyMemberWithId(MemberTypeId memberTypeId);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace IEnumResolver](../IEnumResolver/)
- [same namespace IObjectResolver](../IObjectResolver/)
