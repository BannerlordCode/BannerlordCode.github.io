---
title: "GameOverVM"
description: "GameOverVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 13 个（方法 4、属性 8、字段 0）。源文件 SandBox.ViewModelCollection/GameOver/GameOverVM.cs。"
---
# GameOverVM

**Namespace:** `SandBox.ViewModelCollection.GameOver`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class GameOverVM : ViewModel`
**File:** `SandBox.ViewModelCollection/GameOver/GameOverVM.cs`

## 概述

GameOverVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/GameOver/GameOverVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GameOverVM → ViewModel。public/protected 成员共 13 个：4 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameOverVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.GameOver），继承链 GameOverVM → ViewModel。成员构成以属性为主（属性 8/13，方法 4/13），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/GameOver/GameOverVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameOverVM` | `public GameOverVM(GameOverState.GameOverReason reason, Action onClose)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteClose` | `public void ExecuteClose()` | 方法 |
| `SetCloseInputKey` | `public void SetCloseInputKey(HotKey hotKey)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `CloseText` | `public string CloseText` | 属性 |
| `StatisticsTitle` | `public string StatisticsTitle` | 属性 |
| `ReasonAsString` | `public string ReasonAsString` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | 属性 |
| `IsPositiveGameOver` | `public bool IsPositiveGameOver` | 属性 |
| `CloseInputKey` | `public InputKeyItemVM CloseInputKey` | 属性 |
| `MBBindingList` | `public MBBindingList<GameOverStatCategoryVM>Categories` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GameOverStatCategoryVM](../GameOverStatCategoryVM)
- [同命名空间 GameOverStatItemVM](../GameOverStatItemVM)
- [同命名空间 GameOverStatsProvider](../GameOverStatsProvider)
- [同命名空间 StatCategory](../StatCategory)
