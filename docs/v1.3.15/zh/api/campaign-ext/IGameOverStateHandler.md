<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IGameOverStateHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IGameOverStateHandler

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/GameState/IGameOverStateHandler.cs`

## 概述

`IGameOverStateHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `IGameOverStateHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
IGameOverStateHandler implementation = GetGameOverStateHandlerImplementation();
```

## 参见

- [完整类目录](../catalog)