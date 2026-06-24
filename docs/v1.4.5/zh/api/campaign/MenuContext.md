<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MenuContext`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MenuContext

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MenuContext : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/MenuContext.cs`

## 概述

`MenuContext` 位于 `TaleWorlds.CampaignSystem.GameState`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.GameState` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameMenu` | `public GameMenu GameMenu { get; }` |
| `Handler` | `public IMenuContextHandler Handler { get; }` |
| `CurrentBackgroundMeshName` | `public string CurrentBackgroundMeshName { get; }` |
| `CurrentAmbientSoundID` | `public string CurrentAmbientSoundID { get; }` |
| `CurrentPanelSoundID` | `public string CurrentPanelSoundID { get; }` |

## 主要方法

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### SwitchToMenu
`public void SwitchToMenu(string menuId)`

**用途 / Purpose:** 处理 `switch to menu` 相关逻辑。

### Destroy
`public void Destroy()`

**用途 / Purpose:** 处理 `destroy` 相关逻辑。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### OnHourlyTick
`public void OnHourlyTick()`

**用途 / Purpose:** 当 `hourly tick` 事件触发时调用此方法。

### GetCurrentRepeatableObject
`public object GetCurrentRepeatableObject()`

**用途 / Purpose:** 获取 `current repeatable object` 的当前值。

### GetSelectedObject
`public object GetSelectedObject()`

**用途 / Purpose:** 获取 `selected object` 的当前值。

### GetSelectedRepeatableObject
`public object GetSelectedRepeatableObject()`

**用途 / Purpose:** 获取 `selected repeatable object` 的当前值。

### SetRepeatObjectList
`public void SetRepeatObjectList(IEnumerable<object> list)`

**用途 / Purpose:** 设置 `repeat object list` 的值或状态。

### OnConsequence
`public void OnConsequence(GameMenuOption gameMenuOption)`

**用途 / Purpose:** 当 `consequence` 事件触发时调用此方法。

### InvokeConsequence
`public void InvokeConsequence(int index)`

**用途 / Purpose:** 处理 `invoke consequence` 相关逻辑。

### SetBackgroundMeshName
`public void SetBackgroundMeshName(string name)`

**用途 / Purpose:** 设置 `background mesh name` 的值或状态。

### SetPanelSound
`public void SetPanelSound(string panelSoundID)`

**用途 / Purpose:** 设置 `panel sound` 的值或状态。

### SetAmbientSound
`public void SetAmbientSound(string ambientSoundID)`

**用途 / Purpose:** 设置 `ambient sound` 的值或状态。

### OpenTownManagement
`public void OpenTownManagement()`

**用途 / Purpose:** 处理 `open town management` 相关逻辑。

### OpenRecruitVolunteers
`public void OpenRecruitVolunteers()`

**用途 / Purpose:** 处理 `open recruit volunteers` 相关逻辑。

### OpenTournamentLeaderboards
`public void OpenTournamentLeaderboards()`

**用途 / Purpose:** 处理 `open tournament leaderboards` 相关逻辑。

### OpenTroopSelection
`public void OpenTroopSelection(TroopRoster fullRoster, TroopRoster initialSelections, List<Ship> eligibleShips, Func<CharacterObject, bool> canChangeStatusOfTroop, Action<TroopRoster> onDone, int maxSelectableTroopCount, int minSelectableTroopCount = 1, bool isNavalRaid = false)`

**用途 / Purpose:** 处理 `open troop selection` 相关逻辑。

## 使用示例

```csharp
var value = new MenuContext();
value.Refresh();
```

## 参见

- [完整类目录](../catalog)