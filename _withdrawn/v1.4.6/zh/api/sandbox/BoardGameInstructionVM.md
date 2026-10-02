---
title: "BoardGameInstructionVM"
description: "BoardGameInstructionVM：SandBox.ViewModelCollection.BoardGame 的 public 类，继承 ViewModel；公开成员 6 个（方法 1、属性 4、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/BoardGame/BoardGameInstructionVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoardGameInstructionVM

**Namespace:** `SandBox.ViewModelCollection.BoardGame`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class BoardGameInstructionVM : ViewModel`
**File:** `SandBox.ViewModelCollection/BoardGame/BoardGameInstructionVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

BoardGameInstructionVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/BoardGame/BoardGameInstructionVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 BoardGameInstructionVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 6 个：1 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BoardGameInstructionVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.BoardGame`，继承链 BoardGameInstructionVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 4/6，方法 1/6），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/BoardGame/BoardGameInstructionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BoardGameInstructionVM` | `public BoardGameInstructionVM(CultureObject.BoardGameType game, int instructionIndex)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `DescriptionText` | `public string DescriptionText` | 属性 |
| `GameType` | `public string GameType` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 BoardGameInstructionsVM](../BoardGameInstructionsVM/)
- [同命名空间 BoardGameVM](../BoardGameVM/)
