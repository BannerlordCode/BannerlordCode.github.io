---
title: "TournamentRewardVM"
description: "TournamentRewardVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 5 个（方法 0、属性 3、字段 0）。源文件 SandBox.ViewModelCollection/TournamentRewardVM.cs。"
---
# TournamentRewardVM

**Namespace:** `SandBox.ViewModelCollection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TournamentRewardVM : ViewModel`
**File:** `SandBox.ViewModelCollection/TournamentRewardVM.cs`

## 概述

TournamentRewardVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/TournamentRewardVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TournamentRewardVM → ViewModel。public/protected 成员共 5 个：3 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentRewardVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录一致，继承链 TournamentRewardVM → ViewModel。成员构成以属性为主（属性 3/5，方法 0/5），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/TournamentRewardVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TournamentRewardVM` | `public TournamentRewardVM(string text)` | 构造函数 |
| `TournamentRewardVM` | `public TournamentRewardVM(string text, ItemImageIdentifierVM imageIdentifierVM)` | 构造函数 |
| `Text` | `public string Text` | 属性 |
| `GotImageIdentifier` | `public bool GotImageIdentifier` | 属性 |
| `ImageIdentifier` | `public ItemImageIdentifierVM ImageIdentifier` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 PerkObjectComparer](../PerkObjectComparer)
- [同命名空间 SandBoxUIHelper](../SandBoxUIHelper)
- [同命名空间 SPOrderOfBattleVM](../SPOrderOfBattleVM)
- [同命名空间 SPScoreboardVM](../SPScoreboardVM)
