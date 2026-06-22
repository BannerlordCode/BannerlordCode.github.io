<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultLocationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultLocationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultLocationModel : LocationModel`
**Base:** `LocationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultLocationModel.cs`

## 概述

`DefaultLocationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultLocationModel>(new MyDefaultLocationModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetSettlementUpgradeLevel
```csharp
public override int GetSettlementUpgradeLevel(LocationEncounter locationEncounter)
```

### GetCivilianSceneLevel
```csharp
public override string GetCivilianSceneLevel(Settlement settlement)
```

### GetCivilianUpgradeLevelTag
```csharp
public override string GetCivilianUpgradeLevelTag(int upgradeLevel)
```

### GetUpgradeLevelTag
```csharp
public override string GetUpgradeLevelTag(int upgradeLevel)
```

## 使用示例

```csharp
// DefaultLocationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultLocationModel>(new MyDefaultLocationModel());
```

## 参见

- [完整类目录](../catalog)