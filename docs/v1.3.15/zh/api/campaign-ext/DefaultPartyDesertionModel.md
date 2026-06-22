<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyDesertionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyDesertionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyDesertionModel : PartyDesertionModel`
**Base:** `PartyDesertionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyDesertionModel.cs`

## 概述

`DefaultPartyDesertionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPartyDesertionModel>(new MyDefaultPartyDesertionModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetMoraleThresholdForTroopDesertion
```csharp
public override int GetMoraleThresholdForTroopDesertion()
```

### GetDesertionChanceForTroop
```csharp
public override float GetDesertionChanceForTroop(MobileParty mobileParty, in TroopRosterElement troopRosterElement)
```

### GetTroopsToDesert
```csharp
public override TroopRoster GetTroopsToDesert(MobileParty mobileParty)
```

## 使用示例

```csharp
// DefaultPartyDesertionModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPartyDesertionModel>(new MyDefaultPartyDesertionModel());
```

## 参见

- [完整类目录](../catalog)