---
title: "HotKeyManager"
description: "Auto-generated class reference for HotKeyManager."
---
# HotKeyManager

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public static class HotKeyManager `
**Base:** System.Object
**Source:** TaleWorlds.InputSystem/HotKeyManager.cs

## Overview

Auto-generated stub for `HotKeyManager`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetHotKeyId
`public static string GetHotKeyId(string categoryName,string hotKeyId)`

### GetCategory
`public static GameKeyContext GetCategory(string categoryName)`

### GetAllCategories
`public static Dictionary<string,GameKeyContext>.ValueCollection GetAllCategories()`

### Tick
`public static void Tick(float dt)`

### Initialize
`public static void Initialize(PlatformFilePath savePath,bool isRDownSwappedWithRRight)`

### RegisterInitialContexts
`public static void RegisterInitialContexts(IEnumerable<GameKeyContext> contexts)`

### RegisterContext
`public static void RegisterContext(GameKeyContext context,bool ignoreSerialize = false)`

### ShouldNotifyDocumentVersionDifferent
`public static bool ShouldNotifyDocumentVersionDifferent()`

### Reset
`public static void Reset()`

### MarkForSave
`public static void MarkForSave()`

### OnKeybindsChangedEvent
`public delegate void OnKeybindsChangedEvent()`

## See Also

- [Section index](../)
