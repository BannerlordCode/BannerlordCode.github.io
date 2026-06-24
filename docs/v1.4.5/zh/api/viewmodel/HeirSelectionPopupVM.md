<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeirSelectionPopupVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HeirSelectionPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeirSelectionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup/HeirSelectionPopupVM.cs`

## 概述

`HeirSelectionPopupVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; set; }` |
| `NameLabel` | `public string NameLabel { get; set; }` |
| `AgeLabel` | `public string AgeLabel { get; set; }` |
| `CultureLabel` | `public string CultureLabel { get; set; }` |
| `OccupationLabel` | `public string OccupationLabel { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `HeirApparents` | `public MBBindingList<HeirSelectionPopupHeroVM> HeirApparents { get; set; }` |
| `CurrentSelectedHero` | `public HeirSelectionPopupHeroVM CurrentSelectedHero { get; set; }` |
| `AreHotkeysVisible` | `public bool AreHotkeysVisible { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## 主要方法

### Update
`public void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### ExecuteSelectHeir
`public void ExecuteSelectHeir()`

**用途 / Purpose:** 执行 `select heir` 操作或流程。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

## 使用示例

```csharp
var value = new HeirSelectionPopupVM();
value.Update();
```

## 参见

- [完整类目录](../catalog)