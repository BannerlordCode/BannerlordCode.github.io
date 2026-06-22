<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BasicCultureObject`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BasicCultureObject

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`BasicCultureObject` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `IsMainCulture` | `public bool IsMainCulture { get; }` |
| `IsBandit` | `public bool IsBandit { get; }` |
| `CanHaveSettlement` | `public bool CanHaveSettlement { get; }` |
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `ClothAlternativeColor` | `public uint ClothAlternativeColor { get; }` |
| `ClothAlternativeColor2` | `public uint ClothAlternativeColor2 { get; }` |
| `BackgroundColor1` | `public uint BackgroundColor1 { get; }` |
| `ForegroundColor1` | `public uint ForegroundColor1 { get; }` |
| `BackgroundColor2` | `public uint BackgroundColor2 { get; }` |
| `ForegroundColor2` | `public uint ForegroundColor2 { get; }` |
| `EncounterBackgroundMesh` | `public string EncounterBackgroundMesh { get; }` |
| `Banner` | `public Banner Banner { get; }` |


## 主要方法

### ToString

```csharp
public override string ToString()
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)