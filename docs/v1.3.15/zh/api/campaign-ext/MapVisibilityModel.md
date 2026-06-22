<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapVisibilityModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapVisibilityModel : MBGameModel<MapVisibilityModel>`
**Base:** `MBGameModel<MapVisibilityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs`

## 概述

`MapVisibilityModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<MapVisibilityModel>(new MyMapVisibilityModel())` 注册，以改变其计算逻辑。

## 主要方法

### MaximumSeeingRange
```csharp
public abstract float MaximumSeeingRange()
```

### GetPartySpottingRangeBase
```csharp
public abstract float GetPartySpottingRangeBase(MobileParty party)
```

### GetPartySpottingRange
```csharp
public abstract ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)
```

### GetPartyRelativeInspectionRange
```csharp
public abstract float GetPartyRelativeInspectionRange(IMapPoint party)
```

### GetPartySpottingDifficulty
```csharp
public abstract float GetPartySpottingDifficulty(MobileParty spotterParty, MobileParty party)
```

### GetHideoutSpottingDistance
```csharp
public abstract float GetHideoutSpottingDistance()
```

## 使用示例

```csharp
// MapVisibilityModel (Model) 的典型用法
Game.Current.ReplaceModel<MapVisibilityModel>(new MyMapVisibilityModel());
```

## 参见

- [完整类目录](../catalog)