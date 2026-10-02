---
title: "GamepadNavigationForcedScopeCollection"
description: "GamepadNavigationForcedScopeCollection：TaleWorlds.GauntletUI 的 public 类；公开成员 14 个（方法 5、属性 8、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationForcedScopeCollection.cs。"
---
# GamepadNavigationForcedScopeCollection

**Namespace:** `TaleWorlds.GauntletUI.GamepadNavigation`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class GamepadNavigationForcedScopeCollection`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationForcedScopeCollection.cs`

## 概述

GamepadNavigationForcedScopeCollection 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationForcedScopeCollection.cs。它是一个 public 类，继承链为 GamepadNavigationForcedScopeCollection。public/protected 成员共 14 个：5 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GamepadNavigationForcedScopeCollection 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.GamepadNavigation），继承链 GamepadNavigationForcedScopeCollection。成员构成以属性为主（属性 8/14，方法 5/14），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationForcedScopeCollection.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `IsDisabled` | `public bool IsDisabled` | 属性 |
| `CollectionID` | `public string CollectionID` | 属性 |
| `CollectionOrder` | `public int CollectionOrder` | 属性 |
| `ParentWidget` | `public Widget ParentWidget` | 属性 |
| `List` | `public List<GamepadNavigationScope>Scopes` | 属性 |
| `ActiveScope` | `public GamepadNavigationScope ActiveScope` | 属性 |
| `PreviousScope` | `public GamepadNavigationScope PreviousScope` | 属性 |
| `GamepadNavigationForcedScopeCollection` | `public GamepadNavigationForcedScopeCollection()` | 构造函数 |
| `IsAvailable` | `public bool IsAvailable()` | 方法 |
| `AddScope` | `public void AddScope(GamepadNavigationScope scope)` | 方法 |
| `RemoveScope` | `public void RemoveScope(GamepadNavigationScope scope)` | 方法 |
| `ClearScopes` | `public void ClearScopes()` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GamepadNavigationScope](../GamepadNavigationScope)
- [同命名空间 GamepadNavigationTypes](../GamepadNavigationTypes)
- [同命名空间 GauntletGamepadNavigationManager](../GauntletGamepadNavigationManager)
