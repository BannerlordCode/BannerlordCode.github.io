<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IPlatformFileHelper`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IPlatformFileHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `class`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/IPlatformFileHelper.cs`

## 概述

`IPlatformFileHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `IPlatformFileHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
IPlatformFileHelper implementation = GetPlatformFileHelperImplementation();
```

## 参见

- [完整类目录](../catalog)