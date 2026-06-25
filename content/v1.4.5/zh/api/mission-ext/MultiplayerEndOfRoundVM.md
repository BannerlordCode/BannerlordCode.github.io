---
title: "MultiplayerEndOfRoundVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerEndOfRoundVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerEndOfRoundVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfRoundVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound/MultiplayerEndOfRoundVM.cs`

## 概述

`MultiplayerEndOfRoundVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsShown` | `public bool IsShown { get; set; }` |
| `HasAttackerMVP` | `public bool HasAttackerMVP { get; set; }` |
| `HasDefenderMVP` | `public bool HasDefenderMVP { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `CultureId` | `public string CultureId { get; set; }` |
| `IsRoundWinner` | `public bool IsRoundWinner { get; set; }` |
| `AttackerSide` | `public MultiplayerEndOfRoundSideVM AttackerSide { get; set; }` |
| `DefenderSide` | `public MultiplayerEndOfRoundSideVM DefenderSide { get; set; }` |
| `AttackerMVP` | `public MPPlayerVM AttackerMVP { get; set; }` |
| `DefenderMVP` | `public MPPlayerVM DefenderMVP { get; set; }` |
| `AttackerMVPTitleText` | `public string AttackerMVPTitleText { get; set; }` |
| `DefenderMVPTitleText` | `public string DefenderMVPTitleText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### OnMVPSelected
`public void OnMVPSelected(MissionPeer mvpPeer)`

**用途 / Purpose:** 当 `m v p selected` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MultiplayerEndOfRoundVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)