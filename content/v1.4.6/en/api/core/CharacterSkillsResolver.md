---
title: "CharacterSkillsResolver"
description: "CharacterSkillsResolver: a public class in TaleWorlds.Core, inheriting IConflictResolver; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/SaveCompability/CharacterSkillsResolver.cs."
---
# CharacterSkillsResolver

**Namespace:** `TaleWorlds.Core.SaveCompability`
**Module:** `TaleWorlds.Core`
**Type:** `public class CharacterSkillsResolver : IConflictResolver`
**File:** `TaleWorlds.Core/SaveCompability/CharacterSkillsResolver.cs`

## Overview

CharacterSkillsResolver lives in the TaleWorlds.Core module, source file TaleWorlds.Core/SaveCompability/CharacterSkillsResolver.cs. It is a public class, implementing/inheriting IConflictResolver; the inheritance chain is CharacterSkillsResolver → IConflictResolver. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterSkillsResolver is a top-level type in TaleWorlds.Core, namespace differing from (TaleWorlds.Core.SaveCompability) the module directory; inheritance chain CharacterSkillsResolver → IConflictResolver. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. IConflictResolver on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/SaveCompability/CharacterSkillsResolver.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsApplicable` | `public bool IsApplicable(ApplicationVersion version)` | method |
| `GetFieldMemberWithId` | `public MemberTypeId GetFieldMemberWithId(MemberTypeId memberTypeId)` | method |
| `GetNewType` | `public Type GetNewType()` | method |
| `GetPropertyMemberWithId` | `public MemberTypeId GetPropertyMemberWithId(MemberTypeId memberTypeId)` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
