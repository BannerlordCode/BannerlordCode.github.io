<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanPartyMemberItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanPartyMemberItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanPartyMemberItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyMemberItemVM.cs`

## 概述

`ClanPartyMemberItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HeroObject` | `public Hero HeroObject { get; }` |
| `HeroModel` | `public HeroViewModel HeroModel { get; set; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9 { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsLeader` | `public bool IsLeader { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### UpdateProperties
`public void UpdateProperties()`

**用途 / Purpose:** 更新 `properties` 的状态或数据。

### ExecuteLink
`public void ExecuteLink()`

**用途 / Purpose:** 执行 `link` 操作或流程。

### ExecuteBeginHint
`public virtual void ExecuteBeginHint()`

**用途 / Purpose:** 执行 `begin hint` 操作或流程。

### ExecuteEndHint
`public virtual void ExecuteEndHint()`

**用途 / Purpose:** 执行 `end hint` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new ClanPartyMemberItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)