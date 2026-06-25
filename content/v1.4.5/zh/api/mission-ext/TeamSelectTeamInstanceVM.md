---
title: "TeamSelectTeamInstanceVM"
description: "TeamSelectTeamInstanceVM 的自动生成类参考。"
---
# TeamSelectTeamInstanceVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamSelectTeamInstanceVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection/TeamSelectTeamInstanceVM.cs`

## 概述

`TeamSelectTeamInstanceVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CultureId` | `public string CultureId { get; set; }` |
| `Score` | `public int Score { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsAttacker` | `public bool IsAttacker { get; set; }` |
| `IsSiege` | `public bool IsSiege { get; set; }` |
| `DisplayedPrimary` | `public string DisplayedPrimary { get; set; }` |
| `DisplayedSecondary` | `public string DisplayedSecondary { get; set; }` |
| `DisplayedSecondarySub` | `public string DisplayedSecondarySub { get; set; }` |
| `LockText` | `public string LockText { get; set; }` |
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `FriendAvatars` | `public MBBindingList<MPPlayerVM> FriendAvatars { get; set; }` |
| `HasExtraFriends` | `public bool HasExtraFriends { get; set; }` |
| `FriendsExtraText` | `public string FriendsExtraText { get; set; }` |
| `FriendsExtraHint` | `public HintViewModel FriendsExtraHint { get; set; }` |
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TeamSelectTeamInstanceVM 实例
TeamSelectTeamInstanceVM teamSelectTeamInstanceVM = ...;
teamSelectTeamInstanceVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TeamSelectTeamInstanceVM 实例
TeamSelectTeamInstanceVM teamSelectTeamInstanceVM = ...;
teamSelectTeamInstanceVM.OnFinalize();
```

### RefreshFriends
`public void RefreshFriends(IEnumerable<MissionPeer> friends)`

**用途 / Purpose:** **用途 / Purpose:** 使 friends 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TeamSelectTeamInstanceVM 实例
TeamSelectTeamInstanceVM teamSelectTeamInstanceVM = ...;
teamSelectTeamInstanceVM.RefreshFriends(friends);
```

### SetIsDisabled
`public void SetIsDisabled(bool isCurrentTeam, bool disabledForBalance)`

**用途 / Purpose:** **用途 / Purpose:** 为 is disabled 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TeamSelectTeamInstanceVM 实例
TeamSelectTeamInstanceVM teamSelectTeamInstanceVM = ...;
teamSelectTeamInstanceVM.SetIsDisabled(false, false);
```

### ExecuteSelectTeam
`public void ExecuteSelectTeam()`

**用途 / Purpose:** **用途 / Purpose:** 执行 select team 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TeamSelectTeamInstanceVM 实例
TeamSelectTeamInstanceVM teamSelectTeamInstanceVM = ...;
teamSelectTeamInstanceVM.ExecuteSelectTeam();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TeamSelectTeamInstanceVM teamSelectTeamInstanceVM = ...;
teamSelectTeamInstanceVM.RefreshValues();
```

## 参见

- [本区域目录](../)