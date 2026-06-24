<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InformationManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# InformationManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class InformationManager`
**Base:** 无
**File:** `TaleWorlds.Library/InformationManager.cs`

## 概述

`InformationManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `InformationManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RegisteredTypes` | `public static IReadOnlyDictionary<Type, InformationManager.TooltipRegistry> RegisteredTypes { get; }` |

## 主要方法

### DisplayMessage
`public static void DisplayMessage(InformationMessage message)`

**用途 / Purpose:** 处理 `display message` 相关逻辑。

### HideAllMessages
`public static void HideAllMessages()`

**用途 / Purpose:** 处理 `hide all messages` 相关逻辑。

### ClearAllMessages
`public static void ClearAllMessages()`

**用途 / Purpose:** 处理 `clear all messages` 相关逻辑。

### AddSystemNotification
`public static void AddSystemNotification(string message)`

**用途 / Purpose:** 向当前集合/状态中添加 `system notification`。

### ShowTooltip
`public static void ShowTooltip(Type type, params object args)`

**用途 / Purpose:** 处理 `show tooltip` 相关逻辑。

### HideTooltip
`public static void HideTooltip()`

**用途 / Purpose:** 处理 `hide tooltip` 相关逻辑。

### ShowInquiry
`public static void ShowInquiry(InquiryData data, bool pauseGameActiveState = false, bool prioritize = false)`

**用途 / Purpose:** 处理 `show inquiry` 相关逻辑。

### ShowTextInquiry
`public static void ShowTextInquiry(TextInquiryData textData, bool pauseGameActiveState = false, bool prioritize = false)`

**用途 / Purpose:** 处理 `show text inquiry` 相关逻辑。

### HideInquiry
`public static void HideInquiry()`

**用途 / Purpose:** 处理 `hide inquiry` 相关逻辑。

### RegisterIsAnyTooltipActiveCallback
`public static void RegisterIsAnyTooltipActiveCallback(Func<bool> callback)`

**用途 / Purpose:** 处理 `register is any tooltip active callback` 相关逻辑。

### UnregisterIsAnyTooltipActiveCallback
`public static void UnregisterIsAnyTooltipActiveCallback(Func<bool> callback)`

**用途 / Purpose:** 处理 `unregister is any tooltip active callback` 相关逻辑。

### RegisterIsAnyTooltipExtendedCallback
`public static void RegisterIsAnyTooltipExtendedCallback(Func<bool> callback)`

**用途 / Purpose:** 处理 `register is any tooltip extended callback` 相关逻辑。

### UnregisterIsAnyTooltipExtendedCallback
`public static void UnregisterIsAnyTooltipExtendedCallback(Func<bool> callback)`

**用途 / Purpose:** 处理 `unregister is any tooltip extended callback` 相关逻辑。

### GetIsAnyTooltipActive
`public static bool GetIsAnyTooltipActive()`

**用途 / Purpose:** 获取 `is any tooltip active` 的当前值。

### GetIsAnyTooltipExtended
`public static bool GetIsAnyTooltipExtended()`

**用途 / Purpose:** 获取 `is any tooltip extended` 的当前值。

### GetIsAnyTooltipActiveAndExtended
`public static bool GetIsAnyTooltipActiveAndExtended()`

**用途 / Purpose:** 获取 `is any tooltip active and extended` 的当前值。

### Clear
`public static void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

## 使用示例

```csharp
var manager = InformationManager.Current;
```

## 参见

- [完整类目录](../catalog)