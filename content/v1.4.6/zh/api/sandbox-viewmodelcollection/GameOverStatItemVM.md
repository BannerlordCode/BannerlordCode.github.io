---
title: "GameOverStatItemVM"
description: "GameOverStatItemVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 5 个（方法 1、属性 3、字段 0）。源文件 SandBox.ViewModelCollection/GameOver/GameOverStatItemVM.cs。"
---
# GameOverStatItemVM

**Namespace:** `SandBox.ViewModelCollection.GameOver`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class GameOverStatItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/GameOver/GameOverStatItemVM.cs`

## 概述

GameOverStatItemVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/GameOver/GameOverStatItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GameOverStatItemVM → ViewModel。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameOverStatItemVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.GameOver），继承链 GameOverStatItemVM → ViewModel。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/GameOver/GameOverStatItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameOverStatItemVM` | `public GameOverStatItemVM(StatItem item)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `DefinitionText` | `public string DefinitionText` | 属性 |
| `ValueText` | `public string ValueText` | 属性 |
| `StatTypeAsString` | `public string StatTypeAsString` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GameOverStatCategoryVM](../GameOverStatCategoryVM)
- [同命名空间 GameOverStatsProvider](../GameOverStatsProvider)
- [同命名空间 GameOverVM](../GameOverVM)
- [同命名空间 StatCategory](../StatCategory)
