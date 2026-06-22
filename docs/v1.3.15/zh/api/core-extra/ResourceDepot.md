<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ResourceDepot`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ResourceDepot

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`ResourceDepot` 是 `TaleWorlds.Library` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ResourceLocations` | `public MBReadOnlyList<ResourceDepotLocation> ResourceLocations { get; }` |


## 主要方法

### AddLocation

```csharp
public void AddLocation(string basePath, string location)
```

### CollectResources

```csharp
public void CollectResources()
```

### GetFiles

```csharp
public string GetFiles(string subDirectory, string extension, bool excludeSubContents = false)
```

### GetFilePath

```csharp
public string GetFilePath(string file)
```

### GetFilesEndingWith

```csharp
public IEnumerable<string> GetFilesEndingWith(string fileEndName)
```

### StartWatchingChangesInDepot

```csharp
public void StartWatchingChangesInDepot()
```

### StopWatchingChangesInDepot

```csharp
public void StopWatchingChangesInDepot()
```

### CheckForChanges

```csharp
public void CheckForChanges()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)