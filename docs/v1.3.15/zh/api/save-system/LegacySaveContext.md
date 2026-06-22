<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LegacySaveContext`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LegacySaveContext

**命名空间:** TaleWorlds.SaveSystem.Save
**模块:** TaleWorlds.SaveSystem
**类型:** 类 class class
**领域:** 存档系统 SaveSystem

## 概述

> 本页为自动生成的存根。`LegacySaveContext` 是 `TaleWorlds.SaveSystem.Save` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `RootObject` | `public object RootObject { get; }` |
| `SaveData` | `public GameData SaveData { get; }` |
| `DefinitionContext` | `public DefinitionContext DefinitionContext { get; }` |
| `EnableSaveStatistics` | `public static bool EnableSaveStatistics { get; }` |


## 主要方法

### GetStatistics

```csharp
public static LegacySaveContext.SaveStatistics GetStatistics()
```

### AddStrings

```csharp
public void AddStrings(List<string> texts)
```

### AddOrGetStringId

```csharp
public int AddOrGetStringId(string text)
```

### GetObjectId

```csharp
public int GetObjectId(object target)
```

### GetContainerId

```csharp
public int GetContainerId(object target)
```

### GetStringId

```csharp
public int GetStringId(string target)
```

### Save

```csharp
public bool Save(object target, MetaData metaData, out string errorMessage)
```

### GetObjectCounts

```csharp
public ValueTuple<int, int, int, long> GetObjectCounts(string key)
```

### GetContainerCounts

```csharp
public ValueTuple<int, int, int, int, long> GetContainerCounts(string key)
```

### GetContainerSize

```csharp
public long GetContainerSize(string key)
```

### GetTypeKeys

```csharp
public List<string> GetTypeKeys()
```

### GetContainerKeys

```csharp
public List<string> GetContainerKeys()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)