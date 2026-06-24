<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapNavigationVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapNavigationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapNavigationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationVM.cs`

## 概述

`MapNavigationVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NavigationItems` | `public MBBindingList<MapNavigationItemVM> NavigationItems { get; set; }` |
| `FinanceHint` | `public HintViewModel FinanceHint { get; set; }` |
| `EncyclopediaHint` | `public HintViewModel EncyclopediaHint { get; set; }` |
| `CenterCameraHint` | `public HintViewModel CenterCameraHint { get; set; }` |
| `CampHint` | `public HintViewModel CampHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### Tick
`public void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### ExecuteOpenQuests
`public void ExecuteOpenQuests()`

**用途 / Purpose:** 执行 `open quests` 操作或流程。

### ExecuteOpenInventory
`public void ExecuteOpenInventory()`

**用途 / Purpose:** 执行 `open inventory` 操作或流程。

### ExecuteOpenParty
`public void ExecuteOpenParty()`

**用途 / Purpose:** 执行 `open party` 操作或流程。

### ExecuteOpenCharacterDeveloper
`public void ExecuteOpenCharacterDeveloper()`

**用途 / Purpose:** 执行 `open character developer` 操作或流程。

### ExecuteOpenKingdom
`public void ExecuteOpenKingdom()`

**用途 / Purpose:** 执行 `open kingdom` 操作或流程。

### ExecuteOpenClan
`public void ExecuteOpenClan()`

**用途 / Purpose:** 执行 `open clan` 操作或流程。

### ExecuteOpenEscapeMenu
`public void ExecuteOpenEscapeMenu()`

**用途 / Purpose:** 执行 `open escape menu` 操作或流程。

### ExecuteOpenMainHeroKingdomEncyclopedia
`public void ExecuteOpenMainHeroKingdomEncyclopedia()`

**用途 / Purpose:** 执行 `open main hero kingdom encyclopedia` 操作或流程。

## 使用示例

```csharp
var value = new MapNavigationVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)