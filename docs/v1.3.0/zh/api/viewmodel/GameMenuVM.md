<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuVM.cs`

## 概述

`GameMenuVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MenuContext` | `public MenuContext MenuContext { get; }` |
| `IsNight` | `public bool IsNight { get; set; }` |
| `IsInSiegeMode` | `public bool IsInSiegeMode { get; set; }` |
| `IsEncounterMenu` | `public bool IsEncounterMenu { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ContextText` | `public string ContextText { get; set; }` |
| `ItemList` | `public MBBindingList<GameMenuItemVM> ItemList { get; set; }` |
| `ProgressItemList` | `public MBBindingList<GameMenuItemProgressVM> ProgressItemList { get; set; }` |
| `Background` | `public string Background { get; set; }` |
| `MenuId` | `public string MenuId { get; set; }` |
| `PlunderItems` | `public MBBindingList<GameMenuPlunderItemVM> PlunderItems { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### SetIdleMode
`public void SetIdleMode(bool isIdle)`

**用途 / Purpose:** 设置 `idle mode` 的值或状态。

### Refresh
`public void Refresh(bool forceUpdateItems)`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### OnFrameTick
`public void OnFrameTick()`

**用途 / Purpose:** 当 `frame tick` 事件触发时调用此方法。

### UpdateMenuContext
`public void UpdateMenuContext(MenuContext newMenuContext)`

**用途 / Purpose:** 更新 `menu context` 的状态或数据。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### AddHotKey
`public void AddHotKey(GameMenuOption.LeaveType leaveType, GameKey gameKey)`

**用途 / Purpose:** 向当前集合/状态中添加 `hot key`。

### ExecuteLink
`public void ExecuteLink(string link)`

**用途 / Purpose:** 执行 `link` 操作或流程。

### Compare
`public int Compare(GameMenuItemVM x, GameMenuItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
var value = new GameMenuVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)