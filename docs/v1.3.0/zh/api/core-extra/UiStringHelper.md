<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UiStringHelper`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# UiStringHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class UiStringHelper`
**Base:** 无
**File:** `TaleWorlds.Library/UiStringHelper.cs`

## 概述

`UiStringHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `UiStringHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsStringNoneOrEmptyForUi
`public static bool IsStringNoneOrEmptyForUi(string str)`

**用途 / Purpose:** 处理 `is string none or empty for ui` 相关逻辑。

## 使用示例

```csharp
UiStringHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)