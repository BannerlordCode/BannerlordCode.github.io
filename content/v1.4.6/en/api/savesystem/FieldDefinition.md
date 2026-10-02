---
title: "FieldDefinition"
description: "FieldDefinition: a public class in TaleWorlds.SaveSystem, inheriting MemberDefinition; 7 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.SaveSystem/Definition/FieldDefinition.cs."
---
# FieldDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class FieldDefinition : MemberDefinition`
**File:** `TaleWorlds.SaveSystem/Definition/FieldDefinition.cs`

## Overview

FieldDefinition lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Definition/FieldDefinition.cs. It is a public class, implementing/inheriting MemberDefinition; the inheritance chain is FieldDefinition → MemberDefinition. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FieldDefinition is a top-level type in TaleWorlds.SaveSystem, namespace differing from (TaleWorlds.SaveSystem.Definition) the module directory; inheritance chain FieldDefinition → MemberDefinition. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Definition/FieldDefinition.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FieldInfo` | `public FieldInfo FieldInfo` | property |
| `SaveableFieldAttribute` | `public SaveableFieldAttribute SaveableFieldAttribute` | property |
| `GetFieldValueMethod` | `public GetFieldValueDelegate GetFieldValueMethod` | property |
| `FieldDefinition` | `public FieldDefinition(FieldInfo fieldInfo, MemberTypeId id) : base(fieldInfo, id)` | constructor |
| `GetMemberType` | `public override Type GetMemberType()` | method |
| `GetValue` | `public override object GetValue(object target)` | method |
| `InitializeForAutoGeneration` | `public void InitializeForAutoGeneration(GetFieldValueDelegate getFieldValueMethod)` | method |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MemberDefinition](../MemberDefinition)
- [same namespace CollectObjectsDelegate](../CollectObjectsDelegate)
- [same namespace ContainerDefinition](../ContainerDefinition)
- [same namespace ContainerSaveId](../ContainerSaveId)
- [same namespace CustomField](../CustomField)
