---
title: "CharacterAttributeItemVM"
description: "CharacterAttributeItemVM 的自动生成类参考。"
---
# CharacterAttributeItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterAttributeItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper/CharacterAttributeItemVM.cs`

## 概述

`CharacterAttributeItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AttributeType` | `public CharacterAttribute AttributeType { get; }` |
| `BoundSkills` | `public MBBindingList<AttributeBoundSkillItemVM> BoundSkills { get; set; }` |
| `AttributeValue` | `public int AttributeValue { get; set; }` |
| `UnspentAttributePoints` | `public int UnspentAttributePoints { get; set; }` |
| `UnspentAttributePointsText` | `public string UnspentAttributePointsText { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `NameExtended` | `public string NameExtended { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `IncreaseHelpText` | `public string IncreaseHelpText { get; set; }` |
| `IsInspecting` | `public bool IsInspecting { get; set; }` |
| `IsAttributeAtMax` | `public bool IsAttributeAtMax { get; set; }` |
| `CanAddPoint` | `public bool CanAddPoint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CharacterAttributeItemVM 实例
CharacterAttributeItemVM characterAttributeItemVM = ...;
characterAttributeItemVM.RefreshValues();
```

### ExecuteInspectAttribute
`public void ExecuteInspectAttribute()`

**用途 / Purpose:** 执行 inspect attribute 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CharacterAttributeItemVM 实例
CharacterAttributeItemVM characterAttributeItemVM = ...;
characterAttributeItemVM.ExecuteInspectAttribute();
```

### ExecuteAddAttributePoint
`public void ExecuteAddAttributePoint()`

**用途 / Purpose:** 执行 add attribute point 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CharacterAttributeItemVM 实例
CharacterAttributeItemVM characterAttributeItemVM = ...;
characterAttributeItemVM.ExecuteAddAttributePoint();
```

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 CharacterAttributeItemVM 实例
CharacterAttributeItemVM characterAttributeItemVM = ...;
characterAttributeItemVM.Reset();
```

### RefreshWithCurrentValues
`public void RefreshWithCurrentValues()`

**用途 / Purpose:** 使 with current values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CharacterAttributeItemVM 实例
CharacterAttributeItemVM characterAttributeItemVM = ...;
characterAttributeItemVM.RefreshWithCurrentValues();
```

### Commit
`public void Commit()`

**用途 / Purpose:** 调用 Commit 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterAttributeItemVM 实例
CharacterAttributeItemVM characterAttributeItemVM = ...;
characterAttributeItemVM.Commit();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterAttributeItemVM characterAttributeItemVM = ...;
characterAttributeItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)