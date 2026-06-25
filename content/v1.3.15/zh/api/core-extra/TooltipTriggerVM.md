---
title: "TooltipTriggerVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TooltipTriggerVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TooltipTriggerVM

**Namespace:** TaleWorlds.Library.Information
**Module:** TaleWorlds.Library
**Type:** `public class TooltipTriggerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Library/Information/TooltipTriggerVM.cs`

## 概述

`TooltipTriggerVM` 位于 `TaleWorlds.Library.Information`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library.Information` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**用途 / Purpose:** 执行 `begin hint` 操作或流程。

### ExecuteEndHint
`public void ExecuteEndHint()`

**用途 / Purpose:** 执行 `end hint` 操作或流程。

## 使用示例

```csharp
var value = new TooltipTriggerVM();
value.ExecuteBeginHint();
```

## 参见

- [完整类目录](../catalog)