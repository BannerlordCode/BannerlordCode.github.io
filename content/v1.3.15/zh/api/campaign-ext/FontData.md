---
title: "FontData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FontData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FontData

**命名空间:** TaleWorlds.TwoDimension
**模块:** TaleWorlds.TwoDimension
**类型:** `public struct FontData`
**领域:** campaign-ext

## 概述

`FontData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `FontData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Add
`public void Add(string style, Font font, float fontSize)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### GetFontData
`public StyleFontContainer.FontData GetFontData(string style)`

**用途 / Purpose:** 获取 `font data` 的当前值。

### ClearFonts
`public void ClearFonts()`

**用途 / Purpose:** 处理 `clear fonts` 相关逻辑。

## 使用示例

```csharp
var value = new FontData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
