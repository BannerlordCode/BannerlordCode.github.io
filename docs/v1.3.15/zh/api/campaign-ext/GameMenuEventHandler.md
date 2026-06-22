<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuEventHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuEventHandler

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuEventHandler : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuEventHandler.cs`

## 概述

`GameMenuEventHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要属性

| Name | Signature |
|------|-----------|
| `MenuId` | `public string MenuId { get; }` |
| `MenuOptionId` | `public string MenuOptionId { get; }` |
| `Type` | `public GameMenuEventHandler.EventType Type { get; }` |

## 使用示例

```csharp
// GameMenuEventHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new GameMenuEventHandler());
```

## 参见

- [完整类目录](../catalog)