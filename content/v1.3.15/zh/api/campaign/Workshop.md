---
title: "Workshop"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Workshop`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Workshop

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Workshops
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Workshop : SettlementArea`
**Base:** `SettlementArea`
**File:** `TaleWorlds.CampaignSystem/Settlements/Workshops/Workshop.cs`

## 概述

`Workshop` 位于 `TaleWorlds.CampaignSystem.Settlements.Workshops`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements.Workshops` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Settlement` | `public override Settlement Settlement { get; }` |
| `Tag` | `public override string Tag { get; }` |
| `Owner` | `public override Hero Owner { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `WorkshopType` | `public WorkshopType WorkshopType { get; }` |
| `ProfitMade` | `public int ProfitMade { get; }` |
| `Expense` | `public int Expense { get; }` |
| `LastRunCampaignTime` | `public CampaignTime LastRunCampaignTime { get; }` |
| `Capital` | `public int Capital { get; }` |
| `InitialCapital` | `public int InitialCapital { get; }` |

## 主要方法

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### InitializeWorkshop
`public void InitializeWorkshop(Hero owner, WorkshopType type)`

**用途 / Purpose:** 初始化 `workshop` 的状态、资源或绑定。

### ChangeOwnerOfWorkshop
`public void ChangeOwnerOfWorkshop(Hero newOwner, WorkshopType type, int capital)`

**用途 / Purpose:** 处理 `change owner of workshop` 相关逻辑。

### ChangeWorkshopProduction
`public void ChangeWorkshopProduction(WorkshopType newWorkshopType)`

**用途 / Purpose:** 处理 `change workshop production` 相关逻辑。

### SetCustomName
`public void SetCustomName(TextObject customName)`

**用途 / Purpose:** 设置 `custom name` 的值或状态。

### UpdateLastRunTime
`public void UpdateLastRunTime()`

**用途 / Purpose:** 更新 `last run time` 的状态或数据。

### SetProgress
`public void SetProgress(int i, float value)`

**用途 / Purpose:** 设置 `progress` 的值或状态。

### ChangeGold
`public void ChangeGold(int goldChange)`

**用途 / Purpose:** 处理 `change gold` 相关逻辑。

### GetProductionProgress
`public float GetProductionProgress(int index)`

**用途 / Purpose:** 获取 `production progress` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
var value = new Workshop();
value.GetHashCode();
```

## 参见

- [完整类目录](../catalog)