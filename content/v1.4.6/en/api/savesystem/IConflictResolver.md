---
title: "IConflictResolver"
description: "IConflictResolver: a public interface in TaleWorlds.SaveSystem; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.SaveSystem/Resolvers/IConflictResolver.cs."
---
# IConflictResolver

**Namespace:** `TaleWorlds.SaveSystem.Resolvers`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public interface IConflictResolver`
**File:** `TaleWorlds.SaveSystem/Resolvers/IConflictResolver.cs`

## Overview

IConflictResolver lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Resolvers/IConflictResolver.cs. It is a public interface; the inheritance chain is IConflictResolver. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IConflictResolver is a top-level type in TaleWorlds.SaveSystem, namespace differing from (TaleWorlds.SaveSystem.Resolvers) the module directory; inheritance chain IConflictResolver. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Resolvers/IConflictResolver.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsApplicable` | `bool IsApplicable(ApplicationVersion version);` | method |
| `GetNewType` | `Type GetNewType();` | method |
| `GetFieldMemberWithId` | `MemberTypeId GetFieldMemberWithId(MemberTypeId memberTypeId);` | method |
| `GetPropertyMemberWithId` | `MemberTypeId GetPropertyMemberWithId(MemberTypeId memberTypeId);` | method |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace IEnumResolver](../IEnumResolver)
- [same namespace IObjectResolver](../IObjectResolver)
