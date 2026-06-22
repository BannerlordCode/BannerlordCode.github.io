<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NameGenerator`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NameGenerator

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`NameGenerator` 是 `TaleWorlds.CampaignSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static NameGenerator Current { get; }` |


## 主要方法

### GenerateHeroNameAndHeroFullName

```csharp
public void GenerateHeroNameAndHeroFullName(Hero hero, out TextObject firstName, out TextObject fullName, bool useDeterministicValues = true)
```

### GenerateHeroFirstName

```csharp
public TextObject GenerateHeroFirstName(Hero hero)
```

### GenerateFirstNameForPlayer

```csharp
public TextObject GenerateFirstNameForPlayer(CultureObject culture, bool isFemale)
```

### GenerateClanName

```csharp
public TextObject GenerateClanName(CultureObject culture, Settlement clanOriginSettlement)
```

### GetNameListForCulture

```csharp
public MBReadOnlyList<TextObject> GetNameListForCulture(CultureObject npcCulture, bool isFemale)
```

### AddName

```csharp
public void AddName(TextObject name)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)