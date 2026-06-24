<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementProjectVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementProjectVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementProjectVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementProjectVM.cs`

## 概述

`SettlementProjectVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDaily` | `public bool IsDaily { get; set; }` |
| `Building` | `public Building Building { get; set; }` |
| `VisualCode` | `public string VisualCode { get; set; }` |
| `ProductionText` | `public string ProductionText { get; set; }` |
| `CurrentPositiveEffectText` | `public string CurrentPositiveEffectText { get; set; }` |
| `NextPositiveEffectText` | `public string NextPositiveEffectText { get; set; }` |
| `ProductionCostText` | `public string ProductionCostText { get; set; }` |
| `IsCurrentActiveProject` | `public bool IsCurrentActiveProject { get; set; }` |
| `Progress` | `public int Progress { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Explanation` | `public string Explanation { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshProductionText
`public virtual void RefreshProductionText()`

**用途 / Purpose:** 刷新 `production text` 的显示或缓存。

### ExecuteAddToQueue
`public abstract void ExecuteAddToQueue()`

**用途 / Purpose:** 执行 `add to queue` 操作或流程。

### ExecuteSetAsActiveDevelopment
`public abstract void ExecuteSetAsActiveDevelopment()`

**用途 / Purpose:** 执行 `set as active development` 操作或流程。

### ExecuteSetAsCurrent
`public abstract void ExecuteSetAsCurrent()`

**用途 / Purpose:** 执行 `set as current` 操作或流程。

### ExecuteResetCurrent
`public abstract void ExecuteResetCurrent()`

**用途 / Purpose:** 执行 `reset current` 操作或流程。

### ExecuteToggleSelected
`public abstract void ExecuteToggleSelected()`

**用途 / Purpose:** 执行 `toggle selected` 操作或流程。

## 使用示例

```csharp
var implementation = new CustomSettlementProjectVM();
```

## 参见

- [完整类目录](../catalog)