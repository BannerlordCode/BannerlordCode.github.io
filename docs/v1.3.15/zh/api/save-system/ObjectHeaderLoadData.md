<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ObjectHeaderLoadData`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ObjectHeaderLoadData

**命名空间:** TaleWorlds.SaveSystem.Load
**模块:** TaleWorlds.SaveSystem
**类型:** 类 class class
**领域:** 存档系统 SaveSystem

## 概述

> 本页为自动生成的存根。`ObjectHeaderLoadData` 是 `TaleWorlds.SaveSystem.Load` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `LoadedObject` | `public object LoadedObject { get; }` |
| `Target` | `public object Target { get; }` |
| `PropertyCount` | `public short PropertyCount { get; }` |
| `ChildStructCount` | `public short ChildStructCount { get; }` |
| `TypeDefinition` | `public TypeDefinition TypeDefinition { get; }` |
| `Context` | `public LoadContext Context { get; }` |
| `SaveId` | `public SaveId SaveId { get; }` |


## 主要方法

### InitialieReaders

```csharp
public void InitialieReaders(SaveEntryFolder saveEntryFolder)
```

### CreateObject

```csharp
public void CreateObject()
```

### AdvancedResolveObject

```csharp
public void AdvancedResolveObject(MetaData metaData, ObjectLoadData objectLoadData)
```

### ResolveObject

```csharp
public void ResolveObject()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)