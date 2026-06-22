<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyTransitionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTransitionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTransitionModel : MBGameModel<PartyTransitionModel>`
**Base:** `MBGameModel<PartyTransitionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTransitionModel.cs`

## 概述

`PartyTransitionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PartyTransitionModel>(new MyPartyTransitionModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetTransitionTimeForEmbarking
```csharp
public abstract CampaignTime GetTransitionTimeForEmbarking(MobileParty mobileParty)
```

### GetTransitionTimeDisembarking
```csharp
public abstract CampaignTime GetTransitionTimeDisembarking(MobileParty mobileParty)
```

### GetFleetTravelTimeToPoint
```csharp
public abstract CampaignTime GetFleetTravelTimeToPoint(MobileParty owner, CampaignVec2 target)
```

## 使用示例

```csharp
// PartyTransitionModel (Model) 的典型用法
Game.Current.ReplaceModel<PartyTransitionModel>(new MyPartyTransitionModel());
```

## 参见

- [完整类目录](../catalog)