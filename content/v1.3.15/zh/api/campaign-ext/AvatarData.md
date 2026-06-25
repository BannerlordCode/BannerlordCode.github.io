---
title: "AvatarData"
description: "AvatarData 的自动生成类参考。"
---
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

**用途 / Purpose:** 为 「image data」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AvatarData 实例
AvatarData avatarData = ...;
avatarData.SetImageData(0, 0, 0);
```

### SetImageData
`public void SetImageData(byte image)`

**用途 / Purpose:** 为 「image data」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AvatarData 实例
AvatarData avatarData = ...;
avatarData.SetImageData(0);
```

### SetFailed
`public void SetFailed()`

**用途 / Purpose:** 为 「failed」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AvatarData 实例
AvatarData avatarData = ...;
avatarData.SetFailed();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
AvatarData entry = ...;
```

## 参见

- [本区域目录](../)