<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeEngineType`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeEngineType

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`SiegeEngineType` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Difficulty` | `public int Difficulty { get; }` |
| `BaseHitPoints` | `public int BaseHitPoints { get; }` |
| `ToolCost` | `public int ToolCost { get; }` |
| `HitChance` | `public float HitChance { get; }` |
| `IsAntiPersonnel` | `public bool IsAntiPersonnel { get; }` |
| `AntiPersonnelHitChance` | `public float AntiPersonnelHitChance { get; }` |
| `IsConstructible` | `public bool IsConstructible { get; }` |
| `IsRanged` | `public bool IsRanged { get; }` |
| `Damage` | `public int Damage { get; }` |
| `ManDayCost` | `public int ManDayCost { get; }` |
| `CampaignRateOfFirePerDay` | `public float CampaignRateOfFirePerDay { get; }` |
| `MovementSpeed` | `public float MovementSpeed { get; }` |
| `ProjectileSpeed` | `public float ProjectileSpeed { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |


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