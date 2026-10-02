---
title: "MultiplayerIntermissionVotingManager"
description: "MultiplayerIntermissionVotingManager：TaleWorlds.MountAndBlade 的 public 类；公开成员 33 个（方法 19、属性 4、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MultiplayerIntermissionVotingManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerIntermissionVotingManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerIntermissionVotingManager`
**File:** `TaleWorlds.MountAndBlade/MultiplayerIntermissionVotingManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MultiplayerIntermissionVotingManager 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MultiplayerIntermissionVotingManager.cs。它是一个 public 类，继承链为 MultiplayerIntermissionVotingManager。public/protected 成员共 33 个：19 方法、4 属性、1 字段、4 事件、1 构造函数、4 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerIntermissionVotingManager 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MultiplayerIntermissionVotingManager。成员构成以方法为主（方法 19/33，属性 4/33），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MultiplayerIntermissionVotingManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static MultiplayerIntermissionVotingManager Instance` | 属性 |
| `List` | `public List<IntermissionVoteItem>MapVoteItems` | 属性 |
| `List` | `public List<IntermissionVoteItem>CultureVoteItems` | 属性 |
| `List` | `public List<CustomGameUsableMap>UsableMaps` | 属性 |
| `OnMapItemAdded;` | `public event MultiplayerIntermissionVotingManager.MapItemAddedDelegate OnMapItemAdded;` | 事件 |
| `OnCultureItemAdded;` | `public event MultiplayerIntermissionVotingManager.CultureItemAddedDelegate OnCultureItemAdded;` | 事件 |
| `OnMapItemVoteCountChanged;` | `public event MultiplayerIntermissionVotingManager.MapItemVoteCountChangedDelegate OnMapItemVoteCountChanged;` | 事件 |
| `OnCultureItemVoteCountChanged;` | `public event MultiplayerIntermissionVotingManager.CultureItemVoteCountChangedDelegate OnCultureItemVoteCountChanged;` | 事件 |
| `MultiplayerIntermissionVotingManager` | `public MultiplayerIntermissionVotingManager()` | 构造函数 |
| `AddMapItem` | `public void AddMapItem(string mapID)` | 方法 |
| `AddUsableMap` | `public void AddUsableMap(CustomGameUsableMap usableMap)` | 方法 |
| `List` | `public List<string>GetUsableMaps(string gameType)` | 方法 |
| `AddCultureItem` | `public void AddCultureItem(string cultureID)` | 方法 |
| `AddVote` | `public void AddVote(PlayerId voterID, string itemID, int voteCount)` | 方法 |
| `SetVotesOfMap` | `public void SetVotesOfMap(int mapItemIndex, int voteCount)` | 方法 |
| `SetVotesOfCulture` | `public void SetVotesOfCulture(int cultureItemIndex, int voteCount)` | 方法 |
| `ClearVotes` | `public void ClearVotes()` | 方法 |
| `ClearItems` | `public void ClearItems()` | 方法 |
| `IsCultureItem` | `public bool IsCultureItem(string itemID)` | 方法 |
| `IsMapItem` | `public bool IsMapItem(string itemID)` | 方法 |
| `HandlePlayerDisconnect` | `public void HandlePlayerDisconnect(PlayerId playerID)` | 方法 |
| `SelectRandomCultures` | `public void SelectRandomCultures(MultiplayerOptions.MultiplayerOptionsAccessMode accessMode)` | 方法 |
| `IsPeerVotedForItem` | `public bool IsPeerVotedForItem(NetworkCommunicator peer, string itemID)` | 方法 |
| `SortVotesAndPickBest` | `public void SortVotesAndPickBest()` | 方法 |
| `MaxAllowedMapCount` | `public const int MaxAllowedMapCount` | 字段 |
| `MapItemAddedDelegate` | `public delegate void MapItemAddedDelegate(string mapId);` | 方法 |
| `CultureItemAddedDelegate` | `public delegate void CultureItemAddedDelegate(string cultureId);` | 方法 |
| `MapItemVoteCountChangedDelegate` | `public delegate void MapItemVoteCountChangedDelegate(int mapItemIndex, int voteCount);` | 方法 |
| `CultureItemVoteCountChangedDelegate` | `public delegate void CultureItemVoteCountChangedDelegate(int cultureItemIndex, int voteCount);` | 方法 |
| `MapItemAddedDelegate` | `public delegate void MapItemAddedDelegate(string mapId)` | 嵌套类型 |
| `CultureItemAddedDelegate` | `public delegate void CultureItemAddedDelegate(string cultureId)` | 嵌套类型 |
| `MapItemVoteCountChangedDelegate` | `public delegate void MapItemVoteCountChangedDelegate(int mapItemIndex, int voteCount)` | 嵌套类型 |
| `CultureItemVoteCountChangedDelegate` | `public delegate void CultureItemVoteCountChangedDelegate(int cultureItemIndex, int voteCount)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
