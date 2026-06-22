<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TypeDefinition`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TypeDefinition

**命名空间:** TaleWorlds.SaveSystem.Definition
**模块:** TaleWorlds.SaveSystem
**类型:** 类 class class
**领域:** 存档系统 SaveSystem

## 概述

> 本页为自动生成的存根。`TypeDefinition` 是 `TaleWorlds.SaveSystem.Definition` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public bool CheckIfRequiresAdvancedResolving(object originalObject)
```

### ResolveObject

```csharp
public object ResolveObject(object originalObject)
```

### AdvancedResolveObject

```csharp
public object AdvancedResolveObject(object originalObject, MetaData metaData, ObjectLoadData objectLoadData)
```

### CollectInitializationCallbacks

```csharp
public void CollectInitializationCallbacks()
```

### CollectProperties

```csharp
public void CollectProperties()
```

### CollectFields

```csharp
public void CollectFields()
```

### AddCustomField

```csharp
public void AddCustomField(string fieldName, short saveId)
```

### GetPropertyDefinitionWithId

```csharp
public PropertyDefinition GetPropertyDefinitionWithId(MemberTypeId id)
```

### GetFieldDefinitionWithId

```csharp
public FieldDefinition GetFieldDefinitionWithId(MemberTypeId id)
```

### InitializeForAutoGeneration

```csharp
public void InitializeForAutoGeneration(CollectObjectsDelegate collectObjectsDelegate)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)