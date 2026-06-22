<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BasicMissionHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BasicMissionHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/BasicMissionHandler.cs`

## 概述

`BasicMissionHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsWarningWidgetOpened` | `public bool IsWarningWidgetOpened { get; }` |

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### CreateWarningWidgetForResult
```csharp
public void CreateWarningWidgetForResult(BattleEndLogic.ExitResult result)
```

## 使用示例

```csharp
// BasicMissionHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new BasicMissionHandler());
```

## 参见

- [完整类目录](../catalog)