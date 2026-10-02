---
title: "PropertyDefinition"
description: "PropertyDefinition: a public class in TaleWorlds.SaveSystem.Definition, inheriting MemberDefinition; 9 exposed members (3 methods, 5 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/Definition/PropertyDefinition.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PropertyDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class PropertyDefinition : MemberDefinition`
**File:** `TaleWorlds.SaveSystem/Definition/PropertyDefinition.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

PropertyDefinition lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Definition/PropertyDefinition.cs. It is a public class, implementing/inheriting MemberDefinition; the inheritance chain is PropertyDefinition → MemberDefinition. It exposes 9 public/protected members: 3 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PropertyDefinition lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem.Definition`, inheritance chain PropertyDefinition → MemberDefinition. The surface is property-led (properties 5/9, methods 3/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Definition/PropertyDefinition.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PropertyInfo` | `public PropertyInfo PropertyInfo` | property |
| `SaveablePropertyAttribute` | `public SaveablePropertyAttribute SaveablePropertyAttribute` | property |
| `GetMethod` | `public MethodInfo GetMethod` | property |
| `SetMethod` | `public MethodInfo SetMethod` | property |
| `GetPropertyValueMethod` | `public GetPropertyValueDelegate GetPropertyValueMethod` | property |
| `PropertyDefinition` | `public PropertyDefinition(PropertyInfo propertyInfo, MemberTypeId id) : base(propertyInfo, id)` | constructor |
| `GetMemberType` | `public override Type GetMemberType()` | method |
| `GetValue` | `public override object GetValue(object target)` | method |
| `InitializeForAutoGeneration` | `public void InitializeForAutoGeneration(GetPropertyValueDelegate getPropertyValueMethod)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MemberDefinition](../MemberDefinition/)
- [same namespace CollectObjectsDelegate](../CollectObjectsDelegate/)
- [same namespace ContainerDefinition](../ContainerDefinition/)
- [same namespace ContainerSaveId](../ContainerSaveId/)
- [same namespace CustomField](../CustomField/)
