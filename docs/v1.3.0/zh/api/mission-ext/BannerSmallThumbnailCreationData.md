<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerSmallThumbnailCreationData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerSmallThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerSmallThumbnailCreationData : BannerThumbnailCreationData`
**Base:** `BannerThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerSmallThumbnailCreationData.cs`

## 概述

`BannerSmallThumbnailCreationData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `BannerSmallThumbnailCreationData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var value = new BannerSmallThumbnailCreationData();
```

## 参见

- [完整类目录](../catalog)