---
title: "HeroRelatedIssueCoolDownData"
description: "HeroRelatedIssueCoolDownData 的自动生成类参考。"
---
# HeroRelatedIssueCoolDownData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroRelatedIssueCoolDownData : IssueCoolDownData`
**Base:** `IssueCoolDownData`
**File:** `TaleWorlds.CampaignSystem/Issues/HeroRelatedIssueCoolDownData.cs`

## 概述

`HeroRelatedIssueCoolDownData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `HeroRelatedIssueCoolDownData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsRelatedTo
`public override bool IsRelatedTo(object obj)`

**用途 / Purpose:** 判断当前对象是否处于 related to 状态或条件。

```csharp
// 先通过子系统 API 拿到 HeroRelatedIssueCoolDownData 实例
HeroRelatedIssueCoolDownData heroRelatedIssueCoolDownData = ...;
var result = heroRelatedIssueCoolDownData.IsRelatedTo(obj);
```

### IsValid
`public override bool IsValid()`

**用途 / Purpose:** 判断当前对象是否处于 valid 状态或条件。

```csharp
// 先通过子系统 API 拿到 HeroRelatedIssueCoolDownData 实例
HeroRelatedIssueCoolDownData heroRelatedIssueCoolDownData = ...;
var result = heroRelatedIssueCoolDownData.IsValid();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
HeroRelatedIssueCoolDownData entry = ...;
```

## 参见

- [本区域目录](../)