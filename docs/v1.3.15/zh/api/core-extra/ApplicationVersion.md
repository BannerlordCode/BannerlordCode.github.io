<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ApplicationVersion`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ApplicationVersion

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 结构体 struct struct
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`ApplicationVersion` 是 `TaleWorlds.Library` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `ApplicationVersionType` | `public ApplicationVersionType ApplicationVersionType { get; }` |
| `Major` | `public int Major { get; }` |
| `Minor` | `public int Minor { get; }` |
| `Revision` | `public int Revision { get; }` |
| `ChangeSet` | `public int ChangeSet { get; }` |


## 主要方法

### FromParametersFile

```csharp
public static ApplicationVersion FromParametersFile(string customParameterFilePath = null)
```

### FromString

```csharp
public static ApplicationVersion FromString(string versionAsString, int defaultChangeSet = 0)
```

### IsSame

```csharp
public bool IsSame(ApplicationVersion other, bool checkChangeSet)
```

### IsOlderThan

```csharp
public bool IsOlderThan(ApplicationVersion other)
```

### IsNewerThan

```csharp
public bool IsNewerThan(ApplicationVersion other)
```

### ApplicationVersionTypeFromString

```csharp
public static ApplicationVersionType ApplicationVersionTypeFromString(string applicationVersionTypeAsString)
```

### GetPrefix

```csharp
public static string GetPrefix(ApplicationVersionType applicationVersionType)
```

### ToString

```csharp
public override string ToString()
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### Equals

```csharp
public override bool Equals(object obj)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)