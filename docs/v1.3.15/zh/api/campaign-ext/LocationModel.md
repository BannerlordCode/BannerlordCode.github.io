<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LocationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LocationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class LocationModel : MBGameModel<LocationModel>`
**Base:** `MBGameModel<LocationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/LocationModel.cs`

## 概述

`LocationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<LocationModel>(new MyLocationModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetSettlementUpgradeLevel
```csharp
public abstract int GetSettlementUpgradeLevel(LocationEncounter locationEncounter)
```

### GetCivilianSceneLevel
```csharp
public abstract string GetCivilianSceneLevel(Settlement settlement)
```

### GetCivilianUpgradeLevelTag
```csharp
public abstract string GetCivilianUpgradeLevelTag(int upgradeLevel)
```

### GetUpgradeLevelTag
```csharp
public abstract string GetUpgradeLevelTag(int upgradeLevel)
```

## 使用示例

```csharp
// LocationModel (Model) 的典型用法
Game.Current.ReplaceModel<LocationModel>(new MyLocationModel());
```

## 参见

- [完整类目录](../catalog)