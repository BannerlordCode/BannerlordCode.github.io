---
title: "MapNotificationItemBaseVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapNotificationItemBaseVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapNotificationItemBaseVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapNotificationItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes/MapNotificationItemBaseVM.cs`

## Overview

`MapNotificationItemBaseVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NavigationHandler` | `public INavigationHandler NavigationHandler { get; }` |
| `Data` | `public InformationData Data { get; }` |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `NotificationIdentifier` | `public string NotificationIdentifier { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ForceInspection` | `public bool ForceInspection { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `SoundId` | `public string SoundId { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### SetNavigationHandler
`public void SetNavigationHandler(INavigationHandler navigationHandler)`

**Purpose:** Sets the value or state of `navigation handler`.

### SetFastMoveCameraToPosition
`public void SetFastMoveCameraToPosition(Action<CampaignVec2> fastMoveCameraToPosition)`

**Purpose:** Sets the value or state of `fast move camera to position`.

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Executes the `action` operation or workflow.

### ExecuteRemove
`public void ExecuteRemove()`

**Purpose:** Executes the `remove` operation or workflow.

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**Purpose:** Executes the `set focused` operation or workflow.

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**Purpose:** Executes the `set unfocused` operation or workflow.

### ManualRefreshRelevantStatus
`public virtual void ManualRefreshRelevantStatus()`

**Purpose:** Handles logic related to `manual refresh relevant status`.

### SetRemoveInputKey
`public void SetRemoveInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `remove input key`.

## Usage Example

```csharp
var value = new MapNotificationItemBaseVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)