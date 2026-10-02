---
title: "GameKeyOptionVM"
description: "GameKeyOptionVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 KeyOptionVM；公开成员 8 个（方法 6、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionVM.cs。"
---
# GameKeyOptionVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GameKeyOptionVM : KeyOptionVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionVM.cs`

## 概述

GameKeyOptionVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionVM.cs。它是一个 public 类，实现/继承 KeyOptionVM，继承链为 GameKeyOptionVM → KeyOptionVM → ViewModel。public/protected 成员共 8 个：6 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameKeyOptionVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys），继承链 GameKeyOptionVM → KeyOptionVM → ViewModel。成员构成以方法为主（方法 6/8，属性 1/8），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentGameKey` | `public GameKey CurrentGameKey` | 属性 |
| `GameKeyOptionVM` | `public GameKeyOptionVM(GameKey gameKey, Action<KeyOptionVM>onKeybindRequest, Action<GameKeyOptionVM, InputKey>onKeySet, Func<GameKeyOptionVM, string>getExtraInformation) : base(gameKey.GroupId, ((GameKeyDefinition)gameKey.Id).ToString(), onKeybindRequest)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Set` | `public override void Set(InputKey newKey)` | 方法 |
| `Update` | `public override void Update()` | 方法 |
| `OnDone` | `public override void OnDone()` | 方法 |
| `ExecuteRevert` | `public override void ExecuteRevert()` | 方法 |
| `Apply` | `public void Apply()` | 方法 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 KeyOptionVM](../KeyOptionVM)
- [同命名空间 GameKeyGroupVM](../GameKeyGroupVM)
- [同命名空间 GameKeyOptionCategoryVM](../GameKeyOptionCategoryVM)
