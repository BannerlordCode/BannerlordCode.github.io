<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AvatarThumbnailCreationData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AvatarThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AvatarThumbnailCreationData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/AvatarThumbnailCreationData.cs`

## 概述

`AvatarThumbnailCreationData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `AvatarThumbnailCreationData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AvatarID` | `public string AvatarID { get; }` |
| `AvatarBytes` | `public byte AvatarBytes { get; }` |
| `Width` | `public uint Width { get; }` |
| `Height` | `public uint Height { get; }` |
| `ImageType` | `public AvatarData.ImageType ImageType { get; }` |

## 使用示例

```csharp
var value = new AvatarThumbnailCreationData();
```

## 参见

- [完整类目录](../catalog)