<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BodyProperties`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BodyProperties

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 结构体 struct struct
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`BodyProperties` 是 `TaleWorlds.Core` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `StaticProperties` | `public StaticBodyProperties StaticProperties { get; }` |
| `DynamicProperties` | `public DynamicBodyProperties DynamicProperties { get; }` |
| `Age` | `public float Age { get; }` |
| `Weight` | `public float Weight { get; }` |
| `Build` | `public float Build { get; }` |
| `KeyPart1` | `public ulong KeyPart1 { get; }` |
| `KeyPart2` | `public ulong KeyPart2 { get; }` |
| `KeyPart3` | `public ulong KeyPart3 { get; }` |
| `KeyPart4` | `public ulong KeyPart4 { get; }` |
| `KeyPart5` | `public ulong KeyPart5 { get; }` |
| `KeyPart6` | `public ulong KeyPart6 { get; }` |
| `KeyPart7` | `public ulong KeyPart7 { get; }` |
| `KeyPart8` | `public ulong KeyPart8 { get; }` |
| `Default` | `public static BodyProperties Default { get; }` |


## 主要方法

### FromXmlNode

```csharp
public static bool FromXmlNode(XmlNode node, out BodyProperties bodyProperties)
```

### FromString

```csharp
public static bool FromString(string keyValue, out BodyProperties bodyProperties)
```

### GetRandomBodyProperties

```csharp
public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount = 0f)
```

### ToString

```csharp
public override string ToString()
```

### Equals

```csharp
public override bool Equals(object obj)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### ClampForMultiplayer

```csharp
public BodyProperties ClampForMultiplayer()
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)