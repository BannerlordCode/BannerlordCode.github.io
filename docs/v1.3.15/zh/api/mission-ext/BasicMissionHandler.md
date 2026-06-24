<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BasicMissionHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BasicMissionHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/BasicMissionHandler.cs`

## 概述

`BasicMissionHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `BasicMissionHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsWarningWidgetOpened` | `public bool IsWarningWidgetOpened { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### CreateWarningWidgetForResult
`public void CreateWarningWidgetForResult(BattleEndLogic.ExitResult result)`

**用途 / Purpose:** 创建一个 `warning widget for result` 实例或对象。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new BasicMissionHandler());
```

## 参见

- [完整类目录](../catalog)