<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyTransitionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyTransitionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTransitionModel : PartyTransitionModel`
**Base:** `PartyTransitionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTransitionModel.cs`

## 概述

`DefaultPartyTransitionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPartyTransitionModel>(new MyDefaultPartyTransitionModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetFleetTravelTimeToPoint
```csharp
public override CampaignTime GetFleetTravelTimeToPoint(MobileParty mobileParty, CampaignVec2 target)
```

### GetTransitionTimeDisembarking
```csharp
public override CampaignTime GetTransitionTimeDisembarking(MobileParty mobileParty)
```

### GetTransitionTimeForEmbarking
```csharp
public override CampaignTime GetTransitionTimeForEmbarking(MobileParty mobileParty)
```

## 使用示例

```csharp
// DefaultPartyTransitionModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPartyTransitionModel>(new MyDefaultPartyTransitionModel());
```

## 参见

- [完整类目录](../catalog)