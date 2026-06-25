---
title: "MPLobbyClanOverviewVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyClanOverviewVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClanOverviewVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanOverviewVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanOverviewVM.cs`

## Overview

`MPLobbyClanOverviewVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsLeader` | `public bool IsLeader { get; set; }` |
| `IsPrivilegedMember` | `public bool IsPrivilegedMember { get; set; }` |
| `AreActionButtonsEnabled` | `public bool AreActionButtonsEnabled { get; set; }` |
| `DoesHaveDescription` | `public bool DoesHaveDescription { get; set; }` |
| `DoesHaveAnnouncements` | `public bool DoesHaveAnnouncements { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `ChangeSigilText` | `public string ChangeSigilText { get; set; }` |
| `ChangeFactionText` | `public string ChangeFactionText { get; set; }` |
| `LeaveText` | `public string LeaveText { get; set; }` |
| `DisbandText` | `public string DisbandText { get; set; }` |
| `FactionCultureID` | `public string FactionCultureID { get; set; }` |
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |
| `InformationText` | `public string InformationText { get; set; }` |
| `AnnouncementsText` | `public string AnnouncementsText { get; set; }` |
| `ClanDescriptionText` | `public string ClanDescriptionText { get; set; }` |
| `NoDescriptionText` | `public string NoDescriptionText { get; set; }` |
| `NoAnnouncementsText` | `public string NoAnnouncementsText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `SigilImage` | `public BannerImageIdentifierVM SigilImage { get; set; }` |
| `FactionBanner` | `public BannerImageIdentifierVM FactionBanner { get; set; }` |
| `ChangeSigilPopup` | `public MPLobbyClanChangeSigilPopupVM ChangeSigilPopup { get; set; }` |
| `ChangeFactionPopup` | `public MPLobbyClanChangeFactionPopupVM ChangeFactionPopup { get; set; }` |
| `AnnouncementsList` | `public MBBindingList<MPLobbyClanAnnouncementVM> AnnouncementsList { get; set; }` |
| `SendAnnouncementPopup` | `public MPLobbyClanSendPostPopupVM SendAnnouncementPopup { get; set; }` |
| `SetClanInformationPopup` | `public MPLobbyClanSendPostPopupVM SetClanInformationPopup { get; set; }` |
| `CantLeaveHint` | `public HintViewModel CantLeaveHint { get; set; }` |
| `InviteMembersHint` | `public HintViewModel InviteMembersHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshClanInformation
`public async Task RefreshClanInformation(ClanHomeInfo info)`

**Purpose:** Refreshes the display or cache of `clan information`.

## Usage Example

```csharp
var value = new MPLobbyClanOverviewVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)