<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanRoleMemberItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanRoleMemberItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanRoleMemberItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleMemberItemVM.cs`

## 概述

`ClanRoleMemberItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Role` | `public PartyRole Role { get; }` |
| `RelevantSkill` | `public SkillObject RelevantSkill { get; }` |
| `RelevantSkillValue` | `public int RelevantSkillValue { get; }` |
| `Member` | `public ClanPartyMemberItemVM Member { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `IsRemoveAssigneeOption` | `public bool IsRemoveAssigneeOption { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### ExecuteAssignHeroToRole
`public void ExecuteAssignHeroToRole()`

**用途 / Purpose:** 执行 `assign hero to role` 操作或流程。

### GetEffectsList
`public string GetEffectsList(PartyRole role)`

**用途 / Purpose:** 获取 `effects list` 的当前值。

### IsHeroAssignableForRole
`public static bool IsHeroAssignableForRole(Hero hero, PartyRole role, MobileParty party)`

**用途 / Purpose:** 处理 `is hero assignable for role` 相关逻辑。

## 使用示例

```csharp
var value = new ClanRoleMemberItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)