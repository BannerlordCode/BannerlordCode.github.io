---
title: "SPOrderOfBattleVM"
description: "SPOrderOfBattleVM：SandBox.ViewModelCollection 的 public 类，继承 OrderOfBattleVM；公开成员 4 个（方法 3、属性 0、字段 0）。源文件 SandBox.ViewModelCollection/SPOrderOfBattleVM.cs。"
---
# SPOrderOfBattleVM

**Namespace:** `SandBox.ViewModelCollection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SPOrderOfBattleVM : OrderOfBattleVM`
**File:** `SandBox.ViewModelCollection/SPOrderOfBattleVM.cs`

## 概述

SPOrderOfBattleVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/SPOrderOfBattleVM.cs。它是一个 public 类，实现/继承 OrderOfBattleVM，继承链为 SPOrderOfBattleVM → OrderOfBattleVM。public/protected 成员共 4 个：3 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SPOrderOfBattleVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录一致，继承链 SPOrderOfBattleVM → OrderOfBattleVM。成员构成以方法为主（方法 3/4，属性 0/4），对外主要以操作入口暴露。继承链上的 OrderOfBattleVM 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/SPOrderOfBattleVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPOrderOfBattleVM` | `public SPOrderOfBattleVM()` | 构造函数 |
| `LoadConfiguration` | `protected override void LoadConfiguration()` | 方法 |
| `SaveConfiguration` | `protected override void SaveConfiguration()` | 方法 |
| `List` | `protected override List<TooltipProperty>GetAgentTooltip(Agent agent)` | 方法 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 PerkObjectComparer](../PerkObjectComparer)
- [同命名空间 SandBoxUIHelper](../SandBoxUIHelper)
- [同命名空间 SPScoreboardVM](../SPScoreboardVM)
- [同命名空间 TournamentRewardVM](../TournamentRewardVM)
