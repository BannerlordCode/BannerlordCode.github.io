<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MenuContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MenuContext

**命名空间:** TaleWorlds.CampaignSystem.GameState
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`MenuContext` 是 `TaleWorlds.CampaignSystem.GameState` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public void Refresh()
```

### SwitchToMenu

```csharp
public void SwitchToMenu(string menuId)
```

### Destroy

```csharp
public void Destroy()
```

### OnTick

```csharp
public void OnTick(float dt)
```

### OnHourlyTick

```csharp
public void OnHourlyTick()
```

### GetCurrentRepeatableObject

```csharp
public object GetCurrentRepeatableObject()
```

### GetSelectedObject

```csharp
public object GetSelectedObject()
```

### GetSelectedRepeatableObject

```csharp
public object GetSelectedRepeatableObject()
```

### SetRepeatObjectList

```csharp
public void SetRepeatObjectList(IEnumerable<object> list)
```

### OnConsequence

```csharp
public void OnConsequence(GameMenuOption gameMenuOption)
```

### InvokeConsequence

```csharp
public void InvokeConsequence(int index)
```

### SetBackgroundMeshName

```csharp
public void SetBackgroundMeshName(string name)
```

### SetPanelSound

```csharp
public void SetPanelSound(string panelSoundID)
```

### SetAmbientSound

```csharp
public void SetAmbientSound(string ambientSoundID)
```

### OpenTownManagement

```csharp
public void OpenTownManagement()
```

### OpenRecruitVolunteers

```csharp
public void OpenRecruitVolunteers()
```

### OpenTournamentLeaderboards

```csharp
public void OpenTournamentLeaderboards()
```

### OpenTroopSelection

```csharp
public void OpenTroopSelection(TroopRoster fullRoster, TroopRoster initialSelections, Func<CharacterObject, bool> canChangeStatusOfTroop, Action<TroopRoster> onDone, int maxSelectableTroopCount, int minSelectableTroopCount = 1)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)