<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanMembersVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ClanMembersVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanMembersVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories/ClanMembersVM.cs`

## 概述

`ClanMembersVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsAnyValidMemberSelected` | `public bool IsAnyValidMemberSelected { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `FamilyText` | `public string FamilyText { get; set; }` |
| `TraitsText` | `public string TraitsText { get; set; }` |
| `SkillsText` | `public string SkillsText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `CompanionsText` | `public string CompanionsText { get; set; }` |
| `Companions` | `public MBBindingList<ClanLordItemVM> Companions { get; set; }` |
| `Family` | `public MBBindingList<ClanLordItemVM> Family { get; set; }` |
| `CurrentSelectedMember` | `public ClanLordItemVM CurrentSelectedMember { get; set; }` |
| `SortController` | `public ClanMembersSortControllerVM SortController { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshMembersList
`public void RefreshMembersList()`

**用途 / Purpose:** 刷新 `members list` 的显示或缓存。

### SelectMember
`public void SelectMember(Hero hero)`

**用途 / Purpose:** 处理 `select member` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new ClanMembersVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)