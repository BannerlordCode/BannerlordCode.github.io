---
title: "CharacterSkillsResolver"
description: "CharacterSkillsResolver: a public class in TaleWorlds.Core.SaveCompability, inheriting IConflictResolver; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/SaveCompability/CharacterSkillsResolver.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterSkillsResolver

**Namespace:** `TaleWorlds.Core.SaveCompability`
**Module:** `TaleWorlds.Core`
**Type:** `public class CharacterSkillsResolver : IConflictResolver`
**File:** `TaleWorlds.Core/SaveCompability/CharacterSkillsResolver.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

CharacterSkillsResolver lives in the TaleWorlds.Core module, source file TaleWorlds.Core/SaveCompability/CharacterSkillsResolver.cs. It is a public class, implementing/inheriting IConflictResolver; the inheritance chain is CharacterSkillsResolver → IConflictResolver. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterSkillsResolver lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core.SaveCompability`, inheritance chain CharacterSkillsResolver → IConflictResolver. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/SaveCompability/CharacterSkillsResolver.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsApplicable` | `public bool IsApplicable(ApplicationVersion version)` | method |
| `GetFieldMemberWithId` | `public MemberTypeId GetFieldMemberWithId(MemberTypeId memberTypeId)` | method |
| `GetNewType` | `public Type GetNewType()` | method |
| `GetPropertyMemberWithId` | `public MemberTypeId GetPropertyMemberWithId(MemberTypeId memberTypeId)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IConflictResolver](../../save-system/IConflictResolver/)
