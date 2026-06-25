---
title: "TournamentRoundVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentRoundVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentRoundVM

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public class TournamentRoundVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Tournament/TournamentRoundVM.cs`

## 概述

`TournamentRoundVM` 位于 `SandBox.ViewModelCollection.Tournament`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Tournament` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Round` | `public TournamentRound Round { get; }` |
| `Matches` | `public List<TournamentMatchVM> Matches { get; set; }` |
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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Initialize
`public void Initialize(TournamentRound round, TextObject name)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### GetParticipants
`public IEnumerable<TournamentParticipantVM> GetParticipants()`

**用途 / Purpose:** 获取 `participants` 的当前值。

## 使用示例

```csharp
var value = new TournamentRoundVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)