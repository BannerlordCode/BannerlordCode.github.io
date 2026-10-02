---
title: "ITournamentGameBehavior"
description: "ITournamentGameBehavior：SandBox 的 public 接口；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 SandBox/Tournaments/ITournamentGameBehavior.cs。"
---
# ITournamentGameBehavior

**Namespace:** `SandBox.Tournaments`
**Module:** `SandBox`
**Type:** `public interface ITournamentGameBehavior`
**File:** `SandBox/Tournaments/ITournamentGameBehavior.cs`

## 概述

ITournamentGameBehavior 位于 SandBox 模块，源文件 SandBox/Tournaments/ITournamentGameBehavior.cs。它是一个 public 接口，继承链为 ITournamentGameBehavior。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ITournamentGameBehavior 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Tournaments），继承链 ITournamentGameBehavior。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Tournaments/ITournamentGameBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StartMatch` | `void StartMatch(TournamentMatch match, bool isLastRound);` | 方法 |
| `SkipMatch` | `void SkipMatch(TournamentMatch match);` | 方法 |
| `IsMatchEnded` | `bool IsMatchEnded();` | 方法 |
| `OnMatchEnded` | `void OnMatchEnded();` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 TournamentMissionStarter](../TournamentMissionStarter)
