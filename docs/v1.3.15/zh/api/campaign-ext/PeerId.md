<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PeerId`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PeerId

**命名空间:** TaleWorlds.Diamond
**模块:** TaleWorlds.Diamond
**类型:** 结构体 struct struct
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PeerId` 是 `TaleWorlds.Diamond` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Empty` | `public static PeerId Empty { get; }` |


## 主要方法

### ToByteArray

```csharp
public byte ToByteArray()
```

### ToString

```csharp
public override string ToString()
```

### FromString

```csharp
public static PeerId FromString(string peerIdAsString)
```

### Equals

```csharp
public override bool Equals(object o)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)