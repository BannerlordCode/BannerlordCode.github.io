<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMessageUIHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMessageUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMessageUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionMessageUIHandler.cs`

## 概述

`MissionMessageUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionMessageUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ShowMessage
`public void ShowMessage(string str, float duration, bool hasPriority = true)`

**用途 / Purpose:** 处理 `show message` 相关逻辑。

### DeleteMessage
`public void DeleteMessage(string str)`

**用途 / Purpose:** 处理 `delete message` 相关逻辑。

### DeleteCurrentMessage
`public void DeleteCurrentMessage()`

**用途 / Purpose:** 处理 `delete current message` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionMessageUIHandler());
```

## 参见

- [完整类目录](../catalog)