---
title: "TournamentTeamVM"
description: "TournamentTeamVM 的自动生成类参考。"
---
# TournamentTeamVM

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public class TournamentTeamVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Tournament/TournamentTeamVM.cs`

## 概述

`TournamentTeamVM` 位于 `SandBox.ViewModelCollection.Tournament`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Tournament` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Participants` | `public List<TournamentParticipantVM> Participants { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `Score` | `public int Score { get; set; }` |
| `Participant1` | `public TournamentParticipantVM Participant1 { get; set; }` |
| `Participant2` | `public TournamentParticipantVM Participant2 { get; set; }` |
| `Participant3` | `public TournamentParticipantVM Participant3 { get; set; }` |
| `Participant4` | `public TournamentParticipantVM Participant4 { get; set; }` |
| `Participant5` | `public TournamentParticipantVM Participant5 { get; set; }` |
| `Participant6` | `public TournamentParticipantVM Participant6 { get; set; }` |
| `Participant7` | `public TournamentParticipantVM Participant7 { get; set; }` |
| `Participant8` | `public TournamentParticipantVM Participant8 { get; set; }` |
| `Count` | `public int Count { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TournamentTeamVM 实例
TournamentTeamVM tournamentTeamVM = ...;
tournamentTeamVM.RefreshValues();
```

### Initialize
`public void Initialize()`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 TournamentTeamVM 实例
TournamentTeamVM tournamentTeamVM = ...;
tournamentTeamVM.Initialize();
```

### Initialize
`public void Initialize(TournamentTeam team)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 TournamentTeamVM 实例
TournamentTeamVM tournamentTeamVM = ...;
tournamentTeamVM.Initialize(team);
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** **用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TournamentTeamVM 实例
TournamentTeamVM tournamentTeamVM = ...;
tournamentTeamVM.Refresh();
```

### GetParticipants
`public IEnumerable<TournamentParticipantVM> GetParticipants()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 participants 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentTeamVM 实例
TournamentTeamVM tournamentTeamVM = ...;
var result = tournamentTeamVM.GetParticipants();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TournamentTeamVM tournamentTeamVM = ...;
tournamentTeamVM.RefreshValues();
```

## 参见

- [本区域目录](../)