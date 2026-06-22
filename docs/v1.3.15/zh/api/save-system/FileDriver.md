<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FileDriver`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FileDriver

**命名空间:** TaleWorlds.SaveSystem
**模块:** TaleWorlds.SaveSystem
**类型:** 类 class class
**领域:** 存档系统 SaveSystem

## 概述

> 本页为自动生成的存根。`FileDriver` 是 `TaleWorlds.SaveSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `SavePath` | `public static PlatformDirectoryPath SavePath { get; }` |


## 主要方法

### GetSaveFilePath

```csharp
public static PlatformFilePath GetSaveFilePath(string fileName)
```

### Save

```csharp
public Task<SaveResultWithMessage> Save(string saveName, int version, MetaData metaData, GameData gameData)
```

### LoadMetaData

```csharp
public MetaData LoadMetaData(string saveName)
```

### Load

```csharp
public LoadData Load(string saveName)
```

### GetSaveGameFileInfos

```csharp
public SaveGameFileInfo GetSaveGameFileInfos()
```

### GetSaveGameFileNames

```csharp
public string GetSaveGameFileNames()
```

### Delete

```csharp
public bool Delete(string saveName)
```

### IsSaveGameFileExists

```csharp
public bool IsSaveGameFileExists(string saveName)
```

### IsWorkingAsync

```csharp
public bool IsWorkingAsync()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)