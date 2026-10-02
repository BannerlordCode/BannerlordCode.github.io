---
title: "TournamentParticipantVM"
description: "TournamentParticipantVM：SandBox.ViewModelCollection.Tournament 的 public 类，继承 ViewModel；公开成员 19 个（方法 4、属性 13、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Tournament/TournamentParticipantVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentParticipantVM

**Namespace:** `SandBox.ViewModelCollection.Tournament`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TournamentParticipantVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Tournament/TournamentParticipantVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

TournamentParticipantVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Tournament/TournamentParticipantVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TournamentParticipantVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 19 个：4 方法、13 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentParticipantVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Tournament`，继承链 TournamentParticipantVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 13/19，方法 4/19），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Tournament/TournamentParticipantVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Participant` | `public TournamentParticipant Participant` | 属性 |
| `TournamentParticipantVM` | `public TournamentParticipantVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Refresh` | `public void Refresh(TournamentParticipant participant, Color teamColor)` | 方法 |
| `ExecuteOpenEncyclopedia` | `public void ExecuteOpenEncyclopedia()` | 方法 |
| `Refresh` | `public void Refresh()` | 方法 |
| `IsInitialized` | `public bool IsInitialized` | 属性 |
| `IsValid` | `public bool IsValid` | 属性 |
| `IsDead` | `public bool IsDead` | 属性 |
| `IsMainHero` | `public bool IsMainHero` | 属性 |
| `TeamColor` | `public Color TeamColor` | 属性 |
| `Visual` | `public CharacterImageIdentifierVM Visual` | 属性 |
| `State` | `public int State` | 属性 |
| `IsQualifiedForNextRound` | `public bool IsQualifiedForNextRound` | 属性 |
| `Score` | `public string Score` | 属性 |
| `Name` | `public string Name` | 属性 |
| `Character` | `public CharacterViewModel Character` | 属性 |
| `TournamentPlayerState` | `public enum TournamentPlayerState` | 属性 |
| `TournamentPlayerState` | `public enum TournamentPlayerState` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 TournamentMatchVM](../TournamentMatchVM/)
- [同命名空间 TournamentRoundVM](../TournamentRoundVM/)
- [同命名空间 TournamentTeamVM](../TournamentTeamVM/)
- [同命名空间 TournamentVM](../TournamentVM/)
