<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationViewEventHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationViewEventHandler

**Namespace:** SandBox.View.Conversation
**Module:** SandBox.View
**Type:** `public class ConversationViewEventHandler : Attribute`
**Base:** `Attribute`
**File:** `SandBox.View/Conversation/ConversationViewEventHandler.cs`

## 概述

`ConversationViewEventHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `ConversationViewEventHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Type` | `public ConversationViewEventHandler.EventType Type { get; }` |

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new ConversationViewEventHandler());
```

## 参见

- [完整类目录](../catalog)