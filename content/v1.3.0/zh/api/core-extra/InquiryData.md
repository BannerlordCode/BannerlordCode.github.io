---
title: "InquiryData"
description: "InquiryData 的自动生成类参考。"
---
# InquiryData

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class InquiryData`
**Base:** 无
**File:** `TaleWorlds.Library/InquiryData.cs`

## 概述

`InquiryData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `InquiryData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetText
`public void SetText(string text)`

**用途 / Purpose:** **用途 / Purpose:** 为 text 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 InquiryData 实例
InquiryData inquiryData = ...;
inquiryData.SetText("example");
```

### SetTitleText
`public void SetTitleText(string titleText)`

**用途 / Purpose:** **用途 / Purpose:** 为 title text 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 InquiryData 实例
InquiryData inquiryData = ...;
inquiryData.SetTitleText("example");
```

### SetAffirmativeAction
`public void SetAffirmativeAction(Action newAffirmativeAction)`

**用途 / Purpose:** **用途 / Purpose:** 为 affirmative action 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 InquiryData 实例
InquiryData inquiryData = ...;
inquiryData.SetAffirmativeAction(newAffirmativeAction);
```

### HasSameContentWith
`public bool HasSameContentWith(object other)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 same content with。

```csharp
// 先通过子系统 API 拿到 InquiryData 实例
InquiryData inquiryData = ...;
var result = inquiryData.HasSameContentWith(other);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
InquiryData entry = ...;
```

## 参见

- [本区域目录](../)