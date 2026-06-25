---
title: "TeamSelectTeamInstanceVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TeamSelectTeamInstanceVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TeamSelectTeamInstanceVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamSelectTeamInstanceVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection/TeamSelectTeamInstanceVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### RefreshFriends
`public void RefreshFriends(IEnumerable<MissionPeer> friends)`

**用途 / Purpose:** 刷新 `friends` 的显示或缓存。

### SetIsDisabled
`public void SetIsDisabled(bool isCurrentTeam, bool disabledForBalance)`

**用途 / Purpose:** 设置 `is disabled` 的值或状态。

### ExecuteSelectTeam
`public void ExecuteSelectTeam()`

**用途 / Purpose:** 执行 `select team` 操作或流程。

## 使用示例

```csharp
var value = new TeamSelectTeamInstanceVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)