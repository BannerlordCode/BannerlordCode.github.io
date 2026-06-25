---
title: "IMissionSystemHandler"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IMissionSystemHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IMissionSystemHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMissionSystemHandler.cs`

## 概述

`IMissionSystemHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `IMissionSystemHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
IMissionSystemHandler implementation = GetMissionSystemHandlerImplementation();
```

## 参见

- [完整类目录](../catalog)