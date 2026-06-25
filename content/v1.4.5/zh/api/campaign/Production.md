---
title: "Production"
description: "Production 的自动生成类参考。"
---
# Production

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Workshops
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct Production`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Workshops/WorkshopType.cs`

## 概述

`Production` 位于 `TaleWorlds.CampaignSystem.Settlements.Workshops`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements.Workshops` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Production
`public struct Production(float conversionSpeed)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Production 对应的操作。

```csharp
// 先通过子系统 API 拿到 Production 实例
Production production = ...;
var result = production.Production(0);
```

### AddInput
`public void AddInput(ItemCategory item, int count = 1)`

**用途 / Purpose:** **用途 / Purpose:** 将 input 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Production 实例
Production production = ...;
production.AddInput(item, 0);
```

### AddOutput
`public void AddOutput(ItemCategory outputCategory, int outputCount)`

**用途 / Purpose:** **用途 / Purpose:** 将 output 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Production 实例
Production production = ...;
production.AddOutput(outputCategory, 0);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Production 实例
Production production = ...;
var result = production.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Production production = ...;
production.Production(0);
```

## 参见

- [本区域目录](../)