<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InputKeyItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InputKeyItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Input
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InputKeyItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Input/InputKeyItemVM.cs`

## 概述

`InputKeyItemVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Input`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Input` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### SetForcedVisibility
`public void SetForcedVisibility(bool? isVisible)`

**用途 / Purpose:** 设置 `forced visibility` 的值或状态。

### CreateFromGameKey
`public static InputKeyItemVM CreateFromGameKey(GameKey gameKey, bool isConsoleOnly)`

**用途 / Purpose:** 创建一个 `from game key` 实例或对象。

### CreateFromHotKey
`public static InputKeyItemVM CreateFromHotKey(HotKey hotKey, bool isConsoleOnly)`

**用途 / Purpose:** 创建一个 `from hot key` 实例或对象。

### CreateFromHotKeyWithForcedName
`public static InputKeyItemVM CreateFromHotKeyWithForcedName(HotKey hotKey, TextObject forcedName, bool isConsoleOnly)`

**用途 / Purpose:** 创建一个 `from hot key with forced name` 实例或对象。

### CreateFromGameKeyWithForcedName
`public static InputKeyItemVM CreateFromGameKeyWithForcedName(GameKey gameKey, TextObject forcedName, bool isConsoleOnly)`

**用途 / Purpose:** 创建一个 `from game key with forced name` 实例或对象。

### CreateFromForcedID
`public static InputKeyItemVM CreateFromForcedID(string forcedID, TextObject forcedName, bool isConsoleOnly)`

**用途 / Purpose:** 创建一个 `from forced i d` 实例或对象。

## 使用示例

```csharp
var value = new InputKeyItemVM();
value.OnFinalize();
```

## 参见

- [完整类目录](../catalog)