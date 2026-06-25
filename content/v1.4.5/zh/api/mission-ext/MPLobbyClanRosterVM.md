---
title: "MPLobbyClanRosterVM"
description: "MPLobbyClanRosterVM 的自动生成类参考。"
---
# MPLobbyClanRosterVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanRosterVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanRosterVM.cs`

## 概述

`MPLobbyClanRosterVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsMemberActionsActive` | `public bool IsMemberActionsActive { get; set; }` |
| `IsPrivilegedMember` | `public bool IsPrivilegedMember { get; set; }` |
| `RosterText` | `public string RosterText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `BadgeText` | `public string BadgeText { get; set; }` |
| `StatusText` | `public string StatusText { get; set; }` |
| `MembersList` | `public MBBindingList<MPLobbyClanMemberItemVM> MembersList { get; set; }` |
| `MemberActionsList` | `public MBBindingList<StringPairItemWithActionVM> MemberActionsList { get; set; }` |
| `PromoteToClanOfficerHint` | `public HintViewModel PromoteToClanOfficerHint { get; set; }` |

## 主要方法

### Compare
`public int Compare(MPLobbyClanMemberItemVM x, MPLobbyClanMemberItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanRosterVM 实例
MPLobbyClanRosterVM mPLobbyClanRosterVM = ...;
var result = mPLobbyClanRosterVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanRosterVM 实例
MPLobbyClanRosterVM mPLobbyClanRosterVM = ...;
mPLobbyClanRosterVM.RefreshValues();
```

### RefreshClanInformation
`public void RefreshClanInformation(ClanHomeInfo info)`

**用途 / Purpose:** 使 clan information 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanRosterVM 实例
MPLobbyClanRosterVM mPLobbyClanRosterVM = ...;
mPLobbyClanRosterVM.RefreshClanInformation(info);
```

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**用途 / Purpose:** 在 player name updated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanRosterVM 实例
MPLobbyClanRosterVM mPLobbyClanRosterVM = ...;
mPLobbyClanRosterVM.OnPlayerNameUpdated("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyClanRosterVM mPLobbyClanRosterVM = ...;
mPLobbyClanRosterVM.Compare(x, y);
```

## 参见

- [本区域目录](../)