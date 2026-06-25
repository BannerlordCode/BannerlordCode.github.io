---
title: "TypeDefinition"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TypeDefinition`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TypeDefinition

**命名空间:** TaleWorlds.SaveSystem.Definition
**模块:** TaleWorlds.SaveSystem
**类型:** `public class TypeDefinition : TypeDefinitionBase`
**Base:** `TypeDefinitionBase`
**领域:** save-system

## 概述

`TypeDefinition` 位于 `TaleWorlds.SaveSystem.Definition`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

**用途 / Purpose:** 处理 `check if requires advanced resolving` 相关逻辑。

### ResolveObject
`public object ResolveObject(object originalObject)`

**用途 / Purpose:** 处理 `resolve object` 相关逻辑。

### AdvancedResolveObject
`public object AdvancedResolveObject(object originalObject, MetaData metaData, ObjectLoadData objectLoadData)`

**用途 / Purpose:** 处理 `advanced resolve object` 相关逻辑。

### CollectInitializationCallbacks
`public void CollectInitializationCallbacks()`

**用途 / Purpose:** 处理 `collect initialization callbacks` 相关逻辑。

### CollectProperties
`public void CollectProperties()`

**用途 / Purpose:** 处理 `collect properties` 相关逻辑。

### CollectFields
`public void CollectFields()`

**用途 / Purpose:** 处理 `collect fields` 相关逻辑。

### AddCustomField
`public void AddCustomField(string fieldName, short saveId)`

**用途 / Purpose:** 向当前集合/状态中添加 `custom field`。

### GetPropertyDefinitionWithId
`public PropertyDefinition GetPropertyDefinitionWithId(MemberTypeId id)`

**用途 / Purpose:** 获取 `property definition with id` 的当前值。

### GetFieldDefinitionWithId
`public FieldDefinition GetFieldDefinitionWithId(MemberTypeId id)`

**用途 / Purpose:** 获取 `field definition with id` 的当前值。

### InitializeForAutoGeneration
`public void InitializeForAutoGeneration(CollectObjectsDelegate collectObjectsDelegate)`

**用途 / Purpose:** 初始化 `for auto generation` 的状态、资源或绑定。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 TypeDefinition 实例，再调用它的公开方法
var value = new TypeDefinition();
value.CheckIfRequiresAdvancedResolving(originalObject);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)
