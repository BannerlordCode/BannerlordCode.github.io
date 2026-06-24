<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TooltipRegistry`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TooltipRegistry

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** `public struct TooltipRegistry`
**领域:** core-extra

## 概述

`TooltipRegistry` 位于 `TaleWorlds.Library`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RegisteredTypes` | `public static IReadOnlyDictionary<Type, InformationManager.TooltipRegistry> RegisteredTypes { get; }` |

## 主要方法

### IsAnyInquiryActive
`public static bool IsAnyInquiryActive()`

**用途 / Purpose:** 处理 `is any inquiry active` 相关逻辑。

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

### GetIsAnyTooltipActive
`public static bool GetIsAnyTooltipActive()`

**用途 / Purpose:** 获取 `is any tooltip active` 的当前值。

### GetIsAnyTooltipActiveAndExtended
`public static bool GetIsAnyTooltipActiveAndExtended()`

**用途 / Purpose:** 获取 `is any tooltip active and extended` 的当前值。

### Clear
`public static void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### IsAnyTooltipActiveDelegate
`public delegate void IsAnyTooltipActiveDelegate(out bool isAnyTooltipActive, out bool isAnyTooltipExtended)`

**用途 / Purpose:** 处理 `is any tooltip active delegate` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
TooltipRegistry.IsAnyInquiryActive();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
