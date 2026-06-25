---
title: "MPAnnouncementsVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPAnnouncementsVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPAnnouncementsVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPAnnouncementsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home/MPAnnouncementsVM.cs`

## Overview

`MPAnnouncementsVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasValidAnnouncements` | `public bool HasValidAnnouncements { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `AnnouncementList` | `public MBBindingList<MPAnnouncementItemVM> AnnouncementList { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### UpdateAnnouncements
`public async void UpdateAnnouncements()`

**Purpose:** Updates the state or data of `announcements`.

## Usage Example

```csharp
var value = new MPAnnouncementsVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)