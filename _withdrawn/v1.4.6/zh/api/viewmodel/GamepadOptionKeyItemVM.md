---
title: "GamepadOptionKeyItemVM"
description: "GamepadOptionKeyItemVM：TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions 的 public 类，继承 ViewModel；公开成员 10 个（方法 1、属性 6、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionKeyItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GamepadOptionKeyItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GamepadOptionKeyItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionKeyItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

GamepadOptionKeyItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionKeyItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GamepadOptionKeyItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 10 个：1 方法、6 属性、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GamepadOptionKeyItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions`，继承链 GamepadOptionKeyItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 6/10，方法 1/10），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionKeyItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GamepadKey` | `public GameKey GamepadKey` | 属性 |
| `GamepadHotKey` | `public HotKey GamepadHotKey` | 属性 |
| `Key` | `public InputKey? Key` | 属性 |
| `GamepadOptionKeyItemVM` | `public GamepadOptionKeyItemVM(GameKey gamepadGameKey)` | 构造函数 |
| `GamepadOptionKeyItemVM` | `public GamepadOptionKeyItemVM(HotKey gamepadHotKey)` | 构造函数 |
| `GamepadOptionKeyItemVM` | `public GamepadOptionKeyItemVM(InputKey key, TextObject name)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Action` | `public string Action` | 属性 |
| `KeyId` | `public int KeyId` | 属性 |
| `KeyIdAsString` | `public string KeyIdAsString` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 GamepadOptionCategoryVM](../GamepadOptionCategoryVM/)
