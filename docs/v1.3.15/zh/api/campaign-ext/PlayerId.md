<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerId`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerId

**命名空间:** TaleWorlds.PlayerServices
**模块:** TaleWorlds.PlayerServices
**类型:** 结构体 struct struct
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PlayerId` 是 `TaleWorlds.PlayerServices` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `Id1` | `public ulong Id1 { get; }` |
| `Id2` | `public ulong Id2 { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `ProvidedType` | `public PlayerIdProvidedTypes ProvidedType { get; }` |
| `Part1` | `public ulong Part1 { get; }` |
| `Part2` | `public ulong Part2 { get; }` |
| `Part3` | `public ulong Part3 { get; }` |
| `Part4` | `public ulong Part4 { get; }` |
| `Empty` | `public static PlayerId Empty { get; }` |


## 主要方法

### ToByteArray

```csharp
public byte ToByteArray()
```

### Serialize

```csharp
public void Serialize(IWriter writer)
```

### Deserialize

```csharp
public void Deserialize(IReader reader)
```

### ToString

```csharp
public override string ToString()
```

### Equals

```csharp
public override bool Equals(object o)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### FromString

```csharp
public static PlayerId FromString(string id)
```

### CompareTo

```csharp
public int CompareTo(PlayerId other)
```

### Equals

```csharp
public bool Equals(PlayerId other)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)