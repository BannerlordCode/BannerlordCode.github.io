---
title: "BannerThumbnailCreationBaseData"
description: "BannerThumbnailCreationBaseData 的自动生成类参考。"
---
# BannerThumbnailCreationBaseData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BannerThumbnailCreationBaseData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/BannerThumbnailCreationBaseData.cs`

## 概述

`BannerThumbnailCreationBaseData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `BannerThumbnailCreationBaseData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Banner` | `public Banner Banner { get; }` |
| `DebugInfo` | `public BannerDebugInfo DebugInfo { get; }` |
| `IsTableauOrNineGrid` | `public bool IsTableauOrNineGrid { get; }` |
| `IsLarge` | `public bool IsLarge { get; }` |

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BannerThumbnailCreationBaseData instance = ...;
```

## 参见

- [本区域目录](../)