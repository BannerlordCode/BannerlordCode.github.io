<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PersuasionVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PersuasionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PersuasionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Conversation/PersuasionVM.cs`

## 概述

`PersuasionVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PersuasionHint` | `public BasicTooltipViewModel PersuasionHint { get; set; }` |
| `ProgressText` | `public string ProgressText { get; set; }` |
| `PersuasionProgress` | `public MBBindingList<BoolItemWithActionVM> PersuasionProgress { get; set; }` |
| `IsPersuasionActive` | `public bool IsPersuasionActive { get; set; }` |
| `CurrentSuccessChance` | `public int CurrentSuccessChance { get; set; }` |
| `CurrentPersuasionOption` | `public PersuasionOptionVM CurrentPersuasionOption { get; set; }` |
| `CurrentFailChance` | `public int CurrentFailChance { get; set; }` |
| `CurrentCritSuccessChance` | `public int CurrentCritSuccessChance { get; set; }` |
| `CurrentCritFailChance` | `public int CurrentCritFailChance { get; set; }` |

## 主要方法

### OnPersuasionProgress
`public void OnPersuasionProgress(Tuple<PersuasionOptionArgs, PersuasionOptionResult> selectedOption)`

**用途 / Purpose:** 当 `persuasion progress` 事件触发时调用此方法。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### SetCurrentOption
`public void SetCurrentOption(PersuasionOptionVM option)`

**用途 / Purpose:** 设置 `current option` 的值或状态。

### RefreshPersusasion
`public void RefreshPersusasion()`

**用途 / Purpose:** 刷新 `persusasion` 的显示或缓存。

## 使用示例

```csharp
var value = new PersuasionVM();
value.OnPersuasionProgress(tuple<PersuasionOptionArgs, selectedOption);
```

## 参见

- [完整类目录](../catalog)