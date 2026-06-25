---
title: "TournamentMatchVM"
description: "TournamentMatchVM 的自动生成类参考。"
---
# TournamentMatchVM

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public class TournamentMatchVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Tournament/TournamentMatchVM.cs`

## 概述

`TournamentMatchVM` 位于 `SandBox.ViewModelCollection.Tournament`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Tournament` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Match` | `public TournamentMatch Match { get; }` |
| `Teams` | `public List<TournamentTeamVM> Teams { get; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `State` | `public int State { get; set; }` |
| `Count` | `public int Count { get; set; }` |
| `Team1` | `public TournamentTeamVM Team1 { get; set; }` |
| `Team2` | `public TournamentTeamVM Team2 { get; set; }` |
| `Team3` | `public TournamentTeamVM Team3 { get; set; }` |
| `Team4` | `public TournamentTeamVM Team4 { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TournamentMatchVM 实例
TournamentMatchVM tournamentMatchVM = ...;
tournamentMatchVM.RefreshValues();
```

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 TournamentMatchVM 实例
TournamentMatchVM tournamentMatchVM = ...;
tournamentMatchVM.Initialize();
```

### Initialize
`public void Initialize(TournamentMatch match)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 TournamentMatchVM 实例
TournamentMatchVM tournamentMatchVM = ...;
tournamentMatchVM.Initialize(match);
```

### Refresh
`public void Refresh(bool forceRefresh)`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TournamentMatchVM 实例
TournamentMatchVM tournamentMatchVM = ...;
tournamentMatchVM.Refresh(false);
```

### RefreshActiveMatch
`public void RefreshActiveMatch()`

**用途 / Purpose:** 使 「active match」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TournamentMatchVM 实例
TournamentMatchVM tournamentMatchVM = ...;
tournamentMatchVM.RefreshActiveMatch();
```

### Refresh
`public void Refresh(TournamentMatchVM target)`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TournamentMatchVM 实例
TournamentMatchVM tournamentMatchVM = ...;
tournamentMatchVM.Refresh(target);
```

### GetParticipants
`public IEnumerable<TournamentParticipantVM> GetParticipants()`

**用途 / Purpose:** 读取并返回当前对象中 「participants」 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentMatchVM 实例
TournamentMatchVM tournamentMatchVM = ...;
var result = tournamentMatchVM.GetParticipants();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TournamentMatchVM tournamentMatchVM = ...;
tournamentMatchVM.RefreshValues();
```

## 参见

- [本区域目录](../)