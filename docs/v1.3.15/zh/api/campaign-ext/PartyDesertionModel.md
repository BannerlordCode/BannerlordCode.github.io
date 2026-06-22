<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyDesertionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyDesertionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyDesertionModel : MBGameModel<PartyDesertionModel>`
**Base:** `MBGameModel<PartyDesertionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyDesertionModel.cs`

## 概述

`PartyDesertionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PartyDesertionModel>(new MyPartyDesertionModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetTroopsToDesert
```csharp
public abstract TroopRoster GetTroopsToDesert(MobileParty mobileParty)
```

### GetDesertionChanceForTroop
```csharp
public abstract float GetDesertionChanceForTroop(MobileParty mobileParty, in TroopRosterElement troopRosterElement)
```

### GetMoraleThresholdForTroopDesertion
```csharp
public abstract int GetMoraleThresholdForTroopDesertion()
```

## 使用示例

```csharp
// PartyDesertionModel (Model) 的典型用法
Game.Current.ReplaceModel<PartyDesertionModel>(new MyPartyDesertionModel());
```

## 参见

- [完整类目录](../catalog)