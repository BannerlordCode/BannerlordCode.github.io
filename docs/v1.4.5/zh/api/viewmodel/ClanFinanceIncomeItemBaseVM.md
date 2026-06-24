<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanFinanceIncomeItemBaseVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ClanFinanceIncomeItemBaseVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFinanceIncomeItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement/ClanFinanceIncomeItemBaseVM.cs`

## 概述

`ClanFinanceIncomeItemBaseVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IncomeTypeAsEnum` | `public IncomeTypes IncomeTypeAsEnum { get; set; }` |
| `ItemProperties` | `public MBBindingList<SelectableItemPropertyVM> ItemProperties { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Location` | `public string Location { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IncomeValueText` | `public string IncomeValueText { get; set; }` |
| `ImageName` | `public string ImageName { get; set; }` |
| `Income` | `public int Income { get; set; }` |
| `Visual` | `public ImageIdentifierVM Visual { get; set; }` |
| `IncomeType` | `public int IncomeType { get; set; }` |

## 主要方法

### OnIncomeSelection
`public void OnIncomeSelection()`

**用途 / Purpose:** 当 `income selection` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new ClanFinanceIncomeItemBaseVM();
value.OnIncomeSelection();
```

## 参见

- [完整类目录](../catalog)