<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPArmoryVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPArmoryVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory/MPArmoryVM.cs`

## 概述

`MPArmoryVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsManagingTaunts` | `public bool IsManagingTaunts { get; set; }` |
| `IsTauntAssignmentActive` | `public bool IsTauntAssignmentActive { get; set; }` |
| `CanOpenFacegen` | `public bool CanOpenFacegen { get; set; }` |
| `ClassFilter` | `public MPLobbyClassFilterVM ClassFilter { get; set; }` |
| `HeroPreview` | `public MPArmoryHeroPreviewVM HeroPreview { get; set; }` |
| `ClassStats` | `public MPArmoryClassStatsVM ClassStats { get; set; }` |
| `HeroPerkSelection` | `public MPArmoryHeroPerkSelectionVM HeroPerkSelection { get; set; }` |
| `Cosmetics` | `public MPArmoryCosmeticsVM Cosmetics { get; set; }` |
| `TauntAssignmentClickToCloseText` | `public string TauntAssignmentClickToCloseText { get; set; }` |
| `StatsText` | `public string StatsText { get; set; }` |
| `CustomizationText` | `public string CustomizationText { get; set; }` |
| `FacegenText` | `public string FacegenText { get; set; }` |
| `ManageTauntsText` | `public string ManageTauntsText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**用途 / Purpose:** 刷新 `player data` 的显示或缓存。

### ForceRefreshCharacter
`public void ForceRefreshCharacter()`

**用途 / Purpose:** 处理 `force refresh character` 相关逻辑。

### SetCanOpenFacegen
`public void SetCanOpenFacegen(bool enabled)`

**用途 / Purpose:** 设置 `can open facegen` 的值或状态。

### ExecuteClearTauntSelection
`public void ExecuteClearTauntSelection()`

**用途 / Purpose:** 执行 `clear taunt selection` 操作或流程。

### ExecuteToggleManageTauntsState
`public void ExecuteToggleManageTauntsState()`

**用途 / Purpose:** 执行 `toggle manage taunts state` 操作或流程。

### ExecuteSelectFocusedSlot
`public void ExecuteSelectFocusedSlot()`

**用途 / Purpose:** 执行 `select focused slot` 操作或流程。

### ExecuteEmptyFocusedSlot
`public void ExecuteEmptyFocusedSlot()`

**用途 / Purpose:** 执行 `empty focused slot` 操作或流程。

### ApplyPerkEffectsToEquipment
`public static void ApplyPerkEffectsToEquipment(ref Equipment equipment, List<IReadOnlyPerkObject> selectedPerks)`

**用途 / Purpose:** 将 `perk effects to equipment` 应用到当前对象。

## 使用示例

```csharp
var value = new MPArmoryVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)