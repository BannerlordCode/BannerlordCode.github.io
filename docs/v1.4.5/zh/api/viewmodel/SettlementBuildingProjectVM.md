<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementBuildingProjectVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementBuildingProjectVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementBuildingProjectVM : SettlementProjectVM`
**Base:** `SettlementProjectVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement/SettlementBuildingProjectVM.cs`

## 概述

`SettlementBuildingProjectVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `DevelopmentLevelText` | `public string DevelopmentLevelText { get; set; }` |
| `Level` | `public int Level { get; set; }` |
| `MaxLevel` | `public int MaxLevel { get; set; }` |
| `DevelopmentQueueIndex` | `public int DevelopmentQueueIndex { get; set; }` |
| `IsInQueue` | `public bool IsInQueue { get; set; }` |
| `AlreadyAtMaxText` | `public string AlreadyAtMaxText { get; set; }` |
| `CanBuild` | `public bool CanBuild { get; set; }` |
| `AddRemoveHint` | `public HintViewModel AddRemoveHint { get; set; }` |
| `SetAsActiveHint` | `public HintViewModel SetAsActiveHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshProductionText
`public override void RefreshProductionText()`

**用途 / Purpose:** 刷新 `production text` 的显示或缓存。

### ExecuteAddRemoveToQueue
`public override void ExecuteAddRemoveToQueue()`

**用途 / Purpose:** 执行 `add remove to queue` 操作或流程。

### ExecuteSetAsActiveDevelopment
`public override void ExecuteSetAsActiveDevelopment()`

**用途 / Purpose:** 执行 `set as active development` 操作或流程。

### ExecuteSetAsCurrent
`public override void ExecuteSetAsCurrent()`

**用途 / Purpose:** 执行 `set as current` 操作或流程。

### ExecuteResetCurrent
`public override void ExecuteResetCurrent()`

**用途 / Purpose:** 执行 `reset current` 操作或流程。

### ExecuteToggleSelected
`public override void ExecuteToggleSelected()`

**用途 / Purpose:** 执行 `toggle selected` 操作或流程。

## 使用示例

```csharp
var value = new SettlementBuildingProjectVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)