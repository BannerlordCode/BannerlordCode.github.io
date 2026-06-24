<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MarriageOfferPopupVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MarriageOfferPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MarriageOfferPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupVM.cs`

## 概述

`MarriageOfferPopupVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `ClanText` | `public string ClanText { get; set; }` |
| `AgeText` | `public string AgeText { get; set; }` |
| `OccupationText` | `public string OccupationText { get; set; }` |
| `RelationText` | `public string RelationText { get; set; }` |
| `ConsequencesText` | `public string ConsequencesText { get; set; }` |
| `ConsequencesList` | `public MBBindingList<BindingListStringItem> ConsequencesList { get; set; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; set; }` |
| `ButtonCancelLabel` | `public string ButtonCancelLabel { get; set; }` |
| `IsEncyclopediaOpen` | `public bool IsEncyclopediaOpen { get; set; }` |
| `OffereeClanMember` | `public MarriageOfferPopupHeroVM OffereeClanMember { get; set; }` |
| `OffererClanMember` | `public MarriageOfferPopupHeroVM OffererClanMember { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## 主要方法

### Update
`public void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### ExecuteAcceptOffer
`public void ExecuteAcceptOffer()`

**用途 / Purpose:** 执行 `accept offer` 操作或流程。

### ExecuteDeclineOffer
`public void ExecuteDeclineOffer()`

**用途 / Purpose:** 执行 `decline offer` 操作或流程。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### ExecuteLink
`public void ExecuteLink(string link)`

**用途 / Purpose:** 执行 `link` 操作或流程。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

## 使用示例

```csharp
var value = new MarriageOfferPopupVM();
value.Update();
```

## 参见

- [完整类目录](../catalog)