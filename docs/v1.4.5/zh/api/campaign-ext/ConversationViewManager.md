<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationViewManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationViewManager

**Namespace:** SandBox.View.Conversation
**Module:** SandBox.View
**Type:** `public class ConversationViewManager`
**Base:** 无
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Conversation/ConversationViewManager.cs`

## 概述

`ConversationViewManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ConversationViewManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var manager = ConversationViewManager.Current;
```

## 参见

- [完整类目录](../catalog)