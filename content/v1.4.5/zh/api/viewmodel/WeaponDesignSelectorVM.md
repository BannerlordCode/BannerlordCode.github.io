---
title: "WeaponDesignSelectorVM"
description: "WeaponDesignSelectorVM 的自动生成类参考。"
---
# WeaponDesignSelectorVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponDesignSelectorVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign/WeaponDesignSelectorVM.cs`

## 概述

`WeaponDesignSelectorVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Design` | `public TaleWorlds.Core.WeaponDesign Design { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `WeaponTypeCode` | `public string WeaponTypeCode { get; set; }` |
| `Visual` | `public ItemImageIdentifierVM Visual { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |

## 主要方法

### ExecuteSelect
`public void ExecuteSelect()`

**用途 / Purpose:** **用途 / Purpose:** 执行 select 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 WeaponDesignSelectorVM 实例
WeaponDesignSelectorVM weaponDesignSelectorVM = ...;
weaponDesignSelectorVM.ExecuteSelect();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 WeaponDesignSelectorVM 实例
WeaponDesignSelectorVM weaponDesignSelectorVM = ...;
weaponDesignSelectorVM.OnFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WeaponDesignSelectorVM weaponDesignSelectorVM = ...;
weaponDesignSelectorVM.ExecuteSelect();
```

## 参见

- [本区域目录](../)