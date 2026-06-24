<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DialogHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DialogHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class DialogHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/DialogHelper.cs`

## 概述

`DialogHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `DialogHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetDialogString
`public static void SetDialogString(string stringVariable, string gameTextId)`

**用途 / Purpose:** 设置 `dialog string` 的值或状态。

## 使用示例

```csharp
DialogHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)