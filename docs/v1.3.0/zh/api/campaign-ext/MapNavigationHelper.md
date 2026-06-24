<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapNavigationHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapNavigationHelper

**Namespace:** SandBox.View.Map.Navigation
**Module:** SandBox.View
**Type:** `public static class MapNavigationHelper`
**Base:** 无
**File:** `SandBox.View/Map/Navigation/MapNavigationHelper.cs`

## 概述

`MapNavigationHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MapNavigationHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetUnsavedChangedInquiry
`public static InquiryData GetUnsavedChangedInquiry()`

**用途 / Purpose:** 获取 `unsaved changed inquiry` 的当前值。

### GetUnapplicableChangedInquiry
`public static InquiryData GetUnapplicableChangedInquiry()`

**用途 / Purpose:** 获取 `unapplicable changed inquiry` 的当前值。

### IsMapTopScreen
`public static bool IsMapTopScreen()`

**用途 / Purpose:** 处理 `is map top screen` 相关逻辑。

### IsNavigationBarEnabled
`public static bool IsNavigationBarEnabled(MapNavigationHandler handler)`

**用途 / Purpose:** 处理 `is navigation bar enabled` 相关逻辑。

### ApplyCurrentChanges
`public static void ApplyCurrentChanges()`

**用途 / Purpose:** 将 `current changes` 应用到当前对象。

## 使用示例

```csharp
MapNavigationHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)