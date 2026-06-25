---
title: "CharacterAttributeItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterAttributeItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterAttributeItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterAttributeItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterAttributeItemVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteInspectAttribute
`public void ExecuteInspectAttribute()`

**用途 / Purpose:** 执行 `inspect attribute` 操作或流程。

### ExecuteAddAttributePoint
`public void ExecuteAddAttributePoint()`

**用途 / Purpose:** 执行 `add attribute point` 操作或流程。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### RefreshWithCurrentValues
`public void RefreshWithCurrentValues()`

**用途 / Purpose:** 刷新 `with current values` 的显示或缓存。

### Commit
`public void Commit()`

**用途 / Purpose:** 处理 `commit` 相关逻辑。

## 使用示例

```csharp
var value = new CharacterAttributeItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)