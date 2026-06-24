<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoardGameHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class BoardGameHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/BoardGameHelper.cs`

## 概述

`BoardGameHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `BoardGameHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
BoardGameHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)