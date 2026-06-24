<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomGiftFiefPopupVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomGiftFiefPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomGiftFiefPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement/KingdomGiftFiefPopupVM.cs`

## 概述

`KingdomGiftFiefPopupVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `IsAnyClanSelected` | `public bool IsAnyClanSelected { get; set; }` |
| `Clans` | `public MBBindingList<KingdomClanItemVM> Clans { get; set; }` |
| `CurrentSelectedClan` | `public KingdomClanItemVM CurrentSelectedClan { get; set; }` |
| `ClanSortController` | `public KingdomClanSortControllerVM ClanSortController { get; set; }` |
| `IsOpen` | `public bool IsOpen { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `GiftText` | `public string GiftText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `BannerText` | `public string BannerText { get; set; }` |
| `TypeText` | `public string TypeText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `InfluenceText` | `public string InfluenceText { get; set; }` |
| `FiefsText` | `public string FiefsText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OpenWith
`public void OpenWith(Settlement settlement)`

**用途 / Purpose:** 处理 `open with` 相关逻辑。

### ExecuteGiftSettlement
`public void ExecuteGiftSettlement()`

**用途 / Purpose:** 执行 `gift settlement` 操作或流程。

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** 执行 `close` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

## 使用示例

```csharp
var value = new KingdomGiftFiefPopupVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)