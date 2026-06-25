---
title: "TextInquiryData"
description: "TextInquiryData 的自动生成类参考。"
---
# TextInquiryData

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class TextInquiryData`
**Base:** 无
**File:** `TaleWorlds.Library/TextInquiryData.cs`

## 概述

`TextInquiryData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `TextInquiryData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### HasSameContentWith
`public bool HasSameContentWith(object other)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 same content with。

```csharp
// 先通过子系统 API 拿到 TextInquiryData 实例
TextInquiryData textInquiryData = ...;
var result = textInquiryData.HasSameContentWith(other);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
TextInquiryData entry = ...;
```

## 参见

- [本区域目录](../)