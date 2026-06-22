<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `OrderOfBattleVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentConfiguration` | `public List<MissionOrderVM.FormationConfiguration> CurrentConfiguration { get; }` |
| `IsPoolAcceptingHeroTroops` | `public bool IsPoolAcceptingHeroTroops { get; set; }` |
| `CanStartMission` | `public bool CanStartMission { get; set; }` |
| `BeginMissionText` | `public string BeginMissionText { get; set; }` |
| `HasSelectedHeroes` | `public bool HasSelectedHeroes { get; set; }` |
| `FormationsFirstHalf` | `public MBBindingList<OrderOfBattleFormationItemVM> FormationsFirstHalf { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `AreCameraControlsEnabled` | `public bool AreCameraControlsEnabled { get; set; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; set; }` |
| `IsPoolAcceptingCaptain` | `public bool IsPoolAcceptingCaptain { get; set; }` |
| `IsPoolAcceptingAny` | `public bool IsPoolAcceptingAny { get; set; }` |
| `SelectedHeroCount` | `public int SelectedHeroCount { get; set; }` |
| `AreHotkeysEnabled` | `public bool AreHotkeysEnabled { get; set; }` |
| `ClearSelectionHint` | `public HintViewModel ClearSelectionHint { get; set; }` |
| `AutoDeployText` | `public string AutoDeployText { get; set; }` |
| `SelectAllHint` | `public HintViewModel SelectAllHint { get; set; }` |
| `MissingFormationsHint` | `public HintViewModel MissingFormationsHint { get; set; }` |
| `LastSelectedHeroItem` | `public OrderOfBattleHeroItemVM LastSelectedHeroItem { get; set; }` |
| `CanToggleHeroSelection` | `public bool CanToggleHeroSelection { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### Tick

```csharp
public void Tick()
```

### Initialize

```csharp
public void Initialize(Mission mission, Camera missionCamera, Action<int> selectFormationAtIndex, Action<int> deselectFormationAtIndex, Action clearFormationSelection, Action onAutoDeploy, Action onBeginMission, Dictionary<int, Agent> formationIndicesAndSergeants)
```

### OnAllFormationsAssignedSergeants

```csharp
public void OnAllFormationsAssignedSergeants(Dictionary<int, Agent> preAssignedCaptains)
```

### IsAnyClassSelectionEnabled

```csharp
public bool IsAnyClassSelectionEnabled()
```

### ExecuteDisableAllClassSelections

```csharp
public void ExecuteDisableAllClassSelections()
```

### ExecuteAcceptHeroes

```csharp
public void ExecuteAcceptHeroes()
```

### ExecuteSelectAllHeroes

```csharp
public void ExecuteSelectAllHeroes()
```

### ExecuteClearHeroSelection

```csharp
public void ExecuteClearHeroSelection()
```

### OnDeploymentFinalized

```csharp
public void OnDeploymentFinalized(bool playerDeployed)
```

### SelectFormationItemAtIndex

```csharp
public void SelectFormationItemAtIndex(int index)
```

### FocusFormationItemAtIndex

```csharp
public void FocusFormationItemAtIndex(int index)
```

### DeselectAllFormations

```csharp
public void DeselectAllFormations()
```

### OnUnitDeployed

```csharp
public void OnUnitDeployed()
```

### OnEscape

```csharp
public bool OnEscape()
```

### ExecuteAutoDeploy

```csharp
public void ExecuteAutoDeploy()
```

### ExecuteBeginMission

```csharp
public void ExecuteBeginMission()
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotkey)
```

### SetResetInputKey

```csharp
public void SetResetInputKey(HotKey hotkey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)