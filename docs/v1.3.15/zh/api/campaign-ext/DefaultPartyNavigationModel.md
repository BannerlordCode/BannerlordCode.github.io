<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyNavigationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyNavigationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyNavigationModel : PartyNavigationModel`
**Base:** `PartyNavigationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs`

## 概述

`DefaultPartyNavigationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPartyNavigationModel>(new MyDefaultPartyNavigationModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetEmbarkDisembarkThresholdDistance
```csharp
public override float GetEmbarkDisembarkThresholdDistance()
```

### GetInvalidTerrainTypesForNavigationType
```csharp
public override int GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)
```

### IsTerrainTypeValidForNavigationType
```csharp
public override bool IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType)
```

### HasNavalNavigationCapability
```csharp
public override bool HasNavalNavigationCapability(MobileParty mobileParty)
```

### CanPlayerNavigateToPosition
```csharp
public override bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)
```

## 使用示例

```csharp
// DefaultPartyNavigationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPartyNavigationModel>(new MyDefaultPartyNavigationModel());
```

## 参见

- [完整类目录](../catalog)