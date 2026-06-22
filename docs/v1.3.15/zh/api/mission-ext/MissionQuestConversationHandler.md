<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionQuestConversationHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionQuestConversationHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionQuestConversationHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionQuestConversationHandler.cs`

## 概述

`MissionQuestConversationHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要方法

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

## 使用示例

```csharp
// MissionQuestConversationHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new MissionQuestConversationHandler());
```

## 参见

- [完整类目录](../catalog)