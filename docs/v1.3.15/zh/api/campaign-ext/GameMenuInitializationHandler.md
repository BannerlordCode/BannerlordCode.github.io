<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuInitializationHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuInitializationHandler

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuInitializationHandler : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuInitializationHandler.cs`

## 概述

`GameMenuInitializationHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要属性

| Name | Signature |
|------|-----------|
| `MenuId` | `public string MenuId { get; }` |

## 使用示例

```csharp
// GameMenuInitializationHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new GameMenuInitializationHandler());
```

## 参见

- [完整类目录](../catalog)