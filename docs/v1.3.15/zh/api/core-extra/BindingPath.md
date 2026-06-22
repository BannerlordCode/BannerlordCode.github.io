<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BindingPath`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BindingPath

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`BindingPath` 是 `TaleWorlds.Library` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Path` | `public string Path { get; }` |
| `Nodes` | `public string Nodes { get; }` |
| `FirstNode` | `public string FirstNode { get; }` |
| `LastNode` | `public string LastNode { get; }` |
| `SubPath` | `public BindingPath SubPath { get; }` |
| `ParentPath` | `public BindingPath ParentPath { get; }` |


## 主要方法

### CreateFromProperty

```csharp
public static BindingPath CreateFromProperty(string propertyName)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### Equals

```csharp
public override bool Equals(object obj)
```

### IsRelatedWithPathAsString

```csharp
public static bool IsRelatedWithPathAsString(string path, string referencePath)
```

### IsRelatedWithPath

```csharp
public static bool IsRelatedWithPath(string path, BindingPath referencePath)
```

### IsRelatedWith

```csharp
public bool IsRelatedWith(BindingPath referencePath)
```

### DecrementIfRelatedWith

```csharp
public void DecrementIfRelatedWith(BindingPath path, int startIndex)
```

### Simplify

```csharp
public BindingPath Simplify()
```

### Append

```csharp
public BindingPath Append(BindingPath bindingPath)
```

### ToString

```csharp
public override string ToString()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)