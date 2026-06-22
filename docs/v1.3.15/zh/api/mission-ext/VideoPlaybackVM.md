<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VideoPlaybackVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VideoPlaybackVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`VideoPlaybackVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `SubtitleText` | `public string SubtitleText { get; set; }` |


## 主要方法

### Tick

```csharp
public void Tick(float totalElapsedTimeInVideoInSeconds)
```

### GetItemInTimeframe

```csharp
public SRTHelper.SubtitleItem GetItemInTimeframe(float timeInSecondsInVideo)
```

### SetSubtitles

```csharp
public void SetSubtitles(List<SRTHelper.SubtitleItem> lines)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)