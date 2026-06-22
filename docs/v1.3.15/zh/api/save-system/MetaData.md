<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MetaData`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MetaData

**命名空间:** TaleWorlds.SaveSystem
**模块:** TaleWorlds.SaveSystem
**类型:** 类 class class
**领域:** 存档系统 SaveSystem

## 概述

> 本页为自动生成的存根。`MetaData` 是 `TaleWorlds.SaveSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |
| `this` | `public string this { get; set; }` |
| `Keys` | `public Dictionary<string, string>.KeyCollection Keys { get; }` |


## 主要方法

### Add

```csharp
public void Add(string key, string value)
```

### TryGetValue

```csharp
public bool TryGetValue(string key, out string value)
```

### Serialize

```csharp
public void Serialize(Stream stream)
```

### Deserialize

```csharp
public static MetaData Deserialize(Stream stream)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)