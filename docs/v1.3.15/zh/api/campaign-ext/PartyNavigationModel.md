<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyNavigationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyNavigationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyNavigationModel : MBGameModel<PartyNavigationModel>`
**Base:** `MBGameModel<PartyNavigationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyNavigationModel.cs`

## 概述

`PartyNavigationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PartyNavigationModel>(new MyPartyNavigationModel())` 注册，以改变其计算逻辑。

## 主要方法

### CanPlayerNavigateToPosition
```csharp
public abstract bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)
```

### GetEmbarkDisembarkThresholdDistance
```csharp
public abstract float GetEmbarkDisembarkThresholdDistance()
```

### IsTerrainTypeValidForNavigationType
```csharp
public abstract bool IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType)
```

### GetInvalidTerrainTypesForNavigationType
```csharp
public abstract int GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)
```

### HasNavalNavigationCapability
```csharp
public abstract bool HasNavalNavigationCapability(MobileParty mobileParty)
```

## 使用示例

```csharp
// PartyNavigationModel (Model) 的典型用法
Game.Current.ReplaceModel<PartyNavigationModel>(new MyPartyNavigationModel());
```

## 参见

- [完整类目录](../catalog)