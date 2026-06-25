---
title: "Workshop"
description: "Workshop 的自动生成类参考。"
---
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

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 Workshop 实例
Workshop workshop = ...;
var result = workshop.GetHashCode();
```

### InitializeWorkshop
`public void InitializeWorkshop(Hero owner, WorkshopType type)`

**用途 / Purpose:** 为 「workshop」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Workshop 实例
Workshop workshop = ...;
workshop.InitializeWorkshop(owner, type);
```

### ChangeOwnerOfWorkshop
`public void ChangeOwnerOfWorkshop(Hero newOwner, WorkshopType type, int capital)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Workshop 实例
Workshop workshop = ...;
workshop.ChangeOwnerOfWorkshop(newOwner, type, 0);
```

### ChangeWorkshopProduction
`public void ChangeWorkshopProduction(WorkshopType newWorkshopType)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Workshop 实例
Workshop workshop = ...;
workshop.ChangeWorkshopProduction(newWorkshopType);
```

### SetCustomName
`public void SetCustomName(TextObject customName)`

**用途 / Purpose:** 为 「custom name」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Workshop 实例
Workshop workshop = ...;
workshop.SetCustomName(customName);
```

### UpdateLastRunTime
`public void UpdateLastRunTime()`

**用途 / Purpose:** 重新计算并更新 「last run time」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Workshop 实例
Workshop workshop = ...;
workshop.UpdateLastRunTime();
```

### SetProgress
`public void SetProgress(int i, float value)`

**用途 / Purpose:** 为 「progress」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Workshop 实例
Workshop workshop = ...;
workshop.SetProgress(0, 0);
```

### ChangeGold
`public void ChangeGold(int goldChange)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Workshop 实例
Workshop workshop = ...;
workshop.ChangeGold(0);
```

### GetProductionProgress
`public float GetProductionProgress(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「production progress」 的结果。

```csharp
// 先通过子系统 API 拿到 Workshop 实例
Workshop workshop = ...;
var result = workshop.GetProductionProgress(0);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Workshop 实例
Workshop workshop = ...;
var result = workshop.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Workshop workshop = ...;
workshop.GetHashCode();
```

## 参见

- [本区域目录](../)