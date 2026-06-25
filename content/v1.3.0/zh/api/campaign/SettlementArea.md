---
title: "SettlementArea"
description: "SettlementArea 的自动生成类参考。"
---
# SettlementArea

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementArea`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Settlements/SettlementArea.cs`

## 概述

`SettlementArea` 位于 `TaleWorlds.CampaignSystem.Settlements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Settlement` | `public abstract Settlement Settlement { get; }` |
| `Name` | `public abstract TextObject Name { get; }` |
| `Tag` | `public abstract string Tag { get; }` |
| `Owner` | `public abstract Hero Owner { get; }` |

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SettlementArea instance = ...;
```

## 参见

- [本区域目录](../)