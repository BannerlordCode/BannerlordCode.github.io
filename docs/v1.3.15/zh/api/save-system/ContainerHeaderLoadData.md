<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ContainerHeaderLoadData`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ContainerHeaderLoadData

**命名空间:** TaleWorlds.SaveSystem.Load
**模块:** TaleWorlds.SaveSystem
**类型:** 类 class class
**领域:** 存档系统 SaveSystem

## 概述

> 本页为自动生成的存根。`ContainerHeaderLoadData` 是 `TaleWorlds.SaveSystem.Load` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `Target` | `public object Target { get; }` |
| `Context` | `public LoadContext Context { get; }` |
| `TypeDefinition` | `public ContainerDefinition TypeDefinition { get; }` |
| `SaveId` | `public SaveId SaveId { get; }` |
| `ElementCount` | `public int ElementCount { get; }` |
| `ContainerType` | `public ContainerType ContainerType { get; }` |


## 主要方法

### GetObjectTypeDefinition

```csharp
public bool GetObjectTypeDefinition()
```

### CreateObject

```csharp
public void CreateObject()
```

### InitialieReaders

```csharp
public void InitialieReaders(SaveEntryFolder saveEntryFolder)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)