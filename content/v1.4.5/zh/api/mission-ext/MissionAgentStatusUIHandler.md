---
title: "MissionAgentStatusUIHandler"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionAgentStatusUIHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentStatusUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentStatusUIHandler : MissionBattleUIBaseView, IInteractionInterfaceHandler`
**Base:** `MissionBattleUIBaseView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionAgentStatusUIHandler.cs`

## 概述

`MissionAgentStatusUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionAgentStatusUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddInteractionMessage
`public virtual void AddInteractionMessage(MissionInteractionItemBaseVM message)`

**用途 / Purpose:** 向当前集合/状态中添加 `interaction message`。

### RemoveInteractionMessage
`public virtual void RemoveInteractionMessage(MissionInteractionItemBaseVM message)`

**用途 / Purpose:** 从当前集合/状态中移除 `interaction message`。

### HasInteractionMessage
`public virtual bool HasInteractionMessage(MissionInteractionItemBaseVM message)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `interaction message`。

## 使用示例

```csharp
MissionAgentStatusUIHandler implementation = GetMissionAgentStatusUIHandlerImplementation();
```

## 参见

- [完整类目录](../catalog)