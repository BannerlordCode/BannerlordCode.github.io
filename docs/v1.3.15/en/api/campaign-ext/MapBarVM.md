<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapBarVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapBarVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapBarVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarVM.cs`

## Overview

`MapBarVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapInfo` | `public MapInfoVM MapInfo { get; set; }` |
| `MapTimeControl` | `public MapTimeControlVM MapTimeControl { get; set; }` |
| `MapNavigation` | `public MapNavigationVM MapNavigation { get; set; }` |
| `IsGatherArmyVisible` | `public bool IsGatherArmyVisible { get; set; }` |
| `IsInInfoMode` | `public bool IsInInfoMode { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CanGatherArmy` | `public bool CanGatherArmy { get; set; }` |
| `GatherArmyHint` | `public HintViewModel GatherArmyHint { get; set; }` |
| `IsCameraCentered` | `public bool IsCameraCentered { get; set; }` |
| `CurrentScreen` | `public string CurrentScreen { get; set; }` |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |

## Key Methods

### Initialize
`public void Initialize(INavigationHandler navigationHandler, IMapStateHandler mapStateHandler, Func<MapBarShortcuts> getMapBarShortcuts, Action openArmyManagement)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnRefresh
`public void OnRefresh()`

**Purpose:** Called when the `refresh` event is raised.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### ExecuteArmyManagement
`public void ExecuteArmyManagement()`

**Purpose:** Executes the `army management` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new MapBarVM();
value.Initialize(navigationHandler, mapStateHandler, getMapBarShortcuts, openArmyManagement);
```

## See Also

- [Complete Class Catalog](../catalog)