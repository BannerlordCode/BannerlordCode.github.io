---
title: "CharacterThumbnailCreationData"
description: "CharacterThumbnailCreationData 的自动生成类参考。"
---
# CharacterThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterThumbnailCreationData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/CharacterThumbnailCreationData.cs`

## 概述

`CharacterThumbnailCreationData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CharacterThumbnailCreationData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CharacterCode` | `public CharacterCode CharacterCode { get; }` |
| `IsBig` | `public bool IsBig { get; }` |
| `CustomSizeX` | `public int CustomSizeX { get; }` |
| `CustomSizeY` | `public int CustomSizeY { get; }` |

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
CharacterThumbnailCreationData entry = ...;
```

## 参见

- [本区域目录](../)