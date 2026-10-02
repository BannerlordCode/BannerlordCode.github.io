---
title: "TypeDefinition"
description: "TypeDefinition: a public class in TaleWorlds.SaveSystem, inheriting TypeDefinitionBase; 21 exposed members (10 methods, 9 properties, 0 fields). Source: TaleWorlds.SaveSystem/Definition/TypeDefinition.cs."
---
# TypeDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class TypeDefinition : TypeDefinitionBase`
**File:** `TaleWorlds.SaveSystem/Definition/TypeDefinition.cs`

## Overview

TypeDefinition lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Definition/TypeDefinition.cs. It is a public class, implementing/inheriting TypeDefinitionBase; the inheritance chain is TypeDefinition → TypeDefinitionBase. It exposes 21 public/protected members: 10 methods, 9 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TypeDefinition is a top-level type in TaleWorlds.SaveSystem, namespace differing from (TaleWorlds.SaveSystem.Definition) the module directory; inheritance chain TypeDefinition → TypeDefinitionBase. The surface is method-led (methods 10/21, properties 9/21), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Definition/TypeDefinition.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public List<MemberDefinition>MemberDefinitions` | property |
| `IEnumerable` | `public IEnumerable<MethodInfo>InitializationCallbacks` | property |
| `IEnumerable` | `public IEnumerable<MethodInfo>LateInitializationCallbacks` | property |
| `IEnumerable` | `public IEnumerable<string>Errors` | property |
| `IsClassDefinition` | `public bool IsClassDefinition` | property |
| `List` | `public List<CustomField>CustomFields` | property |
| `CollectObjectsMethod` | `public CollectObjectsDelegate CollectObjectsMethod` | property |
| `TypeDefinition` | `public TypeDefinition(Type type, SaveId saveId, IObjectResolver objectResolver) : base(type, saveId)` | constructor |
| `TypeDefinition` | `public TypeDefinition(Type type, int saveId, IObjectResolver objectResolver) : this(type, new TypeSaveId(saveId), objectResolver)` | constructor |
| `CheckIfRequiresAdvancedResolving` | `public bool CheckIfRequiresAdvancedResolving(object originalObject)` | method |
| `ResolveObject` | `public object ResolveObject(object originalObject)` | method |
| `AdvancedResolveObject` | `public object AdvancedResolveObject(object originalObject, MetaData metaData, ObjectLoadData objectLoadData)` | method |
| `CollectInitializationCallbacks` | `public void CollectInitializationCallbacks()` | method |
| `CollectProperties` | `public void CollectProperties()` | method |
| `CollectFields` | `public void CollectFields()` | method |
| `AddCustomField` | `public void AddCustomField(string fieldName, short saveId)` | method |
| `GetPropertyDefinitionWithId` | `public PropertyDefinition GetPropertyDefinitionWithId(MemberTypeId id)` | method |
| `GetFieldDefinitionWithId` | `public FieldDefinition GetFieldDefinitionWithId(MemberTypeId id)` | method |
| `PropertyDefinitions` | `public Dictionary<MemberTypeId, PropertyDefinition>.ValueCollection PropertyDefinitions` | property |
| `FieldDefinitions` | `public Dictionary<MemberTypeId, FieldDefinition>.ValueCollection FieldDefinitions` | property |
| `InitializeForAutoGeneration` | `public void InitializeForAutoGeneration(CollectObjectsDelegate collectObjectsDelegate)` | method |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TypeDefinitionBase](../TypeDefinitionBase)
- [same namespace CollectObjectsDelegate](../CollectObjectsDelegate)
- [same namespace ContainerDefinition](../ContainerDefinition)
- [same namespace ContainerSaveId](../ContainerSaveId)
- [same namespace CustomField](../CustomField)
