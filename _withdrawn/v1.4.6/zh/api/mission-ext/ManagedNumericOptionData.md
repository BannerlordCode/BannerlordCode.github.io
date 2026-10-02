---
title: "ManagedNumericOptionData"
description: "ManagedNumericOptionData：TaleWorlds.MountAndBlade.Options.ManagedOptions 的 public 类，继承 ManagedOptionData、INumericOptionData；公开成员 6 个（方法 5、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedNumericOptionData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ManagedNumericOptionData

**Namespace:** `TaleWorlds.MountAndBlade.Options.ManagedOptions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ManagedNumericOptionData : ManagedOptionData, INumericOptionData, IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedNumericOptionData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ManagedNumericOptionData 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedNumericOptionData.cs。它是一个 public 类，实现/继承 ManagedOptionData、INumericOptionData、IOptionData，继承链为 ManagedNumericOptionData → ManagedOptionData → IOptionData。public/protected 成员共 6 个：5 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ManagedNumericOptionData 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Options.ManagedOptions`，继承链 ManagedNumericOptionData → ManagedOptionData → IOptionData。成员构成以方法为主（方法 5/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedNumericOptionData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ManagedNumericOptionData` | `public ManagedNumericOptionData(ManagedOptions.ManagedOptionsType type) : base(type)` | 构造函数 |
| `GetMinValue` | `public float GetMinValue()` | 方法 |
| `GetMaxValue` | `public float GetMaxValue()` | 方法 |
| `GetIsDiscrete` | `public bool GetIsDiscrete()` | 方法 |
| `GetDiscreteIncrementInterval` | `public int GetDiscreteIncrementInterval()` | 方法 |
| `GetShouldUpdateContinuously` | `public bool GetShouldUpdateContinuously()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ManagedOptionData](../ManagedOptionData/)
- [基类/接口 INumericOptionData](../../engine/INumericOptionData/)
- [基类/接口 IOptionData](../../engine/IOptionData/)
- [同命名空间 ManagedBooleanOptionData](../ManagedBooleanOptionData/)
- [同命名空间 ManagedOptionData](../ManagedOptionData/)
- [同命名空间 ManagedSelectionOptionData](../ManagedSelectionOptionData/)
