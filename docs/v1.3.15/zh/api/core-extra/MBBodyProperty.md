<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBBodyProperty`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBBodyProperty

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`MBBodyProperty` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `HairTags` | `public string HairTags { get; set; }` |
| `BeardTags` | `public string BeardTags { get; set; }` |
| `TattooTags` | `public string TattooTags { get; set; }` |
| `BodyPropertyMin` | `public BodyProperties BodyPropertyMin { get; }` |
| `BodyPropertyMax` | `public BodyProperties BodyPropertyMax { get; }` |


## 主要方法

### CreateFrom

```csharp
public static MBBodyProperty CreateFrom(MBBodyProperty bodyProperty)
```

### Init

```csharp
public void Init(BodyProperties bodyPropertyMin, BodyProperties bodyPropertyMax)
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)