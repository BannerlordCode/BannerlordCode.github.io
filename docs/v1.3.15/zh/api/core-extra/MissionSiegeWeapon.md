<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionSiegeWeapon`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSiegeWeapon

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`MissionSiegeWeapon` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Index` | `public int Index { get; }` |
| `Type` | `public SiegeEngineType Type { get; }` |
| `Health` | `public float Health { get; }` |
| `InitialHealth` | `public float InitialHealth { get; }` |
| `MaxHealth` | `public float MaxHealth { get; }` |


## 主要方法

### CreateDefaultWeapon

```csharp
public static MissionSiegeWeapon CreateDefaultWeapon(SiegeEngineType type)
```

### CreateCampaignWeapon

```csharp
public static MissionSiegeWeapon CreateCampaignWeapon(SiegeEngineType type, int index, float health, float maxHealth)
```

### SetHealth

```csharp
public void SetHealth(float health)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)