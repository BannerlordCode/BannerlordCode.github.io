---
title: "BoardGameInstructionsVM"
description: "BoardGameInstructionsVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 11 个（方法 3、属性 7、字段 0）。源文件 SandBox.ViewModelCollection/BoardGame/BoardGameInstructionsVM.cs。"
---
# BoardGameInstructionsVM

**Namespace:** `SandBox.ViewModelCollection.BoardGame`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class BoardGameInstructionsVM : ViewModel`
**File:** `SandBox.ViewModelCollection/BoardGame/BoardGameInstructionsVM.cs`

## 概述

BoardGameInstructionsVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/BoardGame/BoardGameInstructionsVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 BoardGameInstructionsVM → ViewModel。public/protected 成员共 11 个：3 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BoardGameInstructionsVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.BoardGame），继承链 BoardGameInstructionsVM → ViewModel。成员构成以属性为主（属性 7/11，方法 3/11），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/BoardGame/BoardGameInstructionsVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BoardGameInstructionsVM` | `public BoardGameInstructionsVM(CultureObject.BoardGameType boardGameType)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteShowPrevious` | `public void ExecuteShowPrevious()` | 方法 |
| `ExecuteShowNext` | `public void ExecuteShowNext()` | 方法 |
| `IsPreviousButtonEnabled` | `public bool IsPreviousButtonEnabled` | 属性 |
| `IsNextButtonEnabled` | `public bool IsNextButtonEnabled` | 属性 |
| `InstructionsText` | `public string InstructionsText` | 属性 |
| `PreviousText` | `public string PreviousText` | 属性 |
| `NextText` | `public string NextText` | 属性 |
| `CurrentPageText` | `public string CurrentPageText` | 属性 |
| `MBBindingList` | `public MBBindingList<BoardGameInstructionVM>InstructionList` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BoardGameInstructionVM](../BoardGameInstructionVM)
- [同命名空间 BoardGameVM](../BoardGameVM)
