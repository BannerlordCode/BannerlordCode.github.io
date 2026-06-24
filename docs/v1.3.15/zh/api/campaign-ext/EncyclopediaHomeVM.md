<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaHomeVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaHomeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaHomeVM : EncyclopediaPageVM`
**Base:** `EncyclopediaPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaHomeVM.cs`

## 概述

`EncyclopediaHomeVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsListActive` | `public bool IsListActive { get; set; }` |
| `HomeTitleText` | `public string HomeTitleText { get; set; }` |
| `Lists` | `public MBBindingList<ListTypeVM> Lists { get; set; }` |

## 主要方法

### Refresh
`public override void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**用途 / Purpose:** 获取 `navigation bar u r l` 的当前值。

### GetName
`public override string GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

## 使用示例

```csharp
var value = new EncyclopediaHomeVM();
value.Refresh();
```

## 参见

- [完整类目录](../catalog)