---
title: "TypeDefinition"
description: "TypeDefinition 的自动生成类参考。"
---
# TypeDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class TypeDefinition : TypeDefinitionBase`
**Base:** `TypeDefinitionBase`
**File:** `TaleWorlds.SaveSystem/Definition/TypeDefinition.cs`

## 概述

`TypeDefinition` 位于 `TaleWorlds.SaveSystem.Definition`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Definition` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MemberDefinitions` | `public List<MemberDefinition> MemberDefinitions { get; }` |
| `InitializationCallbacks` | `public IEnumerable<MethodInfo> InitializationCallbacks { get; }` |
| `LateInitializationCallbacks` | `public IEnumerable<MethodInfo> LateInitializationCallbacks { get; }` |
| `Errors` | `public IEnumerable<string> Errors { get; }` |
| `IsClassDefinition` | `public bool IsClassDefinition { get; }` |
| `CustomFields` | `public List<CustomField> CustomFields { get; }` |
| `CollectObjectsMethod` | `public CollectObjectsDelegate CollectObjectsMethod { get; }` |
| `PropertyDefinitions` | `public Dictionary<MemberTypeId, PropertyDefinition>.ValueCollection PropertyDefinitions { get; }` |
| `FieldDefinitions` | `public Dictionary<MemberTypeId, FieldDefinition>.ValueCollection FieldDefinitions { get; }` |

## 主要方法

### CheckIfRequiresAdvancedResolving
`public bool CheckIfRequiresAdvancedResolving(object originalObject)`

**用途 / Purpose:** 检查「if requires advanced resolving」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 TypeDefinition 实例
TypeDefinition typeDefinition = ...;
var result = typeDefinition.CheckIfRequiresAdvancedResolving(originalObject);
```

### ResolveObject
`public object ResolveObject(object originalObject)`

**用途 / Purpose:** 处理与 「resolve object」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TypeDefinition 实例
TypeDefinition typeDefinition = ...;
var result = typeDefinition.ResolveObject(originalObject);
```

### AdvancedResolveObject
`public object AdvancedResolveObject(object originalObject, MetaData metaData, ObjectLoadData objectLoadData)`

**用途 / Purpose:** 处理与 「advanced resolve object」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TypeDefinition 实例
TypeDefinition typeDefinition = ...;
var result = typeDefinition.AdvancedResolveObject(originalObject, metaData, objectLoadData);
```

### CollectInitializationCallbacks
`public void CollectInitializationCallbacks()`

**用途 / Purpose:** 处理与 「collect initialization callbacks」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TypeDefinition 实例
TypeDefinition typeDefinition = ...;
typeDefinition.CollectInitializationCallbacks();
```

### CollectProperties
`public void CollectProperties()`

**用途 / Purpose:** 处理与 「collect properties」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TypeDefinition 实例
TypeDefinition typeDefinition = ...;
typeDefinition.CollectProperties();
```

### CollectFields
`public void CollectFields()`

**用途 / Purpose:** 处理与 「collect fields」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TypeDefinition 实例
TypeDefinition typeDefinition = ...;
typeDefinition.CollectFields();
```

### AddCustomField
`public void AddCustomField(string fieldName, short saveId)`

**用途 / Purpose:** 将 「custom field」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TypeDefinition 实例
TypeDefinition typeDefinition = ...;
typeDefinition.AddCustomField("example", 0);
```

### GetPropertyDefinitionWithId
`public PropertyDefinition GetPropertyDefinitionWithId(MemberTypeId id)`

**用途 / Purpose:** 读取并返回当前对象中 「property definition with id」 的结果。

```csharp
// 先通过子系统 API 拿到 TypeDefinition 实例
TypeDefinition typeDefinition = ...;
var result = typeDefinition.GetPropertyDefinitionWithId(id);
```

### GetFieldDefinitionWithId
`public FieldDefinition GetFieldDefinitionWithId(MemberTypeId id)`

**用途 / Purpose:** 读取并返回当前对象中 「field definition with id」 的结果。

```csharp
// 先通过子系统 API 拿到 TypeDefinition 实例
TypeDefinition typeDefinition = ...;
var result = typeDefinition.GetFieldDefinitionWithId(id);
```

### InitializeForAutoGeneration
`public void InitializeForAutoGeneration(CollectObjectsDelegate collectObjectsDelegate)`

**用途 / Purpose:** 为 「for auto generation」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 TypeDefinition 实例
TypeDefinition typeDefinition = ...;
typeDefinition.InitializeForAutoGeneration(collectObjectsDelegate);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TypeDefinition typeDefinition = ...;
typeDefinition.CheckIfRequiresAdvancedResolving(originalObject);
```

## 参见

- [本区域目录](../)