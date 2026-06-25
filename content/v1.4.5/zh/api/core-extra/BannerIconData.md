---
title: "BannerIconData"
description: "BannerIconData 的自动生成类参考。"
---
# BannerIconData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct BannerIconData`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/BannerIconData.cs`

## 概述

`BannerIconData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `BannerIconData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaterialName` | `public string MaterialName { get; }` |
| `TextureIndex` | `public int TextureIndex { get; }` |

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
BannerIconData entry = ...;
```

## 参见

- [本区域目录](../)