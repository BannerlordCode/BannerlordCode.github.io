<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AvatarData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AvatarData

**Namespace:** TaleWorlds.PlayerServices.Avatar
**Module:** TaleWorlds.PlayerServices
**Type:** `public class AvatarData`
**Base:** 无
**File:** `TaleWorlds.PlayerServices/PlayerServices/Avatar/AvatarData.cs`

## 概述

`AvatarData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `AvatarData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Image` | `public byte Image { get; }` |
| `Width` | `public uint Width { get; }` |
| `Height` | `public uint Height { get; }` |
| `Type` | `public AvatarData.ImageType Type { get; }` |
| `Status` | `public AvatarData.DataStatus Status { get; }` |

## 主要方法

### SetImageData
`public void SetImageData(byte image, uint width, uint height)`

**用途 / Purpose:** 设置 `image data` 的值或状态。

### SetImageData
`public void SetImageData(byte image)`

**用途 / Purpose:** 设置 `image data` 的值或状态。

### SetFailed
`public void SetFailed()`

**用途 / Purpose:** 设置 `failed` 的值或状态。

## 使用示例

```csharp
var value = new AvatarData();
```

## 参见

- [完整类目录](../catalog)