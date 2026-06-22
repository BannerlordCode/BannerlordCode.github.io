<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MenuContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MenuContext

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MenuContext` is a class in the `TaleWorlds.CampaignSystem.GameState` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `GameMenu` | `public GameMenu GameMenu { get; }` |
| `Handler` | `public IMenuContextHandler Handler { get; }` |
| `CurrentBackgroundMeshName` | `public string CurrentBackgroundMeshName { get; }` |
| `CurrentAmbientSoundID` | `public string CurrentAmbientSoundID { get; }` |
| `CurrentPanelSoundID` | `public string CurrentPanelSoundID { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)