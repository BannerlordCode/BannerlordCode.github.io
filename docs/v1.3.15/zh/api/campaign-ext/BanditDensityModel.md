<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BanditDensityModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BanditDensityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BanditDensityModel : MBGameModel<BanditDensityModel>`
**Base:** `MBGameModel<BanditDensityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BanditDensityModel.cs`

## 概述

`BanditDensityModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<BanditDensityModel>(new MyBanditDensityModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public abstract int NumberOfMinimumBanditPartiesInAHideoutToInfestIt { get; }` |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public abstract int NumberOfMaximumBanditPartiesInEachHideout { get; }` |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public abstract int NumberOfMaximumBanditPartiesAroundEachHideout { get; }` |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public abstract int NumberOfMaximumHideoutsAtEachBanditFaction { get; }` |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public abstract int NumberOfInitialHideoutsAtEachBanditFaction { get; }` |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public abstract int NumberOfMinimumBanditTroopsInHideoutMission { get; }` |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public abstract int NumberOfMaximumTroopCountForFirstFightInHideout { get; }` |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public abstract int NumberOfMaximumTroopCountForBossFightInHideout { get; }` |
| `SpawnPercentageForFirstFightInHideoutMission` | `public abstract float SpawnPercentageForFirstFightInHideoutMission { get; }` |

## 主要方法

### GetMaxSupportedNumberOfLootersForClan
```csharp
public abstract int GetMaxSupportedNumberOfLootersForClan(Clan clan)
```

### GetMinimumTroopCountForHideoutMission
```csharp
public abstract int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)
```

### GetMaximumTroopCountForHideoutMission
```csharp
public abstract int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)
```

### IsPositionInsideNavalSafeZone
```csharp
public abstract bool IsPositionInsideNavalSafeZone(CampaignVec2 position)
```

## 使用示例

```csharp
// BanditDensityModel (Model) 的典型用法
Game.Current.ReplaceModel<BanditDensityModel>(new MyBanditDensityModel());
```

## 参见

- [完整类目录](../catalog)