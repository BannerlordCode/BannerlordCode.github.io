---
title: "SPOrderOfBattleVM"
description: "SPOrderOfBattleVM：SandBox.ViewModelCollection 的 public 类，继承 OrderOfBattleVM；公开成员 4 个（方法 3、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/SPOrderOfBattleVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPOrderOfBattleVM

**Namespace:** `SandBox.ViewModelCollection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SPOrderOfBattleVM : OrderOfBattleVM`
**File:** `SandBox.ViewModelCollection/SPOrderOfBattleVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SPOrderOfBattleVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/SPOrderOfBattleVM.cs。它是一个 public 类，实现/继承 OrderOfBattleVM，继承链为 SPOrderOfBattleVM → OrderOfBattleVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 4 个：3 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SPOrderOfBattleVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection`，继承链 SPOrderOfBattleVM → OrderOfBattleVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 3/4，属性 0/4），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/SPOrderOfBattleVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPOrderOfBattleVM` | `public SPOrderOfBattleVM()` | 构造函数 |
| `LoadConfiguration` | `protected override void LoadConfiguration()` | 方法 |
| `SaveConfiguration` | `protected override void SaveConfiguration()` | 方法 |
| `List` | `protected override List<TooltipProperty>GetAgentTooltip(Agent agent)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 OrderOfBattleVM](../../viewmodel/OrderOfBattleVM/)
- [同命名空间 PerkObjectComparer](../PerkObjectComparer/)
- [同命名空间 SandBoxUIHelper](../SandBoxUIHelper/)
- [同命名空间 SPScoreboardVM](../SPScoreboardVM/)
- [同命名空间 TournamentRewardVM](../TournamentRewardVM/)
