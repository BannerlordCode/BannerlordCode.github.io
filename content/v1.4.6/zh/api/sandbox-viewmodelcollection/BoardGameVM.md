---
title: "BoardGameVM"
description: "BoardGameVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 20 个（方法 8、属性 11、字段 0）。源文件 SandBox.ViewModelCollection/BoardGame/BoardGameVM.cs。"
---
# BoardGameVM

**Namespace:** `SandBox.ViewModelCollection.BoardGame`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class BoardGameVM : ViewModel`
**File:** `SandBox.ViewModelCollection/BoardGame/BoardGameVM.cs`

## 概述

BoardGameVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/BoardGame/BoardGameVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 BoardGameVM → ViewModel。public/protected 成员共 20 个：8 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BoardGameVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.BoardGame），继承链 BoardGameVM → ViewModel。成员构成以属性为主（属性 11/20，方法 8/20），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/BoardGame/BoardGameVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BoardGameVM` | `public BoardGameVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Activate` | `public void Activate()` | 方法 |
| `DiceRoll` | `public void DiceRoll(int roll)` | 方法 |
| `SwitchTurns` | `public void SwitchTurns()` | 方法 |
| `ExecuteRoll` | `public void ExecuteRoll()` | 方法 |
| `ExecuteForfeit` | `public void ExecuteForfeit()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Instructions` | `public BoardGameInstructionsVM Instructions` | 属性 |
| `CanRoll` | `public bool CanRoll` | 属性 |
| `IsPlayersTurn` | `public bool IsPlayersTurn` | 属性 |
| `IsGameUsingDice` | `public bool IsGameUsingDice` | 属性 |
| `DiceResult` | `public string DiceResult` | 属性 |
| `RollDiceText` | `public string RollDiceText` | 属性 |
| `TurnOwnerText` | `public string TurnOwnerText` | 属性 |
| `BoardGameType` | `public string BoardGameType` | 属性 |
| `CloseText` | `public string CloseText` | 属性 |
| `ForfeitText` | `public string ForfeitText` | 属性 |
| `SetRollDiceKey` | `public void SetRollDiceKey(HotKey key)` | 方法 |
| `RollDiceKey` | `public InputKeyItemVM RollDiceKey` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BoardGameInstructionsVM](../BoardGameInstructionsVM)
- [同命名空间 BoardGameInstructionVM](../BoardGameInstructionVM)
