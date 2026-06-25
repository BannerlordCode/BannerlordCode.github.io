---
title: "InformationData"
description: "InformationData 的自动生成类参考。"
---
# InformationData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class InformationData`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/InformationData.cs`

## 概述

`InformationData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `InformationData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TitleText` | `public abstract TextObject TitleText { get; }` |
| `SoundEventPath` | `public abstract string SoundEventPath { get; }` |

## 主要方法

### IsValid
`public virtual bool IsValid()`

**用途 / Purpose:** 判断当前对象是否处于 valid 状态或条件。

```csharp
// 先通过子系统 API 拿到 InformationData 实例
InformationData informationData = ...;
var result = informationData.IsValid();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
InformationData instance = ...;
```

## 参见

- [本区域目录](../)