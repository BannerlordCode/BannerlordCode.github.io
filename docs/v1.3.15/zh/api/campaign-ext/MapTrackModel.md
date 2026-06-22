<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapTrackModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapTrackModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapTrackModel : MBGameModel<MapTrackModel>`
**Base:** `MBGameModel<MapTrackModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs`

## 概述

`MapTrackModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<MapTrackModel>(new MyMapTrackModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxTrackLife` | `public abstract float MaxTrackLife { get; }` |

## 主要方法

### GetSkipTrackChance
```csharp
public abstract float GetSkipTrackChance(MobileParty mobileParty)
```

### GetMaxTrackSpottingDistanceForMainParty
```csharp
public abstract float GetMaxTrackSpottingDistanceForMainParty()
```

### CanPartyLeaveTrack
```csharp
public abstract bool CanPartyLeaveTrack(MobileParty mobileParty)
```

### GetTrackDetectionDifficultyForMainParty
```csharp
public abstract float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance)
```

### GetSkillFromTrackDetected
```csharp
public abstract float GetSkillFromTrackDetected(Track track)
```

### GetTrackLife
```csharp
public abstract int GetTrackLife(MobileParty mobileParty)
```

### TrackTitle
```csharp
public abstract TextObject TrackTitle(Track track)
```

### GetTrackDescription
```csharp
public abstract IEnumerable<ValueTuple<TextObject, string>> GetTrackDescription(Track track)
```

### GetTrackColor
```csharp
public abstract uint GetTrackColor(Track track)
```

### GetTrackScale
```csharp
public abstract float GetTrackScale(Track track)
```

## 使用示例

```csharp
// MapTrackModel (Model) 的典型用法
Game.Current.ReplaceModel<MapTrackModel>(new MyMapTrackModel());
```

## 参见

- [完整类目录](../catalog)