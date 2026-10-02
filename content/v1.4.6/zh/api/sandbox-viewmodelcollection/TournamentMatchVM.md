---
title: "TournamentMatchVM"
description: "TournamentMatchVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 19 个（方法 7、属性 10、字段 0）。源文件 SandBox.ViewModelCollection/Tournament/TournamentMatchVM.cs。"
---
# TournamentMatchVM

**Namespace:** `SandBox.ViewModelCollection.Tournament`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TournamentMatchVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Tournament/TournamentMatchVM.cs`

## 概述

TournamentMatchVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Tournament/TournamentMatchVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TournamentMatchVM → ViewModel。public/protected 成员共 19 个：7 方法、10 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentMatchVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Tournament），继承链 TournamentMatchVM → ViewModel。成员构成以属性为主（属性 10/19，方法 7/19），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Tournament/TournamentMatchVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Match` | `public TournamentMatch Match` | 属性 |
| `List` | `public List<TournamentTeamVM>Teams` | 属性 |
| `TournamentMatchVM` | `public TournamentMatchVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Initialize` | `public void Initialize()` | 方法 |
| `Initialize` | `public void Initialize(TournamentMatch match)` | 方法 |
| `Refresh` | `public void Refresh(bool forceRefresh)` | 方法 |
| `RefreshActiveMatch` | `public void RefreshActiveMatch()` | 方法 |
| `Refresh` | `public void Refresh(TournamentMatchVM target)` | 方法 |
| `IEnumerable` | `public IEnumerable<TournamentParticipantVM>GetParticipants()` | 方法 |
| `IsValid` | `public bool IsValid` | 属性 |
| `State` | `public int State` | 属性 |
| `Count` | `public int Count` | 属性 |
| `Team1` | `public TournamentTeamVM Team1` | 属性 |
| `Team2` | `public TournamentTeamVM Team2` | 属性 |
| `Team3` | `public TournamentTeamVM Team3` | 属性 |
| `Team4` | `public TournamentTeamVM Team4` | 属性 |
| `TournamentMatchState` | `public enum TournamentMatchState` | 属性 |
| `TournamentMatchState` | `public enum TournamentMatchState` | 嵌套类型 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 TournamentParticipantVM](../TournamentParticipantVM)
- [同命名空间 TournamentRoundVM](../TournamentRoundVM)
- [同命名空间 TournamentTeamVM](../TournamentTeamVM)
- [同命名空间 TournamentVM](../TournamentVM)
