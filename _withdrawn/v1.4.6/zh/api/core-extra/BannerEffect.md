---
title: "BannerEffect"
description: "BannerEffect：TaleWorlds.Core 的 public 类，继承 PropertyObject；公开成员 7 个（方法 5、属性 1、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/BannerEffect.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerEffect

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class BannerEffect : PropertyObject`
**File:** `TaleWorlds.Core/BannerEffect.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

BannerEffect 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/BannerEffect.cs。它是一个 public 类（sealed），实现/继承 PropertyObject，继承链为 BannerEffect → PropertyObject → MBObjectBase。public/protected 成员共 7 个：5 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerEffect 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 BannerEffect → PropertyObject → MBObjectBase。成员构成以方法为主（方法 5/7，属性 1/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/BannerEffect.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IncrementType` | `public EffectIncrementType IncrementType` | 属性 |
| `BannerEffect` | `public BannerEffect(string stringId) : base(stringId)` | 构造函数 |
| `Initialize` | `public void Initialize(string name, string description, float level1Bonus, float level2Bonus, float level3Bonus, EffectIncrementType incrementType)` | 方法 |
| `GetBonusAtLevel` | `public float GetBonusAtLevel(int bannerLevel)` | 方法 |
| `GetBonusStringAtLevel` | `public string GetBonusStringAtLevel(int bannerLevel)` | 方法 |
| `GetDescription` | `public TextObject GetDescription(int bannerLevel)` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 PropertyObject](../PropertyObject/)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
