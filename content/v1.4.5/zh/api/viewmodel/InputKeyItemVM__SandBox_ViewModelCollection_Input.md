---
title: "InputKeyItemVM"
description: "InputKeyItemVM 的自动生成类参考。"
---
# InputKeyItemVM

**Namespace:** SandBox.ViewModelCollection.Input
**Module:** SandBox.ViewModelCollection
**Type:** `public class InputKeyItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Input/InputKeyItemVM.cs`

## 概述

`InputKeyItemVM` 位于 `SandBox.ViewModelCollection.Input`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Input` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameKey` | `public GameKey GameKey { get; }` |
| `HotKey` | `public HotKey HotKey { get; }` |
| `KeyID` | `public string KeyID { get; set; }` |
| `KeyName` | `public string KeyName { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |

## 主要方法

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 InputKeyItemVM 实例
InputKeyItemVM inputKeyItemVM = ...;
inputKeyItemVM.OnFinalize();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 InputKeyItemVM 实例
InputKeyItemVM inputKeyItemVM = ...;
inputKeyItemVM.RefreshValues();
```

### SetForcedVisibility
`public void SetForcedVisibility(bool? isVisible)`

**用途 / Purpose:** 为 forced visibility 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 InputKeyItemVM 实例
InputKeyItemVM inputKeyItemVM = ...;
inputKeyItemVM.SetForcedVisibility(false);
```

### CreateFromGameKey
`public static InputKeyItemVM CreateFromGameKey(GameKey gameKey, bool isConsoleOnly)`

**用途 / Purpose:** 构建一个新的 from game key 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
InputKeyItemVM.CreateFromGameKey(gameKey, false);
```

### CreateFromHotKey
`public static InputKeyItemVM CreateFromHotKey(HotKey hotKey, bool isConsoleOnly)`

**用途 / Purpose:** 构建一个新的 from hot key 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
InputKeyItemVM.CreateFromHotKey(hotKey, false);
```

### CreateFromHotKeyWithForcedName
`public static InputKeyItemVM CreateFromHotKeyWithForcedName(HotKey hotKey, TextObject forcedName, bool isConsoleOnly)`

**用途 / Purpose:** 构建一个新的 from hot key with forced name 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
InputKeyItemVM.CreateFromHotKeyWithForcedName(hotKey, forcedName, false);
```

### CreateFromGameKeyWithForcedName
`public static InputKeyItemVM CreateFromGameKeyWithForcedName(GameKey gameKey, TextObject forcedName, bool isConsoleOnly)`

**用途 / Purpose:** 构建一个新的 from game key with forced name 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
InputKeyItemVM.CreateFromGameKeyWithForcedName(gameKey, forcedName, false);
```

### CreateFromForcedID
`public static InputKeyItemVM CreateFromForcedID(string forcedID, TextObject forcedName, bool isConsoleOnly)`

**用途 / Purpose:** 构建一个新的 from forced i d 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
InputKeyItemVM.CreateFromForcedID("example", forcedName, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
InputKeyItemVM inputKeyItemVM = ...;
inputKeyItemVM.OnFinalize();
```

## 参见

- [本区域目录](../)