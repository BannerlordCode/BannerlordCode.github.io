<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerSiege`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerSiege

**命名空间:** TaleWorlds.CampaignSystem.Siege
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PlayerSiege` 是 `TaleWorlds.CampaignSystem.Siege` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerSiegeEvent` | `public static SiegeEvent PlayerSiegeEvent { get; }` |
| `BesiegedSettlement` | `public static Settlement BesiegedSettlement { get; }` |
| `PlayerSide` | `public static BattleSideEnum PlayerSide { get; }` |
| `IsRebellion` | `public static bool IsRebellion { get; }` |


## 主要方法

### StartSiegePreparation

```csharp
public static void StartSiegePreparation()
```

### OnSiegeEventFinalized

```csharp
public static void OnSiegeEventFinalized(bool besiegerPartyDefeated)
```

### StartPlayerSiege

```csharp
public static void StartPlayerSiege(BattleSideEnum playerSide, bool isSimulation = false, Settlement settlement = null)
```

### FinalizePlayerSiege

```csharp
public static void FinalizePlayerSiege()
```

### StartSiegeMission

```csharp
public static void StartSiegeMission(Settlement settlement = null)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)