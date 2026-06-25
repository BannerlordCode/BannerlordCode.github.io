---
title: "EncyclopediaUnitVM"
description: "EncyclopediaUnitVM 的自动生成类参考。"
---
# EncyclopediaUnitVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaUnitVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaUnitVM.cs`

## 概述

`EncyclopediaUnitVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActiveUnit` | `public bool IsActiveUnit { get; set; }` |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `TierIconData` | `public StringItemWithHintVM TierIconData { get; set; }` |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaUnitVM 实例
EncyclopediaUnitVM encyclopediaUnitVM = ...;
encyclopediaUnitVM.RefreshValues();
```

### ExecuteLink
`public void ExecuteLink()`

**用途 / Purpose:** 执行 link 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaUnitVM 实例
EncyclopediaUnitVM encyclopediaUnitVM = ...;
encyclopediaUnitVM.ExecuteLink();
```

### ExecuteBeginHint
`public virtual void ExecuteBeginHint()`

**用途 / Purpose:** 执行 begin hint 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaUnitVM 实例
EncyclopediaUnitVM encyclopediaUnitVM = ...;
encyclopediaUnitVM.ExecuteBeginHint();
```

### ExecuteEndHint
`public virtual void ExecuteEndHint()`

**用途 / Purpose:** 执行 end hint 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaUnitVM 实例
EncyclopediaUnitVM encyclopediaUnitVM = ...;
encyclopediaUnitVM.ExecuteEndHint();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EncyclopediaUnitVM encyclopediaUnitVM = ...;
encyclopediaUnitVM.RefreshValues();
```

## 参见

- [本区域目录](../)