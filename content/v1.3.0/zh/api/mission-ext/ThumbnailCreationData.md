---
title: "ThumbnailCreationData"
description: "ThumbnailCreationData 的自动生成类参考。"
---
# ThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ThumbnailCreationData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ThumbnailCreationData.cs`

## 概述

`ThumbnailCreationData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ThumbnailCreationData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RenderId` | `public string RenderId { get; set; }` |

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ThumbnailCreationData instance = ...;
```

## 参见

- [本区域目录](../)