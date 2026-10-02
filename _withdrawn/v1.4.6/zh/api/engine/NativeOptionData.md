---
title: "NativeOptionData"
description: "NativeOptionData：TaleWorlds.Engine.Options 的 public 类，继承 IOptionData；公开成员 9 个（方法 8、属性 0、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/Options/NativeOptionData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NativeOptionData

**Namespace:** `TaleWorlds.Engine.Options`
**Module:** `TaleWorlds.Engine`
**Type:** `public abstract class NativeOptionData : IOptionData`
**File:** `TaleWorlds.Engine/Options/NativeOptionData.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

NativeOptionData 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Options/NativeOptionData.cs。它是一个 public 类（abstract），实现/继承 IOptionData，继承链为 NativeOptionData → IOptionData。public/protected 成员共 9 个：8 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NativeOptionData 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine.Options`，继承链 NativeOptionData → IOptionData。成员构成以方法为主（方法 8/9，属性 0/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Options/NativeOptionData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NativeOptionData` | `protected NativeOptionData(NativeOptions.NativeOptionsType type)` | 构造函数 |
| `GetDefaultValue` | `public virtual float GetDefaultValue()` | 方法 |
| `Commit` | `public void Commit()` | 方法 |
| `GetValue` | `public float GetValue(bool forceRefresh)` | 方法 |
| `SetValue` | `public void SetValue(float value)` | 方法 |
| `GetOptionType` | `public object GetOptionType()` | 方法 |
| `IsNative` | `public bool IsNative()` | 方法 |
| `IsAction` | `public bool IsAction()` | 方法 |
| `bool>GetIsDisabledAndReasonID` | `public ValueTuple<string, bool>GetIsDisabledAndReasonID()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IOptionData](../IOptionData/)
- [同命名空间 IBooleanOptionData](../IBooleanOptionData/)
- [同命名空间 INumericOptionData](../INumericOptionData/)
- [同命名空间 IOptionData](../IOptionData/)
- [同命名空间 ISelectionOptionData](../ISelectionOptionData/)
