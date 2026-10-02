---
title: "TypeDefinition"
description: "TypeDefinition：TaleWorlds.SaveSystem.Definition 的 public 类，继承 TypeDefinitionBase；公开成员 21 个（方法 10、属性 9、字段 0）。canonical 桶 save-system。源文件 TaleWorlds.SaveSystem/Definition/TypeDefinition.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TypeDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class TypeDefinition : TypeDefinitionBase`
**File:** `TaleWorlds.SaveSystem/Definition/TypeDefinition.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## 概述

TypeDefinition 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Definition/TypeDefinition.cs。它是一个 public 类，实现/继承 TypeDefinitionBase，继承链为 TypeDefinition → TypeDefinitionBase。public/protected 成员共 21 个：10 方法、9 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TypeDefinition 落在 canonical 桶 `save-system`（命中规则 `rule:TaleWorlds.SaveSystem`），命名空间 `TaleWorlds.SaveSystem.Definition`，继承链 TypeDefinition → TypeDefinitionBase。成员构成以方法为主（方法 10/21，属性 9/21），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Definition/TypeDefinition.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public List<MemberDefinition>MemberDefinitions` | 属性 |
| `IEnumerable` | `public IEnumerable<MethodInfo>InitializationCallbacks` | 属性 |
| `IEnumerable` | `public IEnumerable<MethodInfo>LateInitializationCallbacks` | 属性 |
| `IEnumerable` | `public IEnumerable<string>Errors` | 属性 |
| `IsClassDefinition` | `public bool IsClassDefinition` | 属性 |
| `List` | `public List<CustomField>CustomFields` | 属性 |
| `CollectObjectsMethod` | `public CollectObjectsDelegate CollectObjectsMethod` | 属性 |
| `TypeDefinition` | `public TypeDefinition(Type type, SaveId saveId, IObjectResolver objectResolver) : base(type, saveId)` | 构造函数 |
| `TypeDefinition` | `public TypeDefinition(Type type, int saveId, IObjectResolver objectResolver) : this(type, new TypeSaveId(saveId), objectResolver)` | 构造函数 |
| `CheckIfRequiresAdvancedResolving` | `public bool CheckIfRequiresAdvancedResolving(object originalObject)` | 方法 |
| `ResolveObject` | `public object ResolveObject(object originalObject)` | 方法 |
| `AdvancedResolveObject` | `public object AdvancedResolveObject(object originalObject, MetaData metaData, ObjectLoadData objectLoadData)` | 方法 |
| `CollectInitializationCallbacks` | `public void CollectInitializationCallbacks()` | 方法 |
| `CollectProperties` | `public void CollectProperties()` | 方法 |
| `CollectFields` | `public void CollectFields()` | 方法 |
| `AddCustomField` | `public void AddCustomField(string fieldName, short saveId)` | 方法 |
| `GetPropertyDefinitionWithId` | `public PropertyDefinition GetPropertyDefinitionWithId(MemberTypeId id)` | 方法 |
| `GetFieldDefinitionWithId` | `public FieldDefinition GetFieldDefinitionWithId(MemberTypeId id)` | 方法 |
| `PropertyDefinitions` | `public Dictionary<MemberTypeId, PropertyDefinition>.ValueCollection PropertyDefinitions` | 属性 |
| `FieldDefinitions` | `public Dictionary<MemberTypeId, FieldDefinition>.ValueCollection FieldDefinitions` | 属性 |
| `InitializeForAutoGeneration` | `public void InitializeForAutoGeneration(CollectObjectsDelegate collectObjectsDelegate)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TypeDefinitionBase](../TypeDefinitionBase/)
- [同命名空间 CollectObjectsDelegate](../CollectObjectsDelegate/)
- [同命名空间 ContainerDefinition](../ContainerDefinition/)
- [同命名空间 ContainerSaveId](../ContainerSaveId/)
- [同命名空间 CustomField](../CustomField/)
