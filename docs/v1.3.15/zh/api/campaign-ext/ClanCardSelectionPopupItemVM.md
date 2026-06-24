<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanCardSelectionPopupItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanCardSelectionPopupItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanCardSelectionPopupItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupItemVM.cs`

## 概述

`ClanCardSelectionPopupItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Identifier` | `public object Identifier { get; }` |
| `ActionResultText` | `public TextObject ActionResultText { get; }` |
| `Image` | `public ImageIdentifierVM Image { get; set; }` |
| `Properties` | `public MBBindingList<ClanCardSelectionPopupItemPropertyVM> Properties { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `SpriteType` | `public string SpriteType { get; set; }` |
| `SpriteName` | `public string SpriteName { get; set; }` |
| `SpriteLabel` | `public string SpriteLabel { get; set; }` |
| `SpecialAction` | `public string SpecialAction { get; set; }` |
| `HasImage` | `public bool HasImage { get; set; }` |
| `HasSprite` | `public bool HasSprite { get; set; }` |
| `IsSpecialActionItem` | `public bool IsSpecialActionItem { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteSelect
`public void ExecuteSelect()`

**用途 / Purpose:** 执行 `select` 操作或流程。

## 使用示例

```csharp
var value = new ClanCardSelectionPopupItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)