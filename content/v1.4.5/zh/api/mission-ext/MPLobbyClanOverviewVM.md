---
title: "MPLobbyClanOverviewVM"
description: "MPLobbyClanOverviewVM 的自动生成类参考。"
---
# MPLobbyClanOverviewVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanOverviewVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanOverviewVM.cs`

## 概述

`MPLobbyClanOverviewVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanOverviewVM 实例
MPLobbyClanOverviewVM mPLobbyClanOverviewVM = ...;
mPLobbyClanOverviewVM.RefreshValues();
```

### RefreshClanInformation
`public async Task RefreshClanInformation(ClanHomeInfo info)`

**用途 / Purpose:** **用途 / Purpose:** 使 clan information 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanOverviewVM 实例
MPLobbyClanOverviewVM mPLobbyClanOverviewVM = ...;
var result = mPLobbyClanOverviewVM.RefreshClanInformation(info);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyClanOverviewVM mPLobbyClanOverviewVM = ...;
mPLobbyClanOverviewVM.RefreshValues();
```

## 参见

- [本区域目录](../)