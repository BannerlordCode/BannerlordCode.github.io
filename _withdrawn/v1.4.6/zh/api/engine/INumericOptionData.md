---
title: "INumericOptionData"
description: "INumericOptionData：TaleWorlds.Engine.Options 的 public 接口，继承 IOptionData；公开成员 5 个（方法 5、属性 0、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/Options/INumericOptionData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# INumericOptionData

**Namespace:** `TaleWorlds.Engine.Options`
**Module:** `TaleWorlds.Engine`
**Type:** `public interface INumericOptionData : IOptionData`
**File:** `TaleWorlds.Engine/Options/INumericOptionData.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

INumericOptionData 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Options/INumericOptionData.cs。它是一个 public 接口，实现/继承 IOptionData，继承链为 INumericOptionData → IOptionData。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：INumericOptionData 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine.Options`，继承链 INumericOptionData → IOptionData。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Options/INumericOptionData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMinValue` | `float GetMinValue();` | 方法 |
| `GetMaxValue` | `float GetMaxValue();` | 方法 |
| `GetIsDiscrete` | `bool GetIsDiscrete();` | 方法 |
| `GetDiscreteIncrementInterval` | `int GetDiscreteIncrementInterval();` | 方法 |
| `GetShouldUpdateContinuously` | `bool GetShouldUpdateContinuously();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IOptionData](../IOptionData/)
- [同命名空间 IBooleanOptionData](../IBooleanOptionData/)
- [同命名空间 IOptionData](../IOptionData/)
- [同命名空间 ISelectionOptionData](../ISelectionOptionData/)
- [同命名空间 NativeBooleanOptionData](../NativeBooleanOptionData/)
