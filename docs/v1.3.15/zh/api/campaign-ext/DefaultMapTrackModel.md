<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMapTrackModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMapTrackModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapTrackModel : MapTrackModel`
**Base:** `MapTrackModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapTrackModel.cs`

## 概述

`DefaultMapTrackModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultMapTrackModel>(new MyDefaultMapTrackModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxTrackLife` | `public override float MaxTrackLife { get; }` |

## 主要方法

### GetMaxTrackSpottingDistanceForMainParty
```csharp
public override float GetMaxTrackSpottingDistanceForMainParty()
```

### CanPartyLeaveTrack
```csharp
public override bool CanPartyLeaveTrack(MobileParty mobileParty)
```

### GetTrackLife
```csharp
public override int GetTrackLife(MobileParty mobileParty)
```

### GetTrackDetectionDifficultyForMainParty
```csharp
public override float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance)
```

### GetSkillFromTrackDetected
```csharp
public override float GetSkillFromTrackDetected(Track track)
```

### GetSkipTrackChance
```csharp
public override float GetSkipTrackChance(MobileParty mobileParty)
```

### TrackTitle
```csharp
public override TextObject TrackTitle(Track track)
```

### GetTrackDescription
```csharp
public override IEnumerable<ValueTuple<TextObject, string>> GetTrackDescription(Track track)
```

### GetTrackColor
```csharp
public override uint GetTrackColor(Track track)
```

### GetTrackScale
```csharp
public override float GetTrackScale(Track track)
```

## 使用示例

```csharp
// DefaultMapTrackModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultMapTrackModel>(new MyDefaultMapTrackModel());
```

## 参见

- [完整类目录](../catalog)