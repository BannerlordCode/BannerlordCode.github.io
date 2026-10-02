---
title: "ManagedSelectionOptionData"
description: "ManagedSelectionOptionData：TaleWorlds.MountAndBlade.Options.ManagedOptions 的 public 类，继承 ManagedOptionData、ISelectionOptionData；公开成员 4 个（方法 3、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ManagedSelectionOptionData

**Namespace:** `TaleWorlds.MountAndBlade.Options.ManagedOptions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ManagedSelectionOptionData : ManagedOptionData, ISelectionOptionData, IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ManagedSelectionOptionData 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs。它是一个 public 类，实现/继承 ManagedOptionData、ISelectionOptionData、IOptionData，继承链为 ManagedSelectionOptionData → ManagedOptionData → IOptionData。public/protected 成员共 4 个：3 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ManagedSelectionOptionData 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Options.ManagedOptions`，继承链 ManagedSelectionOptionData → ManagedOptionData → IOptionData。成员构成以方法为主（方法 3/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ManagedSelectionOptionData` | `public ManagedSelectionOptionData(ManagedOptions.ManagedOptionsType type) : base(type)` | 构造函数 |
| `GetSelectableOptionsLimit` | `public int GetSelectableOptionsLimit()` | 方法 |
| `IEnumerable` | `public IEnumerable<SelectionData>GetSelectableOptionNames()` | 方法 |
| `GetOptionsLimit` | `public static int GetOptionsLimit(ManagedOptions.ManagedOptionsType optionType)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ManagedOptionData](../ManagedOptionData/)
- [基类/接口 ISelectionOptionData](../../engine/ISelectionOptionData/)
- [基类/接口 IOptionData](../../engine/IOptionData/)
- [同命名空间 ManagedBooleanOptionData](../ManagedBooleanOptionData/)
- [同命名空间 ManagedNumericOptionData](../ManagedNumericOptionData/)
- [同命名空间 ManagedOptionData](../ManagedOptionData/)
