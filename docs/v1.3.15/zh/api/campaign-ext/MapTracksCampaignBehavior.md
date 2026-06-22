<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapTracksCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapTracksCampaignBehavior

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`MapTracksCampaignBehavior` 是 `TaleWorlds.CampaignSystem.CampaignBehaviors` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DetectedTracks` | `public MBReadOnlyList<Track> DetectedTracks { get; }` |
| `Size` | `public int Size { get; }` |


## 主要方法

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### IsTrackDropped

```csharp
public bool IsTrackDropped(MobileParty mobileParty)
```

### AddTrack

```csharp
public void AddTrack(MobileParty party, CampaignVec2 trackPosition, Vec2 trackDirection)
```

### AddMapArrow

```csharp
public void AddMapArrow(TextObject pointerName, CampaignVec2 trackPosition, Vec2 trackDirection, float life)
```

### RequestTrack

```csharp
public Track RequestTrack(MobileParty party, CampaignVec2 trackPosition, Vec2 trackDirection)
```

### RequestMapArrow

```csharp
public Track RequestMapArrow(TextObject pointerName, CampaignVec2 trackPosition, Vec2 trackDirection, float life)
```

### ReleaseTrack

```csharp
public void ReleaseTrack(Track track)
```

### ToString

```csharp
public override string ToString()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)