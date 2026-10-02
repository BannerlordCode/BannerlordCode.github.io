---
title: "HotKeyManager"
description: "HotKeyManager 的自动生成类参考。"
---
# HotKeyManager

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public static class HotKeyManager `
**Base:** System.Object
**Source:** TaleWorlds.InputSystem/HotKeyManager.cs

## 概述

`HotKeyManager` 的自动生成类参考页面。声明来自 `TaleWorlds.InputSystem/HotKeyManager.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetHotKeyId
`public static string GetHotKeyId(string categoryName,string hotKeyId) `
`public static string GetHotKeyId(string categoryName,int hotKeyId) `

### GetCategory
`public static GameKeyContext GetCategory(string categoryName) `

### GetAllCategories
`public static Dictionary<string,GameKeyContext>.ValueCollection GetAllCategories() `

### Tick
`public static void Tick(float dt) `

### Initialize
`public static void Initialize(PlatformFilePath savePath,bool isRDownSwappedWithRRight) `

### RegisterInitialContexts
`public static void RegisterInitialContexts(IEnumerable<GameKeyContext> contexts) `

### RegisterContext
`public static void RegisterContext(GameKeyContext context,bool ignoreSerialize = false) `

### ShouldNotifyDocumentVersionDifferent
`public static bool ShouldNotifyDocumentVersionDifferent() `

### Reset
`public static void Reset() `

### MarkForSave
`public static void MarkForSave() `

### OnKeybindsChangedEvent
`public delegate void OnKeybindsChangedEvent()`

## 参见

- [本区域目录](../)
- [API 参考](../../)
