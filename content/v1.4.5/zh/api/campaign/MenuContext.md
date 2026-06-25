---
title: "MenuContext"
description: "MenuContext 的自动生成类参考。"
---
# MenuContext

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MenuContext : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/MenuContext.cs`

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

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
menuContext.Refresh();
```

### SwitchToMenu
`public void SwitchToMenu(string menuId)`

**用途 / Purpose:** 调用 SwitchToMenu 对应的操作。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
menuContext.SwitchToMenu("example");
```

### Destroy
`public void Destroy()`

**用途 / Purpose:** 调用 Destroy 对应的操作。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
menuContext.Destroy();
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
menuContext.OnTick(0);
```

### OnHourlyTick
`public void OnHourlyTick()`

**用途 / Purpose:** 在 hourly tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
menuContext.OnHourlyTick();
```

### GetCurrentRepeatableObject
`public object GetCurrentRepeatableObject()`

**用途 / Purpose:** 读取并返回当前对象中 current repeatable object 的结果。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
var result = menuContext.GetCurrentRepeatableObject();
```

### GetSelectedObject
`public object GetSelectedObject()`

**用途 / Purpose:** 读取并返回当前对象中 selected object 的结果。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
var result = menuContext.GetSelectedObject();
```

### GetSelectedRepeatableObject
`public object GetSelectedRepeatableObject()`

**用途 / Purpose:** 读取并返回当前对象中 selected repeatable object 的结果。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
var result = menuContext.GetSelectedRepeatableObject();
```

### SetRepeatObjectList
`public void SetRepeatObjectList(IEnumerable<object> list)`

**用途 / Purpose:** 为 repeat object list 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
menuContext.SetRepeatObjectList(list);
```

### OnConsequence
`public void OnConsequence(GameMenuOption gameMenuOption)`

**用途 / Purpose:** 在 consequence 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
menuContext.OnConsequence(gameMenuOption);
```

### InvokeConsequence
`public void InvokeConsequence(int index)`

**用途 / Purpose:** 调用 InvokeConsequence 对应的操作。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
menuContext.InvokeConsequence(0);
```

### SetBackgroundMeshName
`public void SetBackgroundMeshName(string name)`

**用途 / Purpose:** 为 background mesh name 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
menuContext.SetBackgroundMeshName("example");
```

### SetPanelSound
`public void SetPanelSound(string panelSoundID)`

**用途 / Purpose:** 为 panel sound 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
menuContext.SetPanelSound("example");
```

### SetAmbientSound
`public void SetAmbientSound(string ambientSoundID)`

**用途 / Purpose:** 为 ambient sound 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
menuContext.SetAmbientSound("example");
```

### OpenTownManagement
`public void OpenTownManagement()`

**用途 / Purpose:** 打开town management对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
menuContext.OpenTownManagement();
```

### OpenRecruitVolunteers
`public void OpenRecruitVolunteers()`

**用途 / Purpose:** 打开recruit volunteers对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
menuContext.OpenRecruitVolunteers();
```

### OpenTournamentLeaderboards
`public void OpenTournamentLeaderboards()`

**用途 / Purpose:** 打开tournament leaderboards对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
menuContext.OpenTournamentLeaderboards();
```

### OpenTroopSelection
`public void OpenTroopSelection(TroopRoster fullRoster, TroopRoster initialSelections, List<Ship> eligibleShips, Func<CharacterObject, bool> canChangeStatusOfTroop, Action<TroopRoster> onDone, int maxSelectableTroopCount, int minSelectableTroopCount = 1, bool isNavalRaid = false)`

**用途 / Purpose:** 打开troop selection对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MenuContext 实例
MenuContext menuContext = ...;
menuContext.OpenTroopSelection(fullRoster, initialSelections, eligibleShips, func<CharacterObject, false, onDone, 0, 0, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MenuContext menuContext = ...;
menuContext.Refresh();
```

## 参见

- [本区域目录](../)