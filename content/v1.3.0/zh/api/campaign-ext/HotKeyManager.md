---
title: "HotKeyManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HotKeyManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `hot key id` 的当前值。

### GetHotKeyId
`public static string GetHotKeyId(string categoryName, int hotKeyId)`

**用途 / Purpose:** 获取 `hot key id` 的当前值。

### GetCategory
`public static GameKeyContext GetCategory(string categoryName)`

**用途 / Purpose:** 获取 `category` 的当前值。

### GetAllCategories
`public static Dictionary<string, GameKeyContext>.ValueCollection GetAllCategories()`

**用途 / Purpose:** 获取 `all categories` 的当前值。

### Tick
`public static void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### Initialize
`public static void Initialize(PlatformFilePath savePath, bool isRDownSwappedWithRRight)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### RegisterInitialContexts
`public static void RegisterInitialContexts(IEnumerable<GameKeyContext> contexts, bool loadKeys)`

**用途 / Purpose:** 处理 `register initial contexts` 相关逻辑。

### RegisterContext
`public static void RegisterContext(GameKeyContext context, bool ignoreSerialize = false, bool loadKeys = false)`

**用途 / Purpose:** 处理 `register context` 相关逻辑。

### ShouldNotifyDocumentVersionDifferent
`public static bool ShouldNotifyDocumentVersionDifferent()`

**用途 / Purpose:** 处理 `should notify document version different` 相关逻辑。

### Reset
`public static void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### LoadAsync
`public static async void LoadAsync()`

**用途 / Purpose:** 加载 `async` 数据。

### SaveAsync
`public static async void SaveAsync(bool throwEvent)`

**用途 / Purpose:** 保存 `async` 数据。

### OnKeybindsChangedEvent
`public delegate void OnKeybindsChangedEvent()`

**用途 / Purpose:** 当 `keybinds changed event` 事件触发时调用此方法。

## 使用示例

```csharp
var manager = HotKeyManager.Current;
```

## 参见

- [完整类目录](../catalog)