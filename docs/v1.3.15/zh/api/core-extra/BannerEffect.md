<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerEffect`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerEffect

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`BannerEffect` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IncrementType` | `public EffectIncrementType IncrementType { get; }` |


## 主要方法

### Initialize

```csharp
public void Initialize(string name, string description, float level1Bonus, float level2Bonus, float level3Bonus, EffectIncrementType incrementType)
```

### GetBonusAtLevel

```csharp
public float GetBonusAtLevel(int bannerLevel)
```

### GetBonusStringAtLevel

```csharp
public string GetBonusStringAtLevel(int bannerLevel)
```

### GetDescription

```csharp
public TextObject GetDescription(int bannerLevel)
```

### ToString

```csharp
public override string ToString()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)