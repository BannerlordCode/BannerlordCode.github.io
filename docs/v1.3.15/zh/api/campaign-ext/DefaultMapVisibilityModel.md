<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMapVisibilityModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapVisibilityModel : MapVisibilityModel`
**Base:** `MapVisibilityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapVisibilityModel.cs`

## 概述

`DefaultMapVisibilityModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultMapVisibilityModel>(new MyDefaultMapVisibilityModel())` 注册，以改变其计算逻辑。

## 主要方法

### MaximumSeeingRange
```csharp
public override float MaximumSeeingRange()
```

### GetPartySpottingRangeBase
```csharp
public override float GetPartySpottingRangeBase(MobileParty party)
```

### GetPartySpottingRange
```csharp
public override ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)
```

### GetPartyRelativeInspectionRange
```csharp
public override float GetPartyRelativeInspectionRange(IMapPoint party)
```

### GetPartySpottingDifficulty
```csharp
public override float GetPartySpottingDifficulty(MobileParty spottingParty, MobileParty party)
```

### GetHideoutSpottingDistance
```csharp
public override float GetHideoutSpottingDistance()
```

## 使用示例

```csharp
// DefaultMapVisibilityModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultMapVisibilityModel>(new MyDefaultMapVisibilityModel());
```

## 参见

- [完整类目录](../catalog)