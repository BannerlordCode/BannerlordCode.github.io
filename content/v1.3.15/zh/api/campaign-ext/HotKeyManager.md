---
title: "HotKeyManager"
description: "HotKeyManager 的自动生成类参考。"
---
# HotKeyManager

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public static class HotKeyManager`
**Base:** 无
**File:** `TaleWorlds.InputSystem/HotKeyManager.cs`

## 概述

`HotKeyManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `HotKeyManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetHotKeyId
`public static string GetHotKeyId(string categoryName, string hotKeyId)`

**用途 / Purpose:** 读取并返回当前对象中 hot key id 的结果。

```csharp
// 静态调用，不需要实例
HotKeyManager.GetHotKeyId("example", "example");
```

### GetHotKeyId
`public static string GetHotKeyId(string categoryName, int hotKeyId)`

**用途 / Purpose:** 读取并返回当前对象中 hot key id 的结果。

```csharp
// 静态调用，不需要实例
HotKeyManager.GetHotKeyId("example", 0);
```

### GetCategory
`public static GameKeyContext GetCategory(string categoryName)`

**用途 / Purpose:** 读取并返回当前对象中 category 的结果。

```csharp
// 静态调用，不需要实例
HotKeyManager.GetCategory("example");
```

### GetAllCategories
`public static Dictionary<string, GameKeyContext>.ValueCollection GetAllCategories()`

**用途 / Purpose:** 读取并返回当前对象中 all categories 的结果。

```csharp
// 静态调用，不需要实例
HotKeyManager.GetAllCategories();
```

### Tick
`public static void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 静态调用，不需要实例
HotKeyManager.Tick(0);
```

### Initialize
`public static void Initialize(PlatformFilePath savePath, bool isRDownSwappedWithRRight)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 静态调用，不需要实例
HotKeyManager.Initialize(savePath, false);
```

### RegisterInitialContexts
`public static void RegisterInitialContexts(IEnumerable<GameKeyContext> contexts, bool loadKeys)`

**用途 / Purpose:** 将initial contexts注册到当前系统，以便后续监听或分发。

```csharp
// 静态调用，不需要实例
HotKeyManager.RegisterInitialContexts(contexts, false);
```

### RegisterContext
`public static void RegisterContext(GameKeyContext context, bool ignoreSerialize = false, bool loadKeys = false)`

**用途 / Purpose:** 将context注册到当前系统，以便后续监听或分发。

```csharp
// 静态调用，不需要实例
HotKeyManager.RegisterContext(context, false, false);
```

### ShouldNotifyDocumentVersionDifferent
`public static bool ShouldNotifyDocumentVersionDifferent()`

**用途 / Purpose:** 调用 ShouldNotifyDocumentVersionDifferent 对应的操作。

```csharp
// 静态调用，不需要实例
HotKeyManager.ShouldNotifyDocumentVersionDifferent();
```

### Reset
`public static void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 静态调用，不需要实例
HotKeyManager.Reset();
```

### LoadAsync
`public static void LoadAsync()`

**用途 / Purpose:** 从持久化存储或流中读取 async。

```csharp
// 静态调用，不需要实例
HotKeyManager.LoadAsync();
```

### SaveAsync
`public static void SaveAsync(bool throwEvent)`

**用途 / Purpose:** 将 async 写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
HotKeyManager.SaveAsync(false);
```

### OnKeybindsChangedEvent
`public delegate void OnKeybindsChangedEvent()`

**用途 / Purpose:** 在 keybinds changed event 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HotKeyManager 实例
HotKeyManager hotKeyManager = ...;
hotKeyManager.OnKeybindsChangedEvent();
```

## 使用示例

```csharp
var manager = HotKeyManager.Current;
```

## 参见

- [本区域目录](../)