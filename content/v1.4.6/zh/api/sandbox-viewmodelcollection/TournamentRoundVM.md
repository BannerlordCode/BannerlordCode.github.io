---
title: "TournamentRoundVM"
description: "TournamentRoundVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 18 个（方法 4、属性 13、字段 0）。源文件 SandBox.ViewModelCollection/Tournament/TournamentRoundVM.cs。"
---
# TournamentRoundVM

**Namespace:** `SandBox.ViewModelCollection.Tournament`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TournamentRoundVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Tournament/TournamentRoundVM.cs`

## 概述

TournamentRoundVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Tournament/TournamentRoundVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TournamentRoundVM → ViewModel。public/protected 成员共 18 个：4 方法、13 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentRoundVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Tournament），继承链 TournamentRoundVM → ViewModel。成员构成以属性为主（属性 13/18，方法 4/18），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Tournament/TournamentRoundVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Round` | `public TournamentRound Round` | 属性 |
| `List` | `public List<TournamentMatchVM>Matches` | 属性 |
| `TournamentRoundVM` | `public TournamentRoundVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `IsValid` | `public bool IsValid` | 属性 |
| `Name` | `public string Name` | 属性 |
| `Count` | `public int Count` | 属性 |
| `Match1` | `public TournamentMatchVM Match1` | 属性 |
| `Match2` | `public TournamentMatchVM Match2` | 属性 |
| `Match3` | `public TournamentMatchVM Match3` | 属性 |
| `Match4` | `public TournamentMatchVM Match4` | 属性 |
| `Match5` | `public TournamentMatchVM Match5` | 属性 |
| `Match6` | `public TournamentMatchVM Match6` | 属性 |
| `Match7` | `public TournamentMatchVM Match7` | 属性 |
| `Match8` | `public TournamentMatchVM Match8` | 属性 |
| `Initialize` | `public void Initialize()` | 方法 |
| `Initialize` | `public void Initialize(TournamentRound round, TextObject name)` | 方法 |
| `IEnumerable` | `public IEnumerable<TournamentParticipantVM>GetParticipants()` | 方法 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 TournamentMatchVM](../TournamentMatchVM)
- [同命名空间 TournamentParticipantVM](../TournamentParticipantVM)
- [同命名空间 TournamentTeamVM](../TournamentTeamVM)
- [同命名空间 TournamentVM](../TournamentVM)
