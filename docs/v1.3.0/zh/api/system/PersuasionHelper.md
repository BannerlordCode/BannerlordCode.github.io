<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PersuasionHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PersuasionHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PersuasionHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/PersuasionHelper.cs`

## 概述

`PersuasionHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `PersuasionHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ShowSuccess
`public static TextObject ShowSuccess(PersuasionOptionArgs optionArgs, bool showToPlayer = true)`

**用途 / Purpose:** 处理 `show success` 相关逻辑。

### GetDefaultPersuasionOptionReaction
`public static TextObject GetDefaultPersuasionOptionReaction(PersuasionOptionResult optionResult)`

**用途 / Purpose:** 获取 `default persuasion option reaction` 的当前值。

## 使用示例

```csharp
PersuasionHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)