---
title: "ActionOptionData"
description: "ActionOptionData：TaleWorlds.MountAndBlade.Options 的 public 类，继承 IOptionData；公开成员 12 个（方法 8、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Options/ActionOptionData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ActionOptionData

**Namespace:** `TaleWorlds.MountAndBlade.Options`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ActionOptionData : IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ActionOptionData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ActionOptionData 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Options/ActionOptionData.cs。它是一个 public 类，实现/继承 IOptionData，继承链为 ActionOptionData → IOptionData。public/protected 成员共 12 个：8 方法、1 属性、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ActionOptionData 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Options`，继承链 ActionOptionData → IOptionData。成员构成以方法为主（方法 8/12，属性 1/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Options/ActionOptionData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnAction` | `public Action OnAction` | 属性 |
| `ActionOptionData` | `public ActionOptionData(ManagedOptions.ManagedOptionsType managedType, Action onAction)` | 构造函数 |
| `ActionOptionData` | `public ActionOptionData(NativeOptions.NativeOptionsType nativeType, Action onAction)` | 构造函数 |
| `ActionOptionData` | `public ActionOptionData(string optionTypeId, Action onAction)` | 构造函数 |
| `Commit` | `public void Commit()` | 方法 |
| `GetDefaultValue` | `public float GetDefaultValue()` | 方法 |
| `GetOptionType` | `public object GetOptionType()` | 方法 |
| `GetValue` | `public float GetValue(bool forceRefresh)` | 方法 |
| `IsNative` | `public bool IsNative()` | 方法 |
| `SetValue` | `public void SetValue(float value)` | 方法 |
| `IsAction` | `public bool IsAction()` | 方法 |
| `bool>GetIsDisabledAndReasonID` | `public ValueTuple<string, bool>GetIsDisabledAndReasonID()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IOptionData](../../engine/IOptionData/)
- [同命名空间 OptionCategory](../OptionCategory/)
- [同命名空间 OptionGroup](../OptionGroup/)
- [同命名空间 OptionsProvider](../OptionsProvider/)
