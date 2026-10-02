---
title: "HotKeyManager"
description: "HotKeyManager：TaleWorlds.InputSystem 的 public 类；公开成员 14 个（方法 12、属性 0、字段 0）。源文件 TaleWorlds.InputSystem/HotKeyManager.cs。"
---
# HotKeyManager

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public static class HotKeyManager`
**File:** `TaleWorlds.InputSystem/HotKeyManager.cs`

## 概述

HotKeyManager 位于 TaleWorlds.InputSystem 模块，源文件 TaleWorlds.InputSystem/HotKeyManager.cs。它是一个 public 类，继承链为 HotKeyManager。public/protected 成员共 14 个：12 方法、1 事件、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HotKeyManager 是 TaleWorlds.InputSystem 的顶层类型，命名空间与模块目录一致，继承链 HotKeyManager。成员构成以方法为主（方法 12/14，属性 0/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.InputSystem/HotKeyManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnKeybindsChanged;` | `public static event HotKeyManager.OnKeybindsChangedEvent OnKeybindsChanged;` | 事件 |
| `GetHotKeyId` | `public static string GetHotKeyId(string categoryName, string hotKeyId)` | 方法 |
| `GetHotKeyId` | `public static string GetHotKeyId(string categoryName, int hotKeyId)` | 方法 |
| `GetCategory` | `public static GameKeyContext GetCategory(string categoryName)` | 方法 |
| `GetAllCategories` | `public static Dictionary<string, GameKeyContext>.ValueCollection GetAllCategories()` | 方法 |
| `Tick` | `public static void Tick(float dt)` | 方法 |
| `Initialize` | `public static void Initialize(PlatformFilePath savePath, bool isRDownSwappedWithRRight)` | 方法 |
| `RegisterInitialContexts` | `public static void RegisterInitialContexts(IEnumerable<GameKeyContext>contexts)` | 方法 |
| `RegisterContext` | `public static void RegisterContext(GameKeyContext context, bool ignoreSerialize = false)` | 方法 |
| `ShouldNotifyDocumentVersionDifferent` | `public static bool ShouldNotifyDocumentVersionDifferent()` | 方法 |
| `Reset` | `public static void Reset()` | 方法 |
| `MarkForSave` | `public static void MarkForSave()` | 方法 |
| `OnKeybindsChangedEvent` | `public delegate void OnKeybindsChangedEvent();` | 方法 |
| `OnKeybindsChangedEvent` | `public delegate void OnKeybindsChangedEvent()` | 嵌套类型 |

## 参见

- [↑ inputsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EmptyInputContext](../EmptyInputContext)
- [同命名空间 GameAxisKey](../GameAxisKey)
- [同命名空间 GameKey](../GameKey)
- [同命名空间 GameKeyContext](../GameKeyContext)
