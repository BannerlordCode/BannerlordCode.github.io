---
title: "TournamentRoundVM"
description: "TournamentRoundVM 的自动生成类参考。"
---
# TournamentRoundVM

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public class TournamentRoundVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Tournament/TournamentRoundVM.cs`

## 概述

`TournamentRoundVM` 位于 `SandBox.ViewModelCollection.Tournament`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Tournament` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Round` | `public TournamentRound Round { get; }` |
| `Matches` | `public List<TournamentMatchVM> Matches { get; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Count` | `public int Count { get; set; }` |
| `Match1` | `public TournamentMatchVM Match1 { get; set; }` |
| `Match2` | `public TournamentMatchVM Match2 { get; set; }` |
| `Match3` | `public TournamentMatchVM Match3 { get; set; }` |
| `Match4` | `public TournamentMatchVM Match4 { get; set; }` |
| `Match5` | `public TournamentMatchVM Match5 { get; set; }` |
| `Match6` | `public TournamentMatchVM Match6 { get; set; }` |
| `Match7` | `public TournamentMatchVM Match7 { get; set; }` |
| `Match8` | `public TournamentMatchVM Match8 { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TournamentRoundVM 实例
TournamentRoundVM tournamentRoundVM = ...;
tournamentRoundVM.RefreshValues();
```

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 TournamentRoundVM 实例
TournamentRoundVM tournamentRoundVM = ...;
tournamentRoundVM.Initialize();
```

### Initialize
`public void Initialize(TournamentRound round, TextObject name)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 TournamentRoundVM 实例
TournamentRoundVM tournamentRoundVM = ...;
tournamentRoundVM.Initialize(round, name);
```

### GetParticipants
`public IEnumerable<TournamentParticipantVM> GetParticipants()`

**用途 / Purpose:** 读取并返回当前对象中 「participants」 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentRoundVM 实例
TournamentRoundVM tournamentRoundVM = ...;
var result = tournamentRoundVM.GetParticipants();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TournamentRoundVM tournamentRoundVM = ...;
tournamentRoundVM.RefreshValues();
```

## 参见

- [本区域目录](../)