---
title: "SPScoreboardSkillItemVM"
description: "SPScoreboardSkillItemVM 的自动生成类参考。"
---
# SPScoreboardSkillItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardSkillItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSkillItemVM.cs`

## 概述

`SPScoreboardSkillItemVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Level` | `public string Level { get; set; }` |
| `SkillId` | `public string SkillId { get; set; }` |
| `Description` | `public string Description { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSkillItemVM 实例
SPScoreboardSkillItemVM sPScoreboardSkillItemVM = ...;
sPScoreboardSkillItemVM.RefreshValues();
```

### UpdateSkill
`public void UpdateSkill(int newValue)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 skill 的最新表示。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSkillItemVM 实例
SPScoreboardSkillItemVM sPScoreboardSkillItemVM = ...;
sPScoreboardSkillItemVM.UpdateSkill(0);
```

### IsValid
`public bool IsValid()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 valid 状态或条件。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSkillItemVM 实例
SPScoreboardSkillItemVM sPScoreboardSkillItemVM = ...;
var result = sPScoreboardSkillItemVM.IsValid();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SPScoreboardSkillItemVM sPScoreboardSkillItemVM = ...;
sPScoreboardSkillItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)